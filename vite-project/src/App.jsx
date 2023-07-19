import React, { useState } from "react";

function App() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
    Email: "",
  });
  // const [lName, setlName] = useState("");

  // function updateFname(event) {
  //   const firstName = event.target.value;
  //   setfName(firstName);
  // }

  // function updateLname(event) {
  //   const lastName = event.target.value;
  //   setlName(lastName);
  // }

  function handleChange(event) {
    const { value, name } = event.target;

    setfullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          Email: prevValue.Email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          Email: prevValue.Email,
        };
      } else if (name === "Email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          Email: value,
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <p>{fullName.Email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <input
          onChange={handleChange}
          name="Email"
          placeholder="Email"
          value={fullName.Email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
