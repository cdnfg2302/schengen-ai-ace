import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-visa-ai.jpg";

const BrochureCover = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col justify-between items-center text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-8 py-20 max-w-4xl mx-auto flex-1">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          旺季抢订单
          <br />
          <span className="text-tech-blue">淡季练内功</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-3xl">
          "申根签证助手"AI系统，赋能您的业务，赢在下一个旺季。
        </p>
        
        {/* CTA Button */}
        <Button size="lg" className="bg-white text-deep-blue hover:bg-white/90 text-lg px-8 py-4 rounded-lg shadow-premium">
          立即了解详情
        </Button>
      </div>
      
      {/* Footer */}
      <div className="relative z-10 text-center pb-8 opacity-80">
        <p className="text-lg mb-2">您的公司Logo</p>
        <p className="text-sm">您的官网地址</p>
      </div>
    </div>
  );
};

export default BrochureCover;