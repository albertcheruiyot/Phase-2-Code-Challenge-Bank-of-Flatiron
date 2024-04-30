import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ data }) {
  console.log(data);
  
  // Function to render each transaction row
  function renderTransactions() {
    return data.map(dataItem => (
      <Transaction
        key={dataItem.id}
        date={dataItem.date}
        description={dataItem.description}
        category={dataItem.category}
        amount={dataItem.amount}
      />
    ));
  }
/*
key={dataItem.id}
        date={dataItem.date}
        description={dataItem.description}
        category={dataItem.category}
        amount={dataItem.amount}
*/
  // Render the component
  return (
    <table className="table table-light">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* Render transaction rows */}
        {renderTransactions()}
      </tbody>
    </table>
  );
}

export default TransactionsList;
