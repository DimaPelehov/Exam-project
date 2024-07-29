import '../styles.scss'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className="header">
            <h1>Our shop page</h1>
            <div>
                <button>USD</button>
                <button>EUR</button>
                <button>UAH</button>
                <button>ZLT</button>
            </div>
        </div>
    )
}

export default Header
