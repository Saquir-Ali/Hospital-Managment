import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

// Example medicine data
const medicines = [
    { id: 1, name: 'City Hospital', contact: '123-456-7890', medicineInventory: [
      { medicineName: 'Paracetamol', quantity: 100 },
      { medicineName: 'Aspirin', quantity: 50 },
      { medicineName: 'Cough Syrup', quantity: 80 },
    ]},
    { id: 2, name: 'Health Care Center', contact: '234-567-8901', medicineInventory: [
      { medicineName: 'Ibuprofen', quantity: 200 },
      { medicineName: 'Amoxicillin', quantity: 30 },
      { medicineName: 'Antibiotic Ointment', quantity: 45 },
    ]},
    { id: 3, name: 'Wellness Clinic', contact: '345-678-9012', medicineInventory: [
      { medicineName: 'Vitamin C', quantity: 150 },
      { medicineName: 'Paracetamol', quantity: 90 },
      { medicineName: 'Cold Tablets', quantity: 70 },
    ]},
    { id: 4, name: 'Medic Care Hospital', contact: '456-789-0123', medicineInventory: [
      { medicineName: 'Aspirin', quantity: 100 },
      { medicineName: 'Ibuprofen', quantity: 180 },
      { medicineName: 'Cough Syrup', quantity: 65 },
    ]},
    { id: 5, name: 'Metro Medical Center', contact: '567-890-1234', medicineInventory: [
      { medicineName: 'Antacid Tablets', quantity: 120 },
      { medicineName: 'Vitamin D', quantity: 55 },
      { medicineName: 'Paracetamol', quantity: 90 },
    ]},
    { id: 6, name: 'Sunrise Hospital', contact: '678-901-2345', medicineInventory: [
      { medicineName: 'Pain Relief Gel', quantity: 100 },
      { medicineName: 'Aspirin', quantity: 75 },
      { medicineName: 'Ibuprofen', quantity: 160 },
    ]},
    { id: 7, name: 'Green Valley Hospital', contact: '789-012-3456', medicineInventory: [
      { medicineName: 'Cough Syrup', quantity: 85 },
      { medicineName: 'Paracetamol', quantity: 60 },
      { medicineName: 'Antibiotic Ointment', quantity: 40 },
    ]},
    { id: 8, name: 'Cedarwood Clinic', contact: '890-123-4567', medicineInventory: [
      { medicineName: 'Antacid Tablets', quantity: 130 },
      { medicineName: 'Ibuprofen', quantity: 200 },
      { medicineName: 'Cough Syrup', quantity: 55 },
    ]},
    { id: 9, name: 'Oakland Hospital', contact: '901-234-5678', medicineInventory: [
      { medicineName: 'Aspirin', quantity: 110 },
      { medicineName: 'Amoxicillin', quantity: 25 },
      { medicineName: 'Cold Tablets', quantity: 90 },
    ]},
    { id: 10, name: 'Riverdale Medical Center', contact: '012-345-6789', medicineInventory: [
      { medicineName: 'Vitamin C', quantity: 180 },
      { medicineName: 'Paracetamol', quantity: 140 },
      { medicineName: 'Ibuprofen', quantity: 70 },
    ]},
    { id: 11, name: 'Northside Clinic', contact: '123-234-5678', medicineInventory: [
      { medicineName: 'Amoxicillin', quantity: 50 },
      { medicineName: 'Pain Relief Gel', quantity: 30 },
      { medicineName: 'Antacid Tablets', quantity: 100 },
    ]},
    { id: 12, name: 'Eastside Hospital', contact: '234-345-6789', medicineInventory: [
      { medicineName: 'Aspirin', quantity: 90 },
      { medicineName: 'Cold Tablets', quantity: 50 },
      { medicineName: 'Antibiotic Ointment', quantity: 45 },
    ]},
    { id: 13, name: 'Westfield Medical Center', contact: '345-456-7890', medicineInventory: [
      { medicineName: 'Paracetamol', quantity: 70 },
      { medicineName: 'Amoxicillin', quantity: 45 },
      { medicineName: 'Cough Syrup', quantity: 100 },
    ]},
    { id: 14, name: 'Southgate Clinic', contact: '456-567-8901', medicineInventory: [
      { medicineName: 'Pain Relief Gel', quantity: 55 },
      { medicineName: 'Ibuprofen', quantity: 160 },
      { medicineName: 'Vitamin C', quantity: 200 },
    ]},
    { id: 15, name: 'Highland Hospital', contact: '567-678-9012', medicineInventory: [
      { medicineName: 'Aspirin', quantity: 120 },
      { medicineName: 'Antacid Tablets', quantity: 85 },
      { medicineName: 'Cold Tablets', quantity: 75 },
    ]},
  ];
  

function MedicineAvailabilityChecker() {
  const [medicineName, setMedicineName] = useState('');
  const [requiredQuantity, setRequiredQuantity] = useState('');
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    if (!medicineName || !requiredQuantity) {
      alert('Please enter both medicine name and quantity.');
      return;
    }

    const filteredHospitals = medicines.filter(hospital => 
      hospital.medicineInventory.some(item =>
        item.medicineName.toLowerCase() === medicineName.toLowerCase() &&
        item.quantity >= parseInt(requiredQuantity, 10)
      )
    );

    setResult(filteredHospitals);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Check Medicine Availability</h1>
      <div className="mb-4">
        <TextField
          label="Medicine Name"
          variant="outlined"
          fullWidth
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
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
                  Medicine Inventory:
                  <ul>
                    {hospital.medicineInventory.map((item, index) => (
                      <li key={index}>{item.medicineName}: {item.quantity} units</li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No hospitals found with the specified medicine and quantity.</Typography>
        )}
      </div>
    </div>
  );
}

export default MedicineAvailabilityChecker;
