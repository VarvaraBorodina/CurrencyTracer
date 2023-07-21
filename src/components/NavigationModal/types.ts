export type RouteType = {
  path: string
  name: string
}

export type NavigationModalType = {
  routes: RouteType[]
  setIsActive: (state: boolean) => void
}
