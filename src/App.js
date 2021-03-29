import React from "react";
import Avatar from "../src/images/avatar.jpg";
import formatNumber from "format-number";
import "./App.css";
import { store } from "./store/index";
import ButtonGroup from "./buttonGroup";

class App extends React.Component {
  render() {
    const state = store.getState();
    return (
      <div className="App">
        <img src={Avatar} alt="avatar" />
        <p className="hello_text">
          Hello! {state.username}
        </p>
        <div className="total_amount">
          <p className="total_number">{formatNumber({ prefix: "$" })(state.money)}</p>
          <p className="amount_info">Total Amount</p>
        </div>

        <ButtonGroup
          key={1}
          title={["10000", "5000"]}
        />
        <p className="App_giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
};

export default App;
