import { useSelector } from "react-redux";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import { selectTotalFavorites } from "../../redux/favorites/selectors";
import { Text, TextWrapper } from "./FavoritePage.styled";

const FavoritePage = () => {
  const totalFavorites = useSelector(selectTotalFavorites);
  return( 
  <div>
   {totalFavorites > 0 ? (<FavoriteList/>) : (<TextWrapper><Text>There are no favorites yet</Text></TextWrapper>)} 
  </div>)
};

export default FavoritePage;
