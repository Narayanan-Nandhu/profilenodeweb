import React from "react";

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const TextAnimation = (props) => {
    const { component, delay } = props
    return (
        <React.Fragment>
            <AnimatePresence>
                <motion.div initial={{ x: -50, opacity: 0}}
                    animate={{ x: 0 }}
                    whileHover={{scale: 1.2}}
                    whileInView = {{opacity: 1}}
                    transition={{ duration: .3, delay: delay}}
                >
                    {component}
                </motion.div>
            </AnimatePresence>
        </React.Fragment>
    )
}

export default TextAnimation;

