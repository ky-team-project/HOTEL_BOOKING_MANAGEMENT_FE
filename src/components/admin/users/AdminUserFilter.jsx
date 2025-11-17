const AdminUserFilter = ({ filters, onFilterChange, onSearch }) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>검색</label>
        <input
          type="text"
          placeholder="이름 또는 이메일"
          value={filters.search || ""}
          onChange={(e) => onFilterChange({ search: e.target.value })}
        />
      </div>

      <div className="filter-group">
        <label>회원 유형</label>
        <select
          value={filters.type || ""}
          onChange={(e) => onFilterChange({ type: e.target.value })}
        >
          <option value="">전체</option>
          <option value="user">일반회원</option>
          <option value="business">사업자</option>
        </select>
      </div>

      <div className="filter-group">
        <label>상태</label>
        <select
          value={filters.status || ""}
          onChange={(e) => onFilterChange({ status: e.target.value })}
        >
          <option value="">전체</option>
          <option value="active">활성</option>
          <option value="inactive">비활성</option>
          <option value="suspended">정지</option>
        </select>
      </div>

      <button onClick={onSearch} className="btn btn-primary">
        검색
      </button>
    </div>
  );
};

export default AdminUserFilter;
