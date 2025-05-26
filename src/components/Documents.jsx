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

export default function Documents({ documentsRef }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginBottom={16}
      gap={8}
      ref={documentsRef}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Documents
      </Typography>
      <Box display="flex" flexDirection="row" gap={8}>
        <DownloadCard
          label="Project Charter"
          link=""
        />
        <DownloadCard
          label="Proposal Report"
          link=""
        />
      </Box>
      <Box display="flex" flexDirection="row" gap={8}>
        <DownloadCard
          label="Status Document 1"
          link=""
        />
        <DownloadCard
          label="Status Document 2"
          link=""
        />
        <DownloadCard
          label="Final Report"
          link=""
        />
      </Box>
    </Box>
  );
}
