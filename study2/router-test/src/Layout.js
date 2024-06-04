import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h2>여기서는 방을 소개하는 페이지 입니다.</h2>
      <nav>
        <Link to="blueRoom">파란 방입니다.</Link>
        <Link to="greenRoom">초록 방입니다.</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;
