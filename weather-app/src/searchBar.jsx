import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {useState} from 'react'

export default function SearchBar({setData}) {
    const [city,setCity]=useState("");
  
    const submitHandler=async(event)=>{
        event.preventDefault();
        try{
        console.log(city);
        let search_data=await fetch(`http://api.weatherstack.com/current?access_key=e9d9dd3463a920c40878bcee69a52270&query=${city}`);
        let json_data=await search_data.json();
        setData(json_data);
        if(json_data.error!==undefined){
          throw new Error(data.error.info );
        }
      }
        catch (err){
          console.log(err.message);
          
        }
    }

    function changeHandler(event){
        setCity(event.target.value)
    }
    
  return (
    <>
    <Box
      onSubmit={submitHandler}
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="City" label="City" value={city} onChange={changeHandler} variant="outlined" />
        <br></br>
       <Button variant="outlined" size='small' type='submit'>Submit </Button>
    </Box>
    </>  
  );
}

