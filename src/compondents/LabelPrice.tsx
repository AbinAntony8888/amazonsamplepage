type PrdtPrice = {
  PrPrice: number;
};
function Price({ PrPrice }: PrdtPrice) {
  return (
    <div>
      <h3 className="price">{PrPrice}</h3>
    </div>
  );
}
export default Price;
