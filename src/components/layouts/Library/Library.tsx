import { NextPage } from 'next'
import { PropsWithChildren } from 'react'

import styles from './styles.module.css'
import { Footer, Header } from '@/components'

export const Library: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />

      {children}

      <Footer />
    </div>
  )
}
