import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  QrCode, 
  Phone, 
  Globe, 
  MapPin, 
  Mail,
  Zap,
  DollarSign,
  Users
} from "lucide-react";

const ContactSection = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Pricing Highlight */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-premium mb-16">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <DollarSign className="w-8 h-8 text-premium-gold" />
              <h2 className="text-3xl font-bold text-deep-blue">
                官方合作伙伴尊享价
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-tech-blue/10 p-6 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Zap className="w-6 h-6 text-tech-blue" />
                  <h3 className="text-xl font-bold text-tech-blue">全自动处理</h3>
                </div>
                <div className="text-3xl font-bold text-tech-blue mb-2">70元/单</div>
                <p className="text-sm text-muted-foreground">AI全程自动化处理</p>
              </div>
              
              <div className="bg-success-green/10 p-6 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Users className="w-6 h-6 text-success-green" />
                  <h3 className="text-xl font-bold text-success-green">AI辅助处理</h3>
                </div>
                <div className="text-3xl font-bold text-success-green mb-2">30元/单</div>
                <p className="text-sm text-muted-foreground">人工+AI协同处理</p>
              </div>
            </div>
            
            <Badge className="bg-warning-orange text-white text-lg px-4 py-2">
              对比市场价 200-300元/单
            </Badge>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-primary shadow-premium border-0 mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              立即扫码
            </h2>
            <h3 className="text-2xl text-premium-gold mb-8">
              申请成为"AI效率体验官"
            </h3>
            <p className="text-xl text-white/90 mb-8">
              锁定未来，赢在当下！
            </p>
            
            {/* QR Code Placeholder */}
            <div className="bg-white rounded-lg p-8 inline-block mb-8">
              <QrCode className="w-32 h-32 text-deep-blue mx-auto mb-4" />
              <p className="text-deep-blue font-semibold">扫描二维码</p>
              <p className="text-sm text-muted-foreground">立即申请体验</p>
            </div>
            
            <Button size="lg" className="bg-premium-gold text-white hover:bg-premium-gold/90 text-lg px-8 py-4 rounded-lg shadow-premium">
              立即申请
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-tech">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-deep-blue mb-6 text-center">
              联系我们
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-tech-blue" />
                  <div>
                    <p className="font-semibold text-deep-blue">联系人</p>
                    <p className="text-muted-foreground">签证助手</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-tech-blue" />
                  <div>
                    <p className="font-semibold text-deep-blue">联系电话</p>
                    <p className="text-muted-foreground">028-62059704</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-tech-blue" />
                  <div>
                    <p className="font-semibold text-deep-blue">官方网站</p>
                    <p className="text-muted-foreground">www.claymore.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-tech-blue" />
                  <div>
                    <p className="font-semibold text-deep-blue">公司地址</p>
                    <p className="text-muted-foreground">成都市高新区天府五街200号5号楼5楼</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactSection;