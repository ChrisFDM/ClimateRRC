import React, { useState, useEffect } from "react";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import PopupCard from "./PopupCard";

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
      <Stack direction="row" alignItems="center" spacing={2}>
        <CircularProgress size="lg" determinate value={value}>
          <Typography>{value}%</Typography>
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
