import React, { useState } from "react";



function Item({ name, category }) {
  const [add2Cart, SetAdd2Cart] = useState(false)

  function handleAdd2Cart(){
    SetAdd2Cart(!add2Cart)
    console.log(add2Cart)
  }
  const cartStatus = add2Cart? "in-cart":""
  //couldnt you make the classes match and make this easier
  const cartStatusBtn = add2Cart? "remove":"add" 

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartStatusBtn} onClick={handleAdd2Cart}>{add2Cart? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
