import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [sameError, setsameError] = useState('');
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    if (!email.includes('@')) {
      setEmailError('Email must contain "@" symbol.');
      return;
    }
    else if(password.length<8)
    {
        setPassError('Password needs to be 8 ');
        return;
    }
    else if(password!=confirmPassword)
    {
        setsameError('Passwords not matching');
        return;
    }
    else
    {
        alert("Form Submitted");
        setEmailError('');
        setPassError('');
        setsameError('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    // Reset email error state

    // Other validation logic for the password, confirmPassword, etc.

    // Call the Display function here
    Display(email, password, confirmPassword);

    // You can add additional logic or API calls here

    console.log('Form submitted with email:', email, 'and password:', password);
  };

  const Display = (email, password, confirmPassword) => {
    // Add logic for the Display function
    console.log('Display function called with email:', email, 'and password:', password);
    // You can update the UI, make API calls, etc.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <br />
        <input
          type="email"
          className="search-bar"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      <div>
        <label>Password:</label>
        <br />
        <input
          type="password"
          className="search-bar"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passError && <p style={{ color: 'red' }}>{passError}</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <br />
        <input
          type="password"
          className="search-bar"
          name="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {sameError && <p style={{ color: 'red' }}>{sameError}</p>}
      </div>
      <br />
      <button className="search-sub" type="submit">
        Sign In
      </button>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById('appl'));