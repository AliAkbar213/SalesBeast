import { Link } from "react-router";
import useFetch from "../CustomHooks/useFetch";

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Home = () => {
  const { data, loading, error } = useFetch(
    import.meta.env.VITE_API_URL + "/api/products/categories"
  );

  return (
    <div className="min-h-screen bg-background text-text-main">
      <main>
        <section className="relative isolate overflow-hidden border-b border-white/10 bg-brand-dark text-text-light">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-size-[64px_64px]" />
          <div className="page-container grid min-h-152 items-center gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
            <div className="max-w-2xl">
              <p className="mb-6 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-orange-400"><span aria-hidden="true" className="h-px w-8 bg-primary" />Gear up. Power on.</p>
              <h1 className="font-display text-5xl leading-[1.02] font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Tech that makes every setup <span className="text-orange-400">better.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-stone-300 sm:text-lg">
                Projectors, controllers, and smart accessories selected for great performance without the guesswork.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-white hover:bg-primary-hover"
                >
                  Shop the collection
                  <ArrowIcon />
                </Link>
                <a
                  href="#about"
                  className="inline-flex items-center rounded-md border border-white/20 px-6 py-3.5 text-sm font-bold text-white hover:border-white/40 hover:bg-white/5"
                >
                  Why SaleBeast
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md border border-white/15 bg-black/20 p-5 sm:p-7 lg:mr-0">
              <div className="absolute inset-10 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
              <div className="relative mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400">
                <span>SaleBeast / Setup essentials</span>
                <span aria-hidden="true" className="size-1.5 shrink-0 bg-primary" />
              </div>
              <img
                src="/salebeast-logo.png"
                alt="SaleBeast"
                className="relative aspect-square w-full rounded-lg object-cover"
              />
              <div className="relative mt-5 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-widest text-stone-400">
                Watch. Play. Connect.
              </div>
              <span aria-hidden="true" className="absolute -top-px -left-px size-5 border-t-2 border-l-2 border-primary" />
              <span aria-hidden="true" className="absolute -right-px -bottom-px size-5 border-r-2 border-b-2 border-primary" />
            </div>
          </div>
        </section>

        <section id="categories" className="page-container scroll-mt-20 py-16 sm:py-24">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-3">Shop by category</p>
              <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">Find your next upgrade.</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover">
              View all products
              <ArrowIcon />
            </Link>
          </div>

          {loading && (
            <div role="status" aria-label="Loading categories" className="grid gap-4 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} aria-hidden="true" className="min-h-80 animate-pulse rounded-lg border border-border bg-surface p-6 motion-reduce:animate-none sm:p-8">
                  <div className="size-11 rounded-md bg-surface-muted" />
                  <div className="my-6 h-32 rounded-md bg-surface-muted" />
                  <div className="h-6 w-2/3 rounded bg-surface-muted" />
                </div>
              ))}
            </div>
          )}

          {error && !loading && (
            <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-6 text-sm font-medium text-red-700">
              Unable to load categories.
            </p>
          )}

          {data && !loading && !error && data.length === 0 && (
            <p className="rounded-lg border border-border bg-surface p-6 text-sm text-text-muted">
              No categories available yet.
            </p>
          )}

          {data && !loading && !error && data.length > 0 && (
            <div className="grid gap-4 md:grid-cols-3">
              {data.map((category, index) => (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="group relative flex min-h-64 min-w-0 flex-col justify-between gap-6 overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary hover:bg-primary-soft/40 sm:p-8"
                >
                  <span className="flex size-11 items-center justify-center rounded-md border border-primary/20 bg-primary-soft font-mono text-xs font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-40 items-center justify-center overflow-hidden rounded-md bg-surface-muted/40 p-4">
                    {category.image ? (
                      <img
                        src={'${category.image}'}
                        alt={category.name || "Category image"}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-[1.02] motion-reduce:transform-none"
                      />
                    ) : (
                      <span className="font-mono text-xs uppercase tracking-widest text-text-muted">No image</span>
                    )}
                  </div>
                  <span>
                    <span className="block wrap-break-word text-2xl font-black tracking-[-0.035em] group-hover:text-primary">
                      {category.name}
                    </span>
                    <span className="mt-3 flex items-center justify-between gap-3 text-sm text-text-muted">
                      Explore collection
                      <ArrowIcon />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>

        <section id="about" className="scroll-mt-20 border-y border-border bg-surface-muted/60">
          <div className="page-container grid gap-10 py-16 md:grid-cols-3 md:py-20">
            <div>
              <p className="eyebrow mb-3">Built for better setups</p>
              <h2 className="text-3xl font-black tracking-[-0.04em]">Simple tech. Solid value.</h2>
            </div>
            <p className="border-l-2 border-primary pl-6 text-base leading-8 text-text-muted md:col-span-2 md:max-w-2xl">
              SaleBeast focuses on useful electronics that add something to your desk, living room, or gaming space. Clear choices, dependable gear, and no unnecessary complexity.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-brand-dark py-8 text-text-light">
        <div className="page-container flex flex-col gap-3 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SaleBeast. All rights reserved.</p>
          <p>Electronics for everyday setups.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
