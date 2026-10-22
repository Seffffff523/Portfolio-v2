import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer, Loader } from "./components";
import Home from "./pages/Home";

const Projects = lazy(() => import("./pages/Projects"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section exists after a route change.
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <div className="relative min-h-screen bg-primary">
    <Suspense fallback={null}>
      <StarsCanvas />
    </Suspense>
    <ScrollManager />
    <Navbar />
    <main>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </div>
);

export default App;
