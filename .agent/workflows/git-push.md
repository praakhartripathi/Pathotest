---
description: How to push changes to GitHub using feature branches
---

# git push agent rules

IMPORTANT: Never push directly to `main`. Always create a branch, push to it, and let CodeRabbit review via PR.

## Create and switch to a new feature branch named after what you're working on

```bash
    git checkout -b <branch-name>
```

Use kebab-case names that describe the work, e.g. `feat/topbar-component`, `fix/full-width-layout`, `chore/github-templates`.

## Stage and commit changes

```bash
git add .
git commit -m "<type>: <short description>"
```

Commit types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`.

## Push the branch to origin

```bash
git push -u origin <branch-name>
```

## Open a Pull Request on GitHub from the new branch into `main`
