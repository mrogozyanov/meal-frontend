
import { useEffect, useState } from 'react';
import './App.css';
import { addMeal, FetchMeal, editMeal, deleteMeal } from './FetchMeal';
import { MyMeals } from './MyMeals';

function App() {

  const [Meals, setMeals] = useState([]);
  const [name, setName] = useState("");
  const [mealId, setmealId] = useState("");
  const [editMyMeal, setEditMyMeal] = useState(false)


  useEffect(() => {
    FetchMeal(setMeals)
  }, []);

  const upEditMeal = (_id, name) => {
    setEditMyMeal(true);
    setName(name);
    setmealId(_id)
  }


  return (
    <div>
      <h1>Meal Plan</h1>
      <input type="text" placeholder='Add a meal' value={name} onChange={(e) => setName(e.target.value)}></input>
      <button disabled={!name} onClick={editMyMeal ? () => editMeal(name, mealId, setMeals, setName, setEditMyMeal) : () => addMeal(name, setName, setMeals)}>Add</button>
      {Meals.map((meal) => <MyMeals text={meal.name} key={meal._id}
      upEditMeal={() => upEditMeal(meal._id, meal.name)}
      deleteMeal={() => deleteMeal(meal._id, setMeals)}/> )}
    </div>
  );
}

export default App;
