import Link from "next/link";

export default function TackPage() {
  return (
    <div className="min-h-screen bg-[#f8f4ee] px-6 py-10 text-neutral-900 md:px-10 md:py-14">
      <main className="mx-auto max-w-3xl rounded-3xl border border-[#183a2f]/20 bg-white p-8 text-center shadow-sm md:p-12">
        <span className="inline-flex rounded-full bg-[#f2ebe2] px-4 py-1 text-sm font-medium text-[#183a2f]">
          Tack för din förfrågan
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Ditt meddelande är skickat
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          Tack för att du kontaktade Italia Språkstöd Sverige. Jag återkommer så snart jag kan.
        </p>
        <p className="mt-2 leading-relaxed text-neutral-700">
          Vid brådskande ärende kan du ringa{" "}
          <a href="tel:+46707273699" className="font-medium underline">
            070-727 36 99
          </a>
          .
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-full bg-[#183a2f] px-6 py-3 font-medium text-white transition hover:bg-[#225140]"
          >
            Tillbaka till startsidan
          </Link>
        </div>
      </main>
    </div>
  );
}
