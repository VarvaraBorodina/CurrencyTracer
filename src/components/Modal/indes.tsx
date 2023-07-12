import { ReactNode } from 'react'

import { Container, Content } from './styled'

type ModalTypes = {
  setIsActive: (isActive: boolean) => void
  children: ReactNode
}
const Modal = ({ setIsActive, children }: ModalTypes) => {
  return (
    <Container onClick={() => setIsActive(false)} data-cy="modal-empty-space">
      <Content
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          event.stopPropagation()
        }
        data-cy="modal"
      >
        {children}
      </Content>
    </Container>
  )
}

export default Modal
