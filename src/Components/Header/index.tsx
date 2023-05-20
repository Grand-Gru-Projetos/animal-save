import search from '../../assets/search-icon.svg'
import person from '../../assets/person-icon.svg'
import exit from '../../assets/exit-icon.svg'
import logo from '../../assets/logo.svg'

import styles from './index.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>

                <a href="#">
                    <img src={search} alt="icone de lupa" />
                </a>

                <article className={styles.navbar_group}>
                    <a className={styles.navbar_option_selected} href="#">Início</a>
                    <a href="#">Projetos</a>
                    <a href="#">Parceiros</a>
                </article>

                <a href="#">
                    <img className={styles.logo} src={logo} alt="logo do animal save" />
                </a>

                <article className={styles.navbar_group}>
                    <a href="#">Serviços</a>
                    <a href="#">Sobre nós</a>
                    <a href="#">Contatos</a>
                </article>

                <article className={styles.login_options}>
                    <a href="#">
                        <img src={person} alt="icone de pessoa" />
                    </a>
                    <a href="#">
                        <img src={exit} alt="icone de porta" />
                    </a>
                </article>
            </nav>
        </header>
    )

}