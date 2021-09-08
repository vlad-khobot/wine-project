import WinePageHeader from '../WinePageHeader'
import WinePageTable from '../WinePageTable'
import { ReactComponent as RefreshSvg } from '../../assets/various icons-07.svg'
import { ReactComponent as SortSvg } from '../../assets/various icons-06.svg'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeData,
  removeLoading,
  selectState,
  setData,
  setLoading,
  showModal,
  sortData,
  switchSort,
} from '../../store/slices/appSlice'
import {
  FlexWrapper,
  WinePageContainer,
  RefreshButton,
  AddButton,
  SortButton,
} from './styled'
import Modal from '../Modal'
export interface DataProps {
  url_1: string
  name: string
  image: string
  price: number
  wine_type: string
  grapes: string
  region: string
  wine_style: string
  Body: string
  Acidity: string
  Tannins: string
  Sweetness: string
}

const WinePage = () => {
  const dispatch = useDispatch()
  const state = useSelector(selectState)
  const data = state.searching ? state.searchResult : state.data
  function changeSort() {
    dispatch(switchSort())
    dispatch(sortData())
  }

  const refreshDataFunc = useCallback(() => {
    const currentData = data
    dispatch(removeData())
    dispatch(setLoading())
    setTimeout(() => {
      dispatch(setData({ data: currentData }))
      dispatch(removeLoading())
    }, 1000)
  }, [dispatch, data])

  function showModalFunc() {
    dispatch(showModal())
  }

  return (
    <FlexWrapper>
      {state.showModal && <Modal />}
      <WinePageContainer>
        <RefreshButton onClick={refreshDataFunc}>
          <RefreshSvg />
        </RefreshButton>
        <AddButton onClick={showModalFunc}>+</AddButton>
        <SortButton enabled={state.expFirst} onClick={changeSort}>
          <SortSvg />
        </SortButton>
        <WinePageHeader />
        <WinePageTable data={data} />
      </WinePageContainer>
    </FlexWrapper>
  )
}
export default WinePage
