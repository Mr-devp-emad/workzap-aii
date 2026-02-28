import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        <div className="size-3 rounded-full bg-[var(--primary)]" />
        <div className="size-3 rounded-full" style={{ backgroundColor: `var(--primary)`, opacity: 0.6 }} />
      </div>
      <span className="font-(family-name:--font-bricolage) text-xl font-bold tracking-tight">
        WorkZap
      </span>
    </Link>
  );
}
