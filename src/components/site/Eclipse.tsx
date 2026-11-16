import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";

const Ctx = createContext<() => void>(() => {});
export const useEnterDarkness = () => useContext(Ctx);

type Phase = "idle" | "closing" | "void" | "revealing";

export function EclipseProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const navigate = useNavigate();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const active = useRef(false);

  useEffect(() => {
    if (phase === "idle") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const enter = () => {
    if (active.current) return;
    active.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      void navigate({ to: "/oscuridad-a-la-luz" });
      active.current = false;
      return;
    }

    setPhase("closing");
    timers.current.push(setTimeout(() => setPhase("void"), 1800));
    timers.current.push(
      setTimeout(() => {
        void navigate({ to: "/oscuridad-a-la-luz" }).then(() => {
          window.scrollTo({ top: 0, behavior: "instant" });
          timers.current.push(setTimeout(() => setPhase("revealing"), 120));
          timers.current.push(
            setTimeout(() => {
              setPhase("idle");
              active.current = false;
            }, 1150),
          );
        });
      }, 5000),
    );
  };

  return (
    <Ctx.Provider value={enter}>
      {children}
      {phase !== "idle" && (
        <div
          className={`fixed inset-0 z-[100] overflow-hidden bg-night transition-opacity duration-[1000ms] ease-out ${phase === "revealing" ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"}`}
          aria-hidden={phase === "revealing"}
          aria-live="polite"
        >
          <div
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              transform: "translate(-50%,-50%)",
              boxShadow: "0 0 0 200vmax var(--night)",
              animation: "eclipse 1.8s cubic-bezier(.7,0,.3,1) forwards",
            }}
          />
          {(phase === "void" || phase === "revealing") && (
            <div className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-700 ${phase === "revealing" ? "opacity-0" : "opacity-100"}`}>
              <span className="animate-spark mb-10 block h-2 w-2 rounded-full bg-gold shadow-glow" />
              <p className="animate-rise max-w-xl font-display text-3xl italic text-pearl md:text-5xl" style={{ animationDelay: "0.45s" }}>
                En la ausencia de luz, nace la verdadera claridad.
              </p>
            </div>
          )}
          <style>{`@keyframes eclipse { from { width: 260vmax; height: 260vmax } to { width: 0; height: 0 } }`}</style>
        </div>
      )}
    </Ctx.Provider>
  );
}
