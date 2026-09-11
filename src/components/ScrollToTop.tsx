// Scrolls the window to the top whenever the route changes.
// Without this, React Router keeps the browser's scroll position from the
// previous page, so navigation would land mid-page.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
