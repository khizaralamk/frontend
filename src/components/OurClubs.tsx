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
    <section id="clubs" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight mb-4 font-['Big_Shoulders_Display']">
            CLUBS WE OFFER
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
            Official merchandise from the world's most prestigious football clubs
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-12">
          {clubsData.map((club) => (
            <ClubItem key={club.id} club={club} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ClubItem({ club }: { club: any }) {
  return (
    <div className="text-center space-y-4">
      {/* Club Logo */}
      <div className="mb-4">
        <img 
          src={club.logo} 
          alt={`${club.name} logo`}
          className="w-20 h-20 object-contain mx-auto"
          onError={(e) => {
            // Fallback for broken images
            e.currentTarget.src = 'https://via.placeholder.com/80x80?text=' + club.name.charAt(0)
          }}
        />
      </div>
      
      {/* Club Name */}
      <h3 className="font-bold text-black font-['Big_Shoulders_Display'] text-lg">
        {club.name}
      </h3>
      
      {/* League */}
      <p className="text-sm text-gray-500 font-['Plus_Jakarta_Sans']">
        {club.league}
      </p>
    </div>
  )
} 