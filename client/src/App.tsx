import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import PlexusBackground from "./components/PlexusBackground";
import ErrorBoundary from "./components/ErrorBoundary";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />

          {/* Background */}
          <PlexusBackground />

          {/* Conteúdo principal */}
          <div className="relative z-10">
            <Header />
            <About />
            <Projects />
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
