import type { StaticImageData } from 'next/image';
import imgFactory from '@/assets/images/heroes/hero-factory.png';
import imgBfrp from '@/assets/images/products/product-1-bfrp.jpeg';
import imgInfrastructure from '@/assets/images/sectors/sector-infrastructure.jpeg';
import imgIndustry from '@/assets/images/sectors/sector-industry.jpeg';
import imgInvestments from '@/assets/images/heroes/hero-investments.png';
import imgTransport from '@/assets/images/sectors/sector-transport.jpeg';
import imgEnergy from '@/assets/images/sectors/sector-energy.jpeg';
import imgAbout from '@/assets/images/heroes/hero-about.png';
import {
  partnershipSigningCover,
  partnershipSigningImages,
} from '@/lib/blog/partnership-signing-images';

export type BlogCategory = 'news' | 'industry' | 'tech';

export type BlogPost = {
  id: string;
  slug: string;
  category: BlogCategory;
  date: string;
  readMin: number;
  featured?: boolean;
  image: StaticImageData;
  gallery?: StaticImageData[];
  titleEn: string;
  excerptEn: string;
  bodyEn: string[];
  titleAr: string;
  excerptAr: string;
  bodyAr: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'partnership-signing-largest-basalt-complex',
    category: 'news',
    date: '2026-06-08',
    readMin: 4,
    featured: true,
    image: partnershipSigningCover,
    gallery: partnershipSigningImages,
    titleEn:
      'Partners sign agreement to establish the largest basalt manufacturing industrial complex',
    excerptEn:
      'Partners marked a milestone signing ceremony to establish the largest industrial complex dedicated to basalt manufacturing — a strategic step toward localizing advanced materials production in Saudi Arabia.',
    bodyEn: [
      'Basalt partners held a formal signing ceremony for the partnership agreement to establish the largest industrial complex for basalt manufacturing in the region. The event brought together founding partners, investors, and technical collaborators committed to advancing Saudi Arabia\'s basalt industry.',
      'The new complex is designed to integrate basalt fiber production, reinforcement products, and pipeline manufacturing under one industrial platform — supporting Vision 2030 goals to localize advanced manufacturing and strengthen national supply chains.',
      'The signing reflects a shared long-term vision: building a world-class basalt materials ecosystem that serves energy, infrastructure, and industrial sectors across the Kingdom and the wider region.',
      'Work will now proceed on detailed engineering, site development, and partnership coordination ahead of the planned operational launch.',
    ],
    titleAr: 'مراسم توقيع عقد الشراكة بين الشركاء لإنشاء أكبر مجمع صناعي لصناعة البازلت',
    excerptAr:
      'شهدت مراسم رسمية توقيع عقد الشراكة بين الشركاء لإنشاء أكبر مجمع صناعي متخصص في صناعة البازلت — خطوة استراتيجية نحو توطين إنتاج المواد المتقدمة في المملكة.',
    bodyAr: [
      'عقد الشركاء مراسم توقيع رسمية لعقد الشراكة لإنشاء أكبر مجمع صناعي لصناعة البازلت في المنطقة، بحضور الشركاء المؤسسين والمستثمرين والجهات التقنية المشاركة في تطوير صناعة البازلت في المملكة.',
      'يُخطَّط للمجمع الجديد لدمج إنتاج ألياف البازلت ومنتجات التسليح وتصنيع الأنابيب ضمن منصة صناعية متكاملة، بما يدعم أهداف رؤية 2030 لتوطين التصنيع المتقدم وتعزيز سلاسل التوريد الوطنية.',
      'يعكس التوقيع رؤية مشتركة طويلة الأمد لبناء منظومة عالمية المستوى لمواد البازلت تخدم قطاعات الطاقة والبنية التحتية والصناعة في المملكة والمنطقة.',
      'ستُتابع المرحلة المقبلة أعمال الهندسة التفصيلية وتطوير الموقع وتنسيق الشراكات استعدادًا للإطلاق التشغيلي المخطط له.',
    ],
  },
  {
    id: '9',
    slug: 'basalt-factory-groundbreaking-2026',
    category: 'news',
    date: '2026-05-20',
    readMin: 4,
    image: imgFactory,
    titleEn: 'Basalt Co. Announces Factory Groundbreaking Ceremony for 2026',
    excerptEn:
      "Basalt Technology Company marks a historic milestone with the announcement of its factory groundbreaking ceremony, setting the stage for Saudi Arabia's first dedicated basalt materials production facility ahead of the 2028 launch.",
    bodyEn: [
      "Basalt Technology Company is proud to announce the groundbreaking ceremony for its state-of-the-art manufacturing facility — a landmark moment in Saudi Arabia's industrial development. The ceremony will take place later this year at the selected site within the Kingdom, bringing together key investors, strategic partners, and government representatives.",
      "The facility is designed to produce over 50,000 tonnes of crushed basalt aggregates and 500 tonnes of basalt fiber products annually upon reaching full operational capacity in 2028. The complex will house multiple production lines including fiber drawing, pultrusion, geogrid manufacturing, and quality testing laboratories.",
      "Chairman Omar Salimin bin Mahfouz commented: 'This groundbreaking is the culmination of years of planning, research, and partnership-building. We are not just opening a factory — we are establishing Saudi Arabia's first dedicated basalt materials industrial complex, aligned with the goals of Vision 2030 to localize advanced manufacturing and reduce import dependency.'",
      "Construction is expected to proceed in phases, with the first production line operational by late 2027 and full capacity reached by mid-2028. The facility will directly employ over 200 Saudis at full operation, with significant additional indirect employment across the supply chain.",
    ],
    titleAr: 'شركة بازلت تُعلن عن حفل وضع حجر الأساس للمصنع في 2026',
    excerptAr:
      'تُسجّل شركة بازلت للتقنية معلمًا تاريخيًا بالإعلان عن حفل وضع حجر الأساس لمصنعها، في خطوة تمهّد الطريق لأول منشأة سعودية متخصصة في إنتاج مواد البازلت قبيل الانطلاق عام 2028.',
    bodyAr: [
      'تُعلن شركة بازلت للتقنية بفخر عن حفل وضع حجر الأساس لمصنعها المتطور — لحظة تاريخية في مسيرة التنمية الصناعية السعودية. سيُقام الحفل في وقت لاحق من هذا العام في الموقع المختار داخل المملكة، بحضور كبار المستثمرين والشركاء الاستراتيجيين وممثلي الجهات الحكومية.',
      'صُمِّم المصنع ليُنتج أكثر من 50,000 طن من ركام البازلت المكسور و500 طن من منتجات ألياف البازلت سنويًا عند بلوغ الطاقة التشغيلية الكاملة عام 2028. يضم المجمع خطوط إنتاج متعددة تشمل سحب الألياف والبثق والشبك الجيوتقني ومختبرات اختبار الجودة.',
      'علّق رئيس مجلس الإدارة عمر سليمان بن محفوظ: "وضع هذا الحجر التتويج لسنوات من التخطيط والبحث وبناء الشراكات. نحن لا نفتتح مصنعًا فحسب — بل نُؤسّس أول مجمع صناعي سعودي متخصص في مواد البازلت، منسجمًا مع أهداف رؤية 2030 لتوطين التصنيع المتقدم وتقليل الاعتماد على الاستيراد."',
      'من المتوقع أن تسير أعمال البناء على مراحل، مع تشغيل أول خط إنتاج بحلول أواخر عام 2027، ثم بلوغ الطاقة الكاملة في منتصف 2028. سيُوظّف المصنع مباشرةً أكثر من 200 سعودي عند اكتمال التشغيل، مع توظيف غير مباشر إضافي واسع عبر سلاسل التوريد.',
    ],
  },
  {
    id: '2',
    slug: 'bfrp-rebar-vs-steel-comparison',
    category: 'tech',
    date: '2026-04-10',
    readMin: 6,
    image: imgBfrp,
    titleEn: 'BFRP Rebar vs Steel: Why Basalt Fiber Wins in Harsh Saudi Environments',
    excerptEn:
      'A technical deep-dive into why Basalt Fiber Reinforced Polymer (BFRP) rebars outperform conventional steel in the demanding climatic and chemical conditions found across Saudi Arabian construction projects.',
    bodyEn: [
      "Saudi Arabia's construction environment presents extreme challenges: temperatures regularly exceeding 50°C, coastal saltwater exposure, high alkalinity from desert soils, and the constant thermal cycling that accelerates corrosion. Conventional steel rebar — the backbone of reinforced concrete for over a century — struggles in these conditions, leading to premature structural failure and enormous maintenance costs.",
      "Basalt Fiber Reinforced Polymer (BFRP) rebar offers a compelling alternative. Produced by pulling continuous basalt fibers through an epoxy resin bath and die — a process called pultrusion — BFRP bars deliver tensile strength between 1,200 and 1,400 MPa, compared to approximately 500 MPa for Grade 60 steel. At roughly one-fifth the weight and with zero corrosion potential, BFRP eliminates the primary failure mechanism of reinforced concrete structures in Saudi Arabia.",
      "In chemical resistance testing, BFRP retains over 90% of its strength after 1,000 hours in alkaline solution (pH 13) at 60°C — conditions that would cause significant degradation in glass fiber alternatives and are far more aggressive than field conditions. The material is also non-conductive, non-magnetic, and thermally stable from −260°C to +700°C.",
      "For infrastructure projects like the NEOM highway network, Red Sea coastal structures, and industrial facilities in the Eastern Province, BFRP rebar is not just a material upgrade — it is a structural life-extension strategy. Initial material cost parity with steel, combined with a projected 70–100 year service life versus 25–40 years for steel-reinforced concrete in similar environments, makes the economic case compelling.",
    ],
    titleAr: 'قضبان BFRP مقابل الفولاذ: لماذا يتفوق ألياف البازلت في البيئات السعودية القاسية',
    excerptAr:
      'دراسة تقنية مُعمّقة تكشف لماذا تتفوق قضبان البوليمر المسلّح بألياف البازلت (BFRP) على الفولاذ التقليدي في الظروف المناخية والكيميائية الصعبة التي تواجهها مشاريع البناء في المملكة العربية السعودية.',
    bodyAr: [
      'تُفرز بيئة البناء في المملكة العربية السعودية تحديات استثنائية: درجات حرارة تتجاوز 50°م بانتظام، وتعرّض ساحلي لمياه مالحة، وقلوية عالية من التربة الصحراوية، وتدوير حراري مستمر يُسرّع التآكل. يُعاني الفولاذ التسليحي التقليدي — العمود الفقري للخرسانة المسلحة لأكثر من قرن — في هذه الظروف، مما يُفضي إلى فشل هيكلي مبكر وتكاليف صيانة باهظة.',
      'يُقدّم قضيب البوليمر المسلح بألياف البازلت (BFRP) بديلاً مقنعًا. يُنتَج بسحب ألياف بازلت مستمرة عبر حمام راتنج إيبوكسي وقالب — عملية تُسمى البثق — ليُعطي قضبان BFRP قوة شد تتراوح بين 1,200 و1,400 ميغاباسكال، مقارنةً بنحو 500 ميغاباسكال للفولاذ درجة 60. بخُمس وزن الفولاذ تقريبًا وعدم قابليتها للتآكل، تُلغي مادة BFRP آلية الفشل الأساسية للمنشآت الخرسانية المسلحة في المملكة.',
      'في اختبارات المقاومة الكيميائية، يحتفظ قضيب BFRP بأكثر من 90% من قوته بعد 1,000 ساعة في محلول قلوي (pH 13) عند 60°م — ظروف أشد بكثير مما تتعرض له في الميدان، وكانت ستُحدث تدهورًا ملحوظًا في بدائل الألياف الزجاجية.',
      'لمشاريع البنية التحتية كشبكة طرق نيوم، والمنشآت الساحلية لمشروع البحر الأحمر، والمنشآت الصناعية في المنطقة الشرقية، فإن قضيب BFRP ليس مجرد ترقية للمواد — بل هو استراتيجية تمديد لعمر المنشأة. إن تكافؤ التكلفة المبدئية مع الفولاذ، إلى جانب عمر خدمة متوقع يتراوح بين 70 و100 عام مقارنةً بـ25 إلى 40 عامًا للخرسانة المسلحة بالفولاذ في بيئات مماثلة، يجعل الحجة الاقتصادية مقنعة.',
    ],
  },
  {
    id: '3',
    slug: 'vision-2030-construction-materials',
    category: 'industry',
    date: '2026-03-15',
    readMin: 5,
    image: imgInfrastructure,
    titleEn: 'How Vision 2030 Is Reshaping Saudi Construction Material Demand',
    excerptEn:
      "With over 847 active megaprojects under Vision 2030 — from NEOM to Red Sea Project — Saudi Arabia's appetite for advanced, locally sourced construction materials has never been greater. Here's how Basalt fits in.",
    bodyEn: [
      "Saudi Arabia's Vision 2030 has triggered the largest peacetime construction boom in history. With over SAR 1.5 trillion ($400 billion) committed to major projects in the pipeline, the demand for construction materials is projected to grow at 12% annually through 2030. Critically, the Vision mandates increasing domestic content — meaning materials produced within the Kingdom are actively preferred over imports.",
      "Currently, Saudi Arabia imports 100% of its basalt fiber products and relies heavily on foreign-produced reinforcement materials. The establishment of Basalt Co.'s industrial complex directly addresses this gap, providing a domestically manufactured alternative that qualifies for local content credits across Vision 2030 projects including NEOM, the Red Sea Project, Diriyah Gate, and the Riyadh Metro expansion.",
      "The timing is strategic. The Saudi construction sector is moving beyond bulk commodities and into high-performance materials for the next generation of infrastructure. Projects like NEOM's THE LINE — a linear city stretching 170 km — require materials that perform in extreme desert conditions, resist the salt-laden Gulf winds, and minimize long-term maintenance requirements. BFRP rebar and basalt geogrid are ideal candidates.",
      "Basalt Co. has been in discussions with materials specification committees for several major Vision 2030 projects. While procurement decisions are subject to formal tendering processes, the company's products are being evaluated for inclusion in the approved materials lists for infrastructure projects commencing from 2028 onward.",
    ],
    titleAr: 'كيف تُعيد رؤية 2030 تشكيل الطلب على مواد البناء في السعودية',
    excerptAr:
      'مع أكثر من 847 مشروعًا عملاقًا نشطًا ضمن رؤية 2030 — من نيوم إلى مشروع البحر الأحمر — بات الطلب السعودي على مواد البناء المتقدمة والمصنّعة محليًا في أعلى مستوياته.',
    bodyAr: [
      'أطلقت رؤية السعودية 2030 أكبر طفرة بناء في التاريخ في زمن السلم. مع تخصيص أكثر من 1.5 تريليون ريال (400 مليار دولار) لمشاريع كبرى في خط الأنابيب، يُتوقع أن ينمو الطلب على مواد البناء بنسبة 12% سنويًا حتى عام 2030. والأهم أن الرؤية تُلزم برفع المحتوى المحلي — مما يعني تفضيل المواد المُنتَجة داخل المملكة فعليًا على المستوردة.',
      'تستورد المملكة حاليًا 100% من منتجات ألياف البازلت، وتعتمد بشكل كبير على مواد التسليح المُنتَجة في الخارج. يُعالج إنشاء المجمع الصناعي لشركة بازلت هذه الفجوة مباشرةً، مُقدِّمًا بديلاً مصنَّعًا محليًا يستوفي متطلبات المحتوى المحلي عبر مشاريع رؤية 2030 بما فيها نيوم ومشروع البحر الأحمر وبوابة الدرعية وتوسعة مترو الرياض.',
      'التوقيت استراتيجي. يتجاوز قطاع البناء السعودي السلع الضخمة ليتجه نحو مواد عالية الأداء للجيل القادم من البنية التحتية. تستلزم مشاريع من قبيل "THE LINE" في نيوم — المدينة الخطية الممتدة 170 كيلومترًا — مواد تُؤدي في ظروف الصحراء القاسية، وتقاوم رياح الخليج المحمّلة بالملح، وتُقلّل متطلبات الصيانة على المدى البعيد.',
      'أجرت شركة بازلت محادثات مع لجان مواصفات المواد لعدة مشاريع كبرى ضمن رؤية 2030. وفيما تخضع قرارات الشراء لعمليات مناقصة رسمية، تجري حاليًا تقييم منتجات الشركة لإدراجها في قوائم المواد المعتمدة لمشاريع البنية التحتية التي ستنطلق اعتبارًا من 2028.',
    ],
  },
  {
    id: '4',
    slug: 'basalt-fiber-temperature-resistance',
    category: 'tech',
    date: '2026-02-28',
    readMin: 7,
    image: imgIndustry,
    titleEn: 'Temperature Resistance of Basalt Fiber: From −260°C to +700°C',
    excerptEn:
      'One of the most remarkable properties of continuous basalt fiber is its extraordinary thermal stability. We explore the science behind this characteristic and its implications for Saudi industrial and infrastructure applications.',
    bodyEn: [
      "Basalt fiber's thermal performance stems directly from its geological origin. Formed from volcanic magma that cooled over millennia, basalt rock has already been subjected to extreme heat — and retains its crystalline structure through temperatures that would melt most synthetic materials. When drawn into continuous fibers at 1,400–1,500°C, this thermal history is encoded into every filament.",
      'In practical terms, continuous basalt fiber maintains its mechanical properties through a range of −260°C to +700°C — a span wider than any commercially available glass or aramid fiber. At cryogenic temperatures, basalt fiber retains flexibility and strength without becoming brittle. At elevated temperatures, it resists deformation and maintains tensile integrity up to approximately 650°C, beyond which gradual softening occurs.',
      'For Saudi industrial applications, the upper thermal range is most relevant. Petrochemical plant insulation, oil and gas pipeline wrapping, industrial furnace components, and fire protection systems all benefit from materials that perform at elevated temperatures without toxic off-gassing. Unlike organic fiber composites, basalt fiber does not produce toxic fumes at high temperatures — a critical safety advantage.',
      "In the context of Saudi Arabia's extreme ambient temperatures — where road surfaces can reach 70°C in summer, and industrial facility walls may experience even higher temperatures — the thermal stability of basalt fiber composites translates directly to structural longevity. BFRP reinforcement in infrastructure exposed to direct solar radiation performs significantly better than steel, which undergoes thermal expansion and accelerated corrosion at elevated temperatures.",
      "Basalt Co.'s product testing program, to be conducted at our ISO 17025-accredited quality laboratory upon factory commissioning, will include thermal cycling tests across the full operational range, fire resistance certification, and long-term thermal aging studies to quantify service life under Saudi field conditions.",
    ],
    titleAr: 'مقاومة ألياف البازلت للحرارة: من −260°م إلى +700°م',
    excerptAr:
      'من أبرز خصائص ألياف البازلت المستمرة ثباتها الحراري الاستثنائي. نستعرض العلم الكامن وراء هذه الميزة وانعكاساتها على التطبيقات الصناعية والبنية التحتية في المملكة.',
    bodyAr: [
      'يعود الأداء الحراري لألياف البازلت مباشرةً إلى أصلها الجيولوجي. تكوّن حجر البازلت من الصهارة البركانية التي تبرّدت على مدى آلاف السنين، وهو بذلك قد تعرّض بالفعل لحرارة شديدة — ويحتفظ ببنيته البلورية عبر درجات حرارة كانت ستُذيب معظم المواد الاصطناعية. عند سحبه إلى ألياف مستمرة عند 1,400–1,500°م، تنطبع هذه التاريخية الحرارية في كل خيط.',
      'من الناحية العملية، تحافظ ألياف البازلت المستمرة على خصائصها الميكانيكية عبر نطاق يمتد من −260°م إلى +700°م — نطاق أوسع من أي ألياف زجاجية أو أراميد متاحة تجاريًا. عند درجات الحرارة المنخفضة جدًا، تحتفظ الألياف بمرونتها وقوتها دون أن تُصبح هشّة. وعند درجات الحرارة المرتفعة، تقاوم التشوّه وتحافظ على سلامتها الشدّية حتى نحو 650°م.',
      'بالنسبة للتطبيقات الصناعية السعودية، الجزء العلوي من النطاق الحراري هو الأكثر صلة. تستفيد عزل مصانع البتروكيماويات، وتغليف أنابيب النفط والغاز، ومكونات الأفران الصناعية، وأنظمة الحماية من الحريق من مواد تعمل في درجات حرارة مرتفعة دون انبعاث أبخرة سامة.',
      'في سياق درجات الحرارة القصوى السائدة في المملكة — حيث يمكن أن تبلغ أسطح الطرق 70°م في الصيف — يُترجَم ثبات ألياف البازلت الحراري مباشرةً إلى طول عمر هيكلي. يُحقّق تسليح BFRP في البنية التحتية المعرّضة لأشعة الشمس المباشرة أداءً أفضل بكثير من الفولاذ الذي يتمدد حراريًا ويتآكل بسرعة أكبر في درجات الحرارة المرتفعة.',
    ],
  },
  {
    id: '5',
    slug: 'strategic-partners-announcement',
    category: 'news',
    date: '2026-02-01',
    readMin: 3,
    image: imgInvestments,
    titleEn: 'Basalt Welcomes New Strategic Partners Across the GCC',
    excerptEn:
      "Basalt Technology Company is proud to announce the expansion of its strategic partnership network, with new agreements signed across the Gulf Cooperation Council to strengthen regional supply chains ahead of the 2028 factory launch.",
    bodyEn: [
      "Basalt Technology Company has signed Memoranda of Understanding (MoUs) with three new strategic partners across the GCC, covering distribution rights, joint procurement, and technical collaboration. The new agreements span construction contractors, materials distributors, and government-aligned industrial developers.",
      "The expansion of our partner network is a key part of our pre-launch strategy. By establishing distribution and offtake agreements before the factory opens, we ensure that our products reach the right markets immediately upon production commencing — avoiding the typical market development lag that new industrial entrants face.",
      "General Manager Salimin Omar bin Mahfouz stated: 'Each of our strategic partners was selected for their deep integration into the Saudi and GCC construction value chain, their alignment with Vision 2030, and their commitment to adopting advanced materials. These are not commercial agreements alone — they are long-term partnerships built on shared conviction that basalt materials will reshape regional construction standards.'",
    ],
    titleAr: 'بازلت ترحّب بشركاء استراتيجيين جدد من دول مجلس التعاون الخليجي',
    excerptAr:
      'تُعلن شركة بازلت للتقنية عن توسيع شبكة شراكاتها الاستراتيجية، بعد إبرام اتفاقيات جديدة مع شركاء من دول مجلس التعاون الخليجي لتعزيز سلاسل التوريد الإقليمية قبيل إطلاق المصنع عام 2028.',
    bodyAr: [
      'وقّعت شركة بازلت للتقنية مذكرات تفاهم مع ثلاثة شركاء استراتيجيين جدد من دول مجلس التعاون الخليجي، تغطي حقوق التوزيع والمشتريات المشتركة والتعاون التقني. تشمل الاتفاقيات الجديدة مقاولي البناء وموزعي المواد والمطورين الصناعيين المرتبطين بالحكومة.',
      'يُعدّ توسيع شبكة الشركاء ركيزةً أساسية في استراتيجيتنا ما قبل الإطلاق. بإبرام اتفاقيات توزيع قبل افتتاح المصنع، نضمن وصول منتجاتنا إلى الأسواق الصحيحة فور بدء الإنتاج — متجنّبين تأخر تطوير السوق الذي يواجهه عادةً الداخلون الصناعيون الجدد.',
      'صرّح المدير العام سليمان عمر بن محفوظ: "جرى اختيار كل شريك من شركائنا الاستراتيجيين لتكاملهم العميق في سلسلة قيمة البناء السعودية والخليجية، وانسجامهم مع رؤية 2030، والتزامهم باعتماد المواد المتقدمة. هذه ليست اتفاقيات تجارية فحسب — بل هي شراكات طويلة الأمد مبنية على قناعة مشتركة بأن مواد البازلت ستُعيد تشكيل معايير البناء الإقليمية."',
    ],
  },
  {
    id: '6',
    slug: 'basalt-geogrid-road-reinforcement',
    category: 'tech',
    date: '2026-01-12',
    readMin: 5,
    image: imgTransport,
    titleEn: 'Basalt Geogrid: Extending Road Lifespan by Up to 40 Years',
    excerptEn:
      "Saudi Arabia's road network faces extreme heat, heavy axle loads, and rapid expansion demands. Basalt geogrid technology offers a proven solution — distributing load, preventing cracking, and delivering up to 35% savings on road construction materials.",
    bodyEn: [
      "Saudi Arabia's National Infrastructure Development Programme (NIDP) has committed SAR 220 billion to road construction through 2030 — making road materials performance a national economic priority. In this context, basalt geogrid for road reinforcement represents one of the highest-impact applications of Basalt Co.'s product range.",
      "Basalt geogrid works by being embedded within the asphalt concrete layer during road construction. The grid's high tensile modulus — derived from continuous basalt roving — distributes point loads across a wider area, reducing stress concentrations at the subbase interface. The acrylic impregnation provides compatibility with asphalt binders and prevents fiber degradation from UV and moisture.",
      'The performance results from global deployments are compelling. Road sections reinforced with basalt geogrid show a 40–60% reduction in reflective cracking, 30–40% reduction in rutting depth under heavy traffic, and a service life extension from the typical 15–20 year standard to 35–40 years in comparable conditions. Material savings of up to 35% are achieved through thinner asphalt layers — since the geogrid compensates for reduced thickness by distributing load more effectively.',
      "For the Saudi context, the benefits are amplified. Saudi road surfaces regularly reach 65–70°C in summer, accelerating oxidative hardening of asphalt binders and causing premature cracking. Basalt geogrid, stable to 700°C, provides mechanical reinforcement that slows crack propagation regardless of the thermal state of the binder. Combined with the reduced maintenance intervals, the economic case for geogrid inclusion in Saudi road specifications is compelling.",
    ],
    titleAr: 'الشبكة الجيولوجية من البازلت: إطالة عمر الطرق حتى 40 عامًا',
    excerptAr:
      'تواجه شبكة الطرق في المملكة تحديات الحرارة الشديدة والأحمال المحورية الثقيلة. تُقدّم تقنية الشبكة الجيولوجية من البازلت حلًا مثبتًا — توزيع الأحمال والوقاية من التشقق وتوفير ما يصل إلى 35% من تكاليف المواد.',
    bodyAr: [
      'خصّص برنامج تطوير البنية التحتية الوطني 220 مليار ريال لبناء الطرق حتى عام 2030 — مما يجعل أداء مواد الطرق أولوية اقتصادية وطنية. في هذا السياق، تُمثّل الشبكة الجيولوجية من البازلت لتسليح الطرق إحدى أعلى تطبيقات منتجات شركة بازلت تأثيرًا.',
      'تعمل الشبكة الجيولوجية من البازلت بتضمينها داخل طبقة الخرسانة الإسفلتية أثناء إنشاء الطريق. يُوزّع المعامل المرتفع لشد الشبكة — المشتق من خيوط بازلت مستمرة — الأحمال النقطية على مساحة أوسع، مما يُقلّل تركّز الإجهادات عند واجهة القاعدة الفرعية. يُوفّر التشريب الأكريليكي توافقًا مع مواد رابط الإسفلت ويمنع تدهور الألياف من الأشعة فوق البنفسجية والرطوبة.',
      'نتائج الأداء من النشرات العالمية مقنعة. تُظهر أقسام الطرق المسلّحة بالشبكة الجيولوجية من البازلت انخفاضًا بنسبة 40–60% في التشقق الانعكاسي، و30–40% في عمق التخدّد تحت حركة المرور الثقيلة، وامتدادًا في عمر الخدمة من 15–20 عامًا المعتادة إلى 35–40 عامًا في ظروف مماثلة.',
      'في السياق السعودي، تتضاعف الفوائد. تبلغ أسطح الطرق السعودية 65–70°م في الصيف بانتظام، مما يُسرّع التصلّب الأكسدي لمادة رابط الإسفلت ويُسبّب تشقّقات مبكّرة. تُوفّر الشبكة الجيولوجية من البازلت، الثابتة حتى 700°م، تسليحًا ميكانيكيًا يُبطّئ انتشار التشققات بصرف النظر عن الحالة الحرارية للرابط.',
    ],
  },
  {
    id: '7',
    slug: 'esg-basalt-green-construction',
    category: 'industry',
    date: '2025-12-20',
    readMin: 4,
    image: imgEnergy,
    titleEn: "ESG & Green Construction: Basalt's Role in Net-Zero Saudi Infrastructure",
    excerptEn:
      "As Saudi Arabia accelerates toward its net-zero goals, the construction sector faces pressure to adopt greener materials. Basalt fiber products offer a compelling ESG story — 60% lower CO₂ vs steel, natural origin, and zero toxic emissions.",
    bodyEn: [
      "Saudi Arabia has committed to achieving net-zero carbon emissions by 2060 and reducing greenhouse gas emissions by 278 million tonnes annually by 2030 under the Saudi Green Initiative. The construction sector — responsible for approximately 37% of global carbon emissions — is a central target for decarbonization. For procurement decision-makers, ESG credentials are increasingly factoring into materials selection alongside technical performance and cost.",
      "Basalt fiber products present a strong environmental case. The primary raw material is volcanic basalt rock, which requires no mining beyond extraction — it is not processed into a synthetic material but transformed through melting and drawing. The embodied carbon of basalt fiber products is approximately 60% lower than equivalent steel reinforcement, and significantly lower than most glass fiber alternatives. The absence of chemical additives (unlike synthetic polymers) means no hazardous waste streams.",
      "For institutional investors and sovereign wealth funds operating within ESG frameworks, construction projects using basalt materials score higher on environmental criteria. This is particularly relevant for Vision 2030 projects managed by entities like PIF (Public Investment Fund), which is increasingly incorporating ESG benchmarks into its project evaluation criteria.",
      "Basalt Co. is committed to the Saudi Green Initiative and National Environmental Strategy targets. Our factory design includes a closed-loop water recycling system, NCEC-compliant air filtration on all production exhausts, 95%+ material utilization near-zero waste processes, and a 40% renewable energy target by 2030 through on-site solar generation.",
    ],
    titleAr: 'الحوكمة البيئية والبناء الأخضر: دور بازلت في البنية التحتية السعودية المستدامة',
    excerptAr:
      'مع تسارع المملكة نحو تحقيق أهدافها في الحياد الكربوني، يواجه قطاع البناء ضغوطًا لتبني مواد أكثر استدامة. تُقدّم منتجات ألياف البازلت قصة بيئية مقنعة — انبعاثات CO₂ أقل بـ60% مقارنةً بالفولاذ.',
    bodyAr: [
      'التزمت المملكة بتحقيق الحياد الكربوني بحلول عام 2060، وتخفيض انبعاثات الغازات الدفيئة بمقدار 278 مليون طن سنويًا بحلول 2030 في إطار مبادرة السعودية الخضراء. قطاع البناء — المسؤول عن نحو 37% من انبعاثات الكربون العالمية — هدفٌ مركزي لإزالة الكربون. لدى صانعي قرار الشراء، تدخل اعتبارات البيئة والمجتمع والحوكمة بشكل متزايد في اختيار المواد جنبًا إلى جنب مع الأداء التقني والتكلفة.',
      'تُقدّم منتجات ألياف البازلت حجة بيئية قوية. المادة الخام الأساسية هي حجر البازلت البركاني الذي لا يستلزم استخلاصه سوى التعدين البسيط — إذ لا يُحوَّل إلى مادة اصطناعية بل يتحوّل عبر الصهر والسحب. يبلغ الكربون المجسَّد في منتجات ألياف البازلت نحو 60% أقل من تسليح الفولاذ المكافئ، وأقل بكثير من معظم بدائل الألياف الزجاجية.',
      'بالنسبة للمستثمرين المؤسسيين وصناديق الثروة السيادية العاملة ضمن أطر الحوكمة البيئية، تحصل مشاريع البناء التي تستخدم مواد البازلت على درجات أعلى في المعايير البيئية. وهذا ذو صلة خاصة لمشاريع رؤية 2030 التي تُديرها جهات كصندوق الاستثمارات العامة.',
      'تلتزم شركة بازلت بأهداف مبادرة السعودية الخضراء والاستراتيجية البيئية الوطنية. يتضمن تصميم مصنعنا نظام تدوير مياه مغلق، وترشيح هواء متوافق مع اشتراطات المركز الوطني للرقابة على الالتزام البيئي على جميع مخارج الإنتاج، وعمليات تقترب من الصفر في النفايات بمعدل استخدام مواد يتجاوز 95%، وهدف الطاقة المتجددة بنسبة 40% بحلول 2030.',
    ],
  },
  {
    id: '8',
    slug: 'investment-round-closed',
    category: 'news',
    date: '2025-11-05',
    readMin: 3,
    image: imgAbout,
    titleEn: 'Basalt Closes Initial Investment Round, Eyes 2026 Site Selection',
    excerptEn:
      'Basalt Technology Company has successfully closed its initial investment round, securing funding commitments from Saudi institutional investors and high-net-worth partners.',
    bodyEn: [
      "Basalt Technology Company has successfully closed its initial investment round, securing commitments from a select group of Saudi institutional investors and strategic high-net-worth partners. The round was oversubscribed, reflecting strong market confidence in the basalt materials opportunity and the company's execution capabilities.",
      "The proceeds will fund the final factory site selection and acquisition process, detailed engineering and procurement for the first production phase, offtake agreement finalization with launch customers, and pre-operational human capital development including overseas training for key technical staff.",
      "The company is targeting final site selection within the Kingdom of Saudi Arabia by Q4 2026, with the decision informed by proximity to Arabian Shield basalt reserves, logistics infrastructure, access to industrial utilities, and alignment with regional development priorities. Shortlisted regions include the Makkah, Madinah, and Al-Qassim provinces.",
    ],
    titleAr: 'بازلت تُغلق جولة الاستثمار الأولى وتتطلع لاختيار الموقع في 2026',
    excerptAr:
      'أتمّت شركة بازلت للتقنية بنجاح إغلاق جولتها الاستثمارية الأولى، وحصلت على التزامات تمويلية من مستثمرين مؤسسيين سعوديين وشركاء كبار.',
    bodyAr: [
      'أتمّت شركة بازلت للتقنية بنجاح إغلاق جولتها الاستثمارية الأولى، وحصلت على التزامات من مجموعة مختارة من المستثمرين المؤسسيين السعوديين والشركاء الاستراتيجيين من كبار الأثرياء. وقد جاءت الجولة مُكتتَبة بأكثر من المستهدف، مما يعكس ثقة السوق القوية في فرصة مواد البازلت وقدرات الشركة التنفيذية.',
      'ستُموِّل العائدات عمليات الاختيار والحصول على الموقع النهائي للمصنع، والهندسة التفصيلية والمشتريات للمرحلة الأولى من الإنتاج، وإنجاز اتفاقيات استيعاب الإنتاج مع العملاء الأوائل، وتطوير رأس المال البشري قبل التشغيل بما يشمل التدريب الخارجي للكوادر الفنية الرئيسية.',
      'تستهدف الشركة الاختيار النهائي للموقع داخل المملكة بحلول الربع الرابع من 2026، بناءً على القرب من احتياطيات البازلت في الدرع العربي والبنية اللوجستية والمرافق الصناعية والتوافق مع أولويات التنمية الإقليمية. وتشمل المناطق المُرشَّحة مكة المكرمة والمدينة المنورة والقصيم.',
    ],
  },
];
