// Plain React (no JSX) to avoid Babel in-browser
(function () {
  const h = React.createElement;

  // Multilingual content
  const translations = {
    ar: {
      title: 'جيو.قطر — بوابة قطر للذكاء الاصطناعي',
      heroTitle: 'أنا الخريطة الحية لقطر — بوابتك الهادئة إلى ذكاء على مستوى الفضاء',
      heroSubtitle: 'بوابتك الهادئة إلى ذكاء على مستوى الفضاء',
      heroParagraph1: 'أراقب تنفس الساحل، وتحرك الصحراء، وتوهج المدينة. أحمل مشاهد الأقمار الصناعية الحديثة والحقائق الأرضية في ذاكرة واحدة. اسألني عن الأرض والمياه والمباني والطرق والسفن — أجيب بالأدلة.',
      heroParagraph2: 'لا أصرخ. لا أزين. أحل المشاكل. للمخططين والمؤسسين، للمستجيبين والباحثين — أحول الإحداثيات إلى وضوح.',
      heroParagraph3: 'بناه Vortx.ai، أخدم وعداً واحداً: ذكاء اصطناعي موثوق لقطر — مؤسس في المدار، مُسلم في ثوانٍ.',
      enterPortal: 'ادخل البوابة',
      talkToVortx: 'تحدث مع Vortx.ai',
      byVortx: 'بواسطة Vortx.ai',
      themeDark: 'ليل',
      themeLight: 'نهار',
      themeToggleAria: 'تبديل السمة',
      langToggleAria: 'تبديل اللغة',
      nav: { 
        enter: 'دخول', capabilities: 'القدرات', product: 'المنتج', usecases: 'حالات الاستخدام', industries: 'الصناعات', contact: 'اتصال',
        home: 'الرئيسية', businessData: 'البيانات التجارية', solutions: 'الحلول', about: 'حول'
      },
      capabilities: {
        syntheticThreat: { title: 'درع التهديد الاصطناعي', desc: 'يكتشف المحتوى المزيف والهجمات الاصطناعية قبل أن تخترق دفاعاتك. ذكاء حقيقي، أصالة موثقة.' },
        explainableReasoning: { title: 'استدلال قابل للتفسير', desc: 'لا ألغاز صندوق أسود. كل استنتاج يعود إلى الأدلة، ويظهر كيف ولماذا تنبثق القرارات من البيانات.' },
        securityFromAbove: { title: 'أمان من الأعلى', desc: 'تقييم الثغرات بقوة الأقمار الصناعية يكشف ما تفوته عمليات التدقيق الأرضية. انظر إلى بصمتك التشغيلية بالكامل.' },
        intelligenceInMinutes: { title: 'ذكاء في دقائق', desc: 'تحليل جيومكاني معقد مقطر إلى رؤى جاهزة للتنفيذ. أدلة، استنتاجات، توصيات — مُسلمة بسرعة القرار.' },
        qatarSovereign: { title: 'معالجة سيادية قطرية', desc: 'بياناتك تبقى ضمن حدود قطر. لا تعرض خارجي، مسارات تدقيق كاملة، امتثال على مستوى المؤسسات.' },
        transparentByDesign: { title: 'شفاف بالتصميم', desc: 'انظر إلى الاستدلال، تحدى المنطق، تحقق من المصادر. ذكاء يمكنك الوثوق به لأنك تفهمه.' }
      },
      product: {
        title: 'منتج متكامل للذكاء الجيومكاني',
        subtitle: 'منصة موحدة للخرائط الذكية وتحليل البيانات المكانية',
        features: {
          realTimeMapping: { title: 'خرائط فورية حية', desc: 'خرائط تفاعلية محدثة لحظياً بأحدث بيانات الأقمار الصناعية والاستشعار الأرضي' },
          aiPoweredAnalysis: { title: 'تحليل مدعوم بالذكاء الاصطناعي', desc: 'خوارزميات متقدمة تكشف الأنماط والتغييرات والتوقعات في البيانات الجيومكانية' },
          multiSourceData: { title: 'تكامل البيانات متعددة المصادر', desc: 'دمج سلس لبيانات الأقمار الصناعية، والطائرات المسيرة، والحساسات الأرضية، والمصادر الرسمية' },
          arabicFirst: { title: 'واجهة عربية أولاً', desc: 'تصميم يراعي اللغة العربية والثقافة المحلية مع دعم كامل للاتجاهات والخطوط' },
          secureArchitecture: { title: 'هندسة آمنة ومحلية', desc: 'بنية تحتية محلية بالكامل تضمن سيادة البيانات والامتثال للوائح قطر' },
          customReports: { title: 'تقارير قابلة للتخصيص', desc: 'تقارير ذكية جاهزة للعرض التنفيذي مع رؤى قابلة للتنفيذ ومرئيات واضحة' }
        }
      },
      useCases: {
        title: 'حالات الاستخدام الرئيسية',
        subtitle: 'حلول ذكية لتحديات حقيقية في قطر',
        cases: {
          visionAlignment: { title: 'مواءمة رؤية قطر 2030', desc: 'مراقبة تقدم مشاريع التنمية المستدامة ومؤشرات الأداء الرئيسية لرؤية قطر الوطنية 2030' },
          worldCupLegacy: { title: 'إرث كأس العالم 2022', desc: 'تتبع استخدام وصيانة المرافق الرياضية والبنية التحتية لضمان الاستفادة الدائمة من الاستثمارات' },
          lusailSmart: { title: 'مدينة لوسيل الذكية', desc: 'مراقبة تطوير أول مدينة ذكية في قطر وتحليل كفاءة الأنظمة الحضرية المتقدمة' },
          energySecurity: { title: 'أمن الطاقة والغاز', desc: 'مراقبة حقول الغاز الطبيعي والمنشآت النفطية البحرية والبرية لضمان الأمن الطاقوي' },
          marineProtection: { title: 'حماية البيئة البحرية', desc: 'رصد الشعاب المرجانية والأحياء البحرية في المياه القطرية وتقييم التأثيرات البيئية' },
          hajjLogistics: { title: 'لوجستيات الحج والعمرة', desc: 'تنسيق وتتبع حركة الحجاج القطريين وتحسين خدمات الطيران والإقامة' }
        }
      },
      industries: {
        title: 'الصناعات والقطاعات',
        subtitle: 'حلول متخصصة لأهم القطاعات الاقتصادية في قطر',
        sectors: {
          qatarEnergy: { title: 'قطر للطاقة وقطاع الغاز', desc: 'مراقبة حقل الشمال وحقول الغاز البحرية، تحليل إنتاج LNG، وضمان أمن المنشآت الطاقوية الاستراتيجية' },
          qatarFund: { title: 'صندوق قطر السيادي', desc: 'تقييم وتتبع الاستثمارات العقارية والبنية التحتية محلياً وعالمياً باستخدام التحليل الجيومكاني' },
          hamadPort: { title: 'ميناء حمد وقطاع اللوجستيات', desc: 'مراقبة حركة السفن، تحسين عمليات الشحن والتفريغ، وإدارة المناطق الحرة والمستودعات' },
          qatarAirways: { title: 'الخطوط الجوية القطرية', desc: 'تحليل حركة الطيران، مراقبة مطار حمد الدولي، وتحسين خدمات الطيران والشحن الجوي' },
          qatarRail: { title: 'مترو الدوحة وقطار قطر', desc: 'مراقبة أداء شبكة القطارات، تحليل تدفق الركاب، وتحسين الخدمات وأوقات التشغيل' },
          qfc: { title: 'مركز قطر للمال', desc: 'مراقبة وتحليل النشاط المصرفي والمالي في الخليج التجاري وضمان أمن المعاملات المالية' },
          healthcare: { title: 'مؤسسة حمد الطبية', desc: 'تحسين خدمات الطوارئ الطبية، تحليل انتشار الأمراض، وإدارة سلاسل التوريد الطبي' },
          education: { title: 'التعليم والمدينة التعليمية', desc: 'مراقبة المدينة التعليمية، تحليل النقل الطلابي، وتطوير البيئات التعليمية الذكية' }
        }
      },
      forPeople: {
        title: 'للمواطنين والمقيمين',
        subtitle: 'خدمات ذكية تحسن جودة الحياة اليومية',
        benefits: {
          smartCommute: { title: 'تنقل ذكي', desc: 'تطبيقات تساعد في اختيار أفضل المسارات وأوقات السفر بناءً على البيانات الحية' },
          publicServices: { title: 'خدمات عامة محسنة', desc: 'وصول أسرع للخدمات الحكومية والمرافق العامة بناءً على الموقع والحاجة' },
          safetyAlerts: { title: 'تنبيهات السلامة', desc: 'إشعارات فورية حول الأحوال الجوية، حالة الطرق، والمخاطر المحتملة' },
          communityInsights: { title: 'رؤى المجتمع', desc: 'فهم أفضل للأحياء، الخدمات المتاحة، والفرص المحلية' }
        }
      },
      forGovernment: {
        title: 'للحكومة والجهات الرسمية',
        subtitle: 'أدوات متقدمة لاتخاذ القرارات المبنية على البيانات',
        solutions: {
          planningCouncil: { title: 'مجلس التخطيط التنموي', desc: 'مراقبة تنفيذ استراتيجية التنمية الوطنية الثالثة ومؤشرات الأداء الحكومي لرؤية 2030' },
          municipalityMonitoring: { title: 'البلديات والتخطيط العمراني', desc: 'تتبع مشاريع التطوير العمراني في الدوحة ولوسيل والوكرة ومراقبة التزام المقاولين بالمخططات' },
          moi: { title: 'وزارة الداخلية', desc: 'مراقبة أمن الحدود، تحليل حركة المرور، وإدارة الأمن العام والطوارئ بتقنيات متقدمة' },
          ashghal: { title: 'هيئة الأشغال العامة', desc: 'مراقبة مشاريع البنية التحتية، تقييم حالة الطرق والجسور، وتحسين خدمات المرافق العامة' },
          environmentMinistry: { title: 'وزارة البيئة والتغير المناخي', desc: 'رصد جودة الهواء والمياه، مراقبة المحميات الطبيعية، وتقييم التأثيرات البيئية للمشاريع' },
          qatarStatistics: { title: 'جهاز التخطيط والإحصاء', desc: 'تعزيز البيانات الإحصائية بالتحليل الجيومكاني، ودعم المسوح السكانية والاقتصادية' },
          civilDefense: { title: 'الدفاع المدني والطوارئ', desc: 'نمذجة سيناريوهات الطوارئ، تحسين أوقات الاستجابة، وتنسيق عمليات الإخلاء والإنقاذ' },
          coastGuard: { title: 'خفر السواحل', desc: 'مراقبة المياه الإقليمية القطرية، تتبع السفن، وحماية الحدود البحرية والثروة السمكية' }
        }
      },
      businessData: {
        title: 'نماذج من البيانات التجارية',
        subtitle: 'رؤى فورية من البيانات الحقيقية للأعمال والقطاعات الحيوية في قطر',
        samples: {
          energy: { title: 'قطاع الطاقة', value: '77 مليار م³', desc: 'إنتاج سنوي من الغاز الطبيعي من حقل الشمال', trend: '+3.2%' },
          aviation: { title: 'الطيران المدني', value: '40.9 مليون', desc: 'مسافر عبر مطار حمد الدولي (2023)', trend: '+28.5%' },
          shipping: { title: 'الشحن والموانئ', value: '1.85 مليون حاوية', desc: 'حجم المعالجة السنوي في ميناء حمد', trend: '+12.4%' },
          construction: { title: 'التطوير العمراني', value: '45 كم²', desc: 'مساحة التطوير الجديد في لوسيل ومدينة قطر', trend: '+8.7%' },
          realEstate: { title: 'العقارات', value: '21,500 ريال', desc: 'متوسط الإيجار الشهري للمتر المربع في الخليج التجاري', trend: '+5.1%' },
          retail: { title: 'التجارة والأسواق', value: '385 متجر', desc: 'منافذ البيع في مراكز التسوق الرئيسية', trend: '+7.3%' }
        }
      },
      understanding: {
        title: 'فهم جيو.قطر',
        subtitle: 'دليلك الشامل لمنصة قطر للذكاء الجيومكاني',
        overview: 'تمثل جيو.قطر نهجاً ثورياً في الذكاء الجيومكاني، مصممة خصيصاً لتلبية احتياجات قطر الجغرافية والثقافية والاستراتيجية الفريدة. تجمع منصتنا بين تقنية الأقمار الصناعية المتطورة والذكاء الاصطناعي لتوفير رؤى فورية حول المشهد الطبيعي والبنية التحتية والتنمية في قطر.',
        keyPoints: {
          realTime: { title: 'ذكاء فوري', desc: 'التغذية المباشرة من الأقمار الصناعية وشبكات الاستشعار توفر معلومات محدثة لحظياً عن المشهد المتغير في قطر' },
          aiDriven: { title: 'تحليل مدعوم بالذكاء الاصطناعي', desc: 'خوارزميات التعلم الآلي تكتشف تلقائياً الأنماط والتغييرات والشذوذ عبر أراضي قطر' },
          culturallyAware: { title: 'واعي ثقافياً', desc: 'مبني بتصميم يعطي الأولوية للعربية وفهم السياق الثقافي واحتياجات الحوكمة في قطر' },
          sovereignSecurity: { title: 'سيادي وآمن', desc: 'جميع معالجة البيانات تحدث داخل حدود قطر، مما يضمن سيادة البيانات والأمان الكامل' }
        }
      },
      footer: {
        copyright: '© 2025 جيو.قطر — بوابة قطر للذكاء الاصطناعي • بناه Vortx.ai',
        contact: 'اتصال:'
      }
    },
    en: {
      title: 'geo.qa — Qatar\'s AI Portal',
      heroTitle: 'I am Qatar\'s living map — your quiet portal into space‑level intelligence',
      heroSubtitle: 'Your quiet portal into space‑level intelligence',
      heroParagraph1: 'I watch the shoreline breathe, the desert shift, the city glow. I hold fresh satellite scenes and ground truth in a single memory. Ask me about land, water, buildings, roads, ships — I answer with evidence.',
      heroParagraph2: 'I don\'t shout. I don\'t decorate. I resolve. For planners and founders, for responders and researchers — I turn coordinates into clarity.',
      heroParagraph3: 'Built by Vortx.ai, I serve one promise: trustworthy AI for Qatar — grounded in orbit, delivered in seconds.',
      understanding: {
        title: 'Understanding geo.qa',
        subtitle: 'Your comprehensive guide to Qatar\'s geospatial intelligence platform',
        overview: 'geo.qa represents a revolutionary approach to geospatial intelligence, specifically designed for Qatar\'s unique geographical, cultural, and strategic needs. Our platform combines cutting-edge satellite technology with artificial intelligence to provide real-time insights about Qatar\'s landscape, infrastructure, and development.',
        keyPoints: {
          realTime: { title: 'Real-Time Intelligence', desc: 'Live satellite feeds and sensor networks provide up-to-the-minute information about Qatar\'s changing landscape' },
          aiDriven: { title: 'AI-Driven Analysis', desc: 'Machine learning algorithms automatically detect patterns, changes, and anomalies across Qatar\'s territory' },
          culturallyAware: { title: 'Culturally Aware', desc: 'Built with Arabic-first design and understanding of Qatar\'s cultural context and governance needs' },
          sovereignSecurity: { title: 'Sovereign & Secure', desc: 'All data processing happens within Qatar\'s borders, ensuring complete data sovereignty and security' }
        }
      },
      enterPortal: 'Enter the Portal',
      talkToVortx: 'Talk to Vortx.ai',
      byVortx: 'by Vortx.ai',
      themeDark: 'Night',
      themeLight: 'Day',
      themeToggleAria: 'Toggle theme',
      langToggleAria: 'Toggle language',
      nav: { 
        enter: 'Enter', capabilities: 'Capabilities', product: 'Product', usecases: 'Use Cases', industries: 'Industries', contact: 'Contact',
        home: 'Home', businessData: 'Business Data', solutions: 'Solutions', about: 'About'
      },
      capabilities: {
        syntheticThreat: { title: 'Synthetic Threat Shield', desc: 'Detects deepfakes, AI-generated content, and synthetic attacks before they breach your defenses. Real intelligence, verified authenticity.' },
        explainableReasoning: { title: 'Explainable Reasoning', desc: 'No black box mysteries. Every conclusion traces back to evidence, showing how and why decisions emerge from data.' },
        securityFromAbove: { title: 'Security from Above', desc: 'Satellite-powered vulnerability assessment reveals what ground-level audits miss. See your entire operational footprint.' },
        intelligenceInMinutes: { title: 'Intelligence in Minutes', desc: 'Complex geospatial analysis distilled into executive-ready insights. Evidence, conclusions, recommendations — delivered at decision speed.' },
        qatarSovereign: { title: 'Qatar-Sovereign Processing', desc: 'Your data remains within Qatar borders. Zero external exposure, complete audit trails, enterprise-grade compliance.' },
        transparentByDesign: { title: 'Transparent by Design', desc: 'See the reasoning, challenge the logic, verify the sources. Intelligence you can trust because you understand it.' }
      },
      product: {
        title: 'Comprehensive Geospatial Intelligence Platform',
        subtitle: 'Unified platform for smart mapping and spatial data analysis',
        features: {
          realTimeMapping: { title: 'Real-Time Live Mapping', desc: 'Interactive maps updated instantly with the latest satellite imagery and ground sensor data' },
          aiPoweredAnalysis: { title: 'AI-Powered Analysis', desc: 'Advanced algorithms that reveal patterns, changes, and predictions in geospatial data' },
          multiSourceData: { title: 'Multi-Source Data Integration', desc: 'Seamless fusion of satellite, drone, ground sensor, and official data sources' },
          arabicFirst: { title: 'Arabic-First Interface', desc: 'Culturally-aware design with full support for Arabic language, directions, and typography' },
          secureArchitecture: { title: 'Secure Local Architecture', desc: 'Completely local infrastructure ensuring data sovereignty and Qatar compliance' },
          customReports: { title: 'Custom Reports', desc: 'Executive-ready intelligent reports with actionable insights and clear visualizations' }
        }
      },
      useCases: {
        title: 'Key Use Cases',
        subtitle: 'Smart solutions for real challenges in Qatar',
        cases: {
          visionAlignment: { title: 'Qatar National Vision 2030 Alignment', desc: 'Monitor progress of sustainable development projects and key performance indicators for Qatar National Vision 2030' },
          worldCupLegacy: { title: 'FIFA World Cup 2022 Legacy', desc: 'Track utilization and maintenance of sports facilities and infrastructure to ensure lasting benefit from investments' },
          lusailSmart: { title: 'Lusail Smart City', desc: 'Monitor development of Qatar\'s first smart city and analyze efficiency of advanced urban systems' },
          energySecurity: { title: 'Energy & Gas Security', desc: 'Monitor natural gas fields and offshore/onshore oil facilities to ensure energy security' },
          marineProtection: { title: 'Marine Environment Protection', desc: 'Monitor coral reefs and marine life in Qatari waters and assess environmental impacts' },
          hajjLogistics: { title: 'Hajj & Umrah Logistics', desc: 'Coordinate and track movement of Qatari pilgrims and optimize aviation and accommodation services' }
        }
      },
      industries: {
        title: 'Industries & Sectors',
        subtitle: 'Specialized solutions for Qatar\'s key economic sectors',
        sectors: {
          qatarEnergy: { title: 'QatarEnergy & Gas Sector', desc: 'Monitor North Field and offshore gas fields, analyze LNG production, and ensure security of strategic energy facilities' },
          qatarFund: { title: 'Qatar Investment Authority', desc: 'Assess and track real estate and infrastructure investments locally and globally using geospatial analysis' },
          hamadPort: { title: 'Hamad Port & Logistics', desc: 'Monitor ship movements, optimize loading and unloading operations, and manage free zones and warehouses' },
          qatarAirways: { title: 'Qatar Airways', desc: 'Analyze flight traffic, monitor Hamad International Airport, and optimize aviation and air cargo services' },
          qatarRail: { title: 'Doha Metro & Qatar Rail', desc: 'Monitor railway network performance, analyze passenger flow, and optimize services and operating schedules' },
          qfc: { title: 'Qatar Financial Centre', desc: 'Monitor and analyze banking and financial activity in West Bay and ensure security of financial transactions' },
          healthcare: { title: 'Hamad Medical Corporation', desc: 'Improve emergency medical services, analyze disease spread patterns, and manage medical supply chains' },
          education: { title: 'Education City & Academia', desc: 'Monitor Education City, analyze student transportation, and develop smart educational environments' }
        }
      },
      forPeople: {
        title: 'For Citizens & Residents',
        subtitle: 'Smart services that improve daily quality of life',
        benefits: {
          smartCommute: { title: 'Smart Commuting', desc: 'Apps that help choose the best routes and travel times based on live data' },
          publicServices: { title: 'Enhanced Public Services', desc: 'Faster access to government services and public facilities based on location and need' },
          safetyAlerts: { title: 'Safety Alerts', desc: 'Instant notifications about weather conditions, road status, and potential hazards' },
          communityInsights: { title: 'Community Insights', desc: 'Better understanding of neighborhoods, available services, and local opportunities' }
        }
      },
      forGovernment: {
        title: 'For Government & Official Entities',
        subtitle: 'Advanced tools for data-driven decision making',
        solutions: {
          planningCouncil: { title: 'Planning & Statistics Authority', desc: 'Monitor implementation of Third National Development Strategy and government performance indicators for Vision 2030' },
          municipalityMonitoring: { title: 'Municipalities & Urban Planning', desc: 'Track urban development projects in Doha, Lusail, and Al Wakrah and monitor contractor compliance with plans' },
          moi: { title: 'Ministry of Interior', desc: 'Monitor border security, analyze traffic patterns, and manage public safety and emergency response with advanced technologies' },
          ashghal: { title: 'Public Works Authority (Ashghal)', desc: 'Monitor infrastructure projects, assess road and bridge conditions, and improve public utility services' },
          environmentMinistry: { title: 'Ministry of Environment & Climate Change', desc: 'Monitor air and water quality, track nature reserves, and assess environmental impacts of projects' },
          qatarStatistics: { title: 'Planning & Statistics Authority', desc: 'Enhance statistical data with geospatial analysis and support population and economic surveys' },
          civilDefense: { title: 'Civil Defense & Emergency', desc: 'Model emergency scenarios, improve response times, and coordinate evacuation and rescue operations' },
          coastGuard: { title: 'Coast Guard', desc: 'Monitor Qatari territorial waters, track vessels, and protect maritime borders and fisheries' }
        }
      },
      businessData: {
        title: 'Business Data Samples',
        subtitle: 'Real-time insights from actual business data across Qatar\'s key economic sectors',
        samples: {
          energy: { title: 'Energy Sector', value: '77 Bcm', desc: 'Annual natural gas production from North Field', trend: '+3.2%' },
          aviation: { title: 'Civil Aviation', value: '40.9M', desc: 'Passengers through Hamad International Airport (2023)', trend: '+28.5%' },
          shipping: { title: 'Shipping & Ports', value: '1.85M TEU', desc: 'Annual container throughput at Hamad Port', trend: '+12.4%' },
          construction: { title: 'Urban Development', value: '45 km²', desc: 'New development area in Lusail and Qatar City', trend: '+8.7%' },
          realEstate: { title: 'Real Estate', value: 'QAR 21,500/m²', desc: 'Average monthly rent in West Bay commercial district', trend: '+5.1%' },
          retail: { title: 'Retail & Markets', value: '385 outlets', desc: 'Retail stores in major shopping centers', trend: '+7.3%' }
        }
      },
      footer: {
        copyright: '© 2025 geo.qa — Qatar\'s AI Portal • Built by Vortx.ai',
        contact: 'Contact:'
      }
    }
  };

  // State management
  function useGlobalState() {
    const [currentLang, setCurrentLang] = React.useState(() => {
      return localStorage.getItem('geo-qa-lang') || 'ar';
    });
    const [isDark, setIsDark] = React.useState(() => {
      return localStorage.getItem('geo-qa-theme') !== 'light';
    });
    const [currentPage, setCurrentPage] = React.useState('home');

    React.useEffect(() => {
      localStorage.setItem('geo-qa-lang', currentLang);
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
      document.title = translations[currentLang].title;
    }, [currentLang]);

    React.useEffect(() => {
      localStorage.setItem('geo-qa-theme', isDark ? 'dark' : 'light');
      // Toggle rak-light class for light mode; default is dark
      document.documentElement.classList.toggle('rak-light', !isDark);
    }, [isDark]);

    return { currentLang, setCurrentLang, isDark, setIsDark, currentPage, setCurrentPage, t: translations[currentLang] };
  }

  // Language selector component
  function LanguageSelector({ currentLang, setCurrentLang, t }) {
    const languages = [
      { code: 'ar', name: 'العربية' },
      { code: 'en', name: 'English' }
    ];

    return h('div', { className: 'relative group' },
      h('button', { 
        className: 'flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur text-sm transition-all duration-200 hover:bg-white/10',
        onClick: () => setCurrentLang(currentLang === 'ar' ? 'en' : 'ar'),
        'aria-label': t.langToggleAria,
        title: t.langToggleAria
      },
        // Upgraded globe icon
        h('svg', {
          className: 'h-4 w-4 text-zinc-300',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          'aria-hidden': 'true'
        },
          h('circle', { cx: '12', cy: '12', r: '9' }),
          h('ellipse', { cx: '12', cy: '12', rx: '7', ry: '4' }),
          h('ellipse', { cx: '12', cy: '12', rx: '3', ry: '9' })
        ),
        h('span', null, languages.find(l => l.code === currentLang)?.name),
        h('span', { className: 'text-xs text-zinc-400' }, '⇄')
      )
    );
  }

  // Theme toggle component  
  function ThemeToggle({ isDark, setIsDark, t }) {
    return h('button', {
      className: 'flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur text-sm transition-all duration-200 hover:bg-white/10',
      onClick: () => setIsDark(!isDark),
      'aria-label': t.themeToggleAria,
      title: t.themeToggleAria
    },
      h('span', { className: 'text-sm transition-transform duration-200' }, isDark ? '🌙' : '☀️'),
      h('span', { className: 'text-xs text-zinc-400' }, isDark ? t.themeDark : t.themeLight)
    );
  }

  function CapabilityCard(props) {
    return h(
      'div',
      { className: 'group industry-card rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur animate-fade-in-up' },
      h('div', { className: 'flex items-start gap-3' },
        props.icon ? 
          h('div', { className: 'mt-2 animate-icon-float transition-all duration-300' }, props.icon) :
          h('div', { className: 'w-2 h-2 rounded-full bg-[#8A1538] mt-2 animate-qatar-pulse' }),
        h('div', { className: 'flex-1' },
          h('h3', { className: 'text-base font-semibold text-white transition-colors duration-300 group-hover:text-zinc-100' }, props.title),
          h('p', { className: 'mt-2 text-sm leading-relaxed text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300' }, props.children)
        )
      )
    );
  }

  // Enhanced geo.qa Logo Component
  function GeoQALogo({ variant = 'full', className = '', animated = true }) {
    const baseClasses = `geo-qa-logo ${animated ? 'transition-all duration-300' : ''}`;
    
    if (variant === 'icon') {
      return h('div', { className: `${baseClasses} ${className}` },
        h('svg', { 
          className: 'w-full h-full', 
          viewBox: '0 0 40 40', 
          fill: 'none',
          'aria-label': 'geo.qa - Qatar\'s AI Portal logo'
        },
          h('defs', null,
            // Simple elegant gradients
            h('linearGradient', { id: 'spaceGradient', x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
              h('stop', { offset: '0%', stopColor: '#667eea' }),
              h('stop', { offset: '100%', stopColor: '#764ba2' })
            ),
            h('radialGradient', { id: 'earthGlow', cx: '50%', cy: '50%', r: '50%' },
              h('stop', { offset: '0%', stopColor: '#00f5ff', stopOpacity: '0.6' }),
              h('stop', { offset: '100%', stopColor: '#00f5ff', stopOpacity: '0' })
            )
          ),
          
          // Outer space ring
          h('circle', { 
            cx: '20', cy: '20', r: '18',
            fill: 'none',
            stroke: 'url(#spaceGradient)',
            strokeWidth: '1',
            opacity: '0.3',
            className: animated ? 'animate-pulse' : ''
          }),
          
          // Planet Qatar (simplified circle)
          h('circle', { 
            cx: '20', cy: '20', r: '8',
            fill: '#8A1538',
            className: animated ? 'animate-pulse' : ''
          }),
          
          // Atmospheric glow
          h('circle', { 
            cx: '20', cy: '20', r: '10',
            fill: 'url(#earthGlow)',
            opacity: '0.4'
          }),
          
          // Orbiting satellites (3 dots)
          h('g', { className: animated ? 'animate-satellite-orbit' : '', transformOrigin: '20 20' },
            h('circle', { cx: '32', cy: '20', r: '1.5', fill: '#00f5ff' }),
            h('circle', { cx: '8', cy: '20', r: '1.5', fill: '#00f5ff' }),
            h('circle', { cx: '20', cy: '8', r: '1.5', fill: '#00f5ff' })
          ),
          
          // Central geo point
          h('circle', { 
            cx: '20', cy: '20', r: '2',
            fill: '#ffffff',
            className: animated ? 'animate-pulse' : ''
          })
        )
      );
    }
    
    if (variant === 'text') {
      return h('div', { className: `${baseClasses} ${className}` },
        h('svg', { 
          className: 'w-full h-full', 
          viewBox: '0 0 120 28', 
          fill: 'none',
          'aria-label': 'geo.qa text logo'
        },
          h('defs', null,
            h('linearGradient', { id: 'spaceTextGradient', x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
              h('stop', { offset: '0%', stopColor: '#ffffff' }),
              h('stop', { offset: '50%', stopColor: '#00f5ff' }),
              h('stop', { offset: '100%', stopColor: '#667eea' })
            )
          ),
          // geo.qa text with clean typography
          h('text', { 
            x: '0', y: '20', 
            fontSize: '20', 
            fontWeight: '400',
            fill: 'url(#spaceTextGradient)',
            fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
            letterSpacing: '-0.01em'
          }, 'geo.qa')
        )
      );
    }
    
    // Full logo (default)
    return h('div', { className: `flex items-center gap-4 ${baseClasses} ${className}` },
      h(GeoQALogo, { variant: 'icon', className: 'w-10 h-10', animated }),
      h(GeoQALogo, { variant: 'text', className: 'h-8', animated: false })
    );
  }

  // Industry Icons Component
  function IndustryIcon({ type, className = 'w-5 h-5' }) {
    const icons = {
      energy: h('svg', { className: `${className} text-[#FFD60A]`, fill: 'currentColor', viewBox: '0 0 24 24' },
        h('path', { d: 'M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z' })
      ),
      aviation: h('svg', { className: `${className} text-[#00B4D8]`, fill: 'currentColor', viewBox: '0 0 24 24' },
        h('path', { d: 'M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z' })
      ),
      port: h('svg', { className: `${className} text-[#8B5CF6]`, fill: 'currentColor', viewBox: '0 0 24 24' },
        h('path', { d: 'M12 2L3 7v10c0 5.55 3.84 7.74 9 9 5.16-1.26 9-3.45 9-9V7l-9-5z' })
      ),
      rail: h('svg', { className: `${className} text-[#06D6A0]`, fill: 'currentColor', viewBox: '0 0 24 24' },
        h('path', { d: 'M12 2c-4 0-8 .5-8 4v9.5A2.5 2.5 0 0 0 6.5 18L5 19.5v.5h2.23l2-2H14.77l2 2H19v-.5L17.5 18a2.5 2.5 0 0 0 2.5-2.5V6c0-3.5-4-4-8-4zM7.5 16A1.5 1.5 0 0 1 6 14.5 1.5 1.5 0 0 1 7.5 13 1.5 1.5 0 0 1 9 14.5 1.5 1.5 0 0 1 7.5 16zm9 0A1.5 1.5 0 0 1 15 14.5 1.5 1.5 0 0 1 16.5 13 1.5 1.5 0 0 1 18 14.5 1.5 1.5 0 0 1 16.5 16zM6 11V6h12v5H6z' })
      ),
      finance: h('svg', { className: `${className} text-[#F72585]`, fill: 'currentColor', viewBox: '0 0 24 24' },
        h('path', { d: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' })
      ),
      healthcare: h('svg', { className: `${className} text-[#EF476F]`, fill: 'currentColor', viewBox: '0 0 24 24' },
        h('path', { d: 'M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z' })
      ),
      education: h('svg', { className: `${className} text-[#118AB2]`, fill: 'currentColor', viewBox: '0 0 24 24' },
        h('path', { d: 'M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z' })
      ),
      government: h('svg', { className: `${className} text-[#8A1538]`, fill: 'currentColor', viewBox: '0 0 24 24' },
        h('path', { d: 'M12 1L3 5v6c0 5.55 3.84 7.74 9 9 5.16-1.26 9-3.45 9-9V5l-9-4z' })
      )
    };
    
    return icons[type] || h('div', { className: `${className} bg-zinc-500 rounded` });
  }

  // Business Data Card Component
  function BusinessDataCard({ title, value, desc, trend, icon, delay = 0 }) {
    return h('div', {
      className: 'group industry-card rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur animate-fade-in-up hover:border-[#8A1538]/30 transition-all duration-300',
      style: { animationDelay: `${delay}ms` }
    },
      h('div', { className: 'flex items-center justify-between mb-4' },
        h('div', { className: 'flex items-center gap-3' },
          icon && h('div', { className: 'p-2 rounded-lg bg-[#8A1538]/20' }, icon),
          h('h3', { className: 'font-semibold text-white group-hover:text-zinc-100 transition-colors' }, title)
        ),
        trend && h('span', { 
          className: `text-xs px-2 py-1 rounded-full ${trend.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`
        }, trend)
      ),
      h('div', { className: 'space-y-3' },
        h('div', { className: 'text-2xl font-bold text-[#00f5ff] group-hover:text-[#667eea] transition-colors' }, value),
        h('p', { className: 'text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors leading-relaxed' }, desc)
      )
    );
  }

  // Enhanced Qatar Satellite-Style Visualization
  function QatarMapVisualization() {
    return h('div', { className: 'relative w-full max-w-lg mx-auto' },
      h('svg', { 
        className: 'w-full h-auto drop-shadow-2xl', 
        viewBox: '0 0 400 500', 
        'aria-label': 'Qatar Satellite Map with Real-time Data Visualization',
        role: 'img'
      },
        h('defs', null,
          // Satellite imagery inspired gradients
          h('radialGradient', { id: 'landGradient', cx: '50%', cy: '40%', r: '80%' },
            h('stop', { offset: '0%', stopColor: '#8B4513', stopOpacity: '0.8' }), // Desert brown
            h('stop', { offset: '30%', stopColor: '#CD853F', stopOpacity: '0.6' }), // Sandy brown
            h('stop', { offset: '60%', stopColor: '#F4A460', stopOpacity: '0.4' }), // Light sand
            h('stop', { offset: '100%', stopColor: '#8A1538', stopOpacity: '0.3' }) // Qatar maroon
          ),
          h('linearGradient', { id: 'coastalGradient', x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
            h('stop', { offset: '0%', stopColor: '#006994', stopOpacity: '0.8' }), // Deep ocean
            h('stop', { offset: '40%', stopColor: '#0077B6', stopOpacity: '0.6' }), // Ocean blue
            h('stop', { offset: '70%', stopColor: '#00B4D8', stopOpacity: '0.4' }), // Shallow water
            h('stop', { offset: '100%', stopColor: '#90E0EF', stopOpacity: '0.2' }) // Coastal water
          ),
          h('radialGradient', { id: 'cityGlow', cx: '50%', cy: '50%', r: '50%' },
            h('stop', { offset: '0%', stopColor: '#FFD60A', stopOpacity: '1' }),
            h('stop', { offset: '50%', stopColor: '#FCA311', stopOpacity: '0.6' }),
            h('stop', { offset: '100%', stopColor: '#FF6B35', stopOpacity: '0' })
          ),
          // Advanced filters for satellite effect
          h('filter', { id: 'satelliteGlow', x: '-50%', y: '-50%', width: '200%', height: '200%' },
            h('feGaussianBlur', { stdDeviation: '3', result: 'coloredBlur' }),
            h('feColorMatrix', { 
              type: 'matrix', 
              values: '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0',
              result: 'softenedBlur' 
            }),
            h('feMerge', null,
              h('feMergeNode', { in: 'softenedBlur' }),
              h('feMergeNode', { in: 'SourceGraphic' })
            )
          ),
          h('pattern', { id: 'terrainPattern', x: '0', y: '0', width: '20', height: '20', patternUnits: 'userSpaceOnUse' },
            h('circle', { cx: '10', cy: '10', r: '1', fill: '#8B4513', opacity: '0.1' }),
            h('circle', { cx: '5', cy: '15', r: '0.5', fill: '#CD853F', opacity: '0.1' }),
            h('circle', { cx: '15', cy: '5', r: '0.5', fill: '#F4A460', opacity: '0.1' })
          )
        ),
        
        // Ocean/Gulf background
        h('rect', { x: '0', y: '0', width: '400', height: '500', fill: 'url(#coastalGradient)' }),
        
        // Qatar mainland with realistic coastline
        h('path', { 
          d: 'M200 80 L235 85 L250 95 L265 115 L275 140 L280 165 L275 190 L270 215 L265 240 L260 265 L250 290 L240 315 L225 340 L210 365 L195 385 L180 400 L165 410 L150 415 L135 410 L125 400 L115 385 L110 365 L105 340 L100 315 L95 290 L90 265 L85 240 L80 215 L75 190 L80 165 L85 140 L95 115 L110 95 L125 85 L150 80 L175 78 Z',
          fill: 'url(#landGradient)',
          stroke: '#00B4D8',
          strokeWidth: '2',
          className: 'animate-qatar-pulse',
          filter: 'url(#satelliteGlow)'
        }),
        
        // Terrain texture overlay
        h('path', { 
          d: 'M200 80 L235 85 L250 95 L265 115 L275 140 L280 165 L275 190 L270 215 L265 240 L260 265 L250 290 L240 315 L225 340 L210 365 L195 385 L180 400 L165 410 L150 415 L135 410 L125 400 L115 385 L110 365 L105 340 L100 315 L95 290 L90 265 L85 240 L80 215 L75 190 L80 165 L85 140 L95 115 L110 95 L125 85 L150 80 L175 78 Z',
          fill: 'url(#terrainPattern)',
          opacity: '0.3'
        }),
        
        // Major infrastructure and cities
        h('g', null,
          // Doha metropolitan area
          h('circle', { 
            cx: '165', cy: '240', r: '12', 
            fill: 'url(#cityGlow)', 
            className: 'animate-qatar-pulse',
            style: { animationDelay: '0s' },
            opacity: '0.8'
          }),
          h('circle', { 
            cx: '165', cy: '240', r: '6', 
            fill: '#8A1538', 
            className: 'animate-map-ping',
            style: { animationDelay: '0s' }
          }),
          h('text', { x: '180', y: '250', fontSize: '12', fill: '#fff', fontWeight: 'bold', className: 'animate-count-up' }, 'Doha'),
          
          // Lusail City
          h('circle', { 
            cx: '155', cy: '210', r: '8', 
            fill: 'url(#cityGlow)', 
            className: 'animate-qatar-pulse',
            style: { animationDelay: '0.5s' },
            opacity: '0.6'
          }),
          h('circle', { 
            cx: '155', cy: '210', r: '4', 
            fill: '#00B4D8', 
            className: 'animate-map-ping',
            style: { animationDelay: '0.5s' }
          }),
          h('text', { x: '170', y: '215', fontSize: '10', fill: '#00B4D8', className: 'animate-count-up' }, 'Lusail'),
          
          // Al Wakrah
          h('circle', { 
            cx: '175', cy: '290', r: '6', 
            fill: 'url(#cityGlow)', 
            className: 'animate-qatar-pulse',
            style: { animationDelay: '1s' },
            opacity: '0.5'
          }),
          h('circle', { 
            cx: '175', cy: '290', r: '3', 
            fill: '#90E0EF', 
            className: 'animate-map-ping',
            style: { animationDelay: '1s' }
          }),
          h('text', { x: '185', y: '295', fontSize: '10', fill: '#90E0EF', className: 'animate-count-up' }, 'Al Wakrah'),
          
          // Al Rayyan
          h('circle', { 
            cx: '140', cy: '250', r: '5', 
            fill: '#F72585', 
            className: 'animate-map-ping',
            style: { animationDelay: '1.2s' }
          }),
          h('text', { x: '110', y: '255', fontSize: '9', fill: '#F72585', className: 'animate-count-up' }, 'Al Rayyan'),
          
          // Dukhan
          h('circle', { 
            cx: '100', cy: '190', r: '4', 
            fill: '#FFD60A', 
            className: 'animate-map-ping',
            style: { animationDelay: '1.4s' }
          }),
          h('text', { x: '75', y: '185', fontSize: '9', fill: '#FFD60A', className: 'animate-count-up' }, 'Dukhan'),
          
          // North Field (offshore - larger for importance)
          h('circle', { 
            cx: '220', cy: '120', r: '15', 
            fill: '#FFD60A', 
            className: 'animate-qatar-pulse',
            style: { animationDelay: '1.5s' },
            opacity: '0.4'
          }),
          h('circle', { 
            cx: '220', cy: '120', r: '8', 
            fill: '#FFD60A', 
            className: 'animate-map-ping',
            style: { animationDelay: '1.5s' }
          }),
          h('text', { x: '235', y: '125', fontSize: '11', fill: '#FFD60A', fontWeight: 'bold', className: 'animate-count-up' }, 'North Field'),
          
          // Hamad Port (detailed port representation)
          h('g', { transform: 'translate(195, 350)' },
            h('rect', { x: '0', y: '0', width: '12', height: '8', fill: '#8B5CF6', className: 'animate-pulse', style: { animationDelay: '2s' } }),
            h('rect', { x: '3', y: '2', width: '6', height: '4', fill: '#fff', opacity: '0.3' }),
            h('circle', { cx: '6', cy: '4', r: '1', fill: '#00B4D8', className: 'animate-pulse' })
          ),
          h('text', { x: '215', y: '360', fontSize: '10', fill: '#8B5CF6', className: 'animate-count-up' }, 'Hamad Port'),
          
          // Hamad International Airport
          h('g', { transform: 'translate(180, 260)' },
            h('rect', { x: '0', y: '0', width: '8', height: '3', fill: '#00B4D8', className: 'animate-pulse', style: { animationDelay: '2.2s' } }),
            h('rect', { x: '2', y: '1', width: '4', height: '1', fill: '#fff', opacity: '0.5' })
          ),
          h('text', { x: '195', y: '270', fontSize: '9', fill: '#00B4D8', className: 'animate-count-up' }, 'HIA')
        ),
        
        // Satellite data connections and infrastructure
        h('g', { stroke: '#00B4D8', strokeWidth: '1.5', opacity: '0.7', className: 'animate-data-stream' },
          // Major infrastructure connections
          h('line', { x1: '165', y1: '240', x2: '220', y2: '120', strokeDasharray: '8,4', style: { animationDelay: '0s' } }),
          h('line', { x1: '155', y1: '210', x2: '195', y2: '350', strokeDasharray: '6,3', style: { animationDelay: '1s' } }),
          h('line', { x1: '165', y1: '240', x2: '180', y2: '260', strokeDasharray: '4,2', style: { animationDelay: '1.5s' } }),
          h('line', { x1: '140', y1: '250', x2: '165', y2: '240', strokeDasharray: '5,2', style: { animationDelay: '2s' } }),
          h('line', { x1: '100', y1: '190', x2: '165', y2: '240', strokeDasharray: '7,3', style: { animationDelay: '2.5s' } })
        ),
        
        // Weather/environmental data points
        h('g', { fill: '#90E0EF', className: 'animate-pulse' },
          h('circle', { cx: '120', cy: '150', r: '1.5', style: { animationDelay: '0.5s' } }),
          h('circle', { cx: '200', cy: '180', r: '1.5', style: { animationDelay: '1s' } }),
          h('circle', { cx: '160', cy: '320', r: '1.5', style: { animationDelay: '1.5s' } }),
          h('circle', { cx: '240', cy: '200', r: '1.5', style: { animationDelay: '2s' } })
        ),
        
        // Coordinate grid overlay (satellite style)
        h('g', { stroke: '#ffffff', strokeWidth: '0.3', opacity: '0.2' },
          h('line', { x1: '200', y1: '80', x2: '200', y2: '420' }),
          h('line', { x1: '80', y1: '250', x2: '320', y2: '250' }),
          h('line', { x1: '140', y1: '100', x2: '260', y2: '400' }),
          h('line', { x1: '260', y1: '100', x2: '140', y2: '400' })
        )
      )
    );
  }

  // Enhanced Satellite Animation Component
  function SatelliteAnimation() {
    return h('div', { className: 'relative w-36 h-36 mx-auto animate-fade-in-up' },
      // Orbit rings
      h('div', { className: 'absolute inset-0 rounded-full border border-white/10' }),
      h('div', { className: 'absolute inset-2 rounded-full border border-white/5' }),
      h('div', { className: 'absolute inset-4 rounded-full border border-[#8A1538]/20' }),
      
      // Orbiting satellite
      h('div', { 
        className: 'absolute top-1/2 left-1/2 w-3 h-3 bg-sky-400 rounded-full animate-satellite-orbit shadow-lg',
        style: { marginTop: '-6px', marginLeft: '-6px', filter: 'drop-shadow(0 0 4px rgba(56, 189, 248, 0.6))' }
      }),
      
      // Qatar center with enhanced styling
      h('div', { 
        className: 'absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-[#8A1538] to-[#A8002A] rounded-full shadow-lg', 
        style: { marginTop: '-16px', marginLeft: '-16px' }
      }),
      h('div', { 
        className: 'absolute top-1/2 left-1/2 w-6 h-6 bg-[#8A1538] rounded-full', 
        style: { marginTop: '-12px', marginLeft: '-12px' }
      }),
      
      // Qatar label with better positioning
      h('div', { 
        className: 'absolute top-1/2 left-1/2 text-xs text-zinc-300 font-semibold', 
        style: { marginTop: '-6px', marginLeft: '-18px' } 
      }, 'Qatar'),
      
      // Data points floating around
      h('div', { 
        className: 'absolute top-1/4 right-1/4 w-1 h-1 bg-[#00B4D8] rounded-full animate-pulse',
        style: { animationDelay: '0.5s' }
      }),
      h('div', { 
        className: 'absolute bottom-1/4 left-1/4 w-1 h-1 bg-[#FFD60A] rounded-full animate-pulse',
        style: { animationDelay: '1s' }
      }),
      h('div', { 
        className: 'absolute top-1/3 left-1/6 w-1 h-1 bg-[#90E0EF] rounded-full animate-pulse',
        style: { animationDelay: '1.5s' }
      })
    );
  }

  // Animated Stats Counter
  function AnimatedCounter({ value, label, suffix = '', delay = 0 }) {
    const [count, setCount] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);
    
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setTimeout(() => {
              const duration = 2000;
              const steps = 60;
              const increment = value / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                  setCount(value);
                  clearInterval(timer);
                } else {
                  setCount(Math.floor(current));
                }
              }, duration / steps);
            }, delay);
          }
        },
        { threshold: 0.5 }
      );
      
      const element = document.getElementById(`counter-${label.replace(/\s+/g, '-')}`);
      if (element) observer.observe(element);
      
      return () => observer.disconnect();
    }, [value, label, delay, isVisible]);
    
    return h('div', { 
      id: `counter-${label.replace(/\s+/g, '-')}`,
      className: 'text-center p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 animate-count-up',
      style: { animationDelay: `${delay}ms` }
    },
      h('div', { className: 'text-2xl md:text-3xl font-bold text-white' }, 
        count.toLocaleString() + suffix
      ),
      h('div', { className: 'text-sm text-zinc-400 mt-1' }, label)
    );
  }

  function Starfield() {
    const stars = React.useMemo(() =>
      Array.from({ length: 120 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 0.9 + 0.2,
        o: Math.random() * 0.6 + 0.3,
        delay: Math.random() * 3,
      })), []);

    return h(
      'svg',
      { className: 'absolute inset-0 h-full w-full', viewBox: '0 0 100 100', preserveAspectRatio: 'none' },
      stars.map((s) => h('circle', { 
        key: s.id, 
        cx: s.x, 
        cy: s.y, 
        r: s.r, 
        fill: 'white', 
        opacity: s.o,
        className: 'animate-pulse',
        style: { 
          animationDuration: '3s',
          animationDelay: s.delay + 's',
          animationIterationCount: 'infinite'
        }
      }))
    );
  }

  // Navigation Component
  function Navigation({ currentPage, setCurrentPage, t }) {
    const navItems = [
      { id: 'home', label: t.nav?.home || 'Home', icon: '🏠' },
      { id: 'product', label: t.nav?.product || 'Product', icon: '⚡' },
      { id: 'industries', label: t.nav?.industries || 'Industries', icon: '🏭' },
      { id: 'business-data', label: t.nav?.businessData || 'Business Data', icon: '📊' },
      { id: 'solutions', label: t.nav?.solutions || 'Solutions', icon: '🚀' },
      { id: 'about', label: t.nav?.about || 'About', icon: 'ℹ️' }
    ];

    return h('nav', { className: 'flex flex-wrap gap-2 justify-center mb-8 px-6' },
      navItems.map(item => 
        h('button', {
          key: item.id,
          onClick: () => setCurrentPage(item.id),
          className: `px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm ${
            currentPage === item.id 
              ? 'bg-[#8A1538] text-white shadow-lg' 
              : 'bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white border border-white/10'
          }`
        }, 
          h('span', null, item.icon),
          h('span', { className: 'font-medium' }, item.label)
        )
      )
    );
  }

  // Page Components
  function HomePage({ t, currentLang }) {
    return h('div', null,
      // hero section (simplified)
      h('section', { className: 'mx-auto w-full max-w-4xl px-6 py-16 text-center' },
        h('div', { className: 'mb-8' },
          h('h1', { 
            className: 'mb-6 text-4xl md:text-6xl font-bold leading-tight text-white animate-fade-in-up',
            dir: currentLang === 'ar' ? 'rtl' : 'ltr',
            lang: currentLang
          }, t.heroTitle),
          h('p', { 
            className: 'text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto animate-slide-in-right',
            style: { animationDelay: '0.5s' },
            dir: currentLang === 'ar' ? 'rtl' : 'ltr',
            lang: currentLang
          }, t.heroParagraph1),
          h('p', { 
            className: 'mt-4 text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto animate-slide-in-left',
            style: { animationDelay: '1s' },
            dir: currentLang === 'ar' ? 'rtl' : 'ltr',
            lang: currentLang
          }, t.heroParagraph2)
        ),
        // Key metrics summary
        h('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-4 mb-8' },
          h(AnimatedCounter, { value: 77, label: currentLang === 'ar' ? 'مليار م³ غاز' : 'Bcm Gas', suffix: '', delay: 0 }),
          h(AnimatedCounter, { value: 40, label: currentLang === 'ar' ? 'مليون مسافر' : 'M Passengers', suffix: '', delay: 200 }),
          h(AnimatedCounter, { value: 1.8, label: currentLang === 'ar' ? 'مليون حاوية' : 'M TEU Port', suffix: '', delay: 400 }),
          h(AnimatedCounter, { value: 24, label: currentLang === 'ar' ? 'ساعة' : 'Hours', suffix: '/7', delay: 600 })
        ),
        // CTA buttons
        h('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center items-center' },
          h('button', { 
            className: 'px-8 py-3 bg-[#8A1538] text-white rounded-lg hover:bg-[#A8002A] transition-colors font-semibold',
            onClick: () => {} 
          }, t.enterPortal),
          h('button', { 
            className: 'px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold',
            onClick: () => {} 
          }, t.talkToVortx)
        )
      ),
      // Quick overview sections
      h('div', { className: 'grid md:grid-cols-3 gap-8 mx-auto w-full max-w-6xl px-6 py-8' },
        h('div', { className: 'text-center p-6 rounded-xl bg-white/5 border border-white/10' },
          h('div', { className: 'w-12 h-12 mx-auto mb-4 rounded-lg bg-[#8A1538]/20 flex items-center justify-center' },
            h('span', { className: 'text-2xl' }, '⚡')
          ),
          h('h3', { className: 'text-xl font-bold text-white mb-2' }, currentLang === 'ar' ? 'منتجات ذكية' : 'Smart Products'),
          h('p', { className: 'text-zinc-300 text-sm' }, currentLang === 'ar' ? 'منصة متكاملة للذكاء الجيومكاني' : 'Integrated geospatial intelligence platform')
        ),
        h('div', { className: 'text-center p-6 rounded-xl bg-white/5 border border-white/10' },
          h('div', { className: 'w-12 h-12 mx-auto mb-4 rounded-lg bg-[#8A1538]/20 flex items-center justify-center' },
            h('span', { className: 'text-2xl' }, '🏭')
          ),
          h('h3', { className: 'text-xl font-bold text-white mb-2' }, currentLang === 'ar' ? 'حلول الصناعات' : 'Industry Solutions'),
          h('p', { className: 'text-zinc-300 text-sm' }, currentLang === 'ar' ? 'حلول مخصصة للقطاعات الحيوية' : 'Tailored solutions for key sectors')
        ),
        h('div', { className: 'text-center p-6 rounded-xl bg-white/5 border border-white/10' },
          h('div', { className: 'w-12 h-12 mx-auto mb-4 rounded-lg bg-[#8A1538]/20 flex items-center justify-center' },
            h('span', { className: 'text-2xl' }, '📊')
          ),
          h('h3', { className: 'text-xl font-bold text-white mb-2' }, currentLang === 'ar' ? 'بيانات حقيقية' : 'Real Data'),
          h('p', { className: 'text-zinc-300 text-sm' }, currentLang === 'ar' ? 'رؤى من البيانات التجارية الفعلية' : 'Insights from actual business data')
        )
      )
    );
  }

  // Page routing function
  function renderPage(currentPage, t, currentLang) {
    switch (currentPage) {
      case 'home':
        return h(HomePage, { t, currentLang });
      case 'product':
        return h('div', { className: 'mx-auto w-full max-w-6xl px-6 py-16' }, 
          h('h1', { className: 'text-4xl font-bold text-white mb-8 text-center' }, t.product.title),
          h('p', { className: 'text-lg text-zinc-300 mb-12 text-center max-w-2xl mx-auto' }, t.product.subtitle),
          h('div', { className: 'grid gap-8 md:grid-cols-2 lg:grid-cols-3' },
            Object.entries(t.product.features).map(([key, feature]) =>
              h(CapabilityCard, { key, title: feature.title }, feature.desc)
            )
          )
        );
      case 'industries':
        return h('div', { className: 'mx-auto w-full max-w-6xl px-6 py-16' }, 
          h('h1', { className: 'text-4xl font-bold text-white mb-8 text-center' }, t.industries.title),
          h('p', { className: 'text-lg text-zinc-300 mb-12 text-center max-w-2xl mx-auto' }, t.industries.subtitle),
          h('div', { className: 'grid gap-8 md:grid-cols-2 lg:grid-cols-3' },
            Object.entries(t.industries.sectors).map(([key, sector]) =>
              h(CapabilityCard, { key, title: sector.title, icon: h(IndustryIcon, { type: key.includes('Energy') ? 'energy' : key.includes('Airways') ? 'aviation' : 'finance' }) }, sector.desc)
            )
          )
        );
      case 'business-data':
        return h('div', { className: 'mx-auto w-full max-w-6xl px-6 py-16' }, 
          h('h1', { className: 'text-4xl font-bold text-white mb-8 text-center' }, t.businessData.title),
          h('p', { className: 'text-lg text-zinc-300 mb-12 text-center max-w-2xl mx-auto' }, t.businessData.subtitle),
          h('div', { className: 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' },
            Object.entries(t.businessData.samples).map(([key, sample], index) =>
              h(BusinessDataCard, { 
                key, 
                title: sample.title,
                value: sample.value,
                desc: sample.desc,
                trend: sample.trend,
                delay: index * 100
              })
            )
          )
        );
      case 'solutions':
        return h('div', { className: 'mx-auto w-full max-w-6xl px-6 py-16' }, 
          h('h1', { className: 'text-4xl font-bold text-white mb-8 text-center' }, t.forGovernment.title),
          h('p', { className: 'text-lg text-zinc-300 mb-12 text-center max-w-2xl mx-auto' }, t.forGovernment.subtitle),
          h('div', { className: 'grid gap-8 md:grid-cols-2 lg:grid-cols-3' },
            Object.entries(t.forGovernment.solutions).map(([key, solution]) =>
              h(CapabilityCard, { key, title: solution.title, icon: h(IndustryIcon, { type: 'government' }) }, solution.desc)
            )
          )
        );
      case 'about':
        return h('div', { className: 'mx-auto w-full max-w-4xl px-6 py-16 text-center' }, 
          h('h1', { className: 'text-4xl font-bold text-white mb-8' }, t.understanding.title),
          h('p', { className: 'text-lg text-zinc-300 mb-12 leading-relaxed' }, t.understanding.overview),
          h('div', { className: 'grid gap-8 md:grid-cols-2' },
            Object.entries(t.understanding.keyPoints).map(([key, point]) =>
              h(CapabilityCard, { key, title: point.title }, point.desc)
            )
          )
        );
      default:
        return h(HomePage, { t, currentLang });
    }
  }

  function GeoQALanding() {
    const { currentLang, setCurrentLang, isDark, setIsDark, currentPage, setCurrentPage, t } = useGlobalState();
    
    // Parallax scrolling effect
    React.useEffect(() => {
      const handleScroll = () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-slow');
        
        parallaxElements.forEach((element, index) => {
          const speed = 0.1 + (index * 0.05);
          const yPos = -(scrolled * speed);
          element.style.transform = `translateY(${yPos}px)`;
        });
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return h(
      'main',
      { 
        className: 'min-h-screen bg-black text-zinc-200 antialiased',
        role: 'main',
        'aria-label': 'geo.qa - Qatar\'s AI Geospatial Portal'
      },
      // backdrop and starfield
      h('div', { className: 'pointer-events-none fixed inset-0 -z-10' },
        // Qatar skyline pattern background
        h('div', { className: 'absolute inset-0' },
          h('svg', { className: 'absolute inset-0 w-full h-full opacity-[0.15]', viewBox: '0 0 1200 800', preserveAspectRatio: 'xMidYEnd slice' },
            h('defs', null,
              h('pattern', { id: 'qatar-skyline-pattern', x: '0', y: '0', width: '1200', height: '200', patternUnits: 'userSpaceOnUse' },
                // Repeated Qatar skyline silhouettes across the background
                h('g', { fill: '#1a1a1a', opacity: '1' },
                  // MIA
                  h('path', { d: 'M50 180 h40 v-15 h-15 v-15 h-15 v15 h-10 z' }),
                  // NMoQ (desert rose)
                  h('ellipse', { cx: '150', cy: '180', rx: '20', ry: '4' }),
                  h('ellipse', { cx: '150', cy: '176', rx: '14', ry: '3' }),
                  h('ellipse', { cx: '150', cy: '173', rx: '10', ry: '2' }),
                  // Tornado Tower
                  h('path', { d: 'M220 180 v-50 c7 -7 14 -7 21 0 v50 z' }),
                  h('path', { d: 'M220 150 c7 4 14 4 21 0', stroke: '#1a1a1a', strokeWidth: '1', fill: 'none' }),
                  // Doha Tower
                  h('rect', { x: '280', y: '130', width: '18', height: '50', rx: '8' }),
                  // Torch Tower
                  h('path', { d: 'M340 180 v-60 c4 5 8 16 8 28 s-4 22 -8 32 z' }),
                  // Lusail arch
                  h('path', { d: 'M400 180 v-40 a20 18 0 1 1 20 0 v40 z' }),
                  // Mixed buildings
                  h('rect', { x: '460', y: '160', width: '12', height: '20' }),
                  h('rect', { x: '480', y: '150', width: '14', height: '30' }),
                  h('rect', { x: '500', y: '140', width: '10', height: '40' }),
                  h('rect', { x: '520', y: '155', width: '16', height: '25' }),
                  // More skyline elements
                  h('path', { d: 'M580 180 h30 v-12 h-12 v-12 h-12 v12 h-6 z' }),
                  h('rect', { x: '640', y: '165', width: '8', height: '15' }),
                  h('rect', { x: '655', y: '155', width: '10', height: '25' }),
                  h('rect', { x: '670', y: '145', width: '12', height: '35' }),
                  h('ellipse', { cx: '720', cy: '180', rx: '15', ry: '3' }),
                  h('ellipse', { cx: '720', cy: '177', rx: '10', ry: '2' }),
                  // Far buildings
                  h('rect', { x: '760', y: '170', width: '6', height: '10' }),
                  h('rect', { x: '770', y: '165', width: '8', height: '15' }),
                  h('rect', { x: '785', y: '160', width: '10', height: '20' }),
                  h('rect', { x: '800', y: '155', width: '12', height: '25' }),
                  // Additional iconic buildings
                  h('path', { d: 'M850 180 v-35 c5 -5 10 -5 15 0 v35 z' }),
                  h('rect', { x: '890', y: '165', width: '8', height: '15' }),
                  h('rect', { x: '905', y: '170', width: '6', height: '10' }),
                  h('rect', { x: '920', y: '160', width: '10', height: '20' }),
                  // Pearl Qatar inspired
                  h('circle', { cx: '960', cy: '170', r: '8' }),
                  h('path', { d: 'M952 178 h16 v2 h-16 z' }),
                  // More towers
                  h('rect', { x: '990', y: '150', width: '8', height: '30' }),
                  h('rect', { x: '1005', y: '155', width: '10', height: '25' }),
                  h('rect', { x: '1020', y: '165', width: '12', height: '15' }),
                  // West Bay towers
                  h('rect', { x: '1050', y: '140', width: '14', height: '40' }),
                  h('rect', { x: '1070', y: '145', width: '16', height: '35' }),
                  h('rect', { x: '1090', y: '150', width: '12', height: '30' }),
                  h('rect', { x: '1110', y: '160', width: '10', height: '20' }),
                  h('rect', { x: '1125', y: '165', width: '8', height: '15' }),
                  h('rect', { x: '1140', y: '170', width: '6', height: '10' }),
                  // Ground line
                  h('rect', { x: '0', y: '180', width: '1200', height: '20' })
                )
              )
            ),
            h('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: 'url(#qatar-skyline-pattern)' })
          )
        ),
        h('div', { className: 'absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(40,120,255,0.18),transparent),radial-gradient(800px_400px_at_10%_-10%,rgba(200,60,255,0.12),transparent),radial-gradient(900px_600px_at_50%_120%,rgba(0,180,160,0.12),transparent)] parallax-slow' }),
        h(Starfield, null),
        // subtle geometric motif with animation
        h('svg', { className: 'absolute right-0 top-0 h-64 w-64 opacity-[0.08] md:h-80 md:w-80 animate-float', viewBox: '0 0 100 100', 'aria-hidden': 'true' },
          h('defs', null,
            h('pattern', { id: 'geo-motif', width: '8', height: '8', patternUnits: 'userSpaceOnUse' },
              h('path', { 
                d: 'M0 4h8M4 0v8', 
                stroke: '#8A1538', 
                strokeWidth: '0.4', 
                opacity: '0.9',
                className: 'animate-pulse',
                style: { animationDuration: '4s' }
              })
            ),
            h('linearGradient', { id: 'geo-fade', x1: '0', y1: '0', x2: '0', y2: '1' },
              h('stop', { offset: '0%', stopColor: '#8A1538', stopOpacity: '0.4' }),
              h('stop', { offset: '100%', stopColor: '#8A1538', stopOpacity: '0' })
            ),
            h('radialGradient', { id: 'glow-center', cx: '50%', cy: '50%', r: '50%' },
              h('stop', { offset: '0%', stopColor: '#8A1538', stopOpacity: '0.2' }),
              h('stop', { offset: '100%', stopColor: '#8A1538', stopOpacity: '0' })
            )
          ),
          h('rect', { x: '0', y: '0', width: '100', height: '100', fill: 'url(#geo-motif)' }),
          h('circle', { cx: '50', cy: '50', r: '30', fill: 'url(#glow-center)', className: 'animate-pulse', style: { animationDuration: '6s' } }),
          h('rect', { x: '0', y: '0', width: '100', height: '100', fill: 'url(#geo-fade)' })
        )
      ),

      // header with responsive logo
      h('header', { 
        className: 'mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:py-8',
        role: 'banner',
        'aria-label': 'Main navigation'
      },
        h('button', {
          onClick: () => setCurrentPage('home'),
          className: 'flex items-center gap-4 transition-transform hover:scale-105'
        },
          // Mobile logo (icon only)
          h('div', { className: 'md:hidden flex items-center gap-2' },
            h(GeoQALogo, { 
              variant: 'icon', 
              className: 'w-8 h-8',
              animated: true 
            }),
            h('span', { className: 'text-lg font-semibold tracking-tight text-white' }, 'geo.qa')
          ),
          // Desktop logo (full)
          h(GeoQALogo, { 
            variant: 'full', 
            className: 'hidden md:flex',
            animated: true 
          }),
          h('span', { className: 'text-xs text-zinc-400 ml-2' }, t.byVortx)
        ),
        h('div', { className: 'hidden md:block' },
          h(Navigation, { currentPage, setCurrentPage, t })
        ),
        h('div', { className: 'flex items-center gap-2' },
          h(LanguageSelector, { currentLang, setCurrentLang, t }),
          h(ThemeToggle, { isDark, setIsDark, t })
        ),
        // Mobile menu indicator
        h('div', { className: 'md:hidden flex items-center gap-1 text-xs text-zinc-500' },
          h('div', { className: 'w-1 h-1 bg-zinc-500 rounded-full animate-pulse' }),
          h('div', { className: 'w-1 h-1 bg-zinc-500 rounded-full animate-pulse', style: { animationDelay: '0.5s' } }),
          h('div', { className: 'w-1 h-1 bg-zinc-500 rounded-full animate-pulse', style: { animationDelay: '1s' } })
        )
      ),

      // Main content area with page routing
      renderPage(currentPage, t, currentLang),

      // understanding section with Qatar map and satellite animation
      h('section', { className: 'mx-auto w-full max-w-6xl px-6 py-16 md:py-20 border-t border-white/10' },
        h('div', { className: 'text-center mb-12', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h('h2', { className: 'text-3xl md:text-4xl font-bold text-white mb-4' }, t.understanding.title),
          h('p', { className: 'text-lg text-zinc-300 max-w-4xl mx-auto leading-relaxed' }, t.understanding.subtitle)
        ),
        
        // Interactive visual section
        h('div', { className: 'grid md:grid-cols-2 gap-12 mb-12 items-center' },
          h('div', { className: 'order-2 md:order-1', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
            h('p', { className: 'text-lg text-zinc-300 leading-relaxed mb-6' }, t.understanding.overview),
            h('div', { className: 'flex justify-center' }
            )
          ),
          h('div', { className: 'order-1 md:order-2 flex justify-center' },
            h(QatarMapVisualization)
          )
        ),
        
        // Key business data points with animated counters
        h('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-4 mb-12' },
          h(AnimatedCounter, { value: 77, label: currentLang === 'ar' ? 'مليار م³ غاز طبيعي' : 'Bcm Natural Gas', suffix: '', delay: 0 }),
          h(AnimatedCounter, { value: 126, label: currentLang === 'ar' ? 'مليون طن LNG' : 'Million Tons LNG', suffix: '', delay: 200 }),
          h(AnimatedCounter, { value: 1.8, label: currentLang === 'ar' ? 'مليون حاوية' : 'Million TEU Port', suffix: '', delay: 400 }),
          h(AnimatedCounter, { value: 40, label: currentLang === 'ar' ? 'مليون مسافر جوي' : 'Million Air Passengers', suffix: '', delay: 600 })
        ),
        
        h('div', { className: 'grid gap-8 md:grid-cols-2 lg:grid-cols-4', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h(CapabilityCard, { title: t.understanding.keyPoints.realTime.title }, t.understanding.keyPoints.realTime.desc),
          h(CapabilityCard, { title: t.understanding.keyPoints.aiDriven.title }, t.understanding.keyPoints.aiDriven.desc),
          h(CapabilityCard, { title: t.understanding.keyPoints.culturallyAware.title }, t.understanding.keyPoints.culturallyAware.desc),
          h(CapabilityCard, { title: t.understanding.keyPoints.sovereignSecurity.title }, t.understanding.keyPoints.sovereignSecurity.desc)
        )
      ),

      // capabilities
      h('section', { id: 'capabilities', className: 'mx-auto w-full max-w-5xl px-6 py-16 md:py-20' },
        h('div', { className: 'grid gap-6 md:grid-cols-3', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h(CapabilityCard, { title: t.capabilities.syntheticThreat.title }, t.capabilities.syntheticThreat.desc),
          h(CapabilityCard, { title: t.capabilities.explainableReasoning.title }, t.capabilities.explainableReasoning.desc),
          h(CapabilityCard, { title: t.capabilities.securityFromAbove.title }, t.capabilities.securityFromAbove.desc),
          h(CapabilityCard, { title: t.capabilities.intelligenceInMinutes.title }, t.capabilities.intelligenceInMinutes.desc),
          h(CapabilityCard, { title: t.capabilities.qatarSovereign.title }, t.capabilities.qatarSovereign.desc),
          h(CapabilityCard, { title: t.capabilities.transparentByDesign.title }, t.capabilities.transparentByDesign.desc)
        )
      ),

      // product section
      h('section', { id: 'product', className: 'mx-auto w-full max-w-6xl px-6 py-16 md:py-20 border-t border-white/10' },
        h('div', { className: 'text-center mb-12', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h('h2', { className: 'text-3xl md:text-4xl font-bold text-white mb-4' }, t.product.title),
          h('p', { className: 'text-lg text-zinc-300 max-w-2xl mx-auto' }, t.product.subtitle)
        ),
        h('div', { className: 'grid gap-8 md:grid-cols-2 lg:grid-cols-3', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h(CapabilityCard, { title: t.product.features.realTimeMapping.title }, t.product.features.realTimeMapping.desc),
          h(CapabilityCard, { title: t.product.features.aiPoweredAnalysis.title }, t.product.features.aiPoweredAnalysis.desc),
          h(CapabilityCard, { title: t.product.features.multiSourceData.title }, t.product.features.multiSourceData.desc),
          h(CapabilityCard, { title: t.product.features.arabicFirst.title }, t.product.features.arabicFirst.desc),
          h(CapabilityCard, { title: t.product.features.secureArchitecture.title }, t.product.features.secureArchitecture.desc),
          h(CapabilityCard, { title: t.product.features.customReports.title }, t.product.features.customReports.desc)
        )
      ),

      // use cases section
      h('section', { id: 'usecases', className: 'mx-auto w-full max-w-6xl px-6 py-16 md:py-20 border-t border-white/10' },
        h('div', { className: 'text-center mb-12', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h('h2', { className: 'text-3xl md:text-4xl font-bold text-white mb-4' }, t.useCases.title),
          h('p', { className: 'text-lg text-zinc-300 max-w-2xl mx-auto' }, t.useCases.subtitle)
        ),
        h('div', { className: 'grid gap-8 md:grid-cols-2 lg:grid-cols-3', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h(CapabilityCard, { title: t.useCases.cases.visionAlignment.title }, t.useCases.cases.visionAlignment.desc),
          h(CapabilityCard, { title: t.useCases.cases.worldCupLegacy.title }, t.useCases.cases.worldCupLegacy.desc),
          h(CapabilityCard, { title: t.useCases.cases.lusailSmart.title }, t.useCases.cases.lusailSmart.desc),
          h(CapabilityCard, { title: t.useCases.cases.energySecurity.title }, t.useCases.cases.energySecurity.desc),
          h(CapabilityCard, { title: t.useCases.cases.marineProtection.title }, t.useCases.cases.marineProtection.desc),
          h(CapabilityCard, { title: t.useCases.cases.hajjLogistics.title }, t.useCases.cases.hajjLogistics.desc)
        )
      ),

      // industries section
      h('section', { id: 'industries', className: 'mx-auto w-full max-w-6xl px-6 py-16 md:py-20 border-t border-white/10' },
        h('div', { className: 'text-center mb-12', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h('h2', { className: 'text-3xl md:text-4xl font-bold text-white mb-4' }, t.industries.title),
          h('p', { className: 'text-lg text-zinc-300 max-w-2xl mx-auto' }, t.industries.subtitle)
        ),
        h('div', { className: 'grid gap-8 md:grid-cols-2 lg:grid-cols-3', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h(CapabilityCard, { 
            title: t.industries.sectors.qatarEnergy.title, 
            icon: h(IndustryIcon, { type: 'energy' }) 
          }, t.industries.sectors.qatarEnergy.desc),
          h(CapabilityCard, { 
            title: t.industries.sectors.qatarFund.title, 
            icon: h(IndustryIcon, { type: 'finance' }) 
          }, t.industries.sectors.qatarFund.desc),
          h(CapabilityCard, { 
            title: t.industries.sectors.hamadPort.title, 
            icon: h(IndustryIcon, { type: 'port' }) 
          }, t.industries.sectors.hamadPort.desc),
          h(CapabilityCard, { 
            title: t.industries.sectors.qatarAirways.title, 
            icon: h(IndustryIcon, { type: 'aviation' }) 
          }, t.industries.sectors.qatarAirways.desc),
          h(CapabilityCard, { 
            title: t.industries.sectors.qatarRail.title, 
            icon: h(IndustryIcon, { type: 'rail' }) 
          }, t.industries.sectors.qatarRail.desc),
          h(CapabilityCard, { 
            title: t.industries.sectors.qfc.title, 
            icon: h(IndustryIcon, { type: 'finance' }) 
          }, t.industries.sectors.qfc.desc),
          h(CapabilityCard, { 
            title: t.industries.sectors.healthcare.title, 
            icon: h(IndustryIcon, { type: 'healthcare' }) 
          }, t.industries.sectors.healthcare.desc),
          h(CapabilityCard, { 
            title: t.industries.sectors.education.title, 
            icon: h(IndustryIcon, { type: 'education' }) 
          }, t.industries.sectors.education.desc)
        )
      ),

      // business data samples section
      h('section', { id: 'businessdata', className: 'mx-auto w-full max-w-6xl px-6 py-16 md:py-20 border-t border-white/10' },
        h('div', { className: 'text-center mb-12', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h('h2', { className: 'text-3xl md:text-4xl font-bold text-white mb-4' }, t.businessData.title),
          h('p', { className: 'text-lg text-zinc-300 max-w-2xl mx-auto' }, t.businessData.subtitle)
        ),
        h('div', { className: 'grid gap-6 md:grid-cols-2 lg:grid-cols-3', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h(BusinessDataCard, { 
            title: t.businessData.samples.energy.title,
            value: t.businessData.samples.energy.value,
            desc: t.businessData.samples.energy.desc,
            trend: t.businessData.samples.energy.trend,
            icon: h(IndustryIcon, { type: 'energy', className: 'w-5 h-5' }),
            delay: 0
          }),
          h(BusinessDataCard, { 
            title: t.businessData.samples.aviation.title,
            value: t.businessData.samples.aviation.value,
            desc: t.businessData.samples.aviation.desc,
            trend: t.businessData.samples.aviation.trend,
            icon: h(IndustryIcon, { type: 'aviation', className: 'w-5 h-5' }),
            delay: 100
          }),
          h(BusinessDataCard, { 
            title: t.businessData.samples.shipping.title,
            value: t.businessData.samples.shipping.value,
            desc: t.businessData.samples.shipping.desc,
            trend: t.businessData.samples.shipping.trend,
            icon: h(IndustryIcon, { type: 'port', className: 'w-5 h-5' }),
            delay: 200
          }),
          h(BusinessDataCard, { 
            title: t.businessData.samples.construction.title,
            value: t.businessData.samples.construction.value,
            desc: t.businessData.samples.construction.desc,
            trend: t.businessData.samples.construction.trend,
            icon: h('svg', { className: 'w-5 h-5 text-[#FF6B35]', fill: 'currentColor', viewBox: '0 0 24 24' },
              h('path', { d: 'M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z' })
            ),
            delay: 300
          }),
          h(BusinessDataCard, { 
            title: t.businessData.samples.realEstate.title,
            value: t.businessData.samples.realEstate.value,
            desc: t.businessData.samples.realEstate.desc,
            trend: t.businessData.samples.realEstate.trend,
            icon: h('svg', { className: 'w-5 h-5 text-[#06D6A0]', fill: 'currentColor', viewBox: '0 0 24 24' },
              h('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' })
            ),
            delay: 400
          }),
          h(BusinessDataCard, { 
            title: t.businessData.samples.retail.title,
            value: t.businessData.samples.retail.value,
            desc: t.businessData.samples.retail.desc,
            trend: t.businessData.samples.retail.trend,
            icon: h('svg', { className: 'w-5 h-5 text-[#8B5CF6]', fill: 'currentColor', viewBox: '0 0 24 24' },
              h('path', { d: 'M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h4c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1h4zm0 2v13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6H7z' })
            ),
            delay: 500
          })
        )
      ),

      // for people section
      h('section', { className: 'mx-auto w-full max-w-6xl px-6 py-16 md:py-20 border-t border-white/10' },
        h('div', { className: 'text-center mb-12', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h('h2', { className: 'text-3xl md:text-4xl font-bold text-white mb-4' }, t.forPeople.title),
          h('p', { className: 'text-lg text-zinc-300 max-w-2xl mx-auto' }, t.forPeople.subtitle)
        ),
        h('div', { className: 'grid gap-8 md:grid-cols-2', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h(CapabilityCard, { title: t.forPeople.benefits.smartCommute.title }, t.forPeople.benefits.smartCommute.desc),
          h(CapabilityCard, { title: t.forPeople.benefits.publicServices.title }, t.forPeople.benefits.publicServices.desc),
          h(CapabilityCard, { title: t.forPeople.benefits.safetyAlerts.title }, t.forPeople.benefits.safetyAlerts.desc),
          h(CapabilityCard, { title: t.forPeople.benefits.communityInsights.title }, t.forPeople.benefits.communityInsights.desc)
        )
      ),

      // for government section
      h('section', { className: 'mx-auto w-full max-w-6xl px-6 py-16 md:py-20 border-t border-white/10' },
        h('div', { className: 'text-center mb-12', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h('h2', { className: 'text-3xl md:text-4xl font-bold text-white mb-4' }, t.forGovernment.title),
          h('p', { className: 'text-lg text-zinc-300 max-w-2xl mx-auto' }, t.forGovernment.subtitle)
        ),
        h('div', { className: 'grid gap-8 md:grid-cols-2 lg:grid-cols-3', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h(CapabilityCard, { 
            title: t.forGovernment.solutions.planningCouncil.title, 
            icon: h(IndustryIcon, { type: 'government' }) 
          }, t.forGovernment.solutions.planningCouncil.desc),
          h(CapabilityCard, { 
            title: t.forGovernment.solutions.municipalityMonitoring.title, 
            icon: h(IndustryIcon, { type: 'government' }) 
          }, t.forGovernment.solutions.municipalityMonitoring.desc),
          h(CapabilityCard, { 
            title: t.forGovernment.solutions.moi.title, 
            icon: h(IndustryIcon, { type: 'government' }) 
          }, t.forGovernment.solutions.moi.desc),
          h(CapabilityCard, { 
            title: t.forGovernment.solutions.ashghal.title, 
            icon: h(IndustryIcon, { type: 'government' }) 
          }, t.forGovernment.solutions.ashghal.desc),
          h(CapabilityCard, { 
            title: t.forGovernment.solutions.environmentMinistry.title, 
            icon: h(IndustryIcon, { type: 'government' }) 
          }, t.forGovernment.solutions.environmentMinistry.desc),
          h(CapabilityCard, { 
            title: t.forGovernment.solutions.qatarStatistics.title, 
            icon: h(IndustryIcon, { type: 'government' }) 
          }, t.forGovernment.solutions.qatarStatistics.desc),
          h(CapabilityCard, { 
            title: t.forGovernment.solutions.civilDefense.title, 
            icon: h(IndustryIcon, { type: 'government' }) 
          }, t.forGovernment.solutions.civilDefense.desc),
          h(CapabilityCard, { 
            title: t.forGovernment.solutions.coastGuard.title, 
            icon: h(IndustryIcon, { type: 'government' }) 
          }, t.forGovernment.solutions.coastGuard.desc)
        )
      ),

      // footer with skyline and logo
      h('footer', { id: 'contact', className: 'border-t border-white/10' },
        h('div', { className: 'mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-8 md:flex-row md:items-center', dir: currentLang === 'ar' ? 'rtl' : 'ltr', lang: currentLang },
          h('div', { className: 'flex flex-col gap-3' },
            h(GeoQALogo, { 
              variant: 'full', 
              className: 'opacity-80 hover:opacity-100 transition-opacity duration-300',
              animated: false 
            }),
            h('div', { className: 'text-sm text-zinc-400' }, `${t.footer?.copyright || ('© ' + new Date().getFullYear() + ' geo.qa — Qatar\'s AI Portal • Built by Vortx.ai')}`)
          ),
          h('div', { className: 'text-sm text-zinc-400' }, (t.footer?.contact || 'Contact:'), ' ', h('a', { className: 'hover:text-zinc-200 transition-colors duration-200 hover:underline decoration-sky-400', href: 'mailto:hello@vortx.ai' }, 'hello@vortx.ai'))
        ),
        h('div', { className: 'pointer-events-none relative footer-accent' },
          h('svg', { 'aria-hidden': 'true', className: 'absolute inset-x-0 -bottom-0 h-24 w-full opacity-25 md:h-32', viewBox: '0 0 1200 200', preserveAspectRatio: 'none' },
            h('defs', null,
              h('linearGradient', { id: 'qatar-maroon', x1: '0', y1: '0', x2: '0', y2: '1' },
                h('stop', { offset: '0%', stopColor: '#8A1538', stopOpacity: '0.55' }),
                h('stop', { offset: '100%', stopColor: '#8A1538', stopOpacity: '0.2' })
              ),
              h('linearGradient', { id: 'edge-fade', x1: '0', y1: '0', x2: '1', y2: '0' },
                h('stop', { offset: '0%', stopColor: '#000', stopOpacity: '0' }),
                h('stop', { offset: '15%', stopColor: '#000', stopOpacity: '1' }),
                h('stop', { offset: '85%', stopColor: '#000', stopOpacity: '1' }),
                h('stop', { offset: '100%', stopColor: '#000', stopOpacity: '0' })
              )
            ),
            h('path', { d: 'M0 170 L1200 150 L1200 200 L0 200 Z', fill: 'url(#qatar-maroon)' }),
            h('path', { 
              d: 'M120 150 h60 v-20 h-20 v-20 h-20 v20 h-20 z', 
              fill: '#8A1538', 
              opacity: '0.35',
              className: 'animate-pulse',
              style: { animationDuration: '8s', animationDelay: '0s' }
            }),
            h('g', { fill: '#8A1538', opacity: '0.35' },
              h('ellipse', { cx: '250', cy: '150', rx: '28', ry: '6', className: 'animate-pulse', style: { animationDuration: '6s', animationDelay: '1s' } }),
              h('ellipse', { cx: '250', cy: '144', rx: '20', ry: '5', className: 'animate-pulse', style: { animationDuration: '7s', animationDelay: '2s' } }),
              h('ellipse', { cx: '250', cy: '139', rx: '14', ry: '4', className: 'animate-pulse', style: { animationDuration: '8s', animationDelay: '3s' } })
            ),
            h('path', { d: 'M360 150 v-70 c10 -10 20 -10 30 0 v70 z', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '9s', animationDelay: '2s' } }),
            h('path', { d: 'M360 110 c10 6 20 6 30 0', stroke: '#8A1538', strokeWidth: '2', opacity: '0.35', fill: 'none', className: 'animate-pulse', style: { animationDuration: '9s', animationDelay: '2s' } }),
            h('rect', { x: '420', y: '80', width: '28', height: '70', fill: '#8A1538', opacity: '0.35', rx: '12', className: 'animate-pulse', style: { animationDuration: '5s', animationDelay: '1s' } }),
            h('path', { d: 'M500 150 v-90 c6 8 12 24 12 40 s-6 32 -12 50 z', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '4s', animationDelay: '0.5s' } }),
            h('path', { d: 'M600 150 v-60 a30 28 0 1 1 30 0 v60 z', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '7s', animationDelay: '3s' } }),
            h('rect', { x: '680', y: '120', width: '20', height: '30', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '6s', animationDelay: '4s' } }),
            h('rect', { x: '710', y: '110', width: '22', height: '40', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '8s', animationDelay: '5s' } }),
            h('rect', { x: '740', y: '100', width: '18', height: '50', fill: '#8A1538', opacity: '0.35', className: 'animate-pulse', style: { animationDuration: '7s', animationDelay: '6s' } }),
            h('rect', { x: '0', y: '0', width: '1200', height: '200', fill: 'url(#edge-fade)' })
          )
        )
      )
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(h(GeoQALanding));
})();
