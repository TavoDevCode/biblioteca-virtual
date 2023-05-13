import Link from 'next/link'
import { NextPage } from 'next'

import styles from './styles.module.css'

export const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <Link href={'/'}>
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 font-semibold text-white">
          <path
            fillRule="evenodd"
            d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <h1 className="font-semibold text-md sm:text-2xl text-white text-center">Nuestra biblioteca recreativa</h1>
    </div>
  )
}
