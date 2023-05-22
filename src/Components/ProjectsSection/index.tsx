import { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'



export const ProjectsSection = () => {

    const [data,setData] = useState([]);
    const carousel = useRef(null);
    useEffect(() =>{
        fetch('http://localhost:5173/src/dogs.json')
        .then((Response)=> Response.json())
        .then(setData);
    },[]);

    const handleLeftClick = () =>{
        
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= 538

    }

    const handleRightClick = () =>{
        
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += 538
    }


    return (
        <div className={styles.allScreen}>
            <h1 className={styles.title}>Veja nossos projetos</h1>
        <div className={styles.mainSection}>
        <button onClick={handleLeftClick}><img src="/src/assets/LeftArrow.svg"/></button>
        <div className={styles.container}>
            <div className={styles.carousel} ref={carousel}>
                {data.map((item) =>{
                    const{id,url,description} = item;
                    return(
                <div className={styles.item} key={id}>
                        <img className={styles.DogImg} src={url}alt="um cachorro qualquer"/>
                    <div className={styles.flexDescription}>
                        <span className={styles.project}>{description}</span>
                    </div>
                </div>
                    );
                })}
            </div>
                
            
        </div>
        <button onClick={handleRightClick}><img src="/src/assets/RightArrow.svg"/></button>
        </div>
        </div>
    )}