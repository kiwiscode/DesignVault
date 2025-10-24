import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

// components
import PageLoadingTransition from "./component/PageLoadingTransition/PageLoadingTransition";
import OnOffSwitchButton from "./component/OnOffSwitchButton/OnOffSwitchButton";
import BottomNavigationBar from "./component/BottomNavigationBar/BottomNavigationBar";
import Home from "./pages/Home/Home";

// Lazy load the pages
const Component = lazy(() => import("./pages/Component/Component"));

function App() {
  const path = useLocation().pathname;
  return (
    <div className="App">
      <OnOffSwitchButton />
      <BottomNavigationBar />
      <div className="relative z-10">
        <Suspense fallback={<PageLoadingTransition />}>
          <Routes>
            <Route path="/components" element={<Component />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
