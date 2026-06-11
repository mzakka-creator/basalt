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
      'Partners marked a milestone signing ceremony to establish the largest industrial complex dedicated to basalt manufacturing ظ¤ a strategic step toward localizing advanced materials production in Saudi Arabia.',
    bodyEn: [
      'Basalt partners held a formal signing ceremony for the partnership agreement to establish the largest industrial complex for basalt manufacturing in the region. The event brought together founding partners, investors, and technical collaborators committed to advancing Saudi Arabia\'s basalt industry.',
      'The new complex is designed to integrate basalt fiber production, reinforcement products, and pipeline manufacturing under one industrial platform ظ¤ supporting Vision 2030 goals to localize advanced manufacturing and strengthen national supply chains.',
      'The signing reflects a shared long-term vision: building a world-class basalt materials ecosystem that serves energy, infrastructure, and industrial sectors across the Kingdom and the wider region.',
      'Work will now proceed on detailed engineering, site development, and partnership coordination ahead of the planned operational launch.',
    ],
    titleAr: '┘à╪▒╪د╪│┘à ╪ز┘ê┘é┘è╪╣ ╪╣┘é╪» ╪د┘╪┤╪▒╪د┘â╪ر ╪ذ┘è┘ ╪د┘╪┤╪▒┘â╪د╪ة ┘╪ح┘╪┤╪د╪ة ╪ث┘â╪ذ╪▒ ┘à╪ش┘à╪╣ ╪╡┘╪د╪╣┘è ┘╪╡┘╪د╪╣╪ر ╪د┘╪ذ╪د╪▓┘╪ز',
    excerptAr:
      '╪┤┘ç╪»╪ز ┘à╪▒╪د╪│┘à ╪▒╪│┘à┘è╪ر ╪ز┘ê┘é┘è╪╣ ╪╣┘é╪» ╪د┘╪┤╪▒╪د┘â╪ر ╪ذ┘è┘ ╪د┘╪┤╪▒┘â╪د╪ة ┘╪ح┘╪┤╪د╪ة ╪ث┘â╪ذ╪▒ ┘à╪ش┘à╪╣ ╪╡┘╪د╪╣┘è ┘à╪ز╪«╪╡╪╡ ┘┘è ╪╡┘╪د╪╣╪ر ╪د┘╪ذ╪د╪▓┘╪ز ظ¤ ╪«╪╖┘ê╪ر ╪د╪│╪ز╪▒╪د╪ز┘è╪ش┘è╪ر ┘╪ص┘ê ╪ز┘ê╪╖┘è┘ ╪ح┘╪ز╪د╪ش ╪د┘┘à┘ê╪د╪» ╪د┘┘à╪ز┘é╪»┘à╪ر ┘┘è ╪د┘┘à┘à┘┘â╪ر.',
    bodyAr: [
      '╪╣┘é╪» ╪د┘╪┤╪▒┘â╪د╪ة ┘à╪▒╪د╪│┘à ╪ز┘ê┘é┘è╪╣ ╪▒╪│┘à┘è╪ر ┘╪╣┘é╪» ╪د┘╪┤╪▒╪د┘â╪ر ┘╪ح┘╪┤╪د╪ة ╪ث┘â╪ذ╪▒ ┘à╪ش┘à╪╣ ╪╡┘╪د╪╣┘è ┘╪╡┘╪د╪╣╪ر ╪د┘╪ذ╪د╪▓┘╪ز ┘┘è ╪د┘┘à┘╪╖┘é╪ر╪î ╪ذ╪ص╪╢┘ê╪▒ ╪د┘╪┤╪▒┘â╪د╪ة ╪د┘┘à╪ج╪│╪│┘è┘ ┘ê╪د┘┘à╪│╪ز╪س┘à╪▒┘è┘ ┘ê╪د┘╪ش┘ç╪د╪ز ╪د┘╪ز┘é┘┘è╪ر ╪د┘┘à╪┤╪د╪▒┘â╪ر ┘┘è ╪ز╪╖┘ê┘è╪▒ ╪╡┘╪د╪╣╪ر ╪د┘╪ذ╪د╪▓┘╪ز ┘┘è ╪د┘┘à┘à┘┘â╪ر.',
      '┘è┘╪«╪╖┘┘ّ╪╖ ┘┘┘à╪ش┘à╪╣ ╪د┘╪ش╪»┘è╪» ┘╪»┘à╪ش ╪ح┘╪ز╪د╪ش ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز ┘ê┘à┘╪ز╪ش╪د╪ز ╪د┘╪ز╪│┘┘è╪ص ┘ê╪ز╪╡┘┘è╪╣ ╪د┘╪ث┘╪د╪ذ┘è╪ذ ╪╢┘à┘ ┘à┘╪╡╪ر ╪╡┘╪د╪╣┘è╪ر ┘à╪ز┘â╪د┘à┘╪ر╪î ╪ذ┘à╪د ┘è╪»╪╣┘à ╪ث┘ç╪»╪د┘ ╪▒╪ج┘è╪ر 2030 ┘╪ز┘ê╪╖┘è┘ ╪د┘╪ز╪╡┘┘è╪╣ ╪د┘┘à╪ز┘é╪»┘à ┘ê╪ز╪╣╪▓┘è╪▓ ╪│┘╪د╪│┘ ╪د┘╪ز┘ê╪▒┘è╪» ╪د┘┘ê╪╖┘┘è╪ر.',
      '┘è╪╣┘â╪│ ╪د┘╪ز┘ê┘é┘è╪╣ ╪▒╪ج┘è╪ر ┘à╪┤╪ز╪▒┘â╪ر ╪╖┘ê┘è┘╪ر ╪د┘╪ث┘à╪» ┘╪ذ┘╪د╪ة ┘à┘╪╕┘ê┘à╪ر ╪╣╪د┘┘à┘è╪ر ╪د┘┘à╪│╪ز┘ê┘ë ┘┘à┘ê╪د╪» ╪د┘╪ذ╪د╪▓┘╪ز ╪ز╪«╪»┘à ┘é╪╖╪د╪╣╪د╪ز ╪د┘╪╖╪د┘é╪ر ┘ê╪د┘╪ذ┘┘è╪ر ╪د┘╪ز╪ص╪ز┘è╪ر ┘ê╪د┘╪╡┘╪د╪╣╪ر ┘┘è ╪د┘┘à┘à┘┘â╪ر ┘ê╪د┘┘à┘╪╖┘é╪ر.',
      '╪│╪ز┘╪ز╪د╪ذ╪╣ ╪د┘┘à╪▒╪ص┘╪ر ╪د┘┘à┘é╪ذ┘╪ر ╪ث╪╣┘à╪د┘ ╪د┘┘ç┘╪»╪│╪ر ╪د┘╪ز┘╪╡┘è┘┘è╪ر ┘ê╪ز╪╖┘ê┘è╪▒ ╪د┘┘à┘ê┘é╪╣ ┘ê╪ز┘╪│┘è┘é ╪د┘╪┤╪▒╪د┘â╪د╪ز ╪د╪│╪ز╪╣╪»╪د╪»┘ï╪د ┘┘╪ح╪╖┘╪د┘é ╪د┘╪ز╪┤╪║┘è┘┘è ╪د┘┘à╪«╪╖╪╖ ┘┘ç.',
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
      "Basalt Technology Company is proud to announce the groundbreaking ceremony for its state-of-the-art manufacturing facility ظ¤ a landmark moment in Saudi Arabia's industrial development. The ceremony will take place later this year at the selected site within the Kingdom, bringing together key investors, strategic partners, and government representatives.",
      "The facility is designed to produce over 50,000 tonnes of crushed basalt aggregates and 500 tonnes of basalt fiber products annually upon reaching full operational capacity in 2028. The complex will house multiple production lines including fiber drawing, pultrusion, geogrid manufacturing, and quality testing laboratories.",
      "Chairman Omar Salimin bin Mahfouz commented: 'This groundbreaking is the culmination of years of planning, research, and partnership-building. We are not just opening a factory ظ¤ we are establishing Saudi Arabia's first dedicated basalt materials industrial complex, aligned with the goals of Vision 2030 to localize advanced manufacturing and reduce import dependency.'",
      "Construction is expected to proceed in phases, with the first production line operational by late 2027 and full capacity reached by mid-2028. The facility will directly employ over 200 Saudis at full operation, with significant additional indirect employment across the supply chain.",
    ],
    titleAr: '╪┤╪▒┘â╪ر ╪ذ╪د╪▓┘╪ز ╪ز┘╪╣┘┘ ╪╣┘ ╪ص┘┘ ┘ê╪╢╪╣ ╪ص╪ش╪▒ ╪د┘╪ث╪│╪د╪│ ┘┘┘à╪╡┘╪╣ ┘┘è 2026',
    excerptAr:
      '╪ز┘╪│╪ش┘ّ┘ ╪┤╪▒┘â╪ر ╪ذ╪د╪▓┘╪ز ┘┘╪ز┘é┘┘è╪ر ┘à╪╣┘┘à┘ï╪د ╪ز╪د╪▒┘è╪«┘è┘ï╪د ╪ذ╪د┘╪ح╪╣┘╪د┘ ╪╣┘ ╪ص┘┘ ┘ê╪╢╪╣ ╪ص╪ش╪▒ ╪د┘╪ث╪│╪د╪│ ┘┘à╪╡┘╪╣┘ç╪د╪î ┘┘è ╪«╪╖┘ê╪ر ╪ز┘à┘ç┘ّ╪» ╪د┘╪╖╪▒┘è┘é ┘╪ث┘ê┘ ┘à┘╪┤╪ث╪ر ╪│╪╣┘ê╪»┘è╪ر ┘à╪ز╪«╪╡╪╡╪ر ┘┘è ╪ح┘╪ز╪د╪ش ┘à┘ê╪د╪» ╪د┘╪ذ╪د╪▓┘╪ز ┘é╪ذ┘è┘ ╪د┘╪د┘╪╖┘╪د┘é ╪╣╪د┘à 2028.',
    bodyAr: [
      '╪ز┘╪╣┘┘ ╪┤╪▒┘â╪ر ╪ذ╪د╪▓┘╪ز ┘┘╪ز┘é┘┘è╪ر ╪ذ┘╪«╪▒ ╪╣┘ ╪ص┘┘ ┘ê╪╢╪╣ ╪ص╪ش╪▒ ╪د┘╪ث╪│╪د╪│ ┘┘à╪╡┘╪╣┘ç╪د ╪د┘┘à╪ز╪╖┘ê╪▒ ظ¤ ┘╪ص╪╕╪ر ╪ز╪د╪▒┘è╪«┘è╪ر ┘┘è ┘à╪│┘è╪▒╪ر ╪د┘╪ز┘┘à┘è╪ر ╪د┘╪╡┘╪د╪╣┘è╪ر ╪د┘╪│╪╣┘ê╪»┘è╪ر. ╪│┘è┘┘é╪د┘à ╪د┘╪ص┘┘ ┘┘è ┘ê┘é╪ز ┘╪د╪ص┘é ┘à┘ ┘ç╪░╪د ╪د┘╪╣╪د┘à ┘┘è ╪د┘┘à┘ê┘é╪╣ ╪د┘┘à╪«╪ز╪د╪▒ ╪»╪د╪«┘ ╪د┘┘à┘à┘┘â╪ر╪î ╪ذ╪ص╪╢┘ê╪▒ ┘â╪ذ╪د╪▒ ╪د┘┘à╪│╪ز╪س┘à╪▒┘è┘ ┘ê╪د┘╪┤╪▒┘â╪د╪ة ╪د┘╪د╪│╪ز╪▒╪د╪ز┘è╪ش┘è┘è┘ ┘ê┘à┘à╪س┘┘è ╪د┘╪ش┘ç╪د╪ز ╪د┘╪ص┘â┘ê┘à┘è╪ر.',
      '╪╡┘┘à┘┘ّ┘à ╪د┘┘à╪╡┘╪╣ ┘┘è┘┘╪ز╪ش ╪ث┘â╪س╪▒ ┘à┘ 50,000 ╪╖┘ ┘à┘ ╪▒┘â╪د┘à ╪د┘╪ذ╪د╪▓┘╪ز ╪د┘┘à┘â╪│┘ê╪▒ ┘ê500 ╪╖┘ ┘à┘ ┘à┘╪ز╪ش╪د╪ز ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز ╪│┘┘ê┘è┘ï╪د ╪╣┘╪» ╪ذ┘┘ê╪║ ╪د┘╪╖╪د┘é╪ر ╪د┘╪ز╪┤╪║┘è┘┘è╪ر ╪د┘┘â╪د┘à┘╪ر ╪╣╪د┘à 2028. ┘è╪╢┘à ╪د┘┘à╪ش┘à╪╣ ╪«╪╖┘ê╪╖ ╪ح┘╪ز╪د╪ش ┘à╪ز╪╣╪»╪»╪ر ╪ز╪┤┘à┘ ╪│╪ص╪ذ ╪د┘╪ث┘┘è╪د┘ ┘ê╪د┘╪ذ╪س┘é ┘ê╪د┘╪┤╪ذ┘â ╪د┘╪ش┘è┘ê╪ز┘é┘┘è ┘ê┘à╪«╪ز╪ذ╪▒╪د╪ز ╪د╪«╪ز╪ذ╪د╪▒ ╪د┘╪ش┘ê╪»╪ر.',
      '╪╣┘┘ّ┘é ╪▒╪خ┘è╪│ ┘à╪ش┘╪│ ╪د┘╪ح╪»╪د╪▒╪ر ╪╣┘à╪▒ ╪│┘┘è┘à╪د┘ ╪ذ┘ ┘à╪ص┘┘ê╪╕: "┘ê╪╢╪╣ ┘ç╪░╪د ╪د┘╪ص╪ش╪▒ ╪د┘╪ز╪ز┘ê┘è╪ش ┘╪│┘┘ê╪د╪ز ┘à┘ ╪د┘╪ز╪«╪╖┘è╪╖ ┘ê╪د┘╪ذ╪ص╪س ┘ê╪ذ┘╪د╪ة ╪د┘╪┤╪▒╪د┘â╪د╪ز. ┘╪ص┘ ┘╪د ┘┘╪ز╪ز╪ص ┘à╪╡┘╪╣┘ï╪د ┘╪ص╪│╪ذ ظ¤ ╪ذ┘ ┘┘╪ج╪│┘ّ╪│ ╪ث┘ê┘ ┘à╪ش┘à╪╣ ╪╡┘╪د╪╣┘è ╪│╪╣┘ê╪»┘è ┘à╪ز╪«╪╡╪╡ ┘┘è ┘à┘ê╪د╪» ╪د┘╪ذ╪د╪▓┘╪ز╪î ┘à┘╪│╪ش┘à┘ï╪د ┘à╪╣ ╪ث┘ç╪»╪د┘ ╪▒╪ج┘è╪ر 2030 ┘╪ز┘ê╪╖┘è┘ ╪د┘╪ز╪╡┘┘è╪╣ ╪د┘┘à╪ز┘é╪»┘à ┘ê╪ز┘é┘┘è┘ ╪د┘╪د╪╣╪ز┘à╪د╪» ╪╣┘┘ë ╪د┘╪د╪│╪ز┘è╪▒╪د╪»."',
      '┘à┘ ╪د┘┘à╪ز┘ê┘é╪╣ ╪ث┘ ╪ز╪│┘è╪▒ ╪ث╪╣┘à╪د┘ ╪د┘╪ذ┘╪د╪ة ╪╣┘┘ë ┘à╪▒╪د╪ص┘╪î ┘à╪╣ ╪ز╪┤╪║┘è┘ ╪ث┘ê┘ ╪«╪╖ ╪ح┘╪ز╪د╪ش ╪ذ╪ص┘┘ê┘ ╪ث┘ê╪د╪«╪▒ ╪╣╪د┘à 2027╪î ╪س┘à ╪ذ┘┘ê╪║ ╪د┘╪╖╪د┘é╪ر ╪د┘┘â╪د┘à┘╪ر ┘┘è ┘à┘╪ز╪╡┘ 2028. ╪│┘è┘┘ê╪╕┘ّ┘ ╪د┘┘à╪╡┘╪╣ ┘à╪ذ╪د╪┤╪▒╪ر┘ï ╪ث┘â╪س╪▒ ┘à┘ 200 ╪│╪╣┘ê╪»┘è ╪╣┘╪» ╪د┘â╪ز┘à╪د┘ ╪د┘╪ز╪┤╪║┘è┘╪î ┘à╪╣ ╪ز┘ê╪╕┘è┘ ╪║┘è╪▒ ┘à╪ذ╪د╪┤╪▒ ╪ح╪╢╪د┘┘è ┘ê╪د╪│╪╣ ╪╣╪ذ╪▒ ╪│┘╪د╪│┘ ╪د┘╪ز┘ê╪▒┘è╪».',
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
      "Saudi Arabia's construction environment presents extreme challenges: temperatures regularly exceeding 50┬░C, coastal saltwater exposure, high alkalinity from desert soils, and the constant thermal cycling that accelerates corrosion. Conventional steel rebar ظ¤ the backbone of reinforced concrete for over a century ظ¤ struggles in these conditions, leading to premature structural failure and enormous maintenance costs.",
      "Basalt Fiber Reinforced Polymer (BFRP) rebar offers a compelling alternative. Produced by pulling continuous basalt fibers through an epoxy resin bath and die ظ¤ a process called pultrusion ظ¤ BFRP bars deliver tensile strength between 1,200 and 1,400 MPa, compared to approximately 500 MPa for Grade 60 steel. At roughly one-fifth the weight and with zero corrosion potential, BFRP eliminates the primary failure mechanism of reinforced concrete structures in Saudi Arabia.",
      "In chemical resistance testing, BFRP retains over 90% of its strength after 1,000 hours in alkaline solution (pH 13) at 60┬░C ظ¤ conditions that would cause significant degradation in glass fiber alternatives and are far more aggressive than field conditions. The material is also non-conductive, non-magnetic, and thermally stable from ظêْ260┬░C to +700┬░C.",
      "For infrastructure projects like the NEOM highway network, Red Sea coastal structures, and industrial facilities in the Eastern Province, BFRP rebar is not just a material upgrade ظ¤ it is a structural life-extension strategy. Initial material cost parity with steel, combined with a projected 70ظô100 year service life versus 25ظô40 years for steel-reinforced concrete in similar environments, makes the economic case compelling.",
    ],
    titleAr: '┘é╪╢╪ذ╪د┘ BFRP ┘à┘é╪د╪ذ┘ ╪د┘┘┘ê┘╪د╪░: ┘┘à╪د╪░╪د ┘è╪ز┘┘ê┘é ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز ┘┘è ╪د┘╪ذ┘è╪خ╪د╪ز ╪د┘╪│╪╣┘ê╪»┘è╪ر ╪د┘┘é╪د╪│┘è╪ر',
    excerptAr:
      '╪»╪▒╪د╪│╪ر ╪ز┘é┘┘è╪ر ┘à┘╪╣┘à┘ّ┘é╪ر ╪ز┘â╪┤┘ ┘┘à╪د╪░╪د ╪ز╪ز┘┘ê┘é ┘é╪╢╪ذ╪د┘ ╪د┘╪ذ┘ê┘┘è┘à╪▒ ╪د┘┘à╪│┘┘ّ╪ص ╪ذ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز (BFRP) ╪╣┘┘ë ╪د┘┘┘ê┘╪د╪░ ╪د┘╪ز┘é┘┘è╪»┘è ┘┘è ╪د┘╪╕╪▒┘ê┘ ╪د┘┘à┘╪د╪«┘è╪ر ┘ê╪د┘┘â┘è┘à┘è╪د╪خ┘è╪ر ╪د┘╪╡╪╣╪ذ╪ر ╪د┘╪ز┘è ╪ز┘ê╪د╪ش┘ç┘ç╪د ┘à╪┤╪د╪▒┘è╪╣ ╪د┘╪ذ┘╪د╪ة ┘┘è ╪د┘┘à┘à┘┘â╪ر ╪د┘╪╣╪▒╪ذ┘è╪ر ╪د┘╪│╪╣┘ê╪»┘è╪ر.',
    bodyAr: [
      '╪ز┘┘╪▒╪▓ ╪ذ┘è╪خ╪ر ╪د┘╪ذ┘╪د╪ة ┘┘è ╪د┘┘à┘à┘┘â╪ر ╪د┘╪╣╪▒╪ذ┘è╪ر ╪د┘╪│╪╣┘ê╪»┘è╪ر ╪ز╪ص╪»┘è╪د╪ز ╪د╪│╪ز╪س┘╪د╪خ┘è╪ر: ╪»╪▒╪ش╪د╪ز ╪ص╪▒╪د╪▒╪ر ╪ز╪ز╪ش╪د┘ê╪▓ 50┬░┘à ╪ذ╪د┘╪ز╪╕╪د┘à╪î ┘ê╪ز╪╣╪▒┘ّ╪╢ ╪│╪د╪ص┘┘è ┘┘à┘è╪د┘ç ┘à╪د┘╪ص╪ر╪î ┘ê┘é┘┘ê┘è╪ر ╪╣╪د┘┘è╪ر ┘à┘ ╪د┘╪ز╪▒╪ذ╪ر ╪د┘╪╡╪ص╪▒╪د┘ê┘è╪ر╪î ┘ê╪ز╪»┘ê┘è╪▒ ╪ص╪▒╪د╪▒┘è ┘à╪│╪ز┘à╪▒ ┘è┘╪│╪▒┘ّ╪╣ ╪د┘╪ز╪ت┘â┘. ┘è┘╪╣╪د┘┘è ╪د┘┘┘ê┘╪د╪░ ╪د┘╪ز╪│┘┘è╪ص┘è ╪د┘╪ز┘é┘┘è╪»┘è ظ¤ ╪د┘╪╣┘à┘ê╪» ╪د┘┘┘é╪▒┘è ┘┘╪«╪▒╪│╪د┘╪ر ╪د┘┘à╪│┘╪ص╪ر ┘╪ث┘â╪س╪▒ ┘à┘ ┘é╪▒┘ ظ¤ ┘┘è ┘ç╪░┘ç ╪د┘╪╕╪▒┘ê┘╪î ┘à┘à╪د ┘è┘┘╪╢┘è ╪ح┘┘ë ┘╪┤┘ ┘ç┘è┘â┘┘è ┘à╪ذ┘â╪▒ ┘ê╪ز┘â╪د┘┘è┘ ╪╡┘è╪د┘╪ر ╪ذ╪د┘ç╪╕╪ر.',
      '┘è┘┘é╪»┘ّ┘à ┘é╪╢┘è╪ذ ╪د┘╪ذ┘ê┘┘è┘à╪▒ ╪د┘┘à╪│┘╪ص ╪ذ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز (BFRP) ╪ذ╪»┘è┘╪د┘ï ┘à┘é┘╪╣┘ï╪د. ┘è┘┘╪ز┘╪ش ╪ذ╪│╪ص╪ذ ╪ث┘┘è╪د┘ ╪ذ╪د╪▓┘╪ز ┘à╪│╪ز┘à╪▒╪ر ╪╣╪ذ╪▒ ╪ص┘à╪د┘à ╪▒╪د╪ز┘╪ش ╪ح┘è╪ذ┘ê┘â╪│┘è ┘ê┘é╪د┘╪ذ ظ¤ ╪╣┘à┘┘è╪ر ╪ز┘╪│┘à┘ë ╪د┘╪ذ╪س┘é ظ¤ ┘┘è┘╪╣╪╖┘è ┘é╪╢╪ذ╪د┘ BFRP ┘é┘ê╪ر ╪┤╪» ╪ز╪ز╪▒╪د┘ê╪ص ╪ذ┘è┘ 1,200 ┘ê1,400 ┘à┘è╪║╪د╪ذ╪د╪│┘â╪د┘╪î ┘à┘é╪د╪▒┘╪ر┘ï ╪ذ┘╪ص┘ê 500 ┘à┘è╪║╪د╪ذ╪د╪│┘â╪د┘ ┘┘┘┘ê┘╪د╪░ ╪»╪▒╪ش╪ر 60. ╪ذ╪«┘┘à╪│ ┘ê╪▓┘ ╪د┘┘┘ê┘╪د╪░ ╪ز┘é╪▒┘è╪ذ┘ï╪د ┘ê╪╣╪»┘à ┘é╪د╪ذ┘┘è╪ز┘ç╪د ┘┘╪ز╪ت┘â┘╪î ╪ز┘┘╪║┘è ┘à╪د╪»╪ر BFRP ╪ت┘┘è╪ر ╪د┘┘╪┤┘ ╪د┘╪ث╪│╪د╪│┘è╪ر ┘┘┘à┘╪┤╪ت╪ز ╪د┘╪«╪▒╪│╪د┘┘è╪ر ╪د┘┘à╪│┘╪ص╪ر ┘┘è ╪د┘┘à┘à┘┘â╪ر.',
      '┘┘è ╪د╪«╪ز╪ذ╪د╪▒╪د╪ز ╪د┘┘à┘é╪د┘ê┘à╪ر ╪د┘┘â┘è┘à┘è╪د╪خ┘è╪ر╪î ┘è╪ص╪ز┘╪╕ ┘é╪╢┘è╪ذ BFRP ╪ذ╪ث┘â╪س╪▒ ┘à┘ 90% ┘à┘ ┘é┘ê╪ز┘ç ╪ذ╪╣╪» 1,000 ╪│╪د╪╣╪ر ┘┘è ┘à╪ص┘┘ê┘ ┘é┘┘ê┘è (pH 13) ╪╣┘╪» 60┬░┘à ظ¤ ╪╕╪▒┘ê┘ ╪ث╪┤╪» ╪ذ┘â╪س┘è╪▒ ┘à┘à╪د ╪ز╪ز╪╣╪▒╪╢ ┘┘ç ┘┘è ╪د┘┘à┘è╪»╪د┘╪î ┘ê┘â╪د┘╪ز ╪│╪ز┘╪ص╪»╪س ╪ز╪»┘ç┘ê╪▒┘ï╪د ┘à┘╪ص┘ê╪╕┘ï╪د ┘┘è ╪ذ╪»╪د╪خ┘ ╪د┘╪ث┘┘è╪د┘ ╪د┘╪▓╪ش╪د╪ش┘è╪ر.',
      '┘┘à╪┤╪د╪▒┘è╪╣ ╪د┘╪ذ┘┘è╪ر ╪د┘╪ز╪ص╪ز┘è╪ر ┘â╪┤╪ذ┘â╪ر ╪╖╪▒┘é ┘┘è┘ê┘à╪î ┘ê╪د┘┘à┘╪┤╪ت╪ز ╪د┘╪│╪د╪ص┘┘è╪ر ┘┘à╪┤╪▒┘ê╪╣ ╪د┘╪ذ╪ص╪▒ ╪د┘╪ث╪ص┘à╪▒╪î ┘ê╪د┘┘à┘╪┤╪ت╪ز ╪د┘╪╡┘╪د╪╣┘è╪ر ┘┘è ╪د┘┘à┘╪╖┘é╪ر ╪د┘╪┤╪▒┘é┘è╪ر╪î ┘╪ح┘ ┘é╪╢┘è╪ذ BFRP ┘┘è╪│ ┘à╪ش╪▒╪» ╪ز╪▒┘é┘è╪ر ┘┘┘à┘ê╪د╪» ظ¤ ╪ذ┘ ┘ç┘ê ╪د╪│╪ز╪▒╪د╪ز┘è╪ش┘è╪ر ╪ز┘à╪»┘è╪» ┘╪╣┘à╪▒ ╪د┘┘à┘╪┤╪ث╪ر. ╪ح┘ ╪ز┘â╪د┘╪ج ╪د┘╪ز┘â┘┘╪ر ╪د┘┘à╪ذ╪»╪خ┘è╪ر ┘à╪╣ ╪د┘┘┘ê┘╪د╪░╪î ╪ح┘┘ë ╪ش╪د┘╪ذ ╪╣┘à╪▒ ╪«╪»┘à╪ر ┘à╪ز┘ê┘é╪╣ ┘è╪ز╪▒╪د┘ê╪ص ╪ذ┘è┘ 70 ┘ê100 ╪╣╪د┘à ┘à┘é╪د╪▒┘╪ر┘ï ╪ذ┘25 ╪ح┘┘ë 40 ╪╣╪د┘à┘ï╪د ┘┘╪«╪▒╪│╪د┘╪ر ╪د┘┘à╪│┘╪ص╪ر ╪ذ╪د┘┘┘ê┘╪د╪░ ┘┘è ╪ذ┘è╪خ╪د╪ز ┘à┘à╪د╪س┘╪ر╪î ┘è╪ش╪╣┘ ╪د┘╪ص╪ش╪ر ╪د┘╪د┘é╪ز╪╡╪د╪»┘è╪ر ┘à┘é┘╪╣╪ر.',
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
      "With over 847 active megaprojects under Vision 2030 ظ¤ from NEOM to Red Sea Project ظ¤ Saudi Arabia's appetite for advanced, locally sourced construction materials has never been greater. Here's how Basalt fits in.",
    bodyEn: [
      "Saudi Arabia's Vision 2030 has triggered the largest peacetime construction boom in history. With over SAR 1.5 trillion ($400 billion) committed to major projects in the pipeline, the demand for construction materials is projected to grow at 12% annually through 2030. Critically, the Vision mandates increasing domestic content ظ¤ meaning materials produced within the Kingdom are actively preferred over imports.",
      "Currently, Saudi Arabia imports 100% of its basalt fiber products and relies heavily on foreign-produced reinforcement materials. The establishment of Basalt Co.'s industrial complex directly addresses this gap, providing a domestically manufactured alternative that qualifies for local content credits across Vision 2030 projects including NEOM, the Red Sea Project, Diriyah Gate, and the Riyadh Metro expansion.",
      "The timing is strategic. The Saudi construction sector is moving beyond bulk commodities and into high-performance materials for the next generation of infrastructure. Projects like NEOM's THE LINE ظ¤ a linear city stretching 170 km ظ¤ require materials that perform in extreme desert conditions, resist the salt-laden Gulf winds, and minimize long-term maintenance requirements. BFRP rebar and basalt geogrid are ideal candidates.",
      "Basalt Co. has been in discussions with materials specification committees for several major Vision 2030 projects. While procurement decisions are subject to formal tendering processes, the company's products are being evaluated for inclusion in the approved materials lists for infrastructure projects commencing from 2028 onward.",
    ],
    titleAr: '┘â┘è┘ ╪ز┘╪╣┘è╪» ╪▒╪ج┘è╪ر 2030 ╪ز╪┤┘â┘è┘ ╪د┘╪╖┘╪ذ ╪╣┘┘ë ┘à┘ê╪د╪» ╪د┘╪ذ┘╪د╪ة ┘┘è ╪د┘╪│╪╣┘ê╪»┘è╪ر',
    excerptAr:
      '┘à╪╣ ╪ث┘â╪س╪▒ ┘à┘ 847 ┘à╪┤╪▒┘ê╪╣┘ï╪د ╪╣┘à┘╪د┘é┘ï╪د ┘╪┤╪╖┘ï╪د ╪╢┘à┘ ╪▒╪ج┘è╪ر 2030 ظ¤ ┘à┘ ┘┘è┘ê┘à ╪ح┘┘ë ┘à╪┤╪▒┘ê╪╣ ╪د┘╪ذ╪ص╪▒ ╪د┘╪ث╪ص┘à╪▒ ظ¤ ╪ذ╪د╪ز ╪د┘╪╖┘╪ذ ╪د┘╪│╪╣┘ê╪»┘è ╪╣┘┘ë ┘à┘ê╪د╪» ╪د┘╪ذ┘╪د╪ة ╪د┘┘à╪ز┘é╪»┘à╪ر ┘ê╪د┘┘à╪╡┘┘ّ╪╣╪ر ┘à╪ص┘┘è┘ï╪د ┘┘è ╪ث╪╣┘┘ë ┘à╪│╪ز┘ê┘è╪د╪ز┘ç.',
    bodyAr: [
      '╪ث╪╖┘┘é╪ز ╪▒╪ج┘è╪ر ╪د┘╪│╪╣┘ê╪»┘è╪ر 2030 ╪ث┘â╪ذ╪▒ ╪╖┘╪▒╪ر ╪ذ┘╪د╪ة ┘┘è ╪د┘╪ز╪د╪▒┘è╪« ┘┘è ╪▓┘à┘ ╪د┘╪│┘┘à. ┘à╪╣ ╪ز╪«╪╡┘è╪╡ ╪ث┘â╪س╪▒ ┘à┘ 1.5 ╪ز╪▒┘è┘┘è┘ê┘ ╪▒┘è╪د┘ (400 ┘à┘┘è╪د╪▒ ╪»┘ê┘╪د╪▒) ┘┘à╪┤╪د╪▒┘è╪╣ ┘â╪ذ╪▒┘ë ┘┘è ╪«╪╖ ╪د┘╪ث┘╪د╪ذ┘è╪ذ╪î ┘è┘╪ز┘ê┘é╪╣ ╪ث┘ ┘è┘┘à┘ê ╪د┘╪╖┘╪ذ ╪╣┘┘ë ┘à┘ê╪د╪» ╪د┘╪ذ┘╪د╪ة ╪ذ┘╪│╪ذ╪ر 12% ╪│┘┘ê┘è┘ï╪د ╪ص╪ز┘ë ╪╣╪د┘à 2030. ┘ê╪د┘╪ث┘ç┘à ╪ث┘ ╪د┘╪▒╪ج┘è╪ر ╪ز┘┘╪▓┘à ╪ذ╪▒┘╪╣ ╪د┘┘à╪ص╪ز┘ê┘ë ╪د┘┘à╪ص┘┘è ظ¤ ┘à┘à╪د ┘è╪╣┘┘è ╪ز┘╪╢┘è┘ ╪د┘┘à┘ê╪د╪» ╪د┘┘à┘┘╪ز┘╪ش╪ر ╪»╪د╪«┘ ╪د┘┘à┘à┘┘â╪ر ┘╪╣┘┘è┘ï╪د ╪╣┘┘ë ╪د┘┘à╪│╪ز┘ê╪▒╪»╪ر.',
      '╪ز╪│╪ز┘ê╪▒╪» ╪د┘┘à┘à┘┘â╪ر ╪ص╪د┘┘è┘ï╪د 100% ┘à┘ ┘à┘╪ز╪ش╪د╪ز ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز╪î ┘ê╪ز╪╣╪ز┘à╪» ╪ذ╪┤┘â┘ ┘â╪ذ┘è╪▒ ╪╣┘┘ë ┘à┘ê╪د╪» ╪د┘╪ز╪│┘┘è╪ص ╪د┘┘à┘┘╪ز┘╪ش╪ر ┘┘è ╪د┘╪«╪د╪▒╪ش. ┘è┘╪╣╪د┘╪ش ╪ح┘╪┤╪د╪ة ╪د┘┘à╪ش┘à╪╣ ╪د┘╪╡┘╪د╪╣┘è ┘╪┤╪▒┘â╪ر ╪ذ╪د╪▓┘╪ز ┘ç╪░┘ç ╪د┘┘╪ش┘ê╪ر ┘à╪ذ╪د╪┤╪▒╪ر┘ï╪î ┘à┘┘é╪»┘┘ّ┘à┘ï╪د ╪ذ╪»┘è┘╪د┘ï ┘à╪╡┘┘┘ّ╪╣┘ï╪د ┘à╪ص┘┘è┘ï╪د ┘è╪│╪ز┘ê┘┘è ┘à╪ز╪╖┘╪ذ╪د╪ز ╪د┘┘à╪ص╪ز┘ê┘ë ╪د┘┘à╪ص┘┘è ╪╣╪ذ╪▒ ┘à╪┤╪د╪▒┘è╪╣ ╪▒╪ج┘è╪ر 2030 ╪ذ┘à╪د ┘┘è┘ç╪د ┘┘è┘ê┘à ┘ê┘à╪┤╪▒┘ê╪╣ ╪د┘╪ذ╪ص╪▒ ╪د┘╪ث╪ص┘à╪▒ ┘ê╪ذ┘ê╪د╪ذ╪ر ╪د┘╪»╪▒╪╣┘è╪ر ┘ê╪ز┘ê╪│╪╣╪ر ┘à╪ز╪▒┘ê ╪د┘╪▒┘è╪د╪╢.',
      '╪د┘╪ز┘ê┘é┘è╪ز ╪د╪│╪ز╪▒╪د╪ز┘è╪ش┘è. ┘è╪ز╪ش╪د┘ê╪▓ ┘é╪╖╪د╪╣ ╪د┘╪ذ┘╪د╪ة ╪د┘╪│╪╣┘ê╪»┘è ╪د┘╪│┘╪╣ ╪د┘╪╢╪«┘à╪ر ┘┘è╪ز╪ش┘ç ┘╪ص┘ê ┘à┘ê╪د╪» ╪╣╪د┘┘è╪ر ╪د┘╪ث╪»╪د╪ة ┘┘╪ش┘è┘ ╪د┘┘é╪د╪»┘à ┘à┘ ╪د┘╪ذ┘┘è╪ر ╪د┘╪ز╪ص╪ز┘è╪ر. ╪ز╪│╪ز┘╪▓┘à ┘à╪┤╪د╪▒┘è╪╣ ┘à┘ ┘é╪ذ┘è┘ "THE LINE" ┘┘è ┘┘è┘ê┘à ظ¤ ╪د┘┘à╪»┘è┘╪ر ╪د┘╪«╪╖┘è╪ر ╪د┘┘à┘à╪ز╪»╪ر 170 ┘â┘è┘┘ê┘à╪ز╪▒┘ï╪د ظ¤ ┘à┘ê╪د╪» ╪ز┘╪ج╪»┘è ┘┘è ╪╕╪▒┘ê┘ ╪د┘╪╡╪ص╪▒╪د╪ة ╪د┘┘é╪د╪│┘è╪ر╪î ┘ê╪ز┘é╪د┘ê┘à ╪▒┘è╪د╪ص ╪د┘╪«┘┘è╪ش ╪د┘┘à╪ص┘à┘ّ┘╪ر ╪ذ╪د┘┘à┘╪ص╪î ┘ê╪ز┘┘é┘┘ّ┘ ┘à╪ز╪╖┘╪ذ╪د╪ز ╪د┘╪╡┘è╪د┘╪ر ╪╣┘┘ë ╪د┘┘à╪»┘ë ╪د┘╪ذ╪╣┘è╪».',
      '╪ث╪ش╪▒╪ز ╪┤╪▒┘â╪ر ╪ذ╪د╪▓┘╪ز ┘à╪ص╪د╪»╪س╪د╪ز ┘à╪╣ ┘╪ش╪د┘ ┘à┘ê╪د╪╡┘╪د╪ز ╪د┘┘à┘ê╪د╪» ┘╪╣╪»╪ر ┘à╪┤╪د╪▒┘è╪╣ ┘â╪ذ╪▒┘ë ╪╢┘à┘ ╪▒╪ج┘è╪ر 2030. ┘ê┘┘è┘à╪د ╪ز╪«╪╢╪╣ ┘é╪▒╪د╪▒╪د╪ز ╪د┘╪┤╪▒╪د╪ة ┘╪╣┘à┘┘è╪د╪ز ┘à┘╪د┘é╪╡╪ر ╪▒╪│┘à┘è╪ر╪î ╪ز╪ش╪▒┘è ╪ص╪د┘┘è┘ï╪د ╪ز┘é┘è┘è┘à ┘à┘╪ز╪ش╪د╪ز ╪د┘╪┤╪▒┘â╪ر ┘╪ح╪»╪▒╪د╪ش┘ç╪د ┘┘è ┘é┘ê╪د╪خ┘à ╪د┘┘à┘ê╪د╪» ╪د┘┘à╪╣╪ز┘à╪»╪ر ┘┘à╪┤╪د╪▒┘è╪╣ ╪د┘╪ذ┘┘è╪ر ╪د┘╪ز╪ص╪ز┘è╪ر ╪د┘╪ز┘è ╪│╪ز┘╪╖┘┘é ╪د╪╣╪ز╪ذ╪د╪▒┘ï╪د ┘à┘ 2028.',
    ],
  },
  {
    id: '4',
    slug: 'basalt-fiber-temperature-resistance',
    category: 'tech',
    date: '2026-02-28',
    readMin: 7,
    image: imgIndustry,
    titleEn: 'Temperature Resistance of Basalt Fiber: From ظêْ260┬░C to +700┬░C',
    excerptEn:
      'One of the most remarkable properties of continuous basalt fiber is its extraordinary thermal stability. We explore the science behind this characteristic and its implications for Saudi industrial and infrastructure applications.',
    bodyEn: [
      "Basalt fiber's thermal performance stems directly from its geological origin. Formed from volcanic magma that cooled over millennia, basalt rock has already been subjected to extreme heat ظ¤ and retains its crystalline structure through temperatures that would melt most synthetic materials. When drawn into continuous fibers at 1,400ظô1,500┬░C, this thermal history is encoded into every filament.",
      'In practical terms, continuous basalt fiber maintains its mechanical properties through a range of ظêْ260┬░C to +700┬░C ظ¤ a span wider than any commercially available glass or aramid fiber. At cryogenic temperatures, basalt fiber retains flexibility and strength without becoming brittle. At elevated temperatures, it resists deformation and maintains tensile integrity up to approximately 650┬░C, beyond which gradual softening occurs.',
      'For Saudi industrial applications, the upper thermal range is most relevant. Petrochemical plant insulation, oil and gas pipeline wrapping, industrial furnace components, and fire protection systems all benefit from materials that perform at elevated temperatures without toxic off-gassing. Unlike organic fiber composites, basalt fiber does not produce toxic fumes at high temperatures ظ¤ a critical safety advantage.',
      "In the context of Saudi Arabia's extreme ambient temperatures ظ¤ where road surfaces can reach 70┬░C in summer, and industrial facility walls may experience even higher temperatures ظ¤ the thermal stability of basalt fiber composites translates directly to structural longevity. BFRP reinforcement in infrastructure exposed to direct solar radiation performs significantly better than steel, which undergoes thermal expansion and accelerated corrosion at elevated temperatures.",
      "Basalt Co.'s product testing program, to be conducted at our ISO 17025-accredited quality laboratory upon factory commissioning, will include thermal cycling tests across the full operational range, fire resistance certification, and long-term thermal aging studies to quantify service life under Saudi field conditions.",
    ],
    titleAr: '┘à┘é╪د┘ê┘à╪ر ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز ┘┘╪ص╪▒╪د╪▒╪ر: ┘à┘ ظêْ260┬░┘à ╪ح┘┘ë +700┬░┘à',
    excerptAr:
      '┘à┘ ╪ث╪ذ╪▒╪▓ ╪«╪╡╪د╪خ╪╡ ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز ╪د┘┘à╪│╪ز┘à╪▒╪ر ╪س╪ذ╪د╪ز┘ç╪د ╪د┘╪ص╪▒╪د╪▒┘è ╪د┘╪د╪│╪ز╪س┘╪د╪خ┘è. ┘╪│╪ز╪╣╪▒╪╢ ╪د┘╪╣┘┘à ╪د┘┘â╪د┘à┘ ┘ê╪▒╪د╪ة ┘ç╪░┘ç ╪د┘┘à┘è╪▓╪ر ┘ê╪د┘╪╣┘â╪د╪│╪د╪ز┘ç╪د ╪╣┘┘ë ╪د┘╪ز╪╖╪ذ┘è┘é╪د╪ز ╪د┘╪╡┘╪د╪╣┘è╪ر ┘ê╪د┘╪ذ┘┘è╪ر ╪د┘╪ز╪ص╪ز┘è╪ر ┘┘è ╪د┘┘à┘à┘┘â╪ر.',
    bodyAr: [
      '┘è╪╣┘ê╪» ╪د┘╪ث╪»╪د╪ة ╪د┘╪ص╪▒╪د╪▒┘è ┘╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز ┘à╪ذ╪د╪┤╪▒╪ر┘ï ╪ح┘┘ë ╪ث╪╡┘┘ç╪د ╪د┘╪ش┘è┘ê┘┘ê╪ش┘è. ╪ز┘â┘ê┘ّ┘ ╪ص╪ش╪▒ ╪د┘╪ذ╪د╪▓┘╪ز ┘à┘ ╪د┘╪╡┘ç╪د╪▒╪ر ╪د┘╪ذ╪▒┘â╪د┘┘è╪ر ╪د┘╪ز┘è ╪ز╪ذ╪▒┘ّ╪»╪ز ╪╣┘┘ë ┘à╪»┘ë ╪ت┘╪د┘ ╪د┘╪│┘┘è┘╪î ┘ê┘ç┘ê ╪ذ╪░┘┘â ┘é╪» ╪ز╪╣╪▒┘ّ╪╢ ╪ذ╪د┘┘╪╣┘ ┘╪ص╪▒╪د╪▒╪ر ╪┤╪»┘è╪»╪ر ظ¤ ┘ê┘è╪ص╪ز┘╪╕ ╪ذ╪ذ┘┘è╪ز┘ç ╪د┘╪ذ┘┘ê╪▒┘è╪ر ╪╣╪ذ╪▒ ╪»╪▒╪ش╪د╪ز ╪ص╪▒╪د╪▒╪ر ┘â╪د┘╪ز ╪│╪ز┘╪░┘è╪ذ ┘à╪╣╪╕┘à ╪د┘┘à┘ê╪د╪» ╪د┘╪د╪╡╪╖┘╪د╪╣┘è╪ر. ╪╣┘╪» ╪│╪ص╪ذ┘ç ╪ح┘┘ë ╪ث┘┘è╪د┘ ┘à╪│╪ز┘à╪▒╪ر ╪╣┘╪» 1,400ظô1,500┬░┘à╪î ╪ز┘╪╖╪ذ╪╣ ┘ç╪░┘ç ╪د┘╪ز╪د╪▒┘è╪«┘è╪ر ╪د┘╪ص╪▒╪د╪▒┘è╪ر ┘┘è ┘â┘ ╪«┘è╪╖.',
      '┘à┘ ╪د┘┘╪د╪ص┘è╪ر ╪د┘╪╣┘à┘┘è╪ر╪î ╪ز╪ص╪د┘╪╕ ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز ╪د┘┘à╪│╪ز┘à╪▒╪ر ╪╣┘┘ë ╪«╪╡╪د╪خ╪╡┘ç╪د ╪د┘┘à┘è┘â╪د┘┘è┘â┘è╪ر ╪╣╪ذ╪▒ ┘╪╖╪د┘é ┘è┘à╪ز╪» ┘à┘ ظêْ260┬░┘à ╪ح┘┘ë +700┬░┘à ظ¤ ┘╪╖╪د┘é ╪ث┘ê╪│╪╣ ┘à┘ ╪ث┘è ╪ث┘┘è╪د┘ ╪▓╪ش╪د╪ش┘è╪ر ╪ث┘ê ╪ث╪▒╪د┘à┘è╪» ┘à╪ز╪د╪ص╪ر ╪ز╪ش╪د╪▒┘è┘ï╪د. ╪╣┘╪» ╪»╪▒╪ش╪د╪ز ╪د┘╪ص╪▒╪د╪▒╪ر ╪د┘┘à┘╪«┘╪╢╪ر ╪ش╪»┘ï╪د╪î ╪ز╪ص╪ز┘╪╕ ╪د┘╪ث┘┘è╪د┘ ╪ذ┘à╪▒┘ê┘╪ز┘ç╪د ┘ê┘é┘ê╪ز┘ç╪د ╪»┘ê┘ ╪ث┘ ╪ز┘╪╡╪ذ╪ص ┘ç╪┤┘ّ╪ر. ┘ê╪╣┘╪» ╪»╪▒╪ش╪د╪ز ╪د┘╪ص╪▒╪د╪▒╪ر ╪د┘┘à╪▒╪ز┘╪╣╪ر╪î ╪ز┘é╪د┘ê┘à ╪د┘╪ز╪┤┘ê┘ّ┘ç ┘ê╪ز╪ص╪د┘╪╕ ╪╣┘┘ë ╪│┘╪د┘à╪ز┘ç╪د ╪د┘╪┤╪»┘ّ┘è╪ر ╪ص╪ز┘ë ┘╪ص┘ê 650┬░┘à.',
      '╪ذ╪د┘┘╪│╪ذ╪ر ┘┘╪ز╪╖╪ذ┘è┘é╪د╪ز ╪د┘╪╡┘╪د╪╣┘è╪ر ╪د┘╪│╪╣┘ê╪»┘è╪ر╪î ╪د┘╪ش╪▓╪ة ╪د┘╪╣┘┘ê┘è ┘à┘ ╪د┘┘╪╖╪د┘é ╪د┘╪ص╪▒╪د╪▒┘è ┘ç┘ê ╪د┘╪ث┘â╪س╪▒ ╪╡┘╪ر. ╪ز╪│╪ز┘┘è╪» ╪╣╪▓┘ ┘à╪╡╪د┘╪╣ ╪د┘╪ذ╪ز╪▒┘ê┘â┘è┘à╪د┘ê┘è╪د╪ز╪î ┘ê╪ز╪║┘┘è┘ ╪ث┘╪د╪ذ┘è╪ذ ╪د┘┘┘╪╖ ┘ê╪د┘╪║╪د╪▓╪î ┘ê┘à┘â┘ê┘╪د╪ز ╪د┘╪ث┘╪▒╪د┘ ╪د┘╪╡┘╪د╪╣┘è╪ر╪î ┘ê╪ث┘╪╕┘à╪ر ╪د┘╪ص┘à╪د┘è╪ر ┘à┘ ╪د┘╪ص╪▒┘è┘é ┘à┘ ┘à┘ê╪د╪» ╪ز╪╣┘à┘ ┘┘è ╪»╪▒╪ش╪د╪ز ╪ص╪▒╪د╪▒╪ر ┘à╪▒╪ز┘╪╣╪ر ╪»┘ê┘ ╪د┘╪ذ╪╣╪د╪س ╪ث╪ذ╪«╪▒╪ر ╪│╪د┘à╪ر.',
      '┘┘è ╪│┘è╪د┘é ╪»╪▒╪ش╪د╪ز ╪د┘╪ص╪▒╪د╪▒╪ر ╪د┘┘é╪╡┘ê┘ë ╪د┘╪│╪د╪خ╪»╪ر ┘┘è ╪د┘┘à┘à┘┘â╪ر ظ¤ ╪ص┘è╪س ┘è┘à┘â┘ ╪ث┘ ╪ز╪ذ┘╪║ ╪ث╪│╪╖╪ص ╪د┘╪╖╪▒┘é 70┬░┘à ┘┘è ╪د┘╪╡┘è┘ ظ¤ ┘è┘╪ز╪▒╪ش┘┘à ╪س╪ذ╪د╪ز ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز ╪د┘╪ص╪▒╪د╪▒┘è ┘à╪ذ╪د╪┤╪▒╪ر┘ï ╪ح┘┘ë ╪╖┘ê┘ ╪╣┘à╪▒ ┘ç┘è┘â┘┘è. ┘è┘╪ص┘é┘ّ┘é ╪ز╪│┘┘è╪ص BFRP ┘┘è ╪د┘╪ذ┘┘è╪ر ╪د┘╪ز╪ص╪ز┘è╪ر ╪د┘┘à╪╣╪▒┘ّ╪╢╪ر ┘╪ث╪┤╪╣╪ر ╪د┘╪┤┘à╪│ ╪د┘┘à╪ذ╪د╪┤╪▒╪ر ╪ث╪»╪د╪ة┘ï ╪ث┘╪╢┘ ╪ذ┘â╪س┘è╪▒ ┘à┘ ╪د┘┘┘ê┘╪د╪░ ╪د┘╪░┘è ┘è╪ز┘à╪»╪» ╪ص╪▒╪د╪▒┘è┘ï╪د ┘ê┘è╪ز╪ت┘â┘ ╪ذ╪│╪▒╪╣╪ر ╪ث┘â╪ذ╪▒ ┘┘è ╪»╪▒╪ش╪د╪ز ╪د┘╪ص╪▒╪د╪▒╪ر ╪د┘┘à╪▒╪ز┘╪╣╪ر.',
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
      "The expansion of our partner network is a key part of our pre-launch strategy. By establishing distribution and offtake agreements before the factory opens, we ensure that our products reach the right markets immediately upon production commencing ظ¤ avoiding the typical market development lag that new industrial entrants face.",
      "General Manager Salimin Omar bin Mahfouz stated: 'Each of our strategic partners was selected for their deep integration into the Saudi and GCC construction value chain, their alignment with Vision 2030, and their commitment to adopting advanced materials. These are not commercial agreements alone ظ¤ they are long-term partnerships built on shared conviction that basalt materials will reshape regional construction standards.'",
    ],
    titleAr: '╪ذ╪د╪▓┘╪ز ╪ز╪▒╪ص┘ّ╪ذ ╪ذ╪┤╪▒┘â╪د╪ة ╪د╪│╪ز╪▒╪د╪ز┘è╪ش┘è┘è┘ ╪ش╪»╪» ┘à┘ ╪»┘ê┘ ┘à╪ش┘╪│ ╪د┘╪ز╪╣╪د┘ê┘ ╪د┘╪«┘┘è╪ش┘è',
    excerptAr:
      '╪ز┘╪╣┘┘ ╪┤╪▒┘â╪ر ╪ذ╪د╪▓┘╪ز ┘┘╪ز┘é┘┘è╪ر ╪╣┘ ╪ز┘ê╪│┘è╪╣ ╪┤╪ذ┘â╪ر ╪┤╪▒╪د┘â╪د╪ز┘ç╪د ╪د┘╪د╪│╪ز╪▒╪د╪ز┘è╪ش┘è╪ر╪î ╪ذ╪╣╪» ╪ح╪ذ╪▒╪د┘à ╪د╪ز┘╪د┘é┘è╪د╪ز ╪ش╪»┘è╪»╪ر ┘à╪╣ ╪┤╪▒┘â╪د╪ة ┘à┘ ╪»┘ê┘ ┘à╪ش┘╪│ ╪د┘╪ز╪╣╪د┘ê┘ ╪د┘╪«┘┘è╪ش┘è ┘╪ز╪╣╪▓┘è╪▓ ╪│┘╪د╪│┘ ╪د┘╪ز┘ê╪▒┘è╪» ╪د┘╪ح┘é┘┘è┘à┘è╪ر ┘é╪ذ┘è┘ ╪ح╪╖┘╪د┘é ╪د┘┘à╪╡┘╪╣ ╪╣╪د┘à 2028.',
    bodyAr: [
      '┘ê┘é┘ّ╪╣╪ز ╪┤╪▒┘â╪ر ╪ذ╪د╪▓┘╪ز ┘┘╪ز┘é┘┘è╪ر ┘à╪░┘â╪▒╪د╪ز ╪ز┘╪د┘ç┘à ┘à╪╣ ╪س┘╪د╪س╪ر ╪┤╪▒┘â╪د╪ة ╪د╪│╪ز╪▒╪د╪ز┘è╪ش┘è┘è┘ ╪ش╪»╪» ┘à┘ ╪»┘ê┘ ┘à╪ش┘╪│ ╪د┘╪ز╪╣╪د┘ê┘ ╪د┘╪«┘┘è╪ش┘è╪î ╪ز╪║╪╖┘è ╪ص┘é┘ê┘é ╪د┘╪ز┘ê╪▓┘è╪╣ ┘ê╪د┘┘à╪┤╪ز╪▒┘è╪د╪ز ╪د┘┘à╪┤╪ز╪▒┘â╪ر ┘ê╪د┘╪ز╪╣╪د┘ê┘ ╪د┘╪ز┘é┘┘è. ╪ز╪┤┘à┘ ╪د┘╪د╪ز┘╪د┘é┘è╪د╪ز ╪د┘╪ش╪»┘è╪»╪ر ┘à┘é╪د┘ê┘┘è ╪د┘╪ذ┘╪د╪ة ┘ê┘à┘ê╪▓╪╣┘è ╪د┘┘à┘ê╪د╪» ┘ê╪د┘┘à╪╖┘ê╪▒┘è┘ ╪د┘╪╡┘╪د╪╣┘è┘è┘ ╪د┘┘à╪▒╪ز╪ذ╪╖┘è┘ ╪ذ╪د┘╪ص┘â┘ê┘à╪ر.',
      '┘è┘╪╣╪»┘ّ ╪ز┘ê╪│┘è╪╣ ╪┤╪ذ┘â╪ر ╪د┘╪┤╪▒┘â╪د╪ة ╪▒┘â┘è╪▓╪ر┘ï ╪ث╪│╪د╪│┘è╪ر ┘┘è ╪د╪│╪ز╪▒╪د╪ز┘è╪ش┘è╪ز┘╪د ┘à╪د ┘é╪ذ┘ ╪د┘╪ح╪╖┘╪د┘é. ╪ذ╪ح╪ذ╪▒╪د┘à ╪د╪ز┘╪د┘é┘è╪د╪ز ╪ز┘ê╪▓┘è╪╣ ┘é╪ذ┘ ╪د┘╪ز╪ز╪د╪ص ╪د┘┘à╪╡┘╪╣╪î ┘╪╢┘à┘ ┘ê╪╡┘ê┘ ┘à┘╪ز╪ش╪د╪ز┘╪د ╪ح┘┘ë ╪د┘╪ث╪│┘ê╪د┘é ╪د┘╪╡╪ص┘è╪ص╪ر ┘┘ê╪▒ ╪ذ╪»╪ة ╪د┘╪ح┘╪ز╪د╪ش ظ¤ ┘à╪ز╪ش┘┘ّ╪ذ┘è┘ ╪ز╪ث╪«╪▒ ╪ز╪╖┘ê┘è╪▒ ╪د┘╪│┘ê┘é ╪د┘╪░┘è ┘è┘ê╪د╪ش┘ç┘ç ╪╣╪د╪»╪ر┘ï ╪د┘╪»╪د╪«┘┘ê┘ ╪د┘╪╡┘╪د╪╣┘è┘ê┘ ╪د┘╪ش╪»╪».',
      '╪╡╪▒┘ّ╪ص ╪د┘┘à╪»┘è╪▒ ╪د┘╪╣╪د┘à ╪│┘┘è┘à╪د┘ ╪╣┘à╪▒ ╪ذ┘ ┘à╪ص┘┘ê╪╕: "╪ش╪▒┘ë ╪د╪«╪ز┘è╪د╪▒ ┘â┘ ╪┤╪▒┘è┘â ┘à┘ ╪┤╪▒┘â╪د╪خ┘╪د ╪د┘╪د╪│╪ز╪▒╪د╪ز┘è╪ش┘è┘è┘ ┘╪ز┘â╪د┘à┘┘ç┘à ╪د┘╪╣┘à┘è┘é ┘┘è ╪│┘╪│┘╪ر ┘é┘è┘à╪ر ╪د┘╪ذ┘╪د╪ة ╪د┘╪│╪╣┘ê╪»┘è╪ر ┘ê╪د┘╪«┘┘è╪ش┘è╪ر╪î ┘ê╪د┘╪│╪ش╪د┘à┘ç┘à ┘à╪╣ ╪▒╪ج┘è╪ر 2030╪î ┘ê╪د┘╪ز╪▓╪د┘à┘ç┘à ╪ذ╪د╪╣╪ز┘à╪د╪» ╪د┘┘à┘ê╪د╪» ╪د┘┘à╪ز┘é╪»┘à╪ر. ┘ç╪░┘ç ┘┘è╪│╪ز ╪د╪ز┘╪د┘é┘è╪د╪ز ╪ز╪ش╪د╪▒┘è╪ر ┘╪ص╪│╪ذ ظ¤ ╪ذ┘ ┘ç┘è ╪┤╪▒╪د┘â╪د╪ز ╪╖┘ê┘è┘╪ر ╪د┘╪ث┘à╪» ┘à╪ذ┘┘è╪ر ╪╣┘┘ë ┘é┘╪د╪╣╪ر ┘à╪┤╪ز╪▒┘â╪ر ╪ذ╪ث┘ ┘à┘ê╪د╪» ╪د┘╪ذ╪د╪▓┘╪ز ╪│╪ز┘╪╣┘è╪» ╪ز╪┤┘â┘è┘ ┘à╪╣╪د┘è┘è╪▒ ╪د┘╪ذ┘╪د╪ة ╪د┘╪ح┘é┘┘è┘à┘è╪ر."',
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
      "Saudi Arabia's road network faces extreme heat, heavy axle loads, and rapid expansion demands. Basalt geogrid technology offers a proven solution ظ¤ distributing load, preventing cracking, and delivering up to 35% savings on road construction materials.",
    bodyEn: [
      "Saudi Arabia's National Infrastructure Development Programme (NIDP) has committed SAR 220 billion to road construction through 2030 ظ¤ making road materials performance a national economic priority. In this context, basalt geogrid for road reinforcement represents one of the highest-impact applications of Basalt Co.'s product range.",
      "Basalt geogrid works by being embedded within the asphalt concrete layer during road construction. The grid's high tensile modulus ظ¤ derived from continuous basalt roving ظ¤ distributes point loads across a wider area, reducing stress concentrations at the subbase interface. The acrylic impregnation provides compatibility with asphalt binders and prevents fiber degradation from UV and moisture.",
      'The performance results from global deployments are compelling. Road sections reinforced with basalt geogrid show a 40ظô60% reduction in reflective cracking, 30ظô40% reduction in rutting depth under heavy traffic, and a service life extension from the typical 15ظô20 year standard to 35ظô40 years in comparable conditions. Material savings of up to 35% are achieved through thinner asphalt layers ظ¤ since the geogrid compensates for reduced thickness by distributing load more effectively.',
      "For the Saudi context, the benefits are amplified. Saudi road surfaces regularly reach 65ظô70┬░C in summer, accelerating oxidative hardening of asphalt binders and causing premature cracking. Basalt geogrid, stable to 700┬░C, provides mechanical reinforcement that slows crack propagation regardless of the thermal state of the binder. Combined with the reduced maintenance intervals, the economic case for geogrid inclusion in Saudi road specifications is compelling.",
    ],
    titleAr: '╪د┘╪┤╪ذ┘â╪ر ╪د┘╪ش┘è┘ê┘┘ê╪ش┘è╪ر ┘à┘ ╪د┘╪ذ╪د╪▓┘╪ز: ╪ح╪╖╪د┘╪ر ╪╣┘à╪▒ ╪د┘╪╖╪▒┘é ╪ص╪ز┘ë 40 ╪╣╪د┘à┘ï╪د',
    excerptAr:
      '╪ز┘ê╪د╪ش┘ç ╪┤╪ذ┘â╪ر ╪د┘╪╖╪▒┘é ┘┘è ╪د┘┘à┘à┘┘â╪ر ╪ز╪ص╪»┘è╪د╪ز ╪د┘╪ص╪▒╪د╪▒╪ر ╪د┘╪┤╪»┘è╪»╪ر ┘ê╪د┘╪ث╪ص┘à╪د┘ ╪د┘┘à╪ص┘ê╪▒┘è╪ر ╪د┘╪س┘é┘è┘╪ر. ╪ز┘┘é╪»┘ّ┘à ╪ز┘é┘┘è╪ر ╪د┘╪┤╪ذ┘â╪ر ╪د┘╪ش┘è┘ê┘┘ê╪ش┘è╪ر ┘à┘ ╪د┘╪ذ╪د╪▓┘╪ز ╪ص┘┘ï╪د ┘à╪س╪ذ╪ز┘ï╪د ظ¤ ╪ز┘ê╪▓┘è╪╣ ╪د┘╪ث╪ص┘à╪د┘ ┘ê╪د┘┘ê┘é╪د┘è╪ر ┘à┘ ╪د┘╪ز╪┤┘é┘é ┘ê╪ز┘ê┘┘è╪▒ ┘à╪د ┘è╪╡┘ ╪ح┘┘ë 35% ┘à┘ ╪ز┘â╪د┘┘è┘ ╪د┘┘à┘ê╪د╪».',
    bodyAr: [
      '╪«╪╡┘ّ╪╡ ╪ذ╪▒┘╪د┘à╪ش ╪ز╪╖┘ê┘è╪▒ ╪د┘╪ذ┘┘è╪ر ╪د┘╪ز╪ص╪ز┘è╪ر ╪د┘┘ê╪╖┘┘è 220 ┘à┘┘è╪د╪▒ ╪▒┘è╪د┘ ┘╪ذ┘╪د╪ة ╪د┘╪╖╪▒┘é ╪ص╪ز┘ë ╪╣╪د┘à 2030 ظ¤ ┘à┘à╪د ┘è╪ش╪╣┘ ╪ث╪»╪د╪ة ┘à┘ê╪د╪» ╪د┘╪╖╪▒┘é ╪ث┘ê┘┘ê┘è╪ر ╪د┘é╪ز╪╡╪د╪»┘è╪ر ┘ê╪╖┘┘è╪ر. ┘┘è ┘ç╪░╪د ╪د┘╪│┘è╪د┘é╪î ╪ز┘┘à╪س┘ّ┘ ╪د┘╪┤╪ذ┘â╪ر ╪د┘╪ش┘è┘ê┘┘ê╪ش┘è╪ر ┘à┘ ╪د┘╪ذ╪د╪▓┘╪ز ┘╪ز╪│┘┘è╪ص ╪د┘╪╖╪▒┘é ╪ح╪ص╪»┘ë ╪ث╪╣┘┘ë ╪ز╪╖╪ذ┘è┘é╪د╪ز ┘à┘╪ز╪ش╪د╪ز ╪┤╪▒┘â╪ر ╪ذ╪د╪▓┘╪ز ╪ز╪ث╪س┘è╪▒┘ï╪د.',
      '╪ز╪╣┘à┘ ╪د┘╪┤╪ذ┘â╪ر ╪د┘╪ش┘è┘ê┘┘ê╪ش┘è╪ر ┘à┘ ╪د┘╪ذ╪د╪▓┘╪ز ╪ذ╪ز╪╢┘à┘è┘┘ç╪د ╪»╪د╪«┘ ╪╖╪ذ┘é╪ر ╪د┘╪«╪▒╪│╪د┘╪ر ╪د┘╪ح╪│┘┘╪ز┘è╪ر ╪ث╪س┘╪د╪ة ╪ح┘╪┤╪د╪ة ╪د┘╪╖╪▒┘è┘é. ┘è┘┘ê╪▓┘ّ╪╣ ╪د┘┘à╪╣╪د┘à┘ ╪د┘┘à╪▒╪ز┘╪╣ ┘╪┤╪» ╪د┘╪┤╪ذ┘â╪ر ظ¤ ╪د┘┘à╪┤╪ز┘é ┘à┘ ╪«┘è┘ê╪╖ ╪ذ╪د╪▓┘╪ز ┘à╪│╪ز┘à╪▒╪ر ظ¤ ╪د┘╪ث╪ص┘à╪د┘ ╪د┘┘┘é╪╖┘è╪ر ╪╣┘┘ë ┘à╪│╪د╪ص╪ر ╪ث┘ê╪│╪╣╪î ┘à┘à╪د ┘è┘┘é┘┘ّ┘ ╪ز╪▒┘â┘ّ╪▓ ╪د┘╪ح╪ش┘ç╪د╪»╪د╪ز ╪╣┘╪» ┘ê╪د╪ش┘ç╪ر ╪د┘┘é╪د╪╣╪»╪ر ╪د┘┘╪▒╪╣┘è╪ر. ┘è┘┘ê┘┘ّ╪▒ ╪د┘╪ز╪┤╪▒┘è╪ذ ╪د┘╪ث┘â╪▒┘è┘┘è┘â┘è ╪ز┘ê╪د┘┘é┘ï╪د ┘à╪╣ ┘à┘ê╪د╪» ╪▒╪د╪ذ╪╖ ╪د┘╪ح╪│┘┘╪ز ┘ê┘è┘à┘╪╣ ╪ز╪»┘ç┘ê╪▒ ╪د┘╪ث┘┘è╪د┘ ┘à┘ ╪د┘╪ث╪┤╪╣╪ر ┘┘ê┘é ╪د┘╪ذ┘┘╪│╪ش┘è╪ر ┘ê╪د┘╪▒╪╖┘ê╪ذ╪ر.',
      '┘╪ز╪د╪خ╪ش ╪د┘╪ث╪»╪د╪ة ┘à┘ ╪د┘┘╪┤╪▒╪د╪ز ╪د┘╪╣╪د┘┘à┘è╪ر ┘à┘é┘╪╣╪ر. ╪ز┘╪╕┘ç╪▒ ╪ث┘é╪│╪د┘à ╪د┘╪╖╪▒┘é ╪د┘┘à╪│┘┘ّ╪ص╪ر ╪ذ╪د┘╪┤╪ذ┘â╪ر ╪د┘╪ش┘è┘ê┘┘ê╪ش┘è╪ر ┘à┘ ╪د┘╪ذ╪د╪▓┘╪ز ╪د┘╪«┘╪د╪╢┘ï╪د ╪ذ┘╪│╪ذ╪ر 40ظô60% ┘┘è ╪د┘╪ز╪┤┘é┘é ╪د┘╪د┘╪╣┘â╪د╪│┘è╪î ┘ê30ظô40% ┘┘è ╪╣┘à┘é ╪د┘╪ز╪«╪»┘ّ╪» ╪ز╪ص╪ز ╪ص╪▒┘â╪ر ╪د┘┘à╪▒┘ê╪▒ ╪د┘╪س┘é┘è┘╪ر╪î ┘ê╪د┘à╪ز╪»╪د╪»┘ï╪د ┘┘è ╪╣┘à╪▒ ╪د┘╪«╪»┘à╪ر ┘à┘ 15ظô20 ╪╣╪د┘à┘ï╪د ╪د┘┘à╪╣╪ز╪د╪»╪ر ╪ح┘┘ë 35ظô40 ╪╣╪د┘à┘ï╪د ┘┘è ╪╕╪▒┘ê┘ ┘à┘à╪د╪س┘╪ر.',
      '┘┘è ╪د┘╪│┘è╪د┘é ╪د┘╪│╪╣┘ê╪»┘è╪î ╪ز╪ز╪╢╪د╪╣┘ ╪د┘┘┘ê╪د╪خ╪». ╪ز╪ذ┘╪║ ╪ث╪│╪╖╪ص ╪د┘╪╖╪▒┘é ╪د┘╪│╪╣┘ê╪»┘è╪ر 65ظô70┬░┘à ┘┘è ╪د┘╪╡┘è┘ ╪ذ╪د┘╪ز╪╕╪د┘à╪î ┘à┘à╪د ┘è┘╪│╪▒┘ّ╪╣ ╪د┘╪ز╪╡┘┘ّ╪ذ ╪د┘╪ث┘â╪│╪»┘è ┘┘à╪د╪»╪ر ╪▒╪د╪ذ╪╖ ╪د┘╪ح╪│┘┘╪ز ┘ê┘è┘╪│╪ذ┘ّ╪ذ ╪ز╪┤┘é┘ّ┘é╪د╪ز ┘à╪ذ┘â┘ّ╪▒╪ر. ╪ز┘┘ê┘┘ّ╪▒ ╪د┘╪┤╪ذ┘â╪ر ╪د┘╪ش┘è┘ê┘┘ê╪ش┘è╪ر ┘à┘ ╪د┘╪ذ╪د╪▓┘╪ز╪î ╪د┘╪س╪د╪ذ╪ز╪ر ╪ص╪ز┘ë 700┬░┘à╪î ╪ز╪│┘┘è╪ص┘ï╪د ┘à┘è┘â╪د┘┘è┘â┘è┘ï╪د ┘è┘╪ذ╪╖┘ّ╪خ ╪د┘╪ز╪┤╪د╪▒ ╪د┘╪ز╪┤┘é┘é╪د╪ز ╪ذ╪╡╪▒┘ ╪د┘┘╪╕╪▒ ╪╣┘ ╪د┘╪ص╪د┘╪ر ╪د┘╪ص╪▒╪د╪▒┘è╪ر ┘┘╪▒╪د╪ذ╪╖.',
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
      "As Saudi Arabia accelerates toward its net-zero goals, the construction sector faces pressure to adopt greener materials. Basalt fiber products offer a compelling ESG story ظ¤ 60% lower COظéé vs steel, natural origin, and zero toxic emissions.",
    bodyEn: [
      "Saudi Arabia has committed to achieving net-zero carbon emissions by 2060 and reducing greenhouse gas emissions by 278 million tonnes annually by 2030 under the Saudi Green Initiative. The construction sector ظ¤ responsible for approximately 37% of global carbon emissions ظ¤ is a central target for decarbonization. For procurement decision-makers, ESG credentials are increasingly factoring into materials selection alongside technical performance and cost.",
      "Basalt fiber products present a strong environmental case. The primary raw material is volcanic basalt rock, which requires no mining beyond extraction ظ¤ it is not processed into a synthetic material but transformed through melting and drawing. The embodied carbon of basalt fiber products is approximately 60% lower than equivalent steel reinforcement, and significantly lower than most glass fiber alternatives. The absence of chemical additives (unlike synthetic polymers) means no hazardous waste streams.",
      "For institutional investors and sovereign wealth funds operating within ESG frameworks, construction projects using basalt materials score higher on environmental criteria. This is particularly relevant for Vision 2030 projects managed by entities like PIF (Public Investment Fund), which is increasingly incorporating ESG benchmarks into its project evaluation criteria.",
      "Basalt Co. is committed to the Saudi Green Initiative and National Environmental Strategy targets. Our factory design includes a closed-loop water recycling system, NCEC-compliant air filtration on all production exhausts, 95%+ material utilization near-zero waste processes, and a 40% renewable energy target by 2030 through on-site solar generation.",
    ],
    titleAr: '╪د┘╪ص┘ê┘â┘à╪ر ╪د┘╪ذ┘è╪خ┘è╪ر ┘ê╪د┘╪ذ┘╪د╪ة ╪د┘╪ث╪«╪╢╪▒: ╪»┘ê╪▒ ╪ذ╪د╪▓┘╪ز ┘┘è ╪د┘╪ذ┘┘è╪ر ╪د┘╪ز╪ص╪ز┘è╪ر ╪د┘╪│╪╣┘ê╪»┘è╪ر ╪د┘┘à╪│╪ز╪»╪د┘à╪ر',
    excerptAr:
      '┘à╪╣ ╪ز╪│╪د╪▒╪╣ ╪د┘┘à┘à┘┘â╪ر ┘╪ص┘ê ╪ز╪ص┘é┘è┘é ╪ث┘ç╪»╪د┘┘ç╪د ┘┘è ╪د┘╪ص┘è╪د╪» ╪د┘┘â╪▒╪ذ┘ê┘┘è╪î ┘è┘ê╪د╪ش┘ç ┘é╪╖╪د╪╣ ╪د┘╪ذ┘╪د╪ة ╪╢╪║┘ê╪╖┘ï╪د ┘╪ز╪ذ┘┘è ┘à┘ê╪د╪» ╪ث┘â╪س╪▒ ╪د╪│╪ز╪»╪د┘à╪ر. ╪ز┘┘é╪»┘ّ┘à ┘à┘╪ز╪ش╪د╪ز ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز ┘é╪╡╪ر ╪ذ┘è╪خ┘è╪ر ┘à┘é┘╪╣╪ر ظ¤ ╪د┘╪ذ╪╣╪د╪س╪د╪ز COظéé ╪ث┘é┘ ╪ذ┘60% ┘à┘é╪د╪▒┘╪ر┘ï ╪ذ╪د┘┘┘ê┘╪د╪░.',
    bodyAr: [
      '╪د┘╪ز╪▓┘à╪ز ╪د┘┘à┘à┘┘â╪ر ╪ذ╪ز╪ص┘é┘è┘é ╪د┘╪ص┘è╪د╪» ╪د┘┘â╪▒╪ذ┘ê┘┘è ╪ذ╪ص┘┘ê┘ ╪╣╪د┘à 2060╪î ┘ê╪ز╪«┘┘è╪╢ ╪د┘╪ذ╪╣╪د╪س╪د╪ز ╪د┘╪║╪د╪▓╪د╪ز ╪د┘╪»┘┘è╪خ╪ر ╪ذ┘à┘é╪»╪د╪▒ 278 ┘à┘┘è┘ê┘ ╪╖┘ ╪│┘┘ê┘è┘ï╪د ╪ذ╪ص┘┘ê┘ 2030 ┘┘è ╪ح╪╖╪د╪▒ ┘à╪ذ╪د╪»╪▒╪ر ╪د┘╪│╪╣┘ê╪»┘è╪ر ╪د┘╪«╪╢╪▒╪د╪ة. ┘é╪╖╪د╪╣ ╪د┘╪ذ┘╪د╪ة ظ¤ ╪د┘┘à╪│╪ج┘ê┘ ╪╣┘ ┘╪ص┘ê 37% ┘à┘ ╪د┘╪ذ╪╣╪د╪س╪د╪ز ╪د┘┘â╪▒╪ذ┘ê┘ ╪د┘╪╣╪د┘┘à┘è╪ر ظ¤ ┘ç╪»┘┘î ┘à╪▒┘â╪▓┘è ┘╪ح╪▓╪د┘╪ر ╪د┘┘â╪▒╪ذ┘ê┘. ┘╪»┘ë ╪╡╪د┘╪╣┘è ┘é╪▒╪د╪▒ ╪د┘╪┤╪▒╪د╪ة╪î ╪ز╪»╪«┘ ╪د╪╣╪ز╪ذ╪د╪▒╪د╪ز ╪د┘╪ذ┘è╪خ╪ر ┘ê╪د┘┘à╪ش╪ز┘à╪╣ ┘ê╪د┘╪ص┘ê┘â┘à╪ر ╪ذ╪┤┘â┘ ┘à╪ز╪▓╪د┘è╪» ┘┘è ╪د╪«╪ز┘è╪د╪▒ ╪د┘┘à┘ê╪د╪» ╪ش┘╪ذ┘ï╪د ╪ح┘┘ë ╪ش┘╪ذ ┘à╪╣ ╪د┘╪ث╪»╪د╪ة ╪د┘╪ز┘é┘┘è ┘ê╪د┘╪ز┘â┘┘╪ر.',
      '╪ز┘┘é╪»┘ّ┘à ┘à┘╪ز╪ش╪د╪ز ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز ╪ص╪ش╪ر ╪ذ┘è╪خ┘è╪ر ┘é┘ê┘è╪ر. ╪د┘┘à╪د╪»╪ر ╪د┘╪«╪د┘à ╪د┘╪ث╪│╪د╪│┘è╪ر ┘ç┘è ╪ص╪ش╪▒ ╪د┘╪ذ╪د╪▓┘╪ز ╪د┘╪ذ╪▒┘â╪د┘┘è ╪د┘╪░┘è ┘╪د ┘è╪│╪ز┘╪▓┘à ╪د╪│╪ز╪«┘╪د╪╡┘ç ╪│┘ê┘ë ╪د┘╪ز╪╣╪»┘è┘ ╪د┘╪ذ╪│┘è╪╖ ظ¤ ╪ح╪░ ┘╪د ┘è┘╪ص┘ê┘┘ّ┘ ╪ح┘┘ë ┘à╪د╪»╪ر ╪د╪╡╪╖┘╪د╪╣┘è╪ر ╪ذ┘ ┘è╪ز╪ص┘ê┘ّ┘ ╪╣╪ذ╪▒ ╪د┘╪╡┘ç╪▒ ┘ê╪د┘╪│╪ص╪ذ. ┘è╪ذ┘╪║ ╪د┘┘â╪▒╪ذ┘ê┘ ╪د┘┘à╪ش╪│┘┘ّ╪» ┘┘è ┘à┘╪ز╪ش╪د╪ز ╪ث┘┘è╪د┘ ╪د┘╪ذ╪د╪▓┘╪ز ┘╪ص┘ê 60% ╪ث┘é┘ ┘à┘ ╪ز╪│┘┘è╪ص ╪د┘┘┘ê┘╪د╪░ ╪د┘┘à┘â╪د┘╪خ╪î ┘ê╪ث┘é┘ ╪ذ┘â╪س┘è╪▒ ┘à┘ ┘à╪╣╪╕┘à ╪ذ╪»╪د╪خ┘ ╪د┘╪ث┘┘è╪د┘ ╪د┘╪▓╪ش╪د╪ش┘è╪ر.',
      '╪ذ╪د┘┘╪│╪ذ╪ر ┘┘┘à╪│╪ز╪س┘à╪▒┘è┘ ╪د┘┘à╪ج╪│╪│┘è┘è┘ ┘ê╪╡┘╪د╪»┘è┘é ╪د┘╪س╪▒┘ê╪ر ╪د┘╪│┘è╪د╪»┘è╪ر ╪د┘╪╣╪د┘à┘╪ر ╪╢┘à┘ ╪ث╪╖╪▒ ╪د┘╪ص┘ê┘â┘à╪ر ╪د┘╪ذ┘è╪خ┘è╪ر╪î ╪ز╪ص╪╡┘ ┘à╪┤╪د╪▒┘è╪╣ ╪د┘╪ذ┘╪د╪ة ╪د┘╪ز┘è ╪ز╪│╪ز╪«╪»┘à ┘à┘ê╪د╪» ╪د┘╪ذ╪د╪▓┘╪ز ╪╣┘┘ë ╪»╪▒╪ش╪د╪ز ╪ث╪╣┘┘ë ┘┘è ╪د┘┘à╪╣╪د┘è┘è╪▒ ╪د┘╪ذ┘è╪خ┘è╪ر. ┘ê┘ç╪░╪د ╪░┘ê ╪╡┘╪ر ╪«╪د╪╡╪ر ┘┘à╪┤╪د╪▒┘è╪╣ ╪▒╪ج┘è╪ر 2030 ╪د┘╪ز┘è ╪ز┘╪»┘è╪▒┘ç╪د ╪ش┘ç╪د╪ز ┘â╪╡┘╪»┘ê┘é ╪د┘╪د╪│╪ز╪س┘à╪د╪▒╪د╪ز ╪د┘╪╣╪د┘à╪ر.',
      '╪ز┘╪ز╪▓┘à ╪┤╪▒┘â╪ر ╪ذ╪د╪▓┘╪ز ╪ذ╪ث┘ç╪»╪د┘ ┘à╪ذ╪د╪»╪▒╪ر ╪د┘╪│╪╣┘ê╪»┘è╪ر ╪د┘╪«╪╢╪▒╪د╪ة ┘ê╪د┘╪د╪│╪ز╪▒╪د╪ز┘è╪ش┘è╪ر ╪د┘╪ذ┘è╪خ┘è╪ر ╪د┘┘ê╪╖┘┘è╪ر. ┘è╪ز╪╢┘à┘ ╪ز╪╡┘à┘è┘à ┘à╪╡┘╪╣┘╪د ┘╪╕╪د┘à ╪ز╪»┘ê┘è╪▒ ┘à┘è╪د┘ç ┘à╪║┘┘é╪î ┘ê╪ز╪▒╪┤┘è╪ص ┘ç┘ê╪د╪ة ┘à╪ز┘ê╪د┘┘é ┘à╪╣ ╪د╪┤╪ز╪▒╪د╪╖╪د╪ز ╪د┘┘à╪▒┘â╪▓ ╪د┘┘ê╪╖┘┘è ┘┘╪▒┘é╪د╪ذ╪ر ╪╣┘┘ë ╪د┘╪د┘╪ز╪▓╪د┘à ╪د┘╪ذ┘è╪خ┘è ╪╣┘┘ë ╪ش┘à┘è╪╣ ┘à╪«╪د╪▒╪ش ╪د┘╪ح┘╪ز╪د╪ش╪î ┘ê╪╣┘à┘┘è╪د╪ز ╪ز┘é╪ز╪▒╪ذ ┘à┘ ╪د┘╪╡┘╪▒ ┘┘è ╪د┘┘┘╪د┘è╪د╪ز ╪ذ┘à╪╣╪»┘ ╪د╪│╪ز╪«╪»╪د┘à ┘à┘ê╪د╪» ┘è╪ز╪ش╪د┘ê╪▓ 95%╪î ┘ê┘ç╪»┘ ╪د┘╪╖╪د┘é╪ر ╪د┘┘à╪ز╪ش╪»╪»╪ر ╪ذ┘╪│╪ذ╪ر 40% ╪ذ╪ص┘┘ê┘ 2030.',
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
    titleAr: '╪ذ╪د╪▓┘╪ز ╪ز┘╪║┘┘é ╪ش┘ê┘╪ر ╪د┘╪د╪│╪ز╪س┘à╪د╪▒ ╪د┘╪ث┘ê┘┘ë ┘ê╪ز╪ز╪╖┘╪╣ ┘╪د╪«╪ز┘è╪د╪▒ ╪د┘┘à┘ê┘é╪╣ ┘┘è 2026',
    excerptAr:
      '╪ث╪ز┘à┘ّ╪ز ╪┤╪▒┘â╪ر ╪ذ╪د╪▓┘╪ز ┘┘╪ز┘é┘┘è╪ر ╪ذ┘╪ش╪د╪ص ╪ح╪║┘╪د┘é ╪ش┘ê┘╪ز┘ç╪د ╪د┘╪د╪│╪ز╪س┘à╪د╪▒┘è╪ر ╪د┘╪ث┘ê┘┘ë╪î ┘ê╪ص╪╡┘╪ز ╪╣┘┘ë ╪د┘╪ز╪▓╪د┘à╪د╪ز ╪ز┘à┘ê┘è┘┘è╪ر ┘à┘ ┘à╪│╪ز╪س┘à╪▒┘è┘ ┘à╪ج╪│╪│┘è┘è┘ ╪│╪╣┘ê╪»┘è┘è┘ ┘ê╪┤╪▒┘â╪د╪ة ┘â╪ذ╪د╪▒.',
    bodyAr: [
      '╪ث╪ز┘à┘ّ╪ز ╪┤╪▒┘â╪ر ╪ذ╪د╪▓┘╪ز ┘┘╪ز┘é┘┘è╪ر ╪ذ┘╪ش╪د╪ص ╪ح╪║┘╪د┘é ╪ش┘ê┘╪ز┘ç╪د ╪د┘╪د╪│╪ز╪س┘à╪د╪▒┘è╪ر ╪د┘╪ث┘ê┘┘ë╪î ┘ê╪ص╪╡┘╪ز ╪╣┘┘ë ╪د┘╪ز╪▓╪د┘à╪د╪ز ┘à┘ ┘à╪ش┘à┘ê╪╣╪ر ┘à╪«╪ز╪د╪▒╪ر ┘à┘ ╪د┘┘à╪│╪ز╪س┘à╪▒┘è┘ ╪د┘┘à╪ج╪│╪│┘è┘è┘ ╪د┘╪│╪╣┘ê╪»┘è┘è┘ ┘ê╪د┘╪┤╪▒┘â╪د╪ة ╪د┘╪د╪│╪ز╪▒╪د╪ز┘è╪ش┘è┘è┘ ┘à┘ ┘â╪ذ╪د╪▒ ╪د┘╪ث╪س╪▒┘è╪د╪ة. ┘ê┘é╪» ╪ش╪د╪ة╪ز ╪د┘╪ش┘ê┘╪ر ┘à┘┘â╪ز╪ز┘╪ذ╪ر ╪ذ╪ث┘â╪س╪▒ ┘à┘ ╪د┘┘à╪│╪ز┘ç╪»┘╪î ┘à┘à╪د ┘è╪╣┘â╪│ ╪س┘é╪ر ╪د┘╪│┘ê┘é ╪د┘┘é┘ê┘è╪ر ┘┘è ┘╪▒╪╡╪ر ┘à┘ê╪د╪» ╪د┘╪ذ╪د╪▓┘╪ز ┘ê┘é╪»╪▒╪د╪ز ╪د┘╪┤╪▒┘â╪ر ╪د┘╪ز┘┘┘è╪░┘è╪ر.',
      '╪│╪ز┘┘à┘ê┘┘ّ┘ ╪د┘╪╣╪د╪خ╪»╪د╪ز ╪╣┘à┘┘è╪د╪ز ╪د┘╪د╪«╪ز┘è╪د╪▒ ┘ê╪د┘╪ص╪╡┘ê┘ ╪╣┘┘ë ╪د┘┘à┘ê┘é╪╣ ╪د┘┘┘ç╪د╪خ┘è ┘┘┘à╪╡┘╪╣╪î ┘ê╪د┘┘ç┘╪»╪│╪ر ╪د┘╪ز┘╪╡┘è┘┘è╪ر ┘ê╪د┘┘à╪┤╪ز╪▒┘è╪د╪ز ┘┘┘à╪▒╪ص┘╪ر ╪د┘╪ث┘ê┘┘ë ┘à┘ ╪د┘╪ح┘╪ز╪د╪ش╪î ┘ê╪ح┘╪ش╪د╪▓ ╪د╪ز┘╪د┘é┘è╪د╪ز ╪د╪│╪ز┘è╪╣╪د╪ذ ╪د┘╪ح┘╪ز╪د╪ش ┘à╪╣ ╪د┘╪╣┘à┘╪د╪ة ╪د┘╪ث┘ê╪د╪خ┘╪î ┘ê╪ز╪╖┘ê┘è╪▒ ╪▒╪ث╪│ ╪د┘┘à╪د┘ ╪د┘╪ذ╪┤╪▒┘è ┘é╪ذ┘ ╪د┘╪ز╪┤╪║┘è┘ ╪ذ┘à╪د ┘è╪┤┘à┘ ╪د┘╪ز╪»╪▒┘è╪ذ ╪د┘╪«╪د╪▒╪ش┘è ┘┘┘â┘ê╪د╪»╪▒ ╪د┘┘┘┘è╪ر ╪د┘╪▒╪خ┘è╪│┘è╪ر.',
      '╪ز╪│╪ز┘ç╪»┘ ╪د┘╪┤╪▒┘â╪ر ╪د┘╪د╪«╪ز┘è╪د╪▒ ╪د┘┘┘ç╪د╪خ┘è ┘┘┘à┘ê┘é╪╣ ╪»╪د╪«┘ ╪د┘┘à┘à┘┘â╪ر ╪ذ╪ص┘┘ê┘ ╪د┘╪▒╪ذ╪╣ ╪د┘╪▒╪د╪ذ╪╣ ┘à┘ 2026╪î ╪ذ┘╪د╪ة┘ï ╪╣┘┘ë ╪د┘┘é╪▒╪ذ ┘à┘ ╪د╪ص╪ز┘è╪د╪╖┘è╪د╪ز ╪د┘╪ذ╪د╪▓┘╪ز ┘┘è ╪د┘╪»╪▒╪╣ ╪د┘╪╣╪▒╪ذ┘è ┘ê╪د┘╪ذ┘┘è╪ر ╪د┘┘┘ê╪ش╪│╪ز┘è╪ر ┘ê╪د┘┘à╪▒╪د┘┘é ╪د┘╪╡┘╪د╪╣┘è╪ر ┘ê╪د┘╪ز┘ê╪د┘┘é ┘à╪╣ ╪ث┘ê┘┘ê┘è╪د╪ز ╪د┘╪ز┘┘à┘è╪ر ╪د┘╪ح┘é┘┘è┘à┘è╪ر. ┘ê╪ز╪┤┘à┘ ╪د┘┘à┘╪د╪╖┘é ╪د┘┘à┘╪▒╪┤┘┘ّ╪ص╪ر ┘à┘â╪ر ╪د┘┘à┘â╪▒┘à╪ر ┘ê╪د┘┘à╪»┘è┘╪ر ╪د┘┘à┘┘ê╪▒╪ر ┘ê╪د┘┘é╪╡┘è┘à.',
    ],
  },
];
