
import styles from './index.module.css'
import logo from '../../assets/logo-light.svg'



export const Footer = () => {
    return (
        <footer className={styles.footer_section}>

            <main className={styles.footer_section_container}>
                <picture>
                    <a href="#">
                        <img className={styles.logo} src={logo} alt="logo do animal save" />
                    </a>
                </picture>

                <article className={styles.footer_container}>
                    <h4 className={styles.title}>Corporação</h4>
                    <ul>
                        <li className={styles.footer_item_container}><a className={styles.footer_item} href="#">Sobre nós</a></li>
                        <li className={styles.footer_item_container}><a className={styles.footer_item} href="#">Contato</a></li>
                        <li className={styles.footer_item_container}><a className={styles.footer_item} href="#">FAQs</a></li>
                        <li className={styles.footer_item_container}><a className={styles.footer_item} href="#">Parceiros</a></li>
                    </ul>
                </article>


                <article className={styles.footer_container}>
                    <h4 className={styles.title}>Serviços</h4>
                    <ul>
                        <li className={styles.footer_item_container}><a className={styles.footer_item} href="#">Serviços</a></li>
                        <li className={styles.footer_item_container}><a className={styles.footer_item} href="#">Resgate</a></li>
                        <li className={styles.footer_item_container}><a className={styles.footer_item} href="#">Acompanhamento clínico</a></li>
                        <li className={styles.footer_item_container}><a className={styles.footer_item} href="#">Lar temporário</a></li>
                        <li className={styles.footer_item_container}><a className={styles.footer_item} href="#">Adoção</a></li>
                    </ul>
                </article>
            </main>
        </footer>



    )

}