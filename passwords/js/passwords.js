// Secure Password Generator
// All generation happens client-side, nothing leaves the browser

// Configuration
const CONFIG = {
    // Character sets for random password generation
    // Excludes problematic chars: ' " < > ` \ # % & * / : [ ] ^ { | }
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!$()+-.,;=@_~',
    
    // Ambiguous characters that can be easily confused
    ambiguous: 'il1IoO0',
    
    // Separators for passphrase words (when using random separator option)
    separators: ['-', '_', '.', '+', '=', '~'],
    
    // SRI hash for wordlist integrity verification
    wordlistSRI: 'sha384-rE5M6hi9Rikh2vOevaeMWoE2DVQEs6u9zrsY1Q7B7UC+svu9BbyZ/DJ7DHkO3+TK'
};

// Global wordlist
let wordlist = [];

// Initialize on page load
window.addEventListener('DOMContentLoaded', async () => {
    await loadWordlist();
    setupEventListeners();
});

// Setup UI event listeners
function setupEventListeners() {
    // Type radio buttons
    const typeRadios = document.querySelectorAll('input[name="type"]');
    typeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const passphraseOptions = document.getElementById('passphrase-options');
            const randomOptions = document.getElementById('random-options');
            
            if (e.target.value === 'passphrase') {
                passphraseOptions.classList.remove('hidden');
                randomOptions.classList.add('hidden');
            } else {
                passphraseOptions.classList.add('hidden');
                randomOptions.classList.remove('hidden');
            }
            updateEntropyDisplay();
        });
    });
    
    // Generate button
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', generatePasswords);
    
    // Update entropy when options change
    const inputs = document.querySelectorAll('input[type="number"], input[type="checkbox"], input[type="range"]');
    inputs.forEach(input => {
        input.addEventListener('change', updateEntropyDisplay);
        input.addEventListener('input', updateEntropyDisplay);
    });
    
    // Update slider value displays
    const wordCountSlider = document.getElementById('word-count');
    const wordCountValue = document.getElementById('word-count-value');
    wordCountSlider.addEventListener('input', () => {
        wordCountValue.textContent = wordCountSlider.value;
    });
    
    const charLengthSlider = document.getElementById('char-length');
    const charLengthValue = document.getElementById('char-length-value');
    charLengthSlider.addEventListener('input', () => {
        charLengthValue.textContent = charLengthSlider.value;
    });
    
    const countSlider = document.getElementById('count');
    const countValue = document.getElementById('count-value');
    countSlider.addEventListener('input', () => {
        countValue.textContent = countSlider.value;
    });
    
    // Initial entropy display
    updateEntropyDisplay();
}

// Load and decompress the EFF wordlist
async function loadWordlist() {
    const loadingEl = document.getElementById('loading');
    const generateBtn = document.getElementById('generate-btn');
    
    loadingEl.style.display = 'block';
    generateBtn.disabled = true;
    
    try {
        const response = await fetch('eff_large_wordlist.txt.gz');
        const compressedData = await response.arrayBuffer();
        
        // Verify integrity using SRI
        const hashAlgorithm = CONFIG.wordlistSRI.split('-')[0];
        const expectedHash = CONFIG.wordlistSRI.split('-')[1];
        
        // Map SRI algorithm names to SubtleCrypto names
        const algorithmMap = {
            'sha256': 'SHA-256',
            'sha384': 'SHA-384',
            'sha512': 'SHA-512'
        };
        
        const cryptoAlgorithm = algorithmMap[hashAlgorithm.toLowerCase()];
        if (!cryptoAlgorithm) {
            throw new Error(`Unsupported hash algorithm: ${hashAlgorithm}`);
        }
        
        const hashBuffer = await crypto.subtle.digest(cryptoAlgorithm, compressedData);
        const hashArray = new Uint8Array(hashBuffer);
        
        // Properly encode binary data to base64
        let binary = '';
        for (let i = 0; i < hashArray.length; i++) {
            binary += String.fromCharCode(hashArray[i]);
        }
        const hashBase64 = btoa(binary);
        
        if (hashBase64 !== expectedHash) {
            throw new Error('Wordlist integrity check failed. The file may have been tampered with.');
        }
        
        // Decompress using browser's DecompressionStream
        let decompressed;
        if (typeof DecompressionStream !== 'undefined') {
            // Modern browsers
            const stream = new Response(
                new Blob([compressedData]).stream().pipeThrough(
                    new DecompressionStream('gzip')
                )
            );
            decompressed = await stream.text();
        } else {
            throw new Error('Browser does not support DecompressionStream');
        }
        
        // Parse the wordlist
        const lines = decompressed.split('\n');
        wordlist = lines
            .filter(line => line.trim())
            .map(line => {
                const parts = line.split('\t');
                return parts.length > 1 ? parts[1].trim() : null;
            })
            .filter(word => word);
        
        console.log(`Loaded ${wordlist.length} words`);
        
    } catch (error) {
        console.error('Error loading wordlist:', error);
        alert('Error loading wordlist. Please refresh the page.');
        wordlist = []; // Ensure wordlist is empty on error
    } finally {
        loadingEl.style.display = 'none';
        // Only enable button if wordlist loaded successfully
        if (wordlist.length > 0) {
            generateBtn.disabled = false;
        }
    }
}

