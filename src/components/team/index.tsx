import React, { useState } from "react";
import { Card, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import TeamCard from "./teamCard";



interface EmpMessage {
  id?:number|string;  
  name: string;
  designation: string;
  message: string;
  image: string;
}

interface Props {
  employeeMessages: EmpMessage[];
}

function TeamCards({ employeeMessages }: Props) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        px: { sm: 8, xs: 1 },
        marginTop: 10,
        // color: "#fff",
      }}
    >
      <Typography variant="h3">Here is what the team has to say...</Typography>
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          padding: { sm: 5, xs: 2 },
          marginTop: 4,
        }}
      >
        <Grid container spacing={2}>
          {employeeMessages.map((employee, i) => {
            return (
              <Grid item md={4} sm={6} xs={12} key={i}>
                <TeamCard employee={employee} />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Container>
  );
}

export default TeamCards;
