import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField } from '@mui/material';

// Example hospital data (use the expanded data from your current code)
const hospitals = [
    {
      id: 1, 
      name: 'City Hospital', 
      contact: '123-456-7890',
      address: '123 Main St, Cityville',
      email: 'info@cityhospital.com',
      website: 'www.cityhospital.com',
      specialties: ['Cardiology', 'Orthopedics'],
      operatingHours: '24/7'
    },
    {
      id: 2, 
      name: 'Health Care Center', 
      contact: '234-567-8901',
      address: '456 Health Rd, Caretown',
      email: 'contact@healthcarecenter.com',
      website: 'www.healthcarecenter.com',
      specialties: ['Pediatrics', 'Neurology'],
      operatingHours: '8 AM - 8 PM'
    },
    {
      id: 3, 
      name: 'Wellness Clinic', 
      contact: '345-678-9012',
      address: '789 Wellness Ave, Wellville',
      email: 'support@wellnessclinic.com',
      website: 'www.wellnessclinic.com',
      specialties: ['Dermatology', 'General Medicine'],
      operatingHours: '9 AM - 6 PM'
    },
    {
      id: 4, 
      name: 'Medic Care Hospital', 
      contact: '456-789-0123',
      address: '123 Care Blvd, Medicton',
      email: 'info@mediccarehospital.com',
      website: 'www.mediccarehospital.com',
      specialties: ['Cardiology', 'Emergency Care'],
      operatingHours: '24/7'
    },
    {
      id: 5, 
      name: 'Metro Medical Center', 
      contact: '567-890-1234',
      address: '456 Metro Dr, Metrocity',
      email: 'metro@metrocenter.com',
      website: 'www.metromedicalcenter.com',
      specialties: ['Surgery', 'Oncology'],
      operatingHours: '24/7'
    },
    {
      id: 6, 
      name: 'Sunrise Hospital', 
      contact: '678-901-2345',
      address: '789 Sunrise St, Sunnytown',
      email: 'contact@sunrisehospital.com',
      website: 'www.sunrisehospital.com',
      specialties: ['Gynecology', 'Pediatrics'],
      operatingHours: '8 AM - 10 PM'
    },
    {
      id: 7, 
      name: 'Green Valley Hospital', 
      contact: '789-012-3456',
      address: '123 Green Valley Rd, Greenhill',
      email: 'info@greenvalleyhospital.com',
      website: 'www.greenvalleyhospital.com',
      specialties: ['Cardiology', 'Respiratory Care'],
      operatingHours: '24/7'
    },
    {
      id: 8, 
      name: 'Cedarwood Clinic', 
      contact: '890-123-4567',
      address: '456 Cedarwood Ln, Cedarville',
      email: 'info@cedarwoodclinic.com',
      website: 'www.cedarwoodclinic.com',
      specialties: ['Dermatology', 'Allergy and Immunology'],
      operatingHours: '9 AM - 5 PM'
    },
    {
      id: 9, 
      name: 'Oakland Hospital', 
      contact: '901-234-5678',
      address: '789 Oakland Blvd, Oakcity',
      email: 'support@oaklandhospital.com',
      website: 'www.oaklandhospital.com',
      specialties: ['Orthopedics', 'Emergency Care'],
      operatingHours: '24/7'
    },
    {
      id: 10, 
      name: 'Riverdale Medical Center', 
      contact: '012-345-6789',
      address: '123 Riverdale Rd, Rivertown',
      email: 'info@riverdalemedical.com',
      website: 'www.riverdalemedicalcenter.com',
      specialties: ['Gastroenterology', 'Oncology'],
      operatingHours: '8 AM - 8 PM'
    },
    {
      id: 11, 
      name: 'Northside Clinic', 
      contact: '123-234-5678',
      address: '456 Northside Dr, Northville',
      email: 'info@northsideclinic.com',
      website: 'www.northsideclinic.com',
      specialties: ['General Medicine', 'Surgery'],
      operatingHours: '9 AM - 7 PM'
    },
    {
      id: 12, 
      name: 'Eastside Hospital', 
      contact: '234-345-6789',
      address: '789 Eastside Ave, Eastville',
      email: 'contact@eastsidehospital.com',
      website: 'www.eastsidehospital.com',
      specialties: ['Neurology', 'Emergency Care'],
      operatingHours: '24/7'
    },
    {
      id: 13, 
      name: 'Westfield Medical Center', 
      contact: '345-456-7890',
      address: '123 Westfield St, Westcity',
      email: 'info@westfieldmedical.com',
      website: 'www.westfieldmedicalcenter.com',
      specialties: ['Surgery', 'Orthopedics'],
      operatingHours: '8 AM - 8 PM'
    },
    {
      id: 14, 
      name: 'Southgate Clinic', 
      contact: '456-567-8901',
      address: '456 Southgate Blvd, Southtown',
      email: 'info@southgateclinic.com',
      website: 'www.southgateclinic.com',
      specialties: ['Pediatrics', 'Gynecology'],
      operatingHours: '9 AM - 6 PM'
    },
    {
      id: 15, 
      name: 'Highland Hospital', 
      contact: '567-678-9012',
      address: '789 Highland Rd, Highlandtown',
      email: 'info@highlandhospital.com',
      website: 'www.highlandhospital.com',
      specialties: ['Cardiology', 'Dermatology'],
      operatingHours: '24/7'
    },
    {
      id: 16, 
      name: 'Maplewood Clinic', 
      contact: '678-789-0123',
      address: '123 Maplewood Ln, Maplecity',
      email: 'info@maplewoodclinic.com',
      website: 'www.maplewoodclinic.com',
      specialties: ['Allergy and Immunology', 'General Medicine'],
      operatingHours: '8 AM - 5 PM'
    },
    {
      id: 17, 
      name: 'Summit Hospital', 
      contact: '789-890-1234',
      address: '456 Summit St, Summitville',
      email: 'info@summithospital.com',
      website: 'www.summithospital.com',
      specialties: ['Oncology', 'Cardiology'],
      operatingHours: '24/7'
    },
    {
      id: 18, 
      name: 'Ridgeview Clinic', 
      contact: '890-901-2345',
      address: '789 Ridgeview Dr, Ridgecity',
      email: 'support@ridgeviewclinic.com',
      website: 'www.ridgeviewclinic.com',
      specialties: ['General Medicine', 'Orthopedics'],
      operatingHours: '9 AM - 6 PM'
    },
    {
      id: 19, 
      name: 'Sunset Medical Center', 
      contact: '901-012-3456',
      address: '123 Sunset Blvd, Sunsetville',
      email: 'info@sunsetmedical.com',
      website: 'www.sunsetmedicalcenter.com',
      specialties: ['Respiratory Care', 'Oncology'],
      operatingHours: '24/7'
    },
    {
      id: 20, 
      name: 'Downtown Hospital', 
      contact: '012-123-4567',
      address: '456 Downtown Ave, Downtowncity',
      email: 'contact@downtownhospital.com',
      website: 'www.downtownhospital.com',
      specialties: ['Cardiology', 'Emergency Care'],
      operatingHours: '24/7'
    }
  ];
  function HospitalList() {
    const [searchTerm, setSearchTerm] = useState('');
  
    // Function to handle filtering based on search input
    const filteredHospitals = hospitals.filter(hospital =>
      hospital.specialties.some(specialty =>
        specialty.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Hospital List</h1>
  
        {/* Search bar for filtering hospitals by specialties */}
        <div className="max-w-lg mx-auto mb-6">
          <TextField
            label="Search by Specialties"
            variant="outlined"
            fullWidth
            className="mb-4 bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputLabelProps={{
              className: 'text-gray-700',
            }}
          />
        </div>
  
        {/* Hospital Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.length > 0 ? (
            filteredHospitals.map(hospital => (
              <Card key={hospital.id} className="shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                <CardContent>
                  <Typography variant="h6" className="text-xl font-semibold text-gray-800">{hospital.name}</Typography>
                  <Typography variant="body2" className="text-gray-600">Contact: {hospital.contact}</Typography>
                  <Typography variant="body2" className="text-gray-600">Address: {hospital.address}</Typography>
                  <Typography variant="body2" className="text-gray-600">Email: <a href={`mailto:${hospital.email}`} className="text-blue-500">{hospital.email}</a></Typography>
                  <Typography variant="body2" className="text-gray-600">Website: <a href={`https://${hospital.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">{hospital.website}</a></Typography>
                  <Typography variant="body2" className="text-gray-600">Specialties: {hospital.specialties.join(', ')}</Typography>
                  <Typography variant="body2" className="text-gray-600">Operating Hours: {hospital.operatingHours}</Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography className="text-center text-gray-500 text-lg">No hospitals found with the specified specialty.</Typography>
          )}
        </div>
      </div>
    );
  }
  
  
  

export default HospitalList;
