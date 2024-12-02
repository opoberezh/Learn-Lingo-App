import styled from '@emotion/styled';

export const MobileMenuContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const MenuButton = styled.button`
  display: block;
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  z-index: 1100;
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  margin: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const MenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Темне затемнення з прозорістю */
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  transition: background-color 0.3s ease-in-out;
`;
