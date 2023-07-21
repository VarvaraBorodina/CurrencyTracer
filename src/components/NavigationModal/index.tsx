import { useLocation, useNavigate } from 'react-router-dom'

import Modal from '@/components/ui/Modal'

import { Route } from './styles'
import { NavigationModalType, RouteType } from './types'

const NavigationModal = ({ routes, setIsActive }: NavigationModalType) => {
  const currentPath = useLocation().pathname
  const navigate = useNavigate()

  const handleOnClick = (path: string) => () => {
    navigate(path)
    setIsActive(false)
  }
  return (
    <Modal setIsActive={setIsActive}>
      {routes.map(({ name, path }: RouteType) => (
        <Route
          $isCurrent={currentPath === path}
          key={path}
          data-cy={`${path.slice(1, path.length)}path`}
          onClick={handleOnClick(path)}
        >
          {name}
        </Route>
      ))}
    </Modal>
  )
}

export default NavigationModal
