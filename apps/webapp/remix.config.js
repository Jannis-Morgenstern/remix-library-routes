const { createRoutes: createRoutesLib2 } = require('@acme/lib2');

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  routes: (defineRoutes) =>
    defineRoutes((route) => {
      route('some', 'some.tsx', () => {
        createRoutesLib2(route);
      });
    }),
};
