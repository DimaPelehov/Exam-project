import { productsArray } from '../../utils/productsArray'
import ProductsListItem from './ProductsListItem'
import '../../styles.scss'

type Props = { addProductToCart: (id: number, count: number) => void }

const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <div className="product-list">
            {productsArray.map(
                ({ id, title, description, gadjetPrice, UAHvalut }) => (
                    <div key={id} className="product">
                        <ProductsListItem
                            id={id}
                            title={title}
                            description={description}
                            gadjetPrice={gadjetPrice}
                            valut={UAHvalut}
                            addProductToCart={addProductToCart}
                        />
                    </div>
                )
            )}
        </div>
    )
}
export default ProductsList
