import React from "react";
import Select from "react-select";
import PostData from "../src/dataService.json";

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
        {PostData.map((postDetail, index) => {
          return <h1>{postDetail.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
