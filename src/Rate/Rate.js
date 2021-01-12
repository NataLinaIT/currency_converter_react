import React, { Component } from "react";
import Calc from "../Calc/Calc";
import "./Rate.css";

export default class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyRate: {},
      date: "",
    };
    this.currency = ["USD", "RUB", "BRL", "PHP"];
    this.getRate();
  }
  getRate = () => {
    fetch(`https://api.exchangeratesapi.io/latest`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        this.setState({ currencyRate: result });
      });
  };
  render() {
    return (
      <div className="rate-wrapper">
        <h3> Курс валют на {this.state.date}</h3>

        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, i) => (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">
                {this.state.currencyRate[keyName].toFixed(2)}*
              </div>
              <p>*Покупка за 1 EUR</p>
            </div>
          ))}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }
}
