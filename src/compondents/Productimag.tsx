type imgUrl={
    url:string
}
function custImage({url}:imgUrl){
    return(
        <div>
            <img src={url} className="imag" />
        </div>
    )
}
export default custImage;