import React from 'react'
//icons 
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import FeedIcon from '@mui/icons-material/Feed';
import Checkbox from '@mui/material/Checkbox';
import NotificationsIcon from '@mui/icons-material/Notifications';

//components
import TextField from '@mui/material/TextField';



//Notes:-
// <button className="bg-blue-500 text-white px-4 py-2 rounded">Assign</button>
function ProductItem({name="product-name",code="not-found",type="product-type",price=100,piecesCount=2,date="ddmmyy",manufacturer="manufacturer"}) {
  return (
    <div className='bg-white h-20 p-6'>
        <ul className='flex justify-between w-full text-md text-gray-600'>
  <li className='flex  text-center w-[200px]'>
    <Checkbox/>
    <div className='flex w-[400px] flex-col items-start'>
      <div className='mt-[4px]'>{name}</div>
      <div className='text-gray-400 '>{code}</div>
    </div>
  </li>
  <li className='mt-[6px] w-[200px] text-center'>{type}</li>
  <li className='mt-[6px] w-[100px] text-center'>{price}</li>
  <li className='mt-[6px] w-[100px] text-center'>{piecesCount}</li>
  <li className='mt-[6px] w-[120px] text-center'>{date}</li>
  <li className='mt-[6px] w-[200px] text-center'>{manufacturer}</li>
  <li className='mt-[6px] w-[150px] text-center'>
    <div className='flex gap-2'>
      <button><AddCircleOutlineIcon style={{ color: '#3b82f6',fontSize:'32px' }} /></button>
      <button><FeedIcon style={{ color: 'gray',fontSize:'32px' }} /></button>
      <button><DeleteIcon style={{ color: 'red' ,fontSize:'32px'}} /></button>
    </div>
  </li>
</ul>
        
        

    </div>
  )
}

export default ProductItem