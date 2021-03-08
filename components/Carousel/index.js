import Image from 'next/image'
import { Grommet, Box, Carousel } from 'grommet';

import styles from './index.module.css'


export default function CarouselComponent(){
        
    return(
        <Grommet >
            
                <Carousel play={5000} fill >
                    <div className={styles.container}>
                        <Image 
                            src="/assets/imgs/bread.jpg"
                            width={1711}
                            height={725}
                        />
                        <div className={styles.textbox}>
                            <p className={styles.text}>BREAKING BREAD</p>
                            <h1 className={styles.title}>Flavorsome Moments</h1>
                            <p1 className={styles.text}>
                                Nulla lacinia ultrices ante, vel tristique nunc fermentum sed. 
                            </p1>
                            <p1 className={styles.text}>
                                Nullam eu quam tempus, rhoncus diam ut, faucibus turpis. Sed nunc justo, pretium ac tincidunt non, volutpat in turpis.
                            </p1>
                        </div>  
                    </div>

                    <div className={styles.container}>
                        <Image 
                            src="/assets/imgs/breads2.jpg"
                            width={1711}
                            height={725}
                        />
                        <div className={styles.textbox}>
                            <p className={styles.text}>BREAKING BREAD</p>
                            <h1 className={styles.title}>Flavorsome Moments</h1>
                            <p1 className={styles.text}>
                                Nulla lacinia ultrices ante, vel tristique nunc fermentum sed. 
                            </p1>
                            <p1 className={styles.text}>
                                Nullam eu quam tempus, rhoncus diam ut, faucibus turpis. Sed nunc justo, pretium ac tincidunt non, volutpat in turpis.
                            </p1>
                        </div>  
                    </div>

                    <div className={styles.container}>
                        <Image 
                            src="/assets/imgs/muffins.jpg"
                            width={1711}
                            height={725}
                        />
                        <div className={styles.textbox}>
                            <p className={styles.text}>BREAKING BREAD</p>
                            <h1 className={styles.title}>Flavorsome Moments</h1>
                            <p1 className={styles.text}>
                                Nulla lacinia ultrices ante, vel tristique nunc fermentum sed. 
                            </p1>
                            <p1 className={styles.text}>
                                Nullam eu quam tempus, rhoncus diam ut, faucibus turpis. Sed nunc justo, pretium ac tincidunt non, volutpat in turpis.
                            </p1>
                        </div>  
                    </div>

                </Carousel>
            
            
        </Grommet>
    )
}