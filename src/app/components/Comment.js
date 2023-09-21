"use client"

import { useCallback, useMemo, useRef, useState } from "react"

import CommentButton from "./CommentButton"
import CommentModal from "./CommentModal"

import styles from '@/app/styles/components/comment.module.scss'

const currentUser = {
    name : 'User01',
    avatarUrl :  'https://robohash.org/stefan-two',
}

const Comment = () => {

    const [state, setState] = useState({
        displayModal: false,
        reactions: {
            angry: 0,
            anxious: 0,
            bomb: 0,
            clapping: 0,
            beaming: 0,
        },
        lastReaction: '',
        comments : [
            { 
                text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                user : {
                    name : 'User00',
                    avatarUrl : 'https://robohash.org/stefan-one',
                }
            },
        ]
    })


    const toggleModal = useCallback(
        () => {
            setState(state => ({
                ...state,
                displayModal : !state.displayModal
            }))
        } , []
    )


    const onReact = useCallback(
        reaction => () => {
            setState(state => ({
                ...state,
                lastReaction: reaction,
                reactions: Object.assign({
                    ...state.reactions,
                    [reaction] : reaction !== state.lastReaction ? state.reactions[reaction]++ : state.reactions[reaction]
                }, state.lastReaction && state.lastReaction !== reaction ? {
                    [state.lastReaction] : state.reactions[state.lastReaction]--
                } : {})
            }))
        } , []
    )

    const onAddComment = useCallback(
        text => {
            setState(state => ({
                ...state,
                comments : [
                    ...state.comments, 
                    {
                        text,
                        user : currentUser
                    }
                ]
            }))
        } , []
    )

    return (
        <div className={styles.comment}>
            <CommentButton
                showAvatar={state.displayModal}
                onToggle={toggleModal}
                commentsNbr={state.comments.length}
            />
            <CommentModal 
                show={state.displayModal}
                title="Update feedback"
                comments={state.comments}
                reactions={state.reactions}
                onReact={onReact}
                onAddComment={onAddComment}
            />
        </div>
    )
}

export default Comment