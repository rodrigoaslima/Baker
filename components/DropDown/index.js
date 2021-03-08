import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export default function DropDown ({items, title}){
    
    const menu = (
        <Menu>
            {items.map(item => (
                <Menu.Item icon={< DownOutlined/>}> 
                    <a key={item.name} target="_blank" rel="noopener noreferrer" href={item.link}>
                        {item.name}
                    </a>
                </Menu.Item>
            ))}
        </Menu>
    )
    
    return(
        <Dropdown overlay={menu}>
            <a onClick={e => e.preventDefault()}>
                {title}
            </a>
        </Dropdown>
    )
    
}