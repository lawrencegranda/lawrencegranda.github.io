# AGENTS.md

This folder is the **website** Cursor workspace root: Jekyll + Chirpy source for https://www.lawrencegranda.com/.

It is **not** the Obsidian vault. Ops (DNS, SSL, mail) live in `/Users/lawrencegranda/Documents/laptop/vault/Projects/Personal website.md`. Article-notes live in vault `Reading/Blog/`.

**Path:** `/Users/lawrencegranda/Documents/laptop/projects/blog/lawrencegranda.github.io`  
**GitHub:** `lawrencegranda/lawrencegranda.github.io`  
**Live branch:** `prod` (not `main`)

| What | File |
| ---- | ---- |
| About blurb / typing line | `_tabs/about.html` |
| Site tagline / SEO | `_config.yml` |
| Resume tab | `_data/resume/*.yml` + `_tabs/resume.html` |
| Posts | `_posts/` |

**Identity SOT:** lead **ORIE M.Eng**, then **B.S. CS** (grad **Dec 2026**). Edit about + resume education YAML together (and `resume/cv.tex` when the PDF should match).

Ship: edit → commit → push **`prod`**. Do not copy Cloudflare zone IDs or mail secrets into this file.

Workspace map: vault `.cursor/rules/website-workspace.mdc`.
