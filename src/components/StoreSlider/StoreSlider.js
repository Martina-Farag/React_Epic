import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import styles from './StoreSlider.module.css'
// import PropTypes from 'prop-types'
import changeGames from '../../Store 2/reducers/Games';
import GamesRedThunk from '../../Store 2/actions/GamesRedThunk';

const StoreSlider = () => {

    // const MyGames = newsData.slice(0, 6);
    const [counter, setCounter] = useState(0);

    let MyGames = useSelector((state)=>state.changeGames); 
    console.log(MyGames);
    MyGames = MyGames.Games;

    MyGames = MyGames.slice(0, 6);
    console.log(MyGames);

    const dispatch = useDispatch();   

    useEffect(() => {
        // console.log(MyGames);

        dispatch(GamesRedThunk());
    }, [])


    useEffect(() => {

        const interval = setInterval(() => {
            if (counter === MyGames.length - 1) return setCounter(0);
            setCounter(parseInt(counter+1));
        }, 8000);

        return () => clearInterval(interval);
    }, [MyGames.length, counter]);


    // Change current slide
    const onClick = (e) => {
        let value = parseInt(e.target.closest('div').id);
        if (value !== counter) setCounter(value);
    }


    return (
        <div className={styles.sliderWrapper}>
            {/* <div className={styles.featured} style={{ backgroundImage: `url(${MyGames[counter].background_image})`, width :'1100px', height:'500px', padding:'20px', marginRight:'40px'}}>   
                <div className={styles.itemText}>
                    <h3 className='text-left text-white text-xl'>{MyGames[counter].name}</h3>
                    <div className={styles.buttons}>
                        <a href="#!" className={`${styles.btn} ${styles.btnDownload}`}>DOWNLOAD NOW</a>
                        <a href="#!" className={`${styles.btn} ${styles.btnWishlist}`}>+</a>
                    </div>
                </div>
            </div> */}

            <ul className={styles.MyGames} style={{ display:'felx'}}>
                {MyGames.map((game, index) => (

                    <li key={game.id} onClick={onClick} style={{ display: 'flex', width:'200px', height:'80px', marginBottom:'10px' }} className='rounded-lg pb-4 text-white text-xs flex flex-col items-center border border-gray-200  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700'>
                        <div id={index} className={`${styles.game} ${index === counter ? styles.current : ''}`}>
                            <img src={game.background_image } alt="game" style={{ width: '50px',height:'50px',marginRight:'20px' }} className='rounded-lg'/>   
                            <p className='text-sm'>{game.name}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {/* { game.name.split(' ').slice(0, 4).join(' ') }... */}
        </div>
    )
}


export default StoreSlider
