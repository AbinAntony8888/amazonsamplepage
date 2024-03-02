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
    <div className="App bg-[#ece5e5] h-screen flex flex-row gap-4 items-center justify-center text-white">

      {/* <div className="bg-green-600 h-full w-full ">A</div>
      <div className="bg-yellow-600 h-full w-full ">B</div>
      <div className="bg-red-600 h-full w-full ">c</div> */}
      {products.map((product) => {
        return <ProductItem imag={product.imag} heading={product.heading} pric={product.pric} butnn={product.butnn} />;
      })}

      {/* <button className="bg-[#2596be] px-4 py-2 m-10 rounded-full text-white">enter</button> */}
    </div>
  );
}

export default App;
