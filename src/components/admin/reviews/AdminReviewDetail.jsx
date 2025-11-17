const AdminReviewDetail = ({ review }) => {
  if (!review) return null;

  return (
    <div className="card">
      <h3>리뷰 상세 정보</h3>

      <div className="detail-section">
        <div className="detail-row">
          <span className="label">ID:</span>
          <span className="value">{review.id}</span>
        </div>

        <div className="detail-row">
          <span className="label">호텔명:</span>
          <span className="value">{review.hotelName}</span>
        </div>

        <div className="detail-row">
          <span className="label">작성자:</span>
          <span className="value">{review.author}</span>
        </div>

        <div className="detail-row">
          <span className="label">평점:</span>
          <span className="value">
            {"⭐".repeat(review.rating)} ({review.rating}점)
          </span>
        </div>

        <div className="detail-row">
          <span className="label">내용:</span>
          <span className="value">{review.content}</span>
        </div>

        <div className="detail-row">
          <span className="label">작성일:</span>
          <span className="value">{review.createdAt}</span>
        </div>

        {review.reported && (
          <>
            <div className="detail-row">
              <span className="label">신고 사유:</span>
              <span className="value">{review.reportReason}</span>
            </div>

            <div className="detail-row">
              <span className="label">신고일:</span>
              <span className="value">{review.reportedAt}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminReviewDetail;
