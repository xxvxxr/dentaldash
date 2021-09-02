import { FormControl, InputLabel, makeStyles, Select } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(2),
      marginLeft: 0, 
      minWidth: 120,
      width: 400,
    },
    
  }));
  


export default function GoalSelector () {

const classes = useStyles();
const [state, setState] = useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

return(

    <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-native-simple">Select a goal </InputLabel>
            <Select
            native
            value={state.age}
            onChange={handleChange}
            inputProps={{
                name: 'age',
                id: 'filled-age-native-simple',
            }}
            >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
            </Select>
    </FormControl>

)}
