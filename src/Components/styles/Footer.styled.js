import styled from "styled-components"

export const FooterBanner = styled.div`
  width: 100vw;
  height: 80vh;
  z-index: 1;
  margin-bottom: 20vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background: #80B1FF;
`

export const FooterDiv = styled.div`
  width: 50vw;
  margin: 10vh 0 10vh 5vw;
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
    margin-bottom: 2vh;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 31px;
    display: flex;
    align-items: start;
    text-align: start;
    color: #FFFFFF;
  }
  
  br{
    width: 80vw;
    height: 1vh;
  }
`

export const InputStyled = styled.input`
  width: 40vw;
  padding: 14px 24px;
  font-size: 15px;
  color: #575756;
  background-color: white;
  border-radius: 15px;
  border: 1px solid #e7e7e7;
  outline: none;

  &:focus {
    -webkit-box-shadow: -1px 0 8px -1px rgba(34, 60, 80, 1);
    -moz-box-shadow: -1px 0 8px -1px rgba(34, 60, 80, 1);
    box-shadow: -1px 0 8px -1px rgba(34, 60, 80, 1);
  }
`

export const ButtonFooter = styled.button`
  width: 120px;
  height: 48px;
  margin-left: 2vw;
  border-radius: 15px;
  background: ${props => props.background};
  border: none;
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