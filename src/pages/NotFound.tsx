// 404 page shown for any route that doesn't match. Kept as its own page so
// the messaging, meta and design stay consistent and easy to tweak.
import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setPageMeta } from "@/lib/seo";
import { navItems } from "@/components/Header";

export function NotFoundPage() {
  setPageMeta({
    title: "Page Not Found | SiteCrafters Ltd.",
    description:
      "The page you're looking for doesn't exist or has been moved. Explore SiteCrafters' website development plans and work instead.",
  });

  return (
    <div className="relative flex min-h-[70vh] items-center justify-center px-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-primary-soft blur-3xl opacity-50"
      />
      <div className="relative max-w-lg text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Compass className="h-7 w-7" />
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-primary">
          Error 404
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Contact us
            </Button>
          </Link>
        </div>

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navItems
            .filter((n) => n.to !== "/")
            .map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
        </nav>
      </div>
    </div>
  );
}