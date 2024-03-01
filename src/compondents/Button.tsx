type btn = {
  butn: string;
};
function CustButton({ butn }: btn) {
  function myBtn() {}

  return (
    <div>
      {/* <h3 id="cartmsg">add to cart</h3> */}
      <button
        className="bg-yellow-600 px-2 py-1  rounded-xl "
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
