import React, { useState } from 'react'
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
    const [categories, setCategories] = useState([])

    const handleAddCategory = (value) =>{
        setCategories([value, ...categories])
    }

    const handleRemove = index => {
      setCategories(categories.filter((category) => category !== index));
  };

    const handleRemoveAll = () => {
      setCategories([]);
      };

  return (
    <>
        {/* Titulo */}
        <div>
          <h1>GifApp</h1>
        </div>
        
        {/* Input */}
        <div className='btn-search'>
          <AddCategory addCategory={handleAddCategory}/>
          <button className="btn" onClick={handleRemoveAll}>Reset</button>
        </div>
        {/* Listado de Gif */}
        
        {
          categories.map((category) => (
            <GifGrid 
              className="categories" 
              key={category} 
              category={category} 
              removeCategory={handleRemove}
              />))
        }
        </>
  )
}
