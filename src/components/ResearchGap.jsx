// * MUI Components
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Box, Typography, styled } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import TaskIcon from "@mui/icons-material/Task";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "70%",
  marginTop: 32,
  marginBottom: 32,
  flexWrap: "wrap",
}));

const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginLeft: 8,
  marginRight: 8,
  marginBottom: 24,
}));

export default function ResearchGap() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
      }}
    >
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
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Research Gap
      </Typography>

      <CardContainer>
        <Card>
          <EngineeringIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "20px", color: "#3B3c45", my: 1 }}>
            Lack of Runtime Architectural Insight
          </Typography>
          <Box sx={{ cursor: "default", display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "20vw", textAlign: "center" }}>
            Most tools do not provide visual, runtime architectural feedback on how services interact, evolve, or degrade over time.
          </Box>
        </Card>

        <Card>
          <ManageSearchIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "20px", color: "#3B3c45", my: 1 }}>
            Detection of Architectural Smells
          </Typography>
          <Box sx={{ cursor: "default", display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "20vw", textAlign: "center" }}>
            Current observability platforms lack advanced algorithms to automatically detect anti-patterns such as cyclic dependencies, nano-services, and bottlenecks.
          </Box>
        </Card>
      </CardContainer>

      <CardContainer>
        <Card>
          <TaskIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "20px", color: "#3B3c45", my: 1 }}>
            Granularity Assessment
          </Typography>
          <Box sx={{ cursor: "default", display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "20vw", textAlign: "center" }}>
            There is limited support for evaluating whether services are too fine- or coarse-grained based on business capabilities or runtime data flow.
          </Box>
        </Card>

        <Card>
          <MergeTypeIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "20px", color: "#3B3c45", my: 1 }}>
            Coupling & Cohesion Metrics
          </Typography>
          <Box sx={{ cursor: "default", display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "20vw", textAlign: "center" }}>
            Developers lack integrated tooling to track and visualize service coupling or cohesion metrics throughout evolution.
          </Box>
        </Card>

        <Card>
          <ElectricalServicesIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "20px", color: "#3B3c45", my: 1 }}>
            Unscalable Monitoring Pipelines
          </Typography>
          <Box sx={{ cursor: "default", display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "20vw", textAlign: "center" }}>
            Existing tools produce large volumes of traces/logs but offer limited analysis tailored to architectural structure and evolution patterns.
          </Box>
        </Card>
      </CardContainer>
    </Box>
  );
}
