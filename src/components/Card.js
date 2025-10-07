"use client";

import { useEffect, useState } from "react";

const Card = () => {
  const [storedMeal, setStoredMeal] = useState(null);

  useEffect(() => {
    const savedMeal = localStorage.getItem("meals");
    if (savedMeal) {
      try {
        setStoredMeal(JSON.parse(savedMeal));
      } catch  {
        console.error("Error parsing stored meal");
      }
    }
  }, []);

  return (
    <>
      {storedMeal && (
        <div className="card card-border bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">{storedMeal.date} </h2>

            <p>Meal Name: {storedMeal.meal_name}</p>
            <p> Calories: {`${storedMeal.calories}`}</p>
            <p> Protein: {`${storedMeal.protein} grams`}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
