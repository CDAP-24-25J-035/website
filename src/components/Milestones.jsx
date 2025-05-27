// * MUI Components
import { Box, Typography, styled } from "@mui/material";

// * MUI Timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

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

const Dot = () => (
  <TimelineSeparator>
    <TimelineDot
      variant="outlined"
      sx={{
        width: 38,
        height: 38,
        borderColor: "#000339",
        backgroundColor: "#E6F0FF",
        transition: "background-color 0.08s ease-in-out",
        "&:hover": {
          backgroundColor: "#000339",
        },
      }}
    />
  </TimelineSeparator>
);

const Dash = () => (
  <>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector
          sx={{
            backgroundColor: "#000339",
          }}
        />
      </TimelineSeparator>
      <TimelineContent />
    </TimelineItem>
    <TimelineItem sx={{ display: "none" }}>
      <TimelineContent />
    </TimelineItem>
  </>
);

const Item = ({ date, title, description }) => (
  <TimelineItem>
    <TimelineOppositeContent color="text.secondary" marginTop={2}>
      {date}
    </TimelineOppositeContent>
    <Dot />
    <TimelineContent>
      <LargeText>{title}</LargeText>
      <SmallText>{description}</SmallText>
    </TimelineContent>
  </TimelineItem>
);

export default function Milestones({ milestonesRef }) {
  return (
    <Box
      sx={{
        backgroundColor: "#E6F0FF",
        minHeight: "80vh",
        paddingY: 2,
      }}
      ref={milestonesRef}
    >
      <Typography
        variant="h3"
        width={"100%"}
        textAlign={"center"}
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Milestones
      </Typography>

      <Timeline position="alternate-reverse">
        <Item
          date={"05/05/2024"}
          title={"Project Proposal"}
          description={"Initial project proposal"}
        />
        <Dash />
        <Item
          date={"23/08/2024"}
          title={"Proposal Report"}
          description={"A Project Proposal is a document that describes the project vision"}
        />
        <Dash />
        <Item
          date={"04/12/2024"}
          title={"Progress Presentation 1"}
          description={"First progress presentation"}
        />
        <Dash />
        <Item
          date={"19/03/2025"}
          title={"Progress Presentation 2"}
          description={"Second progress presentation"}
        />
        <Dash />
        <Item
          date={"19/03/2025"}
          title={"Research Paper"}
          description={"Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge"}
        />
        <Dash />
        <Item
          date={"11/04/2025"}
          title={"Final Report"}
          description={"Final Report evaluates the completed project done throughout the year"}
        />
        <Dash />
        <Item
          date={"27/05/2025"}
          title={"Final Presentation & Viva"}
          description={"Viva is held individually to assess each member's contribution to the project"}
        />
        <Dash />
        <Item
          date={"27/05/2025"}
          title={"Website Assessment"}
          description={"The Website helps to promote our research project and reveals all details related to the project"}
        />
        <Dash />
        <Item
          date={"00/06/2025"}
          title={"Research Logbook"}
          description={"Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2"}
        />
      </Timeline>
    </Box>
  );
}
