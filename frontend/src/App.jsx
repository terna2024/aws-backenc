export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            🎥 Cloud Camera Dashboard
          </h1>
          <span className="text-sm text-slate-400">
            AWS • FastAPI • RTSP
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Live Stream Card */}
          <div className="md:col-span-2 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center">
              <h2 className="font-semibold text-lg">📡 Live Stream</h2>
              <span className="px-3 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded-full">
                LIVE
              </span>
            </div>

            <div className="p-4">
              <img
                src="https://aws-backenc.onrender.com/video"
                alt="Live Stream"
                className="w-full rounded-xl border-2 border-emerald-400"
              />
            </div>
          </div>

          {/* Info Panel */}
          <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-6 space-y-6">
            
            <div>
              <h3 className="text-slate-400 text-sm mb-2">Stream Source</h3>
              <p className="font-mono text-sm break-all">
                rtsp://AWS-IP:8554/live
              </p>
            </div>

            <div>
              <h3 className="text-slate-400 text-sm mb-2">Backend</h3>
              <p className="font-mono text-sm">
                FastAPI @ localhost:8000
              </p>
            </div>

            <div>
              <h3 className="text-slate-400 text-sm mb-2">Status</h3>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-emerald-400 text-sm">Streaming Active</span>
              </div>
            </div>

            <button className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition">
              Record Stream
            </button>

          </div>
        </div>

      </main>
    </div>
  )
}