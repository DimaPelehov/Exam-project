import {
    Product,
    getProductsObject,
    productsArray,
} from '../../utils/productsArray'
import ProductsListItem from '../Products/ProductsListItem'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: { [id: number]: number }
    productsObject?: { [id: number]: Product }
}

const PZTProductList = ({
    addProductToCart,
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const PZTcourse = 11

    const total = Object.keys(productsInCart).reduce(
        (sum, productId) =>
            sum +
            productsObject[+productId].gadjetPrice * productsInCart[+productId],
        0
    )

    return (
        <>
            <div className="product-list">
                {productsArray.map(
                    ({ id, title, description, gadjetPrice, PZTvalut }) => (
                        <div key={id} className="product">
                            <ProductsListItem
                                id={id}
                                title={title}
                                description={description}
                                gadjetPrice={
                                    +(gadjetPrice / PZTcourse).toFixed(2)
                                }
                                valut={PZTvalut}
                                addProductToCart={addProductToCart}
                            />
                        </div>
                    )
                )}
            </div>

            <div className="total">
                Total: {total === 0 ? 0 : (total / PZTcourse).toFixed(2)}
            </div>
        </>
    )
}
export default PZTProductList
