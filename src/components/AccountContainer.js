import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data); // Initialize filtered transactions with all transactions
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleAddTransaction = newTransaction => {
    // Make a POST request to the backend API to persist the new transaction
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
      .then(response => response.json())
      .then(data => {
        // Update the local state with the new transaction data returned from the API
        setTransactions([...transactions, data]);
        setFilteredTransactions([...filteredTransactions, data]);
        console.log("New transaction added:", data);
      })
      .catch(error => console.error("Error adding new transaction:", error));
  };

  const handleSearch = searchTerm => {
    // Filter transactions based on the search term
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleDeleteTransaction = id => {
    // Make a DELETE request to the backend API to delete the transaction
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        // Remove the deleted transaction from the local state
        const updatedTransactions = transactions.filter(
          transaction => transaction.id !== id
        );
        setTransactions(updatedTransactions);
        setFilteredTransactions(updatedTransactions);
        console.log("Transaction deleted:", id);
      })
      .catch(error => console.error("Error deleting transaction:", error));
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={filteredTransactions} onDelete={handleDeleteTransaction}/>
    </div>
  );
}

export default AccountContainer;
