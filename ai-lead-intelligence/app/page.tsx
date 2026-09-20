const problems = [
  "Manual data entry",
  "Repeated follow-ups",
  "Disconnected tools",
  "Time-consuming reports",
  "Missed opportunities",
  "Repetitive admin work",
];

const services = [
  {
    number: "01",
    title: "AI Workflow Automation",
    description:
      "Connect business processes, tools and data so repetitive work happens automatically.",
  },
  {
    number: "02",
    title: "AI Agents",
    description:
      "Build intelligent systems that can understand information, make decisions and trigger actions.",
  },
  {
    number: "03",
    title: "Document Intelligence",
    description:
      "Turn PDFs, forms and business documents into structured, usable information.",
  },
  {
    number: "04",
    title: "AI Knowledge Systems",
    description:
      "Help teams find answers from their internal documents, knowledge and business data.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand the problem",
    description: "We first understand where time is being lost.",
  },
  {
    number: "02",
    title: "Map the workflow",
    description: "We break the current process into clear steps.",
  },
  {
    number: "03",
    title: "Find automation opportunities",
    description: "We identify repetitive work that AI and automation can handle.",
  },
  {
    number: "04",
    title: "Build the system",
    description: "We turn the workflow into a practical working solution.",
  },
  {
    number: "05",
    title: "Integrate existing tools",
    description: "We connect the system with the tools the business already uses.",
  },
  {
    number: "06",
    title: "Measure the result",
    description: "We look at time saved, work reduced and workflow improvements.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#111111]">
      {/* NAVIGATION */}
      <nav className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#top"
            className="text-lg font-semibold tracking-tight"
          >
            Your Brand
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#solutions" className="transition hover:opacity-60">
              Solutions
            </a>
            <a href="#projects" className="transition hover:opacity-60">
              Projects
            </a>
            <a href="#process" className="transition hover:opacity-60">
              How we work
            </a>
            <a href="#about" className="transition hover:opacity-60">
              About
            </a>
            <a
              href="#contact"
              className="rounded-full bg-black px-5 py-2.5 text-white transition hover:bg-black/80"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-black px-4 py-2 text-sm text-white md:hidden"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-black/50">
              AI • Automation • Intelligent Systems
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Turn repetitive work into intelligent workflows.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
              We build AI-powered systems that connect business processes,
              tools and data — so teams spend less time on repetitive work.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-black px-7 py-3.5 text-center text-sm font-medium text-white transition hover:bg-black/80"
              >
                Talk to us
              </a>

              <a
                href="#projects"
                className="rounded-full border border-black/15 px-7 py-3.5 text-center text-sm font-medium transition hover:bg-black hover:text-white"
              >
                See what we build
              </a>
            </div>
          </div>

          {/* WORKFLOW VISUAL */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-black/40">
              From manual work to automation
            </p>

            <div className="space-y-3">
              {[
                ["01", "Lead / Data", "Information enters the business"],
                ["02", "AI", "Information is understood"],
                ["03", "Decision", "The system identifies what should happen"],
                ["04", "Automation", "The workflow is triggered"],
                ["05", "Action", "The right action happens"],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-black/10 bg-[#f7f7f4] p-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs text-black/35">{number}</span>
                    <div>
                      <p className="font-medium">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-black/50">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40">
                The problem
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Business work shouldn't feel this complicated.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-black/55">
                Businesses lose valuable time when people repeatedly move
                information between tools, answer the same questions,
                update spreadsheets and manually follow up with customers.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="rounded-2xl border border-black/10 p-5"
                >
                  <span className="text-sm text-black/60">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40">
            What we build
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            We connect the pieces.
          </h2>

          <p className="mt-6 text-base leading-7 text-black/55">
            Practical AI systems designed around real business workflows —
            not AI for the sake of AI.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-3xl border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm text-black/30">
                  {service.number}
                </span>

                <span className="text-2xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-y border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              How we work
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Start with the problem.
              <br />
              Build around the workflow.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-black p-7"
              >
                <span className="text-sm text-white/35">
                  {step.number}
                </span>

                <h3 className="mt-12 text-xl font-medium">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40">
              First system
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              AI Lead Intelligence
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-black/55">
              A system that helps businesses understand incoming leads,
              identify intent, prioritize opportunities and recommend the
              next action.
            </p>

            <div className="mt-8 space-y-3 text-sm text-black/60">
              <p>→ Lead arrives</p>
              <p>→ AI understands the enquiry</p>
              <p>→ Information is extracted</p>
              <p>→ Lead is categorized and scored</p>
              <p>→ Recommended action is generated</p>
              <p>→ Workflow can be triggered</p>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-[#f7f7f4] p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                Example lead
              </p>

              <p className="mt-4 text-sm leading-7 text-black/70">
                "Hi, I'm looking for a Python course for my daughter.
                Can you tell me the fees and next batch?"
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 p-5">
                <p className="text-xs text-black/35">Intent</p>
                <p className="mt-2 font-medium">Course enquiry</p>
              </div>

              <div className="rounded-2xl border border-black/10 p-5">
                <p className="text-xs text-black/35">Priority</p>
                <p className="mt-2 font-medium">High intent</p>
              </div>

              <div className="rounded-2xl border border-black/10 p-5">
                <p className="text-xs text-black/35">Lead score</p>
                <p className="mt-2 font-medium">87 / 100</p>
              </div>

              <div className="rounded-2xl border border-black/10 p-5">
                <p className="text-xs text-black/35">Next action</p>
                <p className="mt-2 font-medium">Send course details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40">
                About
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                We believe the best AI solutions start with a real business
                problem.
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-8 text-black/55">
                Instead of building technology just because it is possible,
                we focus on understanding how work actually happens. Then we
                use AI, automation and software to remove unnecessary manual
                steps and make the workflow better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="rounded-[2rem] bg-black px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Start a conversation
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Have a repetitive workflow?
            <br />
            Let's see if we can automate it.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
            Tell us what your team does manually today. We can explore where
            AI and automation could help.
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-9 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            hello@example.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 Your Brand. All rights reserved.</p>

          <p>AI • Automation • Intelligent Systems</p>
        </div>
      </footer>
    </main>
  );
}
