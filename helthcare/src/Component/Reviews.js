import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import { Star, StarHalf, StarBorder } from "@mui/icons-material";
import Header from "./Header";

// Sample data for reviews
const reviews = [
  {
    id: 1,
    patientName: "Hugo Lloris",
    rating: 4,
    ratedTo: "Hospital",
    writtenOn: "29 May 2021",
    comment:
      "Quick appointment scheduling and knowledgeable optometrists. Great service, friendly staff, and thorough eye exams!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    patientName: "Mauris auctor",
    rating: 5,
    ratedTo: "Dr. Mauris auctor",
    writtenOn: "12 Jan 2021",
    comment:
      "Great service, friendly staff, and thorough eye exams! Clean facility, but felt a bit rushed during my appointment.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    patientName: "Michael Owen",
    rating: 3,
    ratedTo: "Product: Sunglasses",
    writtenOn: "04 Aug 2021",
    comment:
      "Best product ever; this clinic is best for providing the best service. I recommend it.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    patientName: "Amina Smith",
    rating: 5,
    ratedTo: "Dr. Amina Smith",
    writtenOn: "12 Jan 2021",
    comment:
      "Great service, friendly staff, and thorough eye exams! Clean facility, but felt a bit rushed during my appointment.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 5,
    patientName: "Hugo Lloris",
    rating: 4,
    ratedTo: "Hospital",
    writtenOn: "29 May 2021",
    comment:
      "Quick appointment scheduling and knowledgeable optometrists. Great service, friendly staff, and thorough eye exams!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 6,
    patientName: "Mauris auctor",
    rating: 5,
    ratedTo: "Dr. Mauris auctor",
    writtenOn: "12 Jan 2021",
    comment:
      "Great service, friendly staff, and thorough eye exams! Clean facility, but felt a bit rushed during my appointment.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 7,
    patientName: "Michael Owen",
    rating: 3,
    ratedTo: "Product: Sunglasses",
    writtenOn: "04 Aug 2021",
    comment:
      "Best product ever; this clinic is best for providing the best service. I recommend it.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 8,
    patientName: "Amina Smith",
    rating: 5,
    ratedTo: "Dr. Amina Smith",
    writtenOn: "12 Jan 2021",
    comment:
      "Great service, friendly staff, and thorough eye exams! Clean facility, but felt a bit rushed during my appointment.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

// Helper function to render stars based on rating
const renderRatingStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} style={{ color: "#FFA500" }} />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<StarHalf key={i} style={{ color: "#FFA500" }} />);
    } else {
      stars.push(<StarBorder key={i} style={{ color: "#FFA500" }} />);
    }
  }
  return stars;
};

const Reviews = () => {
  return (
    <>
      <Header param="Reviews" />
      <div className="p-4">
        {/* Header with Filter Options */}
        {/* <div className="flex justify-between items-center mb-4">
          
          
        </div> */}

        <TableContainer component={Paper}>
          <Table>
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>#</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Patient</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Rate</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Rated To</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Date</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Comment</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#00aaff", color: "white" }}
                  >
                    Export
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            {/* Table Body */}
            <TableBody>
              {reviews.map((review, index) => (
                <TableRow key={review.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar src={review.avatar} alt={review.patientName} />
                      <span className="ml-2">{review.patientName}</span>
                    </div>
                  </TableCell>
                  <TableCell>{renderRatingStars(review.rating)}</TableCell>
                  <TableCell>
                    <Typography color="primary" className="cursor-pointer">
                      {review.ratedTo}
                    </Typography>
                  </TableCell>
                  <TableCell>{review.writtenOn}</TableCell>
                  <TableCell>{review.comment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Reviews;
