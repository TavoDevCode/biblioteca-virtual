import { NextPage } from 'next'
import Link from 'next/link'

import classNames from 'classnames'

import styles from '../styles/gradient.module.css'

const HomePage: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className={classNames(styles.text_gradient, 'text-[3rem] sm:text-[6rem] md:text-[8rem] font-semibold text-center')}>
        Bienvenidos a la biblioteca virtual
      </h1>

      <Link href={'/biblioteca-virtual'}>
        <button className="flex justify-center items-center gap-2 bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white m-5 py-2 px-4 text-2xl border-2 border-purple-500 hover:border-transparent rounded transition duration-500 ease-in-out">
          Ver biblioteca
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>
      </Link>
    </div>
  )
}

export default HomePage
