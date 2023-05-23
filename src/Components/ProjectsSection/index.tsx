/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styles from './index.module.css'
import leftArrow from '../../assets/LeftArrow.svg'
import rightArrow from '../../assets/RightArrow.svg'
import dog1 from '../../assets/Dog1.svg'
import dog2 from '../../assets/Dog2.svg'
import dog4 from '../../assets/Dog4.svg'
import { useRef } from 'react'

export const ProjectsSection = () => {


    const carousel = useRef<HTMLDivElement>(null);


    const handleLeftClick = () => {
        if (carousel.current) {
            carousel.current.scrollLeft -= 538;
        }
    }

    const handleRightClick = () => {
        if (carousel.current) {
            carousel.current.scrollLeft += 538;
        }
    }

    return (
        <div className={styles.allScreen}>
            <h1 className={styles.title}>Veja nossos projetos</h1>
            <div className={styles.mainSection}>
                <button onClick={handleLeftClick}><img src={leftArrow} /></button>
                <div className={styles.container}>
                    <div className={styles.carousel} ref={carousel}>
                        
                          
                                <div className={styles.item}>
                                    <img className={styles.DogImg} src={dog1} alt="um cachorro qualquer" />
                                    <div className={styles.flexDescription}>
                                        <span className={styles.project}>Lorem Impsun</span>
                                    </div>
                                </div>

                                <div className={styles.item}>
                                    <img className={styles.DogImg} src={dog2} alt="um cachorro qualquer" />
                                    <div className={styles.flexDescription}>
                                        <span className={styles.project}>Lorem Impsun</span>
                                    </div>
                                </div>

                                <div className={styles.item}>
                                    <img className={styles.DogImg} src={dog4} alt="um cachorro qualquer" />
                                    <div className={styles.flexDescription}>
                                        <span className={styles.project}>Lorem Impsun</span>
                                    </div>
                                </div>

                                <div className={styles.item}>
                                    <img className={styles.DogImg} src={dog1} alt="um cachorro qualquer" />
                                    <div className={styles.flexDescription}>
                                        <span className={styles.project}>Lorem Impsun</span>
                                    </div>
                                </div>

                                <div className={styles.item}>
                                    <img className={styles.DogImg} src={dog2} alt="um cachorro qualquer" />
                                    <div className={styles.flexDescription}>
                                        <span className={styles.project}>Lorem Impsun</span>
                                    </div>
                                </div>

                                <div className={styles.item}>
                                    <img className={styles.DogImg} src={dog4} alt="um cachorro qualquer" />
                                    <div className={styles.flexDescription}>
                                        <span className={styles.project}>Lorem Impsun</span>
                                    </div>
                                </div>

                                <div className={styles.item}>
                                    <img className={styles.DogImg} src={dog1} alt="um cachorro qualquer" />
                                    <div className={styles.flexDescription}>
                                        <span className={styles.project}>Lorem Impsun</span>
                                    </div>
                                </div>

                                <div className={styles.item}>
                                    <img className={styles.DogImg} src={dog2} alt="um cachorro qualquer" />
                                    <div className={styles.flexDescription}>
                                        <span className={styles.project}>Lorem Impsun</span>
                                    </div>
                                </div>

                                <div className={styles.item}>
                                    <img className={styles.DogImg} src={dog4} alt="um cachorro qualquer" />
                                    <div className={styles.flexDescription}>
                                        <span className={styles.project}>Lorem Impsun</span>
                                    </div>
                                </div>
                           
                        
                    </div>


                </div>
                <button onClick={handleRightClick}><img src={rightArrow} /></button>
            </div>
        </div>
    )
}