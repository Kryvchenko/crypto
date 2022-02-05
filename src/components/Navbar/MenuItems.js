import React from "react";
import "components/Navbar/MenuItems.scss";
import { motion } from "framer-motion";

export const MenuItems = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
      <ul className="menu">
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="#">Home</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="#">Features</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="#">Blog</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="#">FAQ</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.4 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="#">About & Contact</a>
        </motion.li>
      </ul>
    </>
  );
};
