
import styles from './index.module.css'



export const Banner = () => {
    return (
        <section className={styles.section_container}>
            <article className={styles.information_container}>
                <h1 className={styles.banner_title}>
                    What is Lorem Ipsum?
                </h1>
                <p className={styles.banner_content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim non nunc vitae convallis. Aenean ac nisl in.
                </p>
                <div className={styles.button_container}>
                    <button className={styles.button_light_green}>
                        Ajude agora
                    </button>
                    <button className={styles.button_transparent}>
                        Saiba mais
                    </button>
                </div>
            </article>
        </section>
    )

}