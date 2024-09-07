import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

// Example medical supplies data
const supplies = [
  { id: 1, name: 'City Hospital', contact: '123-456-7890', supplyInventory: [
    { supplyName: 'Surgical Mask', quantity: 500 },
    { supplyName: 'Gloves', quantity: 1000 },
    { supplyName: 'Gowns', quantity: 300 },
  ]},
  { id: 2, name: 'Health Care Center', contact: '234-567-8901', supplyInventory: [
    { supplyName: 'Sanitizer', quantity: 200 },
    { supplyName: 'Face Shield', quantity: 100 },
    { supplyName: 'Thermometers', quantity: 150 },
  ]},
  { id: 3, name: 'Wellness Clinic', contact: '345-678-9012', supplyInventory: [
    { supplyName: 'Surgical Mask', quantity: 400 },
    { supplyName: 'Gloves', quantity: 850 },
    { supplyName: 'Hand Sanitizer', quantity: 250 },
  ]},
  { id: 4, name: 'Medic Care Hospital', contact: '456-789-0123', supplyInventory: [
    { supplyName: 'Face Shield', quantity: 300 },
    { supplyName: 'Disposable Gowns', quantity: 500 },
    { supplyName: 'Syringes', quantity: 1000 },
  ]},
  { id: 5, name: 'Metro Medical Center', contact: '567-890-1234', supplyInventory: [
    { supplyName: 'Surgical Mask', quantity: 700 },
    { supplyName: 'Gloves', quantity: 1200 },
    { supplyName: 'Thermometers', quantity: 180 },
  ]},
  { id: 6, name: 'Sunrise Hospital', contact: '678-901-2345', supplyInventory: [
    { supplyName: 'Gowns', quantity: 400 },
    { supplyName: 'Face Shield', quantity: 250 },
    { supplyName: 'Sanitizer', quantity: 600 },
  ]},
  { id: 7, name: 'Green Valley Hospital', contact: '789-012-3456', supplyInventory: [
    { supplyName: 'Surgical Mask', quantity: 1000 },
    { supplyName: 'Gloves', quantity: 2000 },
    { supplyName: 'Syringes', quantity: 500 },
  ]},
  { id: 8, name: 'Cedarwood Clinic', contact: '890-123-4567', supplyInventory: [
    { supplyName: 'Face Shield', quantity: 150 },
    { supplyName: 'Hand Sanitizer', quantity: 300 },
    { supplyName: 'Thermometers', quantity: 100 },
  ]},
  { id: 9, name: 'Oakland Hospital', contact: '901-234-5678', supplyInventory: [
    { supplyName: 'Surgical Mask', quantity: 1200 },
    { supplyName: 'Disposable Gowns', quantity: 700 },
    { supplyName: 'Gloves', quantity: 900 },
  ]},
  { id: 10, name: 'Riverdale Medical Center', contact: '012-345-6789', supplyInventory: [
    { supplyName: 'Sanitizer', quantity: 450 },
    { supplyName: 'Face Shield', quantity: 300 },
    { supplyName: 'Thermometers', quantity: 200 },
  ]},
  { id: 11, name: 'Northside Clinic', contact: '123-234-5678', supplyInventory: [
    { supplyName: 'Gowns', quantity: 500 },
    { supplyName: 'Surgical Mask', quantity: 850 },
    { supplyName: 'Gloves', quantity: 1000 },
  ]},
  { id: 12, name: 'Eastside Hospital', contact: '234-345-6789', supplyInventory: [
    { supplyName: 'Face Shield', quantity: 400 },
    { supplyName: 'Sanitizer', quantity: 350 },
    { supplyName: 'Syringes', quantity: 800 },
  ]},
  { id: 13, name: 'Westfield Medical Center', contact: '345-456-7890', supplyInventory: [
    { supplyName: 'Gloves', quantity: 1500 },
    { supplyName: 'Thermometers', quantity: 250 },
    { supplyName: 'Gowns', quantity: 700 },
  ]},
  { id: 14, name: 'Southgate Clinic', contact: '456-567-8901', supplyInventory: [
    { supplyName: 'Surgical Mask', quantity: 750 },
    { supplyName: 'Face Shield', quantity: 200 },
    { supplyName: 'Sanitizer', quantity: 400 },
  ]},
  { id: 15, name: 'Highland Hospital', contact: '567-678-9012', supplyInventory: [
    { supplyName: 'Gowns', quantity: 600 },
    { supplyName: 'Gloves', quantity: 1300 },
    { supplyName: 'Syringes', quantity: 900 },
  ]},
];

function SuppliesAvailabilityChecker() {
  const [supplyName, setSupplyName] = useState('');
  const [requiredQuantity, setRequiredQuantity] = useState('');
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    if (!supplyName || !requiredQuantity) {
      alert('Please enter both supply name and quantity.');
      return;
    }

    const filteredHospitals = supplies.filter(hospital => 
      hospital.supplyInventory.some(item =>
        item.supplyName.toLowerCase() === supplyName.toLowerCase() &&
        item.quantity >= parseInt(requiredQuantity, 10)
      )
    );

    setResult(filteredHospitals);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Check Medical Supplies Availability</h1>
      <div className="mb-4">
        <TextField
          label="Supply Name"
          variant="outlined"
          fullWidth
          value={supplyName}
          onChange={(e) => setSupplyName(e.target.value)}
        />
        <TextField
          label="Required Quantity"
          variant="outlined"
          fullWidth
          type="number"
          value={requiredQuantity}
          onChange={(e) => setRequiredQuantity(e.target.value)}
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      <div className="mt-6">
        {result.length > 0 ? (
          result.map(hospital => (
            <Card key={hospital.id} className="mb-4">
              <CardContent>
                <Typography variant="h6">{hospital.name}</Typography>
                <Typography variant="body2">Contact: {hospital.contact}</Typography>
                <Typography variant="body2">
                  Supply Inventory:
                  <ul>
                    {hospital.supplyInventory.map((item, index) => (
                      <li key={index}>{item.supplyName}: {item.quantity} units</li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No hospitals found with the specified supplies and quantity.</Typography>
        )}
      </div>
    </div>
  );
}

export default SuppliesAvailabilityChecker;
