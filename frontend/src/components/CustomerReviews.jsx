const REVIEWS = [
    {
        id: 1,
        name: 'Simran Kaur',
        timeAgo: '2 weeks ago',
        rating: 5,
        avatarColor: '#7c3aed',
        initial: 'S',
        review:
            'It was a great experience getting the ultrasound done. Dr Sangeeta is very kind, experienced and polite. The place was hygienic and well maintained. Would totally recommend.',
    },
    {
        id: 2,
        name: 'Aman Kumar',
        timeAgo: '2 weeks ago',
        rating: 5,
        avatarColor: '#64748b',
        initial: 'A',
        review:
            'I recently visited Pathotest Diagnostic Lab for some routine tests, and my experience was quite good. The booking process was smooth — I scheduled my appointment online, and the confirmation was quick. The staff were professional and the reports were delivered on time.',
    },
    {
        id: 3,
        name: 'Mayur Gupta',
        timeAgo: '3 weeks ago',
        rating: 5,
        avatarColor: '#ea580c',
        initial: 'M',
        review:
            'Has a nice sitting place. Mostly tests are done on time. Reach early on time for full body checkup to avoid delays.',
    },
    {
        id: 4,
        name: 'Parveen Satija',
        timeAgo: '1 month ago',
        rating: 5,
        avatarColor: '#0f766e',
        initial: 'P',
        review:
            'Excellent services! Staff is very prompt and supportive. Very clean and neat lab. The test were timely conducted as per the booked time slot. Reports were handed over with images within 10 mins.',
    },
    {
        id: 5,
        name: 'Rekha Sharma',
        timeAgo: '1 month ago',
        rating: 5,
        avatarColor: '#b45309',
        initial: 'R',
        review:
            'Very good service. The technicians were skilled and the process was painless. Reports came quickly via WhatsApp. Highly recommended for all diagnostic tests.',
    },
    {
        id: 6,
        name: 'Deepak Verma',
        timeAgo: '2 months ago',
        rating: 5,
        avatarColor: '#1d4ed8',
        initial: 'D',
        review:
            'Outstanding experience. Online booking is very convenient. The staff is courteous and the lab is well-equipped. Will definitely come back for future checkups.',
    },
]

function StarRating({ count }) {
    return (
        <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill={i < count ? '#f59e0b' : '#d1d5db'}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                </svg>
            ))}
        </div>
    )
}

export default function CustomerReviews() {
    return (
        <section className="w-full pt-10 sm:pt-14 pb-6">
            {/* Header */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2b2d37] mb-8 sm:mb-10">
                What our customers say
            </h2>

            {/* Scrollable card track */}
            <div
                className="flex gap-4 sm:gap-5 overflow-x-auto pb-3"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {REVIEWS.map((review) => (
                    <article
                        key={review.id}
                        className="flex-shrink-0 w-[270px] sm:w-[300px] rounded-2xl border border-gray-200 bg-[#f9f9fa] p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
                    >
                        {/* Avatar row */}
                        <div className="flex items-center gap-3">
                            <div
                                className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                                style={{ backgroundColor: review.avatarColor }}
                                aria-hidden="true"
                            >
                                {review.initial}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#2b2d37] leading-tight">{review.name}</p>
                                <p className="text-xs text-gray-400">{review.timeAgo}</p>
                            </div>
                        </div>

                        {/* Stars */}
                        <StarRating count={review.rating} />

                        {/* Review text */}
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-5">
                            {review.review}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}
