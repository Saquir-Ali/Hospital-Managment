import React from 'react'
import { useState } from 'react';
import ProductItem from './inventory/ProductItem'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import SearchPanel from './inventory/SearchPanel';


function MedicinalInventory() {
  const [items,setItems] = useState([
    {
      "name": "Salbutamol Inhaler",
      "code": "ALSXCE00123",
      "type": "Inhaler",
      "price": "₹ 28.55",
      "piecesCount": 100,
      "date": "01 Jun 2024",
      "manufacturer": "Aarav Healthcare Pvt Ltd"
    },
    {
      "name": "Amoxicillin 250 mg",
      "code": "AMSXCE00143",
      "type": "Tablet",
      "price": "₹ 40.55",
      "piecesCount": 28,
      "date": "21 Jul 2023",
      "manufacturer": "Mahajan Pharmaceuticals"
    },
    {
      "name": "Aspirin 300 mg",
      "code": "ASPXCE00120",
      "type": "Tablet",
      "price": "₹ 28.55",
      "piecesCount": 190,
      "date": "01 Jun 2024",
      "manufacturer": "Deshmukh Pharma Ltd"
    },
    {
      "name": "Benadryl Syrup 500 ml",
      "code": "SYPCBE00112",
      "type": "Syrup",
      "price": "₹ 77.55",
      "piecesCount": 80,
      "date": "28 Apr 2025",
      "manufacturer": "Trivedi & Co."
    },
    {
      "name": "Paracetamol 500 mg",
      "code": "PCM50000123",
      "type": "Tablet",
      "price": "₹ 25.00",
      "piecesCount": 200,
      "date": "01 Dec 2024",
      "manufacturer": "Indus Medicines"
    },
    {
      "name": "Cefixime 300 mg",
      "code": "CAPXUE00123",
      "type": "Capsule",
      "price": "₹ 28.55",
      "piecesCount": 100,
      "date": "01 Jun 2024",
      "manufacturer": "Yadav Biotech"
    },
    {
      "name": "Dettol Soap 250g",
      "code": "SOPXUE00103",
      "type": "Soap",
      "price": "₹ 250.55",
      "piecesCount": 55,
      "date": "03 Feb 2024",
      "manufacturer": "Kumar & Sons Healthcare"
    },
    {
      name: "Ibuprofen 400 mg",
      code: "IBUXIN003",
      type: "Tablet",
      price: "₹ 20.00",
      piecesCount: 150,
      date: "01 Jan 2024",
      manufacturer: "Himalayan BioTech"
    },
    {
      name: "ORS Sachet",
      code: "ORSXIN004",
      type: "Sachet",
      price: "₹ 12.00",
      piecesCount: 200,
      date: "15 Nov 2024",
      manufacturer: "AyurCare Ltd"
    },
    {
      name: "Amoxicillin 500 mg",
      code: "AMOXIN005",
      type: "Capsule",
      price: "₹ 45.30",
      piecesCount: 50,
      date: "30 Sep 2023",
      manufacturer: "Veda Pharmaceuticals"
    },
    // {
    //   name: "Cough Syrup 100 ml",
    //   code: "COUXIN006",
    //   type: "Syrup",
    //   price: "₹ 60.50",
    //   piecesCount: 90,
    //   date: "28 Feb 2024",
    //   manufacturer: "Kisan Medico Pvt Ltd"
    // },
    // {
    //   name: "Cetirizine 10 mg",
    //   code: "CETXIN007",
    //   type: "Tablet",
    //   price: "₹ 15.00",
    //   piecesCount: 110,
    //   date: "12 Oct 2023",
    //   manufacturer: "Herbal Health Solutions"
    // },
    // {
    //   name: "Vitamin D3 60000 IU",
    //   code: "VD3XIN008",
    //   type: "Tablet",
    //   price: "₹ 75.00",
    //   piecesCount: 65,
    //   date: "05 Jul 2025",
    //   manufacturer: "Shakti Pharma Pvt Ltd"
    // }
    
  ]);
  return (
    <div className=' p-24 bg-blue-50'>
       
        <div className='flex justify-between bg-white p-8'>
          <div className='self-end'>
            <div className='text-lg text-[#302e2e] font-semibold'>MEDICINAL INVENTORY</div>
            <div className='h-[3px] bg-blue-500 w-50 rounded'></div>
          </div>
          
            
            
          <div className='flex gap-3'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded text-lg text-center">
              <span className='text-2xl font-semibold'>+</span> Add Product</button>
            <button><CloseFullscreenIcon style={{color:'#3b82f6'}}/></button>
          </div>
        </div>
        <hr/>

        <div className='py-3 px-6 bg-white'>
          <SearchPanel/>
        </div>
          
        {items.map((item)=> (
          <div key={item.code}>
              <ProductItem 
             
             name={item.name}
             code={item.code}
             type={item.type}
             price={item.price}
             piecesCount={item.piecesCount}
             date={item.date}
             manufacturer={item.manufacturer}

          />
          <hr/>
          </div>
      ))}
    </div>
    )
    
}

export default MedicinalInventory