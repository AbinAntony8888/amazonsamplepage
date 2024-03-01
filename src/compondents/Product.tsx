import Productimag from "./Productimag";
import Label from "./Label";
import LabelPrice from "./LabelPrice";
import Button from "./Button";
import { Product } from "../Types";

function ProductItem({ imag, heading, pric, butnn }: Product) {
  return (
    <div className="  rounded p-2 flex flex-col gap-y-2">
      <Productimag url={imag} />
      <Label pdname={heading} />
      <LabelPrice PrPrice={pric} />
      <Button butn={butnn} />
    </div>
  );
}
export default ProductItem;
