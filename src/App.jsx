import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

// components
import InitialNavigation from "./component/InitialNavigation/InitialNavigation";
import PageLoadingTransition from "./component/PageLoadingTransition/PageLoadingTransition";

// Lazy load the pages
const Component = lazy(() => import("./pages/Component/Component"));

function App() {
  const path = useLocation().pathname;
  return (
    <div className="App">
      {path !== "/components" && <InitialNavigation />}
      {/* Wrap routes with Suspense and provide a fallback */}
      <Suspense fallback={<PageLoadingTransition />}>
        <Routes>
          <Route path="/components" element={<Component />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
