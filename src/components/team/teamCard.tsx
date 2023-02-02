import React from "react";
import { Box, Card, Link, Stack, Typography } from "@mui/material";

interface Member {
  name: string;
  designation: string;
  message: string;
  image: string;
}

interface Props {
  employee: Member;
}

function TeamCard({ employee }: Props) {
  const { name, designation, message, image } = employee;
  console.log("message :", message.length);

  return (
    <Card
      sx={{
        backgroundColor: "#F4F6F8",
        height: "300px",
        padding: { sm: 3, xs: 1 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {message.length > 150 ? (
        <Box>
          <Typography variant="body1" color={"#000"} display={"inline"}>
            {message.slice(0, 150)}
          </Typography>
          <Typography 
            display={"inline"} 
            component={Link} 
            underline="none" 
            sx={{ml:1}}
          >
            Read more...
          </Typography>
        </Box>
      ) : (
        message
      )}
      <Typography variant="body1" color={"#000"}></Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "120px", height: "120px" }}>
          <img
            src={image}
            style={{ width: "100%", height: "100%", borderRadius: "16px" }}
          />
        </Box>
        <Stack sx={{ marginX: { sm: 3, xs: 1 } }}>
          <Typography variant="body1" gutterBottom color={"#000"}>
            {name}
          </Typography>
          <Typography variant="body2" color={"#000"}>
            {designation}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}

export default TeamCard;
