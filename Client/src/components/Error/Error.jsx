import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>

      <img src="https://i.redd.it/o6px8q59yw401.jpg" alt="error" />
    </div>
  );
};

export default Error;
