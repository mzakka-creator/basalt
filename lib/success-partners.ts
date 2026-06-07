export type SuccessPartnerCategory = 'governmental' | 'nonGovernmental';

export type SuccessPartner = {
  id: string;
  name: string;
  logoSrc: string;
  category: SuccessPartnerCategory;
};

export const successPartners: SuccessPartner[] = [
  { id: 'vision-2030', name: 'Vision 2030', logoSrc: '/partners/vision-2030.svg', category: 'governmental' },
  { id: 'sidf', name: 'SIDF', logoSrc: '/partners/sidf.svg', category: 'governmental' },
  { id: 'modon', name: 'MODON', logoSrc: '/partners/modon.svg', category: 'governmental' },
  { id: 'rcrc', name: 'RCRC', logoSrc: '/partners/rcrc.svg', category: 'governmental' },
  { id: 'nidlp', name: 'NIDLP', logoSrc: '/partners/nidlp.svg', category: 'governmental' },
  { id: 'pif', name: 'PIF', logoSrc: '/partners/pif.svg', category: 'governmental' },
  { id: 'sabic', name: 'SABIC', logoSrc: '/partners/sabic.svg', category: 'nonGovernmental' },
  { id: 'maaden', name: 'Maaden', logoSrc: '/partners/maaden.svg', category: 'nonGovernmental' },
];

export const successPartnerCategories: SuccessPartnerCategory[] = ['governmental', 'nonGovernmental'];
