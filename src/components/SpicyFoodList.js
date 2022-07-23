import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  // foods is the original variable which is set to our spicyFoods array

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const updatedFoods = [...foods, newFood]
    setFoods(updatedFoods)
    console.log(newFood);
    console.log(foods)
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleIclick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleIclick(id) {
    const newFoodsList = foods.map(food => {
      if(food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        } // used the spread operator to add the food object to the array with an updated
        // key value pair due to the click 
      } else {
        return food
        // returns the original food object if the ID does not match 
      }
    })
    setFoods(newFoodsList)

  }

  // function which removed items from the foods array when they were clicked on
  // function handleIclick(id) {
  //   const removedFoods = foods.filter(food => food.id !== id)
  //   setFoods(removedFoods)
    
  // }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
