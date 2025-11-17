import { useState, useEffect } from "react";

const AdminCouponForm = ({ coupon, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    discountType: "percent",
    discountValue: "",
    minPurchaseAmount: "",
    maxUseCount: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    if (coupon) {
      setFormData({
        name: coupon.name || "",
        code: coupon.code || "",
        discountType: coupon.discountType || "percent",
        discountValue: coupon.discountValue || "",
        minPurchaseAmount: coupon.minPurchaseAmount || "",
        maxUseCount: coupon.maxUseCount || "",
        startDate: coupon.startDate || "",
        endDate: coupon.endDate || "",
      });
    }
  }, [coupon]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="form-group">
        <label>쿠폰명</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>쿠폰 코드</label>
        <input
          type="text"
          name="code"
          value={formData.code}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>할인 타입</label>
        <select
          name="discountType"
          value={formData.discountType}
          onChange={handleChange}
          required
        >
          <option value="percent">퍼센트</option>
          <option value="fixed">정액</option>
        </select>
      </div>

      <div className="form-group">
        <label>할인 값</label>
        <input
          type="number"
          name="discountValue"
          value={formData.discountValue}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>최소 구매 금액</label>
        <input
          type="number"
          name="minPurchaseAmount"
          value={formData.minPurchaseAmount}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>최대 사용 횟수</label>
        <input
          type="number"
          name="maxUseCount"
          value={formData.maxUseCount}
          onChange={handleChange}
          placeholder="비워두면 무제한"
        />
      </div>

      <div className="form-group">
        <label>시작일</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>종료일</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <button type="button" onClick={onCancel} className="btn btn-outline">
          취소
        </button>
        <button type="submit" className="btn btn-primary">
          저장
        </button>
      </div>
    </form>
  );
};

export default AdminCouponForm;
