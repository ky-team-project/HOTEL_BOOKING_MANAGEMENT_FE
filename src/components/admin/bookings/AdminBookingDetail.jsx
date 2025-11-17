import StatusBadge from "../../common/StatusBadge";

const AdminBookingDetail = ({ booking }) => {
  if (!booking) return null;

  return (
    <div className="card">
      <h3>예약 상세 정보</h3>

      <div className="detail-section">
        <div className="detail-row">
          <span className="label">예약번호:</span>
          <span className="value">{booking.id}</span>
        </div>

        <div className="detail-row">
          <span className="label">상태:</span>
          <span className="value">
            <StatusBadge status={booking.status} type="booking" />
          </span>
        </div>

        <div className="detail-row">
          <span className="label">호텔명:</span>
          <span className="value">{booking.hotelName}</span>
        </div>

        <div className="detail-row">
          <span className="label">고객명:</span>
          <span className="value">{booking.customerName}</span>
        </div>

        <div className="detail-row">
          <span className="label">고객 이메일:</span>
          <span className="value">{booking.customerEmail}</span>
        </div>

        <div className="detail-row">
          <span className="label">체크인:</span>
          <span className="value">{booking.checkIn}</span>
        </div>

        <div className="detail-row">
          <span className="label">체크아웃:</span>
          <span className="value">{booking.checkOut}</span>
        </div>

        <div className="detail-row">
          <span className="label">객실 타입:</span>
          <span className="value">{booking.roomType}</span>
        </div>

        <div className="detail-row">
          <span className="label">투숙 인원:</span>
          <span className="value">{booking.guests}명</span>
        </div>

        <div className="detail-row">
          <span className="label">총 금액:</span>
          <span className="value">
            {booking.totalAmount?.toLocaleString()}원
          </span>
        </div>

        <div className="detail-row">
          <span className="label">예약일:</span>
          <span className="value">{booking.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminBookingDetail;
