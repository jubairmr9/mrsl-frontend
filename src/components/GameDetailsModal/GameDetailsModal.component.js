import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ATTENDANCE_DATA } from "../../data";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#2f2f2f",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

const GameDetailsModal = ({ isOpen, onClose, data }) => {
  const gameAttendance = ATTENDANCE_DATA.find(
    (attend) => attend.game === data.game
  );

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="game-details-modal-title"
      aria-describedby="game-details-modal-description"
    >
      <Box
        sx={{
          ...style,
          maxHeight: "65vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          id="game-details-modal-description"
          variant="h5"
          sx={{
            mt: 2,
            textAlign: "center",
            fontWeight: 700,
            color: "rgb(253, 253, 253)",
          }}
        >
          {data.winner
            ? `${data.homeTeam} ${data.homeScore} - ${data.awayScore} ${data.awayTeam}`
            : `${data.homeTeam} vs ${data.awayTeam}`}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontStyle: "italic",
            textAlign: "center",
            color: "white",
          }}
        >
          {`@${data.location}`}
        </Typography>

        {data.winner && gameAttendance?.scorers.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: "rgb(253, 253, 253)" }}
            >
              Scorers:
            </Typography>
            <List>
              {gameAttendance.scorers.map((scorer, index) => (
                <ListItem
                  key={index}
                  sx={{ padding: 0, color: "rgb(253, 253, 253)" }}
                >
                  {scorer}
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        {data.winner && gameAttendance && (
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: "rgb(253, 253, 253)" }}
            >
              Player Attendance:
            </Typography>
            <List>
              {gameAttendance.attendees.map((name, index) => (
                <ListItem
                  key={index}
                  sx={{ padding: 0, color: "rgb(253, 253, 253)" }}
                >
                  {name}
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
            mb: 2,
          }}
        >
          <Button
            onClick={onClose}
            sx={{
              fontWeight: 700,
              color: "rgb(253, 253, 253)",
              border: "2px solid #fff",
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default GameDetailsModal;
