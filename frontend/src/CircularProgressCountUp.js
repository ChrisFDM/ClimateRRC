import React from "react";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";
import PopupCard from "./PopupCard";
import "./styles.css";

export default function CircularProgressCountUp({ percentage }) {
  const { value: value2 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: percentage,
  });

  const [popupCardVisibility, setPopupCardVisibility] = React.useState(false);

  const handleOpenPopupCard = () => {
    setPopupCardVisibility(true);
  };

  const handleClosePopupCard = () => {
    setPopupCardVisibility(false);
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
          onClick={handleOpenPopupCard}
        >
          Transitional Risks
        </Button>
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={handleOpenPopupCard}
        >
          Physical Risks
        </Button>
      </Stack>
      {popupCardVisibility && <PopupCard onClose={handleClosePopupCard} />}
    </Stack>
  );
}
