export function Footer() {
  return (
    <footer className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 py-10 px-6 text-sm text-foreground/60">
      <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
    </footer>
  );
}

