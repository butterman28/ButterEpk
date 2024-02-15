import "../css/style.css"
import NavBar from "./NavBar"
function Header(){
    return (
        <div className="header">
            <div className="icon d-flex justify-content-center">
                <ul className="d-flex list-unstyled">
                    <li class="nav-item me-3">
                        <a class="nav-link bi bi-instagram" href="https://www.instagram.com/gen_grievouswiththespareparts/"></a>
                    </li>
                    <li class="nav-item">   
                        <a class="nav-link bi bi-spotify" href="https://open.spotify.com/artist/7xY0EXPxCpSh6TQgdAufwl?si=ocuPVt9HSLCwyUA8XG-bKw"></a>
                    </li>
                </ul>
            </div>
            <h1>ButterMan</h1>
            <div className="d-flex justify-content-center">
                <NavBar />
            </div>
        </div>
    )
}
export default Header