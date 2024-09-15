"use client";
import { useEffect } from "react";
import gsap from "gsap";

const FallingFlowers: React.FC = () => {
  // Function to create a single flower element
  const createFlower = () => {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    // Set a random horizontal position for the flower
    flower.style.left = Math.random() * window.innerWidth + "px";

    // Add the flower to the container
    const flowerContainer = document.getElementById("flower-container");
    if (flowerContainer) {
      flowerContainer.appendChild(flower);

      // Animate the flower using GSAP
      gsap.to(flower, {
        y: window.innerHeight + 100, // Fall below the screen
        duration: Math.random() * 3 + 2, // Random fall speed between 2 and 5 seconds
        ease: "power1.out", // Smooth falling motion
        rotation: Math.random() * 360, // Add some rotation for variation
        onComplete: () => {
          flower.remove(); // Remove the flower once it reaches the bottom
        },
      });
    }
  };

  // Function to generate multiple flowers at once
  const createFallingFlowers = () => {
    const flowerCount = 40; // Number of flowers to generate
    for (let i = 0; i < flowerCount; i++) {
      setTimeout(createFlower, i * 200); // Stagger the creation of each flower
    }
  };

  // Run the animation on component mount (client side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      createFallingFlowers();
    }
  }, []);

  return <div id="flower-container"></div>;
};

export default FallingFlowers;
