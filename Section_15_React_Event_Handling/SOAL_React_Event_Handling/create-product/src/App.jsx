import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";
import ProductForm from "./features/products/components/ProductForm/ProductForm";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
