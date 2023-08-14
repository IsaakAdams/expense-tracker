import React, {useContext} from 'react';
import { GlobalContext } from "../context/GlobalState.jsx";

function Balance() {
    const {transactions } = useContext(GlobalContext);

    // Get each transaction amount and put them all in an array
    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </>
    );
}

export default Balance;