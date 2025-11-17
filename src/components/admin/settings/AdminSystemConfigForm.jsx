import { useState } from "react";

const AdminSystemConfigForm = ({ config, onSubmit }) => {
  const [formData, setFormData] = useState({
    siteName: config?.siteName || "",
    siteEmail: config?.siteEmail || "",
    maintenanceMode: config?.maintenanceMode || false,
    bookingEnabled: config?.bookingEnabled || true,
    reviewEnabled: config?.reviewEnabled || true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>시스템 설정</h3>

      <div className="form-group">
        <label>사이트명</label>
        <input
          type="text"
          name="siteName"
          value={formData.siteName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>사이트 이메일</label>
        <input
          type="email"
          name="siteEmail"
          value={formData.siteEmail}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="maintenanceMode"
            checked={formData.maintenanceMode}
            onChange={handleChange}
          />
          유지보수 모드
        </label>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="bookingEnabled"
            checked={formData.bookingEnabled}
            onChange={handleChange}
          />
          예약 기능 활성화
        </label>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="reviewEnabled"
            checked={formData.reviewEnabled}
            onChange={handleChange}
          />
          리뷰 기능 활성화
        </label>
      </div>

      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <button type="submit" className="btn btn-primary">
          저장
        </button>
      </div>
    </form>
  );
};

export default AdminSystemConfigForm;
