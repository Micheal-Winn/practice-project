import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Stack
      direction={"row"}
      p={2}
      alignItems={"center"}
      sx={{
        justifyContent: "space-between",
        background: "white",
        borderBottom: "0.1px solid gray",
      }}
      height={"150px"}
    >
      <Link to={"/"}>
        <img
          src="https://res.cloudinary.com/dhprtrwtd/image/upload/v1648056557/WG_2022_reskin.svg"
          alt="logo"
          width={"150px"}
        />
      </Link>
      <Box>
        <Typography>Auctions</Typography>
      </Box>
    </Stack>
  );
}
