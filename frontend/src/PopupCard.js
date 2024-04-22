import React from "react";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import "./styles.css";

const PopupCard = ({ onClose }) => {
  return (
    <div className="popup-card-overlay">
      <Stack className="popup-card" spacing={2}>
        <Typography level="h4" fontWeight="bold">
          Popup Card
        </Typography>
        <Typography level="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer nec odio. Praesent libero. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero.
        </Typography>
        <Button onClick={onClose}>Close</Button>
      </Stack>
    </div>
  );
};

export default PopupCard;
