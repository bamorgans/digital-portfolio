import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionType } from "../lib/types";
import profileImage from "../assets/profile.jpeg";

interface DialNavigationProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

export default function DialNavigation({
  activeSection,
  onSectionChange,
}: DialNavigationProps) {
  const dialOuterRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  // Map sections to their relative positions around the dial (in degrees)
  const sectionAngles: Record<SectionType, number> = {
    about: 0, // Top position
    career: 120, // Top-right position
    projects: 240, // Top-left position
  };

  // Calculate the rotation needed to put a section at the bottom (6 o'clock = 180 degrees)
  const getBottomPositionRotation = (section: SectionType): number => {
    // 180 degrees is the bottom position
    // We need to rotate the section's angle to 180 degrees
    return 180 - sectionAngles[section];
  };

  // Position the dial on initial load only
  useEffect(() => {
    // Set initial rotation to position the active section at the bottom
    const initialRotation = getBottomPositionRotation(activeSection);
    setRotation(initialRotation);

    if (dialOuterRef.current) {
      // No transition for initial positioning
      dialOuterRef.current.style.transition = "none";
      dialOuterRef.current.style.transform = `rotate(${initialRotation}deg)`;
    }
  }, []);

  // Calculate rotation angle to position the next section at the bottom
  const getRotationAngle = (
    current: SectionType,
    next: SectionType,
  ): number => {
    if (current === next) return 0;

    // Calculate the angle difference between sections
    const currentAngle = sectionAngles[current];
    const nextAngle = sectionAngles[next];
    let angleDiff = nextAngle - currentAngle;

    // Normalize to smallest rotation path (-180 to 180 degrees)
    if (angleDiff > 180) angleDiff -= 360;
    if (angleDiff <= -180) angleDiff += 360;

    return angleDiff;
  };

  const handleSectionClick = (section: SectionType) => {
    if (section === activeSection) return;

    // Get rotation angle needed to move from current to new section
    const rotationAngle = getRotationAngle(activeSection, section);
    const newRotation = rotation - rotationAngle; // Subtract because we're rotating the dial, not the sections

    setRotation(newRotation);

    if (dialOuterRef.current) {
      dialOuterRef.current.style.transition = "transform 0.8s ease-in-out";
      dialOuterRef.current.style.transform = `rotate(${newRotation}deg)`;
    }

    // Update active section after animation completes
    setTimeout(() => {
      onSectionChange(section);
    }, 800);
  };

  // Calculate the current position of each label based on the dial's rotation
  const getLabelPosition = (section: SectionType): React.CSSProperties => {
    // Calculate the current angle of this section based on dial rotation
    const baseAngle = sectionAngles[section];
    const rotatedAngle = (baseAngle + rotation) % 360;
    const isActive = section === activeSection;

    // Shared styles for all labels
    const baseStyles = {
      fontWeight: isActive ? "bold" : "normal",
      backgroundColor: isActive
        ? "rgba(255, 255, 255, 1)"
        : "rgba(255, 255, 255, 0.8)",
      boxShadow: isActive
        ? "0 4px 8px rgba(0,0,0,0.15)"
        : "0 2px 4px rgba(0,0,0,0.1)",
      padding: isActive ? "8px 16px" : "6px 12px",
      borderRadius: "16px",
      zIndex: isActive ? 35 : 30,
    };

    // Determine position based on the current rotated angle
    if (rotatedAngle >= 150 && rotatedAngle < 210) {
      // Bottom position (180 degrees)
      return {
        ...baseStyles,
        bottom: "12%",
        left: "50%",
        top: "auto",
        right: "auto",
        minWidth: "100px",
        transform: "translate(-50%, 50%)",
        fontSize: isActive ? "1.5rem" : "1.1rem",
      };
    } else if (rotatedAngle >= 30 && rotatedAngle < 150) {
      // Right side position
      return {
        ...baseStyles,
        top: "50%",
        right: "2%",
        bottom: "auto",
        left: "auto",
        minWidth: "100px",
        transform: "translate(50%, -50%)",
        fontSize: "1.1rem",
      };
    } else {
      // Left side position
      return {
        ...baseStyles,
        top: "50%",
        left: "2%",
        bottom: "auto",
        right: "auto",
        minWidth: "100px",
        transform: "translate(-50%, -50%)",
        fontSize: "1.1rem",
      };
    }
  };

  return (
    <div className="dial-container">
      {/* Rotating gear part with sections */}
      <div ref={dialOuterRef} className="dial-outer relative">
        {/* Dial Sections */}
        <div
          className="dial-section cursor-pointer opacity-30 hover:opacity-50"
          onClick={() => handleSectionClick("about")}
        />
        <div
          className="dial-section cursor-pointer opacity-30 hover:opacity-50"
          onClick={() => handleSectionClick("career")}
        />
        <div
          className="dial-section cursor-pointer opacity-30 hover:opacity-50"
          onClick={() => handleSectionClick("projects")}
        />

        {/* Gear teeth design elements */}
        <div
          className="gear-teeth-container"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        >
          {Array.from({ length: 36 }).map((_, index) => {
            const angle = index * (360 / 36);
            const radians = (angle * Math.PI) / 180;
            const radius = 150; // Distance from center to tooth

            // Calculate position based on angle and radius
            const x = Math.sin(radians) * radius;
            const y = -Math.cos(radians) * radius;

            return (
              <div
                key={index}
                className="gear-tooth"
                style={{
                  position: "absolute",
                  width: "6px",
                  height: "14px",
                  backgroundColor: "#4b5563",
                  left: "calc(50% - 3px)",
                  top: "calc(50% - 7px)",
                  borderRadius: "2px",
                  transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                  boxShadow: `
                    0.5px 0.5px 1px rgba(0,0,0,0.4), 
                    inset 0px 1px 1px rgba(255,255,255,0.25)
                  `,
                  transformOrigin: "center center",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Labels positioned based on dial rotation */}
      <div className="dial-labels-fixed">
        <div
          className="dial-label absolute cursor-pointer transition-all duration-300"
          style={getLabelPosition("about")}
          onClick={() => handleSectionClick("about")}
        >
          About Me
        </div>
        <div
          className="dial-label absolute cursor-pointer transition-all duration-300"
          style={getLabelPosition("career")}
          onClick={() => handleSectionClick("career")}
        >
          Career
        </div>
        <div
          className="dial-label absolute cursor-pointer transition-all duration-300"
          style={getLabelPosition("projects")}
          onClick={() => handleSectionClick("projects")}
        >
          Projects
        </div>
      </div>

      {/* Non-rotating inner circle with profile image */}
      <div className="dial-inner bg-white flex items-center justify-center overflow-hidden">
        <img
          src={profileImage}
          alt="Professional profile photo"
          className="w-full h-full object-cover object-center"
          style={{
            filter: "brightness(1.05) contrast(1.05)",
          }}
        />
      </div>
    </div>
  );
}
