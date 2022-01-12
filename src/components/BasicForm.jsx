import useFormInput from "../hooks/form-input";
const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    hasError: firstNameHasError,
    reset: resetFirstNameInput,
  } = useFormInput((value) => value.trim() !== "");

  const {
    value: enteredSecondName,
    isValid: secondNameIsValid,
    valueChangeHandler: secondNameChangeHandler,
    valueBlurHandler: secondNameBlurHandler,
    hasError: secondNameHasError,
    reset: resetSecondNameInput,
  } = useFormInput((value) => value.trim() !== "");

  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    hasError: emailHasError,
    reset: resetEmailInput,
  } = useFormInput((value) => value.match(regex));

  let formIsValid = false;

  if (firstNameIsValid && secondNameIsValid && emailIsValid) formIsValid = true;

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const secondNameInputClasses = secondNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();
    if(!formIsValid)
    return;

    resetEmailInput();
    resetFirstNameInput();
    resetSecondNameInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={secondNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={secondNameChangeHandler}
            onBlur={secondNameBlurHandler}
            value={enteredSecondName}
          />
          {secondNameHasError && (
            <p className="error-text">Second Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Email is Invalid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
