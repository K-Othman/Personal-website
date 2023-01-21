import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
