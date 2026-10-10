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
  videoId?: string;
  description: string;
  maxAltitude: string;
  groupSize: string;
  departureDates: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  faqs?: { question: string; answer: string; category?: string }[];
  packingList?: string[];
  weather?: MonthlyWeather[];
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

export interface MonthlyWeather {
  month: string;
  low: number;
  high: number;
  conditions: string;
}

const campEssentialsPackingList = [
  'Comfortable clothing suitable for outdoor activities and changing mountain weather',
  'Warm layer / light jacket, especially for mornings and evenings',
  'Comfortable, closed-toe shoes with good grip',
  'Rain jacket / poncho, particularly during the wetter months',
  'Personal medicines and essential medical information',
  'Personal toiletries and reusable water bottle',
  'Sunscreen, sunglasses and cap/hat',
  'Torch/headlamp and spare batteries',
  'Any personal assistive device or support equipment required',
  'Small daypack for activities'
];

const dayaraBugyalFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is “Treks for All – Dayara Bugyal”?",
    answer: "Treks for All is a unique partnership of three expert groups v-shesh, Aquaterra Adventures, and Metores Trust who have come together to make the Himalayas accessible, safe, and joyful for all.\n\nDayara Bugyal is a six-day inclusive Himalayan trek specially crafted for persons with disabilities and their buddies. This transformative experience is rooted in accessibility, dignity, safety, and the shared joy of exploring nature together."
  },
  {
    category: "General Overview",
    question: "Where is Dayara Bugyal located?",
    answer: "Dayara Bugyal is situated in Uttarkashi district, Uttarakhand, surrounded by lush alpine meadows and offering panoramic views of Himalayan peaks including Bandarpoonch (6,316m), Black Peak (6,102m), and Jaonli (6,618m)."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the itinerary and route?",
    answer: "• Day 1: Meet at Rishikesh, drive to Barsu Basecamp\n• Day 2: Trek 4km to Barnala Bugyal\n• Day 3: Trek 4km to Jungle Camp\n• Day 4: Summit Dayara Top (3,810m) and return\n• Day 5: Trek + drive back to Barsu\n• Day 6: Drive from Barsu to Rishikesh\n\nNote: The exact itinerary may be adjusted based on weather, group composition, and accessibility requirements."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the total distance and elevation gain?",
    answer: "Total trekking distance: approximately 21 km, with 4,688 ft (1,429 m) of elevation gain — ascending from 7,142 ft at base to 11,830 ft (3,810 m) at Dayara Top."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the difficulty level of the trek?",
    answer: "Moderate. Most sections feature gradual inclines through pine and oak forests, though summit day requires more stamina. Pacing is flexible and fully supported."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "Is prior trekking experience required?",
    answer: "Not at all! Good general fitness is helpful, but many of our participants are first-time trekkers. One-on-one buddy support and guides are provided throughout."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "Can I speak with someone before joining?",
    answer: "For queries, email us at admin@treksforall.in or contact Sakshi (8279624879) / Vaishnavi (8527752157).\n\nIf you would like to speak with someone who has a specific disability or a buddy who participated in a previous trek, we would be happy to coordinate that conversation."
  },
  {
    category: "Weather & Safety",
    question: "What are the weather conditions?",
    answer: "Mountain weather can be unpredictable — rain, mist, or fog may appear suddenly. Plans may adjust for safety.\n• Day Temperature: 20–30°C\n• Night Temperature: 0–5°C\n\nPlease be prepared for lower temperatures due to wind chill. We recommend checking the weather forecast before packing."
  },
  {
    category: "Weather & Safety",
    question: "What safety measures are in place?",
    answer: "Experienced guides, comprehensive medical kits, regular acclimatization breaks, continuous weather monitoring, and clear emergency evacuation plans."
  },
  {
    category: "Registration & Payment",
    question: "How do I register?",
    answer: "Register using the online link. A team member will guide you through the preparation and next steps. For queries, contact Sakshi (8279624879) or Vaishnavi (8527752157)."
  },
  {
    category: "Registration & Payment",
    question: "What documents are needed?",
    answer: "• Filled registration form\n• Valid photo ID (Aadhaar / Passport)\n• Doctor-signed medical fitness certificate\n• Medication and allergy details\n• Medical insurance (mandatory)"
  },
  {
    category: "Registration & Payment",
    question: "What is the cost and what is included?",
    answer: "Cost: ₹27,500 + 5% GST\n\nIncluded:\n• Stay in tents/homestays (twin-sharing)\n• All meals and drinking water – from Rishikesh pick-up to Rishikesh drop-off\n• Round trip transport from Rishikesh and back\n• Guide and buddy support\n• Offloading (porterage of your main duffel bag)\n• Orientation, trail guides, safety equipment\n• Mandatory insurance (approx. ₹480)\n\nNot Included:\n• Travel from home to Rishikesh and back\n• Stay in Rishikesh before the start and after the end of the trip\n• Personal trekking gear (jackets, shoes)\n• Bottled water\n• Travel delays or emergency expenses\n• Extended travel insurance"
  },
  {
    category: "Registration & Payment",
    question: "Is registration automatically confirmed?",
    answer: "No. You will receive a separate confirmation email after our team reviews your application to ensure personalized readiness and safety."
  },
  {
    category: "Registration & Payment",
    question: "What are the payment options?",
    answer: "We accept online payments only by online bank transfer or credit card (convenience fee applies). If your transaction fails, contact admin@treksforall.in. We will respond within 24 hours. Full payment is required to secure your spot."
  },
  {
    category: "Registration & Payment",
    question: "What is the cancellation policy?",
    answer: "If you cancel your booking, you will receive a credit note for the paid amount. This credit can be redeemed for any future Treks for All adventure within the validity period."
  },
  {
    category: "Packing & Gear",
    question: "What should I pack?",
    answer: "A detailed checklist will be shared as part of your trip briefing. It includes:\n• Waterproof trekking shoes with sturdy ankle support\n• Backpack with rain cover\n• Warm thermal layers, gloves, sun cap, sunglasses\n• Headlamp, rain gear/poncho, trekking poles\n• Water bottles / hydration pack\n• Toiletries & reusable plastic bags\n• Required personal medication (labeled clearly)"
  },
  {
    category: "Packing & Gear",
    question: "Where can I buy gear from?",
    answer: "Decathlon is a preferred option amongst our fellow trekkers."
  },
  {
    category: "Packing & Gear",
    question: "Can I rent gear?",
    answer: "You can check out rental services like Rento if you prefer not to purchase everything. These are recommendations to make outdoor gear accessible; we do not have commissions with vendors."
  },
  {
    category: "Packing & Gear",
    question: "Do I need to carry all my luggage myself on the trail?",
    answer: "You will divide your luggage into two parts:\n\n1. Main Duffel Bag: Transported separately by horse/porter and available at the campsite each day. Porterage is included in your trek cost. Pack items not needed during the day (sleeping bag, extra clothes, toiletries). Only soft duffels — no hard suitcases or trolleys.\n\n2. Daypack: Carried with you while trekking. It should contain trail essentials: water bottle/hydration pack, energy snacks, rain jacket, warm fleece layer, sunscreen, sunglasses, cap, and basic medication."
  },
  {
    category: "Packing & Gear",
    question: "Anything I need to be mindful of while packing?",
    answer: "1. Disability-specific needs: Pack any specific items related to your disability (medicines, gear, UV protection like an umbrella for albinism) and inform the team in advance.\n2. Avoid overpacking: Stick to the packing list; excess luggage exceeds pack-animal limits.\n3. Layering: Pack layered, weather-appropriate clothing in earth tones.\n4. Meals: Nutritious meals are provided; avoid carrying large snack packs.\n5. Waste Management: We practice Leave No Trace — bring reusable containers, water bottles, and a personal waste bag.\n6. Minimal Electronics: Power banks should be fully charged beforehand as trail electricity is negligible."
  },
  {
    category: "Camp Life & Assistance",
    question: "Will someone help me set up and get oriented at the camp?",
    answer: "You do not have to set up your own tents. You will be guided to your tent, given a camp layout overview, and supported until you feel confident and comfortable."
  },
  {
    category: "Camp Life & Assistance",
    question: "What if I need help during the trek?",
    answer: "Buddies, guides, and team members will always be nearby to offer assistance when needed. Their role is to support you — not hover — enabling your independence and autonomy. You will never be alone on the trail, but will always have the space to experience the trek with confidence, dignity, and safety."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Can I join if I use a prosthetic limb, crutches, or calipers? (Locomotor Disability)",
    answer: "Absolutely! Please share the type of condition, mobility aid(s) used, and assistance preferences.\n\nSupport Offered:\n• Bus travel without wearing prosthetic limb or caliper if preferred for long journeys\n• Support while boarding and deboarding vehicles\n• Privacy and comfort when taking trail breaks to remove or adjust aids\n• Help carrying crutches so they are available whenever needed at camp\n• Knowledgeable guide and empathetic buddy alongside you on the trail\n\nPreparation Tips: Build stamina with daily walks and stairs. Check and service mobility aids before the trek. Carry anti-rash cream to prevent friction irritation. Break into well-fitting shoes beforehand."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Is this trek suitable for blind or low-vision trekkers? (Visual Impairment)",
    answer: "Absolutely! Please share your vision level, mobility aids used, and need for sighted guidance on trail and at camp.\n\nSupport Offered:\n• Sensitive guide providing clear verbal instructions for navigating trails and campsite\n• Help with camp layout orientation\n• Support in packing, unpacking, and organizing belongings\n• Dedicated buddy to ensure safety and comfort\n\nPreparation Tips: Practice cane mobility on outdoor terrain (steps, slopes, loose gravel). Carry UV-protective sunglasses to reduce irritation from mountain dust and glare. Assign fixed spots in your backpack for easy access."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Is this trek suitable for trekkers with hearing impairment? (Deaf / Hard of Hearing)",
    answer: "Absolutely! Please share your hearing level, communication preferences, and any assistive tech used.\n\nSupport Offered:\n• Guides and buddies experienced in sign language, lip reading, or written communication\n• Continuous visual check-ins to ensure no signals are missed\n• Dedicated buddy throughout the trail\n\nPreparation Tips: Carry extra batteries and a waterproof power backup for hearing aids or cochlear implants. Stay within the visual line of the group. Carry a whistle and a waterproof pouch for hearing devices."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Is this trek suitable for neurodivergent participants?",
    answer: "Absolutely! Please share diagnosis details, sensitivities (noise, crowds, animals), and communication preferences.\n\nSupport Offered:\n• Knowledgeable guide trained to support neurodivergent needs\n• Clear step-by-step advance briefings for trails and campsite\n• Sensory adjustments and quiet spaces to reduce overload\n• Empathetic buddy for reassurance throughout\n\nPreparation Tips: Build stamina with light exercises and daily walks. Set a daily routine in advance to ease into the trek with structure and confidence."
  },
  {
    category: "Buddies & Guides",
    question: "What are the prerequisites for being a buddy?",
    answer: "• Physical Fitness: Preferably has prior trekking experience, able to walk long distances on uneven terrain, and has stamina to remain alert and helpful.\n• Empathetic & Calm Demeanor: Patient, good listener, stays calm in unpredictable situations, and creates a safe, non-judgmental space for their trekking partner."
  },
  {
    category: "Buddies & Guides",
    question: "Is past experience of working with Persons with Disabilities mandatory for a buddy?",
    answer: "While basic knowledge of disability is a plus, it is not mandatory. What matters most is openness to attending our orientation session, willingness to learn your partner’s specific preferences, and adapting assistance respectfully."
  },
  {
    category: "Buddies & Guides",
    question: "What should I be mindful of as a buddy?",
    answer: "1. Being an enabler and not a caregiver: Offer assistance when needed, but avoid over-involvement to support independence.\n2. Respect privacy and personal boundaries.\n3. Create space for open communication and active listening.\n4. Facilitate inclusive group interactions.\n5. Celebrate achievements equally regardless of pace or method."
  },
  {
    category: "Buddies & Guides",
    question: "What is my role as a buddy on the trail and at the campsite?",
    answer: "On the trail: Walk beside or slightly ahead, hold hands or guide over difficult sections when requested, respect their natural pace, monitor for fatigue, and communicate weather or trail changes.\n\nAt camp: Assist with organizing tent space if requested, support daily routines (hydration, meal serving, navigating camp safely at night), and assist with adaptive gear."
  },
  {
    category: "Buddies & Guides",
    question: "Can I speak to a buddy to gain more understanding?",
    answer: "Yes, absolutely! We would be delighted to connect you with a buddy from a previous trek upon request. You can also view buddy experiences through our trail reels. Reach out to admin@treksforall.in to coordinate."
  },
  {
    category: "Buddies & Guides",
    question: "Are the guides trained in disability inclusion?",
    answer: "Yes! They have assisted people with diverse needs across numerous expeditions. They are trained in inclusive language, disability etiquette, descriptive terrain narration, and respecting all paces and styles."
  }
];

const doditalLakeFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is “Treks for All – Dodital Lake Trek”?",
    answer: "Treks for All is a unique partnership of three expert groups v-shesh, Aquaterra Adventures, and Metores Trust who have come together to make the Himalayas accessible, safe, and joyful for all.\n\nDodital is an inclusive Himalayan trek specially crafted for persons with disabilities and their buddies. Carrying forward our learnings from expeditions to Dayara Bugyal, this journey leads to the sacred emerald lake of Dodital and Darwa Pass, rooted in accessibility, dignity, and shared adventure."
  },
  {
    category: "General Overview",
    question: "Where is Dodital located?",
    answer: "Dodital is located in Uttarkashi district, Uttarakhand, surrounded by dense forests of oak, pine, and rhododendron, with panoramic views of Himalayan peaks including Swargarohini, Bandarpoonch, Draupadi Ka Danda, Deonli, and Srikantha."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the itinerary and route?",
    answer: "• Day 1: Meet at Rishikesh, drive to Kuflon base\n• Day 2: Kuflon to Bevra, Trek 8 km\n• Day 3: Bevra to Dodital Lake, Trek 14 km\n• Day 4: Dodital to Darwa Pass (4,150m) and return, Trek 10 km\n• Day 5: Dodital to Kuflon, Trek 22 km\n• Day 6: Drive from Kuflon back to Rishikesh\n\nNote: The exact itinerary and pacing are adjusted based on weather, trail conditions, and group needs."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the total distance and elevation gain?",
    answer: "The trek covers a total distance of approximately 54 km over 6 days, with an elevation gain of up to 3,024 m (9,921 ft), culminating at Darwa Pass at 4,150 m (13,619 ft)."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the difficulty level of the trek?",
    answer: "Moderate to moderately challenging. Most sections follow gradual inclines, forested paths, and gentle river crossings, while the ascent to Darwa Pass requires good stamina and acclimatization."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "Is prior trekking experience required?",
    answer: "Not at all! Overall fitness is important, but many participants are first-timers. Empathetic buddy support and trained guides are provided throughout."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "Can I speak with someone before joining?",
    answer: "For queries, email us at admin@treksforall.in or call Sakshi (8279624879) / Vaishnavi (8527752157). We are happy to connect you with past participants or buddies with similar experiences."
  },
  {
    category: "Weather & Safety",
    question: "What are the weather conditions?",
    answer: "Dodital weather can be unpredictable — sudden rain, fog, or cold winds may appear without warning.\n• Day Temperature: 12–20°C\n• Night Temperature: 0–5°C (can drop further near Darwa Pass)\n\nPlease prepare for colder conditions due to wind chill, especially at high altitudes."
  },
  {
    category: "Weather & Safety",
    question: "What safety measures are in place?",
    answer: "Experienced wilderness guides, medical and oxygen kits, regular acclimatization breaks, continuous weather monitoring, and clear evacuation protocols."
  },
  {
    category: "Registration & Payment",
    question: "How do I register?",
    answer: "Register using the online registration link. Our team will guide you through the next steps. For queries, contact Sakshi (8279624879) or Vaishnavi (8527752157)."
  },
  {
    category: "Registration & Payment",
    question: "What documents are needed?",
    answer: "• Filled registration form\n• Valid photo ID (Aadhaar / Passport)\n• Doctor-signed fitness certificate\n• Medication and allergy details\n• Medical insurance (mandatory)"
  },
  {
    category: "Registration & Payment",
    question: "What is the cost and what is included?",
    answer: "Cost: ₹27,500 + 5% GST\n\nIncluded:\n• Stay in tents/homestays (twin-sharing)\n• All meals and drinking water from Rishikesh pick-up to Rishikesh drop-off\n• Round trip transport from Rishikesh and back\n• Guide and buddy support\n• Offloading (porterage of your main luggage)\n• Orientation, trail guides, safety equipment\n• Mandatory insurance (approx. ₹480)\n\nNot Included:\n• Travel from home to Rishikesh and back\n• Stay in Rishikesh before and after the trek\n• Personal trekking gear (jackets, shoes)\n• Bottled water\n• Travel delays or emergency expenses\n• Extended travel insurance"
  },
  {
    category: "Registration & Payment",
    question: "Is registration automatically confirmed?",
    answer: "No. You will receive a separate confirmation email after our safety and accessibility review."
  },
  {
    category: "Registration & Payment",
    question: "What are the payment and cancellation policies?",
    answer: "We accept online payments only. Full payment is required to secure your spot.\n\nCancellation Policy: If you cancel your booking, you receive a credit note for the paid amount, redeemable for any future Treks for All adventure within the validity period."
  },
  {
    category: "Packing & Gear",
    question: "What should I pack?",
    answer: "A detailed checklist will be shared during trip briefing. Key items include:\n• Trekking shoes with ankle support\n• Backpack with rain cover\n• Warm thermal layers, fleece, down jacket, gloves, sun cap, sunglasses\n• Headlamp, rain gear/poncho, trekking poles\n• Water bottles / hydration pack\n• Toiletries & reusable plastic bags\n• Required medication (clearly labeled)"
  },
  {
    category: "Packing & Gear",
    question: "Where can I buy or rent gear?",
    answer: "Decathlon is a preferred option for purchases. You can also rent gear through services like Rento. These are recommendations without commissions."
  },
  {
    category: "Packing & Gear",
    question: "Do I need to carry all my luggage myself on the trail?",
    answer: "You will divide your luggage into two parts:\n\n1. Offload Bag: Transported separately and available at the campsite each day (included in trek cost). Soft duffels only.\n\n2. Daypack: Carried with you while trekking, containing trail essentials: water bottle, energy snacks, rain jacket, warm fleece layer, sunscreen, sunglasses, cap, and basic medication."
  },
  {
    category: "Packing & Gear",
    question: "Anything I need to be mindful of while packing?",
    answer: "• Disability-specific needs: Pack any specific assistive equipment, extra medicines, or sun protection gear, and inform the team in advance.\n• Avoid overpacking: Stick to the curated packing list.\n• Leave No Trace: Choose reusable containers and carry out all non-biodegradable waste.\n• Minimal Electronics: Power banks should be fully charged before departure as trail electricity is negligible."
  },
  {
    category: "Camp Life & Assistance",
    question: "Will someone help me set up and get oriented at the camp?",
    answer: "You do not have to set up your own tents. You will be guided to your tent, given a layout overview, and supported until you feel confident."
  },
  {
    category: "Camp Life & Assistance",
    question: "What if I need help during the trek?",
    answer: "Buddies, guides, and team members will always be nearby to offer assistance when needed, focusing on enabling your independence and autonomy with dignity and safety."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Can I join if I use a prosthetic limb, crutches, or calipers? (Locomotor Disability)",
    answer: "Absolutely! Please share condition details, mobility aids used, and support needs.\n\nSupport Offered:\n• Bus travel without wearing prosthetic limb or caliper if preferred for long journeys\n• Support while boarding and deboarding vehicles\n• Privacy and comfort when taking trail breaks to remove or adjust aids\n• Help carrying crutches so they are available whenever needed at camp\n• Trained guide and empathetic buddy alongside you on the trail\n\nPreparation Tips: Build stamina with daily walks and stairs. Check and service mobility aids before the trek. Carry anti-rash cream. Break into well-fitting shoes beforehand."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Is this trek suitable for blind or low-vision trekkers? (Visual Impairment)",
    answer: "Absolutely! Please share vision level, mobility aids used, and need for sighted guidance on trail and at camp.\n\nSupport Offered:\n• Sensitive guide providing clear verbal instructions for navigating trails and campsite\n• Help with orientation when needed\n• Support in packing, unpacking, and organizing belongings\n• A buddy to ensure safety and comfort throughout the trek\n\nPreparation Tips: Practice cane mobility on outdoor terrain. Carry UV-protective sunglasses to reduce irritation from dust and light. Organize belongings in fixed spots."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Is this trek suitable for trekkers with hearing impairment? (Deaf / Hard of Hearing)",
    answer: "Absolutely! Please share hearing level, preferred communication method, and assistive technology used.\n\nSupport Offered:\n• Sensitive guides and buddies using sign language, lip reading, or written communication\n• Continuous visual check-ins so you never miss cues or briefings\n• Dedicated buddy throughout the trek\n\nPreparation Tips: Bring extra batteries and a waterproof power backup for hearing aids or cochlear implants. Stay within the visual line of the group. Carry a whistle and a waterproof pouch."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Is this trek suitable for neurodivergent participants?",
    answer: "Absolutely! Please share diagnosis details, sensitivities (noise, crowds, animals), and communication preferences.\n\nSupport Offered:\n• Sensitive guide trained to support neurodivergent needs\n• Clear step-by-step advance verbal instructions for trails and campsite\n• Sensory adjustments and quiet spaces to reduce overload\n• Empathetic buddy for reassurance throughout\n\nPreparation Tips: Build stamina with light exercises and daily walks. Set a daily routine in advance to ease into the trek with structure and confidence."
  },
  {
    category: "Buddies & Guides",
    question: "What are the prerequisites for being a buddy?",
    answer: "• Physical Fitness: Preferably has prior trekking experience, able to walk long distances on uneven terrain, and has stamina to remain alert and helpful.\n• Empathetic & Calm Demeanor: Patient, good listener, stays calm in unpredictable situations, and creates a safe, non-judgmental space for their partner."
  },
  {
    category: "Buddies & Guides",
    question: "Is past experience of working with Persons with Disabilities mandatory for a buddy?",
    answer: "While basic knowledge of disability is a plus, it is not mandatory. What matters most is openness to attending our orientation session, willingness to learn your partner’s specific preferences, and adapting assistance respectfully."
  },
  {
    category: "Buddies & Guides",
    question: "What should I be mindful of as a buddy?",
    answer: "1. Being an enabler and not a caregiver: Offer assistance when needed, but avoid over-involvement to support independence.\n2. Respect privacy and personal boundaries.\n3. Create space for open communication and active listening.\n4. Facilitate inclusive group interactions.\n5. Celebrate achievements equally regardless of pace or method."
  },
  {
    category: "Buddies & Guides",
    question: "What is my role as a buddy on the trail and at the campsite?",
    answer: "On the trail: Walk beside or slightly ahead, hold hands or guide over difficult sections when requested, respect their natural pace, monitor for fatigue, and communicate weather or trail changes.\n\nAt camp: Assist with organizing tent space if requested, support daily routines (hydration, meal serving, navigating camp safely at night), and assist with adaptive gear."
  },
  {
    category: "Buddies & Guides",
    question: "Can I speak to a buddy to gain more understanding?",
    answer: "Yes, absolutely! We would be delighted to connect you with a buddy from a previous trek upon request. You can also view buddy experiences through our trail reels. Reach out to admin@treksforall.in to coordinate."
  },
  {
    category: "Buddies & Guides",
    question: "Are the guides trained in disability inclusion?",
    answer: "Yes! They have assisted people with diverse needs across numerous expeditions. They are trained in inclusive language, disability etiquette, descriptive terrain narration, and respecting all paces and styles."
  }
];

const shamValleyFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is “Treks for All – Sham Valley”?",
    answer: "Treks for All is a unique partnership of three expert groups v-shesh, Aquaterra Adventures, and Metores Trust who have come together to make the Himalayas accessible, safe, and joyful for all.\n\nThe Sham Valley Trek is a 5–6 day inclusive trek in Ladakh, often referred to as the “Baby Trek of Ladakh.” Unlike high-altitude technical treks, Sham Valley is known for its gentle gradients, short walking distances, and well-marked village-to-village trails. This makes it particularly suitable for first-time trekkers, persons with disabilities, and those seeking a culturally immersive Himalayan experience.\n\nThe trek passes through traditional Ladakhi villages such as Likir, Yangthang, Hemis Shukpachan, and Temisgam, offering homestay-based accommodation, strong community interaction, and gradual acclimatization.\n\nA new offering this year, Sham Valley has been added to our itinerary after a number of travelers requested a signature trip to Ladakh!"
  },
  {
    category: "General Overview",
    question: "Where is Sham Valley located?",
    answer: "Sham Valley lies in the lower Ladakh region, west of Leh. The trek route connects remote villages through mountain passes, barley fields, apricot orchards, and monasteries, while staying at relatively lower altitudes compared to other Ladakh treks."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the itinerary and route?",
    answer: "• Day 1: Arrival in Leh – Rest and acclimatization\n• Day 2: Drive from Leh to Likir / Yangthang – short acclimatization walk\n• Day 3: Trek from Yangthang to Hemis Shukpachan (via Tsermangchen La)\n• Day 4: Trek from Hemis Shukpachan to Temisgam (via Mebtak La)\n• Day 5: Trek from Temisgam to Ang / drive back to Leh\n• Day 6: Departure from Leh\n\nNote: The exact itinerary may be adjusted based on weather, group composition, and accessibility requirements."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the total distance and elevation gain?",
    answer: "Total trekking distance: approximately 25–28 km spread over multiple days. Altitude range: 3,700m is the highest point."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the difficulty level of the trek?",
    answer: "Moderate. The Sham Valley Trek is probably the one most ideal for beginners, families, and persons with disabilities in Ladakh due to gentle gradients and shorter walking distances."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "Is prior trekking experience required?",
    answer: "Not at all! Overall fitness is important though. Many participants are first-timers. Comprehensive support is provided throughout."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "Can I speak with someone before joining?",
    answer: "For queries, email us at admin@treksforall.in or call Sakshi (8279624879) / Vaishnavi (8527752157).\n\nIf you would like to speak with someone who has a specific disability or a buddy who participated in a previous trek, we would be happy to arrange that. Just let us know your preference, and we’ll help coordinate the conversation."
  },
  {
    category: "Weather & Safety",
    question: "What are the weather conditions?",
    answer: "• Ladakh has a cold desert climate.\n• Day temperatures: 15–25°C. Night temperatures: 5–10°C (can drop further).\n• The weather is generally dry but can be windy. Sudden temperature drops are common after sunset.\n• We request guests to check the weather forecast before packing."
  },
  {
    category: "Weather & Safety",
    question: "What safety measures are in place?",
    answer: "Experienced guides, medical kits with oxygen, dedicated acclimatization days in Leh, continuous weather monitoring, and clear evacuation plans."
  },
  {
    category: "Registration & Payment",
    question: "How do I register?",
    answer: "Register using the online link. A team member will guide you through the next steps. For queries, contact Sakshi (8279624879) or Vaishnavi (8527752157)."
  },
  {
    category: "Registration & Payment",
    question: "What documents are needed?",
    answer: "• Filled registration form\n• Valid photo ID (Aadhaar / Passport)\n• Doctor-signed fitness certificate\n• Medication and allergy details\n• Medical insurance (mandatory)"
  },
  {
    category: "Registration & Payment",
    question: "What is the cost and what is included?",
    answer: "Cost: ₹40,500 + 5% GST\n\nIncluded:\n• Stay in tents/homestays (twin-sharing)\n• Round trip – Leh to Leh\n• Guide and buddy support\n• Offloading (porterage of your main luggage)\n• Orientation, trail guides, safety equipment\n• Mandatory insurance (approx. ₹480)\n\nNot Included:\n• Travel from home to Leh and back\n• Stay in Leh before the start and after the end of the trip\n• Personal trekking gear (jackets, shoes)\n• Bottled water\n• Travel delays or emergency expenses\n• Extended travel insurance"
  },
  {
    category: "Registration & Payment",
    question: "Is registration automatically confirmed?",
    answer: "No. You will receive a separate confirmation email after review by our safety and inclusion team."
  },
  {
    category: "Registration & Payment",
    question: "What are the payment options?",
    answer: "We accept online payments only by online bank transfer or credit card (convenience fee applies). If your transaction fails, please contact us at admin@treksforall.in. We will respond within 24 hours. Full payment is required to secure your spot."
  },
  {
    category: "Registration & Payment",
    question: "What is the cancellation policy?",
    answer: "If you cancel your booking, you will receive a credit note for the paid amount. This credit can be redeemed for any future Treks for All adventure within the validity period."
  },
  {
    category: "Packing & Gear",
    question: "What should I pack?",
    answer: "A detailed checklist will be shared as part of trip briefing. It includes:\n• Trekking shoes (waterproof with ankle support recommended)\n• Backpack with rain cover\n• Warm layers, gloves, sun cap, sunglasses\n• Headlamp, rain gear, trekking poles\n• Water bottles / hydration pack\n• Toiletries & reusable plastic bags\n• Required medication (clearly labeled)"
  },
  {
    category: "Packing & Gear",
    question: "Where can I buy gear from?",
    answer: "Decathlon is a preferred option amongst our fellow trekkers."
  },
  {
    category: "Packing & Gear",
    question: "Can I rent gear?",
    answer: "You can check out Rento if you’d prefer not to purchase everything. Please note: These are only recommendations. We do not have any tie-ups or commissions with any vendors."
  },
  {
    category: "Packing & Gear",
    question: "Do I need to carry all my luggage myself on the trail?",
    answer: "You will need to divide your luggage into two parts:\n\n1. Main Duffel Bag: Transported separately by horse/porter and available at the campsite each day (included in trek cost). Pack items you will not need during the day (sleeping bag, extra clothes, toiletries). Soft duffels only — no hard suitcases or trolleys.\n\n2. Daypack: Carried with you while trekking. It should contain trail essentials: water bottle/hydration pack, snacks/energy bars, rain jacket/poncho, warm fleece layer, sunscreen, sunglasses, cap, and basic medication."
  },
  {
    category: "Packing & Gear",
    question: "Anything I need to be mindful of while packing?",
    answer: "1. Disability-specific needs: Pack any specific items related to your disability (medicines, gear, UV umbrella for albinism) and inform the team in advance.\n2. Avoid overpacking: Stick to the packing list; excess baggage exceeds mule/porter limits.\n3. Clothing: Layered, weather-appropriate clothing in earth tones.\n4. Meals: Nutritious meals are provided; avoid large snack packs.\n5. Waste Management: We practice Leave No Trace — carry out all non-biodegradable waste. Bring a refillable water bottle.\n6. Minimal Electronics: Power banks should be fully charged beforehand as village electricity is limited."
  },
  {
    category: "Camp Life & Assistance",
    question: "Will someone help me set up and get oriented at the camp?",
    answer: "You do not have to set up your own tents. You will be guided to your tent or homestay room, given a layout overview, and supported until you feel confident."
  },
  {
    category: "Camp Life & Assistance",
    question: "What if I need help during the trek?",
    answer: "Buddies, guides, and team members will always be nearby to offer assistance when needed. Their role is to support you — not to hover — focusing on enabling your independence and autonomy. You’ll never be alone on the trail, but will always have the space to experience the trek with confidence, dignity, and safety."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Can I join if I use a prosthetic limb, crutches, or calipers? (Locomotor Disability)",
    answer: "Absolutely! Please share condition details, mobility aids used, and support needs.\n\nSupport Offered:\n• Option to travel without wearing prosthetic limb or caliper during long vehicle drives for comfort\n• Support while boarding and deboarding vehicles\n• Privacy and comfort when taking trail breaks to remove or adjust aids\n• Help carrying crutches so they are available whenever needed at camp\n• Trained guide and empathetic buddy alongside you on the trail\n\nPreparation Tips: Build stamina with daily walks and stairs. Check and service mobility aids before the trek. Carry anti-rash cream. Break into well-fitting shoes beforehand."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Is this trek suitable for blind or low-vision trekkers? (Visual Impairment)",
    answer: "Absolutely! Please share vision level, mobility aids used, and need for sighted guidance on trail and at camp.\n\nSupport Offered:\n• Sensitive guide providing clear verbal instructions for navigating trails and campsite\n• Help with camp layout orientation\n• Support in packing, unpacking, and organizing belongings\n• Dedicated buddy to ensure safety and comfort\n\nPreparation Tips: Practice cane mobility on outdoor terrain (steps, slopes, loose gravel). Carry UV-protective sunglasses to reduce irritation from mountain dust and glare. Assign fixed spots in your backpack for easy access."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Is this trek suitable for trekkers with hearing impairment? (Deaf / Hard of Hearing)",
    answer: "Absolutely! Please share hearing level, preferred communication method, and assistive technology used.\n\nSupport Offered:\n• Sensitive guides and buddies using sign language, lip reading, or written communication\n• Continuous visual check-ins so you never miss cues or briefings\n• Dedicated buddy throughout the trek\n\nPreparation Tips: Bring extra batteries and a waterproof power backup for hearing aids or cochlear implants. Stay within the visual line of the group. Carry a whistle and a waterproof pouch."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Is this trek suitable for neurodivergent participants?",
    answer: "Absolutely! Please share diagnosis details, sensitivities (noise, crowds, animals), and communication preferences.\n\nSupport Offered:\n• Sensitive guide trained to support neurodivergent needs\n• Clear step-by-step advance verbal instructions for trails and campsite\n• Sensory adjustments and quiet spaces to reduce overload\n• Empathetic buddy for reassurance throughout\n\nPreparation Tips: Build stamina with light exercises and daily walks. Set a daily routine in advance to ease into the trek with structure and confidence."
  },
  {
    category: "Buddies & Guides",
    question: "What are the prerequisites for being a buddy?",
    answer: "• Physical Fitness: Preferably has prior trekking experience, able to walk long distances on uneven terrain, and has stamina to remain alert and helpful.\n• Empathetic & Calm Demeanor: Patient, good listener, stays calm in unpredictable situations, and creates a safe, non-judgmental space for their partner."
  },
  {
    category: "Buddies & Guides",
    question: "Is past experience of working with Persons with Disabilities mandatory for a buddy?",
    answer: "While basic knowledge of disability is a plus, it is not mandatory. What matters most is openness to attending our orientation session, willingness to learn your partner’s specific preferences, and adapting assistance respectfully."
  },
  {
    category: "Buddies & Guides",
    question: "What should I be mindful of as a buddy?",
    answer: "1. Being an enabler and not a caregiver: Offer assistance when needed, but avoid over-involvement to support independence.\n2. Respect privacy and personal boundaries.\n3. Create space for open communication and active listening.\n4. Facilitate inclusive group interactions.\n5. Celebrate achievements equally regardless of pace or method."
  },
  {
    category: "Buddies & Guides",
    question: "What is my role as a buddy on the trail and at the campsite?",
    answer: "On the trail: Walk beside or slightly ahead, hold hands or guide over difficult sections when requested, respect their natural pace, monitor for fatigue, and communicate weather or trail changes.\n\nAt camp: Assist with organizing tent space if requested, support daily routines (hydration, meal serving, navigating camp safely at night), and assist with adaptive gear."
  },
  {
    category: "Buddies & Guides",
    question: "Can I speak to a buddy to gain more understanding?",
    answer: "Yes, absolutely! We would be delighted to connect you with a buddy from a previous trek upon request. You can also view buddy experiences through our trail reels. Reach out to admin@treksforall.in to coordinate."
  },
  {
    category: "Buddies & Guides",
    question: "Are the guides trained in disability inclusion?",
    answer: "Yes! They have assisted people with diverse needs across numerous expeditions. They are trained in inclusive language, disability etiquette, descriptive terrain narration, and respecting all paces and styles."
  }
];

const campAquaterraFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is “Treks for All – Camp Aquaterra”?",
    answer: "Camp Aquaterra (Atali Ganga) is our signature inclusive riverside adventure camp nestled in the forested foothills of the Himalayas above Rishikesh. Operated in partnership with Aquaterra Adventures and v-shesh, the camp combines the excitement of white-water rafting, kayaking, rock climbing, and low/high ropes courses with accessible facilities, comfortable deluxe tents, and an inclusive, community-driven spirit."
  },
  {
    category: "General Overview",
    question: "Where is Camp Aquaterra located?",
    answer: "Camp Aquaterra is located on the Badrinath Road in the upper Ganga valley near Rishikesh, Uttarakhand. Set within a tranquil reserved forest area overlooking the turquoise waters of the Ganga, it provides an immersive wilderness experience while remaining accessible by road."
  },
  {
    category: "Activities & Inclusion",
    question: "As a Person with Disability, what activities can I participate in at the camp?",
    answer: "With the right adaptations, trained guides, and safety protocols, activities like kayaking, rafting, trekking, and rock climbing can be enjoyed by many. Participation will depend on individual factors such as severity, prior experience, agility, and comfort in the outdoors.\n\nOur team will have detailed conversations with you to understand your needs and abilities, after which activity suitability will be determined. At Treks for All, safety is our top priority. If safety concerns arise, the final decision will rest with the trained Aquaterra guides. We prioritise inclusion, but never at the cost of safety."
  },
  {
    category: "Activities & Inclusion",
    question: "How accessible is Camp Aquaterra for wheelchair users and persons with locomotor disabilities?",
    answer: "Camp Aquaterra has ramped access to key common areas including the central dining pavilion. We feature accessible deluxe tents and western-style bathroom facilities equipped with grab bars where needed. While certain natural slopes and riverbank terrain are uneven, our team and dedicated buddies assist with transfers and navigation so that you can participate safely and with dignity."
  },
  {
    category: "Activities & Inclusion",
    question: "Can participants who are blind, low-vision, Deaf, or hard of hearing participate in river rafting and camp activities?",
    answer: "Yes, absolutely! For blind and low-vision guests, guides and buddies provide descriptive verbal cues and hands-on tactile guidance before and during rafting and ropes activities. For Deaf and hard-of-hearing guests, our team uses visual signaling, sign language, and written briefings to ensure clear communication and safety on the water."
  },
  {
    category: "Activities & Inclusion",
    question: "Is Camp Aquaterra suitable for neurodivergent participants?",
    answer: "Yes! We maintain predictable daily schedules, advance activity walkthroughs, and sensory-friendly quiet zones around camp. Participants are paired with empathetic buddies who provide reassurance and help prevent sensory overload."
  },
  {
    category: "Weather & Safety",
    question: "How will the weather be at the camp?",
    answer: "September: Highs around 30°C, lows near 17°C\nNovember: Highs around 24°C, lows near 11°C\nDecember: Highs around 19°C, lows near 5°C\nJanuary: Highs around 18°C, lows near 4°C\n\nWhile these are average temperatures, evenings by the river can feel noticeably cooler. We advise everyone to check the local weather forecast before packing."
  },
  {
    category: "Weather & Safety",
    question: "What safety measures are in place for outdoor and river activities?",
    answer: "We take safety as seriously as the thrill.\n\nRafting: Top-grade self-bailing rafts from NRS (USA), US Coast Guard-approved Type V lifejackets, certified whitewater helmets, rescue and first-aid gear on every raft, and thorough safety briefings before you hit the water.\n\nKayaking, Climbing, Rope Courses & Hiking: Led by certified instructors with thoroughly inspected, European-standard gear. All routes are risk-assessed, designed to be low-impact, and include a buddy system for support. Accessible modifications ensure everyone can join in safely."
  },
  {
    category: "Meals & Dining",
    question: "What meals and cuisines will be provided at the camp?",
    answer: "We take pride in the excellent cuisine served at the camp, with an emphasis on wholesome, hygienic, and delicious meals, offering a variety to cater to different dietary needs. Fresh fruits and vegetables are sourced locally.\n\nBREAKFAST - Continental & Indian: Corn flakes/porridge, eggs, toast/pancakes/french toast, paratha, butter, jam, baked beans/french fries, fruits, tea/coffee.\n\nLUNCH - Indian: Normally vegetarian consisting of Dal/Rajma, two vegetables, rice (fried/plain), chapati, papad, salad, & fruit.\n\nDINNER - A special meal with variations of Barbecue — Indian, Continental or Chinese cuisine complete with dessert."
  },
  {
    category: "Meals & Dining",
    question: "Can special dietary requirements or allergies be accommodated?",
    answer: "Yes. Please inform us of any food allergies, vegetarian, Jain, or gluten-free requirements during registration, and our kitchen team will gladly prepare suitable meals."
  },
  {
    category: "Registration & Policies",
    question: "What is the camp cost and what does it include?",
    answer: "Cost: ₹10,000 + 5% GST per person for 3 Days / 2 Nights.\n\nIncluded:\n• Deluxe tent accommodation on twin-sharing basis with beds, mattresses, and warm quilts\n• All meals, snacks, morning/evening tea, and drinking water\n• All adventure activities: rafting, kayaking, rock climbing, ropes courses, yoga\n• Professional guide support and safety gear\n• Buddy support system\n• Emergency first-aid support\n\nNot Included:\n• Travel from home to Camp Aquaterra and back\n• Stay in Rishikesh before/after the trip\n• Personal expenses, bottled water, and gratuities\n• Travel insurance"
  },
  {
    category: "Registration & Policies",
    question: "What are the payment and cancellation policies?",
    answer: "We accept online payments only by online bank transfer or credit card (convenience fee applies). Full payment is required to confirm your booking.\n\nCancellation Policy: If you cancel your booking, you will receive a credit note for the paid amount. This credit note can be redeemed toward any future Treks for All adventure or camp within its validity period."
  },
  {
    category: "Registration & Policies",
    question: "Are there any rules or things we need to be mindful of?",
    answer: "We will happily refuse intoxicated participants without any refunds, for their own safety. We recommend avoiding alcohol, drugs, or any intoxicants for at least 6 hours before an adventure outing.\n\nNo loud music or bright lights are allowed. The camp is located in a Reserved Forest Area, and we encourage guests to appreciate the joy of being very close to nature.\n\nOur ground staff may refuse service if payments are not cleared upon arrival."
  },
  {
    category: "Packing & Facilities",
    question: "What should I pack for Camp Aquaterra?",
    answer: "Recommended packing list:\n• Comfortable quick-dry clothing (shorts, t-shirts, track pants)\n• Sturdy sandals with heel straps (suitable for water) or old sneakers\n• Warm layer or fleece jacket for evenings and early mornings\n• Sunglasses with retaining cord and sun hat\n• Sunscreen (SPF 50+) and insect repellent\n• Personal toiletries, towel, and required personal medication\n• Headlamp or torch with extra batteries\n• Power bank for charging mobile devices\n• Reusable water bottle"
  },
  {
    category: "Packing & Facilities",
    question: "What are the accommodation and bathroom facilities like?",
    answer: "Guests stay in spacious, walk-in deluxe safari-style tents equipped with comfortable twin cots, clean mattresses, bed linens, and warm quilts. The camp features clean western-style toilets and washing facilities with running water and hot showers located close to the tents."
  },
  {
    category: "Buddies & Guides",
    question: "How does the buddy system work at camp?",
    answer: "Each participant requesting support is paired with an empathetic, trained buddy. Buddies participate alongside you, providing support with camp navigation, meal assistance, and outdoor activities while respecting your independence and privacy at all times."
  },
  {
    category: "Buddies & Guides",
    question: "Are the camp instructors and river guides trained in disability inclusion?",
    answer: "Yes! Aquaterra river guides and outdoor instructors work hand-in-hand with v-shesh inclusion specialists. They are trained in disability etiquette, inclusive communication, and adaptive outdoor leadership techniques to ensure a safe, dignified experience."
  }
];

const ranakotTrekFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is the Ranakot Trek?",
    answer: "The Ranakot Trek is a 4-day introductory Himalayan wilderness journey designed with accessibility at its core. Traversed along the scenic watershed divide between the Upper Ganga and Bhagirathi valleys at approximately 8,000 ft (2,400m), it combines gradual forest walking, high-meadow camping, and a scenic river rafting experience down to Kodiyala on Day 4."
  },
  {
    category: "General Overview",
    question: "Who can participate in the Ranakot Trek?",
    answer: "This trek is open to everyone—including beginners, families, solo travellers, and persons with disabilities (locomotor, visual, hearing, neurodivergent). Our choice-based pacing and supportive team ensure every adventurer feels comfortable, confident, and celebrated on the trail."
  },
  {
    category: "General Overview",
    question: "Can solo travellers join this trek?",
    answer: "Yes, absolutely! Many participants join solo. Non-disabled solo travellers are paired with a companion or buddy for tent sharing and trail support, creating lasting friendships and a wonderful community spirit."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "How challenging is the Ranakot Trek?",
    answer: "The trek is rated as Moderate, making it an ideal first Himalayan trek. The trail climbs gradually through pine and rhododendron forests over 7 km on Day 2 to Dashrath Ka Danda, followed by a scenic ridge walk to Ranakot Meadow on Day 3. Distances are manageable and paced with frequent hydration breaks."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the rafting component on Day 4?",
    answer: "On the final day, after trekking down to Devprayag (the confluence of Alaknanda and Bhagirathi), the group boards rafts for an exhilarating yet beginner-friendly whitewater rafting stretch down to Kodiyala on the Ganga, accompanied by certified river guides and comprehensive safety gear."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What are the daily walking hours and distances?",
    answer: "Daily walking hours average between 4 and 5 hours. Day 2 covers 7 km from Pau ki Devi to Dashrath Ka Danda, and Day 3 covers a half-day forest descent to Ranakot Meadow. The schedule allows ample downtime for photography, rest, and evening campfire discussions."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the maximum altitude reached?",
    answer: "The maximum altitude reached is approximately 2,400 metres (8,000 feet) at Dashrath Ka Danda. At this altitude, acute mountain sickness (AMS) is rare, making the trek comfortable and safe for participants of varied fitness levels."
  },
  {
    category: "Weather & Safety",
    question: "What weather should I expect during the trek?",
    answer: "In late September, daytime temperatures typically range from 24°C to 29°C with sunny skies, while nights cool down to 16°C to 20°C. Light warm layers are recommended for mornings and evenings around the campsite."
  },
  {
    category: "Weather & Safety",
    question: "What safety protocols and medical support are in place?",
    answer: "All treks are led by certified outdoor educators and wilderness first-responders carrying extensive medical kits, pulse oximeters, and emergency communication. Road access points are nearby for swift vehicle evacuation if needed."
  },
  {
    category: "Weather & Safety",
    question: "What happens if there is unexpected rain or inclement weather?",
    answer: "The team monitors mountain weather forecasts continuously. Ponchos and rain covers are standard, and camp instructors have alternative shelters and route contingency plans ready to ensure participant safety and comfort."
  },
  {
    category: "Registration & Policies",
    question: "How do I register for the Ranakot Trek?",
    answer: "Register directly on our website by filling out the booking form. Our inclusion and accessibility coordinators will contact you to review any mobility requirements, adaptive equipment needs, and dietary preferences before confirming your spot."
  },
  {
    category: "Registration & Policies",
    question: "What is the cancellation policy?",
    answer: "If you need to cancel your booking, you will receive a credit note for the full amount paid, valid for any future Treks for All adventure within the validity period."
  },
  {
    category: "Registration & Policies",
    question: "What is included in the ₹22,000 + 5% GST fee?",
    answer: "The package includes twin-sharing tent accommodation, all meals from Day 1 lunch to Day 4 lunch, certified guides and cooks, camp staff, forest permits, safety equipment, and the rafting segment to Kodiyala."
  },
  {
    category: "Packing & Facilities",
    question: "What footwear and clothing are required?",
    answer: "We recommend sturdy, broken-in trekking shoes or hiking boots with good grip. Pack breathable quick-dry t-shirts, trekking pants, a warm fleece jacket, rain poncho, sun cap, sunglasses, and personal toiletries."
  },
  {
    category: "Packing & Facilities",
    question: "Do I need to carry my own sleeping bag?",
    answer: "Yes, we encourage trekkers to bring their own personal sleeping bag for hygiene and personal warmth comfort. Clean sleeping mats, two-person tents, and camping infrastructure are provided by the team."
  },
  {
    category: "Packing & Facilities",
    question: "What toilet facilities are available on the trek?",
    answer: "At each campsite, we pitch dedicated toilet tents equipped with portable western-style commodes, deep pits, toilet paper, and soil cover mounds. This dry-toilet system is hygienic, odourless, and eco-friendly."
  },
  {
    category: "Packing & Facilities",
    question: "Is there mobile connectivity or electricity at Ranakot Meadow?",
    answer: "Mobile connectivity is intermittent on ridge tops (Airtel/Jio) and absent inside deeper forest valleys and wilderness camps. There is no electricity on the trail; please carry fully charged power banks."
  },
  {
    category: "Meals & Dining",
    question: "What meals are provided during the trek?",
    answer: "Our camp kitchen serves hot, nutritious, freshly prepared vegetarian meals including porridge, eggs/upma/parathas for breakfast, packed lunches on the trail, hot soup and evening tea with snacks, and multi-course dinners."
  },
  {
    category: "Meals & Dining",
    question: "Can dietary restrictions like Jain or vegan food be accommodated?",
    answer: "Yes! Please inform our team of any dietary requirements during registration, and our camp cooks will happily prepare suitable meals for you."
  },
  {
    category: "Meals & Dining",
    question: "Is drinking water safe along the trail?",
    answer: "Yes, drinking water is drawn from pristine mountain streams and purified using multi-stage filtration systems. Trekkers should carry reusable water bottles to refill at camp and trail stops."
  },
  {
    category: "Accessibility & Inclusion",
    question: "How are participants with locomotor disabilities supported?",
    answer: "Support includes pre-trip terrain assessments, adaptive trekking poles, customized walking paces, assistive buddy pairing, and horse support options if someone requires physical assistance along steeper ascents."
  },
  {
    category: "Accessibility & Inclusion",
    question: "What accommodations are provided for visually impaired trekkers?",
    answer: "Visually impaired participants are paired 1:1 with trained sighted guides or buddies who provide verbal terrain descriptions, tactile trail navigation support, and tent orientation."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Can Deaf or hard-of-hearing trekkers join?",
    answer: "Yes! We provide visual trail briefings, clear written summaries, and team members trained in basic Indian Sign Language (ISL) to ensure seamless and inclusive communication throughout the journey."
  },
  {
    category: "Buddies & Guides",
    question: "How does the buddy system work on the trail?",
    answer: "Non-disabled co-trekkers and trained volunteers are paired with participants with disabilities. Buddies share tents, walk together on the trail, and offer companionship, mutual encouragement, and everyday support."
  },
  {
    category: "Buddies & Guides",
    question: "Who leads the Ranakot Trek?",
    answer: "The trek is led by certified mountain guides and instructors from Aquaterra and v-shesh, trained extensively in wilderness safety, first-aid response, and disability inclusion."
  }
];

const campBagiFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is Camp Bagi on the Tons River?",
    answer: "Camp Bagi is a riverside adventure camp set on a picturesque sandy beach along the Tons River in the Jaunsar Bawar region of Western Uttarakhand (3,500 ft / 1,150m). It features exhilarating Class 4 whitewater rafting, serene forest hikes to waterfalls, stargazing, and cultural visits to ancient Himalayan temples."
  },
  {
    category: "General Overview",
    question: "Who can join Camp Bagi?",
    answer: "Camp Bagi welcomes everyone! It is an ideal summer getaway for beginners, outdoor lovers, families with children, and persons with disabilities. All activities are designed with a choice-based, fully supported approach."
  },
  {
    category: "General Overview",
    question: "When is the best time to visit Camp Bagi?",
    answer: "Our summer camp operates from mid-April through May. During this window, days are sunny and comfortable while nights are cool and refreshing, offering a perfect respite from the blistering heat of the plains."
  },
  {
    category: "Activities & Inclusion",
    question: "How intense is the whitewater rafting on the Tons River?",
    answer: "The Tons is famous for its Class 4 rapids. We navigate the thrilling Lunagad-to-Khunigad stretch under the supervision of senior international-standard river guides, equipped with high-flotation lifejackets, helmets, and accompanying safety kayakers."
  },
  {
    category: "Activities & Inclusion",
    question: "Can non-swimmers participate in rafting?",
    answer: "Yes, non-swimmers can safely participate! Every participant wears a certified personal flotation device (PFD) that keeps you buoyed on the water, and our river guides provide detailed safety drills before entering the river."
  },
  {
    category: "Activities & Inclusion",
    question: "What does the cultural visit to Hanol Temple involve?",
    answer: "Hanol Temple is an ancient 9th-century architectural marvel dedicated to Mahasu Devta, built in traditional Kath-Kuni stone-and-wood style by the Pandavas. The visit offers deep insight into Jaunsari folklore and mountain traditions."
  },
  {
    category: "Activities & Inclusion",
    question: "How are persons with disabilities included in rafting and camp activities?",
    answer: "Adaptive seating and cushioning in rafts, dedicated buddy support, and modified physical aids ensure participants with locomotor, sensory, or cognitive disabilities can participate fully and safely in the river run and camp life."
  },
  {
    category: "Weather & Safety",
    question: "What is the weather like at Camp Bagi in April and May?",
    answer: "In April, days range from 15°C to 25°C with cool nights (8°C–15°C). In May, daytime temperatures reach 20°C to 30°C with pleasant nights (10°C–18°C). A light fleece is recommended for evenings around the campfire."
  },
  {
    category: "Weather & Safety",
    question: "What river safety gear and protocols are standard?",
    answer: "We use top-grade self-bailing rafts, CE-certified helmets, Coast Guard approved life jackets, rescue throw ropes, and safety kayakers on every section. Guides conduct thorough safety briefings before every launch."
  },
  {
    category: "Weather & Safety",
    question: "Is medical and emergency support available at the camp?",
    answer: "Camp managers are certified in Wilderness First Aid and CPR. First-aid stations with emergency supplies are maintained on site, and dedicated vehicles are available for road evacuation if needed."
  },
  {
    category: "Meals & Dining",
    question: "What meals are provided at Camp Bagi?",
    answer: "Camp meals are wholesome, fresh, and generous: hearty hot breakfasts (eggs, pancakes, porridge, parathas), buffet lunches, evening tea with snacks and soup, and campfire dinners featuring North Indian and local Garhwali dishes."
  },
  {
    category: "Meals & Dining",
    question: "Can dietary preferences like vegetarian, vegan, or Jain food be accommodated?",
    answer: "Yes, we gladly cater to vegetarian, vegan, Jain, and allergy-sensitive dietary preferences. Please specify your requirements when registering."
  },
  {
    category: "Meals & Dining",
    question: "Is drinking water safe at the camp?",
    answer: "Yes, water at camp is filtered through multi-stage commercial filtration and UV systems. Clean, safe drinking water stations are available at all times for refilling personal water bottles."
  },
  {
    category: "Registration & Policies",
    question: "How do I register for Camp Bagi?",
    answer: "You can register online through our website. Our coordinators will contact you to understand any specific accommodations, buddy support, or transport preferences required."
  },
  {
    category: "Registration & Policies",
    question: "What is the cancellation policy?",
    answer: "If you cancel your booking, you receive a credit note for the entire paid amount, redeemable for any future Treks for All camp or trek within the validity period."
  },
  {
    category: "Registration & Policies",
    question: "What is included in the ₹15,000 + 5% GST fee?",
    answer: "The price covers twin-sharing tent accommodation on the beach, all meals and refreshments, two rafting excursions with safety gear, guided forest trek to the waterfall, temple visit, and camp activities."
  },
  {
    category: "Packing & Facilities",
    question: "What are the tent and bathroom facilities like?",
    answer: "Guests stay in spacious twin-sharing safari tents pitched on the river beach, outfitted with cots, mattresses, and quilts. Separate, clean dry/flush toilet units and washing tents are situated close to the living area."
  },
  {
    category: "Packing & Facilities",
    question: "What clothes and shoes should I bring for Camp Bagi?",
    answer: "Bring quick-drying nylon shorts and t-shirts for rafting, secure river sandals or sneakers with good rubber grip, a warm layer for the evening, a sun hat, sunglasses with neck straps, and a headlamp or torch."
  },
  {
    category: "Packing & Facilities",
    question: "Is electricity and mobile network available at Camp Bagi?",
    answer: "Camp Bagi is an authentic off-grid retreat. Generator power is available for limited hours in the evening to charge devices. Mobile network (BSNL/Airtel) is patchy at river level, allowing guests to truly unplug and immerse in nature."
  },
  {
    category: "Buddies & Guides",
    question: "Who are the river guides and camp staff?",
    answer: "Rafting is steered by licensed, world-class river guides from Aquaterra Adventures. In-camp activities and accessibility support are led by trained v-shesh and Treks for All outdoor inclusion facilitators."
  },
  {
    category: "Buddies & Guides",
    question: "How does buddy support work for campers with disabilities?",
    answer: "Participants who need mobility, visual, or personal assistance are paired with an attentive buddy. Buddies assist with navigating the sand, tent access, dining, and outdoor activities to guarantee a comfortable and empowering stay."
  }
];

const campHornbillFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is Camp Hornbill?",
    answer: "Camp Hornbill is an eco-adventure and experiential community retreat nestled in Kyari village near Ramnagar, Uttarakhand, right on the fringes of the legendary Corbett forest landscape. It combines nature trails, village community immersion, adventure ropes, and water activities in a safe, inclusive setting."
  },
  {
    category: "General Overview",
    question: "Does Camp Hornbill include a Corbett wildlife safari?",
    answer: "Camp Hornbill is designed around nature exploration, adventure activities, and community life; standard bookings do not include a jungle wildlife safari. However, we can arrange an optional Corbett jeep safari at additional cost, subject to forest department permit availability."
  },
  {
    category: "General Overview",
    question: "Who can participate in Camp Hornbill?",
    answer: "Camp Hornbill welcomes solo travellers, families, youth groups, and persons with disabilities. Accommodations and activities are thoughtfully tailored to be accessible and engaging for people of all fitness levels."
  },
  {
    category: "Activities & Inclusion",
    question: "As a Person with Disability, what activities can I participate in?",
    answer: "Participants can enjoy canal body surfing, pond swimming, ziplining, friendship ladder, tree climbing, jumaring, rock climbing, nature walks, village heritage visits, and yoga. Activities can be adapted to individual abilities, comfort levels, and support needs under instructor supervision."
  },
  {
    category: "Activities & Inclusion",
    question: "How accessible is Camp Hornbill for wheelchair users and locomotor disabilities?",
    answer: "Camp Hornbill is well suited for ambulant disabilities with supportive pathways. Because the village terrain features natural gravel and unpaved paths, wheelchair users should connect with our team before registration so personalized accessibility support can be arranged."
  },
  {
    category: "Activities & Inclusion",
    question: "What support is provided for visually impaired and Deaf campers?",
    answer: "We provide 1:1 sighted guide support for nature walks and obstacle navigation, descriptive trail instructions, visual briefings, and trained facilitators experienced in inclusive sign-assisted communication."
  },
  {
    category: "Weather & Safety",
    question: "How is the weather at Camp Hornbill across different months?",
    answer: "September is warm and lush (22–29°C) with post-monsoon greenery; October brings clear, pleasant days (17–28°C); November offers crisp, dry weather with cool mornings and evenings (11–23°C); and December provides chilly, refreshing winter days (7–20°C). Check the forecast before packing!"
  },
  {
    category: "Weather & Safety",
    question: "What safety measures are in place for adventure activities?",
    answer: "Safety is our foremost priority. For canal body surfing, certified lifejackets and helmets are mandatory with rescue guides stationed on site. All high-rope activities take place at a dedicated adventure park with certified harnesses, dynamic safety ropes, and trained instructors."
  },
  {
    category: "Weather & Safety",
    question: "What camp regulations must guests be mindful of?",
    answer: "Camp Hornbill borders a Reserved Forest Area: no loud music, late-night amplification, or bright spotlights are permitted to protect wildlife. Intoxicants are strictly prohibited prior to any adventure activities."
  },
  {
    category: "Meals & Dining",
    question: "What meals and cuisines are provided at Camp Hornbill?",
    answer: "Meals feature wholesome, locally inspired Kumaoni and Indian cuisine: hearty breakfasts with eggs, parathas, and continental options; nutritious vegetarian lunches; and evening dinners with both vegetarian and non-vegetarian choices. Afternoon tea and snacks are served daily."
  },
  {
    category: "Meals & Dining",
    question: "Is there an opportunity to experience authentic village food?",
    answer: "Yes! Guests have the special opportunity to share a traditional meal with a local Kyari village family, enjoying authentic Kumaoni flavours cooked with homegrown ingredients while learning about village customs."
  },
  {
    category: "Meals & Dining",
    question: "Can special dietary requirements be accommodated?",
    answer: "Yes, vegetarian, vegan, Jain, and specific allergy-conscious meals can be arranged. Please let us know your preferences during registration."
  },
  {
    category: "Registration & Policies",
    question: "What is the fee and payment structure for Camp Hornbill?",
    answer: "The fee is ₹10,000 + 5% GST + Travel (total ₹10,500 + travel). All camp fees must be cleared prior to arrival. Packages include cottage accommodation, all meals, adventure activities, safety gear, and guiding support."
  },
  {
    category: "Registration & Policies",
    question: "What is the cancellation policy?",
    answer: "If you need to cancel your booking, you will receive a credit note for the paid amount, redeemable against any future Treks for All camp or adventure within its validity period."
  },
  {
    category: "Registration & Policies",
    question: "How far in advance should I book?",
    answer: "We recommend booking 3 to 4 weeks in advance, especially during the peak autumn and winter months, to ensure cottage availability and proper accessibility preparations."
  },
  {
    category: "Packing & Facilities",
    question: "What are the accommodations like at Camp Hornbill?",
    answer: "Guests stay in deluxe air-conditioned mud houses and traditional stone cottages on a twin-sharing basis, equipped with comfortable beds, fresh linens, quilts, and attached western washrooms."
  },
  {
    category: "Packing & Facilities",
    question: "What essentials should I pack for the camp?",
    answer: "Pack comfortable outdoor clothing, quick-dry shorts/t-shirts for water activities, sturdy walking shoes, a warm jacket or fleece for cool evenings, insect repellent, sun protection, and personal medications."
  },
  {
    category: "Packing & Facilities",
    question: "Is mobile network connectivity available in Kyari?",
    answer: "Yes, major cellular networks like Airtel and Jio offer good connectivity in and around Camp Hornbill."
  },
  {
    category: "Buddies & Guides",
    question: "How does the buddy system work at Camp Hornbill?",
    answer: "Participants who need support are paired with empathetic buddies or trained team members. Buddies assist during village walks, activity gear setup, and dining, ensuring everyone feels fully included."
  },
  {
    category: "Buddies & Guides",
    question: "Who are the instructors and local guides?",
    answer: "Activities are supervised by certified outdoor instructors and nature guides from the Kyari community, working closely with Treks for All and v-shesh inclusion specialists."
  }
];

const campSunkiyaFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is Camp Sunkiya?",
    answer: "Camp Sunkiya is an outdoor adventure and experiential learning camp set at 2,000m in the picturesque pine-covered hills of Mukteshwar, Uttarakhand. The camp emphasizes personal growth, outdoor challenges, nature immersion, and a rich cultural exchange with the local Kumaoni community."
  },
  {
    category: "General Overview",
    question: "What is the Ghasiyari community immersion?",
    answer: "A key highlight of Camp Sunkiya is the opportunity to interact with the Ghasiyaris—local mountain women whose daily lives are intimately tied to forest conservation, livestock, and terrace agriculture. Guests learn traditional folk skills and share stories, fostering mutual respect and cultural appreciation."
  },
  {
    category: "General Overview",
    question: "Who can participate in Camp Sunkiya?",
    answer: "Camp Sunkiya is open to people of all abilities, including beginners, solo travelers, youth, corporate groups, and persons with disabilities. All activities follow a choice-based, challenge-by-choice philosophy."
  },
  {
    category: "Activities & Inclusion",
    question: "As a Person with Disability, what activities can I participate in?",
    answer: "The program includes the Vertical Ladder, Friendship Ladder, Zip Line, Archery, the Secret Pond hike, village interactions, and cultural folk dance. Participation is customized to individual abilities, comfort, and safety requirements under certified instructor guidance."
  },
  {
    category: "Activities & Inclusion",
    question: "How accessible is Camp Sunkiya for wheelchair users?",
    answer: "Camp Sunkiya is well-suited for ambulant disabilities. Because Mukteshwar has terraced mountain terrain, full wheelchair access is limited; wheelchair users should consult our team prior to registering so we can tailor mobility support and activity suitability."
  },
  {
    category: "Activities & Inclusion",
    question: "What accommodations are provided for visually impaired and Deaf campers?",
    answer: "We offer 1:1 sighted guide pairing for trail walking, tactile obstacle briefings, descriptive orientations, and visual/sign communication support from trained inclusion mentors."
  },
  {
    category: "Weather & Safety",
    question: "How is the weather at Camp Sunkiya in Mukteshwar?",
    answer: "Located at 2,000m, Mukteshwar enjoys crisp mountain weather. In September, temperatures hover between 13°C and 20°C; October is clear and pleasant (10°C–19°C); and November is cool and dry (6°C–16°C), with chilly mornings and cold nights. Warm layers are essential!"
  },
  {
    category: "Weather & Safety",
    question: "What safety measures are implemented for high ropes and adventure activities?",
    answer: "All adventure elements (zipline, ladder climb, rappelling) use certified dynamic ropes, double carabiners, safety harnesses, and helmets. Certified mountaineering instructors conduct comprehensive safety briefings before anyone steps onto an element."
  },
  {
    category: "Weather & Safety",
    question: "What medical assistance is available at camp?",
    answer: "The camp maintains complete first-aid kits and emergency medical gear. Trained first-aid responders are on duty, and vehicles are available on site for rapid access to Mukteshwar and Nainital health centers if needed."
  },
  {
    category: "Meals & Dining",
    question: "What meals are provided at Camp Sunkiya?",
    answer: "Guests enjoy full-board dining: hearty breakfasts with Indian and Continental favourites, wholesome buffet lunches (dal, seasonal sabzi, paneer, roti, rice), evening tea with hot pakoras and cookies, and comforting multi-course dinners with local Kumaoni specialities."
  },
  {
    category: "Meals & Dining",
    question: "What is the village lunch experience?",
    answer: "On Day 3, participants visit Sunkiya Village and share an authentic home-cooked lunch hosted by local families, featuring traditional organic dishes prepared over wood-fired chulhas with locally sourced ingredients."
  },
  {
    category: "Meals & Dining",
    question: "Can dietary restrictions (Jain, vegan, gluten-free) be accommodated?",
    answer: "Yes, our kitchen team easily accommodates vegetarian, vegan, Jain, and allergy-sensitive dietary requests with advance notice during registration."
  },
  {
    category: "Registration & Policies",
    question: "What is the fee and what does it include?",
    answer: "The camp fee is ₹8,500 + 5% GST + Travel (total ₹8,925 + travel). This includes American safari tent accommodation, full-board meals and snacks, all adventure activities, village immersion, and guiding support."
  },
  {
    category: "Registration & Policies",
    question: "What is the cancellation policy?",
    answer: "Cancellations receive a credit note for the entire paid amount, which can be applied to any future Treks for All adventure within the validity period."
  },
  {
    category: "Registration & Policies",
    question: "How do I register for Camp Sunkiya?",
    answer: "Fill out the registration form on our website. Our inclusion team will follow up to understand your accessibility needs, dietary preferences, and travel arrangements."
  },
  {
    category: "Packing & Facilities",
    question: "What are the tent and washroom accommodations like?",
    answer: "Accommodation is provided on a twin-sharing basis in spacious American safari tents equipped with beds, thick mattresses, and warm quilts. Clean, modern western washrooms with running water are located adjacent to the tents."
  },
  {
    category: "Packing & Facilities",
    question: "What should I pack for Camp Sunkiya?",
    answer: "Pack comfortable outdoor pants, walking shoes with good grip, warm fleece or jacket for chilly evenings, quick-dry clothes for the pond dip, sun protection, personal medicines, and a reusable water bottle."
  },
  {
    category: "Packing & Facilities",
    question: "Is mobile network connectivity available at the camp?",
    answer: "Yes, cellular reception (Airtel and Jio) is generally good across Mukteshwar and at the campsite."
  },
  {
    category: "Buddies & Guides",
    question: "How does the buddy system operate?",
    answer: "Campers requiring assistance are matched with supportive buddies or trained volunteers who share tents, offer trail navigation support, and ensure every guest feels included and empowered."
  },
  {
    category: "Buddies & Guides",
    question: "Who leads the activities at Camp Sunkiya?",
    answer: "The program is facilitated by experienced outdoor instructors, local Pahadi community leaders, and certified inclusion specialists from v-shesh and Treks for All."
  }
];

const everestBaseCampFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is the Everest Base Camp Classic trek?",
    answer: "The Everest Base Camp Classic trek is a 16-day high-altitude journey through Nepal's legendary Khumbu region. It leads trekkers through iconic Sherpa villages, ancient Buddhist monasteries, and rugged glacial moraines right to the foot of Mt. Everest at 5,364m."
  },
  {
    category: "General Overview",
    question: "Who can join the Everest Base Camp trek?",
    answer: "This trek is designed for adventurous trekkers with good cardiovascular fitness and mental determination. Prior trekking experience at moderate altitudes is strongly recommended, though complete acclimatization days are built into the schedule."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "How difficult is the trek to Everest Base Camp?",
    answer: "Rated as Challenging, the trek involves 5 to 7 hours of daily hiking over rocky terrain and suspension bridges with significant altitude gain. Proper pacing, hydration, and acclimatization days at Namche Bazaar and Dingboche ensure a safe ascent."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "What is the maximum altitude reached?",
    answer: "The highest point is Kala Patthar at 5,545m (offering the best panoramic sunrise view of Everest, Lhotse, and Nuptse) and Everest Base Camp at 5,364m."
  },
  {
    category: "Weather & Safety",
    question: "What is the weather and best season for EBC?",
    answer: "The pre-monsoon spring (March to May) and post-monsoon autumn (October to November) offer clear skies, stable weather, and superb mountain views. Daytime temperatures range from 10°C to 15°C, while nights drop below freezing (-5°C to -15°C) at higher camps."
  },
  {
    category: "Weather & Safety",
    question: "How do you manage Acute Mountain Sickness (AMS)?",
    answer: "Our itinerary includes gradual ascent profiles and mandatory acclimatization days. Trek leaders carry pulse oximeters, supplementary oxygen, and Gamow bags, and have direct protocols for emergency helicopter evacuation if needed."
  },
  {
    category: "Meals & Dining",
    question: "What food and drinking water are available on the trek?",
    answer: "Tea houses serve freshly cooked Dal Bhat, momos, noodles, fried rice, porridge, and hot soups. Trekkers drink boiled or purified water using filtration tablets; single-use plastic bottles are discouraged in the Khumbu valley."
  },
  {
    category: "Camp Life & Assistance",
    question: "What is tea house accommodation like in Nepal?",
    answer: "Trekkers stay in traditional family-run Sherpa tea houses with twin-sharing rooms, wooden beds, and foam mattresses. Dining halls are heated by central stoves in the evening."
  },
  {
    category: "Registration & Policies",
    question: "What permits are required for the EBC trek?",
    answer: "The trek requires the Sagarmatha National Park Entry Permit and the Khumbu Pasang Lhamu Rural Municipality Permit. All necessary permits and park fees are arranged and included in the package."
  },
  {
    category: "Packing & Gear",
    question: "What critical gear is needed for Everest Base Camp?",
    answer: "Essential gear includes a four-season down jacket (-10°C rated), a 0°C to -10°C sleeping bag, waterproof trekking boots with ankle support, thermal base layers, UV sunglasses, trekking poles, and portable power banks."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Can trekkers with disabilities or health conditions participate in EBC?",
    answer: "Due to extreme altitude and remote terrain, EBC requires thorough pre-expedition medical screening. We coordinate specialized porter, horse, and medical assistant support for eligible trekkers with mild-to-moderate disabilities."
  },
  {
    category: "Buddies & Guides",
    question: "Who guides the Everest Base Camp expedition?",
    answer: "Expeditions are led by government-licensed, English-speaking Sherpa mountaineers with extensive high-altitude first aid credentials, supported by local Khumbu porters."
  }
];

const annapurnaCircuitFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is the Annapurna Circuit Complete trek?",
    answer: "The Annapurna Circuit is a world-renowned 21-day expedition encircling the Annapurna Massif in Nepal. The trail spans subtropical river valleys, alpine rhododendron forests, Tibetan-influenced arid plateaus, and the crossing of the Thorong La Pass at 5,416m."
  },
  {
    category: "General Overview",
    question: "Who is this trek suitable for?",
    answer: "This trek is suited for experienced trekkers looking for a comprehensive Himalayan expedition. It requires high stamina, physical conditioning, and comfort with multi-week mountain travel."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "How challenging is crossing Thorong La Pass?",
    answer: "Thorong La Pass (5,416m) is the crux of the circuit. The pass day involves an early 4:00 AM start, climbing roughly 900m over steep snow and scree before descending 1,600m to Muktinath. It is demanding but immensely rewarding."
  },
  {
    category: "Weather & Safety",
    question: "What is the best season to trek the Annapurna Circuit?",
    answer: "Autumn (September to November) and Spring (March to May) offer dry trails, clear mountain vistas, and moderate pass conditions. Winter crossings can be blocked by heavy snow."
  },
  {
    category: "Meals & Dining",
    question: "What meals are provided on the circuit?",
    answer: "Hearty, nourishing meals are provided at tea houses: traditional Dal Bhat, yak cheese pasta, potato rosti, soups, Tibetan bread, and hot ginger lemon tea, designed to keep caloric intake high."
  },
  {
    category: "Camp Life & Assistance",
    question: "What are tea house lodges like?",
    answer: "Trekkers stay in welcoming village tea houses with twin-sharing rooms. Many lodges in lower valleys offer solar-heated hot showers, while higher stops provide cozy communal dining halls."
  },
  {
    category: "Registration & Policies",
    question: "What permits are needed for the Annapurna Circuit?",
    answer: "The trek requires the Annapurna Conservation Area Project (ACAP) permit and the TIMS (Trekkers' Information Management System) card. All permits are organized and included by our team."
  },
  {
    category: "Packing & Gear",
    question: "What equipment is required for the pass crossing?",
    answer: "In addition to standard trekking gear, microspikes or crampons, windproof outer shells, heavy down mittens, polar fleece layers, and Category 4 glacier sunglasses are essential for Thorong La."
  },
  {
    category: "Accessibility & Inclusion",
    question: "How does the team handle pace and altitude safety?",
    answer: "We follow a gradual ascent philosophy with built-in acclimatization rests. Trek leaders monitor blood oxygen levels twice daily and adapt walking paces to participant capabilities."
  },
  {
    category: "Buddies & Guides",
    question: "Who accompanies the Annapurna team?",
    answer: "Licensed wilderness trek leaders and local Gurung/Sherpa guides and porters guide the team, ensuring safety, cultural interpretation, and logistical ease."
  }
];

const spitiValleyFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is the Spiti Valley Winter Expedition?",
    answer: "A rare 10-day high-altitude winter journey into the snowbound trans-Himalayan desert of Spiti Valley in Himachal Pradesh (up to 4,270m). Experience frozen waterfalls, snow leopard habitat explorations, centuries-old monasteries like Key and Dhankar in winter splendour, and warm homestays."
  },
  {
    category: "General Overview",
    question: "Who can join the winter Spiti expedition?",
    answer: "Anyone with good cardiovascular health, resilience to sub-zero temperatures, and an adventurous spirit. The itinerary is vehicle-supported with localized village and monastery walking."
  },
  {
    category: "Trek Itinerary & Difficulty",
    question: "How difficult is a winter trip to Spiti?",
    answer: "Rated as Advanced due to extreme sub-zero cold (-10°C to -25°C) and high altitude. While trekking distances are moderate, coping with severe Himalayan winter conditions requires specialized gear and sound mental resilience."
  },
  {
    category: "Weather & Safety",
    question: "How cold does Spiti Valley get in winter?",
    answer: "Winter temperatures typically range between -5°C during sunny midday hours to -25°C at night. 4x4 heated expedition vehicles, sub-zero down suits, and insulated winter homestays with bukhari wood heaters are provided."
  },
  {
    category: "Meals & Dining",
    question: "What meals are served during winter in Spiti?",
    answer: "Homestays serve hot, calorie-dense mountain meals: Tibetan thukpa, steaming momos, tsampa porridge, dal, rice, butter tea, and local herbal infusions to maintain internal warmth."
  },
  {
    category: "Camp Life & Assistance",
    question: "What are the winter homestays like?",
    answer: "Guests stay in traditional Spitian mud-brick homestays engineered to retain heat, featuring bukhari wood stoves, warm thick yak-wool blankets, and traditional dry-composting winter toilets."
  },
  {
    category: "Registration & Policies",
    question: "What is the booking and cancellation policy?",
    answer: "Due to limited heated homestay capacity, early booking is required. Cancellations are issued as a credit note redeemable against any future Treks for All expedition within its validity period."
  },
  {
    category: "Packing & Gear",
    question: "What winter clothing is required?",
    answer: "Extreme cold gear is mandatory: thermal merino base layers, heavy down parkas (-20°C rated), insulated snow boots, windproof balaclavas, snow goggles, and heavy fleece-lined mittens."
  },
  {
    category: "Accessibility & Inclusion",
    question: "How is accessibility managed in winter snow conditions?",
    answer: "The expedition relies on 4x4 vehicles with snow chains. Supportive buddies and guides assist with walking on snow and ice, ensuring safe, stable navigation at all sites."
  },
  {
    category: "Buddies & Guides",
    question: "Who leads the winter expedition?",
    answer: "The journey is spearheaded by seasoned winter Himalayan expedition leaders and local Spitian wildlife spotters intimately familiar with frozen routes and high-altitude safety."
  }
];

const brahmaputraSafariFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is the Brahmaputra River Safari?",
    answer: "An 8-day wildlife and river cruise expedition exploring Assam's mighty Brahmaputra River, including game drives in Kaziranga National Park (home to the one-horned rhinoceros), river dolphin spotting, tea estate walks, and vibrant Assamese cultural immersion."
  },
  {
    category: "General Overview",
    question: "Who is this safari suitable for?",
    answer: "This trip is ideal for wildlife enthusiasts, birders, photographers, families, and travelers of all mobility levels seeking a relaxed, culturally rich wildlife exploration."
  },
  {
    category: "Activities & Wildlife",
    question: "What wildlife can we encounter on the safari?",
    answer: "Kaziranga and the river corridor are renowned for greater one-horned rhinoceroses, wild water buffalo, Asian elephants, swamp deer, elusive Royal Bengal tigers, Gangetic river dolphins, and over 400 species of migratory and resident birds."
  },
  {
    category: "Weather & Safety",
    question: "What is the best season for the Brahmaputra River Safari?",
    answer: "November to March is the ideal season, characterized by mild sunny days (18°C–25°C), cool breezy evenings, and optimal wildlife sightings across the grasslands and river sandbanks."
  },
  {
    category: "Meals & Dining",
    question: "What cuisine is served during the safari?",
    answer: "Guests enjoy fresh Assamese culinary traditions—including aromatic Joha rice, fish tenga, local vegetable fritters, pitika, and pithe sweets—alongside standard North Indian and Continental spreads."
  },
  {
    category: "Registration & Policies",
    question: "What permits are included?",
    answer: "All Kaziranga National Park jeep safari permits, river cruise entries, and toll permissions are arranged and fully included in the expedition fee."
  },
  {
    category: "Packing & Facilities",
    question: "What are the lodge and cruise accommodations?",
    answer: "Guests stay in heritage eco-lodges near Kaziranga and comfortable river safari vessels featuring air-conditioned rooms, comfortable beds, and attached modern bathrooms."
  },
  {
    category: "Accessibility & Inclusion",
    question: "Is the river safari accessible for persons with reduced mobility?",
    answer: "Yes, the river lodge, cruise vessels, and safari jeeps are equipped to assist travelers with diverse mobility requirements. Our team provides dedicated assistance for boarding and nature excursions."
  },
  {
    category: "Buddies & Guides",
    question: "Who guides the river safari?",
    answer: "Expeditions are led by veteran wildlife naturalists, forest trackers, and river captains with profound knowledge of Assam's rich ecology and heritage."
  }
];

