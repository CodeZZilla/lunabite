import styled from "styled-components";

export const ToggleDiv = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 5vh;
`

export const ToggleIcon = styled.div`
  width: 10%;
  display: flex;
  align-items: start;
  justify-content: start;
  padding: 1vh;
`

export const ToggleTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: start;
  
  h3{
    width: 100%;
    margin: 0;
  }

`
export const ToggleDivBtn = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: end;
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