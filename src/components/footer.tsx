import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>
          <ExtLink href="https://github.com/deveremita">
            <img
              src="./github-icon.png"
              height={68}
              width={68}
              alt="Acesso ao github"
            />{' '}
          </ExtLink>
          Por:
          <br />
          <b>Roberto Santos</b>| deveremita
        </span>
      </footer>
    </>
  )
}
