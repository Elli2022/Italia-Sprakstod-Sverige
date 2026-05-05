const services = [
  {
    title: "Dokumentoversattning",
    description:
      "Oversattning av intyg, myndighetsdokument, avtal och privata handlingar mellan svenska och italienska.",
  },
  {
    title: "Tolkning och medling",
    description:
      "Sprakstod i samtal mellan familjer, foretag och myndigheter med fokus pa tydlighet och forstaelse.",
  },
  {
    title: "Radslag kring Italien",
    description:
      "Praktisk vagledning om hur processer i Italien fungerar, till exempel kontakter med institutioner och administration.",
  },
];

const timeline = [
  "Uppvuxen i Angelholm och studerade italienska pa gymnasiet i Sverige.",
  "Flyttade till Italien vid 18 ars alder och studerade i Florens pa Universita per Stranieri.",
  "Bodde i Italien i 13 ar (1981-1994) och byggde djup kulturell och spraklig forankring.",
  "Fortsatta italienskstudier i slutet av 90-talet.",
  "Yrkesverksam tolk for Semantix (2001-2016) och Sprakservice (2013-2015).",
];

export default function Home() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-10 md:px-10">
        <header className="mb-16 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-wide text-neutral-100">
              Skoldebrink Italia Sprakstod
            </p>
            <p className="mt-1 rounded-full border border-neutral-700 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-300">
              Svensk-italiensk tolkning och oversattning
            </p>
          </div>
          <a
            href="#kontakt"
            className="rounded-full bg-neutral-100 px-5 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-300"
          >
            Kontakta oss
          </a>
        </header>

        <section className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Erfaren italiensk tolk med over 15 ars professionell erfarenhet
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-neutral-300">
              Personlig och trygg hjalp for privatpersoner och foretag som
              behover sprakstod mellan Sverige och Italien.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#tjanster"
                className="rounded-full border border-neutral-600 px-5 py-2 text-sm transition hover:border-neutral-300"
              >
                Se tjanster
              </a>
              <a
                href="mailto:cecilia.skoldebrink@gmail.com"
                className="rounded-full border border-neutral-600 px-5 py-2 text-sm transition hover:border-neutral-300"
              >
                cecilia.skoldebrink@gmail.com
              </a>
              <a
                href="tel:+46707273699"
                className="rounded-full border border-neutral-600 px-5 py-2 text-sm transition hover:border-neutral-300"
              >
                0707273699
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <p className="text-sm uppercase tracking-widest text-neutral-400">
              Tillganglighet
            </p>
            <ul className="mt-4 space-y-3 text-sm text-neutral-200">
              <li>- Distans och pa plats enligt overenskommelse</li>
              <li>- Uppdrag for bade privatpersoner och foretag</li>
              <li>- Snabb aterkoppling och tydlig offert</li>
            </ul>
          </div>
        </section>

        <section id="tjanster" className="mt-24">
          <h2 className="text-3xl font-semibold">Tjanster</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
              >
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Om tolken</h2>
            <p className="mt-4 text-neutral-300">
              Med en livsbakgrund i bade Sverige och Italien erbjuds spraklig
              precision tillsammans med kulturell forstaelse. Det ger trygga
              processer nar kommunikation maste bli ratt fran borjan.
            </p>
          </div>
          <ol className="space-y-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-sm text-neutral-200">
            {timeline.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ol>
        </section>

        <section id="kontakt" className="mt-24 rounded-3xl border border-neutral-700 bg-neutral-900 p-8">
          <h2 className="text-3xl font-semibold">Kontakt</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-300">
            Beskriv vad du behover hjalp med sa aterkommer vi med forslag pa
            upplagg och pris.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:cecilia.skoldebrink@gmail.com"
              className="rounded-full border border-neutral-700 px-4 py-2 transition hover:border-neutral-400"
            >
              cecilia.skoldebrink@gmail.com
            </a>
            <a
              href="tel:+46707273699"
              className="rounded-full border border-neutral-700 px-4 py-2 transition hover:border-neutral-400"
            >
              0707273699
            </a>
          </div>

          <form
            className="mt-8 grid gap-4 md:grid-cols-2"
            action="mailto:cecilia.skoldebrink@gmail.com"
            method="post"
            encType="text/plain"
          >
            <input
              className="rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm outline-none ring-neutral-500 placeholder:text-neutral-500 focus:ring"
              name="Namn"
              type="text"
              placeholder="Ditt namn"
              required
            />
            <input
              className="rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm outline-none ring-neutral-500 placeholder:text-neutral-500 focus:ring"
              name="E-post"
              type="email"
              placeholder="din@email.se"
              required
            />
            <input
              className="rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm outline-none ring-neutral-500 placeholder:text-neutral-500 focus:ring md:col-span-2"
              name="Arende"
              type="text"
              placeholder="Till exempel: oversattning av intyg"
              required
            />
            <textarea
              className="min-h-36 rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm outline-none ring-neutral-500 placeholder:text-neutral-500 focus:ring md:col-span-2"
              name="Meddelande"
              placeholder="Beratta kort om ditt arende"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-neutral-100 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-300 md:col-span-2 md:w-fit"
            >
              Skicka forfragan
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
