import { useEffect,useState } from 'react'
import styles from './index.module.css'



export const PartnerSection = () => {

    const [data,setData] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5173/src/partners.json')
        .then((Response)=> Response.json())
        .then(setData);
    },[]);

    return (
        <div className={styles.allScreen}>
            <div className={styles.partnerSpace}>
            <h1 className={styles.title}>Nossos parceiros</h1>
        <div className={styles.mainSection}>
        <div className={styles.container}>
            <div className={styles.partners}>
                {data.map((item) =>{
                    const{id,url} = item;
                    return(
                <div className={styles.item} key={id}>
                        <img className={styles.DogImg} src={url}alt="imagem de um parceiro"/>
                </div>
                    );
                })}
            </div>
        </div>
        </div>
        </div>
              <div className={styles.catPart}>
              <img className={styles.whiteCat} src="/src/assets/whiteCat.svg"alt='gato branco acenando'/>

              <div className={styles.allArticle}>
                <div className={styles.textAndImage}>
                    <img className={styles.storeImg} src='/src/assets/lojinha.svg' alt='logo de lojinha'/>
                    <h1 className={styles.isCompany}>É uma empresa?</h1>
                </div>
                <div className={styles.titleAndDescription}>
                    <h1 className={styles.titleWhite}>Ajude também esta causa</h1>
                    <h1 className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim non nunc vitae convallis. Aenean ac nisl in.</h1>  
                </div>
                <button className={styles.button}>Torna-se parceiro</button>
              </div>
              </div>

        </div>
    )}