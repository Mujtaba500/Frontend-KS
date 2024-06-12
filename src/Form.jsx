import { useState } from "react";

function Form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleChange = (e) => {
    const inputName = e.target.id;
    // console.log(inputName);
    setData({
      ...data,
      [inputName]: e.target.value,
    });
  };
  return (
    <>
      <form>
        <label for="firstName">First name:</label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={data.firstName}
          class="text-gray-700"
        />
        <br />
        <label for="lastName">Last name:</label>
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={data.lastName}
        />
        <br />
        <label for="email">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={data.email}
        />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          type="text"
          id="password"
          name="password"
          onChange={handleChange}
          value={data.password}
        />
        <br />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
