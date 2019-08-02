import React from "react";
import Select from "react-select";

const options = [
  { value: "blues", label: "Blues" },
  { value: "rock", label: "Rock" },
  { value: "jazz", label: "Jazz" },
  { value: "orchestra", label: "Orchestra" }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Select options={options} />
        <Select options={options} />
      </div>
    );
  }
}

export default App;
