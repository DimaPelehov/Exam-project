export type Product = {
    id: number
    title: string
    description: string
    price: number
    valut: string
}

export const productsArray: Product[] = [
    {
        id: 1,
        title: 'Iphone 12',
        description: 'This is Iphone 12',
        price: 100,
        valut: 'USD',
    },
    {
        id: 2,
        title: 'Iphone 13',
        description: 'This is Iphone 13',
        price: 200,
        valut: 'USD',
    },
    {
        id: 3,
        title: 'Iphone 14',
        description: 'This is Iphone 14',
        price: 300,
        valut: 'USD',
    },
]
