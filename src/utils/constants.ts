/**
 * Choplife Gaming — proposal numbers & company profile.
 * Source: transcricao/reuniao.txt + cliente.config.json
 */

export const PRICING_PLACEHOLDER = "[A DEFINIR NA DEMO]" as const;

/** Partner pricing via Talent Grid (Evans Munga, discovery call) */
export const PRICING_ANNUAL_PER_SEAT = 3;
export const PRICING_QUARTERLY_PER_SEAT = 4.75;

export const DEFAULT_VALUES = {
  empresa: "Choplife Gaming",
  legalName: "Choplife Gaming",
  tagline: "Close the loop: performance gaps → structured learning",
  location: "Gaming & betting · Central Africa",
  headquarters: "Central Africa",

  totalColaboradores: 150,
  remoteRegions: "Central Africa operations",
  decisionTimeline: "1–2 months once proposal is complete",
  goLiveTarget: "Phase 1 · Performance + Trainings · 150 seats",
  firstHrSoftware: false,

  clientQuote:
    "After the performance reviews I think we have all the gaps mapped out — then how do we link that to trainings?",
  clientQuoteAttribution: "Mireille Uwara — HR, Choplife Gaming",
  contactRole: "HR Manager",
  decisionMaker: "Mireille Uwara",

  storyHeadline: "From Performance to Potential",
  storySubline:
    "150 employees · gaps mapped after reviews · no training link today · integrate alongside your current HR stack",
  journeyTitle: "The HR year at Choplife Gaming",
  journeySubline:
    "Follow the performance cycle — from reviews and talent mapping to compliance training and budget control",
  journeyNextStepsIntro:
    "Three phases — explore the sandbox together, go live modularly with 150 seats, measure impact before the next review cycle",

  bundleName: "Performance + Trainings (via Talent Grid)",
  bundleModules: "Performance 2.0 · Trainings / LMS · 9-box talent grid",
  recruitmentTier: null as string | null,
  pricingJustification:
    "Partner pricing via Talent Grid · volume discounts available · localized implementation & first-line support",

  custoColaboradorMes_USD: PRICING_ANNUAL_PER_SEAT,
  custoColaboradorMesQuarterly_USD: PRICING_QUARTERLY_PER_SEAT,
  mensalFactorial_USD: 150 * PRICING_ANNUAL_PER_SEAT,
  mensalFactorialQuarterly_USD: 150 * PRICING_QUARTERLY_PER_SEAT,
  implantacaoFactorial_USD: null as number | null,
  implantacaoNota: "Implementation scope confirmed with Talent Grid during your product demo",
  onboardingHoras: null as number | null,
  onboardingDias: "30",

  vendedor: "Victor Gutierrez",
  cargoVendedor: "Partnership Account Manager · ROW · Factorial",
  emailVendedor: "victor.gutierrez@factorial.co",

  demoUrl: null as string | null,
  demoEmail: null as string | null,
  demoPassword: null as string | null,
  demoNote: "Live sandbox — Victor will share access this week for you to explore Performance + LMS",

  payrollPartner: "Talent Grid — Angela Wekesa & Evans Munga (implementation & first-line support)",
  currentTools:
    "Existing HR platform (performance only) · external training partner · PDF materials & online sessions",

  closingVideoId: "9mUIcLa2te8",
} as const;
