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

        {/* Background */}
        <PlexusBackground />

        {/* Conteúdo principal */}
        <div className="relative z-10">
          <Header />
          <About />
          <Projects />
          <Footer />
        </div>

      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
