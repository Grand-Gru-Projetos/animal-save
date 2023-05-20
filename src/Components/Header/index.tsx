import person from '../../assets/person-icon.svg'
import exit from '../../assets/exit-icon.svg'
import logo from '../../assets/logo.svg'
import house from '../../assets/house.svg'
import projects from '../../assets/projector-screen-chart.svg'
import partners from '../../assets/users-three.svg'
import services from '../../assets/package.svg'
import about_us from '../../assets/users-four.svg'
import contact from '../../assets/phone.svg'

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


                            <MenuItem>
                                <a href="#" className={styles.menu_item}>
                                    <img className={styles.icons_menu} src={house} alt="icone de porta" />
                                    <span>Início</span>
                                </a>
                            </MenuItem>

                            <MenuItem>
                                <a href="#" className={styles.menu_item}>
                                    <img className={styles.icons_menu} src={projects} alt="icone de projetos" />
                                    <span>Projetos</span>
                                </a>
                            </MenuItem>

                            <MenuItem>
                                <a href="#" className={styles.menu_item}>
                                    <img className={styles.icons_menu} src={partners} alt="icone de parceiros" />
                                    <span>Parceiros</span>
                                </a>
                            </MenuItem>

                            <MenuItem>
                                <a href="#" className={styles.menu_item}>
                                    <img className={styles.icons_menu} src={services} alt="icone de porta" />
                                    <span>Serviços</span>
                                </a>
                            </MenuItem>

                            <MenuItem>
                                <a href="#" className={styles.menu_item}>
                                    <img className={styles.icons_menu} src={about_us} alt="icone de porta" />
                                    <span>Sobre nós</span>
                                </a>
                            </MenuItem>

                            <MenuItem>
                                <a href="#" className={styles.menu_item}>
                                    <img className={styles.icons_menu} src={contact} alt="icone de porta" />
                                    <span>Contato</span>
                                </a>
                            </MenuItem>

                        </MenuList>
                    </Menu>
                </article>

            </nav>
        </header >
    )

}