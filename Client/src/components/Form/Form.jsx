import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({login}) => {

  const [errors, setErrors] = useState({})

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evento) => {
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value,
    });

    setErrors(validation({
      ...userData,
      [evento.target.name]: evento.target.value,
    }))
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  }

  return (
    <form>
      <label>Email: </label>
      <input
        name="email"
        type="email"
        placeholder="Enter your mail"
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <br />

      <label>Password: </label>
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
