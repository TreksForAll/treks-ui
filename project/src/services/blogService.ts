interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  authorRole?: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  views?: number;
  likes?: number;
  tags?: string[];
  featured?: boolean;
  externalLink?: string;
}

interface BlogFilters {
  category?: string;
  author?: string;
  sortBy?: string;
}

const mockPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mountains-memories-making-space-journey-treks-for-all',
    title: 'Mountains, Memories, and Making Space: A Journey with Treks for All',
    excerpt: 'Discovering leisure as resistance and the transformative power of creating accessible spaces in the mountains.',
    content: 'I was a young(er) university student when I first encountered Surabhi Yadav\'s beautiful and one of a kind project Women at Leisure. Her work documented everyday moments of women resting, laughing, sharing space and for the first time, I began to understand leisure not as indulgence, but as resistance. The idea that taking time for oneself could be revolutionary stayed with me. Rest as a right. And the collective power of women holding space for each other. Since then, I\'ve found myself noticing leisure in quieter, often overlooked ways: the chatty women in the Ladies Coach of the Delhi Metro, their laughter echoing through the compartment; my grandmother sitting in the living room on a warm afternoon, sipping an even warmer cup of tea, flipping through a Tamil magazine. Fast forward to June 2025. I found myself on a bus to Rishikesh on a Monday morning; a working day, no less. But this was no ordinary trip. It was the start of Treks for All, a long-awaited program we had spent months putting together. Planning documents, team calls, accessibility audits, last-minute checklists... and yes, packing my own backpack too. We were headed to Dayara Bugyal, and I thought I knew what was coming: a physically challenging trek, a packed itinerary, long and tiring days. I had braced myself for the logistics, for the stress, for being "on" all the time.\n\nBut what I hadn\'t accounted for was the return of leisure. In between all the planning and uphill climbs, I rediscovered it—in the shared silences as we focused on our steps, the laughter around hot chai, the quiet joy of walking among forests and alpine meadows, the camaraderie of people showing up for each other. It gave me a whole new perspective on leisure- particularly with respect to disability. We saw unlikely friendships form- a Deaf person hosting games for a group of Vision impaired folks, people of all ages finding common ground in how competitive they get over word association games, and most importantly- collectively finding different ways in which the hills can be enjoyed.\n\nIn all of this- we found community, we learnt to slow down to match each other\'s pace, we learnt to applaud each other\'s little wins and helped each other get up after our little falls (and go on to crack jokes about it later!).\n\nLeisure isn\'t always about doing nothing. Sometimes it\'s about doing things that make us feel more alive, more connected, more human. It\'s in the little moments, the ones we don\'t schedule.\n\nAs we build spaces that are inclusive and accessible, we must remember that joy, rest, and respite are just as essential as effort and structure. Because when we hold space for leisure- especially for those often denied it- we open up the possibility for something transformative. At Treks for All- we are trying to do just that!',
    author: 'Vaishnavi Ganesh',
    authorRole: 'Program Coordinator',
    date: 'June 2025',
    category: 'Stories',
    image: '/Vaishnavi-Article.webp',
    readTime: '6 min read',
    views: 892,
    likes: 98,
    tags: ['Leisure', 'Community', 'Accessibility'],
    featured: true
  },
  {
    id: '2',
    slug: 'reflection-treks-for-all',
    title: 'A Reflection on Treks for All',
    excerpt: 'An autism educator\'s perspective on inclusion, adventure, and the power of nature to dissolve barriers between people.',
    content: 'In June 2025 I was visiting India from the United States when I had the opportunity to participate on a Treks for All adventure. I worked as an autism educator in Boston and am passionate about inclusion and disability advocacy, so jumping on Treks for All was an opportunity I couldn\'t say no to – I would get to support people with disabilities AND explore an off-the-path area of India (well, at least off the path for people like me, who have grown up going to dizzying cities like Mumbai and Bangalore). 5 nights, 6 days. I knew breathtaking mountain views, immersion in Hindi and good exercise awaited me. What else?\n\nAnimals, for one. I was filled with gratitude for both the cute mules that carried our belongings, and the village horses, cows and bulls that often stared at us but always graciously allowed us to continue on our (actually, their) path. (And shout out to the villagers who kindly motioned I should move to the side well before a galloping herd of horses raced in my direction).\n\nDirt, and it was glorious. Thanks to the Treks for All packing list which didn\'t miss a beat, I enjoyed not only connecting with nature, but becoming one with it, literally – rain, grass, dirt, and mud, but it was always safe (and fun) to soak up. (It was especially refreshing after the boiling heat of New Delhi, but that\'s a different conversation).\n\nMeals that were tastier than the food served at every school I\'ve ever attended in my life. It was so satisfying to conclude several hours of walking with chilling in the folding chairs of the dining tent, enjoying soup, curries, vegetables, rice, and what is now my new favorite thing, moong dal halwa. And of course, we can\'t go without cutting chai.\n\nEntertainment. With the vast sky and meadows as our backdrop, and without any technology in sight, we shared funny games and riddles that got increasingly side-splitting as the hours passed. The guides hung out with us, genuinely interested in getting to know us and in keeping the vibe fun. It was awesome that we could bypass a lot of the awkwardness and formalities that come up when you\'re first getting to know people, and just be ourselves right away, because, well, why not? Only the good stuff matters when you\'re somewhere as stunning and sacred as the Himalayas. But the award goes to my tentmate, who, at my request, serenaded me with Vande Mataram one night when I couldn\'t sleep. It turns out, she serenaded the entire camp!\n\nOn that note, dragonflies! Who knew there are that many dragonflies in Uttarakhand, and that they loved our tents more than we did? But actually, the dragonflies were a symbol for something bigger: camping skills. We all learned how to live out of a pack, to organize essentials, to stay hydrated and nourished, to crawl in and out of a tent a thousand times, to find the washroom (I mean wash tent) at 2 AM, and so much more that is necessary for living off the land safely and responsibly. These skills will serve us well in any outdoor setting, and I personally got practice in problem-solving and being more flexible, which will serve me well outdoors and indoors.\n\nCountry and city. India and the United States… okay, you get the idea. On the topic of learning, this was my first time working closely with the visually impaired and hearing-impaired communities. I was a little nervous at first, uncertain of how to balance my role as a buddy with my own self-care; remember, I don\'t know how to find the wash tent at 2AM myself! Luckily, I did know from both my personal and professional experience that part of having a disability is self-advocacy; letting people know where and how to fill in the gaps. When you trek with people, you get pretty comfortable with each other right away (you don\'t really have a choice), so in retrospect, a trek was the perfect setting to bond and form connections across abilities. Within a few hours, my visually impaired tent mate was comfortable telling me exactly what she needed and when and why, and I was also comfortable asking her if I was doing too much, too little, or if I needed to change anything up. (Just as important, I was comfortable asking her to ask another buddy if I couldn\'t attend to her at the moment). We quickly, almost automatically developed a system of checking in with each other, and this transparency occurred across our group of trekkers – everybody stepping in to support everybody, without worrying about making a mistake. (The number of dragonflies in my tent drastically decreased after another trekker revealed to me that the tent has an inner zip).\n\nI\'m now certain this level of effortless connection can only happen on a trek, because it has to.\n\nI\'ll never forget when we stepped into sweeping, emerald green Dayara Bugyal, spread on all sides of us like it went on forever. Our entire group made it to the top of the summit. (And then we all made it back down!) That moment really made it true: trekking can be for everyone! But how do we get more people outside and make it happen? I\'m very grateful that Treks for All is working on this question, and honored to have played a part in the answer. (I\'m also grateful to the delightful residents of Barsu, who kindly pointed the way when I got lost in their stepped village and could only say niche?....niche? With their help, I have now returned to the United States).\n\nAfter participating in Treks for All, I 1) do not want to go back to Mumbai and Bangalore, 2) still call my tentmate to laugh at the same silly joke from our trek and 3) have a deep appreciation for the power of the natural world to dissolve barriers between people by insisting we all show up for each other. I would recommend Treks for All to anyone and can\'t wait to come back for round two.',
    author: 'Mallika Iyer',
    authorRole: 'Autism Educator',
    date: 'June 2025',
    category: 'Experiences',
    image: '/Mallika-Article.webp',
    readTime: '8 min read',
    views: 1234,
    likes: 156,
    tags: ['Inclusion', 'Experience', 'Adventure'],
    featured: false
  },
  {
    id: '3',
    slug: 'trekking-beyond-limits-psychologists-perspective',
    title: 'Trekking Beyond Limits: A Psychologist\'s Perspective',
    excerpt: 'Exploring how inclusive treks foster mental growth, empowerment, and social connection for participants with disabilities.',
    content: 'Trekking has long been celebrated as an activity that brings people closer to nature, challenges the body, and restores the mind. But when individuals with visual, physical, or mental challenges join such journeys, the significance of the experience extends far beyond the trail. As a psychologist, I view these inclusive treks not only as acts of resilience but also as profound opportunities for mental growth, empowerment, and social connection for participants and companions (buddys) alike.\n\nNature as a Therapeutic Space\nResearch consistently highlights the restorative effects of natural environments. Exposure to green spaces reduces stress, improves mood, and enhances cognitive functioning. For individuals with disabilities, who often face social isolation or restricted access to outdoor activities, trekking provides a rare avenue to reclaim this therapeutic connection with nature.\n\nThe sensory richness of trails the rustling of leaves, the scent of damp earth, the rhythm of footsteps offers grounding experiences. For someone visually impaired, the trek becomes less about the destination and more about the richness of auditory and tactile cues. For someone with a mental health condition like anxiety or depression, being immersed in nature can quiet intrusive thoughts and restore emotional balance.\n\nBuilding Self-Efficacy and Confidence\nDisabilities often subject individuals to stereotypes of fragility or dependency. Trekking challenges these assumptions, offering a space where participants can test and expand their perceived limits.\n\nFor a person using mobility aids, each conquered step represents not just physical effort but psychological triumph. For someone with intellectual or developmental challenges, successfully navigating parts of the trek reinforces problem-solving and adaptive skills.\n\nThe psychological impact is profound: achieving goals in such environments fosters self-efficacy the belief in one\'s own ability to overcome obstacles. This sense of mastery often carries over into everyday life, improving mental resilience and reducing feelings of helplessness.\n\nThe Power of Group Dynamics\nInclusive treks are also social laboratories where empathy, patience, and teamwork come alive. For individuals with disabilities, being supported by fellow trekkers nurtures a sense of belonging and acceptance counteracting the stigma and isolation many face in society.\n\nEqually, for able-bodied participants, trekking alongside those with challenges cultivates awareness and shifts attitudes. They learn that inclusion is not about lowering expectations but about creating spaces where everyone can strive together. These shared experiences build stronger social bonds, which serve as protective factors for mental health by reducing loneliness and enhancing social support networks.\n\nEmotional Catharsis and Meaning-Making\nTrekking, with its physical demands and unpredictable conditions, often mirrors life itself. For many participants, especially those with chronic disabilities, it becomes a metaphor for resilience. Reaching a summit or simply completing a trail often leads to catharsis a release of pent-up emotions and the realization of inner strength.\n\nAs a psychologist, I\'ve observed that such experiences allow individuals to reframe their disability. Instead of viewing it solely as a limitation, they begin to see it as part of a broader narrative of courage, perseverance, and meaning making. This psychological reorientation can have lasting effects on self-esteem and identity.\n\nChallenges and Psychological Support\nOf course, these treks are not without difficulties. Individuals with mental health conditions may experience heightened anxiety in unfamiliar terrains. Physical exhaustion may trigger frustration or feelings of inadequacy. For those with cognitive impairments, navigating instructions or coping with overstimulation can be overwhelming.\n\nHere, psychological preparation and ongoing support become crucial. Pre-trek counselling, mindfulness exercises, and group check-ins can help participants regulate emotions. Encouraging self-compassion rather than perfectionism fosters resilience when setbacks occur. Additionally, ensuring that guides and co-trekkers are trained in trauma-informed communication helps create a safe emotional environment.\n\nExpanding the Definition of Adventure\nAdventure is often portrayed as the pursuit of extreme physical feats. Yet, for individuals with disabilities, the mere act of stepping onto a trail can be as momentous as scaling the highest peak. Inclusive trekking challenges society to redefine adventure not as something limited to the able-bodied, but as an experience rooted in courage, adaptation, and collective spirit.\n\nFrom a mental health perspective, this redefinition is transformative. It validates the struggles and triumphs of those who are often marginalized, highlighting that mental strength is as worthy of recognition as physical endurance.\n\nA Shared Journey of Healing\nPerhaps the most profound insight from these treks is that healing is not one-sided. While individuals with disabilities gain empowerment and confidence, their companions gain humility, empathy, and a deeper appreciation for the diversity of human experience. Trekking together becomes a shared journey of healing breaking down invisible walls of prejudice while building bridges of understanding and solidarity.\n\nConclusion\nTrekking with visually, physically, and mentally challenged individuals is not just an act of inclusion it is an act of transformation. From a psychological lens, it fosters self-efficacy, social connectedness, emotional catharsis, and resilience. For participants, it affirms that disability does not equate to inability. For society, it sends a powerful message: when we create spaces where everyone can participate, we all climb higher together.',
    author: 'Sreeganga Krishnamoorthy',
    authorRole: 'Psychologist',
    date: 'June 2025',
    category: 'Perspectives',
    image: '/trekking-beyond-limits/Trekking-Beyond-Limits.webp',
    readTime: '10 min read',
    views: 1456,
    likes: 142,
    tags: ['Psychology', 'Inclusion', 'Mental Health'],
    featured: true
  },
  {
    id: '4',
    slug: 'adventure-camp-rishikesh-inclusivity',
    title: 'Adventure camp in Rishikesh puts inclusivity at its centre',
    excerpt: 'At the centre of the adventure camp, nestled in a serene forested area, was the idea of inclusion. A total of 24 people, including 14 with disabilities such as visual impairment, amputation, and autism, were hosted by Treks for All from September 19-21 at Aquaterra\'s Atali Ganga camp for a weekend filled with nature, adventure, and connection.',
    author: 'Hindustan Times',
    date: 'October 2024',
    category: 'Press',
    image: '/camping/Camp-Aquaterra-New-01.webp',
    readTime: '5 min read',
    views: 856,
    likes: 92,
    tags: ['Hindustan Times', 'Camp', 'Inclusion'],
    featured: false,
    externalLink: 'https://www.hindustantimes.com/lifestyle/travel/adventure-camp-in-rishikesh-puts-inclusivity-at-its-centre-101759308129445-amp.html'
  },
  {
    id: '5',
    slug: 'treks-for-all-outdoors-for-everyone',
    title: 'Treks for All: The Outdoors Are for Everyone',
    excerpt: 'There is a magic about being outdoors - a feeling that a trekker knows all too well. There\'s something deeply healing about trekking. Beyond the captivating views and pristine surroundings, it brings a deep sense of gratitude, grounding, and creates memories that last a lifetime.',
    author: 'Treks for All',
    date: 'June 2025',
    category: 'Videos',
    image: '/dayara/Dayarabugyal-02.webp',
    readTime: '12 min watch',
    views: 2145,
    likes: 287,
    tags: ['Video', 'Documentary', 'Adventure'],
    featured: true,
    externalLink: 'https://www.youtube.com/watch?v=fuYWq4LvEv4'
  },
  {
    id: '6',
    slug: 'adventure-for-everyone-making-treks-accessible',
    title: 'Adventure for everyone: Making treks accessible',
    excerpt: 'Treks for All is a groundbreaking initiative aimed at making trekking accessible to people with disabilities.',
    author: 'Hindustan Times',
    date: 'April 2024',
    category: 'Press',
    image: '/dayara/Dayarabugyal-05.webp',
    readTime: '6 min read',
    views: 1023,
    likes: 134,
    tags: ['Hindustan Times', 'Accessibility', 'Initiative'],
    featured: false,
    externalLink: 'https://www.hindustantimes.com/htcity/trips-tours/adventure-for-everyone-making-treks-accessible-101744282695895.html'
  },
  {
    id: '7',
    slug: 'trek-for-all-himalayan-adventure-accessible',
    title: '\'Trek for All\' initiative makes Himalayan adventure accessible to differently-abled',
    excerpt: 'A group of differently-abled individuals took on the formidable challenge of scaling the Himalayas as part of the \'Trek for All\' initiative, which aims to make trekking inclusive and safe for everyone.',
    author: 'The Week',
    date: 'May 2025',
    category: 'Press',
    image: '/dayara/Dayarabugyal-08.webp',
    readTime: '5 min read',
    views: 967,
    likes: 118,
    tags: ['The Week', 'Himalayas', 'Inclusion'],
    featured: false,
    externalLink: 'https://www.theweek.in/wire-updates/national/2025/05/20/lst1-accessibility-mountain-trek.html'
  },
  {
    id: '8',
    slug: 'danish-mahajan-conversation-dayara-bugyal-trek',
    title: 'Danish Mahajan in Conversation with Treks for All: Inclusive Trek to Dayara Bugyal This June',
    excerpt: 'Danish Mahajan speaks with the organizers of Treks for All about their inclusive trek to the stunning Dayara Bugyal in Uttarkashi, Uttarakhand.',
    author: 'Radio Udaan',
    date: 'June 2025',
    category: 'Videos',
    image: '/dayara/Dayarabugyal-03.webp',
    readTime: '18 min watch',
    views: 1567,
    likes: 203,
    tags: ['Radio Udaan', 'Interview', 'Dayara Bugyal'],
    featured: false,
    externalLink: 'https://www.youtube.com/watch?v=iuZ9o9inunE'
  },
  {
    id: '9',
    slug: 'sakshi-dayara-bugyal-reel',
    title: 'Reel on Dayara Bugyal Experience: Sakshi',
    excerpt: 'Experience the magic of Dayara Bugyal through Sakshi\'s eyes. A glimpse into an unforgettable inclusive trekking journey.',
    author: 'Sakshi',
    date: 'May 5, 2025',
    category: 'Videos',
    image: '/Sakshi.webp',
    readTime: '1 min watch',
    views: 892,
    likes: 145,
    tags: ['Instagram', 'Reel', 'Dayara Bugyal'],
    featured: false,
    externalLink: 'https://www.instagram.com/reel/DJQ_uSSJrxB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: '10',
    slug: 'sreeganga-dayara-bugyal-reel',
    title: 'Reel on Dayara Bugyal Experience: Sreeganga',
    excerpt: 'Join Sreeganga on a journey through the stunning Dayara Bugyal meadows. Witness the beauty of inclusive adventure.',
    author: 'Sreeganga',
    date: 'May 11, 2025',
    category: 'Videos',
    image: '/trekking-beyond-limits/Trekking-Beyond-Limits.webp',
    readTime: '1 min watch',
    views: 743,
    likes: 128,
    tags: ['Instagram', 'Reel', 'Dayara Bugyal'],
    featured: false,
    externalLink: 'https://www.instagram.com/reel/DJhC1B0B6uV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  }
];

