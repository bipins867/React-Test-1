import { Fragment, useEffect, useState } from "react"
import ProductForm from "./ProductForm/ProductForm"
import Products from "./ProductList/Products";
var isRendered=false
export default props=>{
    const [electronicList, setElectronicList] = useState([]);
    const [foodList, setFoodList] = useState([]);
    const [skincareList, setSkincareList] = useState([]);
    function addItemToList(item,category,productId){
        
        if(category==='Electronic'){
            setElectronicList(prevState=>{
                return [...prevState,{...item,id:productId}]
            })

        }
        else if(category==='Food')
        {
            setFoodList((prevState) => {
              return [...prevState, { ...item, id: productId }];
            });

        }
        else{
            setSkincareList((prevState)=>{
                 return [...prevState, { ...item, id: productId }];
            })
        }   
    }
    useEffect(()=>{
        if(!isRendered){
            isRendered=true
            for (const item in localStorage) {
              if (item.includes("Product_ID")) {
                const val = JSON.parse(localStorage.getItem(item));
                addItemToList(val, val.productCategory,item);
              }
            }
        }
    },[])
    
    return (
      <Fragment>
        <ProductForm
          onElectronicChange={setElectronicList}
          onFoodChange={setFoodList}
          onSkincareChange={setSkincareList}
        />
        <Products label="Electronic" productList={electronicList}  onDelete={setElectronicList}/>
        <Products label="Food" productList={foodList} onDelete={setFoodList} />
        <Products label="Skincare" productList={skincareList} onDelete={setSkincareList} />
      </Fragment>
    );
}