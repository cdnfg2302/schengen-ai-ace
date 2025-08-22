import { Card, CardContent } from "@/components/ui/card";
import { 
  ScanText, 
  FileText, 
  Calendar, 
  Zap, 
  Webhook, 
  BarChart3 
} from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: ScanText,
      title: "材料 OCR + LLM 校验",
      description: "杜绝源头错误。"
    },
    {
      icon: FileText,
      title: "智能表单生成",
      description: "解放重复劳动。"
    },
    {
      icon: Calendar,
      title: "行程单自动预订",
      description: "确保材料合规。"
    },
    {
      icon: Zap,
      title: "智能预约微服务",
      description: "7x24小时待命。"
    },
    {
      icon: Webhook,
      title: "人工兜底 Webhook",
      description: "100%流程闭环。"
    },
    {
      icon: BarChart3,
      title: "数据看板",
      description: "洞悉业务全局。"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            我们的解决方案：您的"AI签证处理中心"
          </h2>
          <h3 className="text-2xl md:text-3xl text-white/90">
            六大核心功能，重塑您的工作流
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm shadow-tech hover:shadow-premium transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-deep-blue mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-premium">
          <CardContent className="p-8 text-center">
            <blockquote className="text-2xl text-deep-blue font-semibold italic">
              "我们不止是工具，更是您降本增效、提升核心竞争力的战略伙伴。"
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SolutionSection;