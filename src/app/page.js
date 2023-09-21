import Comment from './components/Comment'

import styles from '@/app/styles/home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Comment/>
    </main>
  )
}
