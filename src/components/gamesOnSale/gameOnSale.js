import Card from 'react-bootstrap/Card';
import React, { useState, useEffect, useRef } from 'react'
import axiosInstance from '../../axiosConfig/instanc';
import './gamesOnSale.css'
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import changeGames from './../../Store 2/reducers/Games';
import GamesRedThunk from './../../Store 2/actions/GamesRedThunk';

export function GamesOnSale() {

    let MyGames = useSelector((state)=>state.changeGames); 
    MyGames = MyGames.Games;

    const dispatch = useDispatch();

    // const [games, setGames] = useState([]);
    useEffect(() => {
        // axiosInstance.get().then((response) => {
        //     setGames(response.data.results)
        // }).catch((error) => {
        //     console.log(error);
        // })

        dispatch(GamesRedThunk());
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        prevArrow: <button className="slick-prev">Previous</button>,
        nextArrow: <button className="slick-next">Next</button>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="container">
            <h2 className='text-light'> Games On Sale </h2>
            <Slider {...settings}>
                {MyGames.map((game, index) => {
                    return (
                    <div className='card border-0'>
                        <div className='p-3'>
                            
                            <img src={game.background_image} style={{width:'90%',height:'250px'}} />
                           <p className='base-game'>BASE GAME</p> 
                        <p className='name'>{game.name}</p>
                            <p className="price">$19.99</p>
                            <p>Some text about the jeans..</p>
                        </div>

                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}



