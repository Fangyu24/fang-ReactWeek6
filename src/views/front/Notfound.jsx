import { useNavigate } from "react-router-dom"

function Notfound() {
    const navigate = useNavigate();
    navigate(-1)

    return (
        <>
            <h2>404</h2>
            <button onClick={() => navigate("/")}>
                回到首頁
            </button>
        </>
    )
}
export default Notfound