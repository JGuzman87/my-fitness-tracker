"use client";

import { useEffect, useState } from "react";

const MealCard = () => {
  const [storedMeals, setStoredMeals] = useState([]);

  useEffect(() => {
    const savedMeal = localStorage.getItem("meals");
    if (savedMeal) {
      try {
        const parsed = JSON.parse(savedMeal);
        if (Array.isArray(parsed)) {
          setStoredMeals(parsed);
        } else {
          setStoredMeals([parsed]);
        }
      } catch {
        console.error("Error parsing stored meal");
      }
    }
  }, []);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US");
  return (
    <>
      {storedMeals &&  storedMeals.length > 0 && storedMeals.map((meal) => (
        <div key={meal.name} className="card card-border bg-primary text-white">
          <div  className="card-body">
         
            <h2 className="card-title">{formattedDate} </h2>

            <p>Meal Name: {meal.meal_name}</p>
            <p> Calories: {`${meal.calories}`}</p>
            <p> Protein: {`${meal.protein} grams`}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-error">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MealCard;
