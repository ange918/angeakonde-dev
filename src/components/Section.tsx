type Props = {
  id?: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, eyebrow, children, className }: Props) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className ?? ""}`}>
      <div className="mb-8 sm:mb-10">
        {eyebrow ? (
          <div className="muted text-xs tracking-[0.28em] uppercase">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

