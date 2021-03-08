import _JSXStyle from 'styled-jsx/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.css'
import { useEffect, useState } from 'react'

export default function SideBar({status}){
    const [open, setOpen] = useState()
    

    useEffect(() =>{
        setOpen(status)
    },[status])

    const troggleMenu = () => {
        if(open ){
            setOpen(false)
    
        } else {
            setOpen(true)

        }
    }

    
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Image 
                    src="/assets/imgs/logo-menu.png"
                    width={103}
                    height={61}
                />
                <div onClick={()=>troggleMenu()}>
                    <FontAwesomeIcon icon={faTimes} size="2x" color={'#FFFFFF'}/>
                </div>
                
            </div>
            

            <div className={styles.content}>
                <Link href="/">
                    <a className={styles.link}>HOME</a>              
                </Link>

                <Link href="/">
                    <a className={styles.link}>PORTFOLIO</a>              
                </Link>

                <Link href="/">
                    <a className={styles.link}>BLOG</a>              
                </Link>

                <Link href="/">
                    <a className={styles.link}>SHOP</a>              
                </Link>

                <p className={styles.paragraph}>
                    Lorem ipsum dolor amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa. 
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>

                <div className={styles.divider}/>

                <div className={styles.followContainer}>
                    <span className={styles.follow}>Follow Us: </span>
                    <FontAwesomeIcon icon={faFacebook} size="1x" color={'#FFFFFF'} style={{marginRight: '5px'}}/>
                    <FontAwesomeIcon icon={faInstagram} size="1x" color={'#FFFFFF'} style={{marginRight: '5px'}}/>
                    <FontAwesomeIcon icon={faTwitter} size="1x" color={'#FFFFFF'} style={{marginRight: '5px'}}/>
                    <FontAwesomeIcon icon={faPinterest} size="1x" color={'#FFFFFF'} style={{marginRight: '5px'}}/>
                </div>
            </div>
            
            <style jsx>{`
                visibility: ${status && open ? "visible" : "hidden"};
                animation: ${status ? "open" : "close"};
            `}</style>
        </div>

    )
}