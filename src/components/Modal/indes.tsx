import { ReactNode } from 'react'

import { Container, Content } from './styled'

type ModalTypes = {
  setIsActive: (isActive: boolean) => void
  children: ReactNode
}
const Modal = ({ setIsActive, children }: ModalTypes) => {
  return (
    <Container onClick={() => setIsActive(false)}>
      <Content
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          event.stopPropagation()
        }
      >
        {children}
      </Content>
    </Container>
  )
}

export default Modal
