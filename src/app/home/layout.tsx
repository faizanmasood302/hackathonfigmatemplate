"use client";
// import HeaderSelector from "../components/headerselector"; // Use HeaderSelector
import HomeHeader from "../components/homeheader"
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <HomeHeader/>  {/* Conditional header rendering */}
      {children}
    </section>
  );
}
