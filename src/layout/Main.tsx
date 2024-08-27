// import ProductsList from '../components/Products/ProductsList'

type Props = { addProductToCart: (id: number, count: number) => void }

const Main = (props: Props) => {
    return (
        <div>{/* <ProductsList addProductToCart={addProductToCart} /> */}</div>
    )
}
export default Main
