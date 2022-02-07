import styled from "styled-components"

export const MainCreateNFT = styled.div`
  width: 100vw;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ContainerCreateNFT = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  padding: 0 10vw;
  margin: 5vh 0 0 0;
  
  h1{
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #494949;
    margin: 0 0 10vh 0;
  }
  
  h2{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #494949;
    margin: 0 0 1vh 0;
  }
  
  p{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    max-width: 60vw;
    color: #494949;
    margin: 0 0 1vh 0;
  }
`

export const OptionsCreateNFT = styled.div`


`

export const TextInput = styled.input`
  width: 40vw;
  padding: 12px 24px;
  font-size: 15px;
  color: #575756;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  outline: none;

  &:focus {
    -webkit-box-shadow: 0 0 9px 0 rgba(34, 60, 80, 0.07);
    -moz-box-shadow: 0 0 9px 0 rgba(34, 60, 80, 0.07);
    box-shadow: 0 0 9px 0 rgba(34, 60, 80, 0.07);
  }

`

export const DecsInput = styled.textarea`
  width: 40vw;
  height: 30vh;
  padding: 12px 24px;
  font-size: 15px;
  color: #575756;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  outline: none;
  font-family: inherit;

  &:focus {
    -webkit-box-shadow: 0 0 9px 0 rgba(34, 60, 80, 0.07);
    -moz-box-shadow: 0 0 9px 0 rgba(34, 60, 80, 0.07);
    box-shadow: 0 0 9px 0 rgba(34, 60, 80, 0.07);
  }
`

export const SelectInput = styled.select`
  width: 40vw;
  padding: 12px 24px;
  font-size: 15px;
  color: #575756;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  outline: none;
  transition: all 375ms ease-in-out;  
  margin: 0 0 10vh 0;
  
  
  option{
    font-size: 20px;
    color: #575756;
    border: 2px solid #e7e7e7;
    transition: all .5s ease;
  }

  &:focus {
    -webkit-box-shadow: 0 0 9px 0 rgba(34, 60, 80, 0.07);
    -moz-box-shadow: 0 0 9px 0 rgba(34, 60, 80, 0.07);
    box-shadow: 0 0 9px 0 rgba(34, 60, 80, 0.07);
  }

`
