---
home: true
portfolio: true
icon: home
title: "在线简历"
shortTitle: 主页
avatarStyle:
  display: none
bgImage: /bg.jpg
titles:
  - 时刻保持你的创新心，求知欲~
  - 和我一起去寻找最酷最无畏的人生~
  - 抱利他之心，行利他之事~
  - 软件开发工程师
  - 运维技术研究者
  - OnePanda安全团队成员
  - 每天幻想暴富
welcome: 👋 你好，我是
name: 骆  裕
footer: false
---

## 🖼️ 个人风采

<div class="carousel-container">
  <div class="carousel-wrapper">
    <div class="carousel-slides">
      <div class="carousel-slide"><img src="/images/1.jpg" alt="风采1" /></div>
      <div class="carousel-slide"><img src="/images/2.jpg" alt="风采2" /></div>
      <div class="carousel-slide"><img src="/images/3.jpg" alt="风采3" /></div>
      <div class="carousel-slide"><img src="/images/4.jpg" alt="风采4" /></div>
      <div class="carousel-slide"><img src="/images/5.jpg" alt="风采5" /></div>
      <div class="carousel-slide"><img src="/images/6.jpg" alt="风采6" /></div>
      <div class="carousel-slide"><img src="/images/7.jpg" alt="风采7" /></div>
      <div class="carousel-slide"><img src="/images/8.jpg" alt="风采8" /></div>
      <div class="carousel-slide"><img src="/images/9.jpg" alt="风采9" /></div>
      <div class="carousel-slide"><img src="/images/10.jpg" alt="风采10" /></div>
    </div>
    <button class="carousel-btn carousel-prev">❮</button>
    <button class="carousel-btn carousel-next">❯</button>
    <div class="carousel-dots"></div>
  </div>
</div>

<style>
.carousel-container {
  max-width: 800px;
  margin: 1.5rem auto;
  padding: 0 1rem;
}
.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.12);
  background: var(--vp-c-bg-soft);
}
.carousel-slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.carousel-slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-slide img {
  width: 100%;
  height: auto;
  max-height: 480px;
  object-fit: contain;
  display: block;
}
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  color: #fff;
  border: none;
  font-size: 1.5rem;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.3s;
  z-index: 2;
  line-height: 1;
}
.carousel-btn:hover {
  background: rgba(0,0,0,0.7);
}
.carousel-prev { left: 0.8rem; }
.carousel-next { right: 0.8rem; }
.carousel-dots {
  text-align: center;
  padding: 0.6rem 0;
  background: var(--vp-c-bg-soft);
}
.carousel-dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background: var(--vp-c-divider);
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}
.carousel-dots span.active {
  background: var(--vp-c-brand);
}
@media (max-width: 600px) {
  .carousel-slide img { max-height: 300px; }
}
</style>

<script>
// Carousel logic – SSR guard: only run in browser
if (typeof document !== 'undefined') {
  (function() {
    const container = document.querySelector('.carousel-wrapper');
    if (!container) return;
    const slides = container.querySelector('.carousel-slides');
    const slideEls = slides.querySelectorAll('.carousel-slide');
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');
    const dotsContainer = container.querySelector('.carousel-dots');
    let current = 0;
    const total = slideEls.length;

    // Create dots
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('span');
      if (i === 0) dot.className = 'active';
      dot.dataset.index = i;
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('span');

    function goTo(index) {
      current = index;
      slides.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach((d, i) => d.className = i === current ? 'active' : '');
    }

    prevBtn.addEventListener('click', () => {
      goTo(current === 0 ? total - 1 : current - 1);
    });
    nextBtn.addEventListener('click', () => {
      goTo(current === total - 1 ? 0 : current + 1);
    });

    // Auto play
    let timer = setInterval(() => {
      goTo(current === total - 1 ? 0 : current + 1);
    }, 3500);

    container.addEventListener('mouseenter', () => clearInterval(timer));
    container.addEventListener('mouseleave', () => {
      timer = setInterval(() => {
        goTo(current === total - 1 ? 0 : current + 1);
      }, 3500);
    });
  })();
}
</script>

## 个人信息

