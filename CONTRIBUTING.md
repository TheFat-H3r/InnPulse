# Contributing

- Branches: `feat/<ticket>-short-name`, `fix/<ticket>-short-name`.
- Commits follow Conventional Commits, for example `feat(operations): create task on checkout`.
- Squash-merge to `main`. `main` is always deployable.
- Keep pull requests under about 400 changed lines. Put incomplete work behind a feature flag.
- Every pull request needs a linked ticket, passing CI, and one reviewer. Fill in the pull request template.
- A module's public interface is `src/index.ts`. Do not import anything deeper from another module.
- Write the module contract in the module's `README.md` before building it.
