## Push

- Will push root project (this), and all subtree project.
- Add message by `--message`
- Do not use `git add` or `git commit` because we push subtree is based on `git diff`

```bash
npm run manage -- --push --message "fix some bug"
```

## Publish

- Publish to npm or private git repository.
- Must add suffix # [major, minor, patch].
- Automatic build.
- Make sure working directory clean.

```bash
# Publish common/swiper
npm run manage -- --publish common/swiper#patch
```

```bash
# Publish common/swiper
npm run manage -- --publish components/common/swiper#patch
```

```bash
# Publish all components in the common directory
npm run manage -- --publish components/common#patch
```

```bash
# Publish all components in the common directory
npm run manage -- --publish common#patch
```

```bash
# Publish all components in the common directory, and input components under web-common directory
npm run manage -- --publish common#patch components/web-common/input#patch
```

```bash
# Publish all components
npm run manage -- --publish components#patch
```

## Update

- Clone or update all subtree project.
- Make sure working directory clean.

```bash
npm run manage -- --update
```

## Run

- Use IDE auto tsc or run `tsc -w` in root directory.
- run `start-before` only first time, will optimize the compilation of performance, such as packaging react.
- run `start` then open localhost:8080.

```bash
npm run start-before
npm start
```

## Production

- Output in built-production folder.

```bash
npm run production
```

you can preview page by run following script, then open localhost:8080.

```bash
npm run server-production
```

## Add Demo

- After adding an demo, you want to display in the page, need to execute this script.

```bash
npm run manage -- --router
```