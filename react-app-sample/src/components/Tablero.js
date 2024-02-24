import React, { useState } from "react";
import Contador from "./Contador";
import Boton from "./Boton";

const Tablero = () => {
    const [yo, setYo] = useState(0);
    const [tu, setTu] = useState(0);

    const incrementarYo = () => {
        setYo(yo + 1);
    };

    const decrementarYo = () => {
        setYo(yo - 1);
    };

    const incrementarTu = () => {
        setTu(tu + 1);
    };

    const decrementarTu = () => {
        setTu(tu - 1);
    };

    return (
        <div>
            <div>
                <Contador count={yo} />
            </div>
            <div>
                <Contador count={tu} />
            </div>
        </div>
    );
};

export default Tablero;