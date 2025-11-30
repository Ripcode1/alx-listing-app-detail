import { ReviewProps } from "@/interfaces/index";

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <div>
      {/* Reviews Header */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Reviews
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-lg">★ {averageRating.toFixed(1)}</span>
          <span className="text-gray-600">
            · {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
          </span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    {review.date && (
                      <p className="text-sm text-gray-500">{formatDate(review.date)}</p>
                    )}
                  </div>
                  <div className="flex items-center mt-1 sm:mt-0">
                    <span className="text-yellow-500 font-medium">
                      ★ {review.rating}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button (Optional) */}
      {reviews.length > 5 && (
        <button className="mt-6 border border-gray-900 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors">
          Show all {reviews.length} reviews
        </button>
      )}
    </div>
  );
};

export default ReviewSection;
