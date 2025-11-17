import StatusBadge from "../../common/StatusBadge";

const AdminUserDetail = ({ user }) => {
  if (!user) return null;

  return (
    <div className="card">
      <h3>회원 상세 정보</h3>

      <div className="detail-section">
        <div className="detail-row">
          <span className="label">ID:</span>
          <span className="value">{user.id}</span>
        </div>

        <div className="detail-row">
          <span className="label">이름:</span>
          <span className="value">{user.name}</span>
        </div>

        <div className="detail-row">
          <span className="label">이메일:</span>
          <span className="value">{user.email}</span>
        </div>

        <div className="detail-row">
          <span className="label">전화번호:</span>
          <span className="value">{user.phone}</span>
        </div>

        <div className="detail-row">
          <span className="label">회원 유형:</span>
          <span className="value">
            {user.type === "business" ? "사업자" : "일반"}
          </span>
        </div>

        <div className="detail-row">
          <span className="label">상태:</span>
          <span className="value">
            <StatusBadge status={user.status} type="user" />
          </span>
        </div>

        <div className="detail-row">
          <span className="label">가입일:</span>
          <span className="value">{user.joinDate}</span>
        </div>

        <div className="detail-row">
          <span className="label">마지막 로그인:</span>
          <span className="value">{user.lastLogin}</span>
        </div>

        {user.type === "business" && (
          <>
            <div className="detail-row">
              <span className="label">사업자번호:</span>
              <span className="value">{user.businessNumber}</span>
            </div>

            <div className="detail-row">
              <span className="label">사업자명:</span>
              <span className="value">{user.businessName}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminUserDetail;
