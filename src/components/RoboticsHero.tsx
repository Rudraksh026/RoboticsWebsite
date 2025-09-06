import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

// 3D Robot Components
function FloatingGear({ position, rotationSpeed = 1 }: { position: [number, number, number], rotationSpeed?: number }) {
  const meshRef = useRef<any>();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * rotationSpeed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Torus ref={meshRef} position={position} args={[1, 0.3, 8, 16]} scale={0.8}>
      <meshStandardMaterial color="#00d4ff" emissive="#001a66" />
    </Torus>
  );
}

function RobotCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<any>();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[1.5, 1.5, 1.5]} scale={0.7}>
      <meshStandardMaterial color="#8b5cf6" emissive="#2d1b69" />
    </Box>
  );
}

function FloatingSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<any>();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.4;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.8]} scale={0.6}>
      <meshStandardMaterial color="#f59e0b" emissive="#cc4400" wireframe />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
      
      <FloatingGear position={[-3, 0, 0]} rotationSpeed={0.8} />
      <RobotCube position={[0, 0, 0]} />
      <FloatingSphere position={[3, 0, 0]} />
      <FloatingGear position={[1.5, 2, -1]} rotationSpeed={-1.2} />
      <FloatingSphere position={[-1.5, -2, 1]} />
    </>
  );
}

export default function RoboticsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="float-animation">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">The Robotics Club</span>
            <br />
            <span className="text-foreground">Pantnagar</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Pioneering the future of robotics and automation at the College of Technology, Pantnagar. 
          Where innovation meets excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-hero">
            <NavLink to="/event">
              Explore Event
            </NavLink>
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary pulse-glow">10+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">200+</div>
            <div className="text-sm text-muted-foreground">Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tech-orange">250+</div>
            <div className="text-sm text-muted-foreground">Alumni</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}