import "./App.css";
import { Product } from "./Types";
import ProductItem from "./compondents/Product";

function App() {
  let products: Product[] = [];

  const getProductsFromServer = () => {
    // get products from API
    const data: Product[] = [
      {
        imag: "https://m.media-amazon.com/images/I/61nF5ekaaPL._SS460_.jpg",
        heading:
          "Blue Star 1 Ton 3 Star Convertible 5 in 1 Cooling Inverter Split AC (Copper, Multi Sensors, Dust Filters, Smart Ready, Blue Fins,      Self Diagnosis, 2023Model, IC312YNU,White)",
        pric: 2300,
        butnn: "Add to cart",
      },
      {
        imag: "https://m.media-amazon.com/images/I/61nF5ekaaPL._SS460_.jpg",
        heading:
          "Blue Star 1 Ton 3 Star Convertible 5 in 1 Cooling Inverter Split AC (Copper, Multi Sensors, Dust Filters, Smart Ready, Blue Fins,      Self Diagnosis, 2023Model, IC312YNU,White)",
        pric: 2300,
        butnn: "Add to cart",
      },
      {
        imag: "https://m.media-amazon.com/images/I/61nF5ekaaPL._SS460_.jpg",
        heading:
          "Blue Star 1 Ton 3 Star Convertible 5 in 1 Cooling Inverter Split AC (Copper, Multi Sensors, Dust Filters, Smart Ready, Blue Fins,      Self Diagnosis, 2023Model, IC312YNU,White)",
        pric: 2300,
        butnn: "Add to cart",
      },
      {
        imag: "https://m.media-amazon.com/images/I/61nF5ekaaPL._SS460_.jpg",
        heading:
          "Blue Star 1 Ton 3 Star Convertible 5 in 1 Cooling Inverter Split AC (Copper, Multi Sensors, Dust Filters, Smart Ready, Blue Fins,      Self Diagnosis, 2023Model, IC312YNU,White)",
        pric: 2300,
        butnn: "Add to cart",
      },      {
        imag: "https://m.media-amazon.com/images/I/61nF5ekaaPL._SS460_.jpg",
        heading:
          "Blue Star 1 Ton 3 Star Convertible 5 in 1 Cooling Inverter Split AC (Copper, Multi Sensors, Dust Filters, Smart Ready, Blue Fins,      Self Diagnosis, 2023Model, IC312YNU,White)",
        pric: 2300,
        butnn: "Add to cart",
      },
      {
        imag: "https://m.media-amazon.com/images/I/61nF5ekaaPL._SS460_.jpg",
        heading:
          "Blue Star 1 Ton 3 Star Convertible 5 in 1 Cooling Inverter Split AC (Copper, Multi Sensors, Dust Filters, Smart Ready, Blue Fins,      Self Diagnosis, 2023Model, IC312YNU,White)",
        pric: 2300,
        butnn: "Add to cart",
      },
      {
        imag: "https://m.media-amazon.com/images/I/61nF5ekaaPL._SS460_.jpg",
        heading:
          "Blue Star 1 Ton 3 Star Convertible 5 in 1 Cooling Inverter Split AC (Copper, Multi Sensors, Dust Filters, Smart Ready, Blue Fins,      Self Diagnosis, 2023Model, IC312YNU,White)",
        pric: 2300,
        butnn: "Add to cart",
      },
      {
        imag: "https://m.media-amazon.com/images/I/61nF5ekaaPL._SS460_.jpg",
        heading:
          "Blue Star 1 Ton 3 Star Convertible 5 in 1 Cooling Inverter Split AC (Copper, Multi Sensors, Dust Filters, Smart Ready, Blue Fins,      Self Diagnosis, 2023Model, IC312YNU,White)",
        pric: 2300,
        butnn: "Add to cart",
      },
      {
        imag: "https://m.media-amazon.com/images/I/61nF5ekaaPL._SS460_.jpg",
        heading:
          "Blue Star 1 Ton 3 Star Convertible 5 in 1 Cooling Inverter Split AC (Copper, Multi Sensors, Dust Filters, Smart Ready, Blue Fins,      Self Diagnosis, 2023Model, IC312YNU,White)",
        pric: 2300,
        butnn: "Add to cart",
      },
    ];

    products = data;
  };

  getProductsFromServer();

  return (
    <div className="App">
      {products.map((product) => {
        return <ProductItem imag={product.imag} heading={product.heading} pric={product.pric} butnn={product.butnn} />;
      })}
    </div>
  );
}

export default App;
