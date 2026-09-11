"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star, X, Check, Loader2 } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Technology } from "@/types/tech";

export default function TechSection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch JSON data via useEffect
  useEffect(() => {
    const fetchTechData = async () => {
      try {
        const response = await fetch("/data/technologies.json");
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Failed to load technology data:", error);
        toast.error("Failed to load technologies.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTechData();
  }, []);

  // Handler: Add to Stack
  const handleAddToStack = (tech: Technology) => {
    const exists = selectedStack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: "bottom-right",
      });
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: "bottom-right",
    });
  };

  // Handler: Remove single item
  const handleRemoveFromStack = (id: string, name: string) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`Removed ${name} from your stack.`, {
      position: "bottom-right",
    });
  };

  // Handler: Remove All
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("Cleared all technologies from your stack.", {
      position: "bottom-right",
    });
  };

  return (
    <section id="technologies" className="py-12 bg-white min-h-screen">
      <ToastContainer autoClose={2500} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore the <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-1 font-medium">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading State Requirement */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-3">
            <Loader2 className="w-10 h-10 animate-spin text-[#ec4899]" />
            <p className="text-slate-500 text-sm font-medium">Loading tech stacks...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Technology Cards Grid (3 Columns on Desktop, 2 on Tablet) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {technologies.map((tech) => {
                const isSelected = selectedStack.some((item) => item.id === tech.id);

                return (
                  <div
                    key={tech.id}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar: Icon & Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 p-1">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>

                        {tech.badge && (
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-sky-200 text-sky-600 bg-sky-50/50">
                            {tech.badge}
                          </span>
                        )}
                      </div>

                      {/* Name & Description */}
                      <h3 className="text-lg font-bold text-slate-900">{tech.name}</h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                        {tech.description}
                      </p>

                      {/* Category, Difficulty & Rating */}
                      <div className="flex items-center gap-2 mt-4 text-[11px] text-slate-500 font-medium flex-wrap">
                        <span className="bg-slate-100 px-2 py-0.5 rounded-md text-slate-600">
                          {tech.category}
                        </span>
                        <span className="bg-slate-50 px-2 py-0.5 rounded-md text-slate-500 border border-slate-100">
                          {tech.difficulty}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-slate-700 ml-auto">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          {tech.rating}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-5">
                      <button
                        onClick={() => handleAddToStack(tech)}
                        disabled={isSelected}
                        type="button"
                        className={`w-full py-2.5 px-4 rounded-xl font-medium text-xs transition-all flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                            : "bg-slate-950 text-white hover:bg-slate-800 active:scale-[0.98]"
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            Added to Stack
                          </>
                        ) : (
                          "Add to Stack"
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Your Stack Sidebar */}
            <div className="lg:col-span-4 sticky top-24">
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                
                {/* Header */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">
                    {selectedStack.length === 0
                      ? "No technologies selected yet."
                      : `${selectedStack.length} Technology Selected`}
                  </p>
                </div>

                {/* Conditional Rendering State */}
                {selectedStack.length === 0 ? (
                  /* Empty State */
                  <div className="border border-dashed border-slate-200 rounded-2xl p-8 text-center bg-slate-50/50">
                    <p className="text-xs font-medium text-slate-400">
                      Your stack is empty.
                    </p>
                  </div>
                ) : (
                  /* Selected Items List */
                  <div className="space-y-3">
                    <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
                      {selectedStack.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-slate-50 p-1 flex items-center justify-center border border-slate-100">
                              <Image
                                src={item.icon}
                                alt={item.name}
                                width={24}
                                height={24}
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                              <p className="text-[10px] text-slate-400 font-medium">
                                {item.category}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => handleRemoveFromStack(item.id, item.name)}
                            type="button"
                            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Clear All Button */}
                    <button
                      onClick={handleRemoveAll}
                      type="button"
                      className="w-full py-2.5 rounded-xl border border-rose-200 text-rose-500 hover:bg-rose-50 text-xs font-semibold transition-colors mt-2"
                    >
                      Remove All
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}