import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Eye,
  Cpu,
  Brain,
  CircuitBoard,
  Network,
  Bot,
  Rocket,
} from "lucide-react";


import siliconWafer from "./assets/silicon-wafer.jpg";


const NAV = [
  { label: "Home", href: "#home" },
  { label: "Academics", href: "#academics" },
  { label: "Research", href: "#research" },
  { label: "Innovation", href: "#innovation" },
  { label: "HEY BRO", href: "#community" },
  { label: "Contact", href: "#interest" },
];

const PILLARS = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    body: "Architecting the neural foundations of future intelligence.",
    accent: "violet" as const,
    phase: "Phase 2",
  },
  {
    icon: Brain,
    title: "Neuroscience & Brain Tech",
    body: "Mapping the brain to build interface-driven technology.",
    accent: "coral" as const,
    phase: "Phase 1",
  },
  {
    icon: CircuitBoard,
    title: "Semiconductors & Chip Design",
    body: "Designing the next generation of silicon and architecture.",
    accent: "lime" as const,
    phase: "Phase 2",
  },
  {
    icon: Network,
    title: "Neuroinformatics",
    body: "Merging complex biological data with computational power.",
    accent: "muted" as const,
    phase: "Phase 2",
  },
  {
    icon: Bot,
    title: "Robotics & Future Computing",
    body: "Building autonomous systems that perceive and interact.",
    accent: "muted" as const,
    phase: "Phase 2",
  },
  {
    icon: Rocket,
    title: "Deep Tech Startups",
    body: "Incubating the researchers who will lead tomorrow's giants.",
    accent: "muted" as const,
    phase: "Phase 1",
  },
];

const RESEARCH = [
  { label: "AI Healthcare Systems", tag: "001 / CORE", hover: "hover:text-accent-coral" },
  { label: "Neuro Information Systems", tag: "002 / BIO", hover: "hover:text-accent-violet" },
  { label: "Neuropathic Pain Research", tag: "003 / BIO", hover: "hover:text-accent-coral" },
  { label: "Semiconductor Innovation", tag: "004 / HARDWARE", hover: "hover:text-accent-lime" },
  { label: "Human–Machine Intelligence", tag: "005 / CORE", hover: "hover:text-accent-violet" },
];

const accentTokens = {
  violet: { bg: "bg-accent-violet/10", ring: "ring-accent-violet/30", text: "text-accent-violet" },
  coral: { bg: "bg-accent-coral/10", ring: "ring-accent-coral/30", text: "text-accent-coral" },
  lime: { bg: "bg-accent-lime/10", ring: "ring-accent-lime/30", text: "text-accent-lime" },
  muted: { bg: "bg-zinc-800/30", ring: "ring-zinc-700/40", text: "text-zinc-500" },
};


export default function Landing() {
  return (
    <div id="home" className="min-h-screen bg-brand-bg text-brand-text font-sans">
      <Nav />
      <Hero />
      <About />
      <WhyUs />
      <Roadmap />
      <Community />
      <Research />
      <Investors />
      <Interest />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-brand-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg font-semibold tracking-tighter">
          BRO UNIVERSITY
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-brand-text"
            >
              {n.label}
            </a>
          ))}
        </div>
        <a
          href="#interest"
          className="inline-flex items-center gap-2 rounded-none px-3 py-2 text-sm font-medium ring-1 ring-zinc-800 transition-colors hover:ring-zinc-600"
        >
          Join Access
          <ArrowRight className="size-4" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-12">
      <div className="scanline-grid absolute inset-0 -z-10 opacity-60" />
      <div className="synapse-glow absolute inset-0 -z-10" />

      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent-lime">
          India's Deep Tech Frontier
        </span>
        <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tighter text-balance sm:text-7xl lg:text-[7.5rem]">
          HEY BRO.
          <br />
          RACE UP YOUR BRAIN.
        </h1>
        <p className="mx-auto mt-8 max-w-[44ch] text-lg text-zinc-400 text-pretty sm:text-xl">
          India's next-generation deep tech university. A research-driven ecosystem where students
          become innovators, scientists, and creators of future technologies.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#interest"
            className="group inline-flex items-center gap-2 bg-brand-text px-5 py-3 text-sm font-medium text-brand-bg transition-transform hover:-translate-y-0.5"
          >
            Join Early Access
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#academics"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium ring-1 ring-zinc-800 transition-colors hover:bg-zinc-900"
          >
            <Eye className="size-4" />
            Explore Vision
          </a>
        </div>
      </div>

      <HeroMarquee />
    </section>
  );
}

