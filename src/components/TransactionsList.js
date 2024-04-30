import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ data }) {
  function renderTransactions() {
    return data.map(function(dataItem) {
      return <Transaction key={dataItem.id} date={dataItem.date} description={dataItem.description} category={dataItem.category} amount={dataItem.amount} />;
    });
  }
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
        {renderTransactions()}
      </tbody>
    </table>
  );
}
export default TransactionsList;
