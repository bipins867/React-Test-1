
export default props=>{
    function onDeleteButtonClick(event){
        localStorage.removeItem(props.id)
        props.onDeleteChange(props.id)
    }
    return <li className="li">
        {props.productName}|{props.productCategory}|{props.productPrice} || <button className="button" onClick={onDeleteButtonClick}>Delete Product</button>
    </li>
}