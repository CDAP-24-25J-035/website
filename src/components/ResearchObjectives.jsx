// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";

// * Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(10),
  alignItems: "center",
  marginTop: 32,
}));

const CardHolder = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 32,
}));

const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  alignItems: "center",
  border: "1px solid #E0E0E0",
  borderRadius: "10px",
  padding: 32,
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
  },
}));

const LargeText = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  color: "#000339",
  fontWeight: "600",
}));

const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#5A6473",
  lineHeight: "27px",
}));

const Divider = styled("div")(({ theme }) => ({
  width: "7%",
  height: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function ResearchObjectives() {
  return (
    <Container sx={{ marginBottom: 16 }}>
      <Divider />
      <Typography
        sx={{
          fontSize: "35px",
          color: "#000339",
          fontWeight: "700",
          my: 3,
        }}
      >
        Research Objectives
      </Typography>
      <CustomBox>
        <CardHolder>
          <LooksOneIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>
              Dynamic Architectural Visualization for Microservices
            </LargeText>
            <SmallText>
              Develop a dynamic, graph-based visualization system to represent
              runtime dependencies and evolution of microservice-based
              architectures. This enables stakeholders to identify system
              complexity, highlight changes over time, and support
              maintainability assessments.
            </SmallText>
          </Card>
        </CardHolder>

        <CardHolder>
          <LooksTwoIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>
              Detection of Architectural Smells and Anomalies
            </LargeText>
            <SmallText>
              Design algorithms to automatically detect architecture-related
              anti-patterns such as cyclic dependencies, tightly coupled
              services, service overload, and improper granularity using graph
              theory and system traces.
            </SmallText>
          </Card>
        </CardHolder>

        <CardHolder>
          <Looks3Icon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>
              Metric-Based Maintainability Modeling
            </LargeText>
            <SmallText>
              Define and compute maintainability metrics such as cohesion,
              coupling, service complexity, and churn over time. Use these
              metrics to analyze and predict long-term architectural degradation
              in microservice systems.
            </SmallText>
          </Card>
        </CardHolder>

        <CardHolder>
          <Looks4Icon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>
              Scalable Monitoring and Data Aggregation Framework
            </LargeText>
            <SmallText>
              Build a scalable monitoring pipeline capable of aggregating data
              from service logs, runtime traces, and infrastructure metrics to
              support real-time smell detection and architecture insights in
              large-scale deployments.
            </SmallText>
          </Card>
        </CardHolder>
      </CustomBox>
    </Container>
  );
}
