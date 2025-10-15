"use client"

import { useEffect, useState } from 'react'

const MealImage = () => {
   const [image, setImage] = useState('');
    useEffect(() => {
        const fetchImage = async () => {
            const request = await fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?s=salmon"
            );
            const data = await request.json();
            setImage(data.meals[0].strMealThumb);
        }
        fetchImage();
      
    }, [])

  
  return (
    <div>{image && <img src={image} /> }</div>
  )
}

export default MealImage;