import { Outlet, Link } from "react-router-dom";

function DefaultLayout(): JSX.Element {
  return (
    <div>
      <hr />
      <nav>
        <Link to="/">Stores</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default DefaultLayout
