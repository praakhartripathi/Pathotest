const BLOGS = [
    {
        id: 1,
        title: 'Skin Infections: Types, Causes & Treatments',
        author: 'Dr. Pankaj Mandale',
        date: '06 Feb 2026',
        image: '/blogs/skin-infection.jpg',
        // themed gradient shown when image is absent
        gradient: 'linear-gradient(135deg,#f97316 0%,#dc2626 100%)',
        emoji: '🩹',
    },
    {
        id: 2,
        title: 'Typhoid Fever: Causes, Symptoms & Treatment Options',
        author: 'Dr. Rahul Verma',
        date: '06 Feb 2026',
        image: '/blogs/typhoid-fever.jpg',
        gradient: 'linear-gradient(135deg,#d97706 0%,#92400e 100%)',
        emoji: '🌡️',
    },
    {
        id: 3,
        title: 'Sciatica: Causes, Symptoms, Treatment & Pain Relief Tips',
        author: 'Dr. Pankaj Mandale',
        date: '30 Jan 2026',
        image: '/blogs/sciatica.jpg',
        gradient: 'linear-gradient(135deg,#6366f1 0%,#2563eb 100%)',
        emoji: '🦴',
    },
    {
        id: 4,
        title: 'Pineapple During Pregnancy: Benefits, Risks, and Common…',
        author: 'Dr. Rahul Verma',
        date: '18 Feb 2026',
        image: '/blogs/pineapple-pregnancy.jpg',
        gradient: 'linear-gradient(135deg,#10b981 0%,#f59e0b 100%)',
        emoji: '🍍',
    },
]

function BlogThumbnail({ src, gradient, emoji, alt }) {
    return (
        <div className="relative h-[170px] w-full overflow-hidden rounded-t-2xl">
            <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
                onError={(e) => {
                    // hide broken img; show gradient fallback below
                    e.currentTarget.style.display = 'none'
                }}
            />
            {/* gradient fallback — always rendered behind the <img> */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 -z-[1]"
                style={{ background: gradient }}
                aria-hidden="true"
            >
                <span className="text-5xl">{emoji}</span>
            </div>
        </div>
    )
}

export default function OurBlogs() {
    return (
        <section className="w-full pt-10 sm:pt-14 pb-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2b2d37]">Our Blogs</h2>
                <button className="h-10 px-7 rounded-full bg-[#194b76] text-white font-semibold text-sm border-0 hover:bg-[#0e3a5e] transition-colors">
                    View All
                </button>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
                {BLOGS.map((blog) => (
                    <article
                        key={blog.id}
                        className="rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
                    >
                        {/* Thumbnail */}
                        <BlogThumbnail
                            src={blog.image}
                            gradient={blog.gradient}
                            emoji={blog.emoji}
                            alt={blog.title}
                        />

                        {/* Card body */}
                        <div className="flex flex-col flex-1 p-4 gap-3">
                            {/* Title */}
                            <h3 className="text-sm sm:text-base font-bold text-[#2b2d37] leading-snug line-clamp-3">
                                {blog.title}
                            </h3>

                            {/* Know More */}
                            <button className="self-center mt-auto h-9 px-7 rounded-full bg-[#194b76] text-white font-semibold text-sm border-0 hover:bg-[#0e3a5e] transition-colors">
                                Know More
                            </button>

                            {/* Author + date */}
                            <div className="flex items-center justify-between text-xs text-gray-400 pt-1 border-t border-gray-100">
                                <span>By: {blog.author}</span>
                                <span>{blog.date}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
