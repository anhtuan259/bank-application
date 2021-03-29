import React from "react";
import { store } from "./store/index";
import { withdraw } from "./actions/index";
import formatNumber from "format-number";
import "./App.css";

const ButtonGroup = ({ title }) => (
    <div>
        {title.map((money, i) => (
            <button data-tech={money}
                key={`btn-${i}`}
                className="App_button"
                onClick={dispatchBtnAction}>
                WITHDRAW {formatNumber({ prefix: "$" })(money)}
            </button>
        ))}
    </div>
);

function dispatchBtnAction(e) {
    const money = e.target.dataset.tech;
    store.dispatch(withdraw(money));
}

export default ButtonGroup;