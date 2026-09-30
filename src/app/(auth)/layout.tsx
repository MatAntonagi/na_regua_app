export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex  justify-center bg-surface p-8">
      <div className="w-full max-w-100 p-4 bg-paper rounded-lg">{children}</div>
    </div>
  );
}
