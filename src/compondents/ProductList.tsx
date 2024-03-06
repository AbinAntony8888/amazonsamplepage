import { Product } from "../Types";
import ProductItem from "./Product";

export default function ProductList() {
  // data
  let products: Product[] = [
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
  // fumctions
  // retur
  return (
    <div className="ring-2 bg-black text-white">
      {products.map((product) => {
        return (
          <ProductItem
            imag={product.imag}
            butnn={product.butnn}
            heading={product.heading}
            pric={product.pric}
          />
        );
      })}
    </div>
  );
}
