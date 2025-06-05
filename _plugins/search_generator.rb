require 'json'

module Jekyll
  class SearchIndexGenerator < Generator
    safe true
    priority :lowest

    def generate(site)
      index = []

      # Process posts
      if site.respond_to?(:posts) && site.posts.docs
        site.posts.docs.each do |post|
          next if post.data['exclude_from_search']
          index << {
            'title'   => post.data['title'] || 'No Title',
            'url'     => post.url,
            'content' => strip_html(post.content)
          }
        end
      end

      # Process pages
      site.pages.each do |page|
        next if page.data['exclude_from_search']
        # Only index pages with a title
        if page.data['title']
          index << {
            'title'   => page.data['title'],
            'url'     => page.url,
            'content' => strip_html(page.content)
          }
        end
      end

      # Generate JSON and write to search.json in the destination folder
      json = JSON.pretty_generate(index)
      dest_file = File.join(site.dest, 'search.json')
      File.open(dest_file, 'w') { |f| f.write(json) }
      site.static_files << Jekyll::SearchJSONFile.new(site, site.dest, '/', 'search.json')
    end

    # Helper method to remove HTML tags from content
    def strip_html(content)
      # Apply the regular expression replacements repeatedly until no further changes occur.
      previous = nil
      while content != previous
        previous = content
        content = content.gsub(/<script.*?\/script>/m, '')
                         .gsub(/<style.*?\/style>/m, '')
                         .gsub(/<[^>]+>/, '')
      end
      content
    end
  end

  # Define a custom StaticFile so that search.json is copied as is.
  class SearchJSONFile < StaticFile
    def write(dest)
      # We already generated the file, so just return true.
      true
    end
  end
end
