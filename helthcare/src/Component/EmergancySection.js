import { Avatar, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const EmergancySection = ({ EmergancySectionHandler }) => {

    // Hardcoded emergency and facility data
    const emergencyData = {
        name: 'John Doe',                     // Patient's full name
        emergencyReason: 'Severe chest pain',  // Emergency cause
        medicalHistory: [
            'High blood pressure',             // Patient's medical history
            'Previous heart attack',
            'Diabetes'
        ],
        medications: ['Aspirin', 'Lisinopril'], // Current medications
        contact: '123-456-7890',               // Emergency contact number
        notes: 'Allergic to penicillin.'       // Additional notes
    };

    const facilityData = {
        availableBeds: 2,                     // Number of available beds
        availableDoctors: 4,                  // Number of available doctors
        specialists: ['Cardiologist', 'Neurologist'], // Specialists on call
        resources: 'Oxygen, Defibrillator, Ambulance' // Resources available
    };
    return (
        <>
            <div className='fixed left-0 right-0 bottom-0 top-0 bg-black opacity-30 p-0'></div>
            <form className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 shadow-lg rounded-lg w-5/12 h-5/6 flex flex-col flex-shrink overflow-y-scroll' onSubmit={EmergancySectionHandler}>
                <div className='flex justify-between '>
                    <Typography variant='h-3'>Emergancy</Typography>
                    <button onClick={EmergancySectionHandler}><CloseIcon /></button>
                </div>
                <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 mx-auto my-10">
                    {/* Modal Title */}
                    <h1 className="text-2xl font-bold mb-4 text-center">Emergency Overview</h1>

                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                        {/* Emergency Details Section */}
                        <div className="flex-1 bg-red-100 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-4 text-red-600">Emergency Details</h2>
                            <p><strong>Patient Name:</strong> {emergencyData.name}</p>
                            <p><strong>Emergency Reason:</strong> {emergencyData.emergencyReason}</p>
                            <p><strong>Medical History:</strong></p>
                            <ul className="list-disc ml-5">
                                {emergencyData.medicalHistory.map((history, index) => (
                                    <li key={index}>{history}</li>
                                ))}
                            </ul>
                            <p><strong>Medications:</strong></p>
                            <ul className="list-disc ml-5">
                                {emergencyData.medications.map((medication, index) => (
                                    <li key={index}>{medication}</li>
                                ))}
                            </ul>
                            <p><strong>Contact:</strong> {emergencyData.contact}</p>
                            <p><strong>Notes:</strong> {emergencyData.notes}</p>
                        </div>

                        {/* Facility Availability Section */}
                        <div className="flex-1 bg-blue-100 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-4 text-blue-600">Facility Availability</h2>
                            <p><strong>Available Beds:</strong> {facilityData.availableBeds}</p>
                            <p><strong>Available Doctors:</strong> {facilityData.availableDoctors}</p>
                            <p><strong>Specialists Available:</strong> {facilityData.specialists.join(', ')}</p>
                            <p><strong>Other Resources:</strong> {facilityData.resources}</p>

                            {/* Decision Section */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold">Can We Handle This Emergency?</h3>
                                <button
                                    className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
                                    onClick={() => alert('Emergency Accepted')}
                                >
                                    Yes, We Can Handle It
                                </button>
                                <button
                                    className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                    onClick={() => alert('Emergency Rejected')}
                                >
                                    No, Refer to Another Facility
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EmergancySection
