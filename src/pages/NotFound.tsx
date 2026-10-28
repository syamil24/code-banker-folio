import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-5xl font-medium mb-4 text-foreground">404</h1>
        <p className="font-serif text-xl text-muted-foreground mb-4">This page is not part of the story.</p>
        <a href="/" className="font-sans text-sm tracking-wide uppercase text-primary underline underline-offset-4">
          Return to the essay
        </a>
      </div>
    </div>
  );
};

export default NotFound;
