import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  Award, 
  Users, 
  Megaphone, 
  Zap, 
  Headphones, 
  GraduationCap 
} from "lucide-react";

const PrivilegesSection = () => {
  const privileges = [
    {
      icon: Award,
      title: "品牌背书",
      value: "增强客户信任，形成差异化竞争，提升品牌形象。"
    },
    {
      icon: Users,
      title: "专属流量",
      value: "每季度保底导流 100 条 意向线索，直接带来订单。"
    },
    {
      icon: Megaphone,
      title: "营销共创",
      value: "获得免费的专业 PR 机会，提升品牌声量。"
    },
    {
      icon: Zap,
      title: "功能先行权",
      value: "技术领先于同行，并能深度影响产品走向。"
    },
    {
      icon: Headphones,
      title: "VIP 支持",
      value: "降低试错与运维成本，保障业务运营的稳定性。"
    },
    {
      icon: GraduationCap,
      title: "培训认证",
      value: "激励内部核心人才，为您的团队提供专业背书。"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Crown className="w-16 h-16 text-premium-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            "官方合作伙伴"独家战略特权
          </h2>
          <h3 className="text-2xl md:text-3xl text-white/90">
            这不只是合作，更是对您行业地位的加冕
          </h3>
        </div>

        {/* Privileges Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {privileges.map((privilege, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm shadow-tech hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-deep-blue">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <privilege.icon className="w-6 h-6 text-white" />
                  </div>
                  {privilege.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {privilege.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Showcase */}
        <Card className="bg-gradient-primary shadow-premium border-0">
          <CardContent className="p-8 text-center">
            <Crown className="w-16 h-16 text-premium-gold mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              成为官方合作伙伴
            </h3>
            <p className="text-xl text-white/90 mb-6">
              解锁所有特权，开启业务新篇章
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-premium-gold text-white text-lg px-4 py-2">
                品牌提升
              </Badge>
              <Badge className="bg-success-green text-white text-lg px-4 py-2">
                流量导入
              </Badge>
              <Badge className="bg-warning-orange text-white text-lg px-4 py-2">
                技术领先
              </Badge>
              <Badge className="bg-tech-blue text-white text-lg px-4 py-2">
                专业认证
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-white text-xl mb-6">
            从签证处理到业务战略，我们是您最值得信赖的合作伙伴
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-premium-gold text-lg font-semibold">
              仅限前10名合作伙伴享受首批特权
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivilegesSection;