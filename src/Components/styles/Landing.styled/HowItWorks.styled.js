import styled from "styled-components"

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainBanner = styled.div`
  display: flex;
  flex-direction: column;
  
  h1{
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #6F6F6F;
    margin-bottom: 2vw;
  }
  
  p{
    width: 50vw;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #6F6F6F;
    margin-bottom: 2vw;
  }
  
`

export const BannerRevert = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background: linear-gradient(360deg, #FFA4D4 0%, rgba(255, 164, 212, 0.625) 63.02%,
  rgba(255, 164, 212, 0) 100%);
`

export const ButtonBannerRevert = styled.button`
  width: 200px;
  height: 48px;
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

export const BigCardStyled = styled.div`
  width: 25vw;
  height: 60vh;
  margin-top: 1vw;
  background: white;
  border-radius: 15px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1{
    width: 100%;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
    margin-top: 5vh;
    display: flex;
    align-items: center;
    text-align: center;

    color: #6F6F6F;
  }
  
  p{
    width: 270px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-align: center;

    color: #6F6F6F;
  }

  -webkit-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);

  &:hover {
    -webkit-box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    -moz-box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    transition-property: box-shadow, -moz-box-shadow, -webkit-box-shadow;
    transition-duration: 1s, 1s;
  }
`
