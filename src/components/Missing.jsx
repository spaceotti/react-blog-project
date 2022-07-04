import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Page not found</h2>
      <Link to="/">Visit Our Homepage</Link>
    </main>
  );
};

export default Missing;