<div class="profile-wrapper">
  <div class="profile-card basic-info">
    <div class="profile-row">
      <span class="label">👤 姓名</span>
      <span class="value">骆裕</span>
    </div>
    <div class="profile-row">
      <span class="label">🇨🇳 政治面貌</span>
      <span class="value">中共党员</span>
    </div>
    <div class="profile-row">
      <span class="label">🎂 出生日期</span>
      <span class="value">2004-09-30（21岁）</span>
    </div>
    <div class="profile-row">
      <span class="label">🏢 所属机构</span>
      <span class="value">南京盛网信息科技有限公司 / 淮安裕见新声信息科技有限公司 / OnePanda安全团队</span>
    </div>
    <div class="profile-row">
      <span class="label">🌐 个人网站</span>
      <span class="value"><a href="https://resume.明裕.top/" target="_blank">resume.明裕.top</a></span>
    </div>
    <div class="profile-row">
      <span class="label">💼 求职意向</span>
      <span class="value">渗透测试 / 安全运维 / Python开发 · AIGC应用</span>
    </div>
    <div class="profile-row">
      <span class="label">🟢 工作状态</span>
      <span class="value">在职-考虑机会（自由职业 / 兼职）</span>
    </div>
  </div>


  <div class="profile-card contact-info">
    <div class="contact-row">
      <span class="icon">📧</span>
      <span class="text">mingyuxuezhang@outlook.com</span>
    </div>
    <div class="contact-row">
      <span class="icon">📮</span>
      <span class="text">luoyu2004@gmail.com</span>
    </div>
    <div class="contact-row">
      <span class="icon">🐧</span>
      <span class="text">1989590693（mingyuxuezhang@qq.com）</span>
    </div>
    <div class="hobbies-row">
      <span class="hobby-tag">🎵 音乐</span>
      <span class="hobby-tag">📺 追剧</span>
      <span class="hobby-tag">💻 技术</span>
    </div>
  </div>
</div>

