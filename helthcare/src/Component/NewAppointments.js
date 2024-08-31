import React from 'react'
import { Avatar, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const appointments = [
    { time: '9:30 AM', date: '05/12/2022', name: 'Elizabeth Polson', age: 32, doctor: 'Dr. John', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { time: '9:30 AM', date: '05/12/2022', name: 'John David', age: 28, doctor: 'Dr. Joel', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { time: '10:30 AM', date: '05/12/2022', name: 'Kristhav Rajan', age: 24, doctor: 'Dr. Joel', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { time: '11:00 AM', date: '05/12/2022', name: 'Sumanth Tinson', age: 26, doctor: 'Dr. John', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { time: '11:30 AM', date: '05/12/2022', name: 'EG Subramani', age: 77, doctor: 'Dr. John', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { time: '11:00 AM', date: '05/12/2022', name: 'Ranjan Maari', age: 77, doctor: 'Dr. John', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { time: '11:00 AM', date: '05/12/2022', name: 'Phillip Gopal', age: 55, doctor: 'Dr. John', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
];

const NewAppointments = () => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Patient Name</TableCell>
                        <TableCell>Patient Age</TableCell>
                        <TableCell>Doctor</TableCell>
                        <TableCell>User Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((appointment, index) => (
                        <TableRow key={index}>
                            <TableCell>{appointment.time}</TableCell>
                            <TableCell>{appointment.date}</TableCell>
                            <TableCell>
                                <Avatar alt={appointment.name} src={appointment.avatar} style={{ marginRight: '10px' }} />
                                {appointment.name}
                            </TableCell>
                            <TableCell>{appointment.age}</TableCell>
                            <TableCell>{appointment.doctor}</TableCell>
                            <TableCell>
                                <Button
                                    variant="outlined"
                                    startIcon={<Edit />}
                                    style={{ marginRight: '10px' }}
                                >
                                    Reschedule
                                </Button>
                                <IconButton color="error">
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default NewAppointments
