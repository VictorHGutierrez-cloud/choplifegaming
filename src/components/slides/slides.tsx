import { Fragment, ReactNode } from "react";
import {
  AlertTriangle,
  Check,
  Clock,
  FileText,
  Link2,
  Shield,
  Target,
  TrendingUp,
  Users,
  Video,
  X,
  Zap,
} from "lucide-react";
import { ExpandableImage } from "@/components/ui/ImageLightbox";
import { DEFAULT_VALUES as d } from "@/utils/constants";

const factorialModulesImg = `${import.meta.env.BASE_URL}journey/factorial-modules.svg`;

export interface SlideData {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[28px] tracking-[0.2em] uppercase opacity-90 mb-6 font-bold">{children}</p>
);

const SlideTitle = ({ children, light }: { children: ReactNode; light?: boolean }) => (
  <h2
    className={`text-[64px] font-bold leading-[1.12] mb-8 max-w-[1300px] ${light ? "text-foreground" : ""}`}
  >
    {children}
  </h2>
);

const FactorialCard = ({
  icon,
  title,
  body,
  impact,
  light = false,
  badge,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  impact?: string;
  light?: boolean;
  badge?: string;
}) => (
  <div
    className={`border-l-4 p-6 h-full relative ${
      light
        ? "border-primary bg-primary/[0.04] border border-l-4 border-foreground/10"
        : "border-primary/80 bg-white/5 border border-white/15"
    }`}
  >
    {badge && (
      <span
        className={`absolute top-4 right-4 text-[12px] font-bold uppercase tracking-wider px-2 py-1 ${
          light ? "bg-primary/10 text-primary" : "bg-white/10 text-white/90"
        }`}
      >
        {badge}
      </span>
    )}
    <div className="flex items-start gap-4 mb-3">
      <div
        className={`shrink-0 w-10 h-10 flex items-center justify-center ${
          light ? "bg-primary/10 text-primary" : "bg-white/10 text-white"
        }`}
      >
        {icon}
      </div>
      <h3 className={`text-[22px] font-bold leading-snug pr-16 ${light ? "text-foreground" : ""}`}>{title}</h3>
    </div>
    <p className={`text-[18px] font-normal leading-relaxed ${light ? "text-foreground/75" : "opacity-75"}`}>
      {body}
    </p>
    {impact && (
      <p
        className={`text-[16px] font-bold mt-4 pt-3 border-t ${
          light ? "text-primary border-foreground/10" : "opacity-90 border-white/15"
        }`}
      >
        {impact}
      </p>
    )}
  </div>
);

const ActCard = ({
  act,
  title,
  body,
  quote,
}: {
  act: string;
  title: string;
  body: string;
  quote?: string;
}) => (
  <div className="border border-white/20 bg-white/5 p-6 h-full flex flex-col">
    <p className="text-[14px] font-bold uppercase tracking-[0.25em] opacity-60 mb-3">{act}</p>
    <h3 className="text-[24px] font-bold mb-4 leading-snug">{title}</h3>
    <p className="text-[17px] font-normal opacity-75 leading-relaxed flex-1">{body}</p>
    {quote && (
      <blockquote className="mt-5 pt-4 border-t border-white/15 text-[16px] italic opacity-80 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
    )}
  </div>
);

