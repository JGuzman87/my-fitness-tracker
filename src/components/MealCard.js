"use client";

import { useEffect, useState } from "react";
import MealImage from "./MealImage";
import { format, parse, isValid } from 'date-fns';




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
  const handleDelete = (mealName) => {
    deleteCard(mealName);
  };



const formattedDate = (storedDate) => {
  if (!storedDate) return "—";

  // Case 1: plain "YYYY-MM-DD" string from <input type="date">
  if (
    typeof storedDate === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(storedDate)
  ) {
    const parsedDate = parse(storedDate, "yyyy-MM-dd", new Date());
    return isValid(parsedDate) ? format(parsedDate, "MM-dd-yyyy") : "—";
  }

  // Case 2: ISO string with time, timestamp number, or Date instance
  const d = storedDate instanceof Date ? storedDate : new Date(storedDate);
  return isValid(d) ? format(d, "MM-dd-yyyy") : "—";
};
 

  return (
    <>
      {storedMeals &&
        storedMeals.length > 0 &&
        storedMeals.map((meal) => (
          <div
            key={meal && meal.meal_name}
            className="card card-border bg-primary text-white shadow-blue-2002xl"
          >
            <div className="card-body">
              <div className="card-actions justify-end">
                <button
                  className="btn btn-square btn-sm"
                  onClick={() => handleDelete(meal.meal_name)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h2 className="card-title">{meal.meal_name} </h2>
              <MealImage mealName={meal.meal_name} />
              <p> Calories: {`${meal.calories}`}</p>
              <p> Protein: {`${meal.protein} grams`}</p>
              <div className="card-actions justify-end"></div>
              <div className="font-thin">
                {meal && formattedDate(meal?.date)}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default MealCard;
