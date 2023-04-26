import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css'
import Card from "../UI/Card/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "French Burger",
    description: "Deleicius french burger",
    price: 22.99,
  },
  {
    id: "m2",
    name: "South Indian curry",
    description: "A southern specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Chicken biryani",
    description: "Healthy...and sweet...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
    <Card>
        <ul>{mealsList}</ul>
    </Card>
    </section>
  );
};

export default AvailableMeals;
