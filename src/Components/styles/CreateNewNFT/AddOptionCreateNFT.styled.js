import styled from "styled-components";
import {ContainerCreateNFT} from "./CreateNewNFT.styled";

export const OptionDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
`


export const OptionIcon = styled.div`
  width: 10%;
  display: flex;
  align-items: self-start;
  justify-content: center;
`

export const OptionTextDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  text-align: start;

  h3{
    width: 100%;
    margin: 0;
  }

`
export const OptionDivBtn = styled.div`
  width: 3vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OptionButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #A7A7FF;
  outline: none;
  background-color: white;
  color: #A7A7FF;
  font-size: 35px;
  font-weight: 100;

  &:hover {
    box-shadow: -1px 6px 10px 0 rgba(120, 60, 20, .2);
  }

  &:active{
    background: #bcbcff;
    color:white;
  }
    
`

export const ToggleButton = styled.input`
  position: relative;
  width: 51px;
  height: 31px;
  -webkit-appearance: none;
  background: rgba(120, 120, 128, 0.16);
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: background 300ms linear;

  // circle
  &::before {
    position: absolute;
    content: "";
    width: 27px;
    height: 27px;
    top: 2px;
    left: 2px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: left 300ms;
  }
  // move to right
  &:checked {
    background: #3b94ff;
    &::before {
      left: 22px;
      background-color: #fff;
    }
  }
    
`