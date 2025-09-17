// Plain React (no JSX) to avoid Babel in-browser
(function () {
  const h = React.createElement;

  // Multilingual content (keeping existing translations)
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
      nav: { 
        home: 'الرئيسية', product: 'المنتج', useCases: 'حالات الاستخدام', industries: 'الصناعات', 
        businessData: 'البيانات التجارية', solutions: 'الحلول', about: 'حول'
      }
    },
    en: {
      title: 'geo.qa — Qatar\'s AI Portal',
      heroTitle: 'I am Qatar\'s living map — your quiet portal into space‑level intelligence',
      heroSubtitle: 'Your quiet portal into space‑level intelligence',
      heroParagraph1: 'I watch the shoreline breathe, the desert shift, the city glow. I hold fresh satellite scenes and ground truth in a single memory. Ask me about land, water, buildings, roads, ships — I answer with evidence.',
      heroParagraph2: 'I don\'t shout. I don\'t decorate. I resolve. For planners and founders, for responders and researchers — I turn coordinates into clarity.',
      heroParagraph3: 'Built by Vortx.ai, I serve one promise: trustworthy AI for Qatar — grounded in orbit, delivered in seconds.',
      enterPortal: 'Enter the Portal',
      talkToVortx: 'Talk to Vortx.ai',
      byVortx: 'by Vortx.ai',
      nav: { 
        home: 'Home', product: 'Product', useCases: 'Use Cases', industries: 'Industries', 
        businessData: 'Business Data', solutions: 'Solutions', about: 'About'
      }
    }
  };

  // State management with routing
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
      document.documentElement.classList.toggle('rak-light', !isDark);
    }, [isDark]);

    return { currentLang, setCurrentLang, isDark, setIsDark, currentPage, setCurrentPage, t: translations[currentLang] };
  }

  // Simple Logo Component
  function GeoQALogo({ variant = 'full', className = '', animated = true }) {
    const baseClasses = `geo-qa-logo ${animated ? 'transition-all duration-300' : ''}`;
    
    if (variant === 'icon') {
      return h('div', { className: `${baseClasses} ${className}` },
        h('svg', { className: 'w-full h-full', viewBox: '0 0 40 40', fill: 'none' },
          h('defs', null,
            h('linearGradient', { id: 'spaceGradient', x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
              h('stop', { offset: '0%', stopColor: '#667eea' }),
              h('stop', { offset: '100%', stopColor: '#764ba2' })
            )
          ),
          h('circle', { cx: '20', cy: '20', r: '18', fill: 'none', stroke: 'url(#spaceGradient)', strokeWidth: '1', opacity: '0.3' }),
          h('circle', { cx: '20', cy: '20', r: '8', fill: '#8A1538' }),
          h('circle', { cx: '20', cy: '20', r: '2', fill: '#ffffff' })
        )
      );
    }
    
    if (variant === 'text') {
      return h('div', { className: `${baseClasses} ${className}` },
        h('svg', { className: 'w-full h-full', viewBox: '0 0 120 28', fill: 'none' },
          h('text', { x: '0', y: '20', fontSize: '20', fontWeight: '400', fill: '#ffffff', fontFamily: '"Inter", sans-serif' }, 'geo.qa')
        )
      );
    }
    
    return h('div', { className: `flex items-center gap-4 ${baseClasses} ${className}` },
      h(GeoQALogo, { variant: 'icon', className: 'w-10 h-10', animated }),
      h(GeoQALogo, { variant: 'text', className: 'h-8', animated: false })
    );
  }

  // Navigation Component
  function Navigation({ currentPage, setCurrentPage, t }) {
    const navItems = [
      { id: 'home', label: t.nav?.home || 'Home', icon: '🏠' },
      { id: 'product', label: t.nav?.product || 'Product', icon: '⚡' },
      { id: 'use-cases', label: t.nav?.useCases || 'Use Cases', icon: '🎯' },
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

  // Simple HomePage Component
  function HomePage({ t, currentLang }) {
    return h('div', null,
      h('section', { className: 'mx-auto w-full max-w-4xl px-6 py-16 text-center' },
        h('h1', { 
          className: 'mb-6 text-4xl md:text-6xl font-bold leading-tight text-white',
          dir: currentLang === 'ar' ? 'rtl' : 'ltr'
        }, t.heroTitle),
        h('p', { 
          className: 'text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-8',
          dir: currentLang === 'ar' ? 'rtl' : 'ltr'
        }, t.heroParagraph1),
        h('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center items-center' },
          h('button', { 
            className: 'px-8 py-3 bg-[#8A1538] text-white rounded-lg hover:bg-[#A8002A] transition-colors font-semibold'
          }, t.enterPortal),
          h('button', { 
            className: 'px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold'
          }, t.talkToVortx)
        )
      ),
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

  // Simple Page Components that work
  function ProductPage({ currentLang }) {
    const isArabic = currentLang === 'ar';
    return h('div', { className: 'mx-auto w-full max-w-6xl px-6 py-16' },
      h('div', { className: 'text-center mb-16' },
        h('h1', { 
          className: 'text-4xl md:text-5xl font-bold text-white mb-6',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'منصة geo.qa المتكاملة' : 'geo.qa Integrated Platform'),
        h('p', { 
          className: 'text-xl text-zinc-300 max-w-3xl mx-auto',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'منصة الذكاء الاصطناعي الجيومكاني الأكثر تطوراً في قطر' : 'Qatar\'s most advanced AI geospatial intelligence platform')
      ),
      h('div', { className: 'grid md:grid-cols-3 gap-8' },
        h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
          h('div', { className: 'w-16 h-16 mx-auto mb-6 rounded-xl bg-[#8A1538]/20 flex items-center justify-center' },
            h('span', { className: 'text-3xl' }, '🛰️')
          ),
          h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'مراقبة الأقمار الصناعية' : 'Satellite Monitoring'),
          h('p', { className: 'text-zinc-300' }, isArabic ? 'تحليل فوري للصور الفضائية عالية الدقة' : 'Real-time high-resolution satellite imagery analysis')
        ),
        h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
          h('div', { className: 'w-16 h-16 mx-auto mb-6 rounded-xl bg-[#8A1538]/20 flex items-center justify-center' },
            h('span', { className: 'text-3xl' }, '🤖')
          ),
          h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'الذكاء الاصطناعي المتقدم' : 'Advanced AI Analytics'),
          h('p', { className: 'text-zinc-300' }, isArabic ? 'خوارزميات تعلم آلي متطورة' : 'Sophisticated machine learning algorithms')
        ),
        h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
          h('div', { className: 'w-16 h-16 mx-auto mb-6 rounded-xl bg-[#8A1538]/20 flex items-center justify-center' },
            h('span', { className: 'text-3xl' }, '⚡')
          ),
          h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'استجابة فورية' : 'Real-time Response'),
          h('p', { className: 'text-zinc-300' }, isArabic ? 'نظام استجابة سريع للطوارئ' : 'Rapid emergency response system')
        )
      )
    );
  }

  function UseCasesPage({ currentLang }) {
    const isArabic = currentLang === 'ar';
    return h('div', { className: 'mx-auto w-full max-w-6xl px-6 py-16' },
      h('div', { className: 'text-center mb-16' },
        h('h1', { 
          className: 'text-4xl md:text-5xl font-bold text-white mb-6',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'حالات الاستخدام في قطر' : 'Qatar Use Cases'),
        h('p', { 
          className: 'text-xl text-zinc-300 max-w-3xl mx-auto',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'تطبيقات واقعية للذكاء الاصطناعي الجيومكاني' : 'Real-world geospatial AI applications')
      ),
      h('div', { className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' },
        h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
          h('div', { className: 'text-3xl mb-4' }, '🎯'),
          h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'رؤية قطر 2030' : 'Qatar Vision 2030'),
          h('p', { className: 'text-zinc-300' }, isArabic ? 'مراقبة مشاريع التنمية المستدامة' : 'Sustainable development project monitoring')
        ),
        h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
          h('div', { className: 'text-3xl mb-4' }, '⚽'),
          h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'إرث كأس العالم 2022' : 'World Cup 2022 Legacy'),
          h('p', { className: 'text-zinc-300' }, isArabic ? 'إدارة البنية التحتية' : 'Infrastructure management')
        ),
        h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
          h('div', { className: 'text-3xl mb-4' }, '🏙️'),
          h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'مدينة لوسيل الذكية' : 'Lusail Smart City'),
          h('p', { className: 'text-zinc-300' }, isArabic ? 'إدارة المدينة الذكية' : 'Smart city management')
        )
      )
    );
  }

  function IndustriesPage({ currentLang }) {
    const isArabic = currentLang === 'ar';
    return h('div', { className: 'mx-auto w-full max-w-6xl px-6 py-16' },
      h('div', { className: 'text-center mb-16' },
        h('h1', { 
          className: 'text-4xl md:text-5xl font-bold text-white mb-6',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'القطاعات الحيوية في قطر' : 'Qatar\'s Key Industries'),
        h('p', { 
          className: 'text-xl text-zinc-300 max-w-3xl mx-auto',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'حلول مخصصة للقطاعات الاقتصادية الرئيسية' : 'Tailored solutions for major economic sectors')
      ),
      h('div', { className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' },
        h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
          h('div', { className: 'text-3xl mb-4' }, '⛽'),
          h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'قطر للطاقة' : 'QatarEnergy'),
          h('p', { className: 'text-zinc-300 mb-4' }, isArabic ? 'مراقبة حقل الشمال' : 'North Field monitoring'),
          h('div', { className: 'bg-[#8A1538]/10 rounded-lg p-3' },
            h('span', { className: 'text-[#8A1538] font-bold text-sm' }, isArabic ? '77 مليار متر مكعب' : '77 Bcm annually')
          )
        ),
        h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
          h('div', { className: 'text-3xl mb-4' }, '✈️'),
          h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'الخطوط الجوية القطرية' : 'Qatar Airways'),
          h('p', { className: 'text-zinc-300 mb-4' }, isArabic ? 'تحسين المسارات' : 'Route optimization'),
          h('div', { className: 'bg-[#8A1538]/10 rounded-lg p-3' },
            h('span', { className: 'text-[#8A1538] font-bold text-sm' }, isArabic ? '40.9 مليون مسافر' : '40.9M passengers')
          )
        ),
        h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
          h('div', { className: 'text-3xl mb-4' }, '🚢'),
          h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'ميناء حمد' : 'Hamad Port'),
          h('p', { className: 'text-zinc-300 mb-4' }, isArabic ? 'إدارة الحاويات' : 'Container management'),
          h('div', { className: 'bg-[#8A1538]/10 rounded-lg p-3' },
            h('span', { className: 'text-[#8A1538] font-bold text-sm' }, isArabic ? '6 مليون حاوية' : '6M TEU capacity')
          )
        )
      )
    );
  }

  function BusinessDataPage({ currentLang }) {
    const isArabic = currentLang === 'ar';
    return h('div', { className: 'mx-auto w-full max-w-6xl px-6 py-16' },
      h('div', { className: 'text-center mb-16' },
        h('h1', { 
          className: 'text-4xl md:text-5xl font-bold text-white mb-6',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'البيانات التجارية الحقيقية' : 'Real Business Data'),
        h('p', { 
          className: 'text-xl text-zinc-300 max-w-3xl mx-auto',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'رؤى مدعومة بالبيانات من القطاعات الرئيسية' : 'Data-driven insights from key sectors')
      ),
      h('div', { className: 'grid md:grid-cols-4 gap-6 mb-16' },
        h('div', { className: 'text-center p-6 rounded-xl bg-white/5 border border-white/10' },
          h('div', { className: 'text-3xl font-bold text-[#8A1538] mb-2' }, '77'),
          h('div', { className: 'text-sm text-zinc-300' }, isArabic ? 'مليار متر مكعب' : 'Bcm Gas/Year'),
          h('div', { className: 'text-xs text-zinc-500' }, isArabic ? 'حقل الشمال' : 'North Field')
        ),
        h('div', { className: 'text-center p-6 rounded-xl bg-white/5 border border-white/10' },
          h('div', { className: 'text-3xl font-bold text-[#667eea] mb-2' }, '40.9M'),
          h('div', { className: 'text-sm text-zinc-300' }, isArabic ? 'مسافر سنوياً' : 'Passengers/Year'),
          h('div', { className: 'text-xs text-zinc-500' }, isArabic ? 'مطار حمد' : 'Hamad Airport')
        ),
        h('div', { className: 'text-center p-6 rounded-xl bg-white/5 border border-white/10' },
          h('div', { className: 'text-3xl font-bold text-[#10b981] mb-2' }, '450K'),
          h('div', { className: 'text-sm text-zinc-300' }, isArabic ? 'نسمة متوقع' : 'Expected Residents'),
          h('div', { className: 'text-xs text-zinc-500' }, isArabic ? 'مدينة لوسيل' : 'Lusail City')
        ),
        h('div', { className: 'text-center p-6 rounded-xl bg-white/5 border border-white/10' },
          h('div', { className: 'text-3xl font-bold text-[#f59e0b] mb-2' }, '98.7%'),
          h('div', { className: 'text-sm text-zinc-300' }, isArabic ? 'تغطية الأقمار' : 'Satellite Coverage'),
          h('div', { className: 'text-xs text-zinc-500' }, isArabic ? 'دقة 30 سم' : '30cm Accuracy')
        )
      )
    );
  }

  function SolutionsPage({ currentLang }) {
    const isArabic = currentLang === 'ar';
    return h('div', { className: 'mx-auto w-full max-w-6xl px-6 py-16' },
      h('div', { className: 'text-center mb-16' },
        h('h1', { 
          className: 'text-4xl md:text-5xl font-bold text-white mb-6',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'حلولنا المتكاملة' : 'Our Integrated Solutions'),
        h('p', { 
          className: 'text-xl text-zinc-300 max-w-3xl mx-auto',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'حلول مخصصة للقطاع الحكومي والمؤسسات التجارية' : 'Tailored solutions for government and enterprise sectors')
      ),
      h('div', { className: 'space-y-16' },
        h('div', null,
          h('h2', { className: 'text-3xl font-bold text-white text-center mb-12' }, isArabic ? 'الحلول الحكومية' : 'Government Solutions'),
          h('div', { className: 'grid md:grid-cols-3 gap-8' },
            h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
              h('div', { className: 'text-3xl mb-4' }, '🛡️'),
              h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'وزارة الداخلية' : 'Ministry of Interior'),
              h('p', { className: 'text-zinc-300' }, isArabic ? 'مراقبة الأمن والسلامة العامة' : 'Security and public safety monitoring')
            ),
            h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
              h('div', { className: 'text-3xl mb-4' }, '🏗️'),
              h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'وزارة البلدية' : 'Ministry of Municipality'),
              h('p', { className: 'text-zinc-300' }, isArabic ? 'إدارة التطوير العمراني' : 'Urban development management')
            ),
            h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
              h('div', { className: 'text-3xl mb-4' }, '🚇'),
              h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'وزارة النقل' : 'Ministry of Transport'),
              h('p', { className: 'text-zinc-300' }, isArabic ? 'تحسين شبكات النقل' : 'Transportation network optimization')
            )
          )
        ),
        h('div', null,
          h('h2', { className: 'text-3xl font-bold text-white text-center mb-12' }, isArabic ? 'الحلول التجارية' : 'Enterprise Solutions'),
          h('div', { className: 'grid md:grid-cols-3 gap-8' },
            h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
              h('div', { className: 'text-3xl mb-4' }, '⛽'),
              h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'قطر للطاقة' : 'QatarEnergy'),
              h('p', { className: 'text-zinc-300' }, isArabic ? 'مراقبة حقل الشمال' : 'North Field monitoring')
            ),
            h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
              h('div', { className: 'text-3xl mb-4' }, '✈️'),
              h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'الخطوط الجوية القطرية' : 'Qatar Airways'),
              h('p', { className: 'text-zinc-300' }, isArabic ? 'تحسين المسارات' : 'Route optimization')
            ),
            h('div', { className: 'p-8 rounded-xl bg-white/5 border border-white/10 text-center' },
              h('div', { className: 'text-3xl mb-4' }, '🏙️'),
              h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'قطر للتطوير' : 'Qatari Diar'),
              h('p', { className: 'text-zinc-300' }, isArabic ? 'تطوير العقارات' : 'Real estate development')
            )
          )
        )
      )
    );
  }

  function AboutPage({ currentLang }) {
    const isArabic = currentLang === 'ar';
    return h('div', { className: 'mx-auto w-full max-w-4xl px-6 py-16' },
      h('div', { className: 'text-center mb-16' },
        h('h1', { 
          className: 'text-4xl md:text-5xl font-bold text-white mb-6',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'حول geo.qa' : 'About geo.qa'),
        h('p', { 
          className: 'text-xl text-zinc-300 max-w-3xl mx-auto',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'منصة الذكاء الاصطناعي الجيومكاني الرائدة في قطر' : 'Qatar\'s leading AI geospatial intelligence platform')
      ),
      h('div', { className: 'space-y-12' },
        h('div', { className: 'text-center' },
          h('h2', { className: 'text-2xl font-bold text-white mb-6' }, isArabic ? 'رؤيتنا' : 'Our Vision'),
          h('p', { 
            className: 'text-lg text-zinc-300 leading-relaxed',
            dir: isArabic ? 'rtl' : 'ltr'
          }, isArabic ? 'نسعى لتمكين دولة قطر بأحدث تقنيات الذكاء الاصطناعي الجيومكاني لدعم رؤية قطر الوطنية 2030.' : 'We strive to empower Qatar with cutting-edge geospatial AI technologies to support Qatar National Vision 2030.')
        ),
        h('div', { className: 'grid md:grid-cols-2 gap-12' },
          h('div', { className: 'text-center' },
            h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'التأسيس' : 'Founded'),
            h('p', { className: 'text-zinc-300' }, '2024'),
            h('p', { className: 'text-sm text-zinc-400 mt-2' }, isArabic ? 'بواسطة Vortx.ai' : 'by Vortx.ai')
          ),
          h('div', { className: 'text-center' },
            h('h3', { className: 'text-xl font-bold text-white mb-4' }, isArabic ? 'المقر' : 'Headquarters'),
            h('p', { className: 'text-zinc-300' }, isArabic ? 'الدوحة، قطر' : 'Doha, Qatar'),
            h('p', { className: 'text-sm text-zinc-400 mt-2' }, '25.276987°N, 51.520008°E')
          )
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
        return h(ProductPage, { currentLang });
      case 'use-cases':
        return h(UseCasesPage, { currentLang });
      case 'industries':
        return h(IndustriesPage, { currentLang });
      case 'business-data':
        return h(BusinessDataPage, { currentLang });
      case 'solutions':
        return h(SolutionsPage, { currentLang });
      case 'about':
        return h(AboutPage, { currentLang });
      default:
        return h(HomePage, { t, currentLang });
    }
  }

  // Language Toggle
  function LanguageToggle({ currentLang, setCurrentLang }) {
    return h('button', {
      onClick: () => setCurrentLang(currentLang === 'ar' ? 'en' : 'ar'),
      className: 'px-3 py-1 text-sm border border-zinc-600 rounded hover:border-zinc-400 transition-colors',
      'aria-label': 'Toggle language'
    }, currentLang === 'ar' ? 'EN' : 'AR');
  }

  // Theme Toggle
  function ThemeToggle({ isDark, setIsDark }) {
    return h('button', {
      onClick: () => setIsDark(!isDark),
      className: 'px-3 py-1 text-sm border border-zinc-600 rounded hover:border-zinc-400 transition-colors',
      'aria-label': 'Toggle theme'
    }, isDark ? '☀️' : '🌙');
  }

  function GeoQALanding() {
    const { currentLang, setCurrentLang, isDark, setIsDark, currentPage, setCurrentPage, t } = useGlobalState();

    return h('div', { className: 'min-h-screen bg-black text-white' },
      // Background
      h('div', { className: 'fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900' }),
      
      // Header
      h('header', { className: 'relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6' },
        h('button', {
          onClick: () => setCurrentPage('home'),
          className: 'transition-transform hover:scale-105'
        },
          h(GeoQALogo, { variant: 'full', animated: true })
        ),
        h('div', { className: 'flex items-center gap-4' },
          h(LanguageToggle, { currentLang, setCurrentLang }),
          h(ThemeToggle, { isDark, setIsDark })
        )
      ),
      
      // Navigation
      h('div', { className: 'relative z-10' },
        h(Navigation, { currentPage, setCurrentPage, t })
      ),
      
      // Main content
      h('main', { className: 'relative z-10' },
        renderPage(currentPage, t, currentLang)
      ),
      
      // Footer
      h('footer', { className: 'relative z-10 border-t border-white/10 mt-16' },
        h('div', { className: 'mx-auto w-full max-w-6xl px-6 py-8 text-center' },
          h('p', { className: 'text-sm text-zinc-400' }, `© 2025 geo.qa — Qatar's AI Portal • Built by Vortx.ai`)
        )
      )
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(h(GeoQALanding));
})();