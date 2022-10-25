import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      await axios.post("http://localhost:3001/user/createuser", {
        firstName: formData.get("firstname"),
        lastName: formData.get("lastname"),
        userName: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      });
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First name
          <input
            type="text"
            autoComplete="firstname"
            name="firstname"
            required
          />
        </label>
        <label>
          Last name
          <input type="text" autoComplete="lastname" name="lastname" required />
        </label>
        <label>
          E-mail
          <input type="email" autoComplete="email" name="email" required />
        </label>
        <label>
          Password
          <input
            type="password"
            autoComplete="new-password"
            name="password"
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
