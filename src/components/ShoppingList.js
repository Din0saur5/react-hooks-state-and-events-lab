import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [selectedCategory, SetSelectedCategory] = useState('All')

function handleFilter(e){
  SetSelectedCategory(e.target.value)
  
}

  const filterList = items.filter((item) => 
   (selectedCategory === "All") ? true: item.category === selectedCategory
    
  );


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
