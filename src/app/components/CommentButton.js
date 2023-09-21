import Image from "next/image"
import { memo, useMemo } from "react"

import styles from '@/app/styles/components/comment-button.module.scss'

const CommentButton = ({ commentsNbr, onToggle , showAvatar }) => {

    const imageWrapperClassName = useMemo(
        () => {
            return `${styles.imageWrapper} ${showAvatar ? styles.showAvatar : ''}`
        } , [showAvatar]
    )

    return (
        <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={onToggle} >
                <span>{ commentsNbr }</span> 
            </button>
            <div className={imageWrapperClassName}>
                <Image src='https://robohash.org/stefan-one' alt='OPavatar' width={60} height={60}/>
            </div>
        </div>
      
    )
}

export default memo(CommentButton)