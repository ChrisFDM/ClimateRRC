import React from "react";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import "./styles.css";

const PopupCard = ({ onClose, content }) => {
  return (
    <div className="popup-card-overlay">
      <Stack className="popup-card" spacing={2}>
        <Typography level="body2">{content}</Typography>
        <Button onClick={onClose}>Close</Button>
      </Stack>
    </div>
  );
};

export default PopupCard;
