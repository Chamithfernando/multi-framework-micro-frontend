import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter, Link, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';



function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/mfe4">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/mfe4/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard/mfe4/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

class App extends React.Component {

  render() {
    const reactVersion = require('./package.json').dependencies['react'];

    return (
      <div>
        <h1>Basic Example</h1>

        <p>
          This example demonstrates some of the core features of React Router
          including nested <code>&lt;Route&gt;</code>s,{" "}
          <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
          "*" route (aka "splat route") to render a "not found" page when someone
          visits an unrecognized URL.
        </p>

        {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
        <HashRouter >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/dashboard/mfe4/about" element={<About />} />
              <Route path="/dashboard/mfe4/dashboard" element={<Dashboard />} />


              {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define('mfe4-element', Mfe4Element);