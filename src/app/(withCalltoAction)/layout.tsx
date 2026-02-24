import CallToAction from "@/components/layout/CallToAction/CallToAction";

export default function CtaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <CallToAction />
    </>
  );
}
