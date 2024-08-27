import { useState } from 'react'
import '../styles.scss'

type Props = {
    onClick: (e: any) => void
}

const Header = ({ onClick }: Props) => {
    const [activeBtnId, setActiveBtnId] = useState<string>('UAHbtn')

    return (
        <div className="header">
            <h1>Our shop page</h1>

            <div className="header-btns">
                <button
                    onClick={() => {
                        onClick('First')
                        setActiveBtnId('UAHbtn')
                    }}
                    className={activeBtnId === 'UAHbtn' ? 'active' : ''}
                >
                    UAH
                </button>
                <button
                    onClick={() => {
                        onClick('Second')
                        setActiveBtnId('USDbtn')
                    }}
                    className={activeBtnId === 'USDbtn' ? 'active' : ''}
                >
                    USD
                </button>
                <button
                    onClick={() => {
                        onClick('Third')
                        setActiveBtnId('EURbtn')
                    }}
                    className={activeBtnId === 'EURbtn' ? 'active' : ''}
                >
                    EUR
                </button>
                <button
                    onClick={() => {
                        onClick('Fourth')
                        setActiveBtnId('PZTbtn')
                    }}
                    className={activeBtnId === 'PZTbtn' ? 'active' : ''}
                >
                    PZT
                </button>
            </div>
        </div>
    )
}

export default Header
