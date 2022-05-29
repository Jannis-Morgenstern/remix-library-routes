import * as path from 'node:path';

import {
  defineConventionalRoutes,
  createRoutePath,
} from '@remix-run/dev/config/routesConvention';

interface Route {
  path: string;
  file: string;
}

const cwd = process.cwd();
const srcDir = path.join(cwd, 'src');

const routeManifest = defineConventionalRoutes(srcDir);
const routePaths = Object.values(routeManifest).map((route) =>
  createRoutePath(route.id)
);
console.debug(routeManifest);
console.debug(routePaths);
