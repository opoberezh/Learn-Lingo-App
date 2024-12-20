
import { useAuth } from '../../hooks';
import { CloseButton, MenuButton, MenuContent, MobileMenuContainer,  Overlay } from './MobileMenu.styled';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../Authentication/AuthNav';

const MobileMenu = ({ isOpen, toggleMenu, isModalOpen }) => {
  const { isLoggedIn } = useAuth();

  const handleOverlayClick = () => {
    if (!isModalOpen) {
      toggleMenu();
    }
  }

  return (
    <>
      
      {isOpen && !isModalOpen && <Overlay isOpen={isOpen} onClick={handleOverlayClick} />}

     
      <MobileMenuContainer isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>
          
        </CloseButton>
        <MenuContent>
          
          <Navigation toggleMenu={toggleMenu}/>
          
         
          {isLoggedIn ? <UserMenu toggleMenu={toggleMenu}/> : <AuthNav toggleMenu={toggleMenu}/>}
         
         
        </MenuContent>
      </MobileMenuContainer>

     
      <MenuButton  onClick={toggleMenu}>
        {isOpen ? <CloseIcon style={{ fontSize: '2rem' }}/> : <MenuIcon style={{ fontSize: '2rem' }}/>}
      </MenuButton>
    </>
  );
};

export default MobileMenu;
      