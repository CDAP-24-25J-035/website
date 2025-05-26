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
          date={"01/02/2024"}
          title={"Project Proposal"}
          description={"Initial project proposal"}
        />
        <Dash />
        <Item
          date={"15/03/2024"}
          title={"Progress Presentation 1"}
          description={"First progress presentation"}
        />
        <Dash />
        <Item
          date={"01/05/2024"}
          title={"Progress Presentation 2"}
          description={"Second progress presentation"}
        />
        <Dash />
        <Item
          date={"20/07/2024"}
          title={"Final Assessment"}
          description={"Final project assessment"}
        />
        <Dash />
        <Item
          date={"25/07/2024"}
          title={"Viva"}
          description={"Oral examination (viva)"}
        />
      </Timeline>
    </Box>
  );
}
