# Jekyll Blog Search Implementation Specification

## Overview
Add a client-side search feature to a GitHub Pages Jekyll blog using lunr.js. The search will be visible on every page and allow users to search through all blog posts with live results displayed in a dropdown.

## Project Structure
```
├── _includes/
│   └── header.html                 # Override minima theme header
├── assets/
│   ├── js/
│   │   └── search.js              # Main search functionality
│   └── css/
│       └── search.css             # Search-specific styles (minimal)
└── search.json                    # Jekyll-generated search index
```

## Technical Requirements

### Search Index Generation (`search.json`)
- **Location**: Root directory (`/search.json`)
- **Format**: JSON array of post objects
- **Content Processing**:
  - Strip all HTML tags from post content
  - Properly escape special characters and quotes for JSON
  - Handle unicode and special characters safely
- **Post Object Structure**:
  ```json
  {
    "title": "Post Title",
    "content": "Processed post content without HTML",
    "url": "/2024/12/03/post-slug.html",
    "date": "2024-12-03"
  }
  ```
- **Jekyll Template**: Use Liquid templating to generate the JSON file automatically

### Search Functionality (`assets/js/search.js`)

#### Dependencies
- **lunr.js**: Load from CDN with content SHA for security
  - Use jsDelivr or cdnjs
  - Include integrity attribute with SHA hash
  - Include crossorigin="anonymous"

#### Core Features
- **Search Trigger**: Live search with 200ms delay after user stops typing
- **Minimum Characters**: Require at least 3 characters before searching
- **Case Sensitivity**: Case-insensitive search
- **Search Fields**: Index both post title and content
- **Result Limit**: Maximum 10 results displayed
- **Search Logic**: Use lunr.js default scoring and ranking

#### User Interface Behavior
- **Input Handling**:
  - Wait for 3+ characters
  - Debounce with 200ms delay
  - Clear results when input is less than 3 characters
- **Dropdown Display**:
  - Show below search box
  - Auto-close on outside click
  - Auto-close on Escape key
  - Auto-close when result is clicked
- **Result Format**:
  - Post title + text snippet (max 150 characters)
  - Highlight search terms with **bold** formatting
  - Use ellipses (...) for truncated content
  - Show "No results found" when no matches exist

#### Keyboard Navigation
- **Arrow Keys**: Navigate up/down through results
- **Enter Key**: Select highlighted result
- **Escape Key**: Close dropdown
- **Tab Key**: Standard focus behavior

#### Error Handling
- **Failed Index Load**: Display "Search temporarily unavailable"
- **Empty/Corrupted Index**: Display "Search temporarily unavailable"
- **Network Issues**: Graceful degradation, disable search box

#### Mobile Responsiveness
- **Dropdown Width**: Full width on mobile (with appropriate margins)
- **Touch Targets**: Ensure adequate touch target size (44px minimum)
- **Viewport Considerations**: Prevent dropdown from extending beyond screen bounds
- **Keyboard Behavior**: Handle virtual keyboard appearance gracefully

### Theme Integration (`_includes/header.html`)

#### Implementation Approach
- Override minima theme's default header
- Copy existing minima header structure
- Add search box to navigation area
- Maintain existing theme styling and layout

#### Search Box Placement
- Position in header navigation area
- Use existing minima theme form/input styling
- Responsive behavior matching theme patterns

#### HTML Structure
```html
<div class="search-container">
  <input type="text" class="search-input" placeholder="Search posts..." 
         aria-label="Search blog posts" role="searchbox">
  <div class="search-dropdown" role="listbox" aria-label="Search results">
    <!-- Results populated by JavaScript -->
  </div>
</div>
```

### Styling (`assets/css/search.css`)

#### Design Principles
- Inherit minima theme styles where possible
- Minimal custom CSS
- Responsive design
- Accessibility considerations

#### Key Style Requirements
- **Search Box**: Inherit theme input styling
- **Dropdown**: Clean, readable list format
- **Hover States**: Subtle highlight for result items
- **Search Term Highlighting**: Bold text for matches
- **Mobile Optimization**: Full-width dropdown with proper spacing

#### Accessibility Features
- **ARIA Labels**: Include where beneficial (nice-to-have)
- **Focus Management**: Proper focus indicators
- **Screen Reader Support**: Semantic HTML structure
- **Keyboard Navigation**: Visual feedback for keyboard users

## File Implementation Details

### 1. Jekyll Search Index Template (`search.json`)
```liquid
---
layout: null
---
[
  {%- for post in site.posts -%}
    {
      "title": {{ post.title | jsonify }},
      "content": {{ post.content | strip_html | normalize_whitespace | jsonify }},
      "url": {{ post.url | jsonify }},
      "date": {{ post.date | date: "%Y-%m-%d" | jsonify }}
    }
    {%- unless forloop.last -%},{%- endunless -%}
  {%- endfor -%}
]
```

### 2. Header Override (`_includes/header.html`)
- Copy minima theme's header.html
- Add search container in appropriate location
- Maintain all existing header functionality
- Include search.js and search.css

### 3. Search JavaScript (`assets/js/search.js`)
**Key Functions**:
- `initializeSearch()`: Load lunr.js and search index
- `buildSearchIndex()`: Create lunr index from JSON data
- `performSearch(query)`: Execute search and return results
- `displayResults(results)`: Render results in dropdown
- `highlightSearchTerms(text, terms)`: Bold matching terms
- `truncateContent(content, maxLength)`: Create snippets with ellipses
- `setupEventListeners()`: Handle input, keyboard, click events

### 4. Search Styles (`assets/css/search.css`)
**Key Classes**:
- `.search-container`: Wrapper positioning
- `.search-input`: Input field styling
- `.search-dropdown`: Dropdown container
- `.search-result`: Individual result item
- `.search-result:hover`: Hover state
- `.search-highlight`: Bold search terms
- `.search-no-results`: No results message

## Browser Support
- Modern browsers (ES6+ features acceptable for GitHub Pages audience)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement (graceful degradation if JavaScript disabled)

## Performance Considerations
- **Search Index Size**: Monitor JSON file size as blog grows
- **Debouncing**: 200ms delay prevents excessive searches
- **DOM Updates**: Efficient result rendering
- **Memory Usage**: Proper cleanup of event listeners

## Security Considerations
- **CDN Integrity**: Use SHA-based integrity checks for lunr.js
- **XSS Prevention**: Proper HTML escaping in search results
- **Content Sanitization**: Strip HTML from indexed content

## Testing Checklist
- [ ] Search works with various query types
- [ ] Keyboard navigation functions properly
- [ ] Mobile responsive behavior
- [ ] Error states display correctly
- [ ] Search results link to correct posts
- [ ] Dropdown closes on outside clicks
- [ ] Performance with large number of posts
- [ ] Cross-browser compatibility

## Future Enhancements (Optional)
- Search analytics/tracking
- Advanced search operators
- Search result ranking improvements
- Search history/suggestions
- Category/tag filtering