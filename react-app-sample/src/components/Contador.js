import React, { useState } from "react";

const Contador = () => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1);
    };

    const decrementar = () => {
        setCount(count - 1);
    };


    return (
        <div>
            <button onClick={incrementar}>+</button>
            <span>{count}</span>
            <button onClick={decrementar}>-</button>
        </div>
    );
};

export default Contador;