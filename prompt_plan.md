# Jekyll Blog Search Implementation Blueprint

## Project Analysis

### Current Repository State
- Jekyll blog using minima theme
- 2 existing posts (2020 and 2024)
- Standard Jekyll configuration
- GitHub Pages deployment
- No existing search functionality

### Implementation Strategy
Build incrementally from data layer up to user interface, ensuring each step is functional and testable.

## Detailed Implementation Plan

### Phase 1: Data Foundation
1. **Search Index Generation** - Create JSON endpoint for search data
2. **Index Validation** - Ensure proper JSON formatting and content processing

### Phase 2: Core Search Infrastructure  
3. **Search JavaScript Foundation** - Basic lunr.js integration and index loading
4. **Search Logic Implementation** - Core search functionality with error handling

### Phase 3: User Interface
5. **Header Integration** - Add search box to site header
6. **Search Dropdown UI** - Results display and interaction
7. **Keyboard Navigation** - Full keyboard accessibility

### Phase 4: Polish & Optimization
8. **Styling & Responsiveness** - Mobile-friendly design
9. **Performance & Testing** - Optimization and comprehensive testing

## Step-by-Step Implementation Chunks

### Step 1: Search Index JSON Generation
**Complexity**: Low  
**Risk**: Low  
**Dependencies**: None  
**Deliverable**: Functional `/search.json` endpoint with all posts indexed

### Step 2: Search JavaScript Foundation
**Complexity**: Medium  
**Risk**: Medium  
**Dependencies**: Step 1  
**Deliverable**: lunr.js loaded, search index built, basic search function working

### Step 3: Header Override and Search Box
**Complexity**: Low  
**Risk**: Low  
**Dependencies**: None (can work independently)  
**Deliverable**: Search input box visible in header

### Step 4: Search Results Display
**Complexity**: Medium  
**Risk**: Low  
**Dependencies**: Steps 2, 3  
**Deliverable**: Search results showing in dropdown with basic formatting

### Step 5: Search Interaction Logic
**Complexity**: Medium  
**Risk**: Low  
**Dependencies**: Step 4  
**Deliverable**: Debounced search, dropdown open/close, click handling

### Step 6: Search Term Highlighting
**Complexity**: Low  
**Risk**: Low  
**Dependencies**: Step 5  
**Deliverable**: Search terms highlighted in results

### Step 7: Keyboard Navigation
**Complexity**: Medium  
**Risk**: Low  
**Dependencies**: Step 5  
**Deliverable**: Arrow keys, Enter, Escape navigation working

### Step 8: Mobile Responsiveness & Styling
**Complexity**: Medium  
**Risk**: Low  
**Dependencies**: Steps 1-7  
**Deliverable**: Mobile-optimized search with proper styling

## Implementation Prompts

---

## Prompt 1: Search Index JSON Generation

```
I need to create a search index for a Jekyll blog. Based on the repository structure, I have a Jekyll site with posts in _posts/ directory using the minima theme.

Create a search.json file in the root directory that:
1. Uses Jekyll's Liquid templating to generate a JSON array of all posts
2. Each post object should contain: title, content (HTML stripped), url, and date
3. Properly escapes content for JSON (handles quotes, newlines, special characters)
4. Uses Jekyll's built-in filters like jsonify, strip_html, normalize_whitespace
5. Follows the exact structure specified in the requirements

The file should be placed at `/search.json` and generate valid JSON that can be consumed by JavaScript.

Requirements from spec:
- Strip all HTML tags from post content
- Properly escape special characters and quotes for JSON
- Handle unicode and special characters safely
- Post object structure: {"title": "...", "content": "...", "url": "...", "date": "..."}

Please provide the complete search.json file with proper Jekyll front matter and Liquid templating.
```

---

## Prompt 2: Search JavaScript Foundation

