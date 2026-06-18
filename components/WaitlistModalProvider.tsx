"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

type WaitlistModalContextType = {
  openModal: () => void;
};

const WaitlistModalContext = createContext<WaitlistModalContextType>({
  openModal: () => {},
});

export function useWaitlistModal() {
  return useContext(WaitlistModalContext);
}

// Validates: local-part@domain.tld — requires valid chars, real domain, 2+ char TLD
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

type Status = "idle" | "loading" | "success" | "duplicate" | "error";

export function WaitlistModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const openModal = useCallback(() => {
    setIsOpen(true);
    setEmail("");
    setStatus("idle");
    setErrorMsg("");
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email.trim())) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
      } else if (res.status === 409) {
        setStatus("duplicate");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  return (
    <WaitlistModalContext.Provider value={{ openModal }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
              className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center py-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#0CCF0E]/10 flex items-center justify-center mb-5">
                      <CheckCircle className="text-[#0CCF0E]" size={36} />
                    </div>
                    <h2
                      id="modal-title"
                      className="text-2xl font-black text-[#1b3a1b] mb-2"
                    >
                      You&apos;re on the list!
                    </h2>
                    <p className="text-secondary-200 mb-7 leading-relaxed">
                      We&apos;ll send you a notification the moment Volteryde
                      launches on the App Store and Google Play. Stay tuned!
                    </p>
                    <button
                      onClick={closeModal}
                      className="bg-[#0CCF0E] text-white px-10 py-3 rounded-full font-bold hover:bg-[#0ab50c] transition-colors shadow-[0_4px_20px_rgba(12,207,14,0.35)]"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : status === "duplicate" ? (
                  <motion.div
                    key="duplicate"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center py-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-5">
                      <CheckCircle className="text-amber-400" size={36} />
                    </div>
                    <h2
                      id="modal-title"
                      className="text-2xl font-black text-[#1b3a1b] mb-2"
                    >
                      Already registered!
                    </h2>
                    <p className="text-secondary-200 mb-7 leading-relaxed">
                      <span className="font-semibold text-[#1b3a1b]">{email.trim()}</span> is
                      already on the Volteryde waitlist. We&apos;ll reach out as soon as we launch.
                    </p>
                    <button
                      onClick={closeModal}
                      className="bg-[#1b3a1b] text-white px-10 py-3 rounded-full font-bold hover:bg-[#244d24] transition-colors"
                    >
                      Got it
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-[#0CCF0E]/10 flex items-center justify-center ring-4 ring-[#0CCF0E]/20">
                          <Image
                            src="/logotextgreen.png"
                            alt="Volteryde"
                            width={56}
                            height={56}
                            className="object-contain"
                          />
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#0CCF0E] rounded-full flex items-center justify-center text-white text-xs font-black shadow-md">
                          ✦
                        </span>
                      </div>
                    </div>

                    <h2
                      id="modal-title"
                      className="text-3xl font-black text-[#1b3a1b] text-center mb-3"
                    >
                      Coming Soon!
                    </h2>

                    <p className="text-secondary-200 text-center mb-1 leading-relaxed">
                      The Volteryde app is currently under development and will
                      be available on the{" "}
                      <span className="font-semibold text-[#1b3a1b]">
                        App Store
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold text-[#1b3a1b]">
                        Google Play
                      </span>{" "}
                      very soon.
                    </p>
                    <p className="text-secondary-300 text-center text-sm mb-7">
                      Join the waitlist and be the first to know when we launch.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <input
                        ref={inputRef}
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errorMsg) setErrorMsg("");
                          if (status === "error") setStatus("idle");
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0CCF0E] focus:ring-2 focus:ring-[#0CCF0E]/20 text-[#1b3a1b] placeholder:text-gray-300 transition-all"
                        required
                        disabled={status === "loading"}
                      />

                      {errorMsg && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm"
                        >
                          {errorMsg}
                        </motion.p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-[#0CCF0E] text-white py-3.5 rounded-xl font-bold text-base shadow-[0_4px_20px_rgba(12,207,14,0.3)] hover:shadow-[0_6px_24px_rgba(12,207,14,0.45)] hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
                      >
                        {status === "loading"
                          ? "Joining waitlist…"
                          : "Notify Me When It Launches"}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </WaitlistModalContext.Provider>
  );
}
