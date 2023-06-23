# This repo has been deprecated and merged into the Edvise monorepo. It is no longer actively maintained as of March 10, 2023.

# Naming convention

## files/folder

### folders: kebab-case

### components: PascalCase e.g LessonCard.tsx

### hooks: useFoo e.g 'useLocalStorage'

# Folder Purpose

## src/assets/

- for images, icons

## src/components/

- for JSX components
- if component is too big, break down into elements

## src/elements/

- for JSX elements that make up components in src/components

## src/feature/

- for logically grouping feature resources
- potentially has the following :
  - src/features/foo/components/
  - src/features/foo/state/
  - src/features/foo/types/
  - src/features/foo/utils/
  - src/features/foo/hooks/
    - for feature specific hooks
  - src/features/foo/index.ts
    - for exporting whichever of the above folder/file

## src/hooks/

- for custom hooks
- naming: useFoo.ts(x)

## src/libs/

- for wrapping libraries that we use in the app

## src/pages/

- for the higher order components that render each page
- naming
  - must match the url
  - must be kebab-case
- must export as default

## src/routes/

- for route configuration
- src/routes/index.tsx
  - can specify new route in here
- src.routes/Layout.tsx
  - can specify new layout in here

## src/services

- for api fetchers configuration
- caching implementation
- for other services

## src/state/

- for central state configuration
- src/state/atom/
  - we're using jotai atomic state management
  - src/state/atom/index.ts
    - export all atoms

## src/stories/

- should share same assets folder as src/assets/
- for everything storybook
- src/components/
- src/elements/
- src/pages/
- src/mvp/
  - src/mvp/components
  - src/mvp/elements
  - src/mvp/pages

## src/tests/

- For testing, Vitest and React testing Library.
- Run `yarn run test`

## src/types/

- for central type
- widely shared types

## src/utils/

- for central util functions
- widely shared utils

# Automations

- husky does not automatically install, so run `yarn run prepare` to get started
- you may choose to manually run the linting script:
  - `yarn run lint:fix`
  - `yarn run prettier:fix`
  - `yarn run lint`
  - etc (refer to `package.json`)

# Other Commands

- `yarn storybook`
- `yarn run dev`
- `yarn graphql-codegen --watch`

PS: Please ensure to fix all lint issues associated with your changes before making a PR. Happy Hacking!

Follow this workflow before creating a PR:

- `git log --oneline` (view NUMBER of commits if multiple)
- `git rebase -i HEAD~<NUMBER>` (converge multiple commits before PR. Fixup most recent into the oldest)
- `git checkout main`
- `git pull` (In case anyone merged something ahead of you)
- `git checkout -` (go back to your feature branch)
- `git rebase main` (packs your commit on top of the main history. Do this before making PR).
- `git push` (ensure the pre-commit, commitlint and pre-push scripts are executed).
