export function ScrollProgressBar({ progress }: { progress: number }) {
  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
