import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// components
import PageLoadingTransition from "./component/PageLoadingTransition/PageLoadingTransition";
import OnOffSwitchButton from "./component/OnOffSwitchButton/OnOffSwitchButton";
import BottomNavigationBar from "./component/BottomNavigationBar/BottomNavigationBar";
import Home from "./pages/Home/Home";

// Lazy load the pages
const Component = lazy(() => import("./pages/Component/Component"));
const Practice = lazy(() => import("./pages/Practice/Practice"));

function App() {
  return (
    <div className="App">
      <OnOffSwitchButton />
      <BottomNavigationBar />
      <div className="relative -z-10 max-w-[80%] max-md:max-w-[60%] w-full mx-auto">
        <Suspense fallback={<PageLoadingTransition />}>
          <Routes>
            <Route path="/components" element={<Component />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
