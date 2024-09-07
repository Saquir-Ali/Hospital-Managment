import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// Expanded hospital data with contact numbers
const hospitals = [
  { id: 1, name: 'City Hospital', contact: '123-456-7890', bloodInventory: [
    { bloodType: 'A+', quantity: 15 },
    { bloodType: 'B-', quantity: 8 },
    { bloodType: 'O+', quantity: 20 }
  ]},
  { id: 2, name: 'Health Care Center', contact: '234-567-8901', bloodInventory: [
    { bloodType: 'A-', quantity: 5 },
    { bloodType: 'AB+', quantity: 12 },
    { bloodType: 'O-', quantity: 10 }
  ]},
  { id: 3, name: 'Wellness Clinic', contact: '345-678-9012', bloodInventory: [
    { bloodType: 'B+', quantity: 18 },
    { bloodType: 'A+', quantity: 25 },
    { bloodType: 'O+', quantity: 22 }
  ]},
  { id: 4, name: 'Medic Care Hospital', contact: '456-789-0123', bloodInventory: [
    { bloodType: 'AB-', quantity: 7 },
    { bloodType: 'B-', quantity: 14 },
    { bloodType: 'O-', quantity: 30 }
  ]},
  { id: 5, name: 'Metro Medical Center', contact: '567-890-1234', bloodInventory: [
    { bloodType: 'A+', quantity: 10 },
    { bloodType: 'B+', quantity: 20 },
    { bloodType: 'O-', quantity: 15 }
  ]},
  { id: 6, name: 'Sunrise Hospital', contact: '678-901-2345', bloodInventory: [
    { bloodType: 'A-', quantity: 8 },
    { bloodType: 'AB-', quantity: 5 },
    { bloodType: 'O+', quantity: 18 }
  ]},
  { id: 7, name: 'Green Valley Hospital', contact: '789-012-3456', bloodInventory: [
    { bloodType: 'B+', quantity: 25 },
    { bloodType: 'O-', quantity: 20 },
    { bloodType: 'A+', quantity: 12 }
  ]},
  { id: 8, name: 'Cedarwood Clinic', contact: '890-123-4567', bloodInventory: [
    { bloodType: 'O+', quantity: 22 },
    { bloodType: 'A-', quantity: 6 },
    { bloodType: 'B-', quantity: 14 }
  ]},
  { id: 9, name: 'Oakland Hospital', contact: '901-234-5678', bloodInventory: [
    { bloodType: 'AB+', quantity: 10 },
    { bloodType: 'O-', quantity: 30 },
    { bloodType: 'B-', quantity: 15 }
  ]},
  { id: 10, name: 'Riverdale Medical Center', contact: '012-345-6789', bloodInventory: [
    { bloodType: 'A+', quantity: 20 },
    { bloodType: 'O+', quantity: 25 },
    { bloodType: 'B+', quantity: 18 }
  ]},
  { id: 11, name: 'Northside Clinic', contact: '123-234-5678', bloodInventory: [
    { bloodType: 'A-', quantity: 12 },
    { bloodType: 'B+', quantity: 10 },
    { bloodType: 'O+', quantity: 20 }
  ]},
  { id: 12, name: 'Eastside Hospital', contact: '234-345-6789', bloodInventory: [
    { bloodType: 'O-', quantity: 8 },
    { bloodType: 'AB-', quantity: 15 },
    { bloodType: 'B+', quantity: 20 }
  ]},
  { id: 13, name: 'Westfield Medical Center', contact: '345-456-7890', bloodInventory: [
    { bloodType: 'B-', quantity: 25 },
    { bloodType: 'O+', quantity: 30 },
    { bloodType: 'A+', quantity: 20 }
  ]},
  { id: 14, name: 'Southgate Clinic', contact: '456-567-8901', bloodInventory: [
    { bloodType: 'AB+', quantity: 10 },
    { bloodType: 'O-', quantity: 20 },
    { bloodType: 'B+', quantity: 15 }
  ]},
  { id: 15, name: 'Highland Hospital', contact: '567-678-9012', bloodInventory: [
    { bloodType: 'A+', quantity: 30 },
    { bloodType: 'B-', quantity: 10 },
    { bloodType: 'O+', quantity: 18 }
  ]},
  { id: 16, name: 'Maplewood Clinic', contact: '678-789-0123', bloodInventory: [
    { bloodType: 'O+', quantity: 22 },
    { bloodType: 'AB-', quantity: 12 },
    { bloodType: 'B+', quantity: 20 }
  ]},
  { id: 17, name: 'Summit Hospital', contact: '789-890-1234', bloodInventory: [
    { bloodType: 'A-', quantity: 15 },
    { bloodType: 'B+', quantity: 10 },
    { bloodType: 'O-', quantity: 25 }
  ]},
  { id: 18, name: 'Ridgeview Clinic', contact: '890-901-2345', bloodInventory: [
    { bloodType: 'A+', quantity: 20 },
    { bloodType: 'O-', quantity: 15 },
    { bloodType: 'AB+', quantity: 8 }
  ]},
  { id: 19, name: 'Sunset Medical Center', contact: '901-012-3456', bloodInventory: [
    { bloodType: 'B-', quantity: 18 },
    { bloodType: 'O+', quantity: 30 },
    { bloodType: 'A-', quantity: 12 }
  ]},
  { id: 20, name: 'Downtown Hospital', contact: '012-123-4567', bloodInventory: [
    { bloodType: 'AB+', quantity: 25 },
    { bloodType: 'O-', quantity: 10 },
    { bloodType: 'B+', quantity: 15 }
  ]},
  // Additional hospitals
  { id: 21, name: 'Central Health Facility', contact: '123-456-7891', bloodInventory: [
    { bloodType: 'A+', quantity: 20 },
    { bloodType: 'B-', quantity: 25 },
    { bloodType: 'O+', quantity: 30 }
  ]},
  { id: 22, name: 'Northwest Clinic', contact: '234-567-8902', bloodInventory: [
    { bloodType: 'O-', quantity: 15 },
    { bloodType: 'AB+', quantity: 10 },
    { bloodType: 'B-', quantity: 20 }
  ]},
  { id: 23, name: 'Eastview Hospital', contact: '345-678-9013', bloodInventory: [
    { bloodType: 'A-', quantity: 12 },
    { bloodType: 'B+', quantity: 22 },
    { bloodType: 'O+', quantity: 18 }
  ]},
  { id: 24, name: 'Southern Care Center', contact: '456-789-0124', bloodInventory: [
    { bloodType: 'A+', quantity: 18 },
    { bloodType: 'O-', quantity: 20 },
    { bloodType: 'B+', quantity: 15 }
  ]},
  { id: 25, name: 'Western Medical Clinic', contact: '567-890-1235', bloodInventory: [
    { bloodType: 'AB-', quantity: 8 },
    { bloodType: 'B-', quantity: 30 },
    { bloodType: 'O+', quantity: 22 }
  ]}
];

function BloodAvailabilityChecker() {
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [requiredQuantity, setRequiredQuantity] = useState('');
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    if (!selectedBloodType || !requiredQuantity) {
      alert('Please enter both blood type and quantity.');
      return;
    }

    const filteredHospitals = hospitals.filter(hospital => 
      hospital.bloodInventory.some(item =>
        item.bloodType === selectedBloodType &&
        item.quantity >= parseInt(requiredQuantity, 10)
      )
    );

    setResult(filteredHospitals);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Check Blood Availability</h1>
      <div className="mb-4">
        <FormControl fullWidth className="mb-2">
          <InputLabel id="blood-type-label">Blood Type</InputLabel>
          <Select
            labelId="blood-type-label"
            value={selectedBloodType}
            onChange={(e) => setSelectedBloodType(e.target.value)}
            label="Blood Type"
          >
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
          </Select>
        </FormControl>
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
                  Blood Inventory:
                  <ul>
                    {hospital.bloodInventory.map((item, index) => (
                      <li key={index}>{item.bloodType}: {item.quantity} units</li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No hospitals found with the specified blood type and quantity.</Typography>
        )}
      </div>
    </div>
  );
}

export default BloodAvailabilityChecker;
