import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  User,
  Calendar,
  Eye,
  Heart
} from 'lucide-react';

interface VideoContent {
  id: string;
  title: string;
  description: string;
  category: 'guide' | 'wildlife' | 'campfire' | 'behind-scenes';
  duration: string;
  thumbnail: string;
  videoUrl: string;
  location: string;
  guide?: string;
  uploadDate: string;
  views: number;
  likes: number;
  captions: boolean;
}

interface LocalInsightsProps {
  tripId: string;
  destination: string;
}

const LocalInsights: React.FC<LocalInsightsProps> = ({ tripId, destination }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoContent | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Mock video content data
  const videoContent: VideoContent[] = [
    {
      id: 'guide-testimonial-1',
      title: 'Meet Lobzang: Your Ladakh Guide',
      description: 'Our certified mountain guide shares his 15 years of experience leading treks through the Ladakh Himalayas and his deep connection to this sacred landscape.',
      category: 'guide',
      duration: '3:42',
      thumbnail: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      videoUrl: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4',
      location: 'Ladakh, India',
      guide: 'Lobzang Norberg',
      uploadDate: '2024-12-15',
      views: 1247,
      likes: 89,
      captions: true
    },
    {
      id: 'wildlife-footage-1',
      title: 'Himalayan Wildlife Encounters',
      description: 'Witness the incredible biodiversity of the Himalayas, from blue sheep grazing on high-altitude meadows to the majestic golden eagles soaring overhead.',
      category: 'wildlife',
      duration: '5:18',
      thumbnail: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg',
      videoUrl: 'https://videos.pexels.com/video-files/2611250/2611250-hd_1920_1080_25fps.mp4',
      location: 'Markha Valley, Ladakh',
      uploadDate: '2024-12-12',
      views: 2156,
      likes: 156,
      captions: true
    },
    {
      id: 'campfire-stories-1',
      title: 'Campfire Stories from the Himalayas',
      description: 'Join our evening campfire gathering as local guides share ancient legends, traditional songs, and stories passed down through generations.',
      category: 'campfire',
      duration: '7:23',
      thumbnail: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      videoUrl: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4',
      location: 'Rishikesh, Uttarakhand',
      guide: 'Pemba Sherpa',
      uploadDate: '2024-12-10',
      views: 834,
      likes: 67,
      captions: true
    },
    {
      id: 'behind-scenes-1',
      title: 'Behind the Scenes: Setting Up High Camp',
      description: 'Experience the precision and teamwork required to establish a safe high-altitude camp at 4,800m, from site selection to weather monitoring.',
      category: 'behind-scenes',
      duration: '4:15',
      thumbnail: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg',
      videoUrl: 'https://videos.pexels.com/video-files/2611250/2611250-hd_1920_1080_25fps.mp4',
      location: 'Roopkund Trek, Uttarakhand',
      uploadDate: '2024-12-08',
      views: 1456,
      likes: 112,
      captions: true
    },
    {
      id: 'guide-testimonial-2',
      title: 'River Guide Stories: Navigating the Rapids',
      description: 'Senior river guide Rajesh Kumar explains the art of reading river currents and shares thrilling stories from 20 years of guiding white-water expeditions.',
      category: 'guide',
      duration: '6:31',
      thumbnail: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      videoUrl: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4',
      location: 'Tons River, Uttarakhand',
      guide: 'Rajesh Kumar',
      uploadDate: '2024-12-05',
      views: 987,
      likes: 78,
      captions: true
    },
    {
      id: 'wildlife-footage-2',
      title: 'Snow Leopard Territory',
      description: 'Rare footage from the remote valleys of Spiti, where we set up camera traps to document the elusive snow leopard and its high-altitude habitat.',
      category: 'wildlife',
      duration: '8:47',
      thumbnail: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg',
      videoUrl: 'https://videos.pexels.com/video-files/2611250/2611250-hd_1920_1080_25fps.mp4',
      location: 'Spiti Valley, Himachal Pradesh',
      uploadDate: '2024-12-02',
      views: 3421,
      likes: 289,
      captions: true
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'guide': return '👨‍🦯';
      case 'wildlife': return '🦌';
      case 'campfire': return '🔥';
      case 'behind-scenes': return '🎬';
      default: return '📹';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'guide': return 'Guide Stories';
      case 'wildlife': return 'Wildlife';
      case 'campfire': return 'Campfire Tales';
      case 'behind-scenes': return 'Behind the Scenes';
      default: return 'Video';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'guide': return 'bg-blue-100 text-blue-800';
      case 'wildlife': return 'bg-green-100 text-green-800';
      case 'campfire': return 'bg-orange-100 text-orange-800';
      case 'behind-scenes': return 'bg-purple-100 text-purple-800';
      default: return 'bg-earth-100 text-earth-800';
    }
  };

  const handleVideoSelect = (video: VideoContent, index: number) => {
    setSelectedVideo(video);
    setCurrentVideoIndex(index);
    setIsPlaying(false);
  };

  const navigateVideo = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentVideoIndex + 1) % videoContent.length
      : (currentVideoIndex - 1 + videoContent.length) % videoContent.length;
    
    setSelectedVideo(videoContent[newIndex]);
    setCurrentVideoIndex(newIndex);
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const groupedVideos = videoContent.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {} as { [key: string]: VideoContent[] });

  return (
    <section className="py-16 bg-earth-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Play className="h-8 w-8 text-adventure-400" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Local Insights & Stories
            </h2>
          </div>
          <p className="text-lg text-earth-200 max-w-3xl ml-0">
            Discover the authentic spirit of {destination} through the eyes of our local guides, 
            wildlife footage, and behind-the-scenes expedition moments
          </p>
        </div>

        {/* Featured Video Player */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className={`relative bg-black rounded-2xl overflow-hidden shadow-2xl ${
              isFullscreen ? 'fixed inset-4 z-50' : 'aspect-video'
            }`}>
              {/* Video Container */}
              <div className="relative w-full h-full">
                <video
                  key={selectedVideo.id}
                  className="w-full h-full object-cover"
                  poster={selectedVideo.thumbnail}
                  muted={isMuted}
                  loop
                  preload="metadata"
                  onLoadedData={() => {
                    // Video loaded and ready
                  }}
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  <track
                    kind="captions"
                    src=""
                    srcLang="en"
                    label="English"
                    default={selectedVideo.captions}
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center group">
                  <div className="flex items-center space-x-4">
                    {/* Previous Video */}
                    <button
                      onClick={() => navigateVideo('prev')}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>

                    {/* Play/Pause */}
                    <button
                      onClick={togglePlayback}
                      className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      {isPlaying ? (
                        <Pause className="h-8 w-8" />
                      ) : (
                        <Play className="h-8 w-8 ml-1" />
                      )}
                    </button>

                    {/* Next Video */}
                    <button
                      onClick={() => navigateVideo('next')}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {selectedVideo.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-3">
                        {selectedVideo.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-white/70">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{selectedVideo.location}</span>
                        </div>
                        {selectedVideo.guide && (
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{selectedVideo.guide}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(selectedVideo.uploadDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Video Controls */}
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={toggleMute}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                      >
                        {isMuted ? (
                          <VolumeX className="h-5 w-5" />
                        ) : (
                          <Volume2 className="h-5 w-5" />
                        )}
                      </button>
                      
                      <button
                        onClick={toggleFullscreen}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                      >
                        <Maximize2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Captions Indicator */}
                {selectedVideo.captions && (
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    CC Available
                  </div>
                )}
              </div>

              {/* Fullscreen Close Button */}
              {isFullscreen && (
                <button
                  onClick={toggleFullscreen}
                  className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 z-10"
                >
                  ×
                </button>
              )}
            </div>

            {/* Video Stats */}
            <div className="flex items-center justify-between mt-4 text-earth-200">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">{selectedVideo.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">{selectedVideo.likes} likes</span>
                </div>
                <span className="text-sm">{selectedVideo.duration}</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(selectedVideo.category)}`}>
                {getCategoryIcon(selectedVideo.category)} {getCategoryName(selectedVideo.category)}
              </span>
            </div>
          </motion.div>
        )}

        {/* Video Categories */}
        <div className="space-y-12">
          {Object.entries(groupedVideos).map(([category, videos], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <span className="text-3xl">{getCategoryIcon(category)}</span>
                <span>{getCategoryName(category)}</span>
                <span className="text-earth-400 text-lg font-normal">
                  ({videos.length} {videos.length === 1 ? 'video' : 'videos'})
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    onClick={() => handleVideoSelect(video, videoContent.findIndex(v => v.id === video.id))}
                  >
                    <div className="relative bg-earth-700 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                            <Play className="h-6 w-6 text-white ml-0.5" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                          {video.duration}
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-2 left-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                            {getCategoryIcon(category)} {getCategoryName(category)}
                          </span>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="p-4">
                        <h4 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-adventure-400 transition-colors duration-300">
                          {video.title}
                        </h4>
                        
                        <p className="text-earth-300 text-sm line-clamp-2 mb-3 leading-relaxed">
                          {video.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-earth-400">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{video.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="h-3 w-3" />
                              <span>{video.likes}</span>
                            </div>
                          </div>
                          {video.captions && (
                            <span className="bg-earth-600 text-white px-2 py-0.5 rounded text-xs">
                              CC
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Initial State - No Video Selected */}
        {!selectedVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-16"
          >
            <div className="bg-earth-700 rounded-2xl p-12">
              <Play className="h-16 w-16 text-adventure-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Select a Video to Begin
              </h3>
              <p className="text-earth-300 max-w-2xl ml-0">
                Click on any video below to start watching authentic stories and insights 
                from our local guides and the beautiful destinations we explore together.
              </p>
            </div>
          </motion.div>
        )}

        {/* Accessibility Note */}
        <div className="mt-16 text-left">
          <p className="text-earth-400 text-sm">
            All videos include captions for accessibility. Videos are optimized for mobile and web viewing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalInsights;
