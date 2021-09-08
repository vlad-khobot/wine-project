import styled from 'styled-components'

export const WinePageContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
`
export const RefreshButton = styled.button`
  border: none;
  border-radius: 25px;
  z-index: 10;
  position: absolute;
  top: 235px;
  right: 90px;
  width: 100px;
  height: 100px;
  background: white;
  transition: 0.2s;
  svg {
    height: 40px;
  }
  svg path {
    fill: #006c67;
  }
  &:hover {
    background: #cfd8dc;
  }
`
export const AddButton = styled.button`
  position: absolute;
  top: 235px;
  right: -30px;
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 25px;
  z-index: 10;
  font-size: 60px;
  color: #006c67;
  background: white;
  transition: 0.2s;
  &:hover {
    background: #cfd8dc;
  }
`
export const SortButton = styled.button<{ enabled: boolean }>`
  position: absolute;
  top: 365px;
  right: -110px;
  width: 90px;
  height: 60px;
  border: none;
  border-radius: 20px;
  z-index: 10;
  background: white;
  transition: 0.2s;
  svg {
    height: 40px;
  }
  &:hover {
    background: #cfd8dc;
  }
`
