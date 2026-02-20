const LOCATIONS = [
    // Lucknow
    'Blood Test in Hazratganj, Lucknow',
    'Blood Test in Gomti Nagar, Lucknow',
    'Blood Test in Alambagh, Lucknow',
    'Blood Test in Aliganj, Lucknow',
    'Blood Test in Indira Nagar, Lucknow',
    'Blood Test in Rajajipuram, Lucknow',
    'Blood Test in Mahanagar, Lucknow',
    'Blood Test in Vikas Nagar, Lucknow',
    'Blood Test in Chinhat, Lucknow',
    'Blood Test in Jankipuram, Lucknow',
    'Blood Test in Chowk, Lucknow',
    'Blood Test in Aminabad, Lucknow',

    // Kanpur
    'Blood Test in Civil Lines, Kanpur',
    'Blood Test in Kidwai Nagar, Kanpur',
    'Blood Test in Govind Nagar, Kanpur',
    'Blood Test in Kalyanpur, Kanpur',
    'Blood Test in Swaroop Nagar, Kanpur',
    'Blood Test in Kakadeo, Kanpur',
    'Blood Test in Armapur, Kanpur',
    'Blood Test in Juhi, Kanpur',

    // Agra
    'Blood Test in Sanjay Place, Agra',
    'Blood Test in Kamla Nagar, Agra',
    'Blood Test in Bodla, Agra',
    'Blood Test in Shahganj, Agra',
    'Blood Test in Raja Mandi, Agra',
    'Blood Test in Dayal Bagh, Agra',
    'Blood Test in Sikandra, Agra',

    // Varanasi
    'Blood Test in Lanka, Varanasi',
    'Blood Test in Sigra, Varanasi',
    'Blood Test in Shivpur, Varanasi',
    'Blood Test in Nadesar, Varanasi',
    'Blood Test in Paharia, Varanasi',
    'Blood Test in Sarnath, Varanasi',

    // Noida
    'Blood Test in Sector 18, Noida',
    'Blood Test in Sector 27, Noida',
    'Blood Test in Sector 37, Noida',
    'Blood Test in Sector 44, Noida',
    'Blood Test in Sector 62, Noida',
    'Blood Test in Sector 76, Noida',
    'Blood Test in Sector 100, Noida',
    'Blood Test in Sector 137, Noida',

    // Ghaziabad
    'Blood Test in Vaishali, Ghaziabad',
    'Blood Test in Rajendra Nagar, Ghaziabad',
    'Blood Test in Kavi Nagar, Ghaziabad',
    'Blood Test in Indirapuram, Ghaziabad',
    'Blood Test in Vijay Nagar, Ghaziabad',
    'Blood Test in Crossings Republik, Ghaziabad',

    // Prayagraj
    'Blood Test in Civil Lines, Prayagraj',
    'Blood Test in George Town, Prayagraj',
    'Blood Test in Naini, Prayagraj',
    'Blood Test in Jhunsi, Prayagraj',
    'Blood Test in Phaphamau, Prayagraj',

    // Meerut
    'Blood Test in Shastri Nagar, Meerut',
    'Blood Test in Pallavpuram, Meerut',
    'Blood Test in Lisari Gate, Meerut',
    'Blood Test in Gandhi Nagar, Meerut',

    // Bareilly
    'Blood Test in Civil Lines, Bareilly',
    'Blood Test in Pilibhit Bypass, Bareilly',
    'Blood Test in Subhash Nagar, Bareilly',

    // Gorakhpur
    'Blood Test in Golghar, Gorakhpur',
    'Blood Test in Betiahata, Gorakhpur',
    'Blood Test in Mohaddipur, Gorakhpur',

    // Mathura
    'Blood Test in Krishna Nagar, Mathura',
    'Blood Test in Vrindavan Road, Mathura',

    // Jhansi
    'Blood Test in Sipri Bazaar, Jhansi',
    'Blood Test in Sadar Bazar, Jhansi',

    // Ayodhya
    'Blood Test in Naya Ghat, Ayodhya',
    'Blood Test in Faizabad Road, Ayodhya',
]

export default function BloodTestsNearYou() {
    return (
        <section className="w-full bg-[#f2f2f3] -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-8 sm:py-10 mt-4">
            {/* Heading */}
            <h2 className="text-lg sm:text-xl font-extrabold text-[#2b2d37] mb-5">
                Blood Tests Near You
            </h2>

            {/* 4-column location grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1.5">
                {LOCATIONS.map((loc) => (
                    <a
                        key={loc}
                        href="#"
                        className="flex items-center gap-1.5 text-xs sm:text-sm text-[#2b2d37] hover:text-[#194b76] hover:underline transition-colors leading-relaxed"
                    >
                        <span className="text-[#194b76] font-bold text-base leading-none flex-shrink-0">›</span>
                        {loc}
                    </a>
                ))}
            </div>
        </section>
    )
}
