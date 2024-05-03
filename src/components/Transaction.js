import React from "react";

function Transaction({ transaction, onDelete}) {
  const { id, date, description, category, amount } = transaction;

  const handleDelete = () => {
    // Call the onDelete function provided by the parent component with the transaction ID
    onDelete(id);
  };

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button className="ui button red" onClick={handleDelete}>
          Delete
        </button>
      </td>

    </tr>
  );
}

export default Transaction;
