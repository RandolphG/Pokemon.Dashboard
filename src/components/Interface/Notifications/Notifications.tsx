import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./stlye.css";

const Notifications = () => {
  const notifications: number[] = [1, 2, 3, 4, 5];

  const Button = () => (
    <button className="add" onClick={() => console.log(`YOU ADDED SOMETHING`)}>
      +
    </button>
  );

  const Notify = () => (
    <ul>
      <AnimatePresence initial={false}>
        {notifications.map(id => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          />
        ))}
      </AnimatePresence>
    </ul>
  );

  return (
    <div className="container">
      <Notify />
      <Button />
    </div>
  );
};

export default Notifications;
