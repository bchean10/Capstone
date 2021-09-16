import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
{
    title:'Home',
    path:'/', 
    icons:<AiIcons.AiFillHome/>,
    cName:'nav-text'
},
{
    title:'Heroes',
    path:'/heroes', 
    icons:<GiIcons.GiNinjaHeroicStance/>,
    cName:'nav-text'
},
{
    title:'Players',
    path:'/players', 
    icons:<GiIcons.GiPlayerBase/>,
    cName:'nav-text'
},
{
    title:'Team',
    path:'/teams', 
    icons:<IoIcons.IoMdPeople/>,
    cName:'nav-text'
},
{
    title:'Logout',
    path:'/logout', 
    icons:<IoIcons.IoMdLogOut/>,
    cName:'nav-text'
}
]