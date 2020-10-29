import importAll from 'import-all.macro';
import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// importAll.macro is run in build time!
const routeData = importAll.deferred('./pages/*.tsx');

const routes = Object.keys(routeData).map((key) => {
  const path = key.replace(/^\.\/pages\/|\.(j|t)sx?/g, '');

  return {
    path: path === 'index' ? '/' : `/${path}`,
    Component: React.lazy(routeData[key]),
  };
});

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="shadow">
          <div className="shadow-lg px-6 py-2 bg-pink-600 text-white">
            <div className="max-w-6xl mx-auto">
              <Link to="/">Pure Man's File Routing</Link>
            </div>
          </div>
        </header>
        <main className="px-6 py-3">
          <div className="max-w-6xl mx-auto">
            <React.Suspense fallback="Loading...">
              <Switch>
                {routes.map((route) => (
                  <Route
                    path={route.path}
                    component={route.Component}
                    key={route.path}
                  />
                ))}
              </Switch>
            </React.Suspense>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