<style>
.profile-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
}
.profile-card {
  flex: 1;
  min-width: 300px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
}
.profile-row, .contact-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}
.profile-row .label {
  width: 100px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
.profile-row .value {
  color: var(--vp-c-text-1);
  flex: 1;
}
.contact-row .icon {
  margin-right: 0.8rem;
  font-size: 1.1rem;
}
.hobbies-row {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}
.hobby-tag {
  background: var(--vp-c-bg-mute);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
</style>

## 教育经历

<div class="edu-timeline">
  <div class="edu-item">
    <div class="edu-year">2025.09 - 至今</div>
    <div class="edu-content">
      <h3>江苏开放大学 <Badge type="tip" text="本科" /></h3>
      <p class="edu-major">人工智能专业 (非全日制)</p>
      <p class="edu-desc">自主研究人工智能安全领域前沿技术，结合长亭技术方案实现AI大模型安全防护功能</p>
    </div>
  </div>
  <div class="edu-item">
    <div class="edu-year">2020.09 - 2025.06</div>
    <div class="edu-content">
      <h3>江苏联合职业技术学院淮安分院 <Badge type="tip" text="专科" /></h3>
      <p class="edu-major">物联网应用技术 | 信息工程系</p>
      <p class="edu-desc">校技能大赛选手，主导班委会，多次获省赛二等奖、技能状元大赛三等奖</p>
    </div>
  </div>
</div>

<style>
.edu-timeline {
  margin-top: 1rem;
  border-left: 2px solid var(--vp-c-divider);
  padding-left: 1.5rem;
}
.edu-item {
  position: relative;
  margin-bottom: 2rem;
}
.edu-item::before {
  content: "";
  position: absolute;
  left: -1.95rem;
  top: 0.4rem;
  width: 0.8rem;
  height: 0.8rem;
  background: var(--vp-c-brand);
  border-radius: 50%;
  border: 2px solid var(--vp-c-bg);
}
.edu-year {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.3rem;
  font-family: monospace;
}
.edu-content h3 {
  margin: 0 0 0.5rem 0 !important;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.edu-major {
  color: var(--vp-c-brand);
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.edu-desc {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>

## 技能专长

<div class="skills-wrapper">
  <div class="skill-section">
    <div class="skill-header">
      <span class="icon">💻</span>
      <h3>Python全栈开发</h3>
    </div>
    <ul class="skill-list">
      <li><strong>架构设计</strong>：主导 Vue3+FastAPI 前后端分离架构设计，采用现代化技术栈构建高性能Web应用，实现系统吞吐量提升50%以上，支撑日均10万+用户访问。</li>
      <li><strong>性能优化</strong>：实施异步编程、多级缓存策略及数据库查询优化方案，成功将系统平均响应时间从800ms降至560ms（缩短30%），并发处理能力从500QPS提升至700QPS（提升40%）。</li>
      <li><strong>AI提效</strong>：整合 AI辅助开发工具链（Qoder/Cursor/Trae等），建立20+标准化代码模板，减少重复编码工作量60%，推动团队开发效率提升35%。</li>
      <li><strong>前端工程化</strong>：设计基于TypeScript+Vite的前端工程化方案，通过模块化组件库实现代码复用率达75%，缩短新功能开发周期40%。</li>
      <li><strong>微服务与DevOps</strong>：构建 RESTful API微服务架构，实现接口响应时间标准化在300ms以内；实施 Docker容器化部署方案，配合CI/CD流水线实现部署频率从每周1次提升至每日3次，部署失败率降低至2%以下。</li>
    </ul>
  </div>

  <div class="skill-section">
    <div class="skill-header">
      <span class="icon">🛡️</span>
      <h3>安全服务与运维</h3>
    </div>
    <ul class="skill-list">
      <li><strong>漏洞挖掘与修复</strong>：熟练应用OWASP TOP 10漏洞原理及利用方法（SQL注入、XSS、CSRF、SSRF等），成功识别并修复50+高危漏洞。</li>
      <li><strong>渗透测试</strong>：主导实施完整的渗透测试流程，熟练运用Burpsuite完成200+次Web应用及小程序安全测试，通过Sqlmap验证100+SQL注入点，利用Nmap完成50+网络端口扫描任务。</li>
      <li><strong>自动化安全</strong>：整合长亭洞鉴产品构建自动化漏洞扫描系统，实现每周自动化扫描30+个业务系统，漏洞发现效率提升70%；部署开源安全监控解决方案，覆盖500+内网资产，威胁识别准确率95%。</li>
      <li><strong>系统优化</strong>：优化大规模Nginx集群配置(20+节点)，通过负载均衡策略调整和缓存优化，实现QPS从5000提升至8000，错误率降低至0.1%以下。</li>
      <li><strong>工具研发</strong>：研发AI驱动的Java源代码审计工具，检测准确率达85%（已开源）；开发15+Python自动化运维脚本，实现日志分析、监控报警等工作100%自动化，每月节省120+人工小时。</li>
      <li><strong>应急响应</strong>：建立标准化应急响应流程，处理Windows/Linux系统安全事件200+次；基于1panel构建可视化运维平台，管理100+Linux服务器，运维效率提升60%。</li>
      <li><strong>网络与数通能力</strong>：参加华为数通HCIA、HCIP培训，具备初级网络规划、路由交换、VLAN/OSPF/ACL配置、网络安全策略部署及故障排错能力，可协助完成中小型园区网与数据中心网络架构设计与运维。</li>
    </ul>
  </div>

  <div class="skill-section">
    <div class="skill-header">
      <span class="icon">🔍</span>
      <h3>SRC漏洞挖掘</h3>
    </div>
    <ul class="skill-list">
      <li><strong>CNVD证书</strong>：发现并报告 **CNVD-2023-51993** 未授权访问高危漏洞，获得国家信息安全漏洞共享平台(CNVD)官方认证，漏洞评分达7.5分(高危级别)。</li>
      <li><strong>自动化挖掘</strong>：系统研究最新SRC漏洞挖掘技术，开发自动化漏洞扫描脚本，将常规漏洞检测时间从8小时缩短至30分钟，累计发现漏洞50+个。</li>
    </ul>
  </div>

  <div class="skill-section">
    <div class="skill-header">
      <span class="icon">📊</span>
      <h3>飞书多维表格搭建</h3>
    </div>
    <ul class="skill-list">
      <li><strong>业务系统设计</strong>：设计并实施基于飞书多维表格的业务管理系统，覆盖销售、运营和项目管理等5+核心业务流程，实现数据集中化管理。</li>
      <li><strong>定制化模板</strong>：开发15+定制化业务模板，包括客户管理、项目跟踪和库存监控等场景，提升团队协作效率40%。</li>
      <li><strong>自动化工作流</strong>：建立自动化工作流机制，通过飞书机器人实现关键业务指标实时推送，减少人工数据整理时间30%。</li>
      <li><strong>数字化培训</strong>：培训30+跨部门用户掌握飞书多维表格高级功能，推动全公司数字化办公转型。</li>
      <li><strong>数据可视化</strong>：优化数据可视化看板，实现关键业务指标实时监控，管理层决策效率提升25%。</li>
    </ul>
  </div>
</div>

<style>
.skill-section {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--vp-c-divider);
}
.skill-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.8rem;
}
.skill-header .icon {
  font-size: 1.5rem;
  margin-right: 0.8rem;
}
.skill-header h3 {
  margin: 0 !important;
  font-size: 1.2rem;
}
.skill-list {
  padding-left: 1.2rem;
}
.skill-list li {
  margin-bottom: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
.skill-list strong {
  color: var(--vp-c-brand);
}
</style>

## 工作经历

- **南京盛网信息科技有限公司** | 技术渗透测试开发工程师 | 2026.03 - 至今
    - **全链路安全服务交付**：全流程负责政务、国企、事业单位等政企客户的渗透测试、漏洞扫描、安全合规评估、重大活动网安保卫（重保）、应急响应等安全服务项目实施，覆盖需求对接、进场合规报备、方案定制、测试执行、漏洞复现验证、合规报告输出、整改方案落地指导到项目验收的全链路闭环交付，深度匹配等保2.0、数据安全法、政务数据安全管理等监管要求，保障客户政务系统、国企核心业务系统的安全稳定运行。
    - **漏扫产品深度应用**：精通绿盟科技、长亭科技全系列漏洞扫描产品，深度适配政企客户政务云、国产化环境、分级保护等专属场景，可独立完成产品部署上线、合规策略配置、扫描规则优化、常态化扫描任务调度、误报精准过滤处置，具备丰富的政企集采项目漏扫产品交付、运维支撑与等保合规适配经验。
    - **安全产品方案落地**：熟练掌握深信服全系列安全产品的政企场景化部署、配置调优与方案落地，覆盖边界安全、零信任访问、数据安全、云安全等政企核心安全建设场景，可精准匹配客户合规监管与业务安全需求，完成配套安全服务的落地交付。
    - **定制化开发与培训**：负责政企安全服务配套的定制化软件开发、自动化测试工具与脚本编写，适配国产化软硬件环境，持续优化服务交付流程；同时承担网络安全技术课程体系搭建、内容研发与授课培训，面向政企客户开展等保合规、攻防技能、安全意识等定制化培训，完成多场政企单位内训与渠道技术赋能。

- **淮安博越科技有限公司** | 技术 安全运维开发 | 2025.07 - 2026.02
    - **协助政务系统实施**：协助淮安市政务中心智能考勤系统实施项目，协助淮安机关事务局智慧食堂项目后端架构设计。
    - **安全运维流程建立**：建立公司网络安全运维标准化流程，提升团队协作效率。
    - **系统开发**：开发微博更新监测系统，实现实时舆情监控。
    - **技术研究**：自主学习最新网络安全运维技术，保持技术前瞻性。

- **淮安市高级职业技术学校** | 信息工程系 兼职教师 | 2025.09 - 2026.04
    - **课程教学**：主导两个23级班级（60+名学生）的Python程序设计课程教学，通过项目驱动式教学法，学生项目完成率达到95%以上。
    - **实战项目**：设计并实施"校园一卡通系统"实战教学项目，指导学生完成从需求分析到系统实现的完整开发流程，项目成果被3个校内部门采用。
    - **教学改革**：重构Python课程教学大纲，整合AI辅助教学工具，使课程内容更新率提升40%，学生满意度提高32%。
    - **AI专项训练**：开发AI提示词工程专项训练模块，通过10+个实际案例教学，使85%的学生能够独立编写专业级AI提示词。
    - **效率提升**：引入代码自动评审系统，将作业批改效率提升60%，同时为学生提供实时反馈，平均代码质量提升25%。

## 代表荣誉及奖项

<div class="honors-content">

### 🏆 技能竞赛类
- **2025年** | 江苏省职业院校技能大赛 "应用软件系统开发"高职组 | <Badge type="tip" text="二等奖第一名" />
- **2024年** | 江苏省职业院校技能大赛 "应用软件系统开发"高职组 | <Badge type="tip" text="二等奖" />
- **2024年** | 第七届江苏技能状元大赛 学生组商务软件解决方案项目 | <Badge type="warning" text="三等奖" />
- **2024年** | 第七届江苏技能状元大赛(淮安选拔赛) 学生组商务软件解决方案 | <Badge type="danger" text="一等奖" />
- **2024年** | 第一届江苏省AIGC应用大赛 学生组 | <Badge type="danger" text="一等奖" />
- **2023年** | 江苏省职业院校技能大赛 "网络安全"中职组 | <Badge type="tip" text="二等奖" />
- **2021年** | 淮安市职业学校创新创业大赛 创业模拟中职组 | <Badge type="tip" text="二等奖" />

### 🎓 学术荣誉类
- **2023-2024学年** | 国家励志奖学金 | <Badge type="danger" text="国家级荣誉" />

### 🌟 综合表现类
- **2024年** | 优秀共青团员 | <Badge type="info" text="校级荣誉" />
- **2023年度** | 学院三好学生 | <Badge type="info" text="校级荣誉" />

</div>

<style>
.honors-content h3 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
}
.honors-content ul {
  list-style: none;
  padding-left: 0;
}
.honors-content li {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.honors-content li strong {
  min-width: 80px;
  color: var(--vp-c-brand);
}
</style>

## 相关证书

<div class="cert-container">
  <div class="cert-card">
    <span class="cert-icon">📜</span>
    <div class="cert-info">
      <h3>NSACE高级网络信息安全工程师</h3>
      <p>国家高级网络信息安全工程师职业技术证书</p>
    </div>
  </div>
  <div class="cert-card">
    <span class="cert-icon">🛡️</span>
    <div class="cert-info">
      <h3>NISP一级</h3>
      <p>国家信息安全水平考试一级证书</p>
    </div>
  </div>
  <div class="cert-card">
    <span class="cert-icon">🔐</span>
    <div class="cert-info">
      <h3>CISP-PTE</h3>
      <p>国家注册渗透测试工程师</p>
    </div>
  </div>
  <div class="cert-card">
    <span class="cert-icon">🏅</span>
    <div class="cert-info">
      <h3>CNVD高风险漏洞证书</h3>
      <p>CNVD-2023-51993 未授权访问高危漏洞（评分7.5）</p>
    </div>
  </div>
</div>

<style>
.cert-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
.cert-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}
.cert-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px -8px rgba(0,0,0,0.12);
  border-color: var(--vp-c-brand);
}
.cert-icon {
  font-size: 2rem;
  flex-shrink: 0;
}
.cert-info h3 {
  margin: 0 0 0.3rem 0 !important;
  font-size: 1rem;
}
.cert-info p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
</style>

## 项目经历

<div class="project-container">
  <div class="project-card">
    <div class="project-header">
      <span class="icon">🔐</span>
      <h3>2026网安"宁锡行动"</h3>
      <span class="project-time">2026.05</span>
    </div>
    <div class="project-body">
      <p class="project-location">📍 江苏南京</p>
      <ul>
        <li>对无锡地级市资产进行漏洞挖掘，成功挖掘1个高危、2个中危、3个低危漏洞。</li>
        <li>通过系统化的资产梳理与渗透测试流程，精准定位政务系统安全风险，圆满完成网安行动任务。</li>
      </ul>
    </div>
  </div>
</div>

<style>
.project-container {
  margin-top: 1rem;
}
.project-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  margin-bottom: 1.5rem;
}
.project-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.8rem;
  gap: 0.8rem;
}
.project-header .icon {
  font-size: 1.5rem;
}
.project-header h3 {
  margin: 0 !important;
  font-size: 1.2rem;
  flex: 1;
}
.project-time {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  font-family: monospace;
  background: var(--vp-c-bg-mute);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}
