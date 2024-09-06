import React from "react";
import {
  Avatar,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";

const appointments = [
  {
    time: "9:30 AM",
    date: "05/12/2022",
    name: "Elizabeth Polson",
    age: 32,
    doctor: "Dr. John",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    time: "9:30 AM",
    date: "05/12/2022",
    name: "John David",
    age: 28,
    doctor: "Dr. Joel",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    time: "10:30 AM",
    date: "05/12/2022",
    name: "Kristhav Rajan",
    age: 24,
    doctor: "Dr. Joel",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    time: "11:00 AM",
    date: "05/12/2022",
    name: "Sumanth Tinson",
    age: 26,
    doctor: "Dr. John",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    time: "11:30 AM",
    date: "05/12/2022",
    name: "EG Subramani",
    age: 77,
    doctor: "Dr. John",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    time: "11:00 AM",
    date: "05/12/2022",
    name: "Ranjan Maari",
    age: 77,
    doctor: "Dr. John",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    time: "11:00 AM",
    date: "05/12/2022",
    name: "Phillip Gopal",
    age: 55,
    doctor: "Dr. John",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const Appointment = () => {
  return (
    <Paper style={{ padding: "20px", marginTop: "20px" }}>
      <div className="flex px-2 gap-4">
        <Link to="/Appointments">
          <Typography
            className="  px-4 bg-gray-200 rounded-2xl"
            variant="h6"
            gutterBottom
          >
            New Appointments
          </Typography>
        </Link>
        <Link to="/Appointments/completed">
          <Typography
            className="ml-4 px-4 bg-gray-200 rounded-2xl "
            variant="h6"
            gutterBottom
          >
            Completed Appointments
          </Typography>
        </Link>
      </div>
      <Outlet />
    </Paper>
  );
};

export default Appointment;
