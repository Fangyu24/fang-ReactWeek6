import { Link, Outlet } from "react-router-dom"

function AdminLayout() {
    return <>
        <header>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/product">商品管理頁</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/order">訂單管理頁</Link>
                </li>
            </ul>
        </header>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </>
}
export default AdminLayout