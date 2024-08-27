export type Product = {
    id: number
    title: string
    description: string
    UAHvalut: string
    USDvalut: string
    EURvalut: string
    PZTvalut: string
    gadjetPrice: number
}

export const productsArray: Product[] = [
    {
        id: 1,
        title: 'Iphone 12',
        description: 'This is Iphone 12',
        gadjetPrice: 100,
        UAHvalut: 'UAH',
        USDvalut: 'USD',
        EURvalut: 'EUR',
        PZTvalut: 'PZT',
    },
    {
        id: 2,
        title: 'Iphone 13',
        description: 'This is Iphone 13',
        gadjetPrice: 200,
        UAHvalut: 'UAH',
        USDvalut: 'USD',
        EURvalut: 'EUR',
        PZTvalut: 'PZT',
    },
    {
        id: 3,
        title: 'Iphone 14',
        description: 'This is Iphone 14',
        gadjetPrice: 300,
        UAHvalut: 'UAH',
        USDvalut: 'USD',
        EURvalut: 'EUR',
        PZTvalut: 'PZT',
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )
