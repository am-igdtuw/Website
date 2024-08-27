import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Profile.css";
import { borderRadius } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "70vh",
  bgcolor: "orange",
  // border: "2px solid #000",
  borderRadius: 5,
  // boxShadow: 24,
  p: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Center content vertically
  alignItems: "center", // Center content horizontally
};

const getRandomGradient = () => {
  const colors = [
    "#ff7e5f",
    "#feb47b",
    "#6a11cb",
    "#2575fc",
    "#ff6b6b",
    "#f06595",
    "#c6ff00",
    "#b9fbc0",
    "#a18cd1",
    "#fbc2eb",
    "#ffecd2",
    "#fcb045",
  ];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(135deg, ${color1}, ${color2})`;
};

export default function Profile({ name, email, phone, branch }) {
  const [open, setOpen] = useState(false);
  const profilePictureRef = useRef(null);

  // Set a random gradient when the modal opens
  const handleOpen = () => {
    if (profilePictureRef.current) {
      profilePictureRef.current.style.background = getRandomGradient();
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Use an effect to set the initial gradient when the component mounts
  useEffect(() => {
    if (profilePictureRef.current) {
      profilePictureRef.current.style.background = getRandomGradient();
    }
  }, []);

  return (
    <div>
      <Stack direction="row" spacing={2} onClick={handleOpen} sx={{ mt: 2 }}>
        <Avatar alt="" src="" sx={{ width: 48, height: 48 }} />
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profile-section">
            <div className="profile-header">
              <div
                ref={profilePictureRef}
                className="profile-picture"
                alt="Profile"
              >
                {/* You can add an image tag or initials here if needed */}
              </div>
              <div className="profile-details">
                <h2>Your Profile</h2>
              </div>
            </div>
            <div className="profile-info">
              <div className="info-group">
                <span className="info-label">Name:</span>
                <span className="info-value">{name}</span>
              </div>
              <div className="info-group">
                <span className="info-label">Email:</span>
                <span className="info-value">{email}</span>
              </div>
              <div className="info-group">
                <span className="info-label">Phone Number:</span>
                <span className="info-value">{phone}</span>
              </div>
              <div className="info-group">
                <span className="info-label">Branch:</span>
                <span className="info-value">{branch}</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
