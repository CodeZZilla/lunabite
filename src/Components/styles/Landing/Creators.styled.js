import styled from "styled-components";

export const CreatorDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #6F6F6F;
  }
`

export const CreatorCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const CreatorCardStyled = styled.div`
  width: 25vw;
  height: 50vh;
  background: white;
  border-radius: 15px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10vh 5vh 0 0;

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

export const ImgCreator = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 15px 15px 0 0;
  border: none;
  object-fit: cover;
`

export const DivCreatorH1 = styled.div`
  display: flex;
  flex-direction: row;
  align-self: start;
  padding: 10px 10px 0 10px;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #6F6F6F;
    margin: 10px 10px 0 10px;
  }

`

export const DivCreatorH4 = styled.div`
  display: flex;
  flex-direction: row;
  align-self: start;
  padding: 0 10px 10px 10px;

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #6F6F6F;
    margin: 0 10px 10px 10px;
  }
`

export const ButtonCreatorLogo = styled.button`
  background: radial-gradient(circle at 100%, #80B1FF, #81C7EE 10%, #83FFC1 100%, #333 10%);
  border-radius: 100px;
  width: 80px;
  height: 80px;
  margin-right: 1vw;
  /* margin-bottom: -11vh; */
  margin-top: -8vh;
  border: 2px solid white;
`

export const CreatorTextDiv = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: flex;
  margin-top: 10vh;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(360deg, #80B1FF 0%, rgba(255, 164, 212, 0.625) 46.88%,
  rgba(255, 164, 212, 0) 100%);


  h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #6F6F6F;
    margin-bottom: 5vw;
  }

  p {
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

export const CreatorButton = styled.button`
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

export const CreatorPartner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  width: 70vw;
  margin-top: 35vh;
`
export const ImgCreatorCarousel = styled.img`
  width: 100%;
  height: 70%;
  border: none;
  object-fit: contain;
`

export const ContainerCreator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2vw;
`
