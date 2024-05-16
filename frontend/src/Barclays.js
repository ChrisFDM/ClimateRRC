import React, { useState, useEffect } from "react";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import PopupCard from "./PopupCard";
import "./styles.css";

const Barclays = ({
  percentage,
  transitionalPopupCardContent,
  physicalPopupCardContent,
}) => {
  const [transitionalPopupVisibility, setTransitionalPopupVisibility] =
    useState(false);
  const [physicalPopupVisibility, setPhysicalPopupVisibility] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) =>
        prevValue < percentage ? prevValue + 1 : prevValue
      );
    }, 10);

    return () => clearInterval(interval);
  }, [percentage]);

  const handleCloseTransitionalPopup = () => {
    setTransitionalPopupVisibility(false);
  };

  const handleClosePhysicalPopup = () => {
    setPhysicalPopupVisibility(false);
  };

  return (
    <div className="barclays-container">
      <Stack direction="column" alignItems="center" spacing={2}>
        <CircularProgress
          size="lg"
          determinate
          value={value}
          sx={{ "--CircularProgress-size": "125px" }}
        >
          <Typography style={{ fontSize: "1.75rem" }}>{value}%</Typography>
        </CircularProgress>
        {transitionalPopupVisibility && (
          <PopupCard
            onClose={handleCloseTransitionalPopup}
            content={transitionalPopupCardContent}
          />
        )}
        {physicalPopupVisibility && (
          <PopupCard
            onClose={handleClosePhysicalPopup}
            content={physicalPopupCardContent}
          />
        )}
      </Stack>
    </div>
  );
};

export default Barclays;
