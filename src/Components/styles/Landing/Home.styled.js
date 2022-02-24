import styled from "styled-components";

export const Banner = styled.div`
  margin-bottom: 10vh;
  width: 100vw;
  height: 70vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background: linear-gradient(180deg, #FFA4D4 0%, rgba(255, 164, 212, 0.625) 63.02%,
  rgba(255, 164, 212, 0) 100%);
`

export const DivRight = styled.div`
  width: 53vw;
  margin-top: 15vh;
  margin-left: 5vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  
  h1 {
    max-width: max-content;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    text-align: start;
    margin-bottom: 5%;
  }
  h2 {
    margin-top: 0;
    max-width: 38vw;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    display: flex;
    align-items: start;
    text-align: start;
    color: #FFFFFF;
  }
  a{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #6F6F6F;
    text-decoration: none;
    margin-right: 15px;
  }
  i{
    color: #81C7EE;
    font-size: 25px;
  }
`

export const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:5%
`

export const DivLeft = styled(DivRight)`
  width:47vw;
  margin-top: 10vh;
`

export const ImgTop = styled.img`
  position: relative;
  top:0;
  right: 0;
  height: 15vw;
  width: 27vw;
  object-fit: cover;
  z-index: 2;
  object-position: center;
  border-radius: 20px;
  -webkit-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);
  box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);

  &:hover {
    -webkit-box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    -moz-box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    transition-property: box-shadow, -moz-box-shadow, -webkit-box-shadow;
    transition-duration: 1s, 1s;
  }
`

export const ImgSecond = styled.img`
  position: relative;
  top: -10vh;
  right: -10vw;
  z-index: 1;
  width: 27vw;
  height: 15vw;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  -webkit-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);
  box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);

  &:hover {
    -webkit-box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    -moz-box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    transition-property: box-shadow, -moz-box-shadow, -webkit-box-shadow;
    transition-duration: 1s, 1s;
  }
  
`

export const ButtonTwoStyled = styled.button`
  width: 200px;
  height: 48px;
  margin-right: 1.5vw;
  border-radius: 7px;
  background: ${props => props.background};
  border: 2px solid #A7A7FF;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  transition: all 0.3s ease;
  color: ${props => props.color};

  &:hover {
    box-shadow: -1px 6px 10px 0 rgba(120, 60, 20, .2);
  }
  
  &:active{
    color: ${props => props.secondColor};
    background: ${props => props.secondBackground}
  }
`




