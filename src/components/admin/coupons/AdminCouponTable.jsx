import { Link } from "react-router-dom";

const AdminCouponTable = ({ coupons, onDelete }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>쿠폰명</th>
            <th>할인율/금액</th>
            <th>유효기간</th>
            <th>사용 가능 횟수</th>
            <th>사용 횟수</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon.id}>
              <td>{coupon.id}</td>
              <td>{coupon.name}</td>
              <td>
                {coupon.discountType === "percent"
                  ? `${coupon.discountValue}%`
                  : `${coupon.discountValue.toLocaleString()}원`}
              </td>
              <td>
                {coupon.startDate} ~ {coupon.endDate}
              </td>
              <td>{coupon.maxUseCount || "무제한"}</td>
              <td>{coupon.usedCount}</td>
              <td>
                <div style={{ display: "flex", gap: "8px" }}>
                  <Link
                    to={`/admin/coupons/${coupon.id}/edit`}
                    className="btn btn-primary"
                  >
                    수정
                  </Link>
                  <button
                    onClick={() => onDelete(coupon.id)}
                    className="btn btn-danger"
                  >
                    삭제
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCouponTable;
