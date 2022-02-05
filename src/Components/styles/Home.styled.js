import styled from "styled-components";

export const Banner = styled.div`
  width: 100vw;
  height: 80vh;
  z-index: 1;
  margin-bottom: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: linear-gradient(180deg, #FFA4D4 0%, rgba(255, 164, 212, 0.625) 63.02%,
  rgba(255, 164, 212, 0) 100%);
`

export const DivRight = styled.div`
  width: 50vw;
  margin: 10% 0 0 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    text-align: start;
    margin-bottom: 5%;
  }
  h2 {
    margin-top: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 31px;
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
  margin-top:5%
`

export const DivLeft = styled(DivRight)` 
 
`

export const ImgTop = styled.img`

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
 /*display: none;
  margin-top: 7%;
  position: absolute;
  background: #FFFFFF;
  border-radius: 10px;
  */
`

export const ImgSecond = styled.img`

  height: 15vw;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  /*
  border-radius: 10px;
  display: none;
  */
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
  margin-right: 5vw;
  border-radius: 10px;
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
`




