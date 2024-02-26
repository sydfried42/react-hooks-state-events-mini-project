import React, {useState} from "react";

function CategoryFilter({CATEGORIES, selected, setSelected}) {

  

  function handleFilter(catagory) {
    setSelected(catagory)
  
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((catagory, index)=>{
        return (
          <button 
          className={selected === catagory ? "selected" : ""} 
          onClick={()=>{handleFilter(catagory)}}
          key={index}
          >{catagory}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
