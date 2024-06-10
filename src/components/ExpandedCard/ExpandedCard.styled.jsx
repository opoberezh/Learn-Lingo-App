import styled from "@emotion/styled";

export const ExpandedCardContainer = styled.div`

margin-top: 16px;
`;

export const ReviewList = styled.ul`
display: inline-flex;
margin-top: 32px;
min-width: 400px;
gap: 32px;
flex-direction: column;
`;

export const Avatar = styled.img`
width: 44px;
height: 44px;
border-radius: 50px;
object-fit: cover;
aspect-ratio: 1 / 1;
`;

export const IconStar = styled.svg`
width: 16px;
height: 16px;
fill: #FFC531;
stroke: #FFC531;
margin-right: 8px;
vertical-align: text-top;
`;

export const ReviewWrapper = styled.div`
display: flex;
gap: 12px;
`;

export const Rating = styled.p`
margin-top: 4px;
`;

export const ReviewComment = styled.p`
margin-top: 16px;
`;