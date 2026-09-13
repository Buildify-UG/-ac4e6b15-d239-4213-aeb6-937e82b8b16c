import { useNavigate } from "react-router-dom";
import { Sparkles, Zap, Gift, Star, ArrowRight, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-900 rounded-full">
              <span className="text-emerald-700 dark:text-emerald-300 text-sm font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                নতুন যুগের সেবা প্ল্যাটফর্ম
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              ইসলামি সেবা সবার জন্য
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              প্রতিদিন মাত্র ২ টাকায় ১০০+ ইসলামি সেবা পান। গান, গজল, ওয়ালপেপার, ছবি এবং আরও অনেক কিছু।
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8"
                onClick={() => navigate("/services")}
              >
                সেবা দেখুন
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8"
              >
                আরও জানুন
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl blur-3xl opacity-20"></div>
            <Card className="relative p-8 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border-emerald-200 dark:border-slate-700">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">১০০+ সেবা</p>
                    <p className="text-sm text-muted-foreground">সব ধরনের ইসলামি কন্টেন্ট</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">প্রতিটি ক্রয়ে কুপন</p>
                    <p className="text-sm text-muted-foreground">নগদ টাকা ও পুরস্কার জিতুন</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">মাত্র ২ টাকা</p>
                    <p className="text-sm text-muted-foreground">প্রতিটি সেবার মূল্য</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          আমরা কী অফার করি?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 hover:shadow-lg transition-all border-emerald-200 dark:border-slate-700">
            <div className="p-4 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900 rounded-lg w-fit mb-4">
              <Star className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">ইসলামি কন্টেন্ট</h3>
            <p className="text-muted-foreground">
              কুরআন, হাদিস, দোয়া, নাশিদ, গজল এবং আরও অনেক ইসলামি সামগ্রী।
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all border-blue-200 dark:border-slate-700">
            <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg w-fit mb-4">
              <Gift className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">কুপন সিস্টেম</h3>
            <p className="text-muted-foreground">
              প্রতিটি ক্রয়ের সাথে কুপন পান এবং নগদ টাকা বা পুরস্কার জিতুন।
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all border-purple-200 dark:border-slate-700">
            <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg w-fit mb-4">
              <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">সাশ্রয়ী মূল্য</h3>
            <p className="text-muted-foreground">
              মাত্র ২ টাকায় যেকোনো সেবা ডাউনলোড করুন এবং উপভোগ করুন।
            </p>
          </Card>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          বিভাগ সমূহ
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            "ইসলামি", "গজল", "ওয়ালপেপার", "ছবি", "গল্প",
            "রিমাইন্ডার", "উক্তি", "নামাজ", "জ্ঞান", "শিল্প",
            "ভিডিও", "সরঞ্জাম", "আমল", "ভাষা", "ডিজাইন",
          ].map((cat) => (
            <Card
              key={cat}
              className="p-4 text-center hover:shadow-md transition-all cursor-pointer border-emerald-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-600"
            >
              <p className="font-semibold text-foreground">{cat}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border-emerald-200 dark:border-slate-700 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              ১০০+
            </p>
            <p className="text-muted-foreground">সেবা উপলব্ধ</p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border-blue-200 dark:border-slate-700 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              ৫০K+
            </p>
            <p className="text-muted-foreground">সন্তুষ্ট ব্যবহারকারী</p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 border-purple-200 dark:border-slate-700 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              ৯৮%
            </p>
            <p className="text-muted-foreground">সন্তুষ্টির হার</p>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <Card className="p-12 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 border-0 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">আজই শুরু করুন</h2>
          <p className="text-lg mb-8 opacity-90">
            ১০০+ ইসলামি সেবা এখনই অ্যাক্সেস করুন এবং প্রতিটি ক্রয়ে পুরস্কার জিতুন।
          </p>
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8"
            onClick={() => navigate("/services")}
          >
            সেবা দেখুন
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-emerald-200 dark:border-slate-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>© ২০২৬ ইসলামি সেবা। সকল অধিকার সংরক্ষিত।</p>
        </div>
      </footer>
    </div>
  );
}
