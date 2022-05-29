import * as path from 'node:path';

import {
  defineConventionalRoutes,
  createRoutePath,
} from '@remix-run/dev/config/routesConvention';

import type { DefineRouteFunction } from '@remix-run/dev/config/routes';

const routesParentDir = __dirname;

const routeManifest = defineConventionalRoutes(routesParentDir);
const routesMeta = Object.values(routeManifest);

export default function createRoutes(route: DefineRouteFunction) {
  routesMeta.forEach((routeMeta) => {
    const routePath = createRoutePath(routeMeta.id)
      .split('/')
      .filter((_, i) => i > 0)
      .join('/');
    const filePath = path.join(routesParentDir, routeMeta.file);
    route(routePath, filePath);
  });
}
