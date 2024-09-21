import { AnimatePresence, motion, Variants } from "framer-motion";

interface SlightFlipProps {
  word: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function SlightFlip({
  word,
  duration = 0.5,
  delayMultiple = 0.08,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}: SlightFlipProps) {
  return (
    <div className="flex flex-wrap justify-center sm:space-x-2 space-x-1">
      <AnimatePresence mode="wait">
        {word.split("").map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={`origin-center drop-shadow-sm ${className}`}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
