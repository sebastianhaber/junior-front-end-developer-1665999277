import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Dashboard from "./components/pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <Header />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}

export default App;
