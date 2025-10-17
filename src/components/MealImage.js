"use client"

import { useEffect, useState } from 'react'

const MealImage = ({mealName}) => {
   const [image, setImage] = useState(null);

 

    useEffect(() => {
           const fetchImage = async () => {
             try { 
              const request = await fetch(
               `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(mealName)}` //use ecodedURIComponent to make it URL safe(ex: no spaces)
             );
             const data = await request.json();
             if (!request.ok) {
              throw new Error('failed to fetch')
             }
             setImage(data.meals[0].strMealThumb);
            } catch (error) {
              console.log(error, 'cannot fetch image')
            }
           };
        fetchImage();
      
    }, [mealName])

  
  return (
    <div >
      {image && <img src={image} alt={mealName}/>}
    </div>
  );
}

export default MealImage;