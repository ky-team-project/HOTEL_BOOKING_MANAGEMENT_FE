import { Link } from "react-router-dom";

const AdminReviewTable = ({ reviews, onDelete }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>호텔명</th>
            <th>작성자</th>
            <th>평점</th>
            <th>내용</th>
            <th>신고</th>
            <th>작성일</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>{review.hotelName}</td>
              <td>{review.author}</td>
              <td>{"⭐".repeat(review.rating)}</td>
              <td>{review.content?.substring(0, 50)}...</td>
              <td>{review.reported ? "신고됨" : "-"}</td>
              <td>{review.createdAt}</td>
              <td>
                <div style={{ display: "flex", gap: "8px" }}>
                  <Link
                    to={`/admin/reviews/${review.id}`}
                    className="btn btn-primary"
                  >
                    상세
                  </Link>
                  <button
                    onClick={() => onDelete(review.id)}
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

export default AdminReviewTable;
