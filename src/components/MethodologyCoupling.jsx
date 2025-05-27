import SystemCouplingImg from "../media/system-coupling-diagram.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const Divider = styled("div")(({ theme }) => ({
  width: "13%",
  height: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Coupling() {
  return (
    <Container sx={{ marginBottom: 16 }}>
      <CustomBox>
        <img
          src={SystemCouplingImg}
          alt="Service Coupling Diagram"
          style={{
            maxWidth: "30vw",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            border: "1px solid rgba(0,0,0,0.1)",
            padding: "10px",
          }}
        />
        <Box>
          <Divider />
          <Typography
            sx={{
              fontSize: "35px",
              color: "#000339",
              fontWeight: "700",
              my: 3,
            }}
          >
            Coupling Analysis
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            The coupling component provides a comprehensive analysis of inter-service dependencies within a microservices architecture:
            <br /><br />
            1. Trace Ingestion & Parsing: Continuously consumes telemetry streams to extract invocation patterns, including service pairs and execution contexts.
            <br /><br />
            2. Weighted Coupling Graph: Builds a directed graph where nodes represent services and edges carry weights computed from invocation frequency, average latency, and co-execution rates.
            <br /><br />
            3. Coupling Metrics Computation: Calculates key coupling metrics such as Absolute Dependence (degree of outgoing reliance) and Absolute Importance (incoming dependency strength), alongside edge-centric metrics for pairwise service analysis.
            <br /><br />
            4. Real-Time Updates: Applies time-decay functions to edge weights, ensuring the graph reflects current operational behavior and de-emphasizes outdated interactions.
            <br /><br />
            5. Anomaly Detection: Integrates statistical methods (e.g., CUSUM, Exponential Moving Average) to detect significant shifts in coupling patterns and logs change points with relevant metadata.
            <br /><br />
            6. Visualization & Alerts: Exposes a RESTful API for dashboard integration, enabling dynamic rendering of coupling intensities via edge thickness and color scales, and triggers alerts when thresholds are breached.
            <br /><br />
            This component is designed for modular deployment, containerized with Docker, orchestrated via Kubernetes, and seamlessly integrates with the broader monitoring and analysis ecosystem.
          </Typography>
        </Box>
      </CustomBox>
    </Container>
  );
}
