type btn = {
  butn: string;
};
function CustButton({ butn }: btn) {
  function myBtn() {}

  return (
    <div>
      {/* <h3 id="cartmsg">add to cart</h3> */}
      <button
        className="btnc"
        onClick={() => {
          alert(myBtn);
        }}
      >
        {butn}
      </button>
    </div>
  );
}
export default CustButton;
