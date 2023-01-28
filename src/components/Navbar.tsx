import { Stack, Box, Typography, Divider, Container } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box display={"flex"} flexDirection="column" boxShadow={"0 3px 2px #F5F5F5"}>
      <Stack
        direction={"row"}
        py={2}
        px={4}
        alignItems={"center"}
        sx={{
          justifyContent: "space-between",
          background: "white",
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
          <Link
            to={"/auctions"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography>Auctions</Typography>
          </Link>
          <Typography display={"flex"} alignItems="center">
            Auctions Categories
            <ExpandMoreOutlinedIcon />
          </Typography>

          <Link
            to={"/about"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography>About Us</Typography>
          </Link>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography>Sign Up</Typography>
            </Link>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ border: 1, borderColor: "error.dark" }}
            />
            <Link
              to={"/account"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography>Account</Typography>
            </Link>
          </Box>
        </Box>
      </Stack>

        <Container>
          
          
        </Container>
      
    </Box>
  );
}
