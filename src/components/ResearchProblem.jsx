// * Images
import researchProblemImg from "../media/research-problem.png";

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

export default function ResearchProblem() {
  return (
    <Container sx={{ marginBottom: 16 }}>
      <CustomBox>
        <img
          src={researchProblemImg}
          alt="Research Problem Illustration"
          style={{ maxWidth: "30vw" }}
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
            Research Problem
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            As microservices gain popularity for building scalable and distributed systems, maintaining long-term architectural health has become increasingly difficult. Modern microservice-based architectures often suffer from design smells such as cyclic dependencies, tightly coupled modules, inappropriate service granularity, and runtime anomalies that are hard to detect and resolve without dynamic observability.

            Existing monitoring tools focus primarily on performance metrics (e.g., CPU, memory, response time), but offer little to no support for visualizing and analyzing architectural integrity. There is a lack of frameworks that enable real-time tracking of service interactions, cohesion, coupling, and structural evolution, leaving teams unaware of growing technical debt or maintainability risks.

            Furthermore, most approaches do not integrate automated smell detection, nor do they leverage graph-based models that reflect the real-time topology of the system. This creates a major blind spot in DevOps workflows and slows down root-cause analysis during failures or architectural drift.

            InfraPulse addresses these limitations by introducing a graph-based, runtime-aware platform that enables architectural visualization, smell detection, and evolution tracking in microservice ecosystems. The goal is to empower system architects and engineers with actionable insights to maintain structural quality, reduce long-term complexity, and improve system maintainability.
          </Typography>
        </Box>
      </CustomBox>
    </Container>
  );
}
