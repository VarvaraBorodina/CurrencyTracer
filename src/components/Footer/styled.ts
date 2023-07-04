import styled from 'styled-components'

import THEME from '@/constants/themes'

const Container = styled.div`
  margin: 0 auto;
  width: 1216px;
  aligt-item: center;
`

const TitleContainer = styled.div`
  display: flex;
`

const Title = styled.h1`
  margin-left: 10px;
  margin-top: 5px;
  font-family: PoppinsLight;
  font-size: 26px;
  font-weight: 600;
  line-height: 39px;
  background-image: linear-gradient(
    90.18deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Info = styled.div``

const Description = styled.p`
  width: 460px;
  margin-top: 30px;
  font-family: PoppinsLight;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  color: ${THEME.NAVIGATION_COLOR};
`

const MenuOption = styled.div`
  margin-right: 100px;
`

const OptionTitle = styled.h6`
  margin-bottom: 30px;
  color: ${THEME.NAVIGATION_COLOR};
  font-family: InterRegular;
  font-size: 28px;
  font-weight: 400;
  line-height: 42px;
`

const SubOption = styled.p`
  margin-bottom: 20px;
  color: #898989;
  font-family: InterRegular, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
`

const Menu = styled.div`
  display: flex;
`
const Policy = styled.p`
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  color: #898989;
  font-family: InterRegular;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export {
  Container,
  Content,
  Description,
  Info,
  Menu,
  MenuOption,
  OptionTitle,
  Policy,
  SubOption,
  Title,
  TitleContainer,
}
