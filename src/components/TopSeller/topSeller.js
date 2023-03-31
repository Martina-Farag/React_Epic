
import React, { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import axiosInstance from '../../axiosConfig/instanc';
import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import changeFavA from '../../Store 2/actions/addFav';
// import changeFavR from './../../Store 2/actions/removeFav';
// import MoviesRedThunk from '../../Store 2/actions/MoviesRedThunk';
// import changeMovies from './../../Store 2/reducers/Movies';
import './TopSeller.css'
import { useDispatch, useSelector } from 'react-redux';
import GamesRedThunk from '../../Store 2/actions/GamesRedThunk';
import changeGames from '../../Store 2/reducers/Games';

const TopSeller = () => {

    let MyGames = useSelector((state)=>state.changeGames); 
    MyGames = MyGames.Games;

    const dispatch = useDispatch(); 

    useEffect(() => {
        
        console.log(MyGames);
        
        // use Redux Thunk
        dispatch(GamesRedThunk());

    }, [])

    const show=(idx)=>{
        // var p = document.getElementById(`plus${idx}`);
        // p.className="plus visible font-bold"
    }

    const hide=(idx)=>{
        // var p = document.getElementById(`plus${idx}`);
        // p.className="plus invisible font-bold"
    }

    //background-color: rgb(18, 18, 18) !important;
    return (
        
        <div  className=' border-r-white'>
        {/* <p>{this.props}</p> */}
        
                <div  onMouseOver={ (idx)=>{ show(idx) } }  onMouseOut={ (idx)=>{ hide(idx) } }>
                {MyGames.slice(0, 5).map((game, idx) => (
                    <div className='w-72 cont'>
                        <a href="#" className="flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700  dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-4" src={`${game.background_image}`} alt="Game Image"/>
                        <p id={`plus${idx}`} className='plus visible font-bold'>+</p>   {/*  invisible */}
                        <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="text-sm mb-2  tracking-tight text-gray-900 dark:text-white text-left">{game.name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">Rating: {game.rating} <i class="bi bi-star-fill"></i></p>
                        </div>
                        </a>
                    </div>
                    ))}
                </div>
            
            </div>
    );
}

export default TopSeller;

