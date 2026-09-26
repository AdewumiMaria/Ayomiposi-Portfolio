import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// NOTE: Every page used to import Navbar and Footer itself. Hoisting them into a
// route-group layout means the header keeps its state (and the nav underline keeps
// animating) across client-side navigations instead of remounting each time.
export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
