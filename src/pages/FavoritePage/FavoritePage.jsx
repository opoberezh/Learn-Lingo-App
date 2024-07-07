import { useSelector } from "react-redux";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import { selectTotalFavorites } from "../../redux/favorites/selectors";
import { Text, TextWrapper } from "./FavoritePage.styled";
import { useEffect } from "react";

const FavoritePage = () => {
  const totalFavorites = useSelector(selectTotalFavorites);

  useEffect(() => {
    document.body.style.backgroundColor = '#f0f0f0'; 

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return( 
  <div>
   {totalFavorites > 0 ? (<FavoriteList/>) : (<TextWrapper><Text>There are no favorites yet</Text></TextWrapper>)} 
  </div>)
};

export default FavoritePage;
