import { createContext, useContext, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";

const Ctx = createContext<() => void>(() => {});
export const useEnterDarkness = () => useContext(Ctx);

export function EclipseProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<"idle" | "closing" | "void">("idle");
  const navigate = useNavigate();

  const enter = () => {
    if (phase !== "idle") return;
    setPhase("closing");
    setTimeout(() => setPhase("void"), 1900);
    setTimeout(() => {
      navigate({ to: "/oscuridad-a-la-luz" });
      setTimeout(() => setPhase("idle"), 50);
    }, 5600);
  };

  return (
    <Ctx.Provider value={enter}>
      {children}
      {phase !== "idle" && (
        <div className="pointer-events-auto fixed inset-0 z-[100] overflow-hidden" aria-hidden>
          <div
            className="absolute left-1/2 top-1/2 rounded-full transition-all ease-in"
            style={{
              width: phase === "closing" ? 0 : 0,
              height: phase === "closing" ? 0 : 0,
              transform: "translate(-50%,-50%)",
              boxShadow: "0 0 0 200vmax var(--night)",
              animation: "eclipse 1.9s cubic-bezier(.7,0,.3,1) forwards",
            }}
          />
          {phase === "void" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-night px-6 text-center">
              <span className="animate-spark mb-10 block h-2 w-2 rounded-full bg-gold shadow-glow" />
              <p
                className="animate-rise max-w-xl font-display text-3xl italic text-pearl md:text-5xl"
                style={{ animationDelay: "0.9s" }}
              >
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
