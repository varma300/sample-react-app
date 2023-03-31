import React from "react";

function Header() {
    return (
      <header style={{ backgroundColor: darkMode ? 'black' : 'white' }}>
        <h1>My App</h1>
      </header>
    );
  }

  export default Header