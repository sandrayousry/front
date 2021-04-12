import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        classname:'nav-text'
    },
   
    {
        title: 'Users',
        path:'/ListUsers',
        icon:<AiIcons.AiOutlineUsergroupAdd />,
        classname:'nav-text'
    },
    {
        title: 'Movies',
        path:'/ListMovies',
        icon:<BiIcons.BiMovie />,
        classname:'nav-text'
    },
    {
        title: 'Sireses',
        path:'/ListSerieses',
        icon:<RiIcons.RiPlayList2Fill />,
        classname:'nav-text'
    },
    {
        title: 'Seasons',
        path:'/ListSeasons',
        icon:<FaIcons.FaListUl />,
        classname:'nav-text'
    },
    {
        title: 'Episodes',
        path:'/ListEpisodes',
        icon:<RiIcons.RiMovieFill />,
        classname:'nav-text'
    },
    {
        title: 'Categories',
        path:'/ListCategories',
        icon:<RiIcons.RiGalleryUploadLine />,
        classname:'nav-text'
    },
 
]