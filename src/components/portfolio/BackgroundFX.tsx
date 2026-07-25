import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Ambient background — GPU-only transform/opacity animations on tiny promoted
 * layers. No framer-motion, no huge blurs, no conic-gradient rotation, so it
 * costs ~0 during scroll. Fixed behind all content.
 */
export function BackgroundFX() {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ contain: "strict" }}
    >
      {/* Static masked grid — no animation, pure paint-once */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--glass-border-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--glass-border-strong) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      {!reduced && (
        <>
          <span className="bgfx-orb bgfx-orb-1" />
          <span className="bgfx-orb bgfx-orb-2" />
          <span className="bgfx-orb bgfx-orb-3" />
        </>
      )}

      {/* Particle layer — CSS-only, transform+opacity, no blur */}
      <div className={`bgfx-particles${reduced ? " bgfx-particles-static" : ""}`} aria-hidden>
        <span className="bgfx-p bgfx-p-1" />
        <span className="bgfx-p bgfx-p-2" />
        <span className="bgfx-p bgfx-p-3" />
        <span className="bgfx-p bgfx-p-4" />
        <span className="bgfx-p bgfx-p-5" />
        <span className="bgfx-p bgfx-p-6" />
        <span className="bgfx-p bgfx-p-7" />
        <span className="bgfx-p bgfx-p-8" />
        <span className="bgfx-p bgfx-p-9" />
        <span className="bgfx-p bgfx-p-10" />
      </div>

      {/* Vignette to keep text crisp */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, var(--surface) 100%)",
        }}
      />
    </div>
  );
}
