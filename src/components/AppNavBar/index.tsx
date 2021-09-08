import { ReactComponent as HomeSvg } from '../../assets/home-02.svg'
import { ReactComponent as BotSvg } from '../../assets/bot_icon-01.svg'
import { ReactComponent as BarrelSvg } from '../../assets/yourwines-01.svg'
import { ReactComponent as UserSvg } from '../../assets/customers-02-02-01.svg'
import { ReactComponent as BookLampSvg } from '../../assets/knowledge-01.svg'
import { ReactComponent as SettingsSvg } from '../../assets/settings-02.svg'
import { NavBarContainer, Option, Logo } from './styled'

const AppNavBar = () => {
  return (
    <NavBarContainer>
      <Logo>V</Logo>
      <Option>
        <HomeSvg />
      </Option>
      <Option>
        <BotSvg />
      </Option>
      <Option active={true}>
        <BarrelSvg />
      </Option>
      <Option>
        <UserSvg />
      </Option>
      <Option>
        <BookLampSvg />
      </Option>
      <Option>
        <SettingsSvg />
      </Option>
    </NavBarContainer>
  )
}
export default AppNavBar
