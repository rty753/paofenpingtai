import { 
  CreditCard, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp, 
  Globe, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">跑分平台</div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-blue-600">功能特性</a>
              <a href="/features" className="text-gray-600 hover:text-blue-600">功能详情</a>
              <a href="#advantages" className="text-gray-600 hover:text-blue-600">平台优势</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">联系我们</a>
            </div>
            {/* Mobile menu */}
            <div className="md:hidden flex space-x-2 text-sm">
              <a href="#features" className="text-gray-600 hover:text-blue-600 px-2 py-1">功能</a>
              <a href="/features" className="text-gray-600 hover:text-blue-600 px-2 py-1">详情</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 px-2 py-1">联系</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            专业<span className="text-blue-600">跑分平台</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>印度三方支付系统
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            专业的USDT跑分平台，巅峰跑分平台技术，提供银行卡跑分平台解决方案。我们的跑分系统源码经过深度优化，支持跑分平台搭建、手机跑分平台开发，是最新跑分平台的行业标杆。阿三自动充u挂卡代收代付，自动回调，码商团队分级代理功能，支持所有印度银行公户个户唤醒，Pe Paytm Mobikwik FreeCharge等5个主流钱包。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center min-h-[48px] text-lg"
            >
              立即咨询 <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="https://t.me/tatapay15" 
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center min-h-[48px] text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Telegram联系
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心功能特性
            </h2>
            <p className="text-xl text-gray-600">
              完整的跑分平台解决方案，满足您的所有需求
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">代收功能</h3>
              <p className="text-gray-600">便捷收款，支持多种钱包渠道对接，实时到账处理</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">代付功能</h3>
              <p className="text-gray-600">快速付款，安全稳定、高可控的资金流转系统</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">跑分系统</h3>
              <p className="text-gray-600">无需收卡，阿三注册跑分APP，通过交易获取佣金</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">分级代理</h3>
              <p className="text-gray-600">码商团队分级代理功能，完善的推广体系</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">自动回调</h3>
              <p className="text-gray-600">实时交易状态回调，确保交易数据同步</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">全银行支持</h3>
              <p className="text-gray-600">支持印度所有银行公户个户，主流钱包全覆盖</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              平台优势
            </h2>
            <p className="text-xl text-gray-600">
              为什么选择我们的跑分平台
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">查询性能优化</h3>
                    <p className="text-gray-600">针对部分查询逻辑进行了深度优化，响应更快、使用更流畅</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">数据统计增强</h3>
                    <p className="text-gray-600">增加多维度统计汇总，帮助您更清晰掌握业务数据</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">系统稳定性提升</h3>
                    <p className="text-gray-600">修复已知BUG，优化部分边界场景下的处理逻辑</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">对账更清晰</h3>
                    <p className="text-gray-600">交易更智能，降低成本，缓解账户问题</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">实时结算系统</h3>
              <p className="mb-6">在APP内实时结算，一定程度上缓解账户问题，降低成本。支持接入商户、平台。</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm opacity-90">系统稳定性</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm opacity-90">主流钱包</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Background Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              跑分行业深度解析
            </h2>
            <p className="text-xl text-gray-600">
              了解跑分是什么意思，探索跑分赚钱的核心机制
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">什么是跑分系统？</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                跑分是指通过自己的银行卡或UPI等收款码，为第三方代收款项并从中获得佣金的一种商业模式。USDT跑分系统作为最新跑分平台的核心技术，为用户提供安全、高效的跑分流程。我们的系统跑分技术支持多种支付方式，包括银行卡跑分、UPI跑分平台等多元化解决方案。
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                跑分平台推荐选择我们的原因在于，我们提供完整的跑分平台源码和技术支持，帮助客户快速搭建属于自己的跑分车队。无论是个人用户还是企业级客户，都能在我们的平台找到适合的跑分系统解决方案。
              </p>
              <p className="text-gray-700 leading-relaxed">
                金马跑分平台等传统平台存在诸多限制，而我们的手机跑分平台app则提供了更灵活、更安全的操作体验。通过跑分论坛的用户反馈，我们的平台在稳定性和收益率方面都表现优异。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">跑分赚钱的核心优势</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                博彩跑分作为新兴的盈利模式，为用户提供了稳定的收益来源。我们的跑分平台有哪些特色功能呢？首先，支持多币种交易，特别是USDT跑分平台功能，让用户可以在全球范围内进行资金流转。
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                巅峰跑分平台的技术架构确保了系统的高可用性和安全性。我们的银行卡跑分平台采用先进的风控系统，有效防范各类交易风险。用户通过我们的跑分流程，可以实现24小时不间断的收益获取。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最新跑分平台的发展趋势表明，移动端将成为主流。我们的手机跑分平台完美适配各种移动设备，让用户随时随地都能参与跑分活动。通过我们的跑分车队管理系统，团队协作变得更加高效。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advantages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              跑分平台搭建技术优势
            </h2>
            <p className="text-xl text-gray-600">
              专业的跑分系统源码，助力您的跑分平台app快速上线
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">完整源码交付</h3>
              <p className="text-gray-700 leading-relaxed">
                我们提供完整的跑分平台源码，包括前端、后端、数据库设计等全套技术方案。无论您是要搭建USDT跑分系统还是传统的银行卡跑分平台，我们的源码都能满足您的需求。系统跑分的核心算法经过多年优化，确保平台的稳定运行。
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">多平台兼容</h3>
              <p className="text-gray-700 leading-relaxed">
                支持跑分平台app在iOS和Android双平台运行，同时提供手机跑分平台的响应式网页版本。我们的技术团队深入研究了各种跑分平台有哪些技术难点，并提供了完美的解决方案。无论是博彩跑分还是传统金融跑分，都能无缝对接。
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">专业技术支持</h3>
              <p className="text-gray-700 leading-relaxed">
                我们的技术团队在跑分论坛具有良好声誉，提供7×24小时的技术支持服务。从跑分平台搭建的初期规划到后期运营维护，我们都有专业的技术人员为您保驾护航。最新跑分平台的技术发展趋势，我们始终走在行业前沿。
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">跑分流程详解</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-400">平台方操作流程</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• 部署跑分系统源码到服务器</li>
                  <li>• 配置USDT跑分平台参数</li>
                  <li>• 接入银行卡跑分平台接口</li>
                  <li>• 建立跑分车队管理体系</li>
                  <li>• 设置UPI跑分平台通道</li>
                  <li>• 启动跑分平台app推广</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-green-400">用户参与流程</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• 下载手机跑分平台应用</li>
                  <li>• 注册并完成实名认证</li>
                  <li>• 绑定银行卡或UPI账户</li>
                  <li>• 学习跑分是什么意思和操作方法</li>
                  <li>• 开始跑分赚钱的实际操作</li>
                  <li>• 在跑分论坛分享经验心得</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              成功案例展示
            </h2>
            <p className="text-xl text-gray-600">
              看看其他客户如何通过我们的跑分平台实现盈利
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">巅峰跑分平台案例</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                某客户使用我们的跑分系统源码搭建了自己的USDT跑分平台，上线3个月内就积累了5000+活跃用户。通过优化跑分流程和建立专业的跑分车队，月收益突破100万元。他们的成功经验在跑分论坛被广泛分享，成为最新跑分平台的标杆案例。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">银行卡跑分平台案例</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                一家金融服务公司通过我们的银行卡跑分平台解决方案，成功转型为专业的跑分服务提供商。他们的手机跑分平台app在应用商店获得了4.8分的高评价，用户规模达到2万+。通过系统跑分的技术优势，帮助用户实现稳定的跑分赚钱目标。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">博彩跑分案例</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                一个专注于博彩跑分的团队，使用我们的跑分平台源码快速搭建了自己的业务系统。通过整合UPI跑分平台和传统银行渠道，他们的跑分平台推荐指数在行业内名列前茅。目前已发展成为拥有多个跑分车队的大型运营商。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              常见问题解答
            </h2>
            <p className="text-xl text-gray-600">
              关于跑分平台的一切疑问，这里都有答案
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">跑分平台有哪些类型？</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  目前主流的跑分平台包括USDT跑分平台、银行卡跑分平台、UPI跑分平台等。每种类型都有其特定的应用场景和优势。我们的跑分系统源码支持多种平台类型的搭建，客户可以根据业务需求选择最适合的方案。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">如何选择合适的跑分平台推荐？</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  选择跑分平台时应考虑技术稳定性、资金安全性、用户体验等因素。我们的最新跑分平台采用巅峰跑分平台技术，在跑分论坛中口碑良好。相比金马跑分平台等传统平台，我们的手机跑分平台具有更高的灵活性和安全性。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">跑分平台搭建需要多长时间？</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  使用我们的跑分平台源码，一般1-2天就能完成整个平台的搭建和测试。包括系统跑分功能的配置、跑分车队管理模块的部署、以及跑分流程的优化等。我们还提供跑分平台app的打包和上架服务。
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">跑分赚钱的收益如何计算？</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  跑分赚钱的收益主要来自交易佣金和平台分润。USDT跑分系统的收益率通常在0.5%-2%之间，具体取决于交易量和风险等级。我们的跑分系统提供详细的收益统计功能，帮助用户清晰了解每笔交易的盈利情况。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">博彩跑分是否合法合规？</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  博彩跑分的合规性因地区而异，我们的系统设计严格遵循相关法律法规。银行卡跑分和UPI跑分平台都需要在合规框架内运营。我们建议客户在搭建跑分平台前，充分了解当地的法律法规，确保业务的合法性。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">手机跑分平台的安全性如何保障？</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  我们的手机跑分平台采用多层安全防护机制，包括数据加密、身份认证、风险监控等。跑分车队的资金安全通过冷热钱包分离、多重签名等技术手段保障。在跑分论坛的用户反馈中，我们的安全性得到了广泛认可。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            立即联系我们
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            专业的跑分平台服务，只做海外市场
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://t.me/tatapay15"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-3 w-5 h-5" />
              Telegram: @tatapay15
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2025 跑分平台. 专业的印度三方支付系统解决方案提供商
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
