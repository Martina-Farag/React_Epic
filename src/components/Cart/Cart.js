import { useEffect } from "react";
import GameCard from "./GameCard";
import classes from "./Cart.module.css";
import CartGamesSummary from "./CartGamesSummary";
import { useDispatch, useSelector } from "react-redux";
// import { gamesActions } from "../../Store/Store";
import { CartDashFill } from "react-bootstrap-icons";
import GamesRedThunk from "../../Store 2/actions/GamesRedThunk";
import changeGames from './../../Store 2/reducers/Games';

const Cart = () => {
  // const dispatch = useDispatch();
  // const games = useSelector((state) => state.games.games);

  const games = useSelector((state) => state.changeGames);
  games = games.Games;

    const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(gamesActions.totalPrice());
    dispatch(GamesRedThunk());
  }, [dispatch]);

  const gamesList = games.map((game) => {
    const removeGameHandler = () => {
      // dispatch(gamesActions.removeGame(game.id));
    };
    return (
      <GameCard
        removeGameHandler={removeGameHandler}
        key={game.id}
        // platform={game.platform}
        platform='windows'
        gameName={game.name}
        price={game.percent}
        imgURL={game.background_image}
      ></GameCard>
    );
  });
  return (
    <div className="container">
      <h1 className={classes.sectionName}>My Cart</h1>
      <div className={classes.cart}>
        <div className={classes.games}>
          {games.length === 0 ? (
            <h1 className={classes.cartEmpty}>
              Your cart is empty
              <CartDashFill />
            </h1>
          ) : (
            gamesList
          )}
        </div>
        <div className={classes.gamesSummary}>
          <CartGamesSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
