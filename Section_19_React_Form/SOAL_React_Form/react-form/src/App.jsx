import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";
import RouteManagement from "./shared/routes/RouteManagement";

function App() {
  return (
    <>
      <Header />
      <main>
        <RouteManagement />
      </main>
      <Footer />
    </>
  );
}

export default App;
