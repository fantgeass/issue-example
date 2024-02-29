## Steps

1. Try to build with esbuild by running `npm run build`
2. Build failed because of resolution errors
3. Go to the local `@hashgraph/sdk` package.json and remove `exports` field.
4. Try to buld again, now it works