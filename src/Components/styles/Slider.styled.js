import styled from "styled-components"

export const DivSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

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
`
export const DivH1 = styled.div`
  display: flex;
  flex-direction: row;
  align-self: end;
  padding: 15px;
`

export const CardStyled = styled.div`
  width: 25vw;
  height: 45vh;
  background: white;
  border-radius: 15px;
  border: none;
  margin-bottom: 10vw;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    align-items: end;
    padding-bottom:10px;
    padding-left: 10px ;
  }

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 31px;
    display: flex;
    text-align: end;
    color: #6F6F6F;
  }

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 31px;
    display: flex;
    text-align: end;
    color: #6F6F6F;
  }

  -webkit-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
`

export const ImgSlider = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 15px 15px 0 0;
  border: none;
  object-fit: cover;

`


