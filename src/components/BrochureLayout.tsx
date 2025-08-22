import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BrochureCover from "@/components/BrochureCover";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PartnershipSection from "@/components/PartnershipSection";
import PrivilegesSection from "@/components/PrivilegesSection";
import ContactSection from "@/components/ContactSection";

const BrochureLayout = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
    { component: <BrochureCover />, title: "封面" },
    { component: <ProblemSection />, title: "问题分析" },
    { component: <SolutionSection />, title: "解决方案" },
    { component: <PartnershipSection />, title: "合作计划" },
    { component: <PrivilegesSection />, title: "特权详情" },
    { component: <ContactSection />, title: "联系我们" }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 键盘导航
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevPage();
      } else if (e.key === 'ArrowRight') {
        nextPage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-50 to-green-50">
      {/* 手册容器 */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* 页面导航指示器 */}
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              第 {currentPage + 1} 页 / 共 {pages.length} 页
            </span>
            <div className="flex gap-1">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentPage 
                      ? 'bg-primary w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 手册页面 */}
        <div className="relative perspective-1000">
          <div 
            className="brochure-page transition-transform duration-700 ease-in-out"
            style={{
              transform: currentPage > 0 ? 'rotateY(-15deg)' : 'rotateY(0deg)',
            }}
          >
            {/* 手册阴影和边框效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/20 to-gray-400/30 rounded-lg transform translate-x-2 translate-y-2 -z-10" />
            
            {/* 主要内容区域 */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200/50 min-h-[800px]">
              
              {/* 折叠线效果 */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300/50 to-transparent z-10" />
              
              {/* 当前页面内容 */}
              <div className="relative z-0">
                {pages[currentPage].component}
              </div>

              {/* 页码 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
                - {currentPage + 1} -
              </div>
            </div>
          </div>
        </div>

        {/* 翻页控制按钮 */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={prevPage}
              disabled={currentPage === 0}
              className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              上一页
            </Button>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
              <span className="text-sm font-medium">{pages[currentPage].title}</span>
            </div>
            
            <Button
              variant="outline"
              size="lg"
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            >
              下一页
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* 键盘导航提示 */}
        <div className="fixed bottom-4 right-4 text-xs text-muted-foreground bg-white/80 backdrop-blur-sm rounded px-2 py-1">
          使用 ← → 键翻页
        </div>
      </div>
    </div>
  );
};

export default BrochureLayout;