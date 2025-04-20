
import Home from "./pages/home";
import { ApolloProvider } from '@apollo/client';
import client from "./utils/apolloClient";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          + <main className="flex-1 flex flex-col overflow-auto">
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>

  )
}

export default App
