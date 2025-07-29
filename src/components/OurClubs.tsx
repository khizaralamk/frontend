import React from 'react'

// Club data with logos
const clubsData = [
  {
    id: 1,
    name: "FC Barcelona",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    league: "La Liga"
  },
  {
    id: 2,
    name: "Real Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    league: "La Liga"
  },
  {
    id: 3,
    name: "Manchester City",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    league: "Premier League"
  },
  {
    id: 4,
    name: "Liverpool",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    league: "Premier League"
  },
  {
    id: 5,
    name: "Bayern Munich",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    league: "Bundesliga"
  },
  {
    id: 6,
    name: "Paris Saint-Germain",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    league: "Ligue 1"
  },
  {
    id: 7,
    name: "Chelsea",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    league: "Premier League"
  },
  {
    id: 8,
    name: "Arsenal",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    league: "Premier League"
  },
  {
    id: 9,
    name: "Manchester United",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    league: "Premier League"
  },
  {
    id: 10,
    name: "Borussia Dortmund",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    league: "Bundesliga"
  },
  {
    id: 11,
    name: "AC Milan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/AC_Milan_logo.svg",
    league: "Serie A"
  },
  {
    id: 12,
    name: "Inter Milan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
    league: "Serie A"
  },
  {
    id: 13,
    name: "Juventus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_Logo_2017_icon.svg",
    league: "Serie A"
  },
  {
    id: 14,
    name: "Atletico Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
    league: "La Liga"
  },
  {
    id: 15,
    name: "Sevilla",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Sevilla_FC_logo.svg",
    league: "La Liga"
  },
  {
    id: 16,
    name: "Tottenham Hotspur",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
    league: "Premier League"
  }
]

export default function OurClubs() {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
            Our Partner Clubs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Official merchandise from the world's most prestigious football clubs
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {clubsData.map((club) => (
            <div 
              key={club.id} 
              className="group cursor-pointer"
            >
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 hover:shadow-md">
                {/* Club Logo */}
                <div className="relative mb-3">
                  <img 
                    src={club.logo} 
                    alt={`${club.name} logo`}
                    className="w-full h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback for broken images
                      e.currentTarget.src = 'https://via.placeholder.com/80x80?text=' + club.name.charAt(0)
                    }}
                  />
                </div>
                
                {/* Club Name */}
                <h3 className="text-sm font-semibold text-gray-900 text-center line-clamp-2 group-hover:text-black transition-colors duration-200">
                  {club.name}
                </h3>
                
                {/* League */}
                <p className="text-xs text-gray-500 text-center mt-1">
                  {club.league}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Can't find your favorite club? We're constantly adding new partnerships!
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm">
            Request a Club
          </button>
        </div>
      </div>
    </section>
  )
} 