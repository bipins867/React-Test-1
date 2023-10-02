import { useReducer } from "react";

const formReducer = (state, action) => {
  const objVal = { ...state };

  if (action.type === "productName") {
    objVal.productName = action.val;
  } else if (action.type === "productPrice") {
    objVal.productPrice = action.val;
  } else {
    objVal.productCategory = action.val;
  }

  return objVal;
};

export default (props) => {
  const [formState, dispatchForm] = useReducer(formReducer, {
    productName: "",
    productCategory: "Electronic",
    productPrice: "",
  });

  const onProductNameChangeHandler = (event) => {
    dispatchForm({
      type: "productName",
      val: event.target.value,
    });
  };
  const onProductPriceChangeHandler = (event) => {
    dispatchForm({
      type: "productPrice",
      val: event.target.value,
    });
  };
  const onProductCategoryChangeHandler = (event) => {
    dispatchForm({
      type: "productCategory",
      val: event.target.value,
    });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (formState.productCategory === "Electronic") {
      props.onElectronicChange((prevState) => {
        const productId = 'Product_ID'+Math.random().toString();
        localStorage.setItem(productId,JSON.stringify(formState))
        const newState = [
          ...prevState,
          { ...formState, id: productId },
        ];
        return newState;
      });
    } else if (formState.productCategory === "Food") {
      props.onFoodChange((prevState) => {
        const productId = 'Product_ID'+Math.random().toString();
        localStorage.setItem(productId, JSON.stringify(formState));
        const newState = [
          ...prevState,
          { ...formState, id: productId },
        ];
        return newState;
      });
    } else {
      props.onSkincareChange((prevState) => {
        const productId = 'Product_ID'+Math.random().toString();
        localStorage.setItem(productId, JSON.stringify(formState));
        const newState = [
          ...prevState,
          { ...formState, id: productId },
        ];
        return newState;
      });
    }

    dispatchForm({ type: "productName", val: "" });
    dispatchForm({ type: "productPrice", val: "" });
  };
  return (
    <form id="productForm" onSubmit={onSubmitForm}>
      <div class="mb-3">
        <label for="productName" class="form-label">
          Product Name
        </label>
        <input
          type="text"
          value={formState.productName}
          onChange={onProductNameChangeHandler}
          class="form-control"
          id="productName"
          required
        />
      </div>
      <div class="mb-3">
        <label for="productCategory" class="form-label">
          Product Category
        </label>
        <select
          class="form-select"
          value={formState.productCategory}
          onChange={onProductCategoryChangeHandler}
          id="productCategory"
          required
        >
          <option value="Electronic">Electronic</option>
          <option value="Food">Food</option>
          <option value="Skincare">Skincare</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="productPrice" class="form-label">
          Product Price
        </label>
        <input
          type="number"
          value={formState.productPrice}
          onChange={onProductPriceChangeHandler}
          class="form-control"
          id="productPrice"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary" onclick="addProduct()">
        Add Product
      </button>
    </form>
  );
};
