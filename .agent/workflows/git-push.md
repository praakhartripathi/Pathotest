---
description: How to push changes to GitHub using feature branches
---

IMPORTANT: Never push directly to `main`. Always create a branch, push to it, and let CodeRabbit review via PR.

1. Create and switch to a new feature branch named after what you're working on:
```
git checkout -b <branch-name>
```
Use kebab-case names that describe the work, e.g. `feat/topbar-component`, `fix/full-width-layout`, `chore/github-templates`.

2. Stage and commit changes:
```
git add .
git commit -m "<type>: <short description>"
```
Commit types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`.

3. Push the branch to origin:
```
git push -u origin <branch-name>
```

4. Open a Pull Request on GitHub from the new branch into `main`.
