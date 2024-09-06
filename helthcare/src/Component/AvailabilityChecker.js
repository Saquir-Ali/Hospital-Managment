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
    { label: 'Medicine Availability Checker', icon: <MedicationIcon fontSize="large" />, route: '/medicine-availability' },
    { label: 'General Medical Supplies Checker', icon: <MedicalServicesIcon fontSize="large" />, route: '/medical-supplies' },
    { label: 'Hospital List', icon: <LocalHospitalIcon fontSize="large" />, route: '/hospital-list' },
  ];

  return (
    <div className="p-6">
      <Typography variant="h4" className="mb-4">
        Availability Checker
      </Typography>
      <Grid container spacing={3}>
        {options.map((option, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent className="flex flex-col items-center p-4">
                <div className="mb-2">
                  {option.icon}
                </div>
                <Typography variant="h6">{option.label}</Typography>
                <Link to={option.route} className="mt-2">
                  <Button variant="contained" color="primary">
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
