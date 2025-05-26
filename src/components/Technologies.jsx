// * Images
import mongoDbLogoImg from "../media/technology/mongodb-logo.png";
import goLogoImg from "../media/technology/go-logo.png";

// * MUI Components
import { Box, Container, Typography } from "@mui/material";

const Image = ({ src, alt }) => (
  <Box
    sx={{
      height: 120,
      width: 220,
      display: "flex",
      justifyContent: "center",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
      border: "1px solid rgba(0,0,0,0.1)",
      padding: "10px",
      transition: "transform 0.2s ease",
      "&:hover": {
        transform: "scale(1.02)",
      },
    }}
  >
    <Box
      component={"img"}
      src={src}
      alt={alt}
      width={"100%"}
      height={"100%"}
      sx={{
        objectFit: "contain",
      }}
    />
  </Box>
);

export default function Technologies() {
  return (
    <Container sx={{ marginBottom: 16 }}>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#000339",
            margin: "0 auto",
          }}
        ></div>
        <Typography
          variant="h3"
          sx={{
            fontSize: "35px",
            fontWeight: "bold",
            color: "#000339",
            marginTop: 3,
            marginBottom: 10,
          }}
        >
          Technologies Used
        </Typography>
        <Box gap={10} display={"flex"} flexDirection={"row"}>
          <Image src={goLogoImg} alt="Go Logo" />
          <Image src={mongoDbLogoImg} alt="MongoDB Logo" />
        </Box>
      </Box>
    </Container>
  );
}
