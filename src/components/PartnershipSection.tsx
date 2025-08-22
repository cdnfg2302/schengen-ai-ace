import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  Gift, 
  Target, 
  TrendingUp, 
  Users, 
  MessageSquare 
} from "lucide-react";

const PartnershipSection = () => {
  const incentives = [
    {
      icon: Gift,
      title: "个人认证奖",
      condition: "专员成功处理第一单",
      reward: "40元 / 人"
    },
    {
      icon: Target,
      title: "团队里程碑奖",
      condition: "累计成功处理20/50单",
      reward: "500元 / 800元"
    },
    {
      icon: MessageSquare,
      title: "产品共创奖",
      condition: "提供高质量反馈被采纳",
      reward: "100元 / 人"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-success flex items-center justify-center py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Crown className="w-16 h-16 text-premium-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            "精英伙伴合作计划"正式启动！
          </h2>
          <h3 className="text-2xl md:text-3xl text-white/90">
            从免费体验到战略共赢
          </h3>
        </div>

        {/* Step Process */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Step 1 */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-tech">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-premium-gold text-white text-lg px-4 py-2">
                  Step 1
                </Badge>
                <CardTitle className="text-xl text-deep-blue">
                  成为"AI效率体验官"
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-success-green/10 p-4 rounded-lg">
                <h4 className="font-bold text-success-green mb-2 flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  零成本加入
                </h4>
                <p className="text-muted-foreground">
                  尊享 <span className="font-bold text-success-green">2个月</span> 系统完全免费使用权。
                </p>
              </div>
              
              <div className="bg-premium-gold/10 p-4 rounded-lg">
                <h4 className="font-bold text-premium-gold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  团队激励
                </h4>
                <p className="text-muted-foreground">
                  参与 "团队成长基金" 计划，赢取丰厚现金奖励！
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-tech">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-tech-blue text-white text-lg px-4 py-2">
                  Step 2
                </Badge>
                <CardTitle className="text-xl text-deep-blue">
                  晋升"官方认证合作伙伴"
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-tech-blue/10 p-4 rounded-lg">
                <h4 className="font-bold text-tech-blue mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  达成条件
                </h4>
                <p className="text-muted-foreground">
                  2个月内，成功处理签证订单 累计达到<span className="font-bold text-tech-blue">100单</span>。
                </p>
              </div>
              
              <div className="bg-deep-blue/10 p-4 rounded-lg">
                <h4 className="font-bold text-deep-blue mb-2 flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  解锁特权
                </h4>
                <p className="text-muted-foreground">
                  获得六大维度的独家战略特权，实现业务腾飞！
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Incentive Table */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-premium">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-deep-blue flex items-center justify-center gap-2">
              <Users className="w-8 h-8" />
              激励计划详情
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {incentives.map((incentive, index) => (
                <div key={index} className="text-center p-6 border rounded-lg hover:shadow-tech transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <incentive.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-deep-blue mb-2">{incentive.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{incentive.condition}</p>
                  <Badge className="bg-premium-gold text-white text-lg px-3 py-1">
                    {incentive.reward}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-premium-gold text-white hover:bg-premium-gold/90 text-lg px-8 py-4 rounded-lg shadow-premium">
            立即申请成为体验官
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;