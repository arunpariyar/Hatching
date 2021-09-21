import React from "react";

import AddOptions from "./AddOptions";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";
import "normalize.css";
import "../styles/style.scss";

export default class IndecisionApp extends React.Component {
  state = {
    title: "Indecision",
    subtitle: "Make Your Life Simpler",
    options: [],
    selectedOption: undefined,
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };

  handleRemoveOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: this.state.options.filter((option) => {
          return optionToRemove !== option;
        }),
      };
    });
  };

  handlePick = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex];
    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Please enter a valid input";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("Component Did Unmount");
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              handleRemoveAll={this.handleRemoveAll}
              handleRemoveOption={this.handleRemoveOption}
              options={this.state.options}
            />
            <AddOptions handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
        </div>
      </div>
    );
  }
}
