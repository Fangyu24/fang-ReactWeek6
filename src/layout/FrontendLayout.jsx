import { Link, Outlet } from "react-router-dom"

function FrontendLayout() {
    return <>
        <header>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">首頁</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/products">商品頁</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">購物車</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/checkout">訂單確認</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">登入</Link>
                </li>
            </ul>
        </header>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </>
}
export default FrontendLayout