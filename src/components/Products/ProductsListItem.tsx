import '../../styles.scss'

type Props = {
    id: number
    title: string
    description: string
    price: number
    valut: string
}

const ProductsListItem = ({ id, title, description, price, valut }: Props) => {
    return (
        <>
            <h2>{title}</h2>
            <p className="description">{description}</p>
            <span>
                {valut}:{price}
            </span>
            <button>BUY</button>
        </>
    )
}

export default ProductsListItem