.project-location {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
}
.project-body ul {
  padding-left: 1.2rem;
}
.project-body li {
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>

## 自我评价

<div class="self-eval-container">
  <div class="eval-card">
    <h3>💻 技术能力</h3>
    <ul>
      <li><strong>全栈开发</strong>：精通 Python/Vue3/FastAPI，驾驭微服务与 DevOps。</li>
      <li><strong>安全攻防</strong>：CNVD 证书持有者，深谙渗透测试与安全运维之道。</li>
      <li><strong>国际视野</strong>：自主研究20+个国际安全技术论坛，系统掌握最新安全攻防技术，每月更新技术知识库。</li>
      <li><strong>社区协作</strong>：高效利用GitHub Issues和Stack Overflow等开发者社区，成功解决50+个复杂安全运维问题，平均解决时间缩短60%。</li>
      <li><strong>AI 赋能</strong>：熟练运用 AIGC 工具提效，具备相关应用开发与教学经验。</li>
    </ul>
  </div>
  <div class="eval-card">
    <h3>🎯 专业素养</h3>
    <ul>
      <li><strong>教学相长</strong>：擅长将复杂技术转化为通俗易懂的教学内容。</li>
      <li><strong>问题解决</strong>：具备敏锐的分析能力，能在复杂环境中迅速定位并解决问题。</li>
      <li><strong>工程规范</strong>：极度重视代码质量与项目规范，践行高标准软件工程实践。</li>
    </ul>
  </div>
  <div class="eval-card">
    <h3>🤝 团队协作</h3>
    <ul>
      <li><strong>开源共建</strong>：OnePanda 团队核心成员，活跃于开源社区与技术分享。</li>
      <li><strong>组织管理</strong>：多年学生干部经验，具备卓越的团队管理与沟通协调能力。</li>
      <li><strong>薪火相传</strong>：乐于分享，多次指导学生斩获技能大赛佳绩。</li>
    </ul>
  </div>
</div>

<style>
.self-eval-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
.eval-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}
.eval-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
  border-color: var(--vp-c-brand);
}
.eval-card h3 {
  margin-top: 0 !important;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}
