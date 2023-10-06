
import React, { useState } from 'react';
import './NavBar.css';
import {Menu} from 'antd';

function navbar () {
    return (
        <div className= 'header__container' >
            <img src='./silla_logo2.jpg' className= 'img__logo'/>
            <Menu mode= {'horizontal'} className= 'menu__container'
                items= {[
                    {
                       label: 'Inicio',
                       key: 'Inicio',
                    },
                    {
                       label: "Productos",
                       key: "Productos",
                    },
                    {
                       label: "Nosotros",
                       key: "Nosotros",
                    }
                ]}
            ></Menu>
        </div>
    );
}

export default navbar;



// import React, { useState } from 'react';
// import { AppstoreOutlined, MailOutlined, SettingOutlined,UserOutlined  } from '@ant-design/icons';
// import { Menu } from 'antd';


// const items = [
//   {
//     label: 'Inicio',
//     /*key: 'alipay',*/
//     /* icon: <MailOutlined />, */
//   },
//   {
//     label: 'Productos',
//     /*key: 'alipay',*/
//     /* icon: <AppstoreOutlined />, */
//     /*disabled: true,*/
//   },
//   {
//     label: 'Contacto',
//     /*key: 'alipay',*/
//     /* icon: <SettingOutlined />, 
//     children: [
//       {
//         type: 'group',
//         label: 'Item 1',
//         children: [
//           {
//             label: 'Option 1',
//             key: 'setting:1',
//           },
//           {
//             label: 'Option 2',
//             key: 'setting:2',
//           },
//         ],
//       },
//       {
//         type: 'group',
//         label: 'Item 2',
//         children: [
//           {
//             label: 'Option 3',
//             key: 'setting:3',
//           },
//           {
//             label: 'Option 4',
//             key: 'setting:4',
//           },
//         ],
//       },
//     ],*/
//   },
//   {
//     label: 'Acceder',
//     /*(
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),*/
//        /* key: 'alipay',*/
//     icon: <UserOutlined />, 
//   },
// ];
// const App = () => {
//   const [current, setCurrent] = useState('mail');
//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };
//   return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
// };
// export default App;
