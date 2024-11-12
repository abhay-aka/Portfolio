import { CONTACT } from "../constants";
import { motion } from "framer-motion"
const Contact = () => {
    return (
        <div className="border-t border-stone-200/20 pb-20">
            <motion.h2 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                className="my-10 text-center text-4xl font-bold text-white">
                Get in Touch
            </motion.h2>
            <div className="text-center tracking-tighter text-gray-300">
                <motion.p 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    href={`mailto:${CONTACT.email}`} 
                    className="my-4 hover:text-white transition-colors">
                    {CONTACT.address}
                </motion.p>
                <motion.p 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className="my-4 hover:text-white transition-colors">
                    {CONTACT.phoneNo}
                </motion.p>
                <a 
                    className="border-b border-gray-300 hover:border-white hover:text-white transition-colors">
                    {CONTACT.email}
                </a>
            </div>
        </div>
    )
}

export default Contact;