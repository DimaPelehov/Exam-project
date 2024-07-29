import { productsArray } from '../../utils/productsArray'
import ProductsListItem from './ProductsListItem'
import '../../styles.scss'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <div className="product-list">
            {productsArray.map(({ id, title, description, price, valut }) => (
                <div key={id} className="product">
                    <ProductsListItem
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        valut={valut}
                    />
                </div>
            ))}
        </div>
    )
}
export default ProductsList