export const BlogService = {
  async getAllPosts(filters?: BlogFilters): Promise<BlogPost[]> {
    await new Promise(resolve => setTimeout(resolve, 500));

    let filtered = [...mockPosts];

    if (filters?.category) {
      filtered = filtered.filter(post => post.category === filters.category);
    }

    if (filters?.author) {
      filtered = filtered.filter(post => post.author === filters.author);
    }

    if (filters?.sortBy === 'latest') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (filters?.sortBy === 'popular') {
      filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
    }

    return filtered;
  },

  async getFeaturedPosts(): Promise<BlogPost[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockPosts.filter(post => post.featured);
  },

  async getCategories(): Promise<string[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return Array.from(new Set(mockPosts.map(post => post.category)));
  },

  async getAuthors(): Promise<string[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return Array.from(new Set(mockPosts.map(post => post.author)));
  },

  async searchPosts(searchTerm: string): Promise<BlogPost[]> {
    await new Promise(resolve => setTimeout(resolve, 300));

    const term = searchTerm.toLowerCase();
    return mockPosts.filter(post =>
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term) ||
      post.tags?.some(tag => tag.toLowerCase().includes(term))
    );
  },

  async getPostById(id: string): Promise<BlogPost | undefined> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockPosts.find(post => post.id === id);
  },

  async getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockPosts.find(post => post.slug === slug);
  }
};
