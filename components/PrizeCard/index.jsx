"use client";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const PrizeCard = ({ amount, category }) => {
  const defaultOptions = {
    reverse: false,
    max: 4,
    perspective: 1000,
    scale: 1.02,
    speed: 200,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };

  const defaultBg = "linear-gradient(135deg, #28a745 0%, #218838 100%)"; // New default green background color
  const hoverBg = "linear-gradient(135deg, #218838 0%, #28a745 100%)"; // New hover green background color

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        <Tilt options={defaultOptions}>
          <div
            className="flex flex-col justify-center items-center py-[7.25rem] 
              rounded-[8px] border border-[#333]"
            style={{
              background: defaultBg,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = hoverBg)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = defaultBg)
            }
          >
            <p
              className="text-[#FFD700] font-[700] text-[7rem] leading-[8rem] 
                md:text-[10rem] md:leading-[10rem]"
            >
              {amount}
            </p>
            <p
              className="text-[rgba(255,255,255,0.8)] font-[500] font-[Inter] 
                text-[1.5rem] md:text-[2rem]"
            >
              {category}
            </p>
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

export default PrizeCard;
