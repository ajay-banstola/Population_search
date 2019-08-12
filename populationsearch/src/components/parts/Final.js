import React from "react";

class Final extends React.Component {
  state = {
    countries: [
      {
        name: "country1",
        cities: [
          {
            name: "city1-1",
            gender: [
              {
                name: "male",
                ageold: 12232334,
                ageyoung: 23222332,
                agechild: 78788
              },
              {
                name: "female",
                ageold: 122234,
                ageyoung: 21113232,
                agechild: 7844788
              }
            ]
          },
          {
            name: "city1-2",
            gender: [
              {
                name: "male",
                ageold: 124434,
                ageyoung: 2322232,
                agechild: 7855788
              },
              {
                name: "female",
                ageold: 123444,
                ageyoung: 23221232,
                agechild: 7811788
              }
            ]
          },
          {
            name: "city1-3",
            gender: [
              {
                name: "male",
                ageold: 123334,
                ageyoung: 2443232,
                agechild: 7833788
              },
              {
                name: "female",
                ageold: 121134,
                ageyoung: 2333232,
                agechild: 7844788
              }
            ]
          }
        ]
      },
      {
        name: "country2",
        cities: [
          {
            name: "city2-1",
            gender: [
              {
                name: "male",
                ageold: 10,
                ageyoung: 20,
                agechild: 5
              },
              {
                name: "female",
                ageold: 40,
                ageyoung: 20,
                agechild: 10
              }
            ]
          },
          {
            name: "city2-2",
            gender: [
              {
                name: "male",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              },
              {
                name: "female",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              }
            ]
          },
          {
            name: "city3-3",
            gender: [
              {
                name: "male",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              },
              {
                name: "female",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              }
            ]
          }
        ]
      }
    ],
    selectedcountry: "country1",
    selectedCity: "city1-1",
    selectedgender: "male"
  };

  handleChange = e => {
    let country = this.state.countries.filter(country => {
      return country.name === e.target.value;
    });
    let selectedCity = country[0].cities[0].name;
    this.setState({ selectedcountry: e.target.value, selectedCity }, () =>
      console.log(this.state.selectedCity)
    );
  };

  handleChange2 = e => {
    this.setState({ selectedCity: e.target.value });
  };

  handleChange3 = e => {
    this.setState({ selectedgender: e.target.value });
  };

  render = () => {
    // var sum = this.state.countries.map(countr => {
    //   return countr.cities.map(sumwala => {
    //     return sumwala.gender.map((genderwala, i) => {
    //       return "ahay";
    // genderwala[i].agechild +
    // genderwala[i].ageold +
    // genderwala[i].ageyoung
    //     });
    //   });
    // });
    var sum = this.state.countries.map((countr, i) => {
      return countr.cities.map((sumwala, j) => {
        return sumwala.gender.map((genderwala, k) => {
          return (sum =
            genderwala.agechild + genderwala.ageyoung + genderwala.ageold);
        });
      });
    });

    console.log(sum);
    // console.log(this.state.countries[0].cities[0].gender[0].agechild);
    let country = this.state.countries.filter(country => {
      return country.name === this.state.selectedcountry;
    });

    if (this.state.selectedCity !== "All") {
      var city = country[0].cities.filter(cityname => {
        return cityname.name === this.state.selectedCity;
      });
    } else {
      city = country[0].cities;
    }
    if (this.state.selectedgender !== "All") {
      var value = city[0].gender.filter(gendername => {
        return gendername.name === this.state.selectedgender;
      });
    } else {
      value = city[0].gender[0].ageyoung;
    }

    return (
      <div>
        countries
        <select
          value={this.state.selectedcountry}
          onChange={e => {
            this.handleChange(e);
          }}
        >
          {this.state.countries.map((country, i) => {
            return <option key={i}>{country.name}</option>;
          })}
        </select>
        cities
        <select
          value={this.state.selectedCity}
          onChange={this.handleChange2.bind(this)}
        >
          <option>All</option>
          {country[0].cities.map((sal, i) => {
            return <option key={i}>{sal.name}</option>;
          })}
        </select>
        gender
        <select
          value={this.state.selectedgender}
          onChange={this.handleChange3.bind(this)}
        >
          <option>All</option>
          <option>male</option>
          <option>female</option>
        </select>
        {/* {this.state.selectedgender === "All" ||
        this.state.selectedCity === "All" ? (
          <div> Add garna baki xa</div>
        ) : (
          // <div>{value[0].age}</div>
          <div>

          </div>
        )} */}
        <table>
          <tbody>
            <tr>
              <th>Populationtype </th>
              <th>Number </th>
            </tr>
          </tbody>
        </table>
        {/* {console.log(country)}
        {console.log(city)} */}
        {/* {console.log(value)} */}
        {value[0].agechild}
        <br />
        {value[0].ageold}
        <br />
        {value[0].ageyoung}
        <br />
        {sum[1][0][0]}
        <br />
        {/* {
          (country.map = (co, i) => {
            return co[i].city[i].gender[i].agechild;
          })
        } */}
        {/* {country[0].cities[0].gender[0].agechild} */}
        {/* {country} */}
        {/* {this.state.countries.map((country, i) => {
          return country.name;
        })}
        <br />
        {country[0].cities.map((sal, i) => {
          return sal.name;
        })}
        {country[0].cities.map((sal, i) => {
          return sal.name;
        })}
        <br />
        {this.state.selectedgender} */}
      </div>
    );
  };
}

export default Final;
