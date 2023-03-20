import axios from 'axios'

export const FetchMeal = (setMeals) => {
    axios.get('https://meal-9w3g.onrender.com')
    .then(({data}) => setMeals(data))
}

export const addMeal = (name, setName, setMeals) => {
    axios.post("https://meal-9w3g.onrender.com/saveMeal", { name })
    .then(() => {
        FetchMeal(setMeals);
        setName("")
    })
}

export const editMeal = (name, mealId, setMeals, setName, setEditMyMeal) => {
    axios.post("https://meal-9w3g.onrender.com/changeMeal", { _id: mealId, name })
    .then(() => {
        FetchMeal(setMeals);
        setEditMyMeal(false)
        setName("")
    })
}

export const deleteMeal = (_id, setMeals) => {
    axios.post("https://meal-9w3g.onrender.com/deleteMeal", { _id })
    .then(() => {
        FetchMeal(setMeals);
    })
}