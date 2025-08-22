import BrochureCover from "@/components/BrochureCover";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PartnershipSection from "@/components/PartnershipSection";
import PrivilegesSection from "@/components/PrivilegesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* P1: Cover Page */}
      <BrochureCover />
      
      {/* P2: Problem Section */}
      <ProblemSection />
      
      {/* P3: Solution Section */}
      <SolutionSection />
      
      {/* P4: Partnership Section */}
      <PartnershipSection />
      
      {/* P5: Privileges Section */}
      <PrivilegesSection />
      
      {/* P6: Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;
