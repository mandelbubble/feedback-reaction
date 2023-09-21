import styles from '@/app/styles/components/new-comment.module.scss'
import { robotoMono } from '../lib/fonts'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

const NewComment = ({ onAdd }) => {

    const [comment, setComment] = useState('')
    const [sendComment, setSendComment] = useState(false)

    const onChange = useCallback(
        ({ target : { value }}) => {
            setComment(value)
        } , []
    )

    const onCommentAdd = useCallback(
        () => {
            setSendComment(true)
        } , []
    )

    useEffect(
        () => {
            if (!sendComment) return
            onAdd(comment)
            setComment('')
            setSendComment(false)
        } , [comment, sendComment, onAdd]
    )

    return (
        <div className={`${styles.layout} ${robotoMono.className}`}>
            <div> {} </div>
            <textarea 
                className={styles.textarea} 
                placeholder={'Add comment...'}
                value={comment} 
                onChange={onChange}  
            />
            <button 
                className={styles.btn}
                onClick={onCommentAdd}
                disabled={comment.trim().length < 1}
            >
                <Image
                    src='/send.png'
                    alt={'send'}
                    width={24}
                    height={24}
                />
            </button>
        </div>
    )
}

export default NewComment
