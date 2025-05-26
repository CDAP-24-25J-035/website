// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  alignItems: "start",
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

const VerticalDivider = styled("div")(({ theme }) => ({
  width: "5px",
  height: "40vh",
  borderRadius: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function Literature({ domainRef }) {
  return (
    <Container sx={{ marginTop: 8, marginBottom: 16 }} ref={domainRef}>
      <Typography
        sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
      >
        Domain
      </Typography>
      <Divider />
      <CustomBox marginTop={4}>
        <Box>
          <Typography
            sx={{
              fontSize: "35px",
              color: "#000339",
              fontWeight: "700",
              my: 3,
            }}
          >
            Literature Review
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            The evolution of microservice-based architectures (MSA) has brought increased flexibility and scalability to modern software systems. However, it has also introduced new challenges in managing system complexity, maintainability, and service-level agreements. Architectural smells such as cyclic dependencies, tightly coupled services, and improper service granularity are often hard to detect and can degrade system performance and maintainability over time [1].

            Various studies have proposed the use of runtime monitoring, coupling/cohesion metrics, and graph-based modeling to capture and analyze service dependencies [2]. Yet, real-time observability and actionable insights for large-scale MSA systems remain a concern due to high system dynamism and distributed nature [3]. This motivates the development of tools like InfraPulse that combine dynamic monitoring, graph analytics, and anomaly detection to support better architectural decision-making and long-term maintainability.
          </Typography>
        </Box>
        <Box minHeight="100%" marginY={"auto"}>
          <VerticalDivider />
        </Box>
        <Box height={"100%"}>
          <Typography
            sx={{
              fontSize: "28px",
              color: "#000339",
              fontWeight: "500",
              mb: 3,
              mt: 5,
            }}
          >
            References
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
              minWidth: "24vw",
            }}
          >
            [1] R. Taibi, V. Lenarduzzi, C. Pahl, “Architectural Smells in Microservices: A Taxonomy,” Journal of Systems and Software, 2017.
            <br />
            [2] D. Apolinário, B. França, “Monitoring the Coupling Evolution of Microservice-Based Architectures,” SBCARS '20.
            <br />
            [3] G. Parker et al., “Visualizing Anti-Patterns in Microservices at Runtime: A Systematic Mapping Study,” IEEE Access, 2023.
            <br />
          </Typography>
        </Box>
      </CustomBox>
    </Container>
  );
}
