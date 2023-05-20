import person from '../../assets/person-icon.svg'
import exit from '../../assets/exit-icon.svg'
import logo from '../../assets/logo.svg'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,


} from '@chakra-ui/react'
import styles from './index.module.css'
import { HamburgerIcon } from '@chakra-ui/icons'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>


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
                <article className={styles.hamburger_container}>
                    <Menu>
                        <MenuButton >
                            <HamburgerIcon className={styles.hamburger_icon} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem >
                                <a href="#" className={styles.menu_item}>
                                    <img src={person} alt="icone de pessoa" />
                                    <span>Login</span>
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#" className={styles.menu_item}>
                                    <img src={exit} alt="icone de porta" />
                                    <span>Cadastrar</span>
                                </a>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </article>

            </nav>
        </header >
    )

}