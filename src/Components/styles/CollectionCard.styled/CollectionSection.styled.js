import styled from 'styled-components'

export const CollectionDiv = styled.div`
  max-width: 100vw;
  @media screen and (min-width: 600px){
    padding: 40px 52px;
  }

`

export const CollectionUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
`

export const CollectionLi = styled.li`
  display: flex;
  justify-content: center;
  padding: 1rem;
  
  @media (min-width: 40rem) {
      width: 100%;
  }

  @media (min-width: 56rem) {
      width: 31%;
  }
  
  
`