const MARQUEE_ITEMS = [
  "Artificial Intelligence",
  "Neuroscience",
  "Semiconductors",
  "Nanotechnology",
  "Brain–Computer Interfaces",
  "Quantum Computing",
  "Robotics",
  "Deep Tech Startups",
  "Neuroinformatics",
  "Future Computing",
];

function HeroMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 border-y border-zinc-900 bg-brand-bg/40 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((label, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-2xl font-semibold tracking-tight text-zinc-300 sm:text-3xl">
              {label}
            </span>
            <span className="size-1.5 rounded-full bg-accent-violet/60" />
          </div>
        ))}
      </div>
    </div>
  );
}


function About() {
  return (
    <section id="academics" className="border-y border-zinc-900 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-violet">
            01 / The University
          </span>
          <h2 className="font-display mt-4 max-w-[24ch] text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Education for the Next 50 Years
          </h2>
          <p className="mt-6 max-w-[60ch] text-lg text-zinc-400 text-pretty">
            BRO UNIVERSITY is built to bridge the gap between education, research, startups, and
            real-world innovation — an ecosystem where students don't just study technology, they
            build it.
          </p>
        </div>

        <div className="grid gap-px bg-zinc-900 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => {
            const a = accentTokens[p.accent];
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group bg-brand-bg p-8 transition-colors hover:bg-zinc-950"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`mb-12 grid size-10 place-items-center ring-1 ${a.bg} ${a.ring}`}
                  >
                    <Icon className={`size-5 ${a.text}`} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                    {p.phase}
                  </span>
                </div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-4 text-sm text-zinc-500">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="innovation" className="px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-lime">
            02 / Why BRO
          </span>
          <h2 className="font-display mt-4 mb-12 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Built for Future Leaders
          </h2>
          <div className="grid gap-10 sm:grid-cols-2">
            <Pillar
              num="01"
              accent="text-accent-lime"
              title="Research From Day One"
              body="Students won't just study technology — they will build it using industry-grade tools."
            />
            <Pillar
              num="02"
              accent="text-accent-violet"
              title="Future-Focused Programs"
              body="Designed around the multi-trillion dollar industries that will dominate the global economy."
            />
            <Pillar
              num="03"
              accent="text-accent-coral"
              title="Innovation Ecosystem"
              body="Labs, startups, patents, research, and global collaboration — all under one roof."
            />
            <Pillar
              num="04"
              accent="text-zinc-300"
              title="Investor-Ready Vision"
              body="A scalable deep-tech education ecosystem with global potential and clear unit economics."
            />
          </div>
        </div>
        <div className="lg:col-span-5">
          <figure className="relative">
            <img
              src={siliconWafer}
              alt="Macro photograph of an iridescent silicon wafer showing microscopic circuitry"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-sm outline outline-1 -outline-offset-1 outline-white/5 transition-all"
            />
            <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              [ Silicon Wafer / Core Technology ]
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Pillar({
  num,
  accent,
  title,
  body,
}: {
  num: string;
  accent: string;
  title: string;
  body: string;
}) {
  return (
    <div className="space-y-3">
      <h4 className={`font-mono text-[10px] uppercase tracking-widest ${accent}`}>{num} —</h4>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{body}</p>
    </div>
  );
}

function Community() {
  return (
    <section id="community" className="border-y border-zinc-900 bg-zinc-950/40 px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-accent-coral">
          03 / HEY BRO Community
        </span>
        <h2 className="font-display mt-4 text-4xl font-semibold tracking-tighter text-balance sm:text-6xl">
          More Than a University.
          <br />A Movement.
        </h2>
        <p className="mx-auto mt-8 max-w-[52ch] text-lg text-zinc-400">
          HEY BRO is a future innovation community for students, researchers, creators, and dreamers
          who want to shape the future of humanity through technology.
        </p>
        <p className="mt-6 font-display text-2xl tracking-tight text-zinc-300">
          Join the movement. Build the future. <span className="text-accent-lime">Race up your brain.</span>
        </p>
        <a
          href="#interest"
          className="mt-10 inline-flex items-center gap-2 bg-brand-text px-6 py-3 text-sm font-medium text-brand-bg transition-transform hover:-translate-y-0.5"
        >
          Join HEY BRO
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="bg-zinc-950 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-baseline justify-between gap-8 border-b border-zinc-900 pb-12 sm:flex-row">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-violet">
              04 / Research & Impact
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold sm:text-5xl">
              Solving Real Human Problems
            </h2>
          </div>
          <p className="max-w-[30ch] text-sm text-zinc-500">
            Technology should improve human life — not just industries.
          </p>
        </div>
        <ul className="mt-8 divide-y divide-zinc-900">
          {RESEARCH.map((r) => (
            <li
              key={r.label}
              className={`group flex items-center justify-between py-8 transition-colors ${r.hover}`}
            >
              <span className="text-lg font-medium sm:text-xl">{r.label}</span>
              <span className="font-mono text-xs text-zinc-600">{r.tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function useCountUp(target: number, duration = 1400) {
  const [n, setN] = useState(0);
  const startedRef = useRef(false);
  useEffect(() => {
    if (startedRef.current) {
      setN(target);
      return;
    }
    startedRef.current = true;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return n;
}

function Interest() {

  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState<"neuroscience" | "ai" | "semiconductors" | "other">(
    "neuroscience",
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section id="interest" className="px-6 py-32">
      <div className="mx-auto max-w-7xl rounded-sm bg-zinc-900/30 p-8 ring-1 ring-zinc-800/60 sm:p-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-lime">
              05 / Student Interest
            </span>
            <div className="mt-4 font-display text-6xl font-semibold tracking-tighter sm:text-8xl">
              150
              <span className="text-accent-violet">+</span>
            </div>
            <p className="mt-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Students already interested
            </p>
            <p className="mt-8 max-w-[42ch] text-zinc-400">
              The more students engage, the faster we accelerate. Register your interest to signal
              demand for deep-tech education in India.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
              <span className="px-2 py-1 ring-1 ring-accent-coral/30 text-accent-coral">
                Neuroscience · Phase 1
              </span>
              <span className="px-2 py-1 ring-1 ring-zinc-800">AI · Phase 2</span>
              <span className="px-2 py-1 ring-1 ring-zinc-800">Semiconductors · Phase 2</span>
            </div>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col justify-center gap-3">
            <label className="block">
              <span className="sr-only">Full name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                placeholder="Full name"
                className="w-full border border-zinc-800 bg-zinc-950 px-5 py-4 text-sm placeholder:text-zinc-600 focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet"
              />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                placeholder="Email address"
                className="w-full border border-zinc-800 bg-zinc-950 px-5 py-4 text-sm placeholder:text-zinc-600 focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet"
              />
            </label>
            <label className="block">
              <span className="sr-only">Program of interest</span>
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value as typeof program)}
                className="w-full border border-zinc-800 bg-zinc-950 px-5 py-4 text-sm focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet"
              >
                <option value="neuroscience">Neuroscience (Phase 1 — open now)</option>
                <option value="ai">AI & Machine Learning (Phase 2)</option>
                <option value="semiconductors">Semiconductors (Phase 2)</option>
                <option value="other">Something else</option>
              </select>
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="mt-1 bg-brand-text py-4 text-sm font-medium text-brand-bg transition-transform active:scale-[0.98] disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit Interest"}
            </button>
            <p className="text-[11px] text-zinc-600">
              We use your details only to update you on BRO UNIVERSITY. No spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const ROADMAP = [
  {
    year: "2025",
    phase: "Phase 01",
    title: "Neuroscience School Launch",
    body: "Open India's first deep-tech focused Neuroscience school with industry-grade labs and a founding research cohort.",
    accent: "text-accent-coral",
    ring: "ring-accent-coral/30",
  },
  {
    year: "2026",
    phase: "Phase 02",
    title: "AI & Semiconductor Schools",
    body: "Expand into AI and Semiconductor schools, establish chip-design fabrication partnerships and launch the HEY BRO incubator.",
    accent: "text-accent-violet",
    ring: "ring-accent-violet/30",
  },
  {
    year: "2027+",
    phase: "Phase 03",
    title: "Global Research Network",
    body: "Scale to a multi-campus deep-tech ecosystem with patents, spin-out startups, and international research alliances.",
    accent: "text-accent-lime",
    ring: "ring-accent-lime/30",
  },
];

function Roadmap() {
  return (
    <section id="roadmap" className="border-y border-zinc-900 bg-zinc-950/40 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-baseline justify-between gap-6 sm:flex-row">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-violet">
              05 / Roadmap
            </span>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              The Build Sequence
            </h2>
          </div>
          <p className="max-w-[36ch] text-sm text-zinc-500">
            A staged rollout — start narrow, prove the model, then scale to a full deep-tech ecosystem.
          </p>
        </div>

        <ol className="grid gap-px bg-zinc-900 sm:grid-cols-3">
          {ROADMAP.map((r) => (
            <li key={r.year} className="bg-brand-bg p-8">
              <div className={`inline-flex items-center gap-2 px-2 py-1 ring-1 ${r.ring}`}>
                <span className={`font-mono text-[10px] uppercase tracking-widest ${r.accent}`}>
                  {r.phase}
                </span>
              </div>
              <div className="font-display mt-8 text-5xl font-semibold tracking-tighter sm:text-6xl">
                {r.year}
              </div>
              <h3 className="mt-6 text-lg font-medium">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{r.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const INVESTOR_STATS = [
  { kpi: "$1T+", label: "Combined TAM across AI, neuro & semiconductors" },
  { kpi: "1.4B", label: "India's population — largest untapped deep-tech talent pool" },
  { kpi: "Phase 1", label: "Neuroscience school opens first — capital-efficient launch" },
  { kpi: "10x", label: "Target outcome multiple for pre-seed backers" },
];

function Investors() {
  return (
    <section id="investors" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-lime">
              07 / For Investors
            </span>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              A Generational Bet on Indian Deep Tech.
            </h2>
            <p className="mt-6 max-w-[44ch] text-zinc-400">
              BRO UNIVERSITY is raising a pre-seed round to launch Phase 1. We're building a
              scalable, IP-driven education ecosystem with clear unit economics and a defensible
              position in research-led universities.
            </p>
            <a
              href="mailto:partners@brouniversity.in"
              className="mt-10 inline-flex items-center gap-2 bg-brand-text px-5 py-3 text-sm font-medium text-brand-bg transition-transform hover:-translate-y-0.5"
            >
              Request Investor Deck
              <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="lg:col-span-7">
            <dl className="grid gap-px bg-zinc-900 sm:grid-cols-2">
              {INVESTOR_STATS.map((s) => (
                <div key={s.label} className="bg-brand-bg p-8">
                  <dt className="font-display text-5xl font-semibold tracking-tighter text-accent-violet sm:text-6xl">
                    {s.kpi}
                  </dt>
                  <dd className="mt-4 text-sm text-zinc-400">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {

  return (
    <section className="px-6 py-40 text-center">
      <div className="mx-auto max-w-4xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent-violet">
          The future will belong to innovators
        </span>
        <h2 className="font-display mt-6 text-5xl font-semibold leading-[0.95] tracking-tighter text-balance sm:text-7xl">
          HEY BRO, THE FUTURE STARTS HERE.
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-zinc-400">
          BRO UNIVERSITY is building a next-generation ecosystem where education meets intelligence,
          research, and future technology.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href="#interest"
            className="inline-flex items-center gap-2 bg-brand-text px-6 py-4 text-sm font-medium text-brand-bg transition-transform hover:-translate-y-0.5"
          >
            Become an Early Supporter
            <ArrowRight className="size-4" />
          </a>
          <a
            href="mailto:partners@brouniversity.in"
            className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium ring-1 ring-zinc-800 transition-colors hover:bg-zinc-900"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-900 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-12 sm:flex-row">
          <div className="space-y-6">
            <span className="font-display text-2xl font-semibold tracking-tighter">
              BRO UNIVERSITY
            </span>
            <p className="max-w-[36ch] text-sm text-zinc-500 text-pretty">
              A scalable deep-tech education ecosystem built around the world's fastest-growing
              industries.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-200">
                Ecosystem
              </span>
              <a href="#academics" className="text-sm text-zinc-500 hover:text-brand-text">
                Schools
              </a>
              <a href="#research" className="text-sm text-zinc-500 hover:text-brand-text">
                Research
              </a>
              <a href="#community" className="text-sm text-zinc-500 hover:text-brand-text">
                HEY BRO
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-200">
                Contact
              </span>
              <a
                href="mailto:hello@brouniversity.in"
                className="text-sm text-zinc-500 hover:text-brand-text"
              >
                hello@brouniversity.in
              </a>
              <a
                href="mailto:partners@brouniversity.in"
                className="text-sm text-zinc-500 hover:text-brand-text"
              >
                Partnerships
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-zinc-900/60 pt-8 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
          <span>© {new Date().getFullYear()} BRO University</span>
          <span>HEY BRO. Race Up Your Brain.</span>
        </div>
      </div>
    </footer>
  );
}