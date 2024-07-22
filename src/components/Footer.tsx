/* eslint-disable @next/next/no-img-element */
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "black",
          height: "115px",
        }}
      >
        {/* box - 1 */}
        <Box
          sx={{ display: "flex", flexDirection: "row", pt: 2, gap: 2, pl: 5 }}
        >
          <img src="/images/img1.png" alt="img" />
          <Box pt={1.7}>
            <Typography color={"white"}> Dreaming On</Typography>
            <Typography color={"gray"}> NEFFEX</Typography>
          </Box>
          <Box pt={2}>
            <FavoriteIcon sx={{ color: "#1DB954", fontSize: "15px" }} />
          </Box>
        </Box>

        {/* box - 2 */}
        <Box></Box>

        {/* box - 3 */}
        <Box></Box>
      </Box>

      <Link href={'./music-list'}>
      <Button>
        click me 
      </Button>
      </Link>
      
    </>
  );
};

export default Footer;
