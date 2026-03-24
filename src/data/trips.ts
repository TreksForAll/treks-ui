export interface Trip {
  id: string;
  title: string;
  location: string;
  category: string;
  duration: string;
  difficulty: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  gallery?: string[];
  description: string;
  maxAltitude: string;
  groupSize: string;
  departureDates: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  faqs?: { question: string; answer: string }[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  altitude: string;
  trekTime: string;
  difficulty: string;
}

export const trips: Trip[] = [
  {
    id: '1',
    title: 'Dayara Bugyal Trek',
    location: 'Garhwal, Uttarakhand',
    category: 'treks',
    duration: '6 Days',
    difficulty: 'Moderate',
    price: '₹27,500 + 5% GST',
    rating: 4.9,
    reviews: 127,
    image: '/dayara/Dayara-Cover.webp',
    gallery: [
      '/dayara/Dayara-Bugyal-Trek-01.webp',
      '/dayara/Dayara-Bugyal-Trek-09.webp',
      '/dayara/Dayarabugyal-11.webp',
      '/dayara/Dayara-Bugyal-Trek-10.webp',
      '/dayara/Dayara-Bugyal-Trek-07.webp',
      '/dayara/Dayarabugyal-07.webp',
      '/dayara/Dayara-Bugyal-Trek-02.webp',
      '/dayara/Dayarabugyal-02.webp',
      '/dayara/Dayara-Bugyal-Trek-06.webp',
      '/dayara/Dayarabugyal-08.webp',
      '/dayara/Dayara-Bugyal-Trek-08.webp',
      '/dayara/Dayarabugyal-09.webp',
      '/dayara/Dayarabugyal-03.webp',
      '/dayara/Dayara-Bugyal-Trek-03.webp',
      '/dayara/Dayarabugyal-05.webp',
      '/dayara/Dayara-Bugyal-Trek-04.webp',
      '/dayara/Dayarabugyal-04.webp',
      '/dayara/Dayara-Bugyal-Trek-05.webp',
      '/dayara/Dayarabugyal-10.webp',
      '/dayara/Dayarabugyal-12.webp'
    ],
    description: 'This moderate trek starts from the picturesque village of Barsu in Uttarkashi. Barsu serves as the base for the Dayara Bugyal trek along with offering grand views of some 6000m plus peaks like Jaunli (6618m), Srikanth (6133m) as well as Draupadi Ka Danda I & II (5643m & 5770m). A little into the trek you can also spot the Gangotri Massif (I, II & III). Dayara Bugyal has been popularly called the most beautiful meadow in India giving stiff competition to Bedni Bugyal. For thousands of years Gujjars have come to these meadows to graze their cattle and bask in the magnificence of such Beauty. Nestled between great Himalayan peaks like Bandarpunch (6316m) & White Peak (6102m) this is perhaps one of the most beautiful meadows to trek to in India.',
    maxAltitude: '3,810m',
    groupSize: 'Max 18',
    departureDates: ['June 8 - 14, 2026', 'December 8 - 13, 2026'],
    highlights: [
      'Stunning views of Bandarpoonch (6,316m) and White Peak (6,102m)',
      'Expansive high-altitude meadows and alpine terrain',
      'Views of 6000m+ peaks: Jaunli (6,618m), Srikanth (6,133m), Draupadi Ka Danda I & II',
      'Gangotri Massif (I, II & III) views',
      'Traditional Gujjar culture and heritage',
      'Inclusive trekking with buddy support system'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Barsu - Arrival and Orientation',
        description: 'The group meets at Tapovan, Rishikesh, and travels together to Barsu Basecamp. After arrival, trekkers settle in for an overnight stay and begin building team connections. This day includes understanding individual mobility needs, pairing persons with disabilities with their buddies, and learning the basics of managing in tents and terrains.',
        accommodation: 'Basecamp',
        altitude: '2,500m',
        trekTime: 'Travel day',
        difficulty: 'Easy'
      },
      {
        day: 2,
        title: 'Barsu to Barnala Bugyal',
        description: 'After an early breakfast at Barsu Basecamp, we begin our trek toward Barnala Bugyal. The trail involves a moderate ascent, with gentle and intermittent climbs through dense forests and scenic stretches. Along the way, we pass a dilapidated Gujjar hut, a quiet reminder of the traditional nomadic lifestyle, right after a serene forest clearing. From there, a short but steady climb brings us to the beautiful Barnala Meadows—a high-altitude grassland offering sweeping views of the surrounding mountains. We camp at Barnala Bugyal, giving everyone time to rest, acclimatize, and soak in the serene alpine landscape.',
        accommodation: 'Meadow Camp',
        altitude: '3,350m',
        trekTime: '4 km trek, 30 km drive',
        difficulty: 'Moderate'
      },
      {
        day: 3,
        title: 'Barnala Bugyal to Jungle Camp',
        description: 'As we ascend, we\'re rewarded with a stunning view of Bandarpoonch Peak (6,316m)—one of the most iconic mountains in the region. The trail continues through beautiful alpine terrain, offering moments of quiet reflection and connection with nature. By late afternoon, we reach our Jungle Camp, nestled in a serene forest setting. We settle in for an overnight stay, surrounded by the peaceful sounds of the forest.',
        accommodation: 'Jungle Camp',
        altitude: '3,350m',
        trekTime: '4 km',
        difficulty: 'Moderate'
      },
      {
        day: 4,
        title: 'Jungle Camp to Dayara Bugyal Summit and Return',
        description: 'We begin early with a light meal before setting out on the summit trail. The route takes us through expansive high-altitude meadows, with a mostly gradual ascent all the way to Bakaria/Siyari Top, at an elevation of 3,810 meters. Along the way, enjoy wide-open landscapes and panoramic Himalayan views. After spending time at the summit, we begin our descent, returning to Jungle Camp by late afternoon for a well-earned rest.',
        accommodation: 'Jungle Camp',
        altitude: '3,810m',
        trekTime: '4 km',
        difficulty: 'Moderate'
      },
      {
        day: 5,
        title: 'Jungle Camp to Barsu Basecamp',
        description: 'Descend back to Barsu Basecamp through the beautiful trail, retracing our steps through alpine meadows and forests.',
        accommodation: 'Homestay',
        altitude: '1,550m',
        trekTime: '8 km trek, 30 km drive',
        difficulty: 'Easy'
      },
      {
        day: 6,
        title: 'Barsu to Rishikesh Drop Point',
        description: 'After breakfast, depart from Barsu and travel back to Rishikesh for drop-off.',
        accommodation: 'N/A',
        altitude: 'N/A',
        trekTime: 'Travel day',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'Stay and Camping as per itinerary',
      'Twin-sharing accommodation in tents and at base camp',
      'All meals during the trip, along with safe drinking water',
      'Complete trekking arrangements including experienced guides, support staff, and cooks',
      'Porterage/Offloading assistance up to 10kg per person',
      'Medical insurance (mandatory, ₹480 per trekker)'
    ],
    exclusions: [
      'Personal gear/clothing (trekking shoes, jackets, etc.)',
      'Any transfers or meals outside of itinerary - Travel from home to Rishikesh and back',
      'Bottled water',
      'Expenses due to natural events or unforeseen circumstances (landslides, weather delays)',
      'Travel/cancellation insurance'
    ]
  },
  {
    id: '2',
    title: 'Dodital Lake Trek',
    location: 'Garhwal, Uttarakhand',
    category: 'treks',
    duration: '6 Days',
    difficulty: 'Moderate',
    price: '₹27,500 + 5% GST',
    rating: 4.8,
    reviews: 89,
    image: '/dodital/Dodital-Lake-Feature-Main.webp',
    gallery: [
      '/dodital/Dodital-Lake-Feature-Main.webp',
      '/dodital/Dodital-Lake-Trek-01.webp',
      '/dodital/Dodital-Lake-Trek-01-copy.webp',
      '/dodital/Dodital-Lake-Trek-02.webp',
      '/dodital/Dodital-Lake-Trek-03.webp',
      '/dodital/Dodital-Lake-Trek-04.webp',
      '/dodital/Dodital-Lake-Trek-05.webp',
      '/dodital/Dodital-Lake-Trek-06.webp',
      '/dodital/Dodital-Lake-Trek-07.webp',
      '/dodital/Dodital-Lake-Trek-08.webp',
      '/dodital/Dodital-Lake-Trek-09.webp',
      '/dodital/Dodital-Lake-Trek-10.webp',
      '/dodital/Dodital-Lake-Trek-12.webp',
      '/dodital/Dodital-Lake-Trek-13.webp',
      '/dodital/Dodital-Trek-02.webp',
      '/dodital/Dodital-Trek-03.webp',
      '/dodital/Dodital-Trek-05.webp',
      '/dodital/Dodital-Trek-06.webp',
      '/dodital/Dodital-Trek-07.webp',
      '/dodital/Dodital-Trek-08.webp'
    ],
    description: 'Dodital is said to be the birth place of Lord Ganesh, and is also the source of the Assi Ganga, a tributary to the Bhagirathi. It is named after the rare Dodi (Himalayan Trout) that can be found in this lake. A moderate trek which starts from the Bhagirathi valley, goes up to the lake of Dodital (wrapped in perfect wilderness) to the alpine meadows and tops out at Darwa Pass (4150m). Traditionally this trek has been continuously used by the Gujjars, the herdsmen who get their buffalos to the high meadows every summer and occasionally by the pilgrims/sadhus walking between Gangotri and Yamunotri.',
    maxAltitude: '4,150m',
    groupSize: 'Max 18',
    departureDates: ['To Be Announced'],
    highlights: [
      'Pristine Dodital Lake at 3,310m - birthplace of Lord Ganesha',
      'Darwa Pass summit at 4,150m with panoramic Himalayan views',
      'Views of Bandarpunch and Swargarohini ranges',
      'Ancient oak, pine, and rhododendron forests',
      'Rare Himalayan Trout (Dodi) sightings',
      'Traditional Gujjar culture and mountain villages',
      'Cascading waterfalls and alpine wildflower meadows',
      'Inclusive trekking with buddy support system'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Uttarkashi - Arrival and Orientation',
        description: 'The group meets at Tapovan, Rishikesh, and travels together to Uttarkashi Basecamp. After arrival, trekkers settle in for an overnight stay and begin building team connections. This day includes understanding individual mobility needs, pairing persons with disabilities with their buddies, and learning the basics of managing in tents and terrains.',
        accommodation: 'Basecamp',
        altitude: '1,150m',
        trekTime: '200 km drive',
        difficulty: 'Easy'
      },
      {
        day: 2,
        title: 'Uttarkashi to Bevra',
        description: 'After a refreshing breakfast at Uttarkashi, we begin our trek toward Bevra. The trail starts gently, weaving through thick oak and rhododendron forests, with the soothing sound of the Assi Ganga river echoing in the background. Along the way, we pass ancient Gujjar shelters and small forest clearings that offer perfect rest spots. The trail is moderate but steady, ideal for acclimatizing while enjoying the natural beauty. Upon reaching Bevra, a quaint Himalayan hamlet surrounded by terraced fields and traditional homes, we settle in to experience the simplicity of mountain life and the warmth of the local community.',
        accommodation: 'Camp',
        altitude: '2,400m',
        trekTime: '8 km trek',
        difficulty: 'Moderate'
      },
      {
        day: 3,
        title: 'Bevra to Dodital',
        description: 'After an early morning breakfast at Bevra, we begin our 7-hour trek to Dodital Base (3,310m) with packed lunch. The trail ascends gently through a stunning mix of rhododendron and oak forests. As we gain altitude, occasional clearings offer glimpses of snow-covered peaks like the majestic Bandarpunch. The peaceful alpine terrain invites moments of reflection and connection with nature. By late afternoon, we reach the serene Dodital Lake, nestled deep in the forest, where we settle in at our lakeside camp surrounded by the calm of the mountains.',
        accommodation: 'Lakeside Camp',
        altitude: '3,310m',
        trekTime: '14 km trek',
        difficulty: 'Moderate'
      },
      {
        day: 4,
        title: 'Dodital to Darwa Pass and Return',
        description: 'We begin early with packed breakfast for a rewarding hike to Darwa Pass (4,150m), a 5 km uphill climb that takes about 2-3 hours. The trail follows the feeder stream from Dodital, winding through dense birch forests that slowly give way to open alpine meadows bursting with vibrant Himalayan wildflowers. As we reach Darwa Top, we are greeted with awe-inspiring panoramic views of the Bandarpunch and Swargarohini ranges—an unforgettable sight at the roof of the trail. After soaking in the breathtaking scenery, we descend back to Dodital in time for a hearty hot lunch at the lakeside camp. Alternatively, spend this day sipping tea, catching up with local tales and walking around the lake sighting birds and trout.',
        accommodation: 'Lakeside Camp',
        altitude: '4,150m (summit)',
        trekTime: '10 km trek',
        difficulty: 'Moderate to Challenging'
      },
      {
        day: 5,
        title: 'Dodital to Bevra',
        description: 'Descend back to Bevra, retracing our steps through the beautiful forests and enjoying different perspectives of the landscapes we passed earlier.',
        accommodation: 'Camp',
        altitude: '2,400m',
        trekTime: '22 km trek',
        difficulty: 'Moderate'
      },
      {
        day: 6,
        title: 'Uttarkashi to Rishikesh Drop Point',
        description: 'After breakfast, depart from Uttarkashi and travel back to Rishikesh for drop-off.',
        accommodation: 'N/A',
        altitude: 'N/A',
        trekTime: '200 km drive',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'Stay and Camping as per itinerary',
      'Twin-sharing accommodation in tents and at base camp',
      'All meals during the trip, along with safe drinking water',
      'Complete trekking arrangements including experienced guides, support staff, and cooks',
      'Porterage/Offloading assistance up to 10kg per person',
      'Medical insurance (mandatory, ₹480 per trekker)'
    ],
    exclusions: [
      'Personal gear/clothing (trekking shoes, jackets, etc.)',
      'Any transfers or meals outside of itinerary - Travel from home to Rishikesh and back',
      'Bottled water',
      'Expenses due to natural events or unforeseen circumstances (landslides, weather delays)',
      'Travel/cancellation insurance'
    ]
  },
  {
    id: '3',
    title: 'Camp Aquaterra',
    location: 'Rishikesh, Uttarakhand',
    category: 'camps',
    duration: '3 Days, 2 Nights',
    difficulty: 'Easy',
    price: '₹10,000 + 5% GST',
    rating: 4.9,
    reviews: 203,
    image: '/camping/Camp-Aquaterra-02.webp',
    gallery: [
      '/camping/Camp-Aquaterra-New-11.webp',
      '/camping/Camp-Aquaterra-New-12.webp',
      '/camping/Camp-Aquaterra-New-01.webp',
      '/camping/Camp-Aquaterra-New-02.webp',
      '/camping/Camp-Aquaterra-New-03.webp',
      '/camping/Camp-Aquaterra-New-04.webp',
      '/camping/Camp-Aquaterra-New-05.webp',
      '/camping/Camp-Aquaterra-New-06.webp',
      '/camping/Camp-Aquaterra-New-07.webp',
      '/camping/Camp-Aquaterra-New-08.webp',
      '/camping/Camp-Aquaterra-New-09.webp',
      '/camping/Camp-Aquaterra-New-10.webp',
      '/camping/Camp-Aquaterra-02.webp',
      '/camping/Camp-Aquaterra-01.webp',
      '/camping/Camp-Aquaterra-07.webp',
      '/camping/Camp-Aquaterra-06.webp',
      '/camping/Camp-Aquaterra-05.webp',
      '/camping/Camp-Aquaterra-04.webp',
      '/camping/Camp-Aquaterra-03.webp'
    ],
    description: 'This is a 3-day, 2-night riverside stay in the Upper Ganga Valley, nestled in the Himalayan foothills. Guests can enjoy rafting, kayaking, hiking, yoga, wall climbing, and more — all with no compromise on safety, dignity, or comfort. Located just 30 km upstream from Rishikesh, this experience combines the thrill of adventure with thoughtful care in a stunning Himalayan setting, serving as a perfect preparatory experience before venturing into a proper trek.',
    maxAltitude: '600m',
    groupSize: 'Up to 60',
    departureDates: ['January 24 - 26, 2026', 'February 13 - 15, 2026', 'December 25 - 27, 2026 (HAC-PwD)'],
    highlights: [
      'Whitewater rafting on the Ganga with adaptive support',
      'Kayaking sessions on the river',
      'Wall climbing and rope course activities',
      'Morning yoga sessions by the river',
      'Riverside hiking and beach games',
      'Fully accessible deluxe tent accommodation',
      'Inclusive adventure with dignity and safety'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & River Adventure',
        description: 'Arrive at Camp Aquaterra and settle into your deluxe tents before lunch. Post-lunch, head out for a short hike to the Ganga and enjoy riverside tea while taking in the scenic views. Wrap up the day with an exciting kayaking session on the river. Itinerary is subject to change basis weather conditions and other external factors.',
        accommodation: 'Deluxe Tent',
        altitude: '600m',
        trekTime: '',
        difficulty: 'Easy'
      },
      {
        day: 2,
        title: 'Yoga, Rafting & Climbing',
        description: 'Start the day with a refreshing morning yoga session. Experience the thrill of whitewater rafting on the Ganga. Take on a fun and challenging wall climbing, high rope or low rope activity to build strength and confidence. End the day with evening reflections and delicious dinner at camp. Itinerary is subject to change basis weather conditions and other external factors.',
        accommodation: 'Deluxe Tent',
        altitude: '600m',
        trekTime: '',
        difficulty: 'Moderate'
      },
      {
        day: 3,
        title: 'Fun, Food & Farewell',
        description: 'Start the day with beach games by the riverside. Take a supervised dip in the Ganga to relax and refresh. Enjoy a hot lunch before packing up and depart from Camp Aquaterra with memories of joy, nature, and adventure. Itinerary is subject to change basis weather conditions and other external factors.',
        accommodation: 'Day Activities',
        altitude: '600m',
        trekTime: '',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'Deluxe tent accommodation (twin-sharing with beds, mattresses, quilts)',
      'All meals: breakfast, lunch, dinner, tea/coffee, snacks',
      'Drinking water and soft drinks',
      'All adventure activities: rafting, kayaking, wall climbing, rope courses, yoga',
      'Professional guide support and orientation',
      'Safety equipment for all activities',
      'Accessible common WC units and washing facilities',
      'First aid and emergency support'
    ],
    exclusions: [
      'Travel from home to camp and back',
      'Stay in Rishikesh before/after the trip',
      'Bottled water',
      'Personal equipment and gear',
      'Tips for guides and staff',
      'Emergency expenses',
      'Travel insurance'
    ],
    faqs: [
      {
        question: 'As a Person with Disability, what are the activities I can participate in at the camp?',
        answer: 'With the right adaptations, trained guides, and safety protocols, activities like kayaking, rafting, trekking, and rock climbing can be enjoyed by many. Participation will depend on individual factors such as severity, prior experience, agility, and comfort in the outdoors.\n\nOur team will have detailed conversations with you to understand your needs and abilities, after which activity suitability will be determined. At Treks for All, safety is our top priority. If safety concerns arise, the final decision will rest with the trained Aquaterra guides. We prioritise inclusion, but never at the cost of safety.'
      },
      {
        question: 'How will the weather be at the camp?',
        answer: 'September - Highs around - 30 °C, lows near 17 °C\nNovember – Highs around - 24 °C, lows near 11 °C\nDecember - Highs around - 19 °C, lows near 5 °C\nJanuary - Highs around - 18 °C, lows near 4°C\n\nWhile these are the average temperatures, we request everyone to check the weather forecast before packing.'
      },
      {
        question: 'What meals/cuisines will be provided at the camp?',
        answer: 'We take pride in the excellent cuisine served at the camp, with an emphasis on wholesome, hygienic, and delicious meals, offering a variety to cater to different dietary needs. Fresh fruits and vegetables are sourced locally.\n\nBREAKFAST - Continental & Indian: Corn flakes/porridge, eggs, toast/pancakes/french toast, paratha, butter, jam, baked beans/french fries, fruits, tea/coffee.\n\nLUNCH - Indian: Normally vegetarian consisting of Dal/Rajma, two vegetables, rice (fried/plain), chapati, papad, salad,& fruit\n\nDINNER - A special meal with variations of Barbecue - Indian, Continental or Chinese cuisine complete with dessert.'
      },
      {
        question: 'What safety measures are in place for outdoor activities?',
        answer: 'We take safety as seriously as the thrill.\n\nRafting: Top-grade rafts from NRS (USA), mandatory helmets and life jackets, rescue and first-aid gear on every raft, and clear safety briefings before you hit the water.\n\nKayaking, Climbing, Rope Courses & Hiking: Led by trained instructors with thoroughly checked gear. All routes are risk-assessed, designed to be low-impact, and include a buddy system for support. Accessible modifications ensure everyone can join in safely.'
      },
      {
        question: 'Are there any things we need to be mindful of?',
        answer: 'We will happily refuse intoxicated participants without any refunds, for their own safety. We recommend avoiding alcohol, drugs, or any intoxicants for at least 6 hours before an adventure outing.\n\nNo loud music or bright lights are allowed. The camp is located in a Reserved Forest Area, and we encourage guests to appreciate the joy of being very close to nature.\n\nOur ground staff may refuse service if payments are not cleared upon arrival.'
      }
    ]
  },
  {
    id: '4',
    title: 'Sham Valley Trek',
    location: 'Ladakh, Jammu & Kashmir',
    category: 'treks',
    duration: '6 Days',
    difficulty: 'Moderate',
    price: '₹40,500 + 5% GST',
    rating: 4.8,
    reviews: 0,
    image: '/sham-valley/sham-valley-cover.webp',
    gallery: [
      '/sham-valley/sham-valley-trek-01.webp',
      '/sham-valley/sham-valley-trek-02.webp',
      '/sham-valley/sham-valley-trek-03.webp',
      '/sham-valley/sham-valley-trek-04.webp',
      '/sham-valley/sham-valley-trek-05.webp',
      '/sham-valley/sham-valley-trek-06.webp',
      '/sham-valley/sham-valley-trek-07.webp',
      '/sham-valley/sham-valley-trek-08.webp',
      '/sham-valley/sham-valley-trek-09.webp',
      '/sham-valley/sham-valley-trek-10.webp'
    ],
    description: 'The Sham Valley Trek is probably the one most ideal for beginners and families in Ladakh. Even so, it is still one of the most enjoyable as one comes across villages, and views on the way that give insights into Ladakhi village life. One will notice how a stream of glacial water has led to an oasis of life amidst barren wilderness, not to mention the smiles on the faces of people living there. Weather: Pleasant days (around 21-25°C / 70-77°F) and cool nights (around 7-10°C / 45-50°F).',
    maxAltitude: '3,700m',
    groupSize: 'Max 18',
    departureDates: ['July 3 - 8, 2026'],
    highlights: [
      'Ancient Buddhist monasteries - Likir, Alchi',
      'Traditional Ladakhi villages with rich cultural background',
      'Stunning mountain passes - Phobe La, Chagatse La, Tsermangchan La, Meptak La',
      'Ideal for beginners and families',
      'Insights into Ladakhi village life',
      'Pleasant weather with cool nights',
      'Inclusive trekking with buddy support system'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Leh Airport – Hotel',
        description: 'Board the early morning flight from Delhi to Leh. It takes a little more than an hour to get to Leh, the capital of Ladakh. On a clear day the flight offers excellent views of the mighty Himalayas. Arrive at the hotel for welcome drinks followed by breakfast. Spend the rest of the day at leisure & acclimatise.',
        accommodation: 'Hotel',
        altitude: '3,500m',
        trekTime: 'Rest day',
        difficulty: 'Easy'
      },
      {
        day: 2,
        title: 'Leh',
        description: 'A day for acclimatization. Optional visit to the Leh palace and the Shey, Thikse and Hemis gompas. Last minute shopping in the Leh market.',
        accommodation: 'Hotel',
        altitude: '3,500m',
        trekTime: 'Rest day',
        difficulty: 'Easy'
      },
      {
        day: 3,
        title: 'Leh – Likir – Yangthang',
        description: 'It\'s about 1.5 hrs drive to Likir from where we start the walk which goes parallel to a motorable road that ascends to Phobe La (3580m). From the pass we leave the road to take a descending track leading to a gorge which finally takes us back on the road. At this point one can view Sumdo village with its few houses. We leave the road again to climb up to Chagatse La (3630m) after crossing the stream on a wooden bridge. One starts seeing the Yangthang village where we camp for the night.',
        accommodation: 'Camp',
        altitude: '3,700m',
        trekTime: '5-6 hours',
        difficulty: 'Moderate'
      },
      {
        day: 4,
        title: 'Yangthang – Hemis Shukpachan',
        description: 'It\'s a relatively short walk to Hemis Shukpachen village. We cross Tsermangchan La (3720m) to get to the village, which has its own beauty with a rich cultural background, myths and mysteries. There is a bunch of juniper trees on one side, which is not disturbed by the villagers for a superstitious belief they attach with it. There are a couple of guest houses and homestays in the village.',
        accommodation: 'Guest House / Homestay',
        altitude: '3,600m',
        trekTime: '3-4 hours',
        difficulty: 'Moderate'
      },
      {
        day: 5,
        title: 'Hemis Shukpachan – Ang – Leh',
        description: 'Today, we cross a pass called Meptak La (3980m) after which we reach the Ang village. We board the waiting vehicles to be driven to Leh. We visit Alchi monastery on our way back to Leh.',
        accommodation: 'Hotel',
        altitude: '3,500m',
        trekTime: '4-5 hours trek + drive',
        difficulty: 'Moderate'
      },
      {
        day: 6,
        title: 'Leh Hotel – Leh Airport',
        description: 'Early morning transfer to Airport for Leh – Delhi flight. Trip Ends!',
        accommodation: 'N/A',
        altitude: 'N/A',
        trekTime: 'Transfer day',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'All transfers as per the itinerary (Leh airport to Leh airport)',
      'All arrangements for staying and camping while on trip',
      'Accommodation on twin sharing basis in tents / hotel',
      'All meals as mentioned in itinerary & safe drinking water',
      'All trip arrangements with India\'s most experienced guiding team, camp staff and cooks',
      'Porterage upto 15kg/person',
      'A guide for all monastery sightseeing Shey, Thikse, Hemis gompa',
      'Peak fee / sanctuary fee / royalty / permits where applicable'
    ],
    exclusions: [
      'Sleeping bag',
      'Flights not included in the above-mentioned cost',
      'Any transfers or meals outside of itinerary',
      'Bottled water',
      'Items of personal clothing',
      'Expenses of any personal nature (laundry / phone calls / alcohol / cigarettes / insurance / camera fee / etc.)',
      'Any expense incurred due to force of nature such as landslides, bad weather or reasons beyond our control',
      'Tips & gratuities (we recommend 5-10% of your trip cost- to be distributed among the team) – personal choice',
      'Travel & cancellation insurance'
    ]
  },
  {
    id: '5',
    title: 'Ranakot Trek',
    location: 'Uttarakhand',
    category: 'treks',
    duration: '4 Days',
    difficulty: 'Moderate',
    price: '₹22,000 + 5% GST',
    rating: 4.7,
    reviews: 0,
    image: '/ranakot/ranakot.webp',
    description: 'This trek is a great introductory experience to the Himalaya for participants across a wide range of abilities, especially for those looking to step into the outdoors without the complexity of organising a long wilderness expedition. Set in a relatively secluded part of the lower Himalaya, it offers a rewarding short getaway that is thoughtfully designed with inclusion and support at its core. The journey begins with a gradual ascent to the watershed divide (approximately 8,000 ft) between the Upper Ganga and its western tributary, the Bhagirathi. Throughout the trek, activities are supported by trained guides, clear safety protocols, and a choice-based approach, enabling participants to engage at levels that align with their abilities, comfort, and energy. Weather: Daytime temperatures typically range from a high of around 24°C to 29°C (75°F to 84°F). Nighttime temperatures are cooler, generally falling to a low of approximately 16°C to 20°C (61°F to 68°F).',
    maxAltitude: '2,400m',
    groupSize: 'Max 20',
    departureDates: ['September 24 - 27, 2026'],
    highlights: [
      'Gradual ascent to watershed divide at approximately 8,000 ft',
      'Views of Upper Ganga and Bhagirathi valleys',
      'Beautiful Pine and Rhododendron forests',
      'Visit to Pau ki Devi temple (Shakti Peeth)',
      'Camping under the stars at Ranakot meadow',
      'Inclusive trekking with trained guides and support'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pau ki Devi to Dashrath ka Danda',
        description: 'After breakfast at Camp Aquaterra, drive an hour (30km) to Pau ki Devi to begin the trek. Pauki Devi temple is one of the Shakti peeth, dedicated to Goddess Sati and every year many devotees come to this temple. This temple is known as Vageshwari Devi temple. It is believed that the right foot of the Goddess Sati fell at this location. Trek 7 kms to our camp for the day.',
        accommodation: 'Tents',
        altitude: '2,400m',
        trekTime: '7 km',
        difficulty: 'Moderate'
      },
      {
        day: 2,
        title: 'Dashrath ka Danda to Ranakot',
        description: 'Early climb to Dashrath ka Danda to take in wonderful views. After breakfast, trek to Ranakot through beautiful Pine & Rhododendron forest which is a completely different feeling. By the afternoon you will reach the Ranakot Meadow and spend the night in the camp. Enjoy the camp under the stars at Ranakot.',
        accommodation: 'Tents',
        altitude: '2,200m',
        trekTime: 'Half day trek',
        difficulty: 'Moderate'
      },
      {
        day: 3,
        title: 'Ranakot Exploration',
        description: 'Go for side hikes through the jungle, opportunities to spot lots of fauna at dusk and dawn. Enjoy the camp under the stars at Ranakot.',
        accommodation: 'Tents',
        altitude: '2,200m',
        trekTime: 'Side hikes',
        difficulty: 'Easy'
      },
      {
        day: 4,
        title: 'Ranakot to Devprayag to Delhi',
        description: 'Descend to Laseer and board the buses to drive back.',
        accommodation: 'N/A',
        altitude: 'N/A',
        trekTime: 'Descent + drive',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'All arrangements for staying and camping while on trip',
      'Accommodation on twin sharing basis in tents',
      'All meals as mentioned in itinerary & safe drinking water',
      'All trip arrangements with experienced guiding team, camp staff and cooks',
      'Peak fee / sanctuary fee / royalty / permits where applicable'
    ],
    exclusions: [
      'Sleeping bag',
      'Any transfers or meals outside of itinerary',
      'Bottled water',
      'Items of personal clothing',
      'Expenses of any personal nature (laundry / phone calls / alcohol / cigarettes / insurance / camera fee / etc.)',
      'Any expense incurred due to force of nature such as landslides, bad weather or reasons beyond our control',
      'Tips & gratuities (we recommend 5-10% of your trip cost - to be distributed among the team)',
      'Travel & cancellation insurance'
    ]
  },
  {
    id: '7',
    title: 'Camp Bagi (Tons River)',
    location: 'Tons Valley, Uttarakhand',
    category: 'camps',
    duration: '4 Days',
    difficulty: 'Easy',
    price: '₹15,000 + 5% GST',
    rating: 4.7,
    reviews: 0,
    image: '/camping/camp-bagi-1.webp',
    gallery: [
      '/camping/camp-bagi-1.webp',
      '/camping/camp-bagi-2.webp',
      '/camping/camp-bagi-02.webp',
      '/camping/camp-bagi-3.webp',
      '/camping/camp-bagi-4.webp',
      '/camping/camp-bagi-6.webp',
      '/camping/camp-bagi-8.webp',
      '/camping/camp-bagi-10.webp',
      '/camping/camp-bagi-11.webp',
      '/camping/camp-bagi-12.webp',
      '/camping/camp-bagi-13.webp',
      '/camping/camp-bagi-15.webp'
    ],
    description: 'You can be assured for a real camping experience living in tents on a lovely beach front amidst lush green Himalayan forests. Our whitewater river rafting summer camp runs from mid April till early May in the western part of Uttarakhand, Jaunsar Bawar region on the banks of the Tons river. Only 410 kms from Delhi, it offers an escape from 4 days to a week or two, combined with river rafting, hikes & overnight treks in the hills make it a memorable family getaway from the summer heat. Located 3500 ft above sea level, this area is rich in every type of western Himalayan flora and fauna, densely forested with deodar, pine, alpine oak, birch, chestnut, rhododendron and jamun. The Tons river (the biggest tributary of the Yamuna with its source in the snowfields of the 20,720 ft high mountain, Bandarpunch) is a small volume, Class 4 river which offers an excellent adrenaline rush and adds to the excitement of being in the outdoors. Weather: In April, days are pleasant (15°C–25°C) and nights are cool (8°C–15°C). In May, days are warm but comfortable (20°C–30°C) and nights are mild (10°C–18°C).',
    maxAltitude: '1,150m',
    groupSize: 'Max 20',
    departureDates: ['April 16 - 19, 2026', 'April 24 - 27, 2026', 'May 7 - 10, 2026'],
    highlights: [
      'Real camping on lovely beach front amidst Himalayan forests',
      'Whitewater river rafting on Class 4 Tons River',
      'Day hike from Sandhra to Mora village',
      'Visit to ancient Hanol temple built by the Pandavas',
      'See Asia\'s tallest pine tree',
      'Rich flora: deodar, pine, oak, birch, rhododendron'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Settling In',
        description: 'Depart the previous night for Tons (breakfast en route). Arrive by lunch, followed by a welcome drink, camp briefing, and tent allocation. Afternoon hike to Lunagad Pool. Evening at camp includes ice-breaker games, team-building activities, and informal group bonding, followed by a campfire dinner and overnight stay.',
        accommodation: 'Tents',
        altitude: '1,150m',
        trekTime: 'Short hike',
        difficulty: 'Easy'
      },
      {
        day: 2,
        title: 'Rafting & Culture',
        description: 'Morning tea/coffee, followed by breakfast. Drive to Lunagad and raft down to Khunigad, focusing on team coordination and trust on the river. Return for lunch. Post lunch, visit Hanol Temple. Evening at camp includes light group games, storytelling, or music around the fire, followed by dinner and overnight stay.',
        accommodation: 'Tents',
        altitude: '1,150m',
        trekTime: 'Rafting',
        difficulty: 'Easy'
      },
      {
        day: 3,
        title: 'Forest Trek & Nature Immersion',
        description: 'After breakfast, drive to the trek start point with packed lunch. Trek through pine forests for 5–6 hours to a waterfall, with stream crossings and scenic breaks. Return to camp by evening. Night includes stargazing, shared stories, or a quiet nature reflection session, followed by dinner and overnight stay.',
        accommodation: 'Tents',
        altitude: '1,150m',
        trekTime: '5–6 hours',
        difficulty: 'Easy'
      },
      {
        day: 4,
        title: 'Rafting & Closing Circle',
        description: 'After breakfast, repeat the Lunagad–Khunigad rafting stretch. Return to camp for lunch. Before departure, gather for a closing reflection circle, sharing feedback, highlights, learnings, and memories from the experience, then depart for Delhi.',
        accommodation: 'N/A',
        altitude: 'N/A',
        trekTime: 'Rafting + Travel',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'Stay in tents (twin-sharing)',
      'All meals and drinking water',
      'Guide support',
      'Orientation'
    ],
    exclusions: [
      'Travel from home to camp and back',
      'Bottled water',
      'Emergency expenses'
    ]
  }
];

// Extended trip data for 2026
export const trips2026: Trip[] = [
  {
    id: '101',
    title: 'Everest Base Camp Classic',
    location: 'Nepal',
    category: 'treks',
    duration: '16 Days',
    difficulty: 'Challenging',
    price: '₹85,000',
    rating: 4.9,
    reviews: 234,
    image: 'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg',
    description: 'The ultimate Himalayan adventure to the base of the world\'s highest peak, through Sherpa villages and pristine mountain landscapes.',
    maxAltitude: '5,364m',
    groupSize: '10-14',
    departureDates: ['March 15 - 30, 2026', 'April 10 - 25, 2026', 'October 5 - 20, 2026', 'November 2 - 17, 2026'],
    highlights: [
      'Everest Base Camp at 5,364m',
      'Sherpa culture in Namche Bazaar',
      'Tengboche Monastery visit',
      'Khumbu Icefall views',
      'Sagarmatha National Park',
      'Traditional tea house stays'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Fly to Lukla',
        description: 'Scenic mountain flight to Lukla and trek to Phakding.',
        accommodation: 'Tea House',
        altitude: '2,652m',
        trekTime: '3-4 hours',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'All meals during the trek',
      'Tea house accommodation',
      'Professional trek leader and Sherpa guides',
      'All permits and park fees',
      'Domestic flights Kathmandu-Lukla-Kathmandu',
      'Airport transfers'
    ],
    exclusions: [
      'International flights',
      'Nepal visa fees',
      'Personal equipment',
      'Tips for guides and staff',
      'Travel insurance'
    ]
  },
  {
    id: '102',
    title: 'Annapurna Circuit Complete',
    location: 'Nepal',
    category: 'treks',
    duration: '21 Days',
    difficulty: 'Challenging',
    price: '₹75,000',
    rating: 4.8,
    reviews: 189,
    image: 'https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg',
    description: 'Complete the legendary Annapurna Circuit, crossing the Thorong La Pass and experiencing diverse landscapes from subtropical to arctic.',
    maxAltitude: '5,416m',
    groupSize: '8-12',
    departureDates: ['February 20 - March 12, 2026', 'September 15 - October 5, 2026', 'October 20 - November 9, 2026'],
    highlights: [
      'Thorong La Pass crossing',
      'Diverse climate zones',
      'Traditional mountain villages',
      'Annapurna and Dhaulagiri views',
      'Muktinath temple visit',
      'Hot springs at Tatopani'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Drive to Besisahar',
        description: 'Drive from Kathmandu to Besisahar, start of the circuit.',
        accommodation: 'Tea House',
        altitude: '760m',
        trekTime: '8 hours drive',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'All meals during the trek',
      'Tea house accommodation',
      'Professional guides and porters',
      'All permits and fees',
      'Transportation',
      'Emergency evacuation support'
    ],
    exclusions: [
      'International flights',
      'Nepal visa fees',
      'Personal equipment',
      'Tips and personal expenses',
      'Travel insurance'
    ]
  },
  {
    id: '103',
    title: 'Spiti Valley Winter Expedition',
    location: 'Himachal Pradesh, India',
    category: 'treks',
    duration: '10 Days',
    difficulty: 'Advanced',
    price: '₹55,000',
    rating: 4.7,
    reviews: 78,
    image: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg',
    description: 'Experience the raw beauty of Spiti Valley in winter, with snow-covered landscapes and unique cold desert adventures.',
    maxAltitude: '4,270m',
    groupSize: '6-10',
    departureDates: ['January 8 - 17, 2026', 'February 5 - 14, 2026', 'December 15 - 24, 2026'],
    highlights: [
      'Frozen waterfalls and ice formations',
      'Key Monastery in snow',
      'Traditional Spitian winter life',
      'Snow leopard tracking',
      'Astronomical observations',
      'Winter photography workshops'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Drive to Kalpa',
        description: 'Scenic drive through winter landscapes to Kalpa.',
        accommodation: 'Hotel',
        altitude: '2,960m',
        trekTime: '8 hours drive',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'All meals and accommodation',
      'Transportation in suitable vehicles',
      'Professional guides and permits',
      'Winter gear support',
      'Photography guidance',
      'Emergency support'
    ],
    exclusions: [
      'Personal winter clothing',
      'Camera equipment',
      'Personal expenses',
      'Travel insurance',
      'Tips for staff'
    ]
  },
  {
    id: '104',
    title: 'Brahmaputra River Safari',
    location: 'Assam, India',
    category: 'rivers',
    duration: '8 Days',
    difficulty: 'Moderate',
    price: '₹48,000',
    rating: 4.6,
    reviews: 145,
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    description: 'Explore the mighty Brahmaputra River through Assam\'s wildlife sanctuaries and tea gardens.',
    maxAltitude: '150m',
    groupSize: '10-16',
    departureDates: ['November 12 - 19, 2026', 'December 3 - 10, 2026', 'January 15 - 22, 2026'],
    highlights: [
      'Kaziranga National Park',
      'River dolphins sighting',
      'Tea plantation visits',
      'Traditional Assamese culture',
      'River island exploration',
      'Wildlife photography'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Guwahati',
        description: 'Arrive in Guwahati and transfer to river lodge.',
        accommodation: 'River Lodge',
        altitude: '55m',
        trekTime: '2 hours transfer',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'All meals and accommodation',
      'River cruises and safaris',
      'Professional naturalist guides',
      'All permits and park fees',
      'Transportation',
      'Cultural programs'
    ],
    exclusions: [
      'Flights to/from Guwahati',
      'Personal expenses',
      'Camera equipment',
      'Tips for staff',
      'Travel insurance'
    ]
  }
];