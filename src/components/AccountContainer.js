import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionsData, setTransactionsData] = useState([]);
  const [transactionsUpdate, setTransactionUpdate] = useState([]);

  useEffect(function fetchTransactions() {
    fetch("http://localhost:8001/transactions")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        setTransactionsData(data);
      });
  }, [transactionsUpdate]);

  async function fetchAddTransaction(submitted) {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(submitted)
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        let newData = [];
        newData.push(data);
        setTransactionUpdate(newData);
      });
  }

  async function searchTransaction(searchInput) {
    fetch("http://localhost:8001/transactions")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        const filtered = data.filter(function(item) {
          return item.description.includes(searchInput);
        });
        setTransactionsData(filtered);
      });
  }

  

  return (
    <div>
      <Search searchFunction={searchTransaction} />
      <AddTransactionForm fetchFunction={fetchAddTransaction} />
      <TransactionsList data={transactionsData} />
    </div>
  );
}

export default AccountContainer;
