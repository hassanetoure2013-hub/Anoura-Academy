export interface LegalText {
  id: string;
  country: string;
  countryCode: string;
  title: string;
  type: 'code' | 'decree' | 'law' | 'regulation';
  adoptionDate: string;
  effectiveDate: string;
  status: 'current' | 'superseded' | 'draft';
  officialReference: string;
  downloadUrl?: string;
  summary: string;
  keyProvisions: string[];
  supersedes?: string[];
  relatedTexts?: string[];
}

export const legalTexts: LegalText[] = [
  // Sénégal - Texte actualisé
  {
    id: 'sen-2021-code',
    country: 'Sénégal',
    countryCode: 'SN',
    title: 'Code des Marchés Publics du Sénégal',
    type: 'code',
    adoptionDate: '2021-12-30',
    effectiveDate: '2022-01-01',
    status: 'current',
    officialReference: 'Loi n° 2021-23 du 30 décembre 2021',
    summary: 'Nouveau code des marchés publics modernisant le cadre réglementaire sénégalais',
    keyProvisions: [
      'Dématérialisation des procédures',
      'Renforcement de la transparence',
      'Simplification des seuils',
      'Amélioration du contrôle'
    ],
    supersedes: ['sen-2014-code'],
    relatedTexts: ['sen-2022-decree-implementation']
  },
  
  // Mali
  {
    id: 'mali-2015-code',
    country: 'Mali',
    countryCode: 'ML',
    title: 'Code des Marchés Publics et des Délégations de Service Public',
    type: 'code',
    adoptionDate: '2015-12-11',
    effectiveDate: '2016-01-01',
    status: 'current',
    officialReference: 'Loi n° 2015-052 du 11 décembre 2015',
    summary: 'Code régissant les marchés publics et délégations de service public au Mali',
    keyProvisions: [
      'Procédures de passation',
      'Contrôle et régulation',
      'Sanctions et recours',
      'Délégations de service public'
    ]
  },

  // Burkina Faso
  {
    id: 'bf-2017-code',
    country: 'Burkina Faso',
    countryCode: 'BF',
    title: 'Code des Marchés Publics du Burkina Faso',
    type: 'code',
    adoptionDate: '2017-05-02',
    effectiveDate: '2017-06-01',
    status: 'current',
    officialReference: 'Loi n° 039-2016/AN du 2 mai 2017',
    summary: 'Code modernisé des marchés publics du Burkina Faso',
    keyProvisions: [
      'Passation électronique',
      'Préférence nationale',
      'Contrôle citoyen',
      'Recours administratifs'
    ]
  },

  // Guinée
  {
    id: 'gin-2019-code',
    country: 'Guinée',
    countryCode: 'GN',
    title: 'Code des Marchés Publics de Guinée',
    type: 'code',
    adoptionDate: '2019-07-15',
    effectiveDate: '2019-08-15',
    status: 'current',
    officialReference: 'Loi L/2019/012/AN du 15 juillet 2019',
    summary: 'Code des marchés publics révisé de la République de Guinée',
    keyProvisions: [
      'Modernisation des procédures',
      'Transparence renforcée',
      'Participation du secteur privé',
      'Mécanismes de recours'
    ]
  },

  // Côte d'Ivoire
  {
    id: 'ci-2020-code',
    country: 'Côte d\'Ivoire',
    countryCode: 'CI',
    title: 'Code des Marchés Publics de Côte d\'Ivoire',
    type: 'code',
    adoptionDate: '2020-03-26',
    effectiveDate: '2020-04-26',
    status: 'current',
    officialReference: 'Loi n° 2020-275 du 26 mars 2020',
    summary: 'Nouveau code des marchés publics ivoirien',
    keyProvisions: [
      'Dématérialisation complète',
      'Préférence communautaire',
      'Contrôle renforcé',
      'Sanctions dissuasives'
    ]
  },

  // Niger
  {
    id: 'ne-2018-code',
    country: 'Niger',
    countryCode: 'NE',
    title: 'Code des Marchés Publics du Niger',
    type: 'code',
    adoptionDate: '2018-12-31',
    effectiveDate: '2019-01-31',
    status: 'current',
    officialReference: 'Loi n° 2018-60 du 31 décembre 2018',
    summary: 'Code des marchés publics modernisé du Niger',
    keyProvisions: [
      'Procédures simplifiées',
      'Contrôle citoyen',
      'Recours effectifs',
      'Promotion des PME'
    ]
  },

  // Togo
  {
    id: 'tg-2021-code',
    country: 'Togo',
    countryCode: 'TG',
    title: 'Code des Marchés Publics du Togo',
    type: 'code',
    adoptionDate: '2021-06-14',
    effectiveDate: '2021-07-14',
    status: 'current',
    officialReference: 'Loi n° 2021-006 du 14 juin 2021',
    summary: 'Nouveau code des marchés publics togolais',
    keyProvisions: [
      'Digitalisation des procédures',
      'Transparence accrue',
      'Participation citoyenne',
      'Mécanismes de recours'
    ]
  },

  // Mauritanie
  {
    id: 'mr-2022-code',
    country: 'Mauritanie',
    countryCode: 'MR',
    title: 'Code des Marchés Publics de Mauritanie',
    type: 'code',
    adoptionDate: '2022-04-12',
    effectiveDate: '2022-05-12',
    status: 'current',
    officialReference: 'Loi n° 2022-015 du 12 avril 2022',
    summary: 'Code des marchés publics réformé de Mauritanie',
    keyProvisions: [
      'Modernisation du cadre légal',
      'Renforcement de la concurrence',
      'Amélioration du contrôle',
      'Promotion de l\'intégrité'
    ]
  },

  // Tchad
  {
    id: 'td-2019-code',
    country: 'Tchad',
    countryCode: 'TD',
    title: 'Code des Marchés Publics du Tchad',
    type: 'code',
    adoptionDate: '2019-11-28',
    effectiveDate: '2019-12-28',
    status: 'current',
    officialReference: 'Loi n° 035/PR/2019 du 28 novembre 2019',
    summary: 'Code des marchés publics actualisé du Tchad',
    keyProvisions: [
      'Procédures harmonisées',
      'Contrôle renforcé',
      'Recours administratifs',
      'Sanctions appropriées'
    ]
  },

  // Cameroun
  {
    id: 'cm-2018-code',
    country: 'Cameroun',
    countryCode: 'CM',
    title: 'Code des Marchés Publics du Cameroun',
    type: 'code',
    adoptionDate: '2018-07-11',
    effectiveDate: '2018-08-11',
    status: 'current',
    officialReference: 'Loi n° 2018/012 du 11 juillet 2018',
    summary: 'Code des marchés publics révisé du Cameroun',
    keyProvisions: [
      'Dématérialisation progressive',
      'Préférence nationale',
      'Contrôle a priori et a posteriori',
      'Mécanismes de recours'
    ]
  },

  // Gabon
  {
    id: 'ga-2020-code',
    country: 'Gabon',
    countryCode: 'GA',
    title: 'Code des Marchés Publics du Gabon',
    type: 'code',
    adoptionDate: '2020-09-15',
    effectiveDate: '2020-10-15',
    status: 'current',
    officialReference: 'Loi n° 015/2020 du 15 septembre 2020',
    summary: 'Nouveau code des marchés publics gabonais',
    keyProvisions: [
      'Modernisation des procédures',
      'Transparence renforcée',
      'Participation du secteur privé',
      'Contrôle efficace'
    ]
  },

  // RCA
  {
    id: 'cf-2021-code',
    country: 'République Centrafricaine',
    countryCode: 'CF',
    title: 'Code des Marchés Publics de RCA',
    type: 'code',
    adoptionDate: '2021-08-20',
    effectiveDate: '2021-09-20',
    status: 'current',
    officialReference: 'Loi n° 21.008 du 20 août 2021',
    summary: 'Code des marchés publics modernisé de RCA',
    keyProvisions: [
      'Procédures simplifiées',
      'Transparence accrue',
      'Contrôle citoyen',
      'Recours effectifs'
    ]
  }
];

export const getTextsByCountry = (countryCode: string): LegalText[] => {
  return legalTexts.filter(text => text.countryCode === countryCode && text.status === 'current');
};

export const getCurrentTexts = (): LegalText[] => {
  return legalTexts.filter(text => text.status === 'current');
};

export const getTextById = (id: string): LegalText | undefined => {
  return legalTexts.find(text => text.id === id);
};