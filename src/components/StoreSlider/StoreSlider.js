import React, { useEffect, useState } from "react";
import styles from "./StoreSlider.module.css";

const StoreSlider = () => {
  var [counter, setCounter] = useState(0);

  const MyGames = [
    {
      name: "Grand Theft Auto V",
      background_image:
        "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    },
    {
      name: "he Witcher 3: Wild Hunt",
      background_image:
        "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    },
    {
      name: "Portal 2",
      background_image:
        "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    },
    {
      name: "Tomb Raider (2013)",
      background_image:
        "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    },
    {
      name: "Counter-Strike: Global Offensive",
      background_image:
        "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    },
    {
      name: "Portal",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
  ];
  console.log(MyGames);
  // console.log(MyGames[5].background_image);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(counter); //  0 1 2 3 4 5

      if (counter === MyGames.length - 1) return setCounter(0);
      counter++;
      setCounter(counter);
    }, 8000);

    return () => clearInterval(interval);
  }, [MyGames.length, counter]);

  // Change current slide

  const onClick = (e) => {
    let value = parseInt(e.target.closest("div").id);
    if (value !== counter) setCounter(value);
  };

  return (
    <div className={`${styles.sliderWrapper} bg-transparent `}>
      {/* section start 0_0 */}
      <div
        className={`${styles.featured} w-fit bg-transparent`}
        style={{
          backgroundImage: `url(${MyGames[counter].background_image})`,
          width: "60vw",
          height: "72vh",
          paddingTop: "20px",
          marginRight: "40px",
          borderRadius: "30px",
        }}
      >
        <div className={styles.itemText}>
          <h3 className=" text-left text-white text-xl ">
            {MyGames[counter].name}
          </h3>
          <div className={`${styles.buttons} `}>
            <a href="#!" className={`${styles.btn} ${styles.btnDownload}`}>
              DOWNLOAD NOW
            </a>
            <a
              href="#!"
              className={`${styles.btn} ${styles.btnWishlist}`}
              style={{ fontWeight: "700" }}
            >
              +
            </a>
          </div>
        </div>
      </div>
      {/* section end */}

      {/* <div > */}
      <ul
        className={styles.gamelist}
        style={{ justifyContent: "center" }}
      >
        {MyGames.map((game, index) => (
          <li
            key={game.id}
            onClick={onClick}
            style={{
              display: "flex",
              height: "70px",
              marginBottom: "10px",
              justifyContent: "center",
            }}
          >
            {/* className='w-48' */}
            <div
              id={index}
              className={`${styles.game} ${
                index === counter ? styles.current : ""
              } rounded-lg pb-4 text-white text-xs flex flex-col items-center border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700`}
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src={game.background_image}
                alt="game"
                style={{
                  width: "50px",
                  height: "55px",
                  marginRight: "10px",
                  marginLeft: "5px",
                }}
                className="rounded-lg"
              />
              <p className="text-sm w-full h-full bg-transparent ">
                {game.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {/* </div> */}

    </div>
  );
};

export default StoreSlider;
