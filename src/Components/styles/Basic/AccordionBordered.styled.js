import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #CCCCCC;
  border-radius: 10px;
  margin-bottom: 5vh;
  width: 100%;

  & > .accordion {
    
    background-color: white;
    color: #444;
    cursor: pointer;
    padding: 18px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: background-color 0.5s ease-in;

    & > .accordion__title {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      display: flex;
      align-items: center;

      color: #494949;
    }

    & > .accordion__icon {
      margin-left: auto;
      transition: transform 0.6s ease;
    }

    & > .rotate {
      transform: rotate(90deg);
    }
  }


  & > .accordion__content {
    background-color: white;
    overflow: auto;
    transition: max-height 0.6s ease;
    margin-bottom: 1vh;
  }

  & > .accordion__text {
    font-weight: 400;
    font-size: 14px;
    padding: 18px;
  }


`

export const AccordionIcon = styled.svg`
  width: 10%;
  display: flex;
  align-items: start;
  justify-content: start;
  padding: 1vh;
  height: 4vh;
`


