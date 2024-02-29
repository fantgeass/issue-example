import * as esbuild from 'esbuild';

const args = process.argv.slice(2);
const watch = args.includes('--watch');
const deploy = args.includes('--deploy');

const loader = {
  // Add loaders for images/fonts/etc, e.g. { '.svg': 'file' }
};

const plugins = [
  // plugins
];

// Define esbuild options
let opts = {
  entryPoints: ["index.js"],
  bundle: true,
  logLevel: "info",
  platform: "browser",
  target: "es2020",
  outdir: "bundle",
  loader: loader,
  plugins: plugins
};

if (deploy) {
  opts = {
    ...opts,
    minify: true,
  };
}

if (watch) {
  opts = {
    ...opts,
    sourcemap: "inline",
  };
  esbuild
    .context(opts)
    .then((ctx) => {
      ctx.watch();
    })
    .catch((_error) => {
      process.exit(1);
    });
} else {
  esbuild.build(opts);
}