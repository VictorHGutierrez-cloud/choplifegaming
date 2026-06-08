/**
 * HR Journey — Choplife Gaming
 * Source: transcricao/reuniao.txt
 * Demo videos: factorialDemoVideos.ts · Images: public/journey/
 */

import { FACTORIAL_DEMO_VIDEOS } from "./factorialDemoVideos";

export interface DemoVideo {
  label: string;
  url: string;
}

export interface Screenshot {
  label: string;
  file: string;
}

export interface JourneyStep {
  id: string;
  index: number;
  title: string;
  character: string;
  image: string;
  moment: string;
  painToday: string;
  withFactorial: string;
  quote?: string;
  moduleLabel: string;
  demoVideos: DemoVideo[];
  screenshots?: Screenshot[];
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "step-1",
    index: 1,
    title: "Performance cycle closes — gaps appear",
    character: "Mireille Uwara · HR · Choplife Gaming",
    image: "step1.png",
    moment: "After quarterly or annual reviews, score distribution reveals who needs improvement and who is ready to grow",
    painToday:
      "Reviews run in the current HR system, but strengths and weaknesses stay in reports. No structured link to what happens next for each employee.",
    withFactorial:
      "Multiple review types in one place: self-assessment, manager review, 360° peer feedback, and project-based reviews. Score distribution makes gaps visible at a glance — strengths, areas to improve, and competencies mapped per employee.",
    quote:
      "After the performance reviews I think we have all the gaps mapped out — then how do we link that to trainings?",
    moduleLabel: "Factorial Performance 2.0",
    demoVideos: [
      FACTORIAL_DEMO_VIDEOS.performance.performanceReview,
      FACTORIAL_DEMO_VIDEOS.performance.peerReviews,
    ],
    screenshots: [{ label: "Performance score distribution", file: "analyticsdistribution.png" }],
  },
  {
    id: "step-2",
    index: 2,
    title: "Structured workflows — no admin chaos",
    character: "Managers · HR team",
    image: "step2.png",
    moment: "Review season starts — HR needs to know who submitted, who is pending, and who approved",
    painToday:
      "Manual follow-ups. No single view of where each review stands. Managers and HR chase submissions instead of acting on insights.",
    withFactorial:
      "Every step is defined and trackable. Custom templates, automated reminders, and approval workflows. Managers see questionnaires, assessments, and action items in one flow — full visibility, zero admin chaos.",
    moduleLabel: "Factorial Performance · Workflows",
    demoVideos: [
      FACTORIAL_DEMO_VIDEOS.performance.peerReviews,
      FACTORIAL_DEMO_VIDEOS.performance.performanceReview,
    ],
    screenshots: [{ label: "Action plan from review", file: "actionplan.png" }],
  },
  {
    id: "step-3",
    index: 3,
    title: "Talent management — the 9-box grid",
    character: "HR leadership · people managers",
    image: "step3.png",
    moment: "Succession planning and talent conversations — who is a rising star, who is at risk of leaving",
    painToday:
      "Talent decisions rely on subjective conversations. No visual, data-driven view of performance vs potential across 150 employees.",
    withFactorial:
      "The 9-box grid maps employees by performance (X axis) and potential (Y axis). Identify rising stars to fast-track, spot flight risks before it is too late, and build succession plans backed by real review data.",
    moduleLabel: "Factorial Performance · 9-box grid",
    demoVideos: [
      FACTORIAL_DEMO_VIDEOS.engagement.oneOnOne,
      FACTORIAL_DEMO_VIDEOS.engagement.surveys,
    ],
    screenshots: [{ label: "9-box talent grid", file: "9box.png" }],
  },
  {
    id: "step-4",
    index: 4,
    title: "Performance drives learning",
    character: "Manager · employee · HR",
    image: "step4.png",
    moment: "Review debrief — manager and employee agree on development actions and training needs",
    painToday:
      "Gaps are identified but connecting them to a course means emails, spreadsheets, or requests outside the system. External courses (e.g. English classes) tracked separately.",
    withFactorial:
      "From the action plan, managers request a course from the catalog or propose an external one — with provider, cost, dates, and justification. HR receives the request, approves, and assigns. Low competency score → assign a course. High-potential employee → tailored development path.",
    quote: "Very perfect.",
    moduleLabel: "Factorial Performance → Trainings",
    demoVideos: [FACTORIAL_DEMO_VIDEOS.trainings.lms],
    screenshots: [{ label: "Learning plan request", file: "actionplan.png" }],
  },
  {
    id: "step-5",
    index: 5,
    title: "Training management + AI",
    character: "HR · training coordinator · employees",
    image: "step5.png",
    moment: "Mandatory compliance cycle — AML, responsible gaming, gambling — plus budget planning for L&D",
    painToday:
      "Trainings created from PDFs manually. External partner sessions not tracked centrally. Training spend (external fees + manager teaching hours) invisible. No mobile access for employees.",
    withFactorial:
      "AI creates courses from your PDFs in minutes. Assign to individuals or teams. Track mandatory compliance with expiration dates. Training budgets in real time — direct costs (external provider) and indirect costs (manager hours). Employees complete trainings on mobile. Virtual sessions with external links tracked alongside internal content.",
    quote: "We do both, depending on the needs.",
    moduleLabel: "Factorial Trainings · AI · Budgets",
    demoVideos: [
      FACTORIAL_DEMO_VIDEOS.trainings.certificate,
      FACTORIAL_DEMO_VIDEOS.trainings.lms,
    ],
  },
];

export interface NextStep {
  id: string;
  index: number;
  image: string;
  label: string;
  title: string;
  description: string;
}

export const NEXT_STEPS: NextStep[] = [
  {
    id: "explore",
    index: 1,
    image: "passoa.png",
    label: "Explore",
    title: "Factorial sandbox — Victor shares access",
    description:
      "Deep-dive on 9-box grid, performance-to-learning workflow, and AI course creation. Mireille and team explore at their own pace.",
  },
  {
    id: "golive",
    index: 2,
    image: "passob.png",
    label: "Go live",
    title: "150 seats · Performance + Trainings",
    description:
      "Modular rollout via Talent Grid. Keep your existing HR platform — Factorial adds the training layer Mireille asked for.",
  },
  {
    id: "results",
    index: 3,
    image: "passoc.png",
    label: "Results",
    title: "Measure before the next review cycle",
    description:
      "Track compliance completion, training spend vs budget, and gap closure. Data drives the next performance cycle — not spreadsheets.",
  },
];

const JOURNEY_ASSET_VERSION = "choplife-v2";

export function journeyAsset(fileName: string): string {
  return `${import.meta.env.BASE_URL}journey/${fileName}?v=${JOURNEY_ASSET_VERSION}`;
}
