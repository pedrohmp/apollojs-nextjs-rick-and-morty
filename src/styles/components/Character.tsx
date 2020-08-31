import styled from 'styled-components'

export const Row = styled.div`
  display: flex;

  background-color: #c3989833;
  padding: 19px 82px;
  margin: 21px 0;

  ul {
    list-style-type: none;
    margin-left: 20px;

    li {
      margin-top: 19px;
      display: flex;
      width: 300px;
      align-items: center;

      span {
        width: 100%;
      }
    }
  }
`
export const CharacterBtn = styled.button`
  padding: 10px;
  background-color: #352c2e;
  border: 0;
  color: #ffff;
  cursor: pointer;
  outline: unset;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
  }

  p {
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 35px;
  }
`
