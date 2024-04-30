import React, { useEffect, useState } from "react";

function AddTransactionForm({fetchFunction}) {
  const [submittedTransaction, setSubmittedTransaction] = useState(null);

  useEffect(() => {
   fetchFunction(submittedTransaction)

  })

  function handleSubmit(e) {
    e.preventDefault();
    const date = e.target.date.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const amount = e.target.amount.value;

    const formData = {
      date: date,
      description: description,
      category: category,
      amount: amount
    }

    setSubmittedTransaction(formData);
    e.target.reset();

  }

  return (
    <div className="ui segment">
      <form className="formbox" onSubmit={handleSubmit}>
        <div className="form">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" />
          <br></br>
        </div>
        <br></br>
        <br></br>
        <button className="btn btn-outline-info ms-1" type="submit">
          Add Transaction
        </button>
      </form>

    </div>
  );
}

export default AddTransactionForm;