// Generate cryptographically secure random integer using rejection sampling
function getSecureRandomInt(max) {
    const array = new Uint32Array(1);
    const maxUint32 = 0xFFFFFFFF;
    const range = maxUint32 - (maxUint32 % max);
    
    let value;
    do {
        crypto.getRandomValues(array);
        value = array[0];
    } while (value >= range);
    
    return value % max;
}

// Generate a passphrase
function generatePassphrase(wordCount, capitalize, randomSeparator) {
    if (wordlist.length === 0) {
        throw new Error('Wordlist not loaded');
    }
    
    const words = [];
    for (let i = 0; i < wordCount; i++) {
        const index = getSecureRandomInt(wordlist.length);
        let word = wordlist[index];
        
        // Capitalize first letter if option is enabled
        if (capitalize) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        
        words.push(word);
    }
    
    // Choose separator
    let separator = '-';
    if (randomSeparator) {
        const sepIndex = getSecureRandomInt(CONFIG.separators.length);
        separator = CONFIG.separators[sepIndex];
    }
    
    return words.join(separator);
}

// Generate a random character password
function generateRandomPassword(length, useUppercase, useLowercase, useNumbers, useSymbols, excludeAmbiguous) {
    let charset = '';
    const charsets = [];
    
    // Helper function to remove ambiguous characters from a string
    const removeAmbiguous = (str) => {
        if (!excludeAmbiguous) return str;
        return str.split('').filter(c => !CONFIG.ambiguous.includes(c)).join('');
    };
    
    if (useLowercase) {
        const chars = removeAmbiguous(CONFIG.lowercase);
        charset += chars;
        charsets.push(chars);
    }
    if (useUppercase) {
        const chars = removeAmbiguous(CONFIG.uppercase);
        charset += chars;
        charsets.push(chars);
    }
    if (useNumbers) {
        const chars = removeAmbiguous(CONFIG.numbers);
        charset += chars;
        charsets.push(chars);
    }
    if (useSymbols) {
        charset += CONFIG.symbols;
        charsets.push(CONFIG.symbols);
    }
    
    if (charset.length === 0) {
        throw new Error('At least one character type must be selected');
    }
    
    // Ensure we have at least one character from each selected charset
    let password = '';
    for (const set of charsets) {
        if (set.length === 0) continue;
        const index = getSecureRandomInt(set.length);
        password += set[index];
    }
    
    // Fill the rest with random characters from the full charset
    for (let i = password.length; i < length; i++) {
        const index = getSecureRandomInt(charset.length);
        password += charset[index];
    }
    
    // Shuffle the password to avoid predictable patterns (Fisher-Yates)
    const chars = password.split('');
    for (let i = chars.length - 1; i > 0; i--) {
        const j = getSecureRandomInt(i + 1);
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    
    return chars.join('');
}

// Main password generation function
function generatePasswords() {
    const type = document.querySelector('input[name="type"]:checked').value;
    const count = parseInt(document.getElementById('count').value);
    const resultsDiv = document.getElementById('results');
    
    // Validate count
    if (count < 1 || count > 20) {
        alert('Please generate between 1 and 20 passwords');
        return;
    }
    
    const passwords = [];
    
    try {
        if (type === 'passphrase') {
            const wordCount = parseInt(document.getElementById('word-count').value);
            const capitalize = document.getElementById('capitalize-words').checked;
            const randomSeparator = document.getElementById('random-separator').checked;
            
            if (wordCount < 3 || wordCount > 7) {
                alert('Please use between 3 and 7 words');
                return;
            }
            
            for (let i = 0; i < count; i++) {
                passwords.push(generatePassphrase(wordCount, capitalize, randomSeparator));
            }
        } else {
            const length = parseInt(document.getElementById('char-length').value);
            const useUppercase = document.getElementById('use-uppercase').checked;
            const useLowercase = document.getElementById('use-lowercase').checked;
            const useNumbers = document.getElementById('use-numbers').checked;
            const useSymbols = document.getElementById('use-symbols').checked;
            const excludeAmbiguous = document.getElementById('exclude-ambiguous').checked;
            
            if (length < 12 || length > 60) {
                alert('Please use a length between 12 and 60 characters');
                return;
            }
            
            for (let i = 0; i < count; i++) {
                passwords.push(generateRandomPassword(length, useUppercase, useLowercase, useNumbers, useSymbols, excludeAmbiguous));
            }
        }
        
        displayResults(passwords);
        
    } catch (error) {
        alert('Error generating passwords: ' + error.message);
    }
}

// Display results with copy buttons
function displayResults(passwords) {
    const resultsDiv = document.getElementById('results');
    
    let html = '<h2>Generated Passwords</h2>';
    html += '<div class="password-output">';
    
    passwords.forEach((password, index) => {
        html += `
            <div class="password-item">
                <span class="password-text">${escapeHtml(password)}</span>
                <button class="copy-btn" data-password="${escapeHtml(password)}">Copy</button>
            </div>
        `;
    });
    
    html += '</div>';
    html += '<button id="copy-all-btn">Copy All</button>';
    
    resultsDiv.innerHTML = html;
    
    // Add event listeners to copy buttons
    const copyButtons = resultsDiv.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            copyToClipboard(this.dataset.password, this);
        });
    });
    
    // Add event listener to copy all button
    const copyAllBtn = document.getElementById('copy-all-btn');
    copyAllBtn.addEventListener('click', copyAllToClipboard);
}

// Copy single password to clipboard
async function copyToClipboard(text, button) {
    try {
        await navigator.clipboard.writeText(text);
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    } catch (error) {
        alert('Failed to copy to clipboard');
    }
}

// Copy all passwords to clipboard
async function copyAllToClipboard() {
    const passwordTexts = Array.from(document.querySelectorAll('.password-text'))
        .map(el => el.textContent);
    
    try {
        await navigator.clipboard.writeText(passwordTexts.join('\n'));
        alert('All passwords copied to clipboard!');
    } catch (error) {
        alert('Failed to copy to clipboard');
    }
}

// Calculate and display current entropy
function updateEntropyDisplay() {
    const type = document.querySelector('input[name="type"]:checked').value;
    let entropy = 0;
    
    if (type === 'passphrase') {
        const wordCount = parseInt(document.getElementById('word-count').value) || 3;
        // EFF large wordlist has 7776 words (6^5)
        // Entropy = log2(7776^wordCount) = wordCount * log2(7776)
        entropy = wordCount * Math.log2(7776);
    } else {
        const length = parseInt(document.getElementById('char-length').value) || 16;
        const useUppercase = document.getElementById('use-uppercase').checked;
        const useLowercase = document.getElementById('use-lowercase').checked;
        const useNumbers = document.getElementById('use-numbers').checked;
        const useSymbols = document.getElementById('use-symbols').checked;
        const excludeAmbiguous = document.getElementById('exclude-ambiguous').checked;
        
        // Calculate character set size
        let charsetSize = 0;
        
        const removeAmbiguous = (str) => {
            if (!excludeAmbiguous) return str;
            return str.split('').filter(c => !CONFIG.ambiguous.includes(c)).join('');
        };
        
        if (useLowercase) charsetSize += removeAmbiguous(CONFIG.lowercase).length;
        if (useUppercase) charsetSize += removeAmbiguous(CONFIG.uppercase).length;
        if (useNumbers) charsetSize += removeAmbiguous(CONFIG.numbers).length;
        if (useSymbols) charsetSize += CONFIG.symbols.length;
        
        if (charsetSize > 0) {
            // Entropy = log2(charsetSize^length) = length * log2(charsetSize)
            entropy = length * Math.log2(charsetSize);
        }
    }
    
    const entropyDisplay = document.getElementById('entropy-display');
    if (entropy > 0) {
        entropyDisplay.textContent = `~${Math.round(entropy)} bits of entropy`;
    } else {
        entropyDisplay.textContent = '';
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}