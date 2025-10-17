"use client";

import { useEffect, useState } from "react";
import MealImage from "./MealImage";

const MealCard = () => {
  const [storedMeals, setStoredMeals] = useState([]);

  useEffect(() => {
    const savedMeal = localStorage.getItem("meals");
    if (savedMeal) {
      try {
        const parsed = JSON.parse(savedMeal);
 
          setStoredMeals(parsed);
     
      } catch {
        console.error("Error parsing stored meal");
      }
    }
  }, []);
//function to delete cards
  const deleteCard = (deleteMeal) => {

    const updatedMealCards = storedMeals.filter(
      (mealName) => mealName.meal_name !== deleteMeal
    );

    localStorage.setItem("meals", JSON.stringify(updatedMealCards));
    setStoredMeals(updatedMealCards);
  };
//function to handle the delete
  const handleDelete = (index) => {
    deleteCard(index);
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US");
  return (
    <>
      {storedMeals &&
        storedMeals.length > 0 &&
        storedMeals.map((meal) => (
          <div key={meal && meal.meal_name} className="card card-border bg-primary text-white">
            <div className="card-body">
              <h2 className="card-title">{meal.meal_name} </h2>
              <MealImage mealName={meal.meal_name}/>
              <p> Calories: {`${meal.calories}`}</p>
              <p> Protein: {`${meal.protein} grams`}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(meal.meal_name)}
                >
                  Delete
                </button>
              </div>
              <div className="font-thin">{formattedDate}</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default MealCard;
