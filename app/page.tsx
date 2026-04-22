"use client";

const WA_NUMBER = "5493329400015";
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

function waLink(msg: string) {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

const rubros = [
  {
    icon: "🏢",
    nombre: "Empresas",
    desc: "Uniformes corporativos con tu logo bordado o estampado. Imagen profesional para todo tu equipo.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
  },
  {
    icon: "🍽️",
    nombre: "Gastronomía",
    desc: "Chaquetas, delantales, gorros y más. Diseños funcionales y elegantes para cocina y salón.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
  {
    icon: "🏥",
    nombre: "Salud",
    desc: "Guardapolvos, uniformes médicos y ropa quirúrgica. Comodidad y normativa en cada prenda.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    icon: "⚙️",
    nombre: "Industria",
    desc: "Mameluco, ropa de trabajo y calzado de seguridad. Resistencia y protección para cada tarea.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    icon: "💇",
    nombre: "Estética & Merch",
    desc: "Uniformes para peluquerías, salones de belleza y merch personalizado. Estilo y marca en cada prenda.",
    img: "https://images.unsplash.com/photo-1560066984-138daaa2596b?w=600&q=80",
  },
  {
    icon: "🏨",
    nombre: "Hotelería",
    desc: "Uniformes para recepción, housekeeping y gastronomía hotelera. Presencia impecable en cada área.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  },
];

const productos = [
  {
    icon: "👕",
    nombre: "Uniformes",
    desc: "Diseños exclusivos por mayor y menor. Personalizados con el estilo y colores de tu empresa.",
  },
  {
    icon: "🪡",
    nombre: "Bordado & Estampado",
    desc: "Tu logo en cada prenda. Bordado en relieve o estampado de alta calidad con durabilidad garantizada.",
  },
  {
    icon: "👟",
    nombre: "Calzado de Seguridad",
    desc: "Calzado certificado para industria y trabajo. Comodidad y protección para largas jornadas.",
  },
];

const beneficios = [
  { icon: "🚚", texto: "Envíos a todo el país" },
  { icon: "💳", texto: "Todos los medios de pago" },
  { icon: "📦", texto: "Por mayor y menor" },
  { icon: "✏️", texto: "Diseños personalizados" },
  { icon: "🏷️", texto: "Logo bordado o estampado" },
  { icon: "⚡", texto: "Producción rápida" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800" style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="HeFe Uniformes" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-xl font-black tracking-tight" style={{ color: "#2e785f" }}>HeFe</span>
            <span className="text-xl font-light text-gray-700">Uniformes</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#rubros" className="hover:text-[#2e785f] transition-colors">Rubros</a>
            <a href="#productos" className="hover:text-[#2e785f] transition-colors">Productos</a>
            <a href="#contacto" className="hover:text-[#2e785f] transition-colors">Contacto</a>
            <a
              href="https://www.instagram.com/hefeuniformes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              title="Instagram"
            >
              <svg className="w-5 h-5" fill="url(#ig-grad-nav)" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="ig-grad-nav" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fcb045" />
                    <stop offset="50%" stopColor="#fd1d1d" />
                    <stop offset="100%" stopColor="#833ab4" />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
          <a
            href={waLink("Hola! Quiero pedir un presupuesto de uniformes.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#2e785f" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir presupuesto
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2e785f 0%, #235e49 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white transform translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white transform -translate-x-20 translate-y-20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left text-white">
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo.jpg" alt="HeFe Uniformes" className="h-20 w-20 rounded-full object-cover shadow-lg border-2 border-white/30" />
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">🧉 Pilchas del Paraná</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
              Vestimos tu<br />
              <span className="text-white/80">profesión</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-lg">
              Uniformes para todos los rubros, por mayor y menor. Personalizados con el logo de tu empresa. Envíos a todo el país. 👷‍♂️👩‍⚕️
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={waLink("Hola! Quiero pedir un presupuesto de uniformes para mi negocio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white font-bold text-base transition-all hover:bg-gray-100 active:scale-95"
                style={{ color: "#2e785f" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir presupuesto
              </a>
              <a
                href="#rubros"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/50 text-white font-semibold text-base transition-all hover:bg-white/10 active:scale-95"
              >
                Ver rubros
              </a>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3 max-w-sm md:max-w-md">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80"
              alt="Equipo con uniformes"
              className="rounded-2xl object-cover w-full h-40 shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
              alt="Uniforme salud"
              className="rounded-2xl object-cover w-full h-40 shadow-lg mt-6"
            />
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"
              alt="Ropa industria"
              className="rounded-2xl object-cover w-full h-40 shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
              alt="Uniforme gastronomia"
              className="rounded-2xl object-cover w-full h-40 shadow-lg mt-6"
            />
          </div>
        </div>
      </section>

      {/* BENEFICIOS STRIP */}
      <section className="py-8 border-b border-gray-100" style={{ backgroundColor: "#e8f4f0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {beneficios.map((b) => (
              <div key={b.texto} className="flex flex-col items-center text-center gap-1">
                <span className="text-2xl">{b.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{b.texto}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RUBROS */}
      <section id="rubros" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
              Trabajamos para todos los <span style={{ color: "#2e785f" }}>rubros</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Empresas, gastronomía, salud e industria. Si tu equipo necesita uniforme, estamos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rubros.map((r) => (
              <a
                key={r.nombre}
                href={waLink(`Hola! Me interesa uniformes para el rubro ${r.nombre}. ¿Pueden darme un presupuesto?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white font-bold text-lg flex items-center gap-2">
                    <span>{r.icon}</span>
                    <span>{r.nombre}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{r.desc}</p>
                  <div
                    className="mt-3 text-sm font-semibold flex items-center gap-1"
                    style={{ color: "#2e785f" }}
                  >
                    Pedir presupuesto →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-20" style={{ backgroundColor: "#f8fffe" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
              Nuestros <span style={{ color: "#2e785f" }}>productos</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Todo lo que tu equipo necesita, en un solo lugar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productos.map((p) => (
              <div
                key={p.nombre}
                className="rounded-2xl p-8 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
                  style={{ backgroundColor: "#e8f4f0" }}
                >
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{p.nombre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA DE TRABAJOS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
              Nuestros <span style={{ color: "#2e785f" }}>trabajos</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Más de 20 años vistiendo equipos en San Pedro y la región.
            </p>
          </div>
          <div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
            {[
              "/trabajos/Campo/Campo-100.jpg",
              "/trabajos/Gastronomia/gastro-2.jpeg",
              "/trabajos/Hoteleria/hotel-1.jpeg",
              "/trabajos/Industrial/industria-1.jpg",
              "/trabajos/Campo/Ambos2023-122.jpg",
              "/trabajos/Sanidad/sanidad-1.jpeg",
              "/trabajos/Campo/Campo-101.jpg",
              "/trabajos/Gastronomia/gastro-1.jpeg",
              "/trabajos/Hoteleria/hotel-2.jpeg",
              "/trabajos/Oficina/oficina-1.jpeg",
              "/trabajos/Campo/Campo-102.jpg",
              "/trabajos/Industrial/industria-2.jpg",
              "/trabajos/Gastronomia/gastro-3.jpeg",
              "/trabajos/Campo/Ambos2023-123.jpg",
              "/trabajos/Sanidad/sanidad-2.jpeg",
              "/trabajos/Hoteleria/hotel-3.jpeg",
              "/trabajos/Campo/Campo-106.jpg",
              "/trabajos/Oficina/oficina-2.jpeg",
              "/trabajos/Campo/Campo-109.jpg",
              "/trabajos/Campo/Ambos2023-127.jpg",
            ].map((src, i) => (
              <div key={i} className="break-inside-avoid rounded-xl overflow-hidden">
                <img
                  src={src}
                  alt={`Trabajo HeFe ${i + 1}`}
                  className="w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
              Confían en <span style={{ color: "#2e785f" }}>nosotros</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Empresas, instituciones y negocios de San Pedro y la región eligen HeFe para vestir a su equipo.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 items-center">
            {[
              { src: "/cl-maffeti.png", alt: "Maffeti Burger" },
              { src: "/cl-howard-johnson.png", alt: "Howard Johnson San Pedro" },
              { src: "/cl-cip.png", alt: "CIP Centro de Imágenes del Paraná" },
              { src: "/cl-ministerio.png", alt: "Ministerio de Desarrollo Agrario" },
              { src: "/cl-spa.png", alt: "San Pedro Alarmas" },
              { src: "/cl-inta.png", alt: "INTA" },
              { src: "/cl-dismarket.png", alt: "DisMarket S.A." },
              { src: "/cl-municipio.png", alt: "San Pedro Municipio" },
              { src: "/cl-sancor.png", alt: "SanCor Salud" },
              { src: "/cl-quiropraxia.png", alt: "Quiropraxia San Pedro" },
              { src: "/cl-creando-conciencia.png", alt: "Creando Conciencia" },
              { src: "/cl-sindicato.png", alt: "Sindicato de Luz y Fuerza" },
              { src: "/cl-lo-de-coco.png", alt: "Lo de Coco Maderas" },
              { src: "/cl-menisale.png", alt: "Menisale" },
              { src: "/cl-morresi.png", alt: "Morresi Fruit" },
              { src: "/cl-oilher.png", alt: "Agronegocios Oilher" },
              { src: "/cl-ferreteria.png", alt: "La Ferretería del Barrio" },
              { src: "/cl-solieri.png", alt: "Carnicerías Solieri" },
              { src: "/cl-la-chacra.png", alt: "La Chacra Spa de Campo" },
              { src: "/cl-jg.png", alt: "J&G S.R.L." },
              { src: "/cl-quefi.png", alt: "Quefi S.R.L." },
              { src: "/cl-la-paulina.png", alt: "La Paulina" },
            ].map((c) => (
              <div
                key={c.alt}
                className="flex items-center justify-center p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                style={{ minHeight: "80px" }}
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="max-h-14 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  title={c.alt}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-10">
            +20 empresas e instituciones de San Pedro y la región
          </p>
        </div>
      </section>

      {/* CTA CENTRAL */}
      <section id="contacto" className="py-20" style={{ background: "linear-gradient(135deg, #2e785f 0%, #235e49 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            ¿Listo para vestir<br />tu equipo?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Contanos qué necesitás y te mandamos un presupuesto sin compromiso. Por mayor y menor, con envío a todo el país.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink("Hola HeFe Uniformes! Quiero pedir un presupuesto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white font-bold text-lg transition-all hover:bg-gray-100 active:scale-95"
              style={{ color: "#2e785f" }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribinos por WhatsApp
            </a>
            <a
              href={`tel:+543329400015`}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-white/50 text-white font-semibold text-lg transition-all hover:bg-white/10 active:scale-95"
            >
              📞 +54 9 3329 40-0015
            </a>
          </div>
        </div>
      </section>

      {/* PILCHAS DEL PARANÁ */}
      <section className="bg-black">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <div>
              <span className="text-white font-bold text-sm tracking-wide block">@pilchas_delparana</span>
              <span className="text-white/60 text-xs">Nuestra marca de ropa — indumentaria gaucha y del litoral 🧉</span>
            </div>
          </div>
          <a
            href="https://www.instagram.com/pilchas_delparana/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded text-white text-xs font-bold border border-white/30 hover:bg-white/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            SEGUIR EN INSTAGRAM
          </a>
        </div>

        {/* Franja de fotos */}
        <div className="flex w-full overflow-hidden" style={{ height: "280px" }}>
          {["/pilchas1.png", "/pilchas2.png", "/pilchas3.png", "/pilchas4.png"].map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/pilchas_delparana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 relative group overflow-hidden"
            >
              <img
                src={src}
                alt={`Pilchas del Paraná ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer de la sección */}
        <div className="w-full py-3 px-4 flex items-center justify-center gap-2" style={{ background: "linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)" }}>
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          <a
            href="https://www.instagram.com/pilchas_delparana/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-bold tracking-widest hover:underline"
          >
            @PILCHAS_DELPARANA
          </a>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
                Seguinos en <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Instagram</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 max-w-md">
                Mirá nuestros trabajos, diseños y novedades. Actualizamos seguido con producción nueva.
              </p>
              <a
                href="https://www.instagram.com/hefeuniformes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg transition-all hover:opacity-90 active:scale-95"
                style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @hefeuniformes
              </a>
            </div>
            <div className="flex-1 flex flex-col items-center gap-4">
              <div
                className="w-full max-w-sm rounded-3xl p-8 text-center"
                style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}
              >
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                  <img src="/logo.jpg" alt="HeFe Uniformes" className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-white/40" />
                  <p className="text-white font-bold text-xl">@hefeuniformes</p>
                  <p className="text-white/80 text-sm mt-1">Seguinos para ver nuestros trabajos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="py-20" style={{ backgroundColor: "#f8fffe" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
              Dónde <span style={{ color: "#2e785f" }}>encontrarnos</span>
            </h2>
            <p className="text-gray-500 text-lg">
              📍 Mitre 2402, San Pedro, Buenos Aires
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://maps.google.com/maps?q=Mitre+2402,+San+Pedro,+Buenos+Aires,+Argentina&output=embed&z=16"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HeFe Uniformes - Ubicación"
            />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="font-medium">Mitre 2402, San Pedro (2930), Buenos Aires</span>
            </div>
            <span className="hidden sm:block text-gray-300">|</span>
            <a
              href="https://maps.google.com/?q=Mitre+2402,+San+Pedro,+Buenos+Aires,+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline transition-colors"
              style={{ color: "#2e785f" }}
            >
              Abrir en Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="HeFe Uniformes" className="h-8 w-8 rounded-full object-cover" />
            <span className="text-xl font-black" style={{ color: "#2e785f" }}>HeFe</span>
            <span className="text-xl font-light text-gray-300">Uniformes</span>
            <span className="ml-1">🧉 Pilchas del Paraná</span>
          </div>
          <div className="text-center text-gray-500">
            Uniformes • Calzado de Seguridad • Bordado | Empresas · Gastronomía · Salud · Industria
          </div>
          <div>
            <a
              href={waLink("Hola! Quiero consultar sobre uniformes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              hefeuniformes.com
            </a>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={waLink("Hola HeFe Uniformes! Quiero pedir un presupuesto.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white transition-all hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
        title="Escribinos por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
