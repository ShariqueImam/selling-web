import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  padding:'7px',
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#f0f0f0",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: "linear-gradient(-90deg, #ffb900 0, #ffdb00 100%)",
  },
}));

export default function CustomizedProgressBars({ progress }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
