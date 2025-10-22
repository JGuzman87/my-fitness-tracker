"use client"

import { useState }from "react";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";

const MealsForm = () => {

  const router = useRouter();
  const [meals, setMeals] = useLocalStorage('meals', []);

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
const handleSubmit =  (e) => {
  e.preventDefault();

  const m = [...meals, mealData];
  setMeals(m);
  try {
    localStorage.setItem('meals', JSON.stringify(m));
  } catch (err) {
    console.error('Error writing meals to localStorage', err);
  }

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
      className="bg-white flex flex-col gap-2 p-4 col-span-1"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl">Meal</h1>

      <label htmlFor="date">Date:</label>
      <input
        className="bg-gray-300 max-w-full p-1"
        type="date"
        name="date"
        value={mealData.date}
        onChange={handleChange}
      />

      <label htmlFor="meal_name">Meal Name:</label>
      <input
        className="bg-gray-300 max-w-full p-1"
        type="text"
        name="meal_name"
        value={mealData.meal_name}
        onChange={handleChange}
      />
      <label htmlFor="calories">Calories:</label>
      <input
        className="bg-gray-300 max-w-full p-1"
        type="number"
        name="calories"
        value={mealData.calories}
        onChange={handleChange}
      />
      <label htmlFor="protein">Protein:</label>
      <input
        className="bg-gray-300 max-w-full p-1"
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
