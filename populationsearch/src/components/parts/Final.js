import React from "react";
import Mytable from "./MyTable";
class Final extends React.Component {
  state = {
    countries: [
      {
        name: "Nepal",
        cities: [
          {
            name: "Kathmandu",
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
            name: "Pokhara",
            gender: [
              {
                name: "male",
                ageold: 124434,
                ageyoung: 2322232,
                agechild: 7855788
              },
              {
                name: "female",
                ageold: 122444,
                ageyoung: 23321232,
                agechild: 7811788
              }
            ]
          },
          {
            name: "Chitwan",
            gender: [
              {
                name: "male",
                ageold: 122334,
                ageyoung: 2434232,
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
        name: "India",
        cities: [
          {
            name: "Mumbai",
            gender: [
              {
                name: "male",
                ageold: 102222,
                ageyoung: 201111,
                agechild: 5232323
              },
              {
                name: "female",
                ageold: 4023232,
                ageyoung: 202323,
                agechild: 1012323
              }
            ]
          },
          {
            name: "Kolkata",
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
            name: "Chennai",
            gender: [
              {
                name: "male",
                ageold: 12323234,
                ageyoung: 21223,
                agechild: 73438788
              },
              {
                name: "female",
                ageold: 12334344,
                ageyoung: 3232,
                agechild: 782323788
              }
            ]
          }
        ]
      }
    ],
    selectedcountry: "Nepal",
    selectedCity: "Kathmandu",
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
      value = city[0].gender;
    }

    return (
      <div>
        COUNTRIES:
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
        CITIES:
        <select
          value={this.state.selectedCity}
          onChange={this.handleChange2.bind(this)}
        >
          <option>All</option>
          {country[0].cities.map((sal, i) => {
            return <option key={i}>{sal.name}</option>;
          })}
        </select>
        GENDER:
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
        {console.log(sum)}
        {/* {console.log(country)}
        {console.log(city)} */}
        {/* {console.log(value)} */}
        {/* {value[0].agechild}
        <br />
        {value[0].ageold}
        <br />
        {value[0].ageyoung}
        <br />
        {sum[1][0][0]}
        <br /> */}
        <Mytable
          datavalue={sum}
          valuechild={value[0].agechild}
          valueold={value[0].ageold}
          valueyoung={value[0].ageyoung}
        />
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
