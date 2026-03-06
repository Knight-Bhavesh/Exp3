import FoodItem from "./FoodItem";

function FoodList({ foods, addToCart }) {

  return (
    <div className="food-container">

      {foods.map((food) => (
        <FoodItem
          key={food.id}
          food={food}
          addToCart={addToCart}
        />
      ))}

    </div>
  );
}

export default FoodList;