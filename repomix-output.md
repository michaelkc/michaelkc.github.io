This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: Gemfile.lock, *.markdown, *.md, _config.yml, _posts/2020-05-24-open-windows-terminal-in-current-directory.markdown, _posts/2024-12-03-interesting-stuff-i-found.markdown
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
_config.yml
_posts/2020-05-24-open-windows-terminal-in-current-directory.markdown
_posts/2024-12-03-interesting-stuff-i-found.markdown
about.markdown
index.markdown
README.md
```

# Files

## File: _config.yml
````yaml
# Welcome to Jekyll!
#
# This config file is meant for settings that affect your whole blog, values
# which you are expected to set up once and rarely edit after that. If you find
# yourself editing this file very often, consider using Jekyll's data files
# feature for the data you need to update frequently.
#
# For technical reasons, this file is *NOT* reloaded automatically when you use
# 'bundle exec jekyll serve'. If you change this file, please restart the server process.
#
# If you need help with YAML syntax, here are some quick references for you: 
# https://learn-the-web.algonquindesign.ca/topics/markdown-yaml-cheat-sheet/#yaml
# https://learnxinyminutes.com/docs/yaml/
#
# Site settings
# These are used to personalize your new site. If you look in the HTML files,
# you will see them accessed via {{ site.title }}, {{ site.email }}, and so on.
# You can create any custom variable you would like, and they will be accessible
# in the templates via {{ site.myvariable }}.

title: Michael Kaare Christensen
email: contact@michaelkc.dk
description: >- # this means to ignore newlines until "baseurl:"
  Personal site. 
baseurl: "" # the subpath of your site, e.g. /blog
url: "https://www.michaelkc.dk" # the base hostname & protocol for your site, e.g. http://example.com
twitter_username: michaelkc
github_username:  michaelkc

# Build settings
theme: minima
plugins:
  - jekyll-feed
future: false
# Exclude from processing.
# The following items will not be processed, by default.
# Any item listed under the `exclude:` key here will be automatically added to
# the internal "default list".
#
# Excluded items can be processed by explicitly listing the directories or
# their entries' file path in the `include:` list.
#
# exclude:
#   - .sass-cache/
#   - .jekyll-cache/
#   - gemfiles/
#   - Gemfile
#   - Gemfile.lock
#   - node_modules/
#   - vendor/bundle/
#   - vendor/cache/
#   - vendor/gems/
#   - vendor/ruby/
````

## File: _posts/2020-05-24-open-windows-terminal-in-current-directory.markdown
````
---
layout: post
title:  "Open Windows Terminal in current directory"
date:   2020-05-24 20:28:20 +0100
---
As a long time [Total Commander](https://www.ghisler.com/) user, I rely heavily on opening cmd.exe/powershell.exe/pwsh.exe/bash in the currently selected directory. So I was a bit annoyed when i found out that the new Windows Terminal, wt.exe, by default opens in your home directory.

It turns out to be a [regression](https://github.com/microsoft/terminal/issues/620#issuecomment-535228867). For now, the workaround is to add 

`"startingDirectory": null`

to the default profile in settings.json (Windows Terminal -> dropdown -> Settings), e.g.

{% highlight json %} 
{
	// Make changes here to the powershell.exe profile
	"startingDirectory": null,
	"guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
	(...)
}
{% endhighlight %}
````

## File: about.markdown
````
---
layout: page
title: About
permalink: /about/
---

TBA.

You can find the source code for Minima at GitHub:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

You can find the source code for Jekyll at GitHub:
[jekyll][jekyll-organization] /
[jekyll](https://github.com/jekyll/jekyll)


[jekyll-organization]: https://github.com/jekyll
````

## File: index.markdown
````
---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
````

## File: README.md
````markdown
## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/michaelkc/michaelkc.github.io/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/michaelkc/michaelkc.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
````

## File: _posts/2024-12-03-interesting-stuff-i-found.markdown
````
---
layout: post
title:  "Interesting stuff i found - december 2024"
date:   2024-12-03 09:05:01 +0100
---
### Low-budget migration from .NET Startup-based hosting to minimal hosting
Minimal hosting is a requirement for onboarding Aspire, and I needed to convert a project where the integration test infrastructure relies heavily on Startup.

I had to adjust the code a bit, but the approach outlined here made the job a lot easier than a huge refactoring

[https://www.strathweb.com/2022/02/using-an-existing-startup-class-with-asp-net-6-minimal-hosting-model/](https://www.strathweb.com/2022/02/using-an-existing-startup-class-with-asp-net-6-minimal-hosting-model/)

### Viewing "roundtripped" C# code (C# -> IL -> C#)
Saw this used in a presentation

[https://sharplab.io/](https://sharplab.io/)

### Secret OPerationS & ZAP
I have been eyeing [SOPS](https://getsops.io/) for a while, and I got around to actually using it, as I needed to encrypt the contents of some YAML configuration files for [ZAP](https://www.zaproxy.org/) Automation Framework.

It turns out to be really easy to use when you have a Key Management service available, we are using Azure Key Vault and it works flawlessly. Recommended.

### SWEBOOK - An Evolving Body of Knowledge
A massive tome (400+ pages) attempting to cover software engineering. I did not read much of it, but judging from the ToC it seems comprehensive.

[https://www.computer.org/education/bodies-of-knowledge/software-engineering](https://www.computer.org/education/bodies-of-knowledge/software-engineering)

### Cloudypad - gaming on spot instances
Someone whipped together a script to provision and configure a AWS/Amazon spot VM with NVIDIA T4000 and steam games via Moonlight. That is an interesting concept, but with the cost estimates they provide something like Xbox Ultimate seems like a better deal.

[https://cloudypad.gg/](https://cloudypad.gg/)
````
