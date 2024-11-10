---
layout: post
title:  "Interesting stuff i found - november 2024"
date:   2024-11-10 21:57:00 +0200
---
### Scripting change pull requests (or direct commits) in multiple Git repos
As my team is pushing close to a hundred repos, having a way to bulk-update various stuff like dependabot settings and whatnot is starting to become highly relevant. 
I spent a bit of time scanning the options, and came upon [git xargs](https://github.com/gruntwork-io/git-xargs/) (with [multi-gitter](https://github.com/lindell/multi-gitter) 
as an alternative that looks nice, but I never tried it as git xargs worked well).

The idea is that you produce a script assuming the root of the repo, like

```
mkdir .github
copy /y c:\absolute-path-to-desired\dependabot.yml .\.github\
```
set up an appropriate personal access token like
```
$env:GITHUB_OAUTH_TOKEN="ghp_x5q...
```
and then run it on a set of repos in a flat text file (or optionally all repos in an organization) with a command like
```
git-xargs.exe --branch-name xargs-updates --loglevel DEBUG --commit-message "Update dependabot.yml" --repos data\testrepos.txt --skip-archived-repos --seconds-between-prs 5  c:\absolute-path-to-script\copy_dependabot.bat
```
For more advanced manipulation of source code in the scripts, someone mentioned [ast-grep](https://github.com/ast-grep/ast-grep?tab=readme-ov-file). It looks very powerful, but I have not had time to try it out yet.
