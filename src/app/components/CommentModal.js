
import { memo , useMemo } from 'react'

import { rubik , robotoMono } from '../lib/fonts'

import styles from '@/app/styles/components/comment-modale.module.scss'
import Image from 'next/image'
import EmojisBar from './EmojisBar'
import NewComment from './NewComment'

const CommentModal = ({ show , title , comments, reactions, onReact, onAddComment }) => {

    const modalClassName = useMemo(() => {
        return `${styles.modale} ${show ? '' : styles.hiddenModale} ${robotoMono.className}`
    }, [show])

    const titleClassName = useMemo(
        () => {
            return `${styles.title} ${rubik.className}`
        } , []
    ) 

    const answers = useMemo(
        () => {
            const answersNb = comments.length - 1
            const plural = answersNb > 0
            return `${answersNb} ${plural ? 'ANSWERS' : 'ANSWER'}`
        } , [comments.length]
    )

    return (
        <div className={modalClassName}>
            <div className={styles.commentsView}>
                <h1 className={titleClassName}> {title} </h1>

                {
                    comments.map(
                        (_, i) => {
                            return (
                                <>
                                    <div key={i} className={styles.flexWrapper}>
                                        <div className={styles.user}>
                                            <div className={styles.avatar}>
                                                <Image
                                                    src={comments[i].user.avatarUrl}
                                                    alt={comments[i].user.name}
                                                    width={24}
                                                    height={24}
                                                />
                                            </div>
                                            <span>{comments[i].user.name}</span>
                                        </div>
                                        { i === 0 && <div> { answers } </div> } 
                                    </div>

                                    <div className={styles.commentBox}>
                                        <p>{comments[i].text}</p>
                                    </div> 

                                    { i === 0 && <EmojisBar reactions={reactions} onReact={onReact}/> }

                                </>
                            )
                        }
                    )
                }
            </div>
                <NewComment onAdd={onAddComment}/>
        </div>
    )
}

export default memo(CommentModal)