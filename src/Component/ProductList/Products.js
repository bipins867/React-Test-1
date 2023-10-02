import Product from "./Product/Product"

export default props=>{
    const onProductDelete = (id) => {
      const filteredList = props.productList.filter(
        (product) => product.id != id
      );
      props.onDelete(filteredList);
    };
    function getProductLiList(productList){
        return productList.map(product=>{
        return <Product key={product.id} id={product.id} onDeleteChange={onProductDelete} productName={product.productName} productCategory={product.productCategory} productPrice={product.productPrice}/>})
    }
    const productItem = getProductLiList(props.productList);

    
    return <div className="container">
        <h3>{props.label}</h3>
        <ul className="ul">
            {productItem}
        </ul>
    </div>
}