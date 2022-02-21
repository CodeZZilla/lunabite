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
  padding: 0 27.5vw;
  margin: 2.5vh 0 0 0;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 43px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #000000;
    margin: 0 0 2.5vh 0;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #000000;
    margin: 0 0 1vh 0;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    display: flex;
    align-items: center;
    max-width: 60vw;
    color: #494949;
    margin: 0 0 1vh 0;
  }

  hr{
    width: 100%;
  }
`

export const ContainerCreateNFTTop = styled(ContainerCreateNFT)`
  margin: 15vh 0 0 0;
`

export const FileNFT = styled.div`
  max-width: 20vw; 
  height: 30vh;
  margin: 20px 0 0 0;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  color: lightgrey;
  border: 2px dashed #555555;
  border-radius: 10px;
`

export const TextInput = styled.input`
  width: 100%;
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
  width: 100%;
  height: 20vh;
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
  width: 100%;
  padding: 12px 24px;
  font-size: 15px;
  color: #575756;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  outline: none;
  transition: all 375ms ease-in-out;
  margin: 0 0 5vh 0;


  option {
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

export const AStyled = styled.a`
  width: 200px;
  height: 48px;
  margin-right: 3vw;
  border-radius: 10px;
  background: ${props => props.background};
  border: 2px solid #A7A7FF;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 22px;
  transition: all 0.3s ease;
  color: ${props => props.color};
  text-decoration: none;

  &:hover {
    box-shadow: -1px 6px 10px 0 rgba(120, 60, 20, .2);
  }
  
  &:active{
    background: ${props => props.secondBackground}
  }
`
