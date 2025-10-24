export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-950 dark:border-zinc-800 dark:border-t-zinc-50" />
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Loading...</p>
      </div>
    </div>
  );
}
