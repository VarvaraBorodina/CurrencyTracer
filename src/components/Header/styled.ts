import styled from 'styled-components'

import THEME from '@/constants/themes'

const Container = styled.div`
  display: flex;
  height: 417px;
  align-items: center;
  border: 4px solid ${THEME.MAIN_COLOR};
  background: linear-gradient(
    252deg,
    rgba(18, 18, 18, 1) 0%,
    rgba(15, 36, 23, 1) 50%,
    rgba(4, 6, 5, 1) 100%
  );
`

const TitleContainer = styled.div`
  width: 691px;
  margin-right: 100px;
  margin-left: 80px;
`

const Title = styled.h1`
  font-family: 'PoppinsSemiBold';
  font-size: 76px;
  font-weight: 600;
  line-height: 114px;
  text-align: right;
  background-image: linear-gradient(
    90.18deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SubTitle = styled.p`
  width: 397px;
  margin-left: 397;
  color: ${THEME.TEXT_COLOR};
  font-family: PoppinsLight;
  font-size: 25px;
  font-weight: 300;
  line-height: 47px;
  text-align: center;
`

export { Container, SubTitle, Title, TitleContainer }
