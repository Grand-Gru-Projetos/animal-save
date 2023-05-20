import styles from './index.module.css'
import Logo_paw from '../../assets/Logo_paw.svg'
import {ServicesContents} from '../ServicesContent/index'



export const ContentServices = () => {
    return (
        <section className={styles.section_container}>
            <article className={styles.article_container}>
                <img src={Logo_paw} className={styles.logo_paw} alt="Logo patinha" />
                    <h1 className={styles.title_value}>Lorem impsun, <span className={styles.title_value_two}>lorem impsun</span></h1> 
            </article>
            <section className={styles.section_container_services}>
                <article>
                <ServicesContents 
                    image="/src/assets/atendimento_imediato.svg" 
                    title='Atendimento imediato' 
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                </article>
                <article>
                    <ServicesContents 
                        image="/src/assets/cuidados_clinicos.svg" 
                        title='Cuidados clínicos' 
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                </article>
                <article>
                    <ServicesContents 
                        image="/src/assets/lar_temporario.svg" 
                        title='Lar temporário' 
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                </article>
            </section>
        
        </section>
    )
}