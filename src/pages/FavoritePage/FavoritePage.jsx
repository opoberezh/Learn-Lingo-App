import { useSelector } from "react-redux";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import { selectTotalFavorites } from "../../redux/favorites/selectors";

const FavoritePage = () => {
  const totalFavorites = useSelector(selectTotalFavorites);
  return( 
  <div>
   {totalFavorites > 0 ? (<FavoriteList/>) : (<div><p>There are no teachers yet</p></div>)} 
  </div>)
};

export default FavoritePage;
