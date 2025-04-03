import "../globals.css";
import Logo from "@/components/logo";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        <div className="grid grid-rows-[auto_1fr] grid-cols-[2fr_10fr] h-screen">
          <header className="col-span-2 bg-gray-800 text-white p-4">
            <Navbar />
          </header>

          <aside className="row-span-1 bg-gray-900 text-white p-4">
            <Sidebar />
          </aside>

          <main className="p-4 overflow-y-auto">
            <div className="container mx-auto my-12">
              <Logo />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
