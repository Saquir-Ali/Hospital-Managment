import React from 'react';
import { Button, Grid, Card, CardContent, Typography } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MedicationIcon from '@mui/icons-material/Medication';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link } from 'react-router-dom';

const AvailabilityChecker = () => {
  const options = [
    { label: 'Blood Availability Checker', icon: <BloodtypeIcon fontSize="large" />, route: '/AvailabilityChecker/BloodAvailabilityChecker' },
    { label: 'Medicine Availability Checker', icon: <MedicationIcon fontSize="large" />, route: '/AvailabilityChecker/MedicineAvailabilityChecker' },
    { label: 'General Medical Supplies Checker', icon: <MedicalServicesIcon fontSize="large" />, route: '/AvailabilityChecker/GeneralMedicalSupplierChecker' },
    { label: 'Hospital List', icon: <LocalHospitalIcon fontSize="large" />, route: '/AvailabilityChecker/HospitalList' },
  ];

  return (
    <div className="p-10 bg-gray-50 min-h-screen flex flex-col items-center">
      <Typography variant="h4" className="mb-12 text-center text-gray-800 font-bold">
        Availability Checker
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {options.map((option, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 cursor-pointer">
              <CardContent className="flex flex-col items-center p-6 bg-white rounded-lg">
                <div className="mb-4 text-primary">
                  {option.icon}
                </div>
                <Typography variant="h6" className="text-gray-700 font-semibold mb-4 text-center">
                  {option.label}
                </Typography>
                <Link to={option.route}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className="w-full py-2 rounded-md"
                  >
                    Check Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AvailabilityChecker;
