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

const USDProductList = ({
    addProductToCart,
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const USDcourse = 36

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
                    ({ id, title, description, gadjetPrice, USDvalut }) => (
                        <div key={id} className="product">
                            <ProductsListItem
                                id={id}
                                title={title}
                                description={description}
                                gadjetPrice={
                                    +(gadjetPrice / USDcourse).toFixed(2)
                                }
                                valut={USDvalut}
                                addProductToCart={addProductToCart}
                            />
                        </div>
                    )
                )}
            </div>

            <div className="total">
                Total: {total === 0 ? 0 : (total / USDcourse).toFixed(2)}
            </div>
        </>
    )
}
export default USDProductList
