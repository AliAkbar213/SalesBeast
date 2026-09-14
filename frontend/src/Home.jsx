const categories = [
  { name: "Projectors", label: "Bring the big screen home" },
  { name: "Gamepads", label: "Play with better control" },
  { name: "Accessories", label: "Complete your setup" },
];

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BagIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2">
    <path d="M6 8h12l1 12H5L6 8Z" strokeLinejoin="round" />
    <path d="M9 9V6a3 3 0 0 1 6 0v3" strokeLinecap="round" />
  </svg>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-text-main">
      <header className="border-b border-border bg-surface">
        <div className="page-container flex h-18 items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3" aria-label="SaleBeast home">
            <img
              src="/salebeast-mark.png"
              alt=""
              className="size-10 rounded-lg bg-brand-dark object-cover"
            />
            <span className="text-lg font-black tracking-[-0.04em] text-brand-dark">
              SALE<span className="text-primary">BEAST</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a className="hover:text-primary" href="#categories">Shop</a>
            <a className="hover:text-primary" href="#categories">Categories</a>
            <a className="hover:text-primary" href="#about">About</a>
          </nav>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-surface hover:border-primary hover:text-primary"
            aria-label="Open shopping bag"
          >
            <BagIcon />
          </button>
        </div>
      </header>

      <main>
        <section className="overflow-hidden bg-brand-dark text-text-light">
          <div className="page-container grid min-h-[38rem] items-center gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5">Gear up. Power on.</p>
              <h1 className="font-display text-5xl leading-[0.98] font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Tech that makes every setup better.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-stone-300 sm:text-lg">
                Projectors, controllers, and smart accessories selected for great performance without the guesswork.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#categories"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white hover:bg-primary-hover"
                >
                  Shop the collection
                  <ArrowIcon />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-bold text-white hover:border-white/40 hover:bg-white/5"
                >
                  Why SaleBeast
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:mr-0">
              <div className="absolute inset-10 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
              <img
                src="/salebeast-logo.png"
                alt="SaleBeast"
                className="relative aspect-square w-full rounded-3xl border border-white/10 object-cover shadow-2xl shadow-black/40"
              />
            </div>
          </div>
        </section>

        <section id="categories" className="page-container py-20 sm:py-24">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-3">Shop by category</p>
              <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">Find your next upgrade.</h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover">
              View all products
              <ArrowIcon />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {categories.map((category, index) => (
              <a
                key={category.name}
                href="#"
                className="group flex min-h-56 flex-col justify-between rounded-2xl border border-border bg-surface p-6 hover:border-primary"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary-soft text-sm font-black text-primary">
                  0{index + 1}
                </span>
                <span>
                  <span className="block text-2xl font-black tracking-[-0.035em] group-hover:text-primary">
                    {category.name}
                  </span>
                  <span className="mt-1 flex items-center justify-between text-sm text-text-muted">
                    {category.label}
                    <ArrowIcon />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-border bg-surface">
          <div className="page-container grid gap-10 py-16 md:grid-cols-3 md:py-20">
            <div>
              <p className="eyebrow mb-3">Built for better setups</p>
              <h2 className="text-3xl font-black tracking-[-0.04em]">Simple tech. Solid value.</h2>
            </div>
            <p className="text-sm leading-7 text-text-muted md:col-span-2 md:max-w-2xl">
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
