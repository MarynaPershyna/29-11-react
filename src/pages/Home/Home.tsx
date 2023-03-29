import ProductList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <div>
            <ProductList addProductToCart={addProductToCart} />
        </div>
    )
}

export default Home
