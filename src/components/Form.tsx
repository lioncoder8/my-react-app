import { useState } from "react";
export default function Form() {
    const [firstName,setfirstName] = useState('');
    const [lastName,setlastName] = useState('');
  
    function handleFirstNameChange(e) {
        setfirstName(e.target.value);
    }
  
    function handleLastNameChange(e) {
        setlastName(e.target.value);
    }
  
    function handleReset() {
        setfirstName('');
        setlastName('');
    }
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hi, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reset</button>
      </form>
    );
  }