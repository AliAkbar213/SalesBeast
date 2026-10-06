import { Link } from "react-router";
import useFetch from "../CustomHooks/useFetch";

const featuredProductImageUrl = "/HY320.PNG";

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
          <div className="page-container grid min-h-152 items-center gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-16">
            <div className="max-w-md">
              <h1 className="font-display text-3xl leading-[1.15] font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Tech that makes every setup better.
              </h1>
              <p className="mt-4 max-w-sm text-sm leading-6 text-stone-400 sm:text-base sm:leading-7">
                Shop projectors, controllers, and everyday tech.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-hover"
                >
                  Shop the collection
                  <ArrowIcon />
                </Link>
                <a
                  href="#about"
                  className="inline-flex items-center py-3 text-sm font-medium text-stone-300 hover:text-white"
                >
                  Why SaleBeast
                </a>
              </div>
            </div>

            <Link
              to="/products/2"
              aria-label="View MagCubic HY320 Smart Projector"
              className="relative mx-auto block w-full max-w-xl border border-white/15 bg-black/20 p-5 transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-6 lg:mr-0"
            >
              <div className="absolute inset-10 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
              <h2 className="relative mb-5 border-b border-white/10 pb-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                MagCubic HY320 Smart Projector
              </h2>
              {featuredProductImageUrl ? (
                <img
                  src={featuredProductImageUrl}
                  alt="MagCubic HY320 Smart Projector"
                  fetchPriority="high"
                  className="relative aspect-square w-full rounded-lg object-contain"
                />
              ) : (
                <div className="relative flex aspect-square w-full items-center justify-center rounded-lg border border-white/10 bg-white/5 p-8 text-center text-sm text-stone-400">
                  Product image coming soon
                </div>
              )}
              <span aria-hidden="true" className="absolute -top-px -left-px size-5 border-t-2 border-l-2 border-primary" />
              <span aria-hidden="true" className="absolute -right-px -bottom-px size-5 border-r-2 border-b-2 border-primary" />
            </Link>
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
