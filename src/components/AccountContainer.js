import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  // State to hold the account data retrieved from the server
  const [accountData, setAccountData] = useState([]);

  // State to trigger a re-fetch of account data when updated
  const [accountUpdate, setAccountUpdate] = useState([...accountData]);

  // Function to fetch account data from the server when the component mounts
  function fetchAccountData() {
    fetch("http://localhost:8001/transactions")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        setAccountData(data); // Update the accountData state with fetched data
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // useEffect hook to call fetchAccountData when the component mounts
  useEffect(function() {
    fetchAccountData();
  }, [accountUpdate]); // Trigger useEffect when accountUpdate state changes

  // Function to search transactions based on search terms
  function searchFunction(searchTerms) {
    fetch("http://localhost:8001/transactions")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        const filtered = data.filter(function(item) {
          return item.description.includes(searchTerms);
        });
        setAccountData(filtered); // Update accountData state with filtered data
      })
      .catch(function(error) {
        console.log(error);
      });
  }
/*
// Function to add a new transaction
  function fetchAddData(submitted) {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(submitted) // Convert submitted data to JSON string
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        let newData = [];
        newData.push(data);
        setAccountUpdate(...newData); // Trigger a re-fetch of account data
        console.log(newData);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
*/
  // Function to add a new transaction
  function fetchAddData(submitted) {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(submitted) // Convert submitted data to JSON string
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        let newData = [];
        newData.push(data);
        setAccountUpdate(...newData); // Trigger a re-fetch of account data
        console.log(newData);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // Render the component
  return (
    <div>
      {/* Search component to allow users to search transactions */}
      <Search searchFunction={searchFunction} />
      {/* AddTransactionForm component to allow users to add new transactions */}
      <AddTransactionForm fetchFunction={fetchAddData} />
      {/* TransactionsList component to display the list of transactions */}
      <TransactionsList data={accountData} />
    </div>
  );
}

export default AccountContainer;
