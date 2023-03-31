import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useEffect } from 'react';
// import axios from 'axios'
// import axiosInstance from './../../axiosConfig/instanc';
import TopSeller from '../../components/TopSeller/topSeller';
import StoreSlider from '../../components/StoreSlider/StoreSlider';
import './Discover.css'
import { GamesOnSale } from '../../components/gamesOnSale/gameOnSale';
// import { GamesOnSale } from './../../components/gamesOnSale/gameOnSale';
import FreeGames from '../../components/freeGames/freeGames';


const Discover = () => {
    
    // const [search, setsearch] = useState("");

    // py-40 px-20
    return (
        <section className=''>
            <section className='p-20'>
                <StoreSlider></StoreSlider>
            </section>
            <section className='w-full h-full place-items-center '>
            <div  className='flex py-40 px-20 Container'>

                {/* section 1 */}

                <div className='mb-7 Section'>
                    <div className="flex mb-7 w-full header">
                        <p className="title text-2xl font-bold text-left text-white">
                            Top Sellers
                        </p>
                        <button  className="titlebtn text-white p-4 rounded-lg text-xs hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            VIEW MORE
                        </button>
                    </div>

                    {/* Games */}
                    <div className="cards">
                        <TopSeller></TopSeller>
                    </div>
                </div>

                {/* section 2 */}

                <div className='mb-7 Section'> 
                    <div className="flex mb-7 w-full header">
                        <p className="title text-2xl font-bold text-left text-white">
                            Most Played
                        </p> 
                        <button className="titlebtn text-white p-4 rounded-lg text-xs hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            VIEW MORE
                        </button> 
                    </div>

                    {/* Games */}
                    <div className="cards">
                        <TopSeller></TopSeller>
                    </div>
                </div>

                {/* section 3 */}

                <div className='mb-7' id='Section3'> 
                    <div className="flex mb-7 w-full header">
                        <p className="title text-2xl font-bold text-left text-white">
                            Top Player Rating
                        </p>  
                        <button className="titlebtn text-white p-4 rounded-lg text-xs hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            VIEW MORE
                        </button>  
                    </div>

                    {/* Games */}
                    
                </div>

                {/* <Outlet  context={[search, setsearch]}/> */}

            </div>
            </section>
            <GamesOnSale></GamesOnSale>
            <div style={{ marginTop: '150px'}}>
            <FreeGames ></FreeGames>
            </div>
            <div className="cards">
                <TopSeller></TopSeller>
            </div>
        </section>
    );
}

export default Discover;

