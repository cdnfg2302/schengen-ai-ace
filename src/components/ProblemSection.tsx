import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";

const ProblemSection = () => {
  return (
    <div className="min-h-screen bg-gradient-warning flex items-center justify-center py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            您的签证业务是否正面临这些"隐形成本"？
          </h2>
          <h3 className="text-2xl md:text-3xl text-white/90 mb-8">
            传统模式 VS. AI赋能：一场效率的革命
          </h3>
        </div>

        {/* Comparison Table */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-premium">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-deep-blue">
              成本对比分析
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-premium-gold">
                    <th className="text-left py-4 px-4 font-bold text-deep-blue">对比维度</th>
                    <th className="text-left py-4 px-4 font-bold text-warning-orange">传统人工处理模式</th>
                    <th className="text-left py-4 px-4 font-bold text-tech-blue">"申根签证助手"AI协同模式</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4 text-deep-blue" />
                      表格填写
                    </td>
                    <td className="py-4 px-4 text-warning-orange">
                      15-20 分钟 手动录入，极易出错
                    </td>
                    <td className="py-4 px-4 text-tech-blue font-semibold">
                      节省 13 分钟，错误率降至 2% 以内
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-deep-blue" />
                      预约抢号
                    </td>
                    <td className="py-4 px-4 text-warning-orange">
                      人工蹲守，成功率无保障
                    </td>
                    <td className="py-4 px-4 text-tech-blue font-semibold">
                      75% 以上 全自动抢号
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-deep-blue" />
                      成本结构
                    </td>
                    <td className="py-4 px-4 text-warning-orange">
                      200-300元/单，效率有上限
                    </td>
                    <td className="py-4 px-4 text-tech-blue font-semibold">
                      成本低至 30-70元/单，打破效率瓶颈
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-deep-blue" />
                      管理决策
                    </td>
                    <td className="py-4 px-4 text-warning-orange">
                      依赖人工统计，决策滞后
                    </td>
                    <td className="py-4 px-4 text-tech-blue font-semibold">
                      实时数据看板，决策透明
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Pain Points */}
        <div className="mt-12 text-center space-y-4">
          <blockquote className="text-white text-xl italic">
            "每一个手动操作的失误，都是一次客户信任的流失。"
          </blockquote>
          <blockquote className="text-white text-xl italic">
            "每一次无效的页面刷新，都是一笔人力成本的浪费。"
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;