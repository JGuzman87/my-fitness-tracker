"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";


const MealsForm = () => {

  const router =  useRouter();

  const [mealData, setMealData] = useState({
    date: "",
    meal_name: "",
    calories: "",
    protein: "",
  });



  const handleChange = (e) => {
    const {name, value} = e.target;

    setMealData(prev => ({...prev, [name]:value}));
  }
const handleClick = (e) => {
  e.preventDefault();
  
  localStorage.setItem('meals', JSON.stringify(mealData));
  console.log(mealData);

  setMealData({
    date: "",
    meal_name: "",
    calories: "",
    protein: "",
  });

  router.push('/meals');

}


  return (
    <form
      className="bg-red-400 flex flex-col gap-2 p-4 col-span-1"
     onSubmit={handleClick}
    >
      <h1 className="text-2xl">Meal</h1>
      <label htmlFor="date">Date: </label>
      <input
        className="bg-white max-w-full p-1"
        type="date"
        name="date"
        value={mealData.date}
        onChange={handleChange}
        required
      />
      <label htmlFor="meal_name">Meal Name:</label>
      <input
        className="bg-white max-w-full p-1"
        type="text"
        name="meal_name" 
        value={mealData.meal_name} 
        onChange={handleChange}
      />
      <label htmlFor="calories">Calories:</label>
      <input
        className="bg-white max-w-full p-1"
        type="number"
        name="calories"
        value={mealData.calories}
              onChange={handleChange}
      />
      <label htmlFor="protein">Protein:</label>
      <input
        className="bg-white max-w-full p-1"
        type="number"
        name="protein"
        value={mealData.protein}
        onChange={handleChange}
      />
      <button className="btn btn-primary" type="submit">
        {" "}
        Enter{" "}
      </button>
    </form>
  );
};

export default MealsForm;
