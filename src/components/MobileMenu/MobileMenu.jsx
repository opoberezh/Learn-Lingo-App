
import { useAuth } from '../../hooks';
import { CloseButton, MenuButton, MenuContent, MobileMenuContainer,  Overlay } from './MobileMenu.styled';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../Authentication/AuthNav';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      
      {isOpen && <Overlay onClick={toggleMenu} />}

     
      <MobileMenuContainer isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>
          
        </CloseButton>
        <MenuContent>
          
          <Navigation toggleMenu={toggleMenu}/>
          
         
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
         
         
        </MenuContent>
      </MobileMenuContainer>

     
      <MenuButton  onClick={toggleMenu}>
        {isOpen ? <CloseIcon style={{ fontSize: '2rem' }}/> : <MenuIcon style={{ fontSize: '2rem' }}/>}
      </MenuButton>
    </>
  );
};

export default MobileMenu;
