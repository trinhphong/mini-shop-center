import { Outlet, Link } from "react-router-dom";

function DefaultLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default DefaultLayout
