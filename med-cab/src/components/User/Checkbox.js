import React, { Component } from "react";

class Checkbox extends Component {
  state = {
    isChecked: false,
    checked: []
  };

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));

    handleCheckboxChange(label);
  };
  isDisabled = id => {
    console.log("Running isdisabled");
    return (
      this.state.checked.length > 1 && this.state.checked.indexOf(id) === -1
    );
  };

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;
 

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            disabled={this.props.disabled}
            onChange={this.toggleCheckboxChange}
          />

          {label}
        </label>
      </div>
    );
  }
}

// Checkbox.propTypes = {
//   label: propTypes.string.isRequired,
//   handleCheckboxChange: propTypes.func.isRequired,
// };

export default Checkbox;
