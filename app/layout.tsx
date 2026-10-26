import "./globals.css";
import CardNav from "@/components/CardNav";

export const metadata = {
  title: "RedLab Solutions",
  description: "Your Outsourcing and Execution Specialists.",
};

export default function RootLayout({ children }) {
  // RedLab Specific Data Structure
  const navItems = [
    {
      label: "About RedLab",
      bgColor: "#f3f4f6", // Tailwind gray-100
      textColor: "#111827", // Tailwind gray-900
      links: [
        { label: "About Us", href: "/about", ariaLabel: "About Us" },
        { label: "More About Us", href: "/about/more", ariaLabel: "More About Us" }
      ]
    },
    {
      label: "Industries", 
      bgColor: "#dc2626", // Tailwind red-600
      textColor: "#fff",
      links: [
        { label: "Retail & Venues", href: "/industries/retail-venues", ariaLabel: "Retail & Venues" },
        { label: "Corporate & Services", href: "/industries/corporate-services", ariaLabel: "Corporate & Servicess" },
        { label: "Health & Education", href: "/industries/health-education", ariaLabel: "Health & Education" }
      ]
    },
    {
      label: "Services & Products",
      bgColor: "#111827", // Tailwind gray-900
      textColor: "#fff",
      links: [
        { label: "Our Services", href: "/services-products/services", ariaLabel: "Our Services" },
        { label: "Our Products", href: "/services-products/products", ariaLabel: "Our Products" },
      ]
    }
  ];

  return (
    <html lang="en">
      <body className="antialiased selection:bg-red-200 selection:text-red-900">
        
        {/* Render the new animated CardNav */}
        <CardNav
          logo="/logo.png" // Uses the logo you saved to the public folder
          logoAlt="RedLab Solutions Logo"
          items={navItems}
          baseColor="#ffffff" // White pill background
          menuColor="#111827" // Dark hamburger menu
          buttonBgColor="#dc2626" // Red button
          buttonTextColor="#ffffff"
          ease="power3.out"
        />

        {/* The rest of your page content will render below */}
        {children}
        
      </body>
    </html>
  );
}