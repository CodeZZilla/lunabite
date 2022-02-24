import styled from 'styled-components'

export const CollectionCardDiv = styled.div`
  width: 522px;
  background-color: white;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgb(229, 232, 235);
  
  a {
    display: inline-block;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
  }

  &:hover {
    box-shadow: rgb(4 17 29 / 25%) 0 0 8px 0;
  }

`

export const CollectionImgDiv = styled.div`
  height: 200px;
  width: 100%;
  border-radius: 1.5rem 1.5rem 0 0;
  border-bottom: 1px solid rgb(229, 232, 235);
  background-color: rgb(229, 232, 235);
  
  img{
    height: 100%;
    object-fit: cover;
    transition: opacity 400ms ease 0s;
    width: 100%;
  }

`

export const CollectionContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  
  a{
    color: black;
    font-weight: 700;
    font-size: 24px;
    text-transform: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    margin-top: 2vh;
    cursor: pointer;
  }
  
  span{
    display: flex;
    justify-content: center;
    padding: 0 5vh;
    font-weight: 400;
    font-size: 18px;
    max-width: 100%;
    height: 66px;
    overflow: hidden;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`

export const CollectionCreatedBy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  p {
    color: black;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    min-width: 5px;
  }

  a {
    display: inline;
    color: rgba(167, 167, 255, 0.85);
    font-weight: 600;
    font-size: 16px;
    text-transform: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
  }

  a:hover {
    color: rgb(134, 134, 225);
  }

`

export const CollectionButton = styled.div`
  display: flex;
  width: 100%;
  

  button{
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 100%;
    font-family: inherit;
    border: 0px;
    padding: 0px;
    background: inherit;

  }
`


