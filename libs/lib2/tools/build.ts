import * as fs from 'node:fs';
import * as path from 'node:path';

import esbuild from 'esbuild';

const readDirRecursive = (dir: string): string[] =>
  fs.readdirSync(dir).flatMap((file) => {
    const absolutePath = path.join(dir, file);
    if (fs.statSync(absolutePath).isDirectory())
      return readDirRecursive(absolutePath);
    else return absolutePath;
  });

esbuild.build({
  entryPoints: readDirRecursive('./src'),
  outdir: 'dist',
  bundle: false,
  watch: true,
  format: 'cjs',
});
