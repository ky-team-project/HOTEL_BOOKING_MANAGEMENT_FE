import { Link } from "react-router-dom";
import StatusBadge from "../../common/StatusBadge";

const AdminBookingTable = ({ bookings, onStatusChange, onCancel }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>예약번호</th>
            <th>호텔명</th>
            <th>고객명</th>
            <th>체크인</th>
            <th>체크아웃</th>
            <th>금액</th>
            <th>상태</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>
                <Link to={`/admin/bookings/${booking.id}`}>{booking.id}</Link>
              </td>
              <td>{booking.hotelName}</td>
              <td>{booking.customerName}</td>
              <td>{booking.checkIn}</td>
              <td>{booking.checkOut}</td>
              <td>{booking.totalAmount?.toLocaleString()}원</td>
              <td>
                <StatusBadge status={booking.status} type="booking" />
              </td>
              <td>
                <div style={{ display: "flex", gap: "8px" }}>
                  <select
                    value={booking.status}
                    onChange={(e) => onStatusChange(booking.id, e.target.value)}
                    className="btn"
                  >
                    <option value="pending">대기</option>
                    <option value="confirmed">확정</option>
                    <option value="cancelled">취소</option>
                    <option value="completed">완료</option>
                  </select>
                  <button
                    onClick={() => onCancel(booking.id)}
                    className="btn btn-danger"
                  >
                    취소
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

export default AdminBookingTable;
