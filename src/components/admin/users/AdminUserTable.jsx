import { Link } from "react-router-dom";
import StatusBadge from "../../common/StatusBadge";

const AdminUserTable = ({ users, onStatusChange, onDelete }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>이메일</th>
            <th>유형</th>
            <th>상태</th>
            <th>가입일</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Link to={`/admin/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.email}</td>
              <td>{user.type === "business" ? "사업자" : "일반"}</td>
              <td>
                <StatusBadge status={user.status} type="user" />
              </td>
              <td>{user.joinDate}</td>
              <td>
                <div style={{ display: "flex", gap: "8px" }}>
                  <select
                    value={user.status}
                    onChange={(e) => onStatusChange(user.id, e.target.value)}
                    className="btn"
                  >
                    <option value="active">활성</option>
                    <option value="inactive">비활성</option>
                    <option value="suspended">정지</option>
                  </select>
                  <button
                    onClick={() => onDelete(user.id)}
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

export default AdminUserTable;
