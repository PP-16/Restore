import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import NewCard from "./NewCard";

export default function New() {
  var data = Array.from(Array(150).keys());
  return (
    <Container>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={3} key={item}>
            <NewCard pic ={`https://picsum.photos/200/300?${Math.random()}`} Item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
