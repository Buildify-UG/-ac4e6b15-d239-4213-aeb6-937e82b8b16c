import { useState } from "react";
import { Heart, Download, Zap, Gift, Star, Music, Image, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const SERVICES = [
  { id: 1, name: "কুরআন তিলাওয়াত", category: "ইসলামি", icon: BookOpen, price: 2 },
  { id: 2, name: "হাদিস দৈনিক", category: "ইসলামি", icon: BookOpen, price: 2 },
  { id: 3, name: "দোয়া সংগ্রহ", category: "ইসলামি", icon: BookOpen, price: 2 },
  { id: 4, name: "সূরা ইয়াসিন", category: "ইসলামি", icon: BookOpen, price: 2 },
  { id: 5, name: "আয়াতুল কুরসি", category: "ইসলামি", icon: BookOpen, price: 2 },
  { id: 6, name: "নাশিদ সংগ্রহ", category: "গজল", icon: Music, price: 2 },
  { id: 7, name: "ইসলামি গান", category: "গজল", icon: Music, price: 2 },
  { id: 8, name: "কোরান রিসাইটেশন", category: "গজল", icon: Music, price: 2 },
  { id: 9, name: "আজান সংগ্রহ", category: "গজল", icon: Music, price: 2 },
  { id: 10, name: "সুফি সঙ্গীত", category: "গজল", icon: Music, price: 2 },
  { id: 11, name: "ইসলামি ওয়ালপেপার ১", category: "ওয়ালপেপার", icon: Image, price: 2 },
  { id: 12, name: "ইসলামি ওয়ালপেপার ২", category: "ওয়ালপেপার", icon: Image, price: 2 },
  { id: 13, name: "মসজিদ ওয়ালপেপার", category: "ওয়ালপেপার", icon: Image, price: 2 },
  { id: 14, name: "কাবা শরীফ ওয়ালপেপার", category: "ওয়ালপেপার", icon: Image, price: 2 },
  { id: 15, name: "আরব সৌন্দর্য ওয়ালপেপার", category: "ওয়ালপেপার", icon: Image, price: 2 },
  { id: 16, name: "ইসলামি ছবি ১", category: "ছবি", icon: Image, price: 2 },
  { id: 17, name: "ইসলামি ছবি ২", category: "ছবি", icon: Image, price: 2 },
  { id: 18, name: "পয়গম্বর মুহাম্মদ ছবি", category: "ছবি", icon: Image, price: 2 },
  { id: 19, name: "কোরান টেক্সট আর্ট", category: "ছবি", icon: Image, price: 2 },
  { id: 20, name: "ইসলামি ক্যালিগ্রাফি", category: "ছবি", icon: Image, price: 2 },
  { id: 21, name: "সাহাবাদের গল্প", category: "গল্প", icon: BookOpen, price: 2 },
  { id: 22, name: "নবীদের জীবনী", category: "গল্প", icon: BookOpen, price: 2 },
  { id: 23, name: "ইসলামি ঐতিহ্য", category: "গল্প", icon: BookOpen, price: 2 },
  { id: 24, name: "বিজ্ঞানে ইসলাম", category: "গল্প", icon: BookOpen, price: 2 },
  { id: 25, name: "আমাদের ঐতিহ্য", category: "গল্প", icon: BookOpen, price: 2 },
  { id: 26, name: "নামাজের সময়", category: "রিমাইন্ডার", icon: Zap, price: 2 },
  { id: 27, name: "দৈনিক ইসলামি টিপস", category: "রিমাইন্ডার", icon: Zap, price: 2 },
  { id: 28, name: "আমল রুটিন", category: "রিমাইন্ডার", icon: Zap, price: 2 },
  { id: 29, name: "কুরআন পড়ার পরিকল্পনা", category: "রিমাইন্ডার", icon: Zap, price: 2 },
  { id: 30, name: "রমজান গাইড", category: "রিমাইন্ডার", icon: Zap, price: 2 },
  { id: 31, name: "কুরআনের আয়াত", category: "উক্তি", icon: BookOpen, price: 2 },
  { id: 32, name: "হাদিসের উক্তি", category: "উক্তি", icon: BookOpen, price: 2 },
  { id: 33, name: "ইসলামি প্রজ্ঞা", category: "উক্তি", icon: BookOpen, price: 2 },
  { id: 34, name: "ইমাম আলীর বাণী", category: "উক্তি", icon: BookOpen, price: 2 },
  { id: 35, name: "প্রেরণাদায়ক বাণী", category: "উক্তি", icon: BookOpen, price: 2 },
  { id: 36, name: "ফজর নামাজ", category: "নামাজ", icon: BookOpen, price: 2 },
  { id: 37, name: "জোহর নামাজ", category: "নামাজ", icon: BookOpen, price: 2 },
  { id: 38, name: "আসর নামাজ", category: "নামাজ", icon: BookOpen, price: 2 },
  { id: 39, name: "মাগরিব নামাজ", category: "নামাজ", icon: BookOpen, price: 2 },
  { id: 40, name: "এশা নামাজ", category: "নামাজ", icon: BookOpen, price: 2 },
  { id: 41, name: "তাওহীদ পাঠ", category: "জ্ঞান", icon: BookOpen, price: 2 },
  { id: 42, name: "ফিকহ শিক্ষা", category: "জ্ঞান", icon: BookOpen, price: 2 },
  { id: 43, name: "সীরাত পাঠ", category: "জ্ঞান", icon: BookOpen, price: 2 },
  { id: 44, name: "আখলাক শিক্ষা", category: "জ্ঞান", icon: BookOpen, price: 2 },
  { id: 45, name: "ইসলামি আইন", category: "জ্ঞান", icon: BookOpen, price: 2 },
  { id: 46, name: "ইসলামি শিল্প ১", category: "শিল্প", icon: Image, price: 2 },
  { id: 47, name: "ইসলামি শিল্প ২", category: "শিল্প", icon: Image, price: 2 },
  { id: 48, name: "মসজিদ স্থাপত্য", category: "শিল্প", icon: Image, price: 2 },
  { id: 49, name: "ইসলামি মোটিফ", category: "শিল্প", icon: Image, price: 2 },
  { id: 50, name: "ঐতিহ্যবাহী ডিজাইন", category: "শিল্প", icon: Image, price: 2 },
  { id: 51, name: "ইসলামি ভিডিও ১", category: "ভিডিও", icon: Music, price: 2 },
  { id: 52, name: "ইসলামি ভিডিও ২", category: "ভিডিও", icon: Music, price: 2 },
  { id: 53, name: "মোটিভেশনাল ভিডিও", category: "ভিডিও", icon: Music, price: 2 },
  { id: 54, name: "শিক্ষামূলক ভিডিও", category: "ভিডিও", icon: Music, price: 2 },
  { id: 55, name: "ইসলামি ডকুমেন্টারি", category: "ভিডিও", icon: Music, price: 2 },
  { id: 56, name: "ইসলামি ক্যালেন্ডার", category: "সরঞ্জাম", icon: Zap, price: 2 },
  { id: 57, name: "জাকাত ক্যালকুলেটর", category: "সরঞ্জাম", icon: Zap, price: 2 },
  { id: 58, name: "কিবলা দিক খুঁজুন", category: "সরঞ্জাম", icon: Zap, price: 2 },
  { id: 59, name: "নামাজের সময়সূচী", category: "সরঞ্জাম", icon: Zap, price: 2 },
  { id: 60, name: "ইসলামি শব্দকোষ", category: "সরঞ্জাম", icon: Zap, price: 2 },
  { id: 61, name: "সুন্নাহ অনুশীলন", category: "আমল", icon: BookOpen, price: 2 },
  { id: 62, name: "ইসলামি শিষ্টাচার", category: "আমল", icon: BookOpen, price: 2 },
  { id: 63, name: "পরিবার পরামর্শ", category: "আমল", icon: BookOpen, price: 2 },
  { id: 64, name: "বিবাহ নির্দেশিকা", category: "আমল", icon: BookOpen, price: 2 },
  { id: 65, name: "শিশু শিক্ষা", category: "আমল", icon: BookOpen, price: 2 },
  { id: 66, name: "আরবি শেখা ১", category: "ভাষা", icon: BookOpen, price: 2 },
  { id: 67, name: "আরবি শেখা ২", category: "ভাষা", icon: BookOpen, price: 2 },
  { id: 68, name: "কুরআনি আরবি", category: "ভাষা", icon: BookOpen, price: 2 },
  { id: 69, name: "আরবি উচ্চারণ", category: "ভাষা", icon: BookOpen, price: 2 },
  { id: 70, name: "আরবি লেখা", category: "ভাষা", icon: BookOpen, price: 2 },
  { id: 71, name: "মেহেন্দি ডিজাইন", category: "ডিজাইন", icon: Image, price: 2 },
  { id: 72, name: "ফ্যাশন গাইড", category: "ডিজাইন", icon: Image, price: 2 },
  { id: 73, name: "ঐতিহ্যবাহী পোশাক", category: "ডিজাইন", icon: Image, price: 2 },
  { id: 74, name: "আধুনিক ইসলামি ফ্যাশন", category: "ডিজাইন", icon: Image, price: 2 },
  { id: 75, name: "গহনা ডিজাইন", category: "ডিজাইন", icon: Image, price: 2 },
  { id: 76, name: "রান্নার রেসিপি ১", category: "রান্না", icon: Music, price: 2 },
  { id: 77, name: "রান্নার রেসিপি ২", category: "রান্না", icon: Music, price: 2 },
  { id: 78, name: "হালাল খাবার", category: "রান্না", icon: Music, price: 2 },
  { id: 79, name: "রমজান খাবার", category: "রান্না", icon: Music, price: 2 },
  { id: 80, name: "ঐতিহ্যবাহী খাবার", category: "রান্না", icon: Music, price: 2 },
  { id: 81, name: "স্বাস্থ্য পরামর্শ", category: "স্বাস্থ্য", icon: Zap, price: 2 },
  { id: 82, name: "ইসলামি চিকিৎসা", category: "স্বাস্থ্য", icon: Zap, price: 2 },
  { id: 83, name: "যোগ ব্যায়াম", category: "স্বাস্থ্য", icon: Zap, price: 2 },
  { id: 84, name: "মানসিক স্বাস্থ্য", category: "স্বাস্থ্য", icon: Zap, price: 2 },
  { id: 85, name: "ফিটনেস গাইড", category: "স্বাস্থ্য", icon: Zap, price: 2 },
  { id: 86, name: "ব্যবসা পরামর্শ", category: "ব্যবসা", icon: Zap, price: 2 },
  { id: 87, name: "হালাল ব্যবসা", category: "ব্যবসা", icon: Zap, price: 2 },
  { id: 88, name: "আর্থিক পরিকল্পনা", category: "ব্যবসা", icon: Zap, price: 2 },
  { id: 89, name: "উদ্যোক্তা গাইড", category: "ব্যবসা", icon: Zap, price: 2 },
  { id: 90, name: "সাফল্যের গল্প", category: "ব্যবসা", icon: Zap, price: 2 },
  { id: 91, name: "পরিবেশ সংরক্ষণ", category: "পরিবেশ", icon: Image, price: 2 },
  { id: 92, name: "সবুজ জীবনযাপন", category: "পরিবেশ", icon: Image, price: 2 },
  { id: 93, name: "প্রকৃতি সৌন্দর্য", category: "পরিবেশ", icon: Image, price: 2 },
  { id: 94, name: "ইসলামে পরিবেশ", category: "পরিবেশ", icon: Image, price: 2 },
  { id: 95, name: "জীববৈচিত্র্য", category: "পরিবেশ", icon: Image, price: 2 },
  { id: 96, name: "বাচ্চাদের গল্প", category: "শিশু", icon: BookOpen, price: 2 },
  { id: 97, name: "শিশু শিক্ষা খেলা", category: "শিশু", icon: BookOpen, price: 2 },
  { id: 98, name: "ইসলামি শিশু গান", category: "শিশু", icon: Music, price: 2 },
  { id: 99, name: "শিশু নিরাপত্তা", category: "শিশু", icon: BookOpen, price: 2 },
  { id: 100, name: "প্যারেন্টিং টিপস", category: "শিশু", icon: BookOpen, price: 2 },
];

const CATEGORIES = [
  "সব", "ইসলামি", "গজল", "ওয়ালপেপার", "ছবি", "গল্প", "রিমাইন্ডার",
  "উক্তি", "নামাজ", "জ্ঞান", "শিল্প", "ভিডিও", "সরঞ্জাম", "আমল",
  "ভাষা", "ডিজাইন", "রান্না", "স্বাস্থ্য", "ব্যবসা", "পরিবেশ", "শিশু",
];

interface Coupon {
  id: string;
  reward: string;
  used: boolean;
}

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("সব");
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [balance, setBalance] = useState(0);

  const filteredServices = selectedCategory === "সব"
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const handleServiceClick = (service: typeof SERVICES[0]) => {
    const rewards = ["৫০ টাকা", "১০০ টাকা", "আইফোন", "ল্যাপটপ", "ট্যাবলেট", "গাড়ি"];
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
    
    const newCoupon: Coupon = {
      id: `COUPON-${Date.now()}`,
      reward: randomReward,
      used: false,
    };
    
    setCoupons([newCoupon, ...coupons]);
    setBalance(balance + 2);
    
    toast.success(`${service.name} সফলভাবে ডাউনলোড হয়েছে!`, {
      description: `কুপন: ${newCoupon.id} | পুরস্কার: ${randomReward}`,
    });
  };

  const handleClaimCoupon = (couponId: string) => {
    setCoupons(coupons.map((c) => (c.id === couponId ? { ...c, used: true } : c)));
    toast.success("কুপন দাবি করা হয়েছে!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <header className="sticky top-0 z-40 border-b border-emerald-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                ইসলামি সেবা
              </h1>
              <p className="text-xs text-muted-foreground">প্রতিদিন ২ টাকায় সেবা</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Card className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-950 dark:to-blue-950 border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-semibold text-emerald-900 dark:text-emerald-100">
                  {coupons.length} কুপন
                </span>
              </div>
            </Card>
            <Card className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-semibold text-blue-900 dark:text-blue-100">
                  {balance} টাকা
                </span>
              </div>
            </Card>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-foreground">বিভাগ নির্বাচন করুন</h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white"
                    : "hover:bg-secondary"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-emerald-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-600 cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {service.name}
                  </h3>
                  <div className="flex items-center justify-between pt-4 border-t border-emerald-200 dark:border-slate-700">
                    <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      ₹{service.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {coupons.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">আপনার কুপন</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coupons.map((coupon) => (
                <Card
                  key={coupon.id}
                  className={`p-6 border-2 transition-all ${
                    coupon.used
                      ? "border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800"
                      : "border-emerald-400 dark:border-emerald-600 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Gift
                      className={`w-8 h-8 ${
                        coupon.used ? "text-gray-400" : "text-emerald-500 dark:text-emerald-400"
                      }`}
                    />
                    {coupon.used && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        দাবি করা হয়েছে
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">কুপন আইডি:</p>
                  <p className="font-mono text-sm font-bold text-foreground mb-4">
                    {coupon.id}
                  </p>
                  <div className="mb-4 p-3 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-slate-700">
                    <p className="text-xs text-muted-foreground mb-1">পুরস্কার:</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      {coupon.reward}
                    </p>
                  </div>
                  {!coupon.used && (
                    <Button
                      onClick={() => handleClaimCoupon(coupon.id)}
                      className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      কুপন দাবি করুন
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
