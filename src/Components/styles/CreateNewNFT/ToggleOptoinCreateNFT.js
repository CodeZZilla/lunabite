import styled from "styled-components";

export const ToggleDiv = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: row;
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
    margin: 0 0 ;
  }

`
export const ToggleDivBtn = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ToggleButton = styled.button`
  width: 100%;
  height: 75%;
  border-radius: 5px;
  border: 2px solid #A7A7FF;
  outline: none;
  background-color: white;
  color: #A7A7FF;
  font-size: 35px;
  font-weight: 200;

  &:hover {
    box-shadow: -1px 6px 10px 0 rgba(120, 60, 20, .2);
  }

  &:active{
    background: #bcbcff;
    color:white;
  }
    
`