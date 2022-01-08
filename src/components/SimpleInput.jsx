import {  useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // const nameInputRef = useRef();
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched , setEnteredNameTouched] = useState(false);
  // const [formIsValid , setFormIsValid] = useState(false);


  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  
    if(enteredNameIsValid)
      formIsValid = true;
  

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  }


  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if(enteredName.trim() === '')
    return;


    console.log(enteredName);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL , DON'T MANIPULATE THE DOM
    setEnteredName("");
    setEnteredNameTouched(false);
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled = {!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
