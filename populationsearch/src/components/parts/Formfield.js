import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

// const countries = [
//   {
//     value: "America",
//     label: "America"
//   },
//   {
//     value: "England",
//     label: "England"
//   },
//   {
//     value: "Nepal",
//     label: "Nepal"
//   },
//   {
//     value: "INDIA",
//     label: "INDIA"
//   }
// ];

// const cities = [
//   {
//     value: "Kathmandu",
//     label: "Kathmandu"
//   },
//   {
//     value: "Pokhara",
//     label: "Pokhara"
//   },
//   {
//     value: "Nepalgunj",
//     label: "Nepalgunj"
//   },
//   {
//     value: "Chitwan",
//     label: "Chitwan"
//   }
// ];

const agegroup = [
  {
    value: "Child",
    label: "Child"
  },
  {
    value: "Young",
    label: "Young"
  },
  {
    value: "Old",
    label: "Old"
  }
];
export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Ajay banstola",
    male: "",
    female: "",
    multiline: "Controlled",
    currency: "Rupeees"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const heading = {
    marginTop: "40px"
  };

  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <h3 style={heading}>Population:</h3>
        <div>
          <TextField
            id="standard-number1"
            label="Male:"
            value={values.age}
            onChange={handleChange("male")}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Female:"
            value={values.age}
            onChange={handleChange("female")}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        </div>
        {/* <TextField
          id="standard-select-currency"
          select
          label="Country name:"
          className={classes.textField}
          value={values.countries}
          onChange={handleChange("countries")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
        >
          {countries.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency"
          select
          label="City\State name:"
          className={classes.textField}
          value={values.cities}
          onChange={handleChange("cities")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
        >
          {cities.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency"
          select
          label="Age group:"
          className={classes.textField}
          value={values.agegroup}
          onChange={handleChange("agegroup")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
        >
          {agegroup.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
        <input type="submit" value="Submit" />
      </form>

      {/* <button>Save</button> */}
    </>
  );
}