export const slides: SlideData[] = [
  {
    id: "cover",
    title: "Your story",
    summary: "Choplife Gaming · performance to potential",
    icon: <FileText size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Partnership Proposal</SectionLabel>
        <h1 className="text-[80px] font-bold leading-[1.08] mb-4 max-w-[1400px]">{d.empresa}</h1>
        <p className="opacity-90 font-bold mb-2 text-[40px] max-w-[1200px]">{d.storyHeadline}</p>
        <p className="opacity-80 font-normal mb-8 text-[28px] max-w-[1200px]">{d.storySubline}</p>
        <blockquote className="border-l-4 border-white/40 pl-8 mb-8 max-w-[1100px]">
          <p className="text-[24px] font-normal italic opacity-90 leading-relaxed">&ldquo;{d.clientQuote}&rdquo;</p>
          <footer className="text-[18px] font-bold opacity-70 mt-3 not-italic">— {d.clientQuoteAttribution}</footer>
        </blockquote>
        <p className="opacity-75 font-normal text-[22px] max-w-[1200px]">{d.tagline}</p>
        <div className="mt-12 flex items-center gap-5">
          <div className="w-11 h-11 border border-white/30 flex items-center justify-center bg-white/5">
            <span className="text-[20px] font-bold">F</span>
          </div>
          <div>
            <p className="opacity-90 text-[28px] font-bold">{d.vendedor}</p>
            <p className="text-[16px] font-normal opacity-75">{d.cargoVendedor}</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "three-acts",
    title: "Three acts",
    summary: "Past promise · today's risk · client's window",
    icon: <Clock size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>The story we heard</SectionLabel>
        <SlideTitle>Three acts — the Choplife story</SlideTitle>
        <div className="grid grid-cols-3 gap-6">
          <ActCard
            act="Act I · Today"
            title="Performance without the full picture"
            body="Your current HR platform handles performance reviews — self-assessments, manager reviews, peer feedback, and KPIs. But once reviews finish, the insights stay in the system."
            quote="We saw how we can centralize everything from one-on-ones to KPIs, from reviews to peer review and cross-functional feedback."
          />
          <ActCard
            act="Act II · The gap"
            title="Gaps mapped — training disconnected"
            body="After every review cycle, strengths and weaknesses are clear. Mandatory compliance trainings (AML, responsible gaming) run via PDFs and external partners — but there is no link from performance gaps to structured learning."
            quote={d.clientQuote}
          />
          <ActCard
            act="Act III · Now"
            title="Integrate, don't replace"
            body="Mireille's goal is not to switch systems overnight — it is to add Performance + LMS alongside what already works. With proposal and sandbox in hand, the window is 1–2 months to move forward."
            quote="I'm not looking at switching systems — I'm looking at a way of integrating a new system to the ones we already have."
          />
        </div>
      </div>
    ),
  },

  {
    id: "peak-pain",
    title: "Peak pain",
    summary: "Why change · why now · why Factorial",
    icon: <AlertTriangle size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>What drives the decision</SectionLabel>
        <SlideTitle>Three forces driving the decision</SlideTitle>
        <p className="text-[22px] font-normal opacity-75 mb-8 max-w-[1100px]">
          HR teams spend too much time managing reviews and too little acting on insights — training happens in a silo,
          disconnected from performance data.
        </p>
        <div className="grid grid-cols-3 gap-5">
          <FactorialCard
            icon={<Shield size={22} />}
            title="Reviews end — nothing changes"
            body="Performance evaluations finish with gaps mapped, but there is no automated path from action plans to courses. Managers request training manually; HR loses visibility."
            impact="Data disappears — and development stalls"
          />
          <FactorialCard
            icon={<TrendingUp size={22} />}
            title="Compliance training hard to track"
            body="Mandatory AML, responsible gaming, and gambling compliance trainings run via PDFs and external partners. Sessions, expiration dates, and completion are difficult to monitor at scale."
            impact="Regulatory risk · no single source of truth"
          />
          <FactorialCard
            icon={<Clock size={22} />}
            title="Training costs invisible"
            body="External provider fees and internal manager hours teaching sessions are not tracked in one place. No budget control over L&D spend across 150+ employees."
            impact={d.decisionTimeline}
          />
        </div>
      </div>
    ),
  },

  {
    id: "modular-path",
    title: "Modular path",
    summary: "Phase 1 · Phase 2 · Phase 3",
    icon: <Zap size={24} />,
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Not rip-and-replace</SectionLabel>
        <SlideTitle light>Fill the gaps — keep what already works</SlideTitle>
        <p className="text-[20px] font-normal text-foreground/75 mb-5 max-w-[1100px]">
          {d.currentTools} — Factorial enters modularly where the transcript shows gaps.
        </p>
        <div className="border border-foreground/15 bg-primary/[0.03] p-5 mb-6">
          <p className="text-[20px] font-bold text-foreground">{d.demoNote}</p>
        </div>
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
          <div className="grid grid-cols-1 gap-4">
            <FactorialCard
              light
              badge="Phase 1 · Urgent"
              icon={<Target size={22} />}
              title="Performance 2.0 + Trainings / LMS"
              body="Close the loop Mireille asked for: reviews → gap identification → course request → approval → assignment. AI-assisted course creation from your PDFs."
              impact={d.goLiveTarget}
            />
            <FactorialCard
              light
              badge="Phase 2"
              icon={<Users size={22} />}
              title="9-box grid & talent analytics"
              body="Map performance vs potential. Identify rising stars, flight risks, and succession candidates — backed by review data, not spreadsheets."
            />
            <FactorialCard
              light
              badge="Phase 3 · Expand"
              icon={<Check size={22} />}
              title="Engagement & advanced analytics"
              body="Pulse surveys, custom reports, and deeper workforce insights as Choplife scales beyond 150 seats."
              impact={`${d.bundleName} · ${d.bundleModules}`}
            />
          </div>
          <ExpandableImage
            src={factorialModulesImg}
            alt="Factorial HR modules overview"
            title={d.bundleName}
            caption="Modular entry · expand when each phase proves value"
            className="border border-foreground/15 overflow-hidden bg-background h-full min-h-[320px]"
            imgClassName="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    ),
  },

  {
    id: "how-it-fits",
    title: "How it fits",
    summary: "Your stack stays · gaps get filled",
    icon: <Link2 size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Respect what you invested in</SectionLabel>
        <SlideTitle>No rip-and-replace</SlideTitle>
        <p className="text-[22px] font-normal opacity-75 mb-8 max-w-[1100px]">
          Factorial fills the gaps — your existing HR platform and external training partner stay in place.
        </p>
        <div className="border border-white/20">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[18px] font-bold bg-white/5">
            <div className="px-6 py-4 border-b border-white/15 opacity-70">Area</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">Today</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">With Factorial</div>
            {[
              {
                c: "Performance reviews",
                s: "In current HR system",
                f: "Enhanced workflows · 360° · action plans",
              },
              {
                c: "Training & compliance",
                s: "PDFs · external partner · manual tracking",
                f: "LMS · AML & responsible gaming · mobile",
              },
              {
                c: "Gap → learning link",
                s: "Disconnected",
                f: "Request course from review · auto-assign",
              },
              {
                c: "Training budgets",
                s: "No real-time visibility",
                f: "Direct + indirect costs tracked",
              },
              {
                c: "External sessions",
                s: "Links shared manually",
                f: "Virtual sessions · attendance tracked",
              },
              {
                c: "Existing HR stack",
                s: "Flat-fee platform · performance only",
                f: "Integrate alongside · no rip-and-replace",
              },
            ].map((row, i, arr) => (
              <Fragment key={row.c}>
                <div
                  className={`px-6 py-4 flex items-center font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  {row.c}
                </div>
                <div
                  className={`px-6 py-4 flex items-center justify-center gap-2 opacity-70 font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <X size={16} className="shrink-0" /> {row.s}
                </div>
                <div
                  className={`px-6 py-4 flex items-center justify-center gap-2 font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <Check size={16} className="shrink-0 opacity-90" /> {row.f}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "factorial-video",
    title: "Discover Factorial",
    summary: "Product overview",
    icon: <Video size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center items-center h-full px-[100px] text-center">
        <SectionLabel>See it live</SectionLabel>
        <SlideTitle>Discover Factorial — built for teams like {d.empresa}</SlideTitle>
        <div className="w-[960px] h-[540px] mt-2">
          <iframe
            width="960"
            height="540"
            src={`https://www.youtube.com/embed/${d.closingVideoId}`}
            title="Discover Factorial HR Software (English)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-2 border-white/20"
          />
        </div>
      </div>
    ),
  },
];
