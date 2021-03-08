import Image from 'next/image'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Components
import DropDown from '../DropDown'

//helper
import home from '../../helper/home'
import pages from '../../helper/home'
import portfolio from '../../helper/home'
import blog from '../../helper/home'
import shop from '../../helper/home'
import elements from '../../helper/home'

export default function Header(){
    return(
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
    
        
        <FontAwesomeIcon icon={faSearch} size="2x" flip="horizontal" />
        <FontAwesomeIcon icon={faShoppingBag} size="2x" flip="horizontal" />

      </Header>

    )
}
