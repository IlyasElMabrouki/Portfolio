
export default function Heading({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return <h2 className="text-3xl font-medium mb-8">{children}</h2>;
}