```
Now I need to create the core search functionality JavaScript file. I have a working /search.json endpoint from the previous step.

Create assets/js/search.js that:
1. Loads lunr.js from CDN with integrity hash for security
2. Fetches the search index from /search.json
3. Builds a lunr search index with title and content fields
4. Implements basic search functionality with proper error handling
5. Includes a simple initialization function

Requirements:
- Use jsDelivr or cdnjs for lunr.js with SHA integrity attribute
- Handle network errors gracefully (display "Search temporarily unavailable")
- Debounce search with 200ms delay
- Minimum 3 characters before searching
- Return maximum 10 results
- Case-insensitive search

For now, just implement the core search logic without UI - we'll add the DOM manipulation in the next step. Include console.log statements to verify the search is working.

The file should export or make available these key functions:
- initializeSearch()
- performSearch(query)

Please provide the complete search.js file with proper error handling and modern JavaScript practices.
```

---

## Prompt 3: Header Override and Search Box

```
I need to override the minima theme's header to add a search box. Based on the Jekyll configuration, I'm using the minima theme.

Create _includes/header.html that:
1. Copies the existing minima theme header structure 
2. Adds a search input box in the navigation area
3. Maintains all existing header functionality and styling
4. Includes proper HTML structure for the search dropdown
5. Links to the search.js and search.css files

Requirements:
- Search box should be in the header navigation area
- Use semantic HTML with proper ARIA labels
- Include a container for search results dropdown
- Maintain responsive behavior of the original header
- Include the search JavaScript and CSS files

HTML structure needed:
```html
<div class="search-container">
  <input type="text" class="search-input" placeholder="Search posts..." 
         aria-label="Search blog posts" role="searchbox">
  <div class="search-dropdown" role="listbox" aria-label="Search results">
    <!-- Results will be populated by JavaScript -->
  </div>
</div>
```

Please provide the complete header.html file that maintains the minima theme structure while adding the search functionality. You can reference the minima theme's default header structure from GitHub if needed.
```

---

## Prompt 4: Search Results Display

```
Now I need to connect the search functionality to the UI and display results. I have:
- Working /search.json endpoint
- Core search JavaScript (assets/js/search.js)  
- Header with search input box (_includes/header.html)

Update the search.js file to:
1. Add DOM manipulation functions to display search results
2. Connect the search input to the search functionality
3. Show results in the dropdown with proper formatting
4. Handle "no results found" state
5. Truncate content to 150 characters with ellipses

Requirements:
- Display post title + content snippet (max 150 characters)
- Show "No results found" when no matches exist
- Clear results when input is less than 3 characters
- Format results as clickable links to posts
- Use ellipses (...) for truncated content

Functions to implement:
- displayResults(results) - renders results in dropdown
- truncateContent(content, maxLength) - creates snippets
- clearResults() - clears the dropdown
- setupEventListeners() - connects input events

The results should display in the .search-dropdown container that was added to the header. Each result should be a clickable element that navigates to the post.

Please provide the updated search.js file that connects to the DOM and displays formatted search results.
```

---

## Prompt 5: Search Interaction Logic

```
I need to add proper interaction logic to the search functionality. Currently I have working search results display.

Update the search.js file to add:
1. Debounced search with 200ms delay after user stops typing
2. Dropdown open/close behavior
3. Click outside to close dropdown
4. Escape key to close dropdown
5. Click on result to navigate and close dropdown
6. Show/hide dropdown based on search state

Requirements:
- Debounce search input with 200ms delay
- Auto-close dropdown on outside click
- Auto-close dropdown on Escape key
- Auto-close when result is clicked
- Only show dropdown when there are results or "no results" message
- Hide dropdown when input is cleared or less than 3 characters

Functions to enhance:
- Add debouncing to search input handler
- Add clickOutside event listener
- Add escape key handler
- Add result click handlers
- Add dropdown show/hide logic

The interaction should feel smooth and intuitive, similar to modern search interfaces. Make sure to prevent memory leaks by properly managing event listeners.

Please provide the updated search.js file with complete interaction logic.
```

---

## Prompt 6: Search Term Highlighting

