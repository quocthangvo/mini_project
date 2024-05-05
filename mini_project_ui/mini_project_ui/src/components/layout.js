import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white border-bottom box-shadow p-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Quản lý sách
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/admin/genres">
                Thể loại
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/admin/products">
                Sách
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav text-dark">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Thông tin
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Đăng xuất
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return <div className="text-center p-4 border-top">Admin</div>;
}
