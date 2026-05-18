import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle, Factory, Truck, ShieldCheck, Leaf, FlaskConical } from "lucide-react";

const Card = ({ className = "", children }) => (
  <div className={className}>{children}</div>
);

const CardContent = ({ className = "", children }) => (
  <div className={className}>{children}</div>
);

const Button = ({ asChild, size, variant, className = "", children }) => {
  const child = React.Children.only(children);
  if (asChild && React.isValidElement(child)) {
    return React.cloneElement(child, {
      className: `${className} inline-flex items-center justify-center px-5 py-2.5 font-medium transition`,
    });
  }
  return (
    <button className={`${className} inline-flex items-center justify-center px-5 py-2.5 font-medium transition`}>
      {children}
    </button>
  );
};

const heroImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80";

const products = [
  {
    name: "Water-based Emulsion",
    description: "Water-based emulsions use water as the continuous phase and are widely used in paints and coatings. Available types include Styrene Acrylic, Vinyl Acrylic, and All Acrylic emulsions.",
    applications: ["Paints", "Coatings", "Construction materials"],
  },
  {
    name: "Barium Sulfate",
    description:
      "A white, odorless, insoluble inorganic compound used as a pigment, filler, and density-enhancing material in industrial applications.",
    applications: ["Paints & coatings", "Pigments & fillers", "Oil drilling fluids"],
  },
  {
    name: "Titanium Dioxide",
    description:
      "A highly valued white pigment known for brightness, opacity, and durability. Common forms include rutile and anatase.",
    applications: ["Paints", "Coatings", "Plastics", "Paper", "Cosmetics"],
  },
  {
    name: "Calcium Carbonate",
    description:
      "A versatile white powder used as a filler, extender, and functional ingredient across construction, manufacturing, and environmental applications.",
    applications: ["Cement", "Paints", "Paper", "Plastics", "Rubber"],
  },
  {
    name: "Organic Pigments",
    description:
      "Carbon-based colorants valued for vibrant color, stability, and performance in coatings, inks, textiles, and cosmetic formulations.",
    applications: ["Coatings", "Printing inks", "Textiles", "Cosmetics"],
  },
  {
    name: "Iron Oxides",
    description:
      "Durable inorganic pigments available in various colors, commonly used for paints, concrete, corrosion protection, and industrial materials.",
    applications: ["Paints", "Colored concrete", "Anti-corrosion coatings", "Steel industry"],
  },
  {
    name: "Defoamer",
    description:
      "A chemical additive that reduces and prevents foam formation during production and application processes, improving finish quality and efficiency.",
    applications: ["Coatings", "Printing inks", "Paint production", "Industrial processing"],
  },
  {
    name: "Surfactant / Dispersing Agent",
    description:
      "A formulation aid that improves particle separation, prevents clumping, and supports stable dispersion in coatings, inks, and other systems.",
    applications: ["Coatings", "Inks", "Pigment dispersion", "Industrial formulations"],
  },
];

