import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  // const nameInputRef = useRef();
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const [formIsValid , setFormIsValid] = useState(false);

  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const enteredNameIsValid = enteredName.trim() !== "";

  const enteredEmptyEmail = enteredEmail.trim() !== "";
  const enteredValidEmail = enteredEmail.match(regex);
  const enteredEmailIsValid = enteredEmptyEmail && enteredValidEmail;

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredEmptyEmail || !enteredValidEmail) return;

    console.log(enteredName , enteredEmail);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL , DON'T MANIPULATE THE DOM
    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
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
      <div className={emailInputClasses}>
        <label htmlFor="name">Email</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {(!enteredEmptyEmail && enteredEmailTouched) && (
          <p className="error-text">Email must not be empty.</p>
        )}
        {enteredEmptyEmail && !enteredValidEmail && enteredEmailTouched  && (
          <p className="error-text">Entered Invalid Email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
