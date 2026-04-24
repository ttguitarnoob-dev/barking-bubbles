import React, { useMemo } from "react";
import { motion } from "framer-motion";

import {
  DogScribbleIcon1,
  DogScribbleIcon2,
  DogScribbleIcon3,
  DogScribbleIcon4,
  DogScribbleIcon5,
  DogScribbleIcon6,
} from "./icons";

type IconComponent = React.FC<any>;

const icons: IconComponent[] = [
  DogScribbleIcon1,
  DogScribbleIcon2,
  DogScribbleIcon3,
  DogScribbleIcon4,
  DogScribbleIcon5,
  DogScribbleIcon6,
];

const colors = [
  "text-primary",
  "text-secondary",
  "text-accent",
  "text-foreground",
];

type Scribble = {
  Icon: IconComponent;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotate: number;
};

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const DogScribbleBackground: React.FC<{ count?: number }> = ({
  count = 45,
}) => {
  const scribbles = useMemo<Scribble[]>(() => {
    return Array.from({ length: count }).map(() => ({
      Icon: icons[Math.floor(Math.random() * icons.length)],
      x: random(0, 100),
      y: random(0, 100),
      size: random(18, 70),
      color: colors[Math.floor(Math.random() * colors.length)],

      // 🌙 slower + more spaced out
      delay: random(0, 10),
      duration: random(6, 14),

      rotate: random(-25, 25),
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {scribbles.map((s, i) => {
        const Icon = s.Icon;

        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              rotate: `${s.rotate}deg`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          >
            <Icon size={s.size} className={s.color} />
          </motion.div>
        );
      })}
    </div>
  );
};