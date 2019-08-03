import React from "react";
import Select from "react-select";
import PostData from "../src/dataService.json";
import City from "../src/city.json";
import "./App.css";
import Tables from "./Tables";

class App extends React.Component {
  render() {
    console.log(PostData);
    return (
      <div>
        <Select options={PostData} />
        <Select options={City} />
        <div>
          {/* <div class="left">
            {PostData.map((postDetail, index) => {
              return <h1 key={index}>{postDetail.value}</h1>;
            })}
          </div>
          <div class="right">
            {City.map((city, index) => {
              return <h1 key={index}>{city.value}</h1>;
            })}
          </div> */}
          <Tables />
        </div>
      </div>
    );
  }
}

export default App;
