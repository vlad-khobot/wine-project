import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as BottleHeaderSvg } from '../../assets/023-wine-bottle-01.svg'
import { selectState } from '../../store/slices/appSlice'
import Loader from '../Loader'
import { DataProps } from '../WinePage'
import {
  Column,
  Header,
  HeaderItem,
  PreviewPicture,
  Row,
  StyledTable,
} from './styled'

interface TableProps {
  data: DataProps[]
}

const WinePageTable: FC<TableProps> = ({ data }) => {
  const state = useSelector(selectState)
  return (
    <>
      {data.length > 0 ? (
        <StyledTable id="my-table">
          <thead>
            <Header>
              <HeaderItem>
                <BottleHeaderSvg />
              </HeaderItem>
              <HeaderItem>Wine name</HeaderItem>
              <HeaderItem>Country</HeaderItem>
              <HeaderItem>Region</HeaderItem>
              <HeaderItem>Grape</HeaderItem>
              <HeaderItem>Type</HeaderItem>
              <HeaderItem>Price</HeaderItem>
            </Header>
          </thead>

          {data.map((item, i) => {
            let regionInfo = item.region
            const country = regionInfo.slice(0, regionInfo.indexOf('/') - 1)
            regionInfo = item.region
            const region = regionInfo.slice(regionInfo.indexOf('/') + 2)
            return (
              <tbody key={i}>
                <Row>
                  <Column>
                    <PreviewPicture src={item.image} alt="wine preview" />
                  </Column>
                  <Column>
                    <p>{item.name}</p>
                  </Column>
                  <Column>
                    <p>{country}</p>
                  </Column>
                  <Column>
                    <p>{region}</p>
                  </Column>
                  <Column>
                    <p>{item.grapes}</p>
                  </Column>
                  <Column>
                    <p>{item.wine_type}</p>
                  </Column>
                  <Column>
                    <p>€{item.price}</p>
                  </Column>
                </Row>
              </tbody>
            )
          })}
        </StyledTable>
      ) : state.loading ? (
        <Loader />
      ) : (
        <div>No results found</div>
      )}
    </>
  )
}
export default WinePageTable