const hacFaqs: { question: string; answer: string; category?: string }[] = [
  {
    category: "General Overview",
    question: "What is the Himalayan Adventure Challenge (HAC)?",
    answer: "The Himalayan Adventure Challenge (HAC) is India's premier multi-discipline adventure race held in Rishikesh since 2013, hosted by Aquaterra Adventures and Atali Ganga. Refined over years of testing for safety and fairness, HAC brings together outdoor athletes and enthusiasts. In its 11th edition, HAC is now inclusive in partnership with Treks For All, featuring a signature 10 km Open Challenge (5 km rafting + 5 km hiking)."
  },
  {
    category: "General Overview",
    question: "How is the 10 km Open Challenge structured for inclusive teams?",
    answer: "Every team consists of exactly four members: two persons with disabilities and two buddies. Teams paddle 5 km down the Ganga River in rafts, followed by a 5 km hiking stage on foot, finishing together as a team."
  },
  {
    category: "General Overview",
    question: "What prize does the winning team receive?",
    answer: "The winning team takes it all: a free holiday and an exclusive goodies bag full of surprises, celebrating the spirit of 'More people. Wilder possibilities.'"
  },
  {
    category: "General Overview",
    question: "What is the minimum team requirement for this challenge?",
    answer: "A minimum of 3 teams (12 participants total) is required for the inclusive 10 km Open Challenge division."
  },
  {
    category: "Race Format & Scoring",
    question: "What is the exact race route on Saturday?",
    answer: "The race starts at Malakhunti on the Ganga. Teams paddle 5 km downriver to Sarasu village, transition to foot, and trek 5 km along scenic mountain and riverside trails back to Malakhunti."
  },
  {
    category: "Race Format & Scoring",
    question: "How are winners decided fairly across diverse participants?",
    answer: "HAC uses an internationally recognized handicap points system where times are adjusted for age and gender, modeled on the qualifying adjustments used by the Boston, London, and New York marathons. Each team member's time is adjusted, and the adjusted times are aggregated to determine the final team score, ensuring fair competition for all."
  },
  {
    category: "Race Format & Scoring",
    question: "Can our team include members racing in the Zealot or 30 km Open Challenge?",
    answer: "It is best to keep your team independent of Zealot and 30 km Open Challenge participants. Those morning races may run late, causing members to miss the mandatory 15:30 cut-off start for the 10 km Open Challenge."
  },
  {
    category: "Race Format & Scoring",
    question: "What orientation and safety practice is provided before the race?",
    answer: "On Friday evening (17:00–20:00), all teams attend a comprehensive race briefing and rules session. On Saturday at 13:00, teams undergo practical paddle orientation, safety briefings, and water practice before the 15:30 flag-off."
  },
  {
    category: "Accommodation & Meals",
    question: "Where will participants stay during the event?",
    answer: "Your two nights are hosted at the race venue across two neighboring properties in a pristine forest setting by the Ganga: Atali Ganga (India's premier activity lodge with ensuite deluxe cottages, venue for Saturday's gala dinner) and Camp Aquaterra (deluxe walk-in tents in a forest clearing with cots, clean WC complex, and shower stalls)."
  },
  {
    category: "Accommodation & Meals",
    question: "What meals and celebrations are included in the package?",
    answer: "All meals are included throughout the weekend: dinner on Friday; breakfast, lunch, and an awards gala dinner with live music at Atali Ganga on Saturday evening; and breakfast before departure on Sunday."
  },
  {
    category: "Accommodation & Meals",
    question: "Can dietary restrictions and preferences be accommodated?",
    answer: "Yes, wholesome vegetarian, non-vegetarian, vegan, and Jain meals are thoughtfully catered. Please specify any dietary requirements during team registration."
  },
  {
    category: "Travel & Logistics",
    question: "How do we get to the venue by road from Delhi?",
    answer: "The venue is approximately 270 km from Delhi (about 6 hours by road). We recommend departing Delhi between 4:00 AM and 5:00 AM to beat traffic in Modinagar and Roorkee, arriving well in time for Friday afternoon check-in."
  },
  {
    category: "Travel & Logistics",
    question: "How do we get there by air?",
    answer: "Fly to Jolly Grant Airport, Dehradun (a 25-minute flight from Delhi). The venue at Atali Ganga / Byasi is approximately 1.5 hours by road from the airport. Please book a morning flight landing before noon to arrive ahead of the 14:00 orientation."
  },
  {
    category: "Travel & Logistics",
    question: "How do we travel by train?",
    answer: "Haridwar Railway Station is located about 1.5 hours from the venue. Recommended trains from Delhi include the Dehradun Shatabdi Express and the Mussoorie Express."
  },
  {
    category: "Registration & Policies",
    question: "What is the cost per person and what is included?",
    answer: "The participation cost is ₹12,625 per person (including 5% GST). This covers 2 nights of twin-sharing accommodation, all meals and race-day nutrition, race transfers, professional timing and marshals, safety gear, entry to the awards gala dinner with live music, and 5% GST."
  },
  {
    category: "Registration & Policies",
    question: "How do we register our team?",
    answer: "You can register your team of four (2 persons with disabilities and 2 buddies) directly through the Treks For All booking link or by visiting hacrace.com. Our team will verify your team details and coordinate pre-race accessibility needs."
  },
  {
    category: "Registration & Policies",
    question: "What is the cancellation policy?",
    answer: "In the event of cancellation, you will receive a credit note for the paid amount, redeemable against any future Treks For All adventure or camp within its validity period."
  },
  {
    category: "Accessibility & Buddies",
    question: "What support is provided for athletes with disabilities?",
    answer: "The challenge is designed for diverse mobility, visual, and sensory conditions. Adaptive seating and strapping in rafts, sighted guidance on the hiking leg, and trail marshals along the course ensure a safe, competitive, and dignified race experience."
  },
  {
    category: "Accessibility & Buddies",
    question: "What is the role of the 2 buddies on the team?",
    answer: "Buddies race alongside their teammates, sharing the paddle power during the 5 km rafting leg and providing pace support, navigation assistance, and teamwork on the 5 km hiking trail to ensure the entire team crosses the finish line together."
  },
  {
    category: "Community & Partners",
    question: "What is the 'Giving Back' story behind HAC?",
    answer: "HAC originated as a community fundraiser to bring adventure travellers back to Uttarakhand following the devastating June 2013 floods. Continuing this heritage, HAC actively sponsors young athletes from local mountain villages and Rishikesh to participate free of cost."
  },
  {
    category: "Community & Partners",
    question: "Who are the official partners and organizers?",
    answer: "The event is hosted by Aquaterra Adventures and Atali Ganga in partnership with Treks For All. Official partners include Edify Sports (timing & scoring), Sea to Summit (technical gear), and Ace Blend (hydration & nutrition)."
  }
];

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
    videoId: 'fuYWq4LvEv4',
    description: 'This moderate trek starts from the picturesque village of Barsu in Uttarkashi. Barsu serves as the base for the Dayara Bugyal trek along with offering grand views of some 6000m plus peaks like Jaunli (6618m), Srikanth (6133m) as well as Draupadi Ka Danda I & II (5643m & 5770m). A little into the trek you can also spot the Gangotri Massif (I, II & III). Dayara Bugyal has been popularly called the most beautiful meadow in India giving stiff competition to Bedni Bugyal. For thousands of years Gujjars have come to these meadows to graze their cattle and bask in the magnificence of such Beauty. Nestled between great Himalayan peaks like Bandarpunch (6316m) & White Peak (6102m) this is perhaps one of the most beautiful meadows to trek to in India.',
    maxAltitude: '3,810m',
    groupSize: 'Max 18',
    departureDates: ['June 8 - 13, 2026', 'December 8 - 13, 2026'],
    highlights: [
      'Stunning views of Bandarpoonch (6,316m) and White Peak (6,102m)',
      'Expansive high-altitude meadows and alpine terrain',
      'Views of 6000m+ peaks: Jaunli (6,618m), Srikanth (6,133m), Draupadi Ka Danda I & II',
      'Gangotri Massif (I, II & III) views',
      'Traditional Gujjar culture and heritage',
      'Inclusive trekking with buddy support system',
      'Package includes travel from Rishikesh to Rishikesh.'
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
    ],
    faqs: dayaraBugyalFaqs
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
    ],
    faqs: doditalLakeFaqs
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
    departureDates: ['November 13 - 15, 2026', 'December 25 - 27, 2026 (HAC-PwD)'],
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
    faqs: campAquaterraFaqs
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
    ],
    faqs: shamValleyFaqs
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
        title: 'Delhi to Camp Aquaterra',
        description: 'Depart from Delhi in the late evening and travel overnight to Camp Aquaterra. Arrive at Camp Aquaterra around 1:00–2:00 AM.',
        accommodation: 'Camp Aquaterra',
        altitude: '600m',
        trekTime: 'Overnight travel',
        difficulty: 'Easy'
      },
      {
        day: 2,
        title: 'Pau ki Devi to Dashrath Ka Danda',
        description: 'After breakfast, drive to Pau ki Devi, and trek 7 km through forest trails to Dashrath Ka Danda. Overnight stay in tents.',
        accommodation: 'Tents',
        altitude: '2,400m',
        trekTime: '7 km',
        difficulty: 'Moderate'
      },
      {
        day: 3,
        title: 'Dashrath Ka Danda to Ranakot Meadow',
        description: 'Early morning hike to the viewpoint, followed by a trek through pine and rhododendron forests to Ranakot Meadow. Overnight camping.',
        accommodation: 'Tents',
        altitude: '2,200m',
        trekTime: 'Half day trek',
        difficulty: 'Moderate'
      },
      {
        day: 4,
        title: 'Ranakot to Devprayag & Rafting to Kodiyala',
        description: 'Trek to Ranakot, drive to Devprayag, enjoy a rafting experience to Kodiyala, followed by lunch and departure.',
        accommodation: 'N/A',
        altitude: 'N/A',
        trekTime: 'Trek, drive & rafting',
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
    ],
    faqs: ranakotTrekFaqs
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
    groupSize: 'Max 25',
    departureDates: ['April 16 - 19, 2026', 'April 23 - 26, 2026', 'May 7 - 10, 2026'],
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
      'Emergency expenses',
      'Sports shoes or trekking shoes',
    ],
    faqs: campBagiFaqs
  },
  {
    id: '8',
    title: 'Camp Hornbill',
    location: 'Ramnagar, Uttarakhand',
    category: 'camps',
    duration: '3 Days, 2 Nights',
    difficulty: 'Easy',
    price: '₹10,000 + 5% GST + Travel',
    rating: 4.7,
    reviews: 0,
    image: '/camping/camp-hornbill-01.webp',
    gallery: [
      '/camping/camp-hornbill-01.webp',
      '/camping/camp-hornbill-02.webp',
      '/camping/camp-hornbill-03.webp',
      '/camping/camp-hornbill-04.webp',
      '/camping/camp-hornbill-05.webp',
      '/camping/camp-hornbill-06.webp',
      '/camping/camp-hornbill-07.webp',
      '/camping/camp-hornbill-08.webp',
      '/camping/camp-hornbill-09.webp'
    ],
    videoId: 'c8JgVioTiQA',
    description: 'Nestled in Kyari village near Ramnagar, Uttarakhand, Camp Hornbill offers an immersive escape into the heart of the Corbett landscape. More than just a place to stay, the camp brings together nature, adventure, wildlife, community and meaningful outdoor experiences in one setting.\n\nGuests can explore forest trails, discover the rich birdlife around the camp, enjoy adventure activities, experience the surrounding nature and connect with the local community. It is an opportunity to step away from everyday routines, build confidence, discover the outdoors and create lasting memories.\n\nPlease note: Camp Hornbill is a nature and adventure experience and does not include a wildlife safari. We can plan a Corbett wildlife safari as a separate experience, subject to availability and applicable charges.',
    maxAltitude: '1,220m',
    groupSize: 'Up to 60',
    departureDates: ['November 28 - 30, 2026'],
    highlights: [
      'Wildlife safari – on request, at additional cost',
      'Fun water-based activities – body surfing',
      'Birding & nature walks',
      'Hikes in forest terrain',
      'Cultural programme',
      'Adventure activities – Friendship Ladder, Tree Climbing, Jumaring and Ziplining'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive & Unwind',
        description: 'Arrive at Camp Hornbill, settle in and enjoy a community lunch with local flavours. Ease into the weekend with a short hike to the pond and a refreshing dip, followed by dinner, storytelling and conversations around the day\'s experiences. Optional: an evening safari, subject to availability and applicable charges.',
        accommodation: 'Mud house / stone cottage',
        altitude: '1,220m',
        trekTime: 'Short hike to the pond',
        difficulty: 'Easy'
      },
      {
        day: 2,
        title: 'Adventure & Explore',
        description: 'Start with gentle yoga and breakfast, followed by canal body surfing. After lunch and some downtime, experience the thrill of ziplining with trained instructors and safety equipment. Explore village and forest trails, before returning to camp for dinner and reflections.',
        accommodation: 'Mud house / stone cottage',
        altitude: '1,220m',
        trekTime: 'Village & forest trails',
        difficulty: 'Moderate'
      },
      {
        day: 3,
        title: 'Reflect & Depart',
        description: 'Begin with a nature walk and riverside reflection, followed by breakfast and a closing circle to share favourite moments and takeaways. Pack up, enjoy a farewell lunch and depart for Delhi with new connections and memories. Activities may be adapted based on weather, safety and participant needs. Accessibility support, buddy assistance and reasonable accommodations are provided.',
        accommodation: 'N/A',
        altitude: '1,220m',
        trekTime: 'Nature walk',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'Deluxe air-conditioned accommodation in mud houses & stone cottages (twin-sharing, with beds, mattresses and quilts)',
      'All meals & refreshments: breakfast, lunch, dinner, tea/coffee and snacks',
      'Drinking water & fresh juice',
      'All adventure activities: body surfing, friendship ladder, jumaring, ziplining and rock climbing',
      'Professional guide support with expert orientation',
      'All necessary safety equipment for adventure activities',
      'On-site first aid & emergency support'
    ],
    exclusions: [
      'Travel from home to camp and back',
      'Stay in Jim Corbett before/after the trip',
      'Jungle safari',
      'Bottled water',
      'Personal equipment and gear',
      'Tips for guides and staff',
      'Emergency expenses',
      'Travel insurance'
    ],
    packingList: campEssentialsPackingList,
    weather: [
      { month: 'January', low: 6, high: 19, conditions: 'Cold mornings & evenings' },
      { month: 'February', low: 9, high: 23, conditions: 'Cool and pleasant' },
      { month: 'March', low: 13, high: 28, conditions: 'Mild to warm' },
      { month: 'April', low: 19, high: 34, conditions: 'Warm' },
      { month: 'May', low: 22, high: 36, conditions: 'Hot' },
      { month: 'June', low: 24, high: 34, conditions: 'Warm & increasingly humid' },
      { month: 'July', low: 24, high: 30, conditions: 'Monsoon, cool & wet' },
      { month: 'August', low: 24, high: 30, conditions: 'Monsoon, humid & wet' },
      { month: 'September', low: 22, high: 29, conditions: 'Warm, with some rain' },
      { month: 'October', low: 17, high: 28, conditions: 'Pleasant & comfortable' },
      { month: 'November', low: 11, high: 23, conditions: 'Cool and dry' },
      { month: 'December', low: 7, high: 20, conditions: 'Cool, especially mornings & evenings' }
    ],
    faqs: campHornbillFaqs
  },
  {
    id: '10',
    title: 'Camp Sunkiya',
    location: 'Mukteshwar, Uttarakhand',
    category: 'camps',
    duration: '3 Days, 2 Nights',
    difficulty: 'Easy',
    price: '₹8,500 + 5% GST + Travel',
    rating: 4.7,
    reviews: 0,
    image: '/camping/camp-sunkiya-02.webp',
    gallery: [
      '/camping/camp-sunkiya-01.webp',
      '/camping/camp-sunkiya-team-circle.jpg',
      '/camping/camp-sunkiya-tree-ladder-top.jpg',
      '/camping/camp-sunkiya-zipline.jpg',
      '/camping/camp-sunkiya-waterfall-pool.jpg',
      '/camping/camp-sunkiya-swimming.jpg',
      '/camping/camp-sunkiya-village-lunch.jpg',
      '/camping/camp-sunkiya-dining.jpg',
      '/camping/camp-sunkiya-bonfire-gazebo.jpg',
      '/camping/camp-sunkiya-washrooms.jpg',
      '/camping/camp-sunkiya-snow.jpg'
    ],
    description: 'Camp Sunkiya is a thoughtfully designed outdoor adventure and experiential learning program set in the hills of Mukteshwar, Uttarakhand. Surrounded by forests and mountain views, it brings together individuals and groups to engage in structured activities, leadership-building exercises and immersive nature experiences in a safe and engaging environment.\n\nThe experience also offers a meaningful village immersion, including an opportunity to understand the life and traditions of the Ghasiyari—local mountain women whose daily lives are closely connected with the forests, livestock and the rhythms of the Himalayan landscape. Through interactions with the local community, guests gain a deeper appreciation of mountain culture, traditions and everyday life in the hills.',
    maxAltitude: '2,000m',
    groupSize: 'Max 30',
    departureDates: ['November 20 - 22, 2026'],
    highlights: [
      'Hike to the Secret Pond',
      'Adventure activities – Vertical Ladder and Friendship Ladder',
      'Zip line and archery',
      'Nature and mountain surroundings',
      'Village and cultural experience in Sunkiya Village',
      'Traditional lunch with local families',
      'Pahadi folk music, traditional dhol and dance',
      'Camping and community-based experiences'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Adventure at Sunkiya Camp',
        description: 'Arrive at Sunkiya Camp and settle into the campsite. After breakfast, begin with a welcome orientation, safety briefing, and team formation. Get to know the group through a series of adventure activities, including the Vertical Ladder, Friendship Ladder, and a short wilderness hike. End the day with a bonfire, music, and dinner at the camp.',
        accommodation: 'Safari tent',
        altitude: '2,000m',
        trekTime: 'Short wilderness hike',
        difficulty: 'Easy'
      },
      {
        day: 2,
        title: 'Water Experience, Adventure & Culture',
        description: 'Begin the morning with breakfast before heading to a nearby pond, approximately 45 minutes from the campsite, for a refreshing dip and water experience. Return to the camp for lunch, followed by an exciting afternoon of adventure activities, including rock climbing, rappelling, zip-lining, and archery. In the evening, experience the warmth of Pahadi culture with folk music, traditional dhol, and dance performances, followed by dinner and an overnight stay at the camp.',
        accommodation: 'Safari tent',
        altitude: '2,000m',
        trekTime: 'Pond ~45 min from camp',
        difficulty: 'Easy'
      },
      {
        day: 3,
        title: 'Village Experience & Departure',
        description: 'Enjoy breakfast at the camp before visiting Sunkiya Village. Immerse yourself in the rhythm of mountain life as you interact with the local community and learn about the lives of the Ghasiyaris—mountain women whose daily lives are closely connected with the forests, fields and livestock. Share a traditional lunch with local families and experience the region through its cuisine, stories, culture and everyday community life.',
        accommodation: 'N/A',
        altitude: '2,000m',
        trekTime: 'Village visit',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      'Full-board meals: breakfast, lunch and dinner, morning and evening tea, cookies, light snacks and soup',
      'Accommodation on a sharing basis in American safari tents',
      'All possible camp activities and campfire',
      'Safety equipment and trained instructors'
    ],
    exclusions: [
      'Any expenses of a personal nature',
      'Any type of transfer and transport',
      'Travel from home to camp and back',
      'Stay in Sunkiya before/after the trip',
      'Bottled water',
      'Personal equipment and gear',
      'Tips for guides and staff',
      'Emergency expenses',
      'Travel insurance'
    ],
    packingList: campEssentialsPackingList,
    weather: [
      { month: 'January', low: 2, high: 12, conditions: 'Cold and chilly' },
      { month: 'February', low: 3, high: 14, conditions: 'Cool with sunny afternoons' },
      { month: 'March', low: 6, high: 18, conditions: 'Cool and pleasant' },
      { month: 'April', low: 10, high: 22, conditions: 'Mild and comfortable' },
      { month: 'May', low: 12, high: 24, conditions: 'Warm and pleasant' },
      { month: 'June', low: 14, high: 24, conditions: 'Warm with occasional showers' },
      { month: 'July', low: 14, high: 21, conditions: 'Cool, cloudy and wet' },
      { month: 'August', low: 14, high: 21, conditions: 'Cool and rainy' },
      { month: 'September', low: 13, high: 21, conditions: 'Mild with clearing skies' },
      { month: 'October', low: 9, high: 20, conditions: 'Cool and crisp' },
      { month: 'November', low: 6, high: 17, conditions: 'Cool and dry' },
      { month: 'December', low: 4, high: 14, conditions: 'Cold and crisp' }
    ],
    faqs: campSunkiyaFaqs
  },
  {
    id: '11',
    title: 'The Himalayan Adventure Challenge (HAC)',
    location: 'Atali Ganga & Rishikesh, Uttarakhand',
    category: 'rivers',
    duration: '3 Days, 2 Nights',
    difficulty: 'Moderate',
    price: '₹12,625 per person (incl. 5% GST)',
    rating: 4.9,
    reviews: 42,
    image: '/hac/hac-banner.jpg',
    gallery: [
      '/hac/hac-banner.jpg',
      '/hac/hac-title.jpg',
      '/hac/hac-badge.jpg',
      '/hac/hac-logo-diamonds.jpg',
      '/camping/Camp-Aquaterra-New-01.webp',
      '/camping/Camp-Aquaterra-New-02.webp',
      '/camping/Camp-Aquaterra-05.webp',
      '/water-adventures/Home-Rafting.webp'
    ],
    description: "The Himalayan Adventure Challenge (HAC), India's signature multi-discipline adventure race held in Rishikesh since 2013, is now inclusive. In its 11th edition, this prestigious event opens its doors to teams of persons with disabilities and their buddies, in partnership with Treks For All.\n\nHosted by Aquaterra Adventures and Atali Ganga, the event features the 10 km Open Challenge: 5 km whitewater rafting down the Ganga plus a 5 km mountain trail hike. Every team consists of four members (two persons with disabilities and two buddies), competing under a marathon-tested handicap scoring system. The winning team takes it all: a free holiday and a surprise goodies bag, followed by an awards gala dinner with live music.",
    maxAltitude: '450m',
    groupSize: 'Teams of 4 (Min 3 teams)',
    departureDates: ['December 18 - 20, 2026'],
    highlights: [
      '10 km Open Challenge: 5 km rafting on the Ganga + 5 km hiking',
      'Now fully inclusive: teams of 2 persons with disabilities + 2 buddies',
      'Handicap scoring adjusted for age and gender (Boston & NY Marathon standards)',
      'Grand prize: Winning team takes a free holiday & goodies bag',
      'Accommodations at Atali Ganga & Camp Aquaterra in a forest setting',
      'Gala dinner with live music and awards ceremony at Atali Ganga',
      'Giving Back mission: sponsoring local youth athletes from Uttarakhand',
      'Partners: Aquaterra Adventures, Edify Sports, Sea to Summit, Ace Blend'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival, Check-in & Race Briefing',
        description: 'Arrive between 12:00 and 14:00 at race base (Atali Ganga / Camp Aquaterra). Settle into your cottages or safari tents. At 17:00, gather for the official race briefing, course walkthrough, safety rules, and timing chip distribution, followed by an early dinner at your base.',
        accommodation: 'Atali Ganga / Camp Aquaterra',
        altitude: '450m',
        trekTime: 'Arrival & Orientation',
        difficulty: 'Easy'
      },
      {
        day: 2,
        title: 'Race Day: 10 km Open Challenge (5 km Rafting + 5 km Hiking)',
        description: 'At 13:00, teams transfer for paddle & bike orientation, safety drills, and water practice. Lunch is served from 14:00 to 15:00. At 15:30, the race flags off at Malakhunti! Teams paddle 5 km down the Ganga to Sarasu village, transition to foot, and trek 5 km back to Malakhunti (17:30 race finish). Transfer to hotels, followed by awards and gala dinner with live music at Atali Ganga from 18:00.',
        accommodation: 'Atali Ganga / Camp Aquaterra',
        altitude: '450m',
        trekTime: '10 km (5 km raft + 5 km hike)',
        difficulty: 'Moderate'
      },
      {
        day: 3,
        title: 'Morning by the River & Departure',
        description: 'Enjoy a leisurely breakfast and soak in the tranquil forest venue along the Ganga. Take a peaceful morning walk or spend time by the river before departing after breakfast with cherished memories and new friendships.',
        accommodation: 'N/A',
        altitude: '450m',
        trekTime: 'Relaxation & Departure',
        difficulty: 'Easy'
      }
    ],
    inclusions: [
      '2 nights twin-sharing accommodation (Atali Ganga / Camp Aquaterra)',
      'All meals from Friday evening through Sunday breakfast',
      'Saturday night awards gala dinner with live music at Atali Ganga',
      'Race transfers between accommodations and Malakhunti race venue',
      'Rafting gear (rafts, PFDs, paddles, helmets) and mountain trail support',
      'Official timing by Edify Sports, marshals, and emergency safety support',
      '5% GST included'
    ],
    exclusions: [
      'Travel from home to Rishikesh/Byasi and back',
      'Personal outdoor clothing, footwear, and personal medicines',
      'Any transfers or meals outside the official HAC schedule',
      'Emergency medical expenses or personal travel insurance',
      'Expenses of personal nature (laundry, phone calls, etc.)'
    ],
    packingList: campEssentialsPackingList,
    weather: [
      { month: 'December', low: 7, high: 21, conditions: 'Crisp sunny days, cool evenings by the river' },
      { month: 'November', low: 11, high: 24, conditions: 'Pleasant and dry' },
      { month: 'October', low: 16, high: 29, conditions: 'Clear and comfortable' }
    ],
    faqs: hacFaqs
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
    ],
    faqs: everestBaseCampFaqs
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
    ],
    faqs: annapurnaCircuitFaqs
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
    ],
    faqs: spitiValleyFaqs
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
    ],
    faqs: brahmaputraSafariFaqs
  }
];