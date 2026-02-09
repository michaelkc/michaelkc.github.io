---
name: new-post
description: Add a new section to the current month markdown file
argument-hint: Provide a URL to an article you want to add to the current month's post, along with any personal reactions or key takeaways you'd like to include in the summary.
agent: agent
model: GPT-4.1
---

When the user hands you a link, create a new entry in the "interesting stuff I found" post for the current year and month. Follow this pattern exactly:

1.  Read the contents of the linked article for context
2. 	Select the correct file to edit
	Look in the _posts/ directory for files whose filenames meet all of the following conditions:

	The filename begins with _posts/YYYY-MM- where YYYY-MM is any valid year and month.
	The filename contains the word interesting anywhere after that prefix.
	The filename ends with .markdown.



	Treat the date in the filename (YYYY-MM-DD) as an actual date, not text.

	Extract the date part (YYYY-MM-DD) from every matching filename.
	Convert that string into a real date.
	Compare the dates chronologically.

	Select the file with the most recent (latest) date.

	This is the file you must edit.

	For example, if you have these files:

	- `_posts/2025-01-08-interesting-stuff-i-found.markdown`
	- `_posts/2025-08-08-interesting-stuff-i-found.markdown`
	- `_posts/2026-01-05-interesting-stuff-i-found.markdown`

	You must choose:
	`_posts/2026-01-05-interesting-stuff-i-found.markdown`	

	because 2026‑01‑05 is later than 2025‑08‑08.
	
	The list of files changes over time. Never rely on the example list.
	Always inspect the actual files that exist at runtime and compute the newest date from those.

3.  Append a new section at the end of that file that mirrors the existing style:
	- Start with a blank line from the previous set of links, then a `###` header that summarizes the highlight in a few words; do **not** put links inside the header. Think of it as a short job title for the discovery.
	- If the user provided personal reactions or key takeaways, lean heavily on those for the body text. If not create a factual summary of the linked article. Output in either case is a single sentence, max 2.
	- After the body, leave a blank line and then 1–3 markdown links (usually just one) that point to the article or other related resources you referenced. Each link should use descriptive link text reminiscent of the section header or the link’s title.
4.  Always show the user what was inserted (the new header, body, and link block) so they can verify it matches their expectations.
5.  Mention to the user that "publish" means committing and pushing the changes once they approve the new section. 
    Do NOT commit/push the changes unless the user express a wish to publish.

The prompt should not produce any other files or modifications—just append the new section to the correct rolling file and confirm the addition for the user.
