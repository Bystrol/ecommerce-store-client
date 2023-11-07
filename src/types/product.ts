export type CategoryItem = {
  description: string
  id: string
  imageUrl: string
  isAvailable: boolean
  name: string
  price: number
}

export type DetailItem = CategoryItem

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
