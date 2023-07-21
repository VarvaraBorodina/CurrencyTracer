import { Container, Content } from './styled'
import { ModalTypes } from './types'

const Modal = ({ setIsActive, children }: ModalTypes) => {
  return (
    <Container
      onClick={() => setIsActive(false)}
      data-cy="modal-empty-space"
      data-testid="modal"
    >
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
