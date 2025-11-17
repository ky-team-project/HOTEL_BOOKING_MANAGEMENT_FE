import { Link } from "react-router-dom";
import StatusBadge from "../../common/StatusBadge";

const AdminHotelTable = ({ hotels, onApprove, onReject, onDelete }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>호텔명</th>
            <th>지역</th>
            <th>사업자</th>
            <th>상태</th>
            <th>등록일</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.id}</td>
              <td>
                <Link to={`/admin/hotels/${hotel.id}/edit`}>{hotel.name}</Link>
              </td>
              <td>{hotel.region}</td>
              <td>{hotel.owner}</td>
              <td>
                <StatusBadge status={hotel.status} type="hotel" />
              </td>
              <td>{hotel.createdAt}</td>
              <td>
                <div style={{ display: "flex", gap: "8px" }}>
                  {hotel.status === "pending" && (
                    <>
                      <button
                        onClick={() => onApprove(hotel.id)}
                        className="btn btn-primary"
                      >
                        승인
                      </button>
                      <button
                        onClick={() => onReject(hotel.id)}
                        className="btn btn-secondary"
                      >
                        거부
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => onDelete(hotel.id)}
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

export default AdminHotelTable;
