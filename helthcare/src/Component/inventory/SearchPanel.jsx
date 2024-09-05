import React from 'react'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';



function SearchPanel() {
  return (
    <ul className='flex font-semibold justify-between w-[1200px] text-md text-gray-600 '>
            <li className='flex text-center'>
                {/* <Checkbox/> */}
                <TextField 
              
          id="input-with-icon-textfield"
          placeholder="Search"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: 40, // Adjust the height here
              width:200,
              backgroundColor: '#f3f4f6', // Set the background color here
              borderRadius: 2, // Optional: adjust the border radius
            },
            '& .MuiOutlinedInput-input': {
              padding: '10px 14px', // Adjust the padding to fit the new height
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
                
            </li>
            <li className='mt-[6px] w-[200px] text-center'>Type</li>
            <li className='mt-[6px] w-[100px] text-center'>Price</li>
            <li className='mt-[6px] w-[100px] text-center'>In Stock</li>
            <li className='mt-[6px] w-[120px] text-center'>Expiry Date</li>
            <li className='mt-[6px] w-[200px] text-center'>Manufacturer</li>
            <li className='mt-[6px] w-[150px] '>User Actions</li>
           
        </ul>
  )
}

export default SearchPanel