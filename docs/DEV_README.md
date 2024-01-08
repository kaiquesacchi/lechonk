# Creating changesets

[Reference](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md)

For each change, create a changeset by running:

```sh
pnpm changeset
```

The changesets may be included on each corresponding commit.

When enough changes were made, generate a new version with all current changes, by running:

```sh
pnpm changeset version
```

# Publishing to NPM

After committing the new version, run:

```sh
pnpm publish
```
