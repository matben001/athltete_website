import * as React from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";
// import "./styles.css";
 
const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "hsl(17, 100%, 56%)",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};
 
const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};
 
export default function ParticleAnim() {
  const { innerWidth, innerHeight } = useWindowSize();
 
  return (
    <ParticleImage
      src={"/img/runner.png"}
      width={Number(innerWidth)}
      height={Number(innerHeight)}
      scale={1}
      entropy={80}
      maxParticles={4000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="#00191D1F"
    />
  );
}