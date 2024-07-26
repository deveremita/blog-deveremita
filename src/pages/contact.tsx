import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import Insta from '../components/svgs/insta'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Insta,
    alt: 'Instagram icon',
    link: 'https://www.instagram.com/rob.sings/',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/roberto-santos-69ba371b0/',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Sobre o blog e seu criador" />
      <div className={sharedStyles.layout}>
        <h1 style={{ marginTop: 0 }}>Sobre o blog e seu autor</h1>

        <div className={contactStyles.about}>
          <p>
            Olá! Espero que estejam gostando do meu blog.
            <br />
            Idealizei este espaço para compartilhar registros de toda a minha
            jornada na área da computação,
            <br /> seja como desenvolvedor ou como entusiasta.
          </p>

          <div className={contactStyles.contact_resume}>
            <div>
              <br />
              Me chamo Roberto Santos. <br />
              Tenho formação técnica em TI, uma boa expertise com computação em
              geral <br />
              e habilidades em programação.
              <br />
              <br />
              Atualmente atuo como QA, e me divirto nas horas vagas criando
              projetos como este blog
            </div>
            <img src="./avatar.png" alt="Foto de perfil" />
          </div>

          <div className={contactStyles.skills}>
            <h2>Conhecimentos em:</h2>
            <li>
              <h3>HTML</h3>
              <span className={contactStyles.bar}>
                <span className={contactStyles.html}></span>
              </span>
            </li>
            <li>
              <h3>CSS</h3>
              <span className={contactStyles.bar}>
                <span className={contactStyles.css}></span>
              </span>
            </li>
            <li>
              <h3>JavaScript</h3>
              <span className={contactStyles.bar}>
                <span className={contactStyles.js}></span>
              </span>
            </li>
            <li>
              <h3>TypeScript</h3>
              <span className={contactStyles.bar}>
                <span className={contactStyles.ts}></span>
              </span>
            </li>
            <li>
              <h3>Node e outros frameworks</h3>
              <span className={contactStyles.bar}>
                <span className={contactStyles.node}></span>
              </span>
            </li>
            <li>
              <h3>Python</h3>
              <span className={contactStyles.bar}>
                <span className={contactStyles.py}></span>
              </span>
            </li>
            <li>
              <h3>Django e outros frameworks</h3>
              <span className={contactStyles.bar}>
                <span className={contactStyles.dj}></span>
              </span>
            </li>
            <li>
              <h3>Java</h3>
              <span className={contactStyles.bar}>
                <span className={contactStyles.jv}></span>
              </span>
            </li>
            <li>
              <h3>C/C++</h3>
              <span className={contactStyles.bar}>
                <span className={contactStyles.c_cpp}></span>
              </span>
            </li>
            <li>
              <h3>ShellScript, BatchScript e PowerShell</h3>
              <span className={contactStyles.bar}>
                <span className={contactStyles.scripts_lang}></span>
              </span>
            </li>
          </div>
        </div>
        <div className={contactStyles.contact_area}>
          <h1>Redes sociais e e-mail</h1>

          <div className={contactStyles.name}>
            Além do GitHub,
            <br /> possuo perfis nas seguintes plataformas:{' '}
          </div>

          <div className={contactStyles.links}>
            {contacts.map(({ Comp, link, alt }) => {
              return (
                <ExtLink key={link} href={link} aria-label={alt}>
                  <Comp height={32} />
                </ExtLink>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
