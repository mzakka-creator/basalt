import type { StaticImageData } from 'next/image';
import logoAramco from '@/assets/success partners/شعار أرامكو بدقة عالية - PNG  - SVG.png';
import logoZatca from '@/assets/success partners/شعار هيئة الزكاة والضريبة والجمارك - SVG.png';
import logoMunicipalities from '@/assets/success partners/شعار وزارة البلديات والإسكان الجديد بدقة عالية png - SVG.png';
import logoPif from '@/assets/success partners/شعار صندوق الاستثمارات العامة  الجديد بدقة عالية - PNG - SVG PIF Logo.png';
import logoTransport from '@/assets/success partners/شعار وزارة النقل والخدمات اللوجستية SVG.png';
import logoEnvironment from '@/assets/success partners/شعار وزارة البيئة والمياه والزراعة بدقة عالية svg - png.png';
import logoRcjy from '@/assets/success partners/شعار الهيئة الملكية للجبيل وينبع الجديد بدقة عالي png - SVG.png';
import logoSidf from '@/assets/success partners/شعار الصندوق الصناعي - SVG.png';
import logoInvestment from '@/assets/success partners/شعار وزارة الاستثمار SVG.png';
import logoIndustry from '@/assets/success partners/شعار وزارة الصناعة والثروة المعدنية - SVG.png';
import logoNidlp from '@/assets/success partners/شعار برنامج تطوير الصناعة الوطنية والخدمات اللوجستية رؤية 2030 - SVG.png';
import logoSaso from '@/assets/success partners/شعار المواصفات السعودية بدقة عالية svg - png.png';
import logoModon from '@/assets/success partners/شعار مدن بدقة عالية svg - png.png';
import logoIronCommittee from '@/assets/success partners/اللجنة الوطنية لصناعة الحديد.png';
import logoChambersUnion from '@/assets/success partners/اتحاد الغرف.png';

export type SuccessPartner = {
  id: string;
  name: string;
  logo: StaticImageData;
};

export const successPartners: SuccessPartner[] = [
  { id: 'pif', name: 'Public Investment Fund', logo: logoPif },
  { id: 'sidf', name: 'Saudi Industrial Development Fund', logo: logoSidf },
  { id: 'modon', name: 'Saudi Authority for Industrial Cities (MODON)', logo: logoModon },
  { id: 'rcjy', name: 'Royal Commission for Jubail and Yanbu', logo: logoRcjy },
  { id: 'nidlp', name: 'National Industrial Development and Logistics Program', logo: logoNidlp },
  { id: 'municipalities', name: 'Ministry of Municipalities and Housing', logo: logoMunicipalities },
  { id: 'transport', name: 'Ministry of Transport and Logistics', logo: logoTransport },
  { id: 'environment', name: 'Ministry of Environment, Water and Agriculture', logo: logoEnvironment },
  { id: 'investment', name: 'Ministry of Investment', logo: logoInvestment },
  { id: 'industry', name: 'Ministry of Industry and Mineral Resources', logo: logoIndustry },
  { id: 'zatca', name: 'Zakat, Tax and Customs Authority', logo: logoZatca },
  { id: 'saso', name: 'Saudi Standards, Metrology and Quality Organization', logo: logoSaso },
  { id: 'aramco', name: 'Saudi Aramco', logo: logoAramco },
  { id: 'iron-committee', name: 'National Committee for Iron Industry', logo: logoIronCommittee },
  { id: 'chambers-union', name: 'Federation of Saudi Chambers', logo: logoChambersUnion },
];
