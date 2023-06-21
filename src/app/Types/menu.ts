 type TyMenu = {
  id:number,
  name:string,
  link : string,
  isStatus:boolean
}
type TypeMenuCreate = {
  name:string,
  isStatus:boolean
}
type TypeDeleteMenu = {
  name:string,
  id:number
}
export {
  TyMenu,
  TypeMenuCreate,
  TypeDeleteMenu
}