import { Stack, Box, Typography, Divider } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Stack
      direction={"row"}
      py={2}
      px={4}
      alignItems={"center"}
      sx={{
        justifyContent: "space-between",
        background: "white",
        borderBottom: "0.1px solid gray",
      }}
      height={"110px"}
    >
      <Link to={"/"}>
        <Box width={"140px"}>
          <img
            src="https://res.cloudinary.com/dhprtrwtd/image/upload/v1648056557/WG_2022_reskin.svg"
            alt="logo"
            width={"100%"}
          />
        </Box>
      </Link>
      <Box display={"flex"} gap={8}>
        <Link to={"/auctions"} color="">
          <Typography>Auctions</Typography>
        </Link>
        <Typography display={"flex"} alignItems="center">
          Auctions Categories
          <ExpandMoreOutlinedIcon />
        </Typography>

        <Link to={"/about"}>
          <Typography>About Us</Typography>
        </Link>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Link to={"/signup"}>
            <Typography>Sign Up</Typography>
          </Link>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ border: 1, borderColor: "error.dark" }}
          />
          <Link to={"/account"}>
            <Typography>Account</Typography>
          </Link>
          console.log("helo")
        </Box>
      </Box>
    </Stack>
  );
}
