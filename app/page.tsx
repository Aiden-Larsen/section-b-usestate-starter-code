import Image from "next/image";
import StudyTip from "./components/StudyTip";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10 flex flex-col gap-10">
      {/* Boolean State */}

      <section>
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-cyan-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
            Boolean State
          </span>
          <span className="text-slate-400 text-sm">useState(false)</span>
        </div>
        <StudyTip/>
      </section>
    </main>
  );
}
