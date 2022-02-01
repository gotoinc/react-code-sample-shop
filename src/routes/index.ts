import Cart from "../pages/Cart"
import Home from "../pages/Home"

export interface IRoute {
   path: string,
   component: React.ComponentType,
   exact?: boolean,
}

export enum RouteNames {
   CART = '/cart',
   HOME = '/'
}

export const publicRoutes: IRoute[] = [
   { path: RouteNames.CART, component: Cart, exact: true },
   { path: RouteNames.HOME, component: Home, exact: true }
]

export const privateRoutes: IRoute[] = []