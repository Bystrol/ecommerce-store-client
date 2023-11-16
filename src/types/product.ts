export type Product = {
  description: string
  _id: string
  imageUrl: string
  isAvailable: boolean
  name: string
  price: number
  category: string
}

export type CartItem = {
  amount: number
  color: string
  id: string
  imageUrl: string
  key: string
  name: string
  price: number
  size: string
}
