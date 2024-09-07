import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, MenuItem, Select, InputLabel, FormControl, CircularProgress } from '@mui/material';

// Expanded hospital data with contact numbers
const hospitals = [
  // ... (your hospital data)
];

function BloodAvailabilityChecker() {
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [requiredQuantity, setRequiredQuantity] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!selectedBloodType || !requiredQuantity) {
      alert('Please enter both blood type and quantity.');
      return;
    }

    setLoading(true);
    const filteredHospitals = hospitals.filter(hospital => 
      hospital.bloodInventory.some(item =>
        item.bloodType === selectedBloodType &&
        item.quantity >= parseInt(requiredQuantity, 10)
      )
    );

    setResult(filteredHospitals);
    setLoading(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Typography variant="h4" className="text-center text-gray-800 font-bold mb-6">
        Check Blood Availability
      </Typography>
      <div className="max-w-md mx-auto mb-8 bg-white p-6 rounded-lg shadow-lg">
        <FormControl fullWidth className="mb-4">
          <InputLabel id="blood-type-label">Blood Type</InputLabel>
          <Select
            labelId="blood-type-label"
            value={selectedBloodType}
            onChange={(e) => setSelectedBloodType(e.target.value)}
            label="Blood Type"
            className="py-2" // Added padding for better appearance
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
          className="mb-4 p-2" // Added padding
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          fullWidth
          size="large"
          className="py-2"
        >
          {loading ? <CircularProgress size={24} /> : 'Search'}
        </Button>
      </div>

      <div className="mt-8">
        {result.length > 0 ? (
          result.map(hospital => (
            <Card key={hospital.id} className="mb-4 max-w-md mx-auto">
              <CardContent>
                <Typography variant="h6" className="font-semibold mb-2">{hospital.name}</Typography>
                <Typography variant="body2" className="mb-2">Contact: {hospital.contact}</Typography>
                <Typography variant="body2">
                  Blood Inventory:
                  <ul className="list-disc list-inside ml-4">
                    {hospital.bloodInventory.map((item, index) => (
                      <li key={index}>{item.bloodType}: {item.quantity} units</li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : loading ? (
          <Typography className="text-center">Loading...</Typography>
        ) : (
          <Typography className="text-center">No hospitals found with the specified blood type and quantity.</Typography>
        )}
      </div>
    </div>
  );
}

export default BloodAvailabilityChecker;
