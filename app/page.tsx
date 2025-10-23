'use client';

import { useState } from 'react';
import { Search, TrendingUp, Users, DollarSign, Calendar, Eye, ThumbsUp, MessageSquare, Share2, Clock, Target, Zap, BarChart3, Lightbulb, Award } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface AnalysisResult {
  channelName: string;
  subscribers: string;
  totalViews: string;
  avgViews: string;
  uploadFrequency: string;
  engagementRate: string;
  topPerformingVideos: Array<{
    title: string;
    views: string;
    likes: string;
    comments: string;
    duration: string;
  }>;
  contentStrategy: {
    videoLength: string;
    postingSchedule: string;
    thumbnailStyle: string;
    titlePattern: string;
  };
  growthMetrics: Array<{
    month: string;
    subscribers: number;
    views: number;
    videos: number;
  }>;
  contentCategories: Array<{
    name: string;
    value: number;
  }>;
  recommendations: Array<{
    category: string;
    insight: string;
    action: string;
  }>;
  profitability: {
    estimatedRevenue: string;
    revenuePerVideo: string;
    sponsorshipPotential: string;
    monetizationStrategies: string[];
  };
}

export default function Home() {
  const [channelUrl, setChannelUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const analyzeChannel = async () => {
    setIsAnalyzing(true);

    // Simulate AI analysis with realistic data
    await new Promise(resolve => setTimeout(resolve, 3000));

    const mockResult: AnalysisResult = {
      channelName: "Tech Innovation Hub",
      subscribers: "2.4M",
      totalViews: "145M",
      avgViews: "285K",
      uploadFrequency: "3-4 videos/week",
      engagementRate: "8.7%",
      topPerformingVideos: [
        {
          title: "AI Revolution: What's Next in 2025",
          views: "1.2M",
          likes: "87K",
          comments: "4.2K",
          duration: "12:45"
        },
        {
          title: "Build Your First Neural Network",
          views: "980K",
          likes: "65K",
          comments: "3.8K",
          duration: "18:23"
        },
        {
          title: "Top 10 Tech Skills That Pay $200K+",
          views: "850K",
          likes: "52K",
          comments: "2.9K",
          duration: "15:12"
        },
        {
          title: "Cloud Computing Explained Simply",
          views: "720K",
          likes: "48K",
          comments: "2.1K",
          duration: "10:34"
        },
        {
          title: "My $50K/Month Side Hustle Story",
          views: "695K",
          likes: "44K",
          comments: "3.5K",
          duration: "14:56"
        }
      ],
      contentStrategy: {
        videoLength: "12-18 minutes (sweet spot: 14 min)",
        postingSchedule: "Monday, Wednesday, Friday at 2 PM EST",
        thumbnailStyle: "Bold text + contrasting colors + face closeup",
        titlePattern: "How-to guides, Lists, Bold claims with numbers"
      },
      growthMetrics: [
        { month: "Jul", subscribers: 180000, views: 8500000, videos: 14 },
        { month: "Aug", subscribers: 195000, views: 9200000, videos: 15 },
        { month: "Sep", subscribers: 215000, views: 10800000, videos: 13 },
        { month: "Oct", subscribers: 242000, views: 12100000, videos: 16 },
        { month: "Nov", subscribers: 278000, views: 14500000, videos: 14 },
        { month: "Dec", subscribers: 315000, views: 16800000, videos: 15 }
      ],
      contentCategories: [
        { name: "AI & Machine Learning", value: 35 },
        { name: "Programming Tutorials", value: 25 },
        { name: "Career Advice", value: 20 },
        { name: "Tech News & Trends", value: 15 },
        { name: "Product Reviews", value: 5 }
      ],
      recommendations: [
        {
          category: "Content Strategy",
          insight: "Videos with 'AI' or numbers in titles get 3x more views",
          action: "Create content around trending AI topics with specific numbers/statistics in titles"
        },
        {
          category: "Posting Schedule",
          insight: "Weekday afternoon posts (2-4 PM EST) get highest engagement",
          action: "Schedule uploads for Tuesday-Thursday 2-3 PM EST for maximum reach"
        },
        {
          category: "Video Length",
          insight: "12-15 minute videos have 40% higher completion rate",
          action: "Target 13-14 minute length for educational content, 8-10 min for news/trends"
        },
        {
          category: "Thumbnail Design",
          insight: "Thumbnails with faces and bold text get 65% higher CTR",
          action: "Use close-up face expressions + 3-5 word bold text + high contrast colors"
        },
        {
          category: "Engagement",
          insight: "Videos with questions in first 30 seconds get 2.3x comments",
          action: "Start videos with engaging question to audience + pin comment with discussion prompt"
        },
        {
          category: "Monetization",
          insight: "Mid-roll ads at 8-minute mark maximize revenue without hurting retention",
          action: "Place first mid-roll ad at 8:00 mark, second at 12:00 for 15+ min videos"
        }
      ],
      profitability: {
        estimatedRevenue: "$18K - $35K/month",
        revenuePerVideo: "$1,200 - $2,800",
        sponsorshipPotential: "$5K - $15K per integration",
        monetizationStrategies: [
          "YouTube AdSense: $12-20K/month",
          "Sponsored Content: $8-15K/month",
          "Affiliate Marketing: $3-8K/month",
          "Course Sales: $5-12K/month",
          "Membership/Patreon: $2-5K/month"
        ]
      }
    };

    setAnalysisResult(mockResult);
    setIsAnalyzing(false);
  };

  const COLORS = ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#10b981'];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BarChart3 className="w-12 h-12 text-purple-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              YouTube Competitor Analyzer
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered analysis to decode successful channels and replicate their winning strategies
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter competitor channel URL or @username..."
                value={channelUrl}
                onChange={(e) => setChannelUrl(e.target.value)}
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              onClick={analyzeChannel}
              disabled={isAnalyzing || !channelUrl}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Analyze Channel
                </>
              )}
            </button>
          </div>
        </div>

        {/* Analysis Results */}
        {analysisResult && (
          <div className="space-y-8">
            {/* Channel Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-600/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
                <Users className="w-8 h-8 text-purple-400 mb-3" />
                <div className="text-3xl font-bold mb-1">{analysisResult.subscribers}</div>
                <div className="text-gray-400">Subscribers</div>
              </div>
              <div className="bg-gradient-to-br from-pink-600/20 to-pink-600/5 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/30">
                <Eye className="w-8 h-8 text-pink-400 mb-3" />
                <div className="text-3xl font-bold mb-1">{analysisResult.totalViews}</div>
                <div className="text-gray-400">Total Views</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-600/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/30">
                <TrendingUp className="w-8 h-8 text-cyan-400 mb-3" />
                <div className="text-3xl font-bold mb-1">{analysisResult.avgViews}</div>
                <div className="text-gray-400">Avg Views/Video</div>
              </div>
              <div className="bg-gradient-to-br from-orange-600/20 to-orange-600/5 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30">
                <Zap className="w-8 h-8 text-orange-400 mb-3" />
                <div className="text-3xl font-bold mb-1">{analysisResult.engagementRate}</div>
                <div className="text-gray-400">Engagement Rate</div>
              </div>
            </div>

            {/* Growth Chart */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                Growth Trajectory (Last 6 Months)
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={analysisResult.growthMetrics}>
                  <defs>
                    <linearGradient id="colorSubs" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="month" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="subscribers" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorSubs)" name="Subscribers" />
                  <Area type="monotone" dataKey="views" stroke="#ec4899" fillOpacity={1} fill="url(#colorViews)" name="Views" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Content Strategy & Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-400" />
                  Content Strategy
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <div className="font-semibold">Video Length</div>
                      <div className="text-gray-400">{analysisResult.contentStrategy.videoLength}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-pink-400 mt-1" />
                    <div>
                      <div className="font-semibold">Posting Schedule</div>
                      <div className="text-gray-400">{analysisResult.contentStrategy.postingSchedule}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <div className="font-semibold">Thumbnail Style</div>
                      <div className="text-gray-400">{analysisResult.contentStrategy.thumbnailStyle}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-orange-400 mt-1" />
                    <div>
                      <div className="font-semibold">Title Pattern</div>
                      <div className="text-gray-400">{analysisResult.contentStrategy.titlePattern}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                  Content Distribution
                </h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={analysisResult.contentCategories}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {analysisResult.contentCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Performing Videos */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-400" />
                Top Performing Videos
              </h2>
              <div className="space-y-4">
                {analysisResult.topPerformingVideos.map((video, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="font-semibold text-lg mb-2">{video.title}</div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" /> {video.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" /> {video.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" /> {video.comments}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {video.duration}
                          </span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-purple-400">#{index + 1}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                AI-Powered Recommendations to Replicate Success
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisResult.recommendations.map((rec, index) => (
                  <div key={index} className="bg-white/10 rounded-xl p-5 border border-white/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <h3 className="font-bold text-lg">{rec.category}</h3>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-cyan-400 font-semibold">Insight: </span>
                        <span className="text-gray-300">{rec.insight}</span>
                      </div>
                      <div>
                        <span className="text-pink-400 font-semibold">Action: </span>
                        <span className="text-gray-300">{rec.action}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profitability Analysis */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-400" />
                Profitability Blueprint
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-gray-400 mb-1">Estimated Monthly Revenue</div>
                  <div className="text-2xl font-bold text-green-400">{analysisResult.profitability.estimatedRevenue}</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-gray-400 mb-1">Revenue Per Video</div>
                  <div className="text-2xl font-bold text-green-400">{analysisResult.profitability.revenuePerVideo}</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-gray-400 mb-1">Sponsorship Potential</div>
                  <div className="text-2xl font-bold text-green-400">{analysisResult.profitability.sponsorshipPotential}</div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Monetization Strategies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {analysisResult.profitability.monetizationStrategies.map((strategy, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <span>{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Section (shown when no analysis) */}
        {!analysisResult && !isAnalyzing && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-purple-600/30 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Deep Analytics</h3>
              <p className="text-gray-400">Comprehensive analysis of subscriber growth, view patterns, and engagement metrics</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-pink-600/30 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Insights</h3>
              <p className="text-gray-400">Machine learning-powered recommendations based on proven success patterns</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-cyan-600/30 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Profit Strategy</h3>
              <p className="text-gray-400">Detailed monetization blueprints and revenue optimization tactics</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