const industries = [
  {
    name: "Paint & Coatings",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Construction",
    image: "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
  },
  {
    name: "Wood & Furniture",
    image: "https://images.unsplash.com/photo-1653971858625-9cb23d0dca80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29vZCUyMGFuZCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ink & Printing",
    image: "https://images.unsplash.com/photo-1706895040634-62055892cbbb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5rJTIwYW5kJTIwcHJpbnRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Packaging",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Box & Carton Manufacturing",
    image: "https://images.unsplash.com/photo-1656543802898-41c8c46683a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qm94fGVufDB8fDB8fHww",
  },
  {
    name: "Paper",
    image: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Roofing",
    image: "https://plus.unsplash.com/premium_photo-1682617326551-4749611516f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vZmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const values = [
  { title: "Integrity", text: "Honesty and transparency in every business relationship." },
  { title: "Commitment", text: "Delivering on promises with consistency and care." },
  { title: "Innovation", text: "Improving our services, logistics, and product offerings." },
  { title: "Customer Focus", text: "Prioritizing each client’s needs, growth, and success." },
  { title: "Sustainability", text: "Supporting responsible and environmentally conscious practices." },
];

const strengths = [
  {
    icon: ShieldCheck,
    title: "Reliable Sourcing",
    text: "Strong global and local supplier networks for consistent product availability.",
  },
  {
    icon: FlaskConical,
    title: "Technical Expertise",
    text: "Practical product knowledge aligned with the needs of each industry.",
  },
  {
    icon: Truck,
    title: "Logistics Excellence",
    text: "Efficient supply chain support and timely delivery across Indonesia.",
  },
  {
    icon: Factory,
    title: "Customer Support",
    text: "Responsive service tailored to the requirements of each business partner.",
  },
];

export default function TrisunriseWebsite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-950">PT Trisunrise Abadi Chemindo</p>
            <p className="text-xs uppercase tracking-[0.25em] text-blue-700">Chemical Trading Partner</p>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#products" className="hover:text-blue-700">Products</a>
            <a href="#industries" className="hover:text-blue-700">Industries</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>
          <Button asChild className="rounded-full bg-blue-700 hover:bg-blue-800">
            <a href="mailto:trisunachem@gmail.com">Get in Touch</a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img src={heroImage} alt="Industrial chemical facility" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-blue-950/70" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-blue-100">
              Trusted Chemical Solutions for Indonesian Industries
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Empowering Industries with Quality Chemical Solutions
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              We distribute high-quality chemical materials for paint, construction, wood and furniture, ink, paper, packaging, box and carton manufacturing, and roofing sectors.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-slate-100">
                <a href="#products">View Products <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card className="rounded-3xl border-white/10 bg-white/10 shadow-2xl backdrop-blur">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                  <Leaf className="h-8 w-8 text-cyan-200" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Your Strategic Supply Partner</h2>
                <p className="mt-4 leading-7 text-slate-200">
                  Our goal is to bridge global chemical manufacturers and local industry players through timely delivery, competitive pricing, and consistent product quality.
                </p>
                <div className="mt-6 grid gap-3 text-sm text-slate-100">
                  {["Quality materials", "Reliable sourcing", "On-time delivery", "Responsive support"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-200" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Company Overview</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A dynamic trading company serving essential industries</h2>
          </div>
          <p className="text-lg leading-8 text-slate-700">
            PT Trisunrise Abadi Chemindo is a trusted chemical trading company specializing in the distribution of high-quality chemical materials across Indonesia. We are committed to reliability, innovation, and customer satisfaction, helping businesses access the right materials for production, performance, and growth.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold">Vision</h3>
              <p className="mt-4 leading-7 text-slate-700">
                To become a leading chemical trading partner that drives industrial growth and innovation in Indonesia and beyond.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold">Mission</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>Provide high-quality chemical materials that meet industry standards.</li>
                <li>Build sustainable partnerships with suppliers and clients.</li>
                <li>Innovate in logistics, service, and product offerings.</li>
                <li>Practice ethical and responsible business operations.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Built on reliability, knowledge, and service</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-3xl border-slate-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Products</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Chemical materials for performance-driven industries</h2>
          <p className="mt-5 leading-7 text-slate-700">
            Our product portfolio supports applications in coatings, construction materials, printing inks, packaging, paper, furniture finishing, and more.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden rounded-3xl border-0 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span key={app} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {app}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="industries" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Industries We Serve</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Serving the production needs of multiple sectors</h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">
              From paints and waterproofing to printing inks, cartons, paper, furniture, and roofing materials, we help clients source materials that support quality, durability, and consistency.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={industry.image} alt={industry.name} className="h-36 w-full object-cover opacity-80 transition group-hover:scale-105 group-hover:opacity-100" />
                <div className="p-5 text-sm font-medium text-slate-100">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Core Values</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">The principles behind our work</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {values.map((value) => (
            <Card key={value.title} className="rounded-3xl border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{value.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Let’s discuss your chemical material needs</h2>
            <p className="mt-5 leading-7 text-slate-700">
              Contact PT Trisunrise Abadi Chemindo for product inquiries, sourcing requests, supplier partnerships, or industry-specific chemical solutions.
            </p>
          </div>
          <Card className="rounded-3xl border-0 bg-slate-50 shadow-sm">
            <CardContent className="space-y-6 p-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 text-blue-700" />
                <div>
                  <p className="font-semibold">Office Address</p>
                  <p className="mt-1 text-slate-700">Ruko Green Garden Blok Z-2 No 43<br />Kelurahan Kedoya Utara, Kecamatan Kebon Jeruk<br />Jakarta Barat, 11520</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 text-blue-700" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+6281222845846" className="mt-1 block text-slate-700 hover:text-blue-700">+62-812-22-845-846</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 text-blue-700" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:trisunachem@gmail.com" className="mt-1 block text-slate-700 hover:text-blue-700">trisunachem@gmail.com</a>
                </div>
              </div>
              <Button asChild className="w-full rounded-full bg-blue-700 hover:bg-blue-800">
                <a href="mailto:trisunachem@gmail.com">Send Inquiry</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} PT Trisunrise Abadi Chemindo. All rights reserved.
      </footer>
    </div>
  );
}
