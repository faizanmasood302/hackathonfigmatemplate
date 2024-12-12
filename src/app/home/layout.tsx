"use client";
import HeaderSelector from "../components/headerselector"; // Use HeaderSelector

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <HeaderSelector />  {/* Conditional header rendering */}
      {children}
    </section>
  );
}
