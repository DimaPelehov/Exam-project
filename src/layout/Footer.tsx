import '../styles.scss'
import {
    Product,
    getProductsObject,
    productsArray,
} from '../utils/productsArray'

type Props = {
    productsInCart: { [id: number]: number }
    productsObject?: { [id: number]: Product }
}

const Footer = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const totalResult = Object.keys(productsInCart).reduce(
        (sum, productId) =>
            sum +
            productsObject[+productId].gadjetPrice * productsInCart[+productId],
        0
    )

    return (
        <div className="footer">
            Total:
            {totalResult}
        </div>
    )
}

export default Footer
