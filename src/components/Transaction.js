import React from "react";

function Transaction({ date, description, category, amount }) {
  // Render a table row representing a single transaction
  return (
    <tr>
      {/* Display the date of the transaction */}
      <td>{date}</td>
      {/* Display the description of the transaction */}
      <td>{description}</td>
      {/* Display the category of the transaction */}
      <td>{category}</td>
      {/* Display the amount of the transaction */}
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
