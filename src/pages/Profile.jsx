import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useAuthContext } from "../context/AuthContext";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";

const Profile = () => {
  const { currentUser } = useAuthContext();
  console.log(currentUser);
  return (
    <Box
      sx={{
        marginTop: 19,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: 550,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
          gap: 2,
        }}
      >
        <Avatar
          alt={currentUser.displayName || ""}
          src={currentUser.photoURL}
          sx={{ width: 250, height: 250 }}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Display Name
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {currentUser.displayName || "Not Found!"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {currentUser.email}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;