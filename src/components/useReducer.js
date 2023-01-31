import { motion } from "framer-motion";
const Usingreducers = () => {
  return (
    <>
      <motion.div className="class">
        <motion.h2
          className="bg-red-700"
          animate={{ fontSize: "50px", color: "red" }}
        >
          Header
        </motion.h2>
      </motion.div>
    </>
  );
};

export default Usingreducers;