```
I need to add search term highlighting to make it easier for users to see why results matched their query.

Update the search.js file to:
1. Highlight matching search terms in both title and content snippet
2. Use **bold** formatting for highlighted terms
3. Handle multiple search terms
4. Case-insensitive highlighting
5. Avoid highlighting partial word matches when possible

Requirements:
- Highlight search terms with <strong> tags or **bold** markdown
- Handle multiple search terms in query
- Case-insensitive matching
- Don't break existing HTML structure
- Make highlighting visually distinct but not overwhelming

Functions to implement:
- highlightSearchTerms(text, searchQuery) - adds highlighting to text
- parseSearchTerms(query) - extracts individual terms from query
- Update displayResults() to use highlighting

The highlighting should make it immediately clear why each result matched the search query, helping users quickly identify relevant posts.

Example: If searching for "terminal windows", both "terminal" and "windows" should be highlighted in the results.

Please provide the updated search.js file with search term highlighting functionality.
```

---

## Prompt 7: Keyboard Navigation

```
I need to add full keyboard accessibility to the search dropdown for users who prefer keyboard navigation.

Update the search.js file to add:
1. Arrow key navigation (up/down) through search results
2. Enter key to select highlighted result
3. Tab key for standard focus behavior
4. Visual feedback for keyboard-focused items
5. Proper focus management

Requirements:
- Up/Down arrow keys navigate through results
- Enter key selects the currently highlighted result
- Escape key closes dropdown (already implemented)
- Tab key moves focus normally
- Visual highlight for keyboard-focused result
- Wrap around navigation (top to bottom, bottom to top)
- Handle empty results gracefully

Functions to implement:
- handleKeyboardNavigation(event) - processes arrow keys and enter
- highlightResult(index) - visually highlights a result
- selectHighlightedResult() - navigates to selected result
- Add keyboard event listeners
- Track currently highlighted result index

The keyboard navigation should feel natural and provide clear visual feedback about which result is currently selected. This is important for accessibility and power users.

Please provide the updated search.js file with full keyboard navigation support.
```

---

## Prompt 8: Mobile Responsiveness & Styling

```
I need to create the CSS styles and ensure the search functionality works well on mobile devices. This is the final step to complete the search implementation.

Create assets/css/search.css that:
1. Styles the search container, input, and dropdown
2. Ensures mobile responsiveness 
3. Provides proper touch targets for mobile (44px minimum)
4. Handles virtual keyboard appearance gracefully
5. Matches the minima theme styling

Requirements:
- Inherit minima theme styles where possible
- Full-width dropdown on mobile with appropriate margins
- Adequate touch target sizes (44px minimum)
- Dropdown should not extend beyond screen bounds
- Clean, readable list format for results
- Subtle hover states for result items
- Visual feedback for keyboard navigation
- Search term highlighting styles

Key classes to style:
- .search-container - wrapper positioning
- .search-input - input field styling  
- .search-dropdown - dropdown container
- .search-result - individual result items
- .search-result:hover - hover states
- .search-highlight - highlighted search terms
- .search-no-results - no results message
- .search-result.keyboard-focused - keyboard navigation highlight

Also update the header.html to include the search.css file, and ensure the search.js is properly integrated.

The final result should be a fully functional, accessible, mobile-friendly search feature that integrates seamlessly with the minima theme.

Please provide the complete search.css file and any necessary updates to other files to complete the implementation.
```

---

## Summary

This blueprint provides 8 iterative steps that build a complete search functionality:

1. **Data Layer**: JSON search index
2. **Core Logic**: Search functionality with lunr.js
3. **UI Foundation**: Search box in header
4. **Results Display**: Show formatted search results
5. **Interactions**: Proper dropdown behavior
6. **Enhancement**: Search term highlighting  
7. **Accessibility**: Keyboard navigation
8. **Polish**: Mobile responsive styling

Each step is self-contained, testable, and builds incrementally on previous work, ensuring no big jumps in complexity and no orphaned code.