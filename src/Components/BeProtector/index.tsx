import pessoa_segurando_patinha from '../../assets/pessoa_segurando_patinha.svg'
import icone_casinha from '../../assets/icone_casinha.svg'
import styles from './index.module.css'




export const BeProtector = () => {

    return (
        <section className={styles.section_container}>
            <article className={styles.article}>
                <article className={styles.article_title}>
                    <img className={styles.image} src={icone_casinha} alt="Icone de uma casinha" />
                    <h1 className={styles.title_value}>Torne-se um protetor</h1>
                </article>
                <p className={styles.description_value}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget.</p>
                <section className={styles.button_container}>
                    <button className={styles.button_light_green}>Participe</button>
                </section>
                </article>
            <img className={styles.image_dog} src={pessoa_segurando_patinha} alt="Pessoa segurando uma pata de cachorro" />
        </section>
    )
}