import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-lg bg-white p-8 text-center dark:bg-zinc-900">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-zinc-950 dark:text-zinc-50">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
            Page Not Found
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <Link
          href="/"
          className="flex h-12 w-full items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
