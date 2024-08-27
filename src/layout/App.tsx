import { useState } from 'react'
// import Footer from './Footer'
import Header from './Header'
// import Main from './Main'
import UAHProductList from '../components/FirstValut/UAHProductList'
import USDProductList from '../components/SecondValut/USDProductList'
import EURProductList from '../components/ThirdValut/EURProductList'
import PZTProductList from '../components/FourthValut/PZTProductList'

type Props = {}

type ProductsInCartType = { [id: number]: number }

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({})
    // const [currency, setCurrency] = useState<string>('ABC')
    // const [rates, setRates] = useState<Record<string, number>>({})

    // useEffect(() => {
    //     fetch(
    //         'http://api.coinlayer.com/api/live?access_key=3c55da2c86b91e363472e68e98d5d6dd'
    //     )
    //         .then((res) => res.json())
    //         .then((json) => {
    //             setRates(json.rates)
    //             console.log(json.rates)
    //         })
    //         .catch((err) => {
    //             console.warn(err)
    //             alert('Problem')
    //         })
    // }, [])

    // const onChangePrice = (gadjetPrice: number) => {
    //     const price = gadjetPrice / rates[currency]
    //     const result = price * rates[currency]
    //     gadjetPrice = result
    // }

    // const onChangeCurrency = (cur: string, gadjetPrice: number) => {
    //     setCurrency(cur)
    //     onChangePrice(gadjetPrice)
    // }

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const [mode, setMode] = useState<string>('First')

    let variantValut

    switch (mode) {
        case 'First':
            variantValut = (
                <UAHProductList
                    addProductToCart={addProductToCart}
                    productsInCart={productsInCart}
                />
            )
            break
        case 'Second':
            variantValut = (
                <USDProductList
                    addProductToCart={addProductToCart}
                    productsInCart={productsInCart}
                />
            )
            break
        case 'Third':
            variantValut = (
                <EURProductList
                    addProductToCart={addProductToCart}
                    productsInCart={productsInCart}
                />
            )
            break
        case 'Fourth':
            variantValut = (
                <PZTProductList
                    addProductToCart={addProductToCart}
                    productsInCart={productsInCart}
                />
            )
            break
        default:
            variantValut = (
                <UAHProductList
                    addProductToCart={addProductToCart}
                    productsInCart={productsInCart}
                />
            )
    }

    return (
        <>
            <Header
                // currency={currency} onChangeCurrency={onChangeCurrency}
                onClick={setMode}
            />
            {variantValut}
            {/* <Main addProductToCart={addProductToCart} />
            <Footer productsInCart={productsInCart} /> */}
        </>
    )
}

export default App
