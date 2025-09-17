// Clean, streamlined geo.qa - fixing repetitive content and design issues
(function () {
  const h = React.createElement;

  // Simplified translations
  const translations = {
    ar: {
      title: 'جيو.قطر — بوابة قطر للذكاء الاصطناعي',
      heroTitle: 'أنا الخريطة الحية لقطر — بوابتك إلى ذكاء الفضاء',
      heroParagraph: 'أراقب تنفس الساحل، وتحرك الصحراء، وتوهج المدينة. أحمل مشاهد الأقمار الصناعية الحديثة والحقائق الأرضية في ذاكرة واحدة.',
      enterPortal: 'ادخل البوابة',
      talkToVortx: 'تحدث مع Vortx.ai',
      nav: { 
        home: 'الرئيسية', 
        platform: 'المنصة', 
        clients: 'العملاء', 
        about: 'حول'
      }
    },
    en: {
      title: 'geo.qa — Qatar\'s AI Portal',
      heroTitle: 'I am Qatar\'s living map — your portal to space intelligence',
      heroParagraph: 'I watch the shoreline breathe, the desert shift, the city glow. I hold fresh satellite scenes and ground truth in a single memory.',
      enterPortal: 'Enter the Portal',
      talkToVortx: 'Talk to Vortx.ai',
      nav: { 
        home: 'Home', 
        platform: 'Platform', 
        clients: 'Clients', 
        about: 'About'
      }
    }
  };

  // Global state management
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

  // Logo Component
  function GeoQALogo() {
    return h('div', { className: 'flex items-center gap-3' },
      h('div', { className: 'w-8 h-8 rounded-full bg-[#8A1538] flex items-center justify-center' },
        h('div', { className: 'w-2 h-2 rounded-full bg-white' })
      ),
      h('span', { className: 'text-xl font-bold text-white' }, 'geo.qa')
    );
  }

  // Simplified Navigation - only 4 items
  function Navigation({ currentPage, setCurrentPage, t }) {
    const navItems = [
      { id: 'home', label: t.nav.home, icon: '🏠' },
      { id: 'platform', label: t.nav.platform, icon: '⚡' },
      { id: 'clients', label: t.nav.clients, icon: '🏢' },
      { id: 'about', label: t.nav.about, icon: 'ℹ️' }
    ];

    return h('nav', { className: 'flex gap-2 justify-center mb-12' },
      navItems.map(item => 
        h('button', {
          key: item.id,
          onClick: () => setCurrentPage(item.id),
          className: `px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 ${
            currentPage === item.id 
              ? 'bg-[#8A1538] text-white' 
              : 'bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white border border-white/10'
          }`
        }, 
          h('span', null, item.icon),
          h('span', { className: 'font-medium' }, item.label)
        )
      )
    );
  }

  // HomePage - Clean and focused
  function HomePage({ t, currentLang }) {
    return h('div', null,
      // Hero Section
      h('section', { className: 'text-center max-w-4xl mx-auto px-6 py-20' },
        h('h1', { 
          className: 'text-5xl md:text-7xl font-bold leading-tight text-white mb-8',
          dir: currentLang === 'ar' ? 'rtl' : 'ltr'
        }, t.heroTitle),
        h('p', { 
          className: 'text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-12',
          dir: currentLang === 'ar' ? 'rtl' : 'ltr'
        }, t.heroParagraph),
        h('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
          h('button', { 
            className: 'px-8 py-4 bg-[#8A1538] text-white rounded-xl hover:bg-[#A8002A] transition-all transform hover:scale-105 font-bold text-lg'
          }, t.enterPortal),
          h('button', { 
            className: 'px-8 py-4 border-2 border-white/20 text-white rounded-xl hover:bg-white/10 transition-all font-bold text-lg'
          }, t.talkToVortx)
        )
      ),

      // Key Stats - Qatar specific
      h('section', { className: 'grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6 py-16' },
        h('div', { className: 'text-center p-8 rounded-2xl bg-white/5 border border-white/10' },
          h('div', { className: 'text-4xl font-bold text-[#8A1538] mb-2' }, '77 Bcm'),
          h('div', { className: 'text-zinc-300' }, currentLang === 'ar' ? 'حقل الشمال - أكبر حقل غاز' : 'North Field - World\'s Largest Gas Field')
        ),
        h('div', { className: 'text-center p-8 rounded-2xl bg-white/5 border border-white/10' },
          h('div', { className: 'text-4xl font-bold text-[#667eea] mb-2' }, '2030'),
          h('div', { className: 'text-zinc-300' }, currentLang === 'ar' ? 'رؤية قطر الوطنية' : 'Qatar National Vision')
        ),
        h('div', { className: 'text-center p-8 rounded-2xl bg-white/5 border border-white/10' },
          h('div', { className: 'text-4xl font-bold text-[#10b981] mb-2' }, '30cm'),
          h('div', { className: 'text-zinc-300' }, currentLang === 'ar' ? 'دقة التحليل' : 'Analysis Precision')
        )
      )
    );
  }

  // Platform Page - Tech focused, no repetitive cards
  function PlatformPage({ currentLang }) {
    const isArabic = currentLang === 'ar';
    
    return h('div', { className: 'max-w-6xl mx-auto px-6 py-16' },
      h('div', { className: 'text-center mb-16' },
        h('h1', { 
          className: 'text-5xl font-bold text-white mb-6',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'منصة geo.qa' : 'geo.qa Platform'),
        h('p', { 
          className: 'text-xl text-zinc-300 max-w-3xl mx-auto',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'منصة الذكاء الاصطناعي الجيومكاني المتقدمة' : 'Advanced geospatial AI platform for Qatar')
      ),

      // Live Qatar Map - Interactive
      h('div', { className: 'mb-16' },
        h('div', { className: 'relative bg-white/5 rounded-2xl p-8 border border-white/10' },
          h('h2', { 
            className: 'text-2xl font-bold text-white text-center mb-8',
            dir: isArabic ? 'rtl' : 'ltr'
          }, isArabic ? 'خريطة قطر المباشرة' : 'Live Qatar Map'),
          
          // Simplified accurate Qatar outline
          h('svg', { 
            className: 'w-full h-80 mx-auto', 
            viewBox: '0 0 400 300', 
            fill: 'none'
          },
            // Qatar peninsula outline (accurate)
            h('path', {
              d: 'M 200 50 L 220 52 L 240 55 L 255 62 L 265 75 L 270 95 L 275 115 L 280 140 L 285 165 L 280 185 L 270 200 L 255 210 L 235 215 L 215 212 L 195 205 L 180 190 L 175 170 L 180 150 L 190 130 L 200 110 L 210 90 L 215 70 L 210 60 L 200 50 Z',
              fill: 'rgba(138, 21, 56, 0.2)',
              stroke: '#8A1538',
              strokeWidth: '2'
            }),
            
            // Doha
            h('circle', { cx: '240', cy: '150', r: '4', fill: '#8A1538' }),
            h('text', { x: '248', y: '145', fill: '#ffffff', fontSize: '12', fontWeight: 'bold' }, 'Doha'),
            
            // North Field
            h('circle', { cx: '230', cy: '80', r: '6', fill: '#f59e0b' }),
            h('text', { x: '210', y: '75', fill: '#ffffff', fontSize: '10' }, 'North Field'),
            
            // Data points
            h('circle', { cx: '240', cy: '150', r: '15', fill: 'none', stroke: 'rgba(138, 21, 56, 0.3)', strokeWidth: '1', strokeDasharray: '2,2' })
          ),
          
          // Live data indicator
          h('div', { className: 'absolute top-4 right-4 flex items-center gap-2 text-green-400' },
            h('div', { className: 'w-2 h-2 rounded-full bg-green-400 animate-pulse' }),
            h('span', { className: 'text-sm' }, 'Live Data')
          )
        )
      ),

      // Core Capabilities - Simple list
      h('div', { className: 'grid md:grid-cols-2 gap-12' },
        h('div', null,
          h('h3', { className: 'text-2xl font-bold text-white mb-6' }, isArabic ? 'القدرات الأساسية' : 'Core Capabilities'),
          h('div', { className: 'space-y-4' },
            [
              { title: isArabic ? 'مراقبة الأقمار الصناعية' : 'Satellite Monitoring', desc: isArabic ? 'تحديث كل 15 دقيقة' : 'Updated every 15 minutes' },
              { title: isArabic ? 'الذكاء الاصطناعي' : 'AI Analysis', desc: isArabic ? 'دقة 99.9%' : '99.9% accuracy' },
              { title: isArabic ? 'المعالجة المحلية' : 'Local Processing', desc: isArabic ? 'بيانات قطرية سيادية' : 'Qatar sovereign data' }
            ].map((item, index) =>
              h('div', { key: index, className: 'flex gap-4' },
                h('div', { className: 'w-2 h-2 rounded-full bg-[#8A1538] mt-2 flex-shrink-0' }),
                h('div', null,
                  h('h4', { className: 'text-lg font-semibold text-white' }, item.title),
                  h('p', { className: 'text-zinc-400' }, item.desc)
                )
              )
            )
          )
        ),

        h('div', null,
          h('h3', { className: 'text-2xl font-bold text-white mb-6' }, isArabic ? 'الأداء' : 'Performance'),
          h('div', { className: 'grid grid-cols-2 gap-4' },
            [
              { value: '50TB', label: isArabic ? 'يومياً' : 'Daily' },
              { value: '<2s', label: isArabic ? 'استجابة' : 'Response' },
              { value: '98.7%', label: isArabic ? 'تغطية' : 'Coverage' },
              { value: '24/7', label: isArabic ? 'مراقبة' : 'Monitoring' }
            ].map((stat, index) =>
              h('div', { key: index, className: 'text-center p-4 rounded-xl bg-white/5' },
                h('div', { className: 'text-2xl font-bold text-[#667eea]' }, stat.value),
                h('div', { className: 'text-sm text-zinc-400' }, stat.label)
              )
            )
          )
        )
      )
    );
  }

  // Clients Page - Major Qatar entities only, no repetitive cards
  function ClientsPage({ currentLang }) {
    const isArabic = currentLang === 'ar';
    
    const clients = [
      { name: isArabic ? 'قطر للطاقة' : 'QatarEnergy', icon: '⛽', sector: isArabic ? 'طاقة' : 'Energy' },
      { name: isArabic ? 'الخطوط الجوية القطرية' : 'Qatar Airways', icon: '✈️', sector: isArabic ? 'طيران' : 'Aviation' },
      { name: isArabic ? 'قطر للتطوير' : 'Qatari Diar', icon: '🏗️', sector: isArabic ? 'تطوير' : 'Development' },
      { name: isArabic ? 'وزارة الداخلية' : 'Ministry of Interior', icon: '🛡️', sector: isArabic ? 'حكومي' : 'Government' },
      { name: isArabic ? 'مدينة لوسيل' : 'Lusail City', icon: '🏙️', sector: isArabic ? 'مدن ذكية' : 'Smart Cities' },
      { name: isArabic ? 'ميناء حمد' : 'Hamad Port', icon: '🚢', sector: isArabic ? 'موانئ' : 'Ports' }
    ];

    return h('div', { className: 'max-w-6xl mx-auto px-6 py-16' },
      h('div', { className: 'text-center mb-16' },
        h('h1', { 
          className: 'text-5xl font-bold text-white mb-6',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'عملاؤنا' : 'Our Clients'),
        h('p', { 
          className: 'text-xl text-zinc-300',
          dir: isArabic ? 'rtl' : 'ltr'
        }, isArabic ? 'المؤسسات الرائدة في دولة قطر' : 'Leading organizations across Qatar')
      ),

      h('div', { className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' },
        clients.map((client, index) =>
          h('div', { 
            key: index,
            className: 'group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300'
          },
            h('div', { className: 'flex items-center gap-4 mb-4' },
              h('div', { className: 'text-3xl' }, client.icon),
              h('div', { className: 'text-xs px-2 py-1 rounded bg-[#8A1538]/20 text-[#8A1538]' }, client.sector)
            ),
            h('h3', { className: 'text-lg font-bold text-white group-hover:text-zinc-100' }, client.name)
          )
        )
      )
    );
  }

  // About Page - Simple and clean
  function AboutPage({ currentLang }) {
    const isArabic = currentLang === 'ar';
    
    return h('div', { className: 'max-w-4xl mx-auto px-6 py-16 text-center' },
      h('h1', { 
        className: 'text-5xl font-bold text-white mb-8',
        dir: isArabic ? 'rtl' : 'ltr'
      }, isArabic ? 'حول geo.qa' : 'About geo.qa'),
      
      h('div', { className: 'text-xl text-zinc-300 leading-relaxed space-y-6 mb-16' },
        h('p', { dir: isArabic ? 'rtl' : 'ltr' }, 
          isArabic ? 'بناه Vortx.ai، نحن نخدم قطر بذكاء اصطناعي جيومكاني موثوق — مؤسس في المدار، مُسلم في ثوانٍ.' : 'Built by Vortx.ai, we serve Qatar with trustworthy geospatial AI — grounded in orbit, delivered in seconds.'
        )
      ),

      h('div', { className: 'grid md:grid-cols-3 gap-8' },
        h('div', { className: 'text-center' },
          h('div', { className: 'text-3xl font-bold text-[#8A1538] mb-2' }, '2024'),
          h('div', { className: 'text-zinc-400' }, isArabic ? 'تأسست' : 'Founded')
        ),
        h('div', { className: 'text-center' },
          h('div', { className: 'text-3xl font-bold text-[#667eea] mb-2' }, 'Doha'),
          h('div', { className: 'text-zinc-400' }, isArabic ? 'المقر' : 'Headquarters')
        ),
        h('div', { className: 'text-center' },
          h('div', { className: 'text-3xl font-bold text-[#10b981] mb-2' }, 'Vortx.ai'),
          h('div', { className: 'text-zinc-400' }, isArabic ? 'المطور' : 'Developer')
        )
      )
    );
  }

  // Page router
  function renderPage(currentPage, t, currentLang) {
    switch (currentPage) {
      case 'home':
        return h(HomePage, { t, currentLang });
      case 'platform':
        return h(PlatformPage, { currentLang });
      case 'clients':
        return h(ClientsPage, { currentLang });
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
      className: 'px-3 py-2 text-sm border border-zinc-600 rounded-lg hover:border-zinc-400 transition-colors',
    }, currentLang === 'ar' ? 'EN' : 'AR');
  }

  // Theme Toggle
  function ThemeToggle({ isDark, setIsDark }) {
    return h('button', {
      onClick: () => setIsDark(!isDark),
      className: 'px-3 py-2 text-sm border border-zinc-600 rounded-lg hover:border-zinc-400 transition-colors',
    }, isDark ? '☀️' : '🌙');
  }

  // Main App Component - Clean structure
  function GeoQAApp() {
    const { currentLang, setCurrentLang, isDark, setIsDark, currentPage, setCurrentPage, t } = useGlobalState();

    return h('div', { className: 'min-h-screen bg-black text-white' },
      // Background
      h('div', { className: 'fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900' }),
      
      // Header - Clean and simple
      h('header', { className: 'relative z-10 flex w-full max-w-6xl mx-auto items-center justify-between px-6 py-6' },
        h('button', {
          onClick: () => setCurrentPage('home'),
          className: 'transition-transform hover:scale-105'
        },
          h(GeoQALogo)
        ),
        h('div', { className: 'flex items-center gap-3' },
          h(LanguageToggle, { currentLang, setCurrentLang }),
          h(ThemeToggle, { isDark, setIsDark })
        )
      ),
      
      // Navigation - Only 4 items, mobile-friendly
      h('div', { className: 'relative z-10 px-6' },
        h(Navigation, { currentPage, setCurrentPage, t })
      ),
      
      // Main content
      h('main', { className: 'relative z-10' },
        renderPage(currentPage, t, currentLang)
      ),
      
      // Footer - Simple
      h('footer', { className: 'relative z-10 border-t border-white/10 mt-20' },
        h('div', { className: 'max-w-6xl mx-auto px-6 py-8 text-center' },
          h('p', { className: 'text-sm text-zinc-400' }, `© 2025 geo.qa • Built by Vortx.ai`)
        )
      )
    );
  }

  // Render the app
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(h(GeoQAApp));
})();