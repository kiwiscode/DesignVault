import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InitialNavigation() {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (route) => {
    setIsExiting(true);
    setTimeout(() => {
      navigate(route);
    }, 500);
  };
  const navItems = [
    { name: "Home", route: "/" },
    { name: "Inspiration", route: "/inspiration" },
    { name: "Components", route: "/components" },
    { name: "Assets", route: "/assets" },
    { name: "Practice", route: "/practice" },
    { name: "Projects", route: "/projects" },
    { name: "Blog", route: "/blog" },
    { name: "About", route: "/about" },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.nav
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-semibold text-center w-full flex justify-center items-center h-dvh"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.ul
            className="list-none max-w-[400px] items-start flex flex-col gap-[20px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                onClick={() => handleNavClick(item.route)}
                key={index}
                className="text-left cursor-pointer text-[#333] bg-white shadow-[4px_4px_0px_0px_#333] py-[4px] px-[12px] rounded-[12px] transform transition-all duration-300 hover:scale-105"
              >
                {item.name}
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
