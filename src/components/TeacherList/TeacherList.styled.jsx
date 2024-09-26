import styled from "@emotion/styled";

export const CardsWrapper = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 32px;
margin: 32px 0 0 0;

`;

export const PaginateButtonWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
margin: 24px 0 0 0;
width: 100%;
max-width: 385px;

@media(min-width: 1312px){
flex-direction: row;
width: 600px;
margin: 64px auto;
justify-content:${(props) =>  (props.pageNumber > 0 ? 'space-between' : 'center')};
}
`;

export const ButtonLess = styled.div`
@media (min-width: 1312px){
183px;
}
`;

export const ButtonMore = styled.div`
@media (min-width: 1312px){
183px;
}
`;