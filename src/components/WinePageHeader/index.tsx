import { useDispatch } from 'react-redux'
import { searchData } from '../../store/slices/appSlice'
import { useDebouncedCallback } from 'use-debounce'
import { Header, Line, Search, Text } from './styled'

const WinePageHeader = () => {
  const dispatch = useDispatch()

  const debounced = useDebouncedCallback((value) => {
    dispatch(searchData({ inputData: value }))
  }, 500)
  return (
    <Header>
      <h1>Did somebody say wine?</h1>
      <Line />
      <br />
      <Text>
        This is where the wines that your virtual sommelier will recommend are
        kept, kind of like a wine cellar! Manage, add, update and search your
        portfolio here.
      </Text>
      <Search>
        <span>Search</span>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            debounced(e.target.value)
          }}
          placeholder="e.g. Australian Wines"
        ></input>
      </Search>
    </Header>
  )
}
export default WinePageHeader
