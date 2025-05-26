// * Images
import SystemArchitectureImg from "../media/system-architecture.png";

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

export default function Methodology() {
  return (
    <Container sx={{ marginBottom: 16 }}>
      <CustomBox>
        <img
          src={SystemArchitectureImg}
          alt="System Architecture Diagram"
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
            Methodology
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            The methodology adopted in the development of InfraPulse followed a structured, research-driven approach:
            <br />
            <br />
            1. Literature Review & Gap Identification: Conducted an extensive review of microservice architecture patterns, runtime behaviors, and existing monitoring tools to identify missing capabilities — specifically the absence of runtime architectural smell detection and maintainability tracking.
            <br />
            <br />
            2. Metric and Smell Definition: Selected key architectural metrics (coupling, cohesion, cyclic dependencies, etc.) and cataloged microservice-specific anti-patterns based on prior academic and industry research.
            <br />
            <br />
            3. System Design: InfraPulse is designed with a modular layered architecture consisting of a Monitoring Layer, Graph Analyzer, Smell Detection Engine, and Visualization Interface. Each layer is independently deployable and interacts via standardized APIs.
            <br />
            <br />
            4. Implementation: Developed the system using a combination of service mesh observability tools, graph data structures, and dynamic trace ingestion. Real-time service call graphs are generated and analyzed to detect architectural anomalies.
            <br />
            <br />
            5. Evaluation & Case Studies: The platform was evaluated on both synthetic and real-world microservice datasets to validate its effectiveness. Metrics were collected around detection accuracy, scalability, and runtime overhead.
            <br />
            <br />
            InfraPulse enables architects and developers to visualize system architecture in real-time, detect emerging architectural smells, and evaluate the maintainability of their service designs. The architecture diagram below illustrates the separation of concerns and how each layer contributes to runtime analysis and architectural insight.
          </Typography>
        </Box>
      </CustomBox>
    </Container>
  );
}
