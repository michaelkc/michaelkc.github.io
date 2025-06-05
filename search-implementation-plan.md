# Search Implementation Plan

## Overview

Implement search functionality in our Jekyll static site using Lunr.js. The idea is to generate a JSON index from our markdown documents at build time, then use Lunr.js on the client side to perform search operations on the pre-built index. This approach ensures that our search is static-friendly and straightforward for GitHub Pages hosting.

## Steps

1. **Generate Search Index JSON:**
   - Create a custom Jekyll generator plugin (e.g., in `_plugins/search_generator.rb`), which will iterate over our pages and posts to compile a JSON index. 
   - Extract key fields such as title, URL/permalink, content snippet, and tags/categories as needed.
   - Output the JSON file (e.g., `search.json`) in the site's root or a designated assets directory so it is published along with the site.

2. **Integrate Lunr.js for Client-Side Search:**
   - Load Lunr.js via a CDN with a proper content integrity hash to secure the CDN resource.
   - Create a dedicated search page (e.g., `/search/`) with a search input and result area.
   - Write the necessary JavaScript to load `search.json`, initialize Lunr.js with the index data, and implement a live search function that returns and displays relevant results as users type their queries.

3. **GitHub Actions Workflow Adjustments:**
   - Ensure that the generation of `search.json` happens during the Jekyll build process (handled by our custom generator plugin), so it is available when the site is deployed via GitHub Actions.

4. **Styling & User Experience:**
   - Incorporate CSS styles to improve the UI/UX of the search feature.
   - Optionally, integrate features like highlighting search terms in the results.

## Tools and Shortcuts

- **Jekyll Plugins:** We may consider existing plugins like `jekyll-lunr-js` if compatible, but a custom generator could offer more control and simplicity for this setup.
- **Lunr.js:** Using Lunr.js as the search engine on the client side is ideal for static sites, allowing fast and in-browser search capabilities. Loading Lunr.js via CDN with an integrity hash improves security by validating the source.

## Deliverables

- `search-implementation-plan.md`: This document outlining the plan (updated with the security enhancement for CDN).
- A Jekyll generator plugin file (e.g., `_plugins/search_generator.rb`) that creates the `search.json` index during build.
- A new search page template and associated JavaScript and CSS for the Lunr.js powered search.

## Summary

This implementation will create a seamless search experience on our static Jekyll site by:
- Generating a searchable JSON index from our markdown posts and pages during build time.
- Utilizing Lunr.js on the client side to enable robust search functionality, loaded securely via CDN with an integrity hash.
- Integrating necessary adjustments in our GitHub Actions workflow to ensure the JSON file is built and deployed along with the site.

Please review this plan and let me know if you approve before we proceed with further implementation.

