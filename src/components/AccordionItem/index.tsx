import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { IAccordionItem } from '../../types'
import styles from './AccordionItem.module.scss'
import accordionIcon from '../../assets/icons/accordion-icon.png';

type TProps = {
    item: IAccordionItem
};

const AccordionItem:React.FC<TProps> = ({item}) => {

    const [ isVisible, setIsVisible ] = useState(false);

    const handleAccordion = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
        setIsVisible(!isVisible)
    };

    const variants = {
        visible: {
            transform: 'rotate(-90deg)'
        },
        notVisible: {
            transform: 'rotate(0deg)'
        }
    }

  return (
    <div className={styles.accordionItemWrapper}>
        <div onClick={handleAccordion} className={styles.accordionItemTitle}>
            <AnimatePresence>
                <motion.img
                    alt='icon'
                    src={accordionIcon}
                    transition={{duration: 0.5}}
                    variants={variants}
                    animate={
                        isVisible
                        ? 'visible'
                        : 'notVisible'
                    }
                    exit={
                        isVisible
                        ? 'visible'
                        : 'notVisible'
                    }
                />
            </AnimatePresence>
            <h4>{item.title}</h4>
        </div>
        <AnimatePresence>
            {
                isVisible
                ? (
                    <motion.div
                        initial={{height: 0}}
                        animate={{height: 'auto'}}
                        style={{overflow: 'hidden'}}
                        exit={{height: 0}}
                        transition={{duration: 0.5}}
                    >
                        <div className={styles.accordionItemTextWrapper}>
                            <p>{item.text}</p>
                        </div>
                    </motion.div>
                )
                : ""
            }
        </AnimatePresence>
    </div >
  )
}

export default AccordionItem