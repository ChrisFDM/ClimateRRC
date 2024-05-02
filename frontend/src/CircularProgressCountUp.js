import React from "react";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";
import PopupCard from "./PopupCard";

const CircularProgressCountUp = ({
  percentage,
  transitionalPopupCardContent,
  physicalPopupCardContent,
}) => {
  const { value: value2 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: percentage,
  });

  const [transitionalPopupVisibility, setTransitionalPopupVisibility] =
    React.useState(false);
  const [physicalPopupVisibility, setPhysicalPopupVisibility] =
    React.useState(false);

  const handleOpenTransitionalPopup = () => {
    setTransitionalPopupVisibility(true);
  };

  const handleCloseTransitionalPopup = () => {
    setTransitionalPopupVisibility(false);
  };

  const handleOpenPhysicalPopup = () => {
    setPhysicalPopupVisibility(true);
  };

  const handleClosePhysicalPopup = () => {
    setPhysicalPopupVisibility(false);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <CircularProgress size="lg" determinate value={value2}>
        <Typography>{value2}%</Typography>
      </CircularProgress>
      <Stack spacing={1}>
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={handleOpenTransitionalPopup}
        >
          Transitional Risks
        </Button>
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={handleOpenPhysicalPopup}
        >
          Physical Risks
        </Button>
      </Stack>
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
  );
};

export default CircularProgressCountUp;
