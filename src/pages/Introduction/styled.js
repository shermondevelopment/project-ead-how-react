import styled from 'styled-components';

export const Header = styled.header`

  display:flex; width:100%; height:80px; background:var(--page-theme); justify-content:center;

`;

export const HeaderMenuMobile = styled.div`

display:none; align-items:center; flex:1; justify-content:center; padding-left:20px; z-index:1;

.header-menu-burguer
{
  width:100%; max-width:50px; height:50px; position:relative; cursor:pointer;
}
.header-menu-burguer .menu-line
{
  display: block; width: 30px; height: 2px; background: #fff; position: relative; top: 22px; left: 8px; transition: .3s ease-in-out;
}
.header-menu-burguer .menu-line:after, .menu-line:before
{
  content: "";  background: #fff; display: block; width: 100%; height: 100%; position: absolute; transition: .3s ease-in-out;
}
.header-menu-burguer .menu-line:before
{
  top: -10px;
}
.header-menu-burguer .menu-line:after
{
  bottom: -10px;
}
.header-menu-burguer.open .menu-line
{
  transform: rotate(45deg);
}
.header-menu-burguer.open .menu-line:before
{
  transform: rotate(90deg); top: 0px;
}
.header-menu-burguer.open .menu-line:after
{
  transform: rotate(90deg); bottom: 0px;
}

@media (max-width:692px) {
  & { display:flex; }
}

`;

export const Container = styled.div`

 width:100%; max-width:1000px; height:inherit; display:flex;

`;

export const HeaderLogo = styled.div`

  flex:1; display:flex; align-items:center;

  .header-logo { width:100%; height:40px; border-right:1px solid rgb(175, 158, 230); }

`;

export const HeaderMenu = styled.div`

  flex:3; display:flex; align-items:center; justify-content:space-between; z-index:1;

  .header-target { margin-left:30px; }
  .header-target ul { display:flex; padding:0px; }
  .header-target ul li {margin-right:20px;}
  .header-target ul li a
  {
    font-family: 'Source Sans Pro', sans-serif; text-transform:uppercase; color:rgb(175, 158, 230); transition:color 0.3s linear;
    &:hover { color:#fff; }
  }
  .header-signin
  {
    display:flex;
  }
  .header-signin a
  {
    margin-left:10px;
  }

  @keyframes animate {
    from  { opactiy:0; margin-left:-30px; }
    to { opacity:1; margin-left:0px; }
  }

  &.stateMobile {
    position:absolute; display:flex;   align-items: flex-start; width:100%; height:calc(100vh - 50px); background:var(--page-theme); right:0px; top:80px;
    border-top:1px solid rgb(175, 158, 230);
  }
  &.stateMobile .header-target ul {
    flex-direction:column; justify-content:flex-start; margin-top:90px;
  }
  &.stateMobile .header-target ul li
  {
    margin-bottom:30px;
  }
  &.stateMobile .header-target ul li a
  {
    width:100%;   font-size:22px; animation-name:animate; animation-duration:.3s;
  }

  @media (max-width:1005px) {
    .header-signin { display:none; }
    & { justify-content:center; flex:2; }
  }
  @media (max-width:692px) {
    & { display:none; }
  }

`;

