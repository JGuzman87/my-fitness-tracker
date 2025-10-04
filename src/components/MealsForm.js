import React from 'react'

const MealsForm = () => {
  return (
    <form>
        <label htmlFor='date'>Date: </label>
      <input
        className="bg-white max-w-1/2 p-1"
        type="text"
        name="date"
        required
      />
      <label htmlFor="meal_name">Meal Name:</label>
      <input type="text" />
    </form>
  );
}

export default MealsForm;