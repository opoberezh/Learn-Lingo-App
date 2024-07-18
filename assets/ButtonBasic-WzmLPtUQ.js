import{n as e,V as s,r as a,T as i,j as n,S as c}from"./index-eCxlt9_u.js";const d=e(s)`

  display: inline-block;
  width: 100%;
  height: 60px;
text-transform: none;
  padding: 16px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: ${({theme:o})=>o.primary};
  box-shadow: none;

  font-weight: 700;
  font-size: 18px;
  color: #121417;

  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: ${({theme:o})=>o.secondary};
  }
`,p=({text:o,onClick:t})=>{const{theme:r}=a.useContext(i);return n.jsx(c,{spacing:2,direction:"row",children:n.jsx(d,{theme:r,variant:"contained",onClick:t,children:o})})};export{p as B};
