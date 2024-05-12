import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import "./ClientsList.css";

function ClientsList() {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <>
      <Sidebar sidebarStatus={sidebarStatus} />

      <div
        className={`hamburgur-menu ${
          sidebarStatus === true ? "escape-from-sidebar" : ""
        }`}
      >
        <RxHamburgerMenu onClick={() => setSidebarStatus((prev) => !prev)} />
      </div>
      <Header />

      <div className="userlist">
        <table className="order-table">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>تاریخ</th>
              <th>شماره نوبت</th>
              <th>سفارشات</th>
              <th>حذف سفارش</th>
              <th>ویرایش سفارش</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1400/2/23</td>
              <td>632</td>
              <td>
                <button className="order-btn-watch"> مشاهده</button>
              </td>
              <td>
                <button className="order-btn-del"> حذف</button>
              </td>
              <td>
                <button className="order-btn-edit"> ویرایش</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default ClientsList;
