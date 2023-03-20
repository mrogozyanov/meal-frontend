import { AiFillEdit, AiFillDelete  } from "react-icons/ai";

export const MyMeals = ({text, deleteMeal, upEditMeal}) => {
    return (
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={upEditMeal}></AiFillEdit>
            <AiFillDelete onClick={deleteMeal}></AiFillDelete>
        </div>
    )
}