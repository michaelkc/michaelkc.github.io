(function() {
  const lunrCDN = "https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js";
  const lunrIntegrity = "sha512-4xUl/d6D6THrAnXAwGajXkoWaeMNwEKK4iNfq5DotEbLPAfk6FSxSP3ydNxqDgCw1c/0Z1Jg6L8h2j+++9BZmg==";
  
  function loadScript(src, integrity) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.integrity = integrity;
      script.crossOrigin = "anonymous";
      script.onload = resolve;
      script.onerror = () => reject(new Error("Failed to load script: " + src));
      document.head.appendChild(script);
    });
  }
  
  let lunrIndex;
  let searchData = [];
  let currentQuery = "";
  
  async function initializeSearch() {
    try {
      await loadScript(lunrCDN, lunrIntegrity);
      const response = await fetch("/search.json");
      if (!response.ok) {
        console.error("Error fetching search index:", response.statusText);
        return;
      }
      searchData = await response.json();
      lunrIndex = lunr(function() {
        this.ref("url");
        this.field("title");
        this.field("content");
        searchData.forEach(function(doc) {
          this.add(doc);
        }, this);
      });
      console.log("Search index initialized", lunrIndex);
    } catch (error) {
      console.error("Search temporarily unavailable:", error);
    }
  }
  
  function performSearch(query) {
    if (!query || query.trim().length < 3) {
      console.log("Query too short. Minimum 3 characters required.");
      return [];
    }
    let results = [];
    try {
      results = lunrIndex.search(query)
                     .slice(0, 10)
                     .map(function(result) {
                       return searchData.find(doc => doc.url === result.ref);
                     });
      console.log("Search results for", query, results);
    } catch (error) {
      console.error("Search error:", error);
    }
    return results;
  }
  
  // Debounce function for delaying search execution
  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  function truncateContent(content, maxLength) {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  }
  
  function parseSearchTerms(query) {
    return query.match(/\b\w+\b/g) || [];
  }
  
  function highlightSearchTerms(text, searchQuery) {
    const terms = parseSearchTerms(searchQuery);
    let highlighted = text;
    terms.forEach(term => {
      const regex = new RegExp('\\b(' + term.replace(/[-\\/\\^$*+?.()|[\\]{}]/g, '\\$&') + ')\\b', 'gi');
      highlighted = highlighted.replace(regex, '<strong>$1</strong>');
    });
    return highlighted;
  }
  
  function displayResults(results) {
    const dropdown = document.querySelector('.search-dropdown');
    dropdown.innerHTML = '';
    if (results.length === 0) {
      const noResult = document.createElement('div');
      noResult.className = 'search-no-results';
      noResult.textContent = 'No results found';
      dropdown.appendChild(noResult);
      return;
    }
    results.forEach(result => {
      const link = document.createElement('a');
      link.href = result.url;
      link.className = 'search-result';
      const titleEl = document.createElement('div');
      titleEl.className = 'search-result-title';
      titleEl.innerHTML = highlightSearchTerms(result.title, currentQuery);
      const snippetEl = document.createElement('div');
      snippetEl.className = 'search-result-snippet';
      snippetEl.innerHTML = highlightSearchTerms(truncateContent(result.content, 150), currentQuery);
      link.appendChild(titleEl);
      link.appendChild(snippetEl);
      dropdown.appendChild(link);
    });
  }

  function clearResults() {
    const dropdown = document.querySelector('.search-dropdown');
    dropdown.innerHTML = '';
  }

  // Dropdown show/hide functions
  function showDropdown() {
    const dropdown = document.querySelector('.search-dropdown');
    dropdown.style.display = 'block';
  }

  function hideDropdown() {
    const dropdown = document.querySelector('.search-dropdown');
    dropdown.style.display = 'none';
  }

  // Close dropdown when clicking outside
  function setupClickOutside() {
    document.addEventListener('click', function(e) {
      const searchContainer = document.querySelector('.search-container');
      if (!searchContainer.contains(e.target)) {
        hideDropdown();
      }
    });
  }

  // Close dropdown on Escape key press
  function setupEscapeKey() {
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        hideDropdown();
      }
    });
  }

  // When a search result is clicked, navigate and close dropdown
  function setupResultClick() {
    const dropdown = document.querySelector('.search-dropdown');
    dropdown.addEventListener('click', function(e) {
      const link = e.target.closest('.search-result');
      if (link) {
        hideDropdown();
      }
    });
  }
  
  function handleKeyboardNavigation(e) {
    const dropdown = document.querySelector('.search-dropdown');
    const results = dropdown.querySelectorAll('.search-result');
    if (results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentHighlightedIndex = (currentHighlightedIndex + 1) % results.length;
      highlightResult(currentHighlightedIndex, results);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentHighlightedIndex = (currentHighlightedIndex - 1 + results.length) % results.length;
      highlightResult(currentHighlightedIndex, results);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentHighlightedIndex >= 0 && currentHighlightedIndex < results.length) {
        window.location.href = results[currentHighlightedIndex].href;
        hideDropdown();
      }
    }
  }
  
  function highlightResult(index, results) {
    results.forEach((result, i) => {
      if (i === index) {
        result.classList.add('keyboard-focused');
        result.focus();
      } else {
        result.classList.remove('keyboard-focused');
      }
    });
  }
  
  let currentHighlightedIndex = -1;
  
  function setupKeyboardNavigation() {
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keydown', handleKeyboardNavigation);
  }
  
  function setupEventListeners() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) {
      console.error('Search input not found');
      return;
    }
    searchInput.addEventListener('input', debounce(function(e) {
      const query = e.target.value;
      currentQuery = query;
      if (query.trim().length < 3) {
        clearResults();
        hideDropdown();
        return;
      }
      const results = performSearch(query);
      displayResults(results);
      showDropdown();
    }, 200));
  }

  document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    setupEventListeners();
    setupKeyboardNavigation();
    setupClickOutside();
    setupEscapeKey();
    setupResultClick();
  });

  // Export functions to global scope
  window.initializeSearch = initializeSearch;
  window.performSearch = performSearch;
  window.debounceSearch = debounce;
})();
