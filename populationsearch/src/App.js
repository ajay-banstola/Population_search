import React from "react";
import Select from "react-select";
import PostData from "../src/dataService.json";

class App extends React.Component {
  render() {
    console.log(PostData);
    return (
      <div>
        <Select options={PostData} />
        <Select options={PostData} />
        {PostData.map((postDetail, index) => {
          return <h1 key={index}>{postDetail.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