.eval-card ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.eval-card li {
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}
.eval-card li strong {
  color: var(--vp-c-brand);
  font-weight: 600;
}
</style>

## 发表内容

<div class="publish-container">
  <a class="publish-card" href="https://blog.csdn.net/m0_50553973" target="_blank">
    <div class="card-header">
      <span class="icon">📝</span>
      <h3>技术博客</h3>
    </div>
    <div class="card-body">
      <p class="platform"><strong>CSDN 博客</strong></p>
      <p class="desc">骆裕的技术分享</p>
      <ul class="stats">
        <li>✍️ <strong>20+</strong> 技术文章</li>
        <li>👁️ <strong>10w+</strong> 累计阅读</li>
        <li>💻 Java / 前端 / 数据库</li>
      </ul>
    </div>
  </a>

  <a class="publish-card" href="https://space.bilibili.com/483865298" target="_blank">
    <div class="card-header">
      <span class="icon">🎥</span>
      <h3>视频教程</h3>
    </div>
    <div class="card-body">
      <p class="platform"><strong>B站 UP主</strong></p>
      <p class="desc">明裕学长</p>
      <ul class="stats">
        <li>📺 编程实战教学</li>
        <li>🛠️ SpringBoot / Vue.js</li>
        <li>🎓 分享开发经验</li>
      </ul>
    </div>
  </a>

  <div class="publish-card">
    <div class="card-header">
      <span class="icon">💡</span>
      <h3>开源贡献</h3>
    </div>
    <div class="card-body">
      <p class="platform"><strong>GitHub / 社区</strong></p>
      <p class="desc">积极参与开源共建</p>
      <ul class="stats">
        <li>🐙 维护个人技术项目</li>
        <li>🤝 贡献代码与文档</li>
        <li>🌍 助力开发者成长</li>
      </ul>
    </div>
  </div>
</div>

<style>
.publish-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.publish-card {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  text-decoration: none !important;
  color: inherit !important;
  height: 100%;
}

.publish-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft-up);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.8rem;
}

.card-header .icon {
  font-size: 1.5rem;
  margin-right: 0.8rem;
}

.card-header h3 {
  margin: 0 !important;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
  border: none !important;
  padding: 0 !important;
}

.card-body {
  flex: 1;
}

.platform {
  font-size: 1.1rem;
  color: var(--vp-c-brand);
  margin-bottom: 0.2rem;
}

.desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.stats {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.stats li {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stats li strong {
  color: var(--vp-c-text-1);
  font-weight: 600;
}
</style>
