export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center text-black">
            {/* Main brand title */}
            <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl">
                Alphret
            </h1>

            {/* Core philosophy tagline */}
            <p className="mt-3 text-xs font-medium uppercase tracking-widest text-neutral-400 sm:text-sm">
                Service as a Software
            </p>

            {/* Contact pill button with hover effect */}
            <a
                href="mailto:hello@alphret.io"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-neutral-50/80 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
            >
        <span className="text-base transition-transform duration-200 group-hover:rotate-12">
          ✦
        </span>
                <span>hello@alphret.io</span>
            </a>
        </main>
    );
}
