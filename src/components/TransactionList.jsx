import React, { useContext } from 'react';
import Transaction from "./Transaction.jsx";

import { GlobalContext } from "../context/GlobalState.jsx";

function TransactionList() {
    const { transactions } = useContext(GlobalContext);

    console.log(transactions)

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    );
}

export default TransactionList;