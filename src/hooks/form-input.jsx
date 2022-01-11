import { useState } from "react";

const useFormInput = (validateValue) => {

    const [enteredValue , setEnteredValue] = useState('');
    const [isTouched , setIsTouched] = useState(false);

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const valueBlurHandler = () => {
        setIsTouched(true);
    }
    const valueIsValid = validateValue(enteredValue);
    const hasError =  !valueIsValid && isTouched;
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid:valueIsValid,
        valueChangeHandler,
        valueBlurHandler,
        hasError,
        reset,

    }

};

export default useFormInput;