export type Order = {
  _id: string
  currency: string
  products: [
    {
      _id: string
      productId: string
      name: string
      color: string
      imageUrl: string
      amount: number
      price: number
      size: string
    }
  ]
  userId: string
  createdAt: string
  updatedAt: string
}
