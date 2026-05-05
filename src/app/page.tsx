import Image from "next/image";

const services = [
  {
    title: "Dokumentöversättning",
    description:
      "Översättning av intyg, myndighetsdokument, avtal och privata handlingar mellan svenska och italienska.",
  },
  {
    title: "Tolkning och medling",
    description:
      "Språkstöd i samtal mellan familjer, företag och myndigheter med fokus på tydlighet och förståelse.",
  },
  {
    title: "Rådslag kring Italien",
    description:
      "Praktisk vägledning om hur processer i Italien fungerar, till exempel kontakter med institutioner och administration.",
  },
];

const timeline = [
  "Uppvuxen i Ängelholm och studerade italienska på gymnasiet i Sverige.",
  "Flyttade till Italien vid 18 års ålder och studerade i Florens på Università per Stranieri.",
  "Bodde i Italien i 13 år (1981–1994) och byggde djup kulturell och språklig förankring.",
  "Fortsatta italienskstudier i slutet av 90-talet.",
  "Yrkesverksam tolk för Semantix (2001–2016) och Språkservice (2013–2015).",
];

export default function Home() {
  return (
    <div className="bg-[#f8f4ee] text-neutral-900">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-8 md:px-10">
        <header className="mb-14 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-wide text-[#183a2f]">
              Italia Språkstöd Sverige
            </p>
            <p className="w-fit rounded-full border border-[#183a2f]/30 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#8b1e1e]">
              Svensk-italiensk tolkning och översättning
            </p>
          </div>
          <a
            href="#kontakt"
            className="rounded-full bg-[#183a2f] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#225140]"
          >
            Kontakta oss
          </a>
        </header>

        <section className="grid gap-10 md:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#8b1e1e]">
              Benvenuti – välkommen
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl md:leading-[1.05]">
              Erfaren italiensk tolk med ett hjärta i både Sverige och Italien
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-neutral-700">
              Personlig och trygg hjälp för privatpersoner och företag som
              behöver språkstöd mellan Sverige och Italien.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#tjanster"
                className="rounded-full border border-[#183a2f]/35 bg-white px-5 py-2 text-sm transition hover:border-[#183a2f]"
              >
                Se tjänster
              </a>
              <a
                href="mailto:cecilia.skoldebrink@gmail.com"
                className="rounded-full border border-[#183a2f]/35 bg-white px-5 py-2 text-sm transition hover:border-[#183a2f]"
              >
                cecilia.skoldebrink@gmail.com
              </a>
              <a
                href="tel:+46707273699"
                className="rounded-full border border-[#183a2f]/35 bg-white px-5 py-2 text-sm transition hover:border-[#183a2f]"
              >
                0707273699
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#183a2f]/20 bg-white shadow-sm">
            <div className="relative h-72 w-full">
              <Image
                src="/cecilia-portrait-placeholder.svg"
                alt="Porträtt av Cecilia"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3">
              <div className="h-2 bg-[#1e7a49]" />
              <div className="h-2 bg-white" />
              <div className="h-2 bg-[#c53434]" />
            </div>
            <div className="p-6">
              <p className="text-sm uppercase tracking-widest text-neutral-500">
                Tillgänglighet
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>- Distans och på plats enligt överenskommelse</li>
                <li>- Uppdrag för både privatpersoner och företag</li>
                <li>- Snabb återkoppling och tydlig offert</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-[#183a2f]/20 bg-white p-5">
            <p className="text-sm font-semibold text-[#183a2f]">1981-1994</p>
            <p className="mt-2 text-sm text-neutral-700">
              13 år i Italien med språklig och kulturell förankring i vardagen.
            </p>
          </article>
          <article className="rounded-2xl border border-[#183a2f]/20 bg-white p-5">
            <p className="text-sm font-semibold text-[#183a2f]">Semantix</p>
            <p className="mt-2 text-sm text-neutral-700">
              Tolkuppdrag mellan 2001 och 2016 i olika professionella sammanhang.
            </p>
          </article>
          <article className="rounded-2xl border border-[#183a2f]/20 bg-white p-5">
            <p className="text-sm font-semibold text-[#183a2f]">Språkservice</p>
            <p className="mt-2 text-sm text-neutral-700">
              Aktiv tolk 2013–2015 med fokus på trygg kommunikation.
            </p>
          </article>
        </section>

        <section id="tjanster" className="mt-24">
          <h2 className="text-3xl font-semibold">Tjänster</h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Professionellt språkstöd med personlig och varm service – anpassat
            efter varje uppdrag.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-[#183a2f]/20 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-700">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-[#183a2f]/20 bg-white shadow-sm">
            <div className="relative h-72 w-full">
              <Image
                src="/florence-postcard.svg"
                alt="Illustration inspirerad av Florens"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 text-sm text-neutral-600">
              Florens – staden där Cecilias resa med italienska tog fart.
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Om Cecilia</h2>
            <p className="mt-4 leading-8 text-neutral-700">
              Cecilia är född 1962 och uppvuxen i Ängelholm. Hon studerade
              italienska redan på gymnasiet i Sverige och flyttade till Italien
              vid 18 års ålder för fortsatta studier i Florens på Università per
              i Stranieri. Där byggde hon upp en djup språklig trygghet, träffade
              sin framtida make och bodde i Italien i 13 år.
            </p>
            <p className="mt-4 leading-8 text-neutral-700">
              Efter vidare studier i italienska i slutet av 90-talet arbetade hon
              professionellt som tolk för Semantix och Språkservice under många år.
              Idag erbjuder hon samma kvalitet med ett personligt bemötande.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <ol className="space-y-3 rounded-2xl border border-[#183a2f]/20 bg-white p-6 text-sm text-neutral-700">
            {timeline.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ol>
        </section>

        <section
          id="kontakt"
          className="mt-24 rounded-3xl border border-[#183a2f]/20 bg-white p-8 shadow-sm"
        >
          <h2 className="text-3xl font-semibold">Kontakt</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-700">
            Beskriv vad du behöver hjälp med så återkommer vi med förslag på
            upplägg och pris.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:cecilia.skoldebrink@gmail.com"
              className="rounded-full border border-[#183a2f]/30 px-4 py-2 transition hover:border-[#183a2f]"
            >
              cecilia.skoldebrink@gmail.com
            </a>
            <a
              href="tel:+46707273699"
              className="rounded-full border border-[#183a2f]/30 px-4 py-2 transition hover:border-[#183a2f]"
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
              className="rounded-xl border border-[#183a2f]/30 bg-[#fcfbf8] px-4 py-3 text-sm outline-none ring-[#183a2f] placeholder:text-neutral-500 focus:ring"
              name="Namn"
              type="text"
              placeholder="Ditt namn"
              required
            />
            <input
              className="rounded-xl border border-[#183a2f]/30 bg-[#fcfbf8] px-4 py-3 text-sm outline-none ring-[#183a2f] placeholder:text-neutral-500 focus:ring"
              name="E-post"
              type="email"
              placeholder="din@email.se"
              required
            />
            <input
              className="rounded-xl border border-[#183a2f]/30 bg-[#fcfbf8] px-4 py-3 text-sm outline-none ring-[#183a2f] placeholder:text-neutral-500 focus:ring md:col-span-2"
              name="Ärende"
              type="text"
              placeholder="Till exempel: översättning av intyg"
              required
            />
            <textarea
              className="min-h-36 rounded-xl border border-[#183a2f]/30 bg-[#fcfbf8] px-4 py-3 text-sm outline-none ring-[#183a2f] placeholder:text-neutral-500 focus:ring md:col-span-2"
              name="Meddelande"
              placeholder="Berätta kort om ditt ärende"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-[#183a2f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#225140] md:col-span-2 md:w-fit"
            >
              Skicka förfrågan
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
