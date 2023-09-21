import { memo } from "react"

import styles from "@/app/styles/components/emojis-bar.module.scss"
import Image from "next/image"

const EmojisBar = ({ reactions , onReact }) => {


    return (
        <div className={styles.bar}>
            {
                Object.keys(reactions).map(reaction => {
                    const className = `${styles.reaction} ${reactions[reaction] > 0 ? styles.show : ''}`
                    const onClick = onReact(reaction)
                    return (
                        <button 
                            key={reaction} 
                            className={className}
                            onClick={onClick}
                        >
                            <Image
                                src={`/emojis/${reaction}.png`}
                                alt={reaction}
                                width={24}
                                height={24}
                            />
                            <span>{reactions[reaction]}</span>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default memo(EmojisBar)