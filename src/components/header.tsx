import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Página Inicial', page: '/blog' },
  { label: 'Sobre/Contato', page: '/contact' },
]

const ogImageUrl = './Dev_Eremita.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Dev Eremita </title>
        <meta
          name="description"
          content="Blog com tutoriais e notas de estudo resultantes das extensas horas-bunda-cadeira de um QA programador em sua caverna (quarto)."
        />
        <meta name="title" content="Blog do Dev Eremita" />
      </Head>
      <img src="./Dev_Eremita.png" alt="Dev Eremita - Logo" />
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page} passHref>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
