import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealsItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault();

        const eneteredAmount = amountInputRef.current.value;
        const eneteredAmountNumber = +eneteredAmount;

        if(eneteredAmount.trim().length === 0 || eneteredAmountNumber < 1 || eneteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(eneteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
