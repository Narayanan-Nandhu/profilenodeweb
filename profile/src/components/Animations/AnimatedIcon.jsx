import React from "react";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const AnimatedIcon = (props) => {
    const { component, delay } = props

    return (
        <React.Fragment>
            <AnimatePresence>
                <motion.div initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{scale: 1.2, duration: .1 }}
                    transition={{ duration: .3, delay: delay }}
                >
                    {component}
                </motion.div>
            </AnimatePresence>
        </React.Fragment>
    )
}


export default AnimatedIcon;