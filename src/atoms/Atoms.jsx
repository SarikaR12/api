import { Link } from "react-router-dom"
import { navData, adminData } from "./Data"
import { useState } from "react"

let Headnavbar = (props) => {

    const [data, setData] = useState(props.element === "admin" ? adminData : navData);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                data.map((val) => {
                                    return (
                                        <li className="nav-item" key={val.path}>
                                            <Link to={val.path} className="nav-link">{val.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { Headnavbar };