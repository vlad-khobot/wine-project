import styled from 'styled-components'

export const PreviewPicture = styled.img`
  height: 30px;
  width: 30px;
  position: relative;
  z-index: 2;
`
export const Row = styled.tr`
  &:nth-child(2n + 1) td:last-child::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 40px;
    height: 100%;
    right: -20px;
    border-radius: 0 50% 50% 0;
    top: 0;
    box-shadow: inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc;
    background: white;
  }
  &:nth-child(2n) td:last-child::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 40px;
    height: 100%;
    right: -20px;
    border-radius: 0 50% 50% 0;
    top: 0;
    box-shadow: inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc;
    background: white;
  }

  &:nth-child(2n + 1) td:first-child::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 40px;
    height: 100%;
    left: -20px;
    border-radius: 50% 0 0 50%;
    top: 0;
    box-shadow: inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc;
    background: white;
  }
  &:nth-child(2n) td:first-child::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 40px;
    height: 100%;
    left: -20px;
    border-radius: 50% 0 0 50%;
    top: 0px;
    box-shadow: inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc;
    background: white;
  }

  &:nth-child(2n + 1) {
    box-shadow: inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc;
    background: white;
  }
  &:nth-child(2n) {
    box-shadow: inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc;
    background: white;
  }
  padding: 0;
  border-spacing: 0;
`
export const Column = styled.td`
  overflow-wrap: break-word;
  max-width: 400px;
  min-width: 90px;
  padding: 0 10px;
  z-index: 2;
  position: relative;
  height: 45px;
  text-align: center;
  &:not(:first-child):before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 0;
    height: 30px;
    width: 1px;
    border-left: 1px solid grey;
    background: white;
  }

  &:last-child {
    position: relative;
  }
  &:first-child {
    position: relative;
  }
`

export const Header = styled.tr`
  width: 80%;
  margin-bottom: 2px;
`
export const HeaderItem = styled.th`
  background: white;
  position: relative;
  height: 55px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 2px solid#f8f8fa;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    box-shadow: inset 0px 11px 20px -14px #d4d4d4,
      inset 0px -11px 20px -14px #efefef;
  }

  svg {
    height: 35px;
  }
`
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
  font-family: 'Inter';
  margin-bottom: 5px;
`
