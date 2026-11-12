export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#111111] py-5">
      <div className="mask-fade flex whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.48em] text-ivory/60">
        <div className="animate-marquee flex min-w-max gap-12 px-3">
          <span>Branding</span>
          <span>✦</span>
          <span>Illustration</span>
          <span>✦</span>
          <span>Motion</span>
          <span>✦</span>
          <span>Web Design</span>
          <span>✦</span>
          <span>Strategy</span>
          <span>✦</span>
          <span>Content</span>
          <span>✦</span>
        </div>
        <div className="animate-marquee flex min-w-max gap-12 px-3" aria-hidden="true">
          <span>Branding</span>
          <span>✦</span>
          <span>Illustration</span>
          <span>✦</span>
          <span>Motion</span>
          <span>✦</span>
          <span>Web Design</span>
          <span>✦</span>
          <span>Strategy</span>
          <span>✦</span>
          <span>Content</span>
          <span>✦</span>
        </div>
      </div>
    </div>
  );
}
