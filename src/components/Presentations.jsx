// * MUI Components
import { Box, Typography, CardContent, Link, Card } from "@mui/material";

const DownloadCard = ({ label, link }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {label}
        </Typography>
        <Link
          href={link}
          // download="file.txt"
          underline="hover"
          sx={{ display: "block", mt: 2 }}
        >
          Download
        </Link>
      </CardContent>
    </Card>
  );
};

export default function Presentations({ presentationsRef }) {
  return (
    <Box
      backgroundColor="#E6F0FF"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingBottom={16}
      gap={8}
      ref={presentationsRef}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Presentations
      </Typography>
      <Box display="flex" flexDirection="row" gap={8}>
        <DownloadCard
          label="Proposal Presentation"
          link=""
        />
        <DownloadCard
          label="Progress Presentation 1"
          link=""
        />
        <DownloadCard
          label="Progress Presentation 2"
          link=""
        />
        <DownloadCard
          label="Final Presentation"
          link=""
        />
      </Box>
    </Box>
  );
}
