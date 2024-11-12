import { FaNodeJs, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiReactjsLine, RiVuejsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiSailsdotjs, SiRabbitmq } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(1.8)}
                >
                  <RiReactjsLine className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(2.2)}
                  className="p-4"
                >
                  <RiVuejsLine className="text-5xl text-vue-color" />
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(1.6)}
                  className="p-4"
                >
                  <SiMongodb className="text-5xl text-mongo-color" />
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(2.0)}
                  className="p-4"
                >
                  <FaNodeJs className="text-5xl text-green-500" />
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(1.9)}
                  className="p-4"
                >
                  <SiSailsdotjs className="text-5xl text-sails-color" />
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(1.7)}
                  className="p-4"
                >
                  <SiExpress className="text-5xl" />
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(2.3)}
                  className="p-4"
                >
                  <TbBrandCpp className="text-5xl text-cpp-color" />
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(1.5)}
                  className="p-4"
                >
                  <SiRabbitmq className="text-5xl text-rabbitmq-color" />
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(2.1)}
                  className="p-4"
                >
                  <FaPython className="text-5xl text-python-color" />
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(1.9)}
                  className="p-4"
                >
                  <FaHtml5 className="text-5xl text-html-color" />
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(2.0)}
                  className="p-4"
                >
                  <FaCss3Alt className="text-5xl text-css-color" />
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Technologies;