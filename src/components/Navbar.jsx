// * Images
import logoImg from "../media/InfraPulse.png";

// * MUI Components
import {
  Box,
  Container,
  Typography,
  styled,
} from "@mui/material";


// * Styled Components
const NavbarContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
}));

const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 25,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLink = styled(Typography)(({ theme }) => ({
  color: "#4F5361",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "transform 0.08s ease",
  "&:hover": {
    transform: "scale(1.08)",
  },
}));

export default function Navbar({ allRefs }) {

  const scroll = (name) => {
    if (!allRefs) return;
    const ref = allRefs[name];
    if (!ref) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavbarContainer>
      <Box>
        <NavbarLogo src={logoImg} alt="logo" />
      </Box>

      <NavbarLinkBox>
        <NavbarLink onClick={() => scroll("homeRef")}>Home</NavbarLink>
        <NavbarLink onClick={() => scroll("domainRef")}>Domain</NavbarLink>
        <NavbarLink onClick={() => scroll("milestonesRef")}>Milestones</NavbarLink>
        <NavbarLink onClick={() => scroll("documentsRef")}>Documents</NavbarLink>
        <NavbarLink onClick={() => scroll("presentationsRef")}>Presentations</NavbarLink>
        <NavbarLink onClick={() => scroll("aboutUsRef")}>About Us</NavbarLink>
      </NavbarLinkBox>
    </NavbarContainer>
  );
}
