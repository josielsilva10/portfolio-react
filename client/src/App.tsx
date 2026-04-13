<<<<<<< HEAD
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
=======
>>>>>>> 89da198e485fcdce871cc9dc6e8e18f146b32f26
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import PlexusBackground from "./components/PlexusBackground";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
<<<<<<< HEAD
        <TooltipProvider>
          <Toaster />
          
          {/* Plexus Background */}
          <PlexusBackground />
          
          {/* Main Content */}
          <div className="relative z-10">
            <Header />
            <About />
            <Projects />
            <Footer />
          </div>
        </TooltipProvider>
=======

        {/* Background */}
        <PlexusBackground />

        {/* Conteúdo principal */}
        <div className="relative z-10">
          <Header />
          <About />
          <Projects />
          <Footer />
        </div>

>>>>>>> 89da198e485fcdce871cc9dc6e8e18f146b32f26
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
