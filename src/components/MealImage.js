"use client"

import { useEffect, useState } from 'react'

const MealImage = ({mealName}) => {
   const [image, setImage] = useState(mealName);

    useEffect(() => {
           const fetchImage = async () => {
             const request = await fetch(
               `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
             );
             const data = await request.json();
             setImage(data?.meals[0].strMealThumb);
           };
        fetchImage();
      
    }, [])

  
  return (
    <div >
      {image && <img src={image} alt={mealName}/>}
    </div>
  );
}

export default MealImage;