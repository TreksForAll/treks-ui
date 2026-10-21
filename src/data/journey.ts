export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  category: 'founding' | 'trek' | 'camp' | 'immersion' | 'challenge';
  location?: string;
  tripId?: string;
  badge?: string;
  stats?: string;
  featured?: boolean;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: 'February 2025',
    title: 'The Seed of an Idea',
    description: "Aquaterra's 30th Anniversary Dinner — The seed of an idea was sown to bring outdoor adventure to people long left out.",
    category: 'founding',
    location: 'New Delhi',
    badge: 'Inception'
  },
  {
    year: 'March 2025',
    title: 'Treks for All is Born',
    description: 'Pankaj and Rashi met at a café — Treks for All was born because the outdoors should belong to everyone.',
    category: 'founding',
    location: 'New Delhi',
    badge: 'Foundation'
  },
  {
    year: 'April 2025',
    title: 'Founding Coalition Formed',
    description: 'Aquaterra Adventures, Metores Trust, and v-shesh joined forces as operational and inclusion partners.',
    category: 'founding',
    location: 'National Coalition',
    badge: 'Partnership'
  },
  {
    year: 'May 2025',
    title: 'Inaugural Treks to Dayara Bugyal',
    description: 'A historic milestone in inclusive adventure — 16 participants, 9 with disabilities representing 6 unique conditions standing together on the 3,810m summit. Followed by a second expedition in June!',
    category: 'trek',
    location: 'Uttarkashi, Garhwal Himalayas (3,810m)',
    tripId: '1',
    badge: 'Inaugural Summit',
    stats: '16 Trekkers · 6 Disabilities',
    featured: true
  },
  {
    year: 'September – November 2025',
    title: 'First Inclusive Camp Experiences in Atali Ganga',
    description: 'From rope courses to whitewater rafting on the Ganga, our group expanded the frontiers of inclusive river adventure.',
    category: 'camp',
    location: 'Atali Ganga, Rishikesh',
    tripId: '3',
    badge: 'River Camp',
    stats: 'Rafting & High Ropes',
    featured: true
  },
  {
    year: 'January 2026',
    title: 'B2B Inclusive Camp at Atali Ganga',
    description: 'Amazon India joined hands with Treks for All for an inclusive team offsite bringing colleagues with and without disabilities together outdoors.',
    category: 'camp',
    location: 'Rishikesh, Uttarakhand',
    badge: 'Corporate Trailblazer',
    stats: 'Amazon India ERG Offsite'
  },
  {
    year: 'March 2026',
    title: 'Nature Walk at Mangar',
    description: 'Our first sensory nature immersion experience in the ancient Aravali sacred groves of Mangar Bani.',
    category: 'immersion',
    location: 'Mangar Bani, Aravali Hills',
    badge: 'Nature Immersion'
  },
  {
    year: 'April – May 2026',
    title: 'Camp Bagi on the Tons River',
    description: 'Expanded our river footprint to the remote Tons Valley in Jaunsar-Bawar with whitewater rafting, ancient Kath-Kuni heritage at Hanol Temple, and riverside camping.',
    category: 'camp',
    location: 'Mori, Tons Valley, Uttarakhand',
    tripId: '7',
    badge: 'New Camp Location',
    stats: 'Tons Whitewater & Hanol Temple',
    featured: true
  },
  {
    year: 'May – June 2026',
    title: 'Dodital Lake Trek',
    description: 'Took inclusive trekking to high-altitude freshwater lakes at 3,024m, journeying along the sacred Assi Ganga valley to the birthplace of Lord Ganesha and Darwa Pass.',
    category: 'trek',
    location: 'Uttarkashi, Garhwal Himalayas (3,024m)',
    tripId: '2',
    badge: 'New Trek Location',
    stats: 'Alpine Lake & Darwa Pass',
    featured: true
  },
  {
    year: 'July – September 2026',
    title: 'Sham Valley Trek in Ladakh',
    description: 'Ventured into the trans-Himalayan high desert of Ladakh, opening accessible mountain trails, ancient Buddhist gompas, and apricot-orchard village homestays.',
    category: 'trek',
    location: 'Leh & Sham Valley, Ladakh (3,750m)',
    tripId: '4',
    badge: 'New Trek Location',
    stats: 'Trans-Himalayan Adventure',
    featured: true
  },
  {
    year: 'September – October 2026',
    title: 'Ranakot Ridge Trek & River Run',
    description: 'A multi-element expedition combining a scenic ridge hike along Dashrath Ka Danda to Ranakot Meadow with a thrilling whitewater descent to Kodiyala.',
    category: 'trek',
    location: 'Garhwal Himalayas & The Ganga',
    tripId: '5',
    badge: 'New Trek Location',
    stats: 'Ridge Hike + River Run'
  },
  {
    year: 'October – November 2026',
    title: 'Camp Hornbill in Corbett Landscape',
    description: 'Introduced community-based ecotourism, nature walks, and wildlife tracking in Kyari village along the forested buffer zone of Corbett National Park.',
    category: 'camp',
    location: 'Kyari, Ramnagar, Uttarakhand',
    tripId: '8',
    badge: 'New Camp Location',
    stats: 'Wildlife & Village Ecotourism'
  },
  {
    year: 'November 2026',
    title: 'Camp Sunkiya in Mukteshwar',
    description: 'High-altitude adventure camping at 2,000m with vertical tree ladders, a hike to the secret waterfall pond, and cultural exchanges with local Ghasiyari women.',
    category: 'camp',
    location: 'Mukteshwar, Kumaon Himalayas (2,000m)',
    tripId: '10',
    badge: 'New Camp Location',
    stats: 'Adventure Ropes & Ghasiyari Culture',
    featured: true
  },
  {
    year: 'December 2026',
    title: 'The Himalayan Adventure Challenge (HAC)',
    description: "India's premier 10 km adventure race (5 km rafting + 5 km hiking) opened to inclusive teams of four on the Ganga, featuring handicap scoring and team prizes.",
    category: 'challenge',
    location: 'Atali Ganga & Rishikesh, Uttarakhand',
    tripId: '11',
    badge: 'New Challenge Location',
    stats: '10 km Multi-Sport Race',
    featured: true
  }
];