export const Main = styled.main`

 @keyframes pisca{ 0%, 100% { opacity:1;} 50% { opacity:0; }  }

 width:100%; display:flex; justify-content:center;  z-index:-1;  flex-direction:column; align-items:center;

 .main-home
 {
   width:100%; max-width:1000px; height:inherit; display:flex; height:calc(100vh - 80px);

  .main-stylesheet, .main-banner
  {
    padding-top:50px;
  }
   .main-stylesheet
   {
     flex:1; box-sizing:border-box; padding:50px 0px; padding-left:15px;
     .container-stylesheet
     {
       position:relative; height:444px; border-radius: 5px;
     }
     .main-typewriter
     {
       width:100%; height:300px;  position:relative;
       color:#fff; display:flex;  flex-direction:column; justify-content:flex-start; padding-top:40px;
       a {
         width: min-content; position:absolute; bottom:50px;
       }
       h1 {
          font-family: 'Source Sans Pro', sans-serif; color:var(--page-theme);
          &:after { content:"|"; margin-left:5px; opacity:1; animation:pisca .7s infinite;}
       }
       .buttonRegister
       {
        background:tomato;
       }

     }
   }
   .main-banner
   {
     flex:1;
     .banner-mobile
     {
      height:400px; display:none; justify-content:center; height:auto;
       .mobile-list
       {
          margin:0px; padding:0px; height:max-content; width:100%; max-width:300px; display:flex; flex-direction:column;
          justify-content:space-between; position:relative;
          li
          {
            color:var(--page-theme); font-weight:bold; margin-bottom:20px; padding-left:10px; text-indent:20px;
            &:before {
              content:""; display:inline-block; width:15px; height:15px; background:var(--page-theme); border-radius:50%;
              position:absolute; left:0px;  border:2px solid #fff; box-sizing:border-box;
              box-shadow: 0px 0px 0px 3px var(--page-theme);
             }
             &:after {
               content:""; display:inline-block; width:4px; height:37px; background:blue; position:absolute;
               left:5px; border-radius:5px;  background:var(--page-theme);
             }

            &:last-child { margin-bottom:0px; }
          }
       }
       .mobile-list :last-child:after { content:none; }
     }
   }
 }

 .main-funciona
 {
   width:100%; height:max-content; background:var(--page-theme);
   .borda-ondulada
   {
     width:100%; height:30px; fill:#fff;
   }
   .funciona {
     width:100%; max-width:1000px; margin:auto; display:flex; margin-top:30px;
   }
   .container-funciona
   {
     flex:1;
     .header-funciona {
       h1 { color:#fff; font-family: 'Roboto', sans-serif; padding-top:20px;}
     }
     .body-funciona
     {
       ul
       {
          padding:0px; margin-top:40px; height:max-content; position:relative;
          li {
            color:#fff; font-family:'Roboto', sans-serif; margin-bottom:30px; z-index:1; display:flex; align-items:center; position:relative;
            p { margin:0px; flex:1;}
            &:before
            {
              counter-increment:count-list;  content:counter(count-list); display:inline-block; width:40px; height:40px; border-radius:50%; background:rgb(175,158,230);
              color:var(--page-theme); text-align:center; line-height:40px; position:absolute left:0px; margin-right:10px; color:#fff;
            }
            &:after
            {
              content:""; display:block; width:5px; height:44px; background:rgb(175,158,230); position:absolute;
              left:17px; top:34px;
            }
            &:nth-child(7):after
            {
              content:none;
            }
          }
       }
     }
   }
   .plataform { flex:1; }
 }

 .main-whatsapp
 {
   width:100%; height:max-content;
   .borda-ondulada
   {
     width:100%; height:30px; fill:var(--page-theme);
   }
   .container-whatsapp
   {
     width:100%; max-width:1000px; margin:auto;  margin-top:50px;
     .container-title h1 {
       font-family:'Roboto', sans-serif; color:var(--page-theme); padding-left:15px;
     }
     .container-body
     {
       margin-top:30px;
       p {
         font-family:'Roboto', sans-serif; color:rgb(175,158,230); font-weight:bold; margin-top:0px; margin-bottom:20px; line-height:25px; padding:15px;
         span { color:tomato; font-weight:bold;}
       }
     }
   }
 }

@media (max-width:790px) {
  .main-home .main-stylesheet
  {
    padding:15px;
    .container-stylesheet
    {
      height:auto;
    }
    .main-typewriter
    {
      a { bottom:0px; div {padding:7px; box-sizing:content-box;} }
    }
  }
  .main-home
  {
    flex-direction:column;
  }
  .main-home .main-banner
  {
    .banner-desktop {display:none;}
  }
  .main-funciona .container-funciona
  {
    padding:0 15px;
  }
  .main-funciona .funciona .plataform
  {
    display:none;
  }
  .main-whatsapp {
    width:100%;
    .borda-ondulada {
      height:15px;
    }
  }
}
@media (max-width:600px)
{
  .main-home .main-banner
  {
    .banner-mobile { display:flex; }
  }
   .main-typewriter
   {
     align-items:center;
     h1 { text-align:center; }
   }
   .main-home
   {
     flex-direction:column; height:max-content;
     .main-banner
     {
       padding:20px;
     }
   }

   .main-funciona {
     .borda-ondulada { height:20px; }
   }
 }

`;

export const Footer = styled.footer`

 width:100%; height:max-content; background:var(--page-theme);
 .borda-ondulada { width:100%; height:30px;   fill:#fff;}
 .footer-content
 {
   width:100%; max-width:1000px; display:flex; margin:auto;  height:inherit; margin-top:30px;
  .content-left, .content-right
  {
    box-sizing:border-box;
  }
   .content-left {
     flex:1; color:#fff; font-family:'Roboto', sans-serif; padding:10px;
     p { width:100%; max-width:300px; padding:15px 0; border-bottom:1px solid #fff; }
     .social-footer {
       display:flex; width:100%; max-width:75px; displat:flex; justify-content:space-around;
       img {
         width:100%; max-width:25px; height:25px; margin-right:5px;
       }
     }
   }
   .content-right {
     flex:1; color:#fff;
     p { margin:0px; padding:0px; }
     h3 { font-family:'Roboto', sans-serif; }
     input {
       width:100%; max-width:350px; padding:10px 5px; border:1px solid #fff; box-sizing:border-box;
       outline-color:rgb(175,158,230); caret-color:var(--page-theme);
       font-family:'Roboto', sans-serif;
     }
   }
 }

 @media (max-width:740px) {
   .borda-ondulada { height:15px; }
   .footer-content
   {
     flex-direction:column; justify-content:center;
     .content-left {
       text-align:center; margin:auto;
       .social-footer {
         margin:auto;
       }


     }
     .content-right
     {
       text-align:center; padding-top:20px;
       form {
         div {
           margin:auto;
         }
       }
     }

   }
 }

`;
