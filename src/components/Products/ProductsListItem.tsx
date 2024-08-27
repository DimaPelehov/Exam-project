import '../../styles.scss'

type Props = {
    id: number
    title: string
    description: string
    gadjetPrice: number
    valut: string
    addProductToCart: (id: number, count: number) => void
}

const ProductsListItem = ({
    id,
    title,
    description,
    gadjetPrice,
    valut,
    addProductToCart,
}: Props) => {
    const count = 1

    return (
        <>
            <h2>{title}</h2>
            <p className="description">{description}</p>
            <span>
                {valut}:{gadjetPrice}
            </span>
            <button onClick={() => addProductToCart(id, count)}>BUY</button>
        </>
    )
}

export default ProductsListItem
