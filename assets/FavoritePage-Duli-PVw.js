import{n as r,u as s,q as a,j as e,r as i}from"./index-B-lr_rBJ.js";import{s as n,T as c,a as l}from"./TeacherCard-CvxuBnh8.js";import"./ButtonBasic-B_a8IccN.js";const d=r.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 32px;
margin: 32px 0 0 0;

`,p=()=>{const t=s(n);return s(a)&&e.jsx(d,{children:t.map(o=>e.jsx(c,{teacher:o,isFavorite:!0},o.id))})},x=r.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`,u=r.p`
font-weight: 500;
font-size: 24px;
`,j=()=>{const t=s(l);return i.useEffect(()=>(document.body.style.backgroundColor="#f0f0f0",()=>{document.body.style.backgroundColor=""}),[]),e.jsx("div",{children:t>0?e.jsx(p,{}):e.jsx(x,{children:e.jsx(u,{children:"There are no favorites yet"})})})};export{j as default};
