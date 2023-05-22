import styles from './index.module.css'

type ContentServicesProps = {
    image: string,
    title: string, 
    description: string
}

export const ServicesContents = ({image, title, description}: ContentServicesProps) => {
    return (
        <section className={styles.section_container}>
            <img className={styles.image} src={image} alt="Logo do serviço"/>
            <h1 className={styles.title_value}>{title}</h1>
            <p className={styles.description_value}>{description}</p>
        </section>
    )
}