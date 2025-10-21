import "./BottomNavigationBar.css";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
export default function BottomNavigationBar() {
  const [isExiting, setIsExiting] = useState(false);
  const [isRocketNavLoading, setRocketNavLoad] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [hoveredRoute, setHoveredRoute] = useState(path);
  const { themeName } = useContext(ThemeContext);
  const [barPosition, setBarPosition] = useState("default_pos");
  const navControls = useAnimation();
  const divControls = useAnimation();
  const navBoxInsideControls = useAnimation();
  const navBoxInsideUlItemControls = useAnimation();

  const handleNavClick = (route) => {
    if (path !== route) {
      setRocketNavLoad(true);
      setTimeout(() => {
        setRocketNavLoad(false);
      }, 500);
    }
    setTimeout(() => {
      navigate(route);
    }, 500);
  };

  useEffect(() => {
    if (!isExiting) {
      document.documentElement.style.setProperty("overflow", "hidden");
    } else {
      document.documentElement.style.setProperty("overflow", "auto");
    }
  }, [isExiting]);

  const navItems = [
    {
      name: "Home",
      route: "/",
      iconCode: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      name: "Inspiration",
      route: "/inspiration",
      iconCode: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      ),
    },
    {
      name: "Components",
      route: "/components",
      iconCode: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
          />
        </svg>
      ),
    },
    {
      name: "Assets",
      route: "/assets",
      iconCode: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
      ),
    },
    {
      name: "Practice",
      route: "/practice",
      iconCode: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      ),
    },
    {
      name: "Projects",
      route: "/projects",
      iconCode: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
      ),
    },
    {
      name: "Blog",
      route: "/blog",
      iconCode: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
          />
        </svg>
      ),
    },
    {
      name: "About",
      route: "/about",
      iconCode: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <AnimatePresence>
      {isRocketNavLoading && (
        <motion.div
          className="absolute top-0 left-0 h-1 bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ width: 0 }}
        />
      )}
      <motion.nav
        className="bottom-nav-wrapper-- chirp-regular-font"
        initial={{ bottom: 20 }}
        animate={navControls}
      >
        <motion.div
          className="relative"
          initial={{ maxWidth: "96%", margin: "0 2% 0 2%" }}
          animate={divControls}
        >
          <motion.div
            className={`bottom-nav-- ${
              hoveredRoute === "/home" && path === "/"
                ? null
                : !isRocketNavLoading && hoveredRoute !== path && "active_hover"
            } ${themeName} flex justify-between w-full`}
            animate={navBoxInsideControls}
          >
            <motion.ul
              className="list-none flex justify-center items-center w-full gap-[8px]"
              initial={{ flexWrap: "wrap" }}
              animate={navBoxInsideUlItemControls}
            >
              {navItems.map((item, index) => (
                <motion.li
                  onMouseEnter={() => {
                    setHoveredRoute(`/${item.name?.toLowerCase()}`);
                  }}
                  onMouseLeave={() => {
                    setHoveredRoute(null);
                  }}
                  data-name={item.name}
                  onClick={() => handleNavClick(item.route)}
                  className={`cursor-pointer ${
                    path === item.route && "active_route"
                  }`}
                  key={index}
                >
                  <motion.div>{item.iconCode}</motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className={`absolute font-semibold text-[12px] right-0 -top-[22px] route ${themeName}`}
          >
            {hoveredRoute ? hoveredRoute : path === "/" ? "/home" : path}
          </motion.div>

          <motion.div
            className={`absolute font-semibold text-[12px] left-0 -top-[22px] navbar-settings ${themeName}`}
          >
            <span
              onClick={async () => {
                await navControls.start({
                  bottom: "auto",
                  top: 40,
                  transition: { duration: 0.5, ease: "easeInOut" },
                });

                await divControls.start({
                  maxWidth: "5%",
                  margin: "0 0 0 2%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                });

                await navBoxInsideControls.start({
                  height: "90vh",
                  transition: { duration: 0.5, ease: "easeInOut" },
                });

                setBarPosition("align_left");
              }}
            >
              |
            </span>

            <span
              onClick={async () => {
                await navBoxInsideControls.start({
                  height: "initial",
                  transition: { duration: 0.5, ease: "easeInOut" },
                });

                await divControls.start({
                  maxWidth: "96%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                });

                await navControls.start({
                  bottom: 20,
                  top: "auto",
                  transition: { duration: 0.5, ease: "easeInOut" },
                });

                setBarPosition("default_pos");
              }}
            >
              -
            </span>
          </motion.div>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  );
}
