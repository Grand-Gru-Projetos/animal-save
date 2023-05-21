
import styles from './index.module.css'




export const BestFrind = () => {
    return (
        <section className={styles.section_container}>
            <article className={styles.information_container}>
                <h1 className={styles.title}>
                    Procurando um <span className={styles.title_highlight}>melhor amigo?</span>
                </h1>
                <p className={styles.information}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget.</p>

                <button className={styles.button}>
                    Adote agora!
                </button>
            </article>
        </section>



    )

}