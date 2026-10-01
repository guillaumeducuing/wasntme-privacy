// Mascotte de WasntMe : regarde ailleurs en sifflotant (même dessin que l'extension)
export function Mascot({ size = 32, whistle = false }: { size?: number; whistle?: boolean }) {
  const big = size > 48;
  return (
    <svg
      className="mascot"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      strokeWidth={big ? 1.4 : 2.2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle className="m-face" cx="16" cy="16" r={big ? 14 : 13.5} />
      <circle className="m-face" cx="11" cy="13" r="3.4" />
      <circle className="m-face" cx="21" cy="13" r="3.4" />
      <circle className="m-ink" cx="12.8" cy="11.6" r="1.4" />
      <circle className="m-ink" cx="22.8" cy="11.6" r="1.4" />
      <circle cx="19" cy="22" r={whistle ? 1.8 : 2} />
      {whistle && <path d="M23 21.5c1-.8 1.8-.8 2.6 0M24 18.6c.9-.5 1.6-.4 2.2.2" />}
    </svg>
  );
}
