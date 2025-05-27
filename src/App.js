import { useRef } from "react";

// * Components
import Home from "./components/Home";
import Literature from "./components/Literature";
import ResearchGap from "./components/ResearchGap";
import ResearchProblem from "./components/ResearchProblem";
import ResearchObjectives from "./components/ResearchObjectives";
import Methodology from "./components/Methodology";
import Coupling from "./components/MethodologyCoupling";
import Technologies from "./components/Technologies";
import Milestones from "./components/Milestones";
import Documents from "./components/Documents";
import Presentations from "./components/Presentations";
import AboutUs from "./components/AboutUs";

import Footer from "./components/Footer";

function App() {
  const homeRef = useRef(null);
  const domainRef = useRef(null);
  const milestonesRef = useRef(null);
  const documentsRef = useRef(null);
  const presentationsRef = useRef(null);
  const aboutUsRef = useRef(null);

  const allRefs = {
    homeRef,
    domainRef,
    milestonesRef,
    documentsRef,
    presentationsRef,
    aboutUsRef,
  };

  return (
    <div className="App">
      <Home homeRef={homeRef} allRefs={allRefs} />

      <Literature domainRef={domainRef} />
      <ResearchGap />
      <ResearchProblem />
      <ResearchObjectives />
      <Methodology />
      <Coupling />
      <Technologies />

      <Milestones milestonesRef={milestonesRef} />
      <Documents documentsRef={documentsRef} />
      <Presentations presentationsRef={presentationsRef} />
      <AboutUs aboutUsRef={aboutUsRef} />
      <Footer />
    </div>
  );
}

export default App;
