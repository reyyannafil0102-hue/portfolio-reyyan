import DATA from "../data/data";

export default function About({ sectionRef }) {
  const { about } = DATA;

  const base = "bg-[#0d0d1a] border border-orange-900/30 text-gray-400";

  return (
    <section
      ref={sectionRef}
      data-section="About"
      className="relative min-h-screen py-20 sm:py-28 px-4 sm:px-6 bg-[#09090f] text-white overflow-hidden"
    >
      {/* Hexagonal pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0 0v34M0 50l28 16 28-16M0 16l28 16 28-16' fill='none' stroke='%23f97316' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: "56px 100px",
        }} />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-400 text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'DM Sans',sans-serif" }}>02 —</p>
          <h2 className="section-title" style={{ fontFamily: "'Syne',sans-serif" }}>Tentang Saya</h2>
          <p className="text-sm mt-2 text-gray-500"
            style={{ fontFamily: "'DM Sans',sans-serif" }}>Kenali saya lebih dekat</p>
        </div>

        <div className="flex flex-col gap-5">

          {/* Row 1 — Keluarga + Hobi & Minat */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* Riwayat Keluarga */}
            <div className={`rounded-2xl p-6 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">
                Riwayat Keluarga
              </p>
              <p className="text-sm leading-relaxed">{about.family}</p>
            </div>

            {/* Hobi + Minat digabung */}
            <div className={`rounded-2xl p-6 flex flex-col gap-5 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <div>
                <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">Hobi</p>
                <ul className="space-y-1">
                  {about.hobbies.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-orange-900/20 pt-4">
                <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">Minat</p>
                <ul className="space-y-1">
                  {about.interests.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Row 2 — Pendidikan full width */}
          <div className={`rounded-2xl p-6 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
            <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-5">
              Riwayat Pendidikan
            </p>
            <div className="relative pl-5 border-l border-orange-500/30 space-y-5">
              {about.education.map((e, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[1.35rem] top-1 w-2.5 h-2.5 rounded-full bg-orange-500 ring-4 ring-orange-500/10" />
                  <p className="text-xs text-orange-400 font-mono mb-0.5">{e.year}</p>
                  <p className="text-sm font-semibold text-white">{e.school}</p>
                  {e.major && <p className="text-xs text-gray-500 mt-0.5">{e.major}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 — Cita-cita + Kelebihan Diri */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* Cita-cita */}
            <div className={`rounded-2xl p-6 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">
                Cita-cita / Tujuan Karier
              </p>
              <p className="text-sm leading-relaxed italic text-gray-400">
                "{about.goal}"
              </p>
            </div>

            {/* Kelebihan Diri */}
            <div className={`rounded-2xl p-6 flex flex-col gap-4 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest">Kelebihan Diri</p>

              <div>
                <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">Soft Skills</p>
                <ul className="space-y-1">
                  {about.softSkills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-orange-900/20 pt-3">
                <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">Hard Skills</p>
                <ul className="space-y-1">
                  {about.hardSkills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
