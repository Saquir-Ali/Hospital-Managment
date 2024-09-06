import React, { useState } from 'react';
import { Checkbox, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

function MedicinalInventory() {
  const [items, setItems] = useState([
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
      "name": "Ibuprofen 400 mg",
      "code": "IBUXIN003",
      "type": "Tablet",
      "price": "₹ 20.00",
      "piecesCount": 150,
      "date": "01 Jan 2024",
      "manufacturer": "Himalayan BioTech"
    },
    {
      "name": "ORS Sachet",
      "code": "ORSXIN004",
      "type": "Sachet",
      "price": "₹ 12.00",
      "piecesCount": 200,
      "date": "15 Nov 2024",
      "manufacturer": "AyurCare Ltd"
    },
    {
      "name": "Amoxicillin 500 mg",
      "code": "AMOXIN005",
      "type": "Capsule",
      "price": "₹ 45.30",
      "piecesCount": 50,
      "date": "30 Sep 2023",
      "manufacturer": "Veda Pharmaceuticals"
    },
    {
      "name": "Cetirizine 10 mg",
      "code": "CETXIN007",
      "type": "Tablet",
      "price": "₹ 15.00",
      "piecesCount": 110,
      "date": "12 Oct 2023",
      "manufacturer": "Herbal Health Solutions"
    },
    {
      "name": "Vitamin D3 60000 IU",
      "code": "VD3XIN008",
      "type": "Tablet",
      "price": "₹ 75.00",
      "piecesCount": 65,
      "date": "05 Jul 2025",
      "manufacturer": "Shakti Pharma Pvt Ltd"
    },
    {
      "name": "Cough Syrup 100 ml",
      "code": "COUXIN006",
      "type": "Syrup",
      "price": "₹ 60.50",
      "piecesCount": 90,
      "date": "28 Feb 2024",
      "manufacturer": "Kisan Medico Pvt Ltd"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (code) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [code]: !prevState[code]
    }));
  };

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.piecesCount.toString().includes(searchQuery) ||
    item.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='p-6 bg-blue-50 min-h-screen'>
      <div className='bg-white p-6 shadow-md rounded-lg'>
        <div className='flex flex-col mb-4'>
          <div className='flex justify-between items-center mb-4'>
            <div>
              <h1 className='text-2xl font-semibold text-gray-800'>Medicinal Inventory</h1>
              <div className='h-1 bg-blue-500 w-20 rounded mt-1'></div>
            </div>
            <div className='flex gap-3'>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-semibold flex items-center">
                <span className='text-2xl'>+</span> Add Product
              </button>
            </div>
          </div>

          <div className='mb-4'>
            <TextField
              id="search-bar"
              label="Search Inventory"
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                endAdornment: <SearchIcon />
              }}
            />
          </div>

          <div className='overflow-x-auto'>
            <table className='min-w-full bg-white border border-gray-200'>
              <thead>
                <tr className='bg-gray-100'>
                  <th className='p-2 border-b text-left'>
                    <Checkbox
                      checked={Object.keys(selectedItems).length === filteredItems.length && filteredItems.every(item => selectedItems[item.code])}
                      onChange={() => {
                        const allSelected = Object.keys(selectedItems).length === filteredItems.length && filteredItems.every(item => selectedItems[item.code]);
                        setSelectedItems(filteredItems.reduce((acc, item) => ({
                          ...acc,
                          [item.code]: !allSelected
                        }), {}));
                      }}
                    />
                  </th>
                  <th className='p-2 border-b text-left'>Name</th>
                  <th className='p-2 border-b text-left'>Type</th>
                  <th className='p-2 border-b text-left'>Price</th>
                  <th className='p-2 border-b text-left'>In Stock</th>
                  <th className='p-2 border-b text-left'>Expiry Date</th>
                  <th className='p-2 border-b text-left'>Manufacturer</th>
                  <th className='p-2 border-b text-left'>User Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.code}>
                    <td className='p-2 border-b'>
                      <Checkbox
                        checked={!!selectedItems[item.code]}
                        onChange={() => handleCheckboxChange(item.code)}
                      />
                    </td>
                    <td className='p-2 border-b'>{item.name}</td>
                    <td className='p-2 border-b'>{item.type}</td>
                    <td className='p-2 border-b'>{item.price}</td>
                    <td className='p-2 border-b'>{item.piecesCount}</td>
                    <td className='p-2 border-b'>{item.date}</td>
                    <td className='p-2 border-b'>{item.manufacturer}</td>
                    <td className='p-2 border-b'>
                      <div className='flex gap-2'>
                        <IconButton aria-label="edit">
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicinalInventory;
