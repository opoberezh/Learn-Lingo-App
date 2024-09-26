import{n as e,r as d,T as s,j as i,s as a,L as h}from"./index-9AYsTD7P.js";import{B as c}from"./ButtonBasic-1U-qncWR.js";const l=e.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 20px auto;
  width: 90%;

  @media (min-width: 375px) {
    max-width: 375px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
    flex-direction: row;
    gap: 20px;
    margin: 20px 0;
  }
  @media (min-width: 1320px) {
    width: 1312px;

    margin: 20px auto;
  }
`,m=e.div`
  width: 100%;
  max-width: 225px;
  margin-top: 40px;

  @media (min-width: 768px) {
    max-width: 267px;
    margin-top: 64px;
  }
`,g=e.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,w=e.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background-color: #f8f8f8;
  padding: 20px 16px;
  align-items: center;
  height: 399px;
  @media (min-width: 768px) {
    padding: 40px 30px;

    max-width: 347px;
    flex-grow: 1;
  }
`,u=e.h1`
  font-size: 24px;
  font-weight: 500;

  @media (min-width: 1312px) {
    font-size: 48px;
  }
`,f=e.div`
  width: 100%;
  max-width: 335px;
  margin-top: 20px;

  @media (min-width: 1312px) {
    max-width: 471px;
    margin-top: 32px;
  }
`,j=e.p`

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1312px) {
    font-size: 16px;
  }
`,b=e.span`
  font-weight: 400;
  background: ${({theme:t})=>t.primary};
  font-style: italic;
  display: inline-block;
  padding: 0 5px;
  border-radius: 12px;
`,y=e.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 399px;
  background-color: ${({theme:t})=>t.secondary};
  border-radius: 30px;

  @media (min-width: 768px) {
    max-width: 347px;
    height: 391px;
    // height: 530px;
  }
`,v=e.div`
  position: absolute;
  top: 15px;
  right: 10px;
`,z=e.img`
  position: absolute;
top: 150px;
  width: 180px;
  height: 180px;
  @media(min-width: 375px){
  top: 80px;
  width: 228px;
  height: 228px;
  }
  

  @media (min-width: 1312px) {
    width: 339px;
    height: 339px;
  }
`,k=e.img`
  position: absolute;
  z-index: 1;
top: 300px;
  width: 220px;
  @media(min-width: 375px){
  top: 281px;
  width: 260px;
  }
  

  @media (min-width: 1312px) {
    width: 391px;
    top: 354px;
  }
`,T=e.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 720px;
  // padding: 40px 20px;
  
 

  @media (min-width: 1312px) {
    max-width: 1312px;
    height: 116px;
    margin-top: 24px;
    padding: 40px 122px;
  }
`,S=e.img`
  display: none;

 

  @media (min-width: 768px) {
  display: block;
    max-width: 720px;
     height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  }
`,E=e.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  
  
`,n=e.div`
  display: flex;
  gap: 8px;
      align-items: center;
    justify-content: space-around;
    border: 1.5px double;
  border-color: ${({theme:t})=>t.primary};
  border-radius: 30px;
`,I=e.p`
width: 105px;

  font-size: 20px;
  font-weight: 500;
@media(min-width: 768px){
width: 87px;
  font-size: 22px;
  
}
  
`,x=e.p`
color: #121417b2;
font-size: 10px;

@media(min-width: 768px){
width: 96px;
 
  
}
  
`;e.div``;const B=e.p`

font-size: 20px;
  font-weight: 500;
@media(min-width: 768px){
width: 100px;
  font-size: 22px;

}
  
`,o=e.p`
  width: 60px;
  font-size: 20px;
  font-weight: 500;
`,W=e.div`
  width: 74px;
  font-size: 10px;
  font-weight: 400;
  color: #121417b2;
`,L=e.p`
 font-size: 10px;
  color: #121417b2;
@media(min-width: 768px){
width: 54px;
  font-size: 12px;
 
}
  
`,C="/Learn-Lingo-App/assets/emoji-C8Jv9325.png",D=e.button`


 width: 100px;
 hight: 100px;
  padding: 16px;
  border: none;
  background-color: transparent;
  
  

  
`,$=e.svg`
  width: 32px;
  height: 32px;
  fill: ${({theme:t})=>t.primary};
  
 
`,H=()=>{const{theme:t,toggleTheme:p}=d.useContext(s);return i.jsx(D,{theme:t,onClick:p,children:i.jsx($,{theme:t,children:i.jsx("use",{xlinkHref:`${a}#icon-paint-format`})})})},A=()=>{const{theme:t}=d.useContext(s),p=(t==null?void 0:t.macBookImg)||"../../../assets/Mac.png",r=(t==null?void 0:t.rectangleImg)||"../../../assets/Rectangle 1.png";return i.jsxs(l,{children:[i.jsxs(g,{children:[i.jsxs(w,{children:[i.jsxs(u,{children:["Unlock your potential with the best"," ",i.jsx(b,{theme:t,children:"language "})," ","tutors"]}),i.jsx(f,{children:i.jsx(j,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."})}),i.jsx(h,{to:"/teachers",children:i.jsx(m,{children:i.jsx(c,{type:"submit",text:"Get started"})})})]}),i.jsxs(y,{theme:t,children:[i.jsx(v,{children:i.jsx(H,{})}),i.jsx(z,{src:C,alt:"Emoji of a girl with curly hair"}),i.jsx(k,{theme:t,src:p,alt:"MacBook"})]})]}),i.jsxs(T,{children:[i.jsx(S,{theme:t,src:r,alt:"Dashed frame"}),i.jsxs(E,{children:[i.jsx("li",{children:i.jsxs(n,{theme:t,children:[i.jsx(I,{children:"32,000 +"}),i.jsx(x,{children:"Experienced tutors"})]})}),i.jsx("li",{children:i.jsxs(n,{theme:t,children:[i.jsx(B,{children:"300,000 +"}),i.jsx(x,{children:"5-star tutor reviews"})]})}),i.jsx("li",{children:i.jsxs(n,{theme:t,children:[i.jsx(o,{children:"120 +"}),i.jsx(W,{children:"Subjects taught"})]})}),i.jsx("li",{children:i.jsxs(n,{theme:t,children:[i.jsx(o,{children:"200 +"}),i.jsx(L,{children:"Tutor nationalities"})]})})]})]})]})};export{A as default};
