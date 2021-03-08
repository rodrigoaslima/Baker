import React, { useState } from 'react';
import { Box, Grommet, Header, Image as Img, Footer} from 'grommet'
import Image from 'next/image'
import Link from 'next/link'
import { faSearch, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import styles from '../styles/Home.module.css'

//Components
import DropDown from '../components/DropDown'
import SideBar from '../components/SideBar'
import CarouselComponent from '../components/Carousel'

//helper
import home from '../helper/home'
import pages from '../helper/home'
import portfolio from '../helper/home'
import blog from '../helper/home'
import shop from '../helper/home'
import elements from '../helper/home'



export default function Home() {
  const [status, setStatus] = useState(false)

  const troggleMenu = () => {
    if(status){
      setStatus(false)
    } else {
      setStatus(true)
    }
  }

  return (
    <Grommet plain full>
      <SideBar status={status}/>

      
      
      <Header background="#fff" pad="medium" height="xsmall">
        <Image 
          src="/assets/imgs/logo.png"
          width={102}
          height={60}
        />
        <DropDown title="HOME" items={home} />
        <DropDown title="PAGES" items={pages} />
        <DropDown title="PORTFOLIO" items={portfolio} />
        <DropDown title="BLOG" items={blog} />
        <DropDown title="SHOP" items={shop} />
        <DropDown title="ELEMENTS" items={elements} />
        <div className={styles.menu}>
          <FontAwesomeIcon icon={faSearch} size="2x" flip="horizontal" />
          <FontAwesomeIcon icon={faShoppingBag} size="2x"/>
          <div onClick={()=>troggleMenu()}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
          
        </div>
      </Header>

      <Box pad="xlarge">
        <CarouselComponent/>
      </Box>

      <Box 
        direction="row-responsive"
        justify="center"
        align="center"
        margin="10px"
      >
        <Box height="265" width="medium" align="center">
          <Img src="/assets/imgs/h1-img-1b.png"
            fit="cover"
          />
          <p className={styles.title}> Crusty Bread Recipes </p>
          <p className={styles.text}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna. </p>
        </Box>

        <Box  height="265" width="medium" align="center">
          <Img src="/assets/imgs/h1-img-2a.png"
            fit="cover"
          />
          <p className={styles.title}> Croissant With Detail </p>
          <p className={styles.text}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna.</p>
        </Box>

        <Box  height="265" width="medium" align="center">
          <Img src="/assets/imgs/h1-img-3a.png"
            fit="cover"
          />
          <p className={styles.title}> Breakfast Croissant </p>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna.</p>
        </Box>

        <Box  height="265" width="medium" align="center">
          <Img src="/assets/imgs/home-7-image-4.jpg"
            fit="cover"
          />
          <p className={styles.title}> Simply Delicious </p>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna.</p>
        </Box>

      </Box>
      
      <Footer background="#232323" pad='large' direction="row-responsive">
        <Box height="small" width="small" margin="10px">
          <Img src="/assets/imgs/logo-menu.png"/ >
          <p className={styles.footerText}>Sed ut perspiciatis unde omnis iste natus and error sit voluptatem accusantium doloremque laudantium.</p>
        </Box>

        <Box height="small" width="small" margin="10px">
          <p className={styles.footerTitle}>LATEST TWEETS</p>
          <p className={styles.footerText}>Hey, please DM us so we can provide more details. Thanks!</p>
          <Link href="https://twitter.com/EdgeThemes/status/1306536742711898112">
            <a className={styles.footerText}>6 months ago</a>
          </Link>

          <p className={styles.footerText}>Here comes La Comète! ☄️ This stellar #WordPress theme is made for any type of modern…</p>
          <Link href="https://twitter.com/EdgeThemes/status/1306536742711898112">
            <a className={styles.footerText}>2 years ago</a>
          </Link>

        </Box>

        <Box height="small" width="small" margin="10px">
          <p className={styles.footerTitle} >INSTAGRAM FEED</p>
          <Img src="/assets/imgs/instagram.PNG"/>
        </Box>

        <Box height="small" width="small" margin="10px">
          <p className={styles.footerTitle}>JOIN THE CLUB</p>
          <input/>
          <p className={styles.footerText}>Sign me up to receive emails on new product arrivals special offers.</p>
          <span>Contact us: </span>
          <span>00 34 938 60 24 24</span>
        </Box>

      </Footer>
      <Footer background="#181818" pad={{ horizontal: 'large', vertical: 'small' }} align="center">
        <Box direction="row" gap="small" align="center">
          <p className={styles.footerText}>Made by Rodrigo Augusto for study purposes only</p>
        </Box>

      </Footer>
     
  
    </Grommet>
    
  )
}
