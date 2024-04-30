import React, { useEffect, useState } from "react";

function AddTransactionForm({ fetchFunction }) {
  // State to hold the form data
  const [submitted, setSubmitted] = useState(null);

  // useEffect hook to trigger the fetchFunction when form data changes
  useEffect(function () {
    if (submitted !== null) {
      fetchFunction(submitted);
    }
  });
/*
function handleSubmit(e) {
    e.preventDefault();
    // Extract form field values
    const date = e.target.date.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const amount = e.target.amount.value;

    // Create an object with form data
    const formData = {
      date: date,
      description: description,
      category: category,
      amount: amount
    };

    // Set the submitted form data
    setSubmitted(formData);
    // Reset the form fields
    e.target.reset();
  }
*/
  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // Extract form field values
    const date = e.target.date.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const amount = e.target.amount.value;

    // Create an object with form data
    const formData = {
      date: date,
      description: description,
      category: category,
      amount: amount
    };

    // Set the submitted form data
    setSubmitted(formData);
    // Reset the form fields
    e.target.reset();
  }

  // Render the component
  return (
    <div className="ui segment">
      <form className="formbox" onSubmit={handleSubmit}>
        <div className="form">
          {/* Form fields */}
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" />
          <br />
        </div>
        <br />
        <br />
        {/* Submit button */}
        <button className="btn btn-outline-info ms-1" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
