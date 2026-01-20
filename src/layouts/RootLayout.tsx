import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      {/* 공통 헤더 자리 */}
      <Outlet />
      {/* 공통 푸터 자리 */}
    </div>
  );
}
