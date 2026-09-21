import React, { useState } from 'react';
import { 
  Users, Briefcase, Building2, Database, 
  ArrowRight, ExternalLink, Zap, Laptop, Award,
  Check
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'talento' | 'ofertas' | 'empresas' | 'datos'>('talento');
  const [ofertaCategory, setOfertaCategory] = useState<'todas' | 'activo' | 'cerrado'>('todas');
  const [aliadoCategory, setAliadoCategory] = useState<'todas' | 'formador' | 'empresa' | 'atraccion'>('todas');
  const [aliadoPageIndex, setAliadoCategoryIndex] = useState(0);

  const [selectedAliado, setSelectedAliado] = useState<{
    name: string; tag: string; pais: string; desc: string;
    web: string; redes: string; oferta: string; tech: string; type?: string;
  } | null>(null);

  const handleNavClick = (tab: 'talento' | 'ofertas' | 'empresas' | 'datos') => {
    setActiveTab(tab);
    if (tab === 'datos') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const element = document.getElementById(tab);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const ofertas = [
    { title: "Vouchers de Innovación 2026", status: "Activo", aliado: "Alcaldía & Ruta N", tag: "Financiamiento", desc: "Cofinanciación para proyectos de desarrollo tecnológico y prototipado para MiPyMEs de Medellín.", badge: "Hasta $50M COP" },
    { title: "Bootcamp Inteligencia Artificial Aplicada", status: "Activo", aliado: "AWS & Digital House", tag: "Formación", desc: "120 horas de formación intensiva con certificación internacional para desarrolladores e ingenieros de datos.", badge: "100% Beca" },
    { title: "Retos de Ciudad: Movilidad Sostenible", status: "Activo", aliado: "Secretaría de Movilidad", tag: "Innovación Abierta", desc: "Convocatoria para startups que propongan soluciones basadas en IoT y sensores para el tráfico urbano.", badge: "Piloto Urbano" },
    { title: "Aceleración de Startups DeepTech", status: "Cerrado", aliado: "C4IR & Ruta N", tag: "Aceleración", desc: "Mentoría especializada, conexión con fondos de capital de riesgo e internacionalización de empresas de ciencia.", badge: "Conexión Global" },
    { title: "Ruta de Empleabilidad Tech Medellín", status: "Activo", aliado: "Ecosistema Tech", tag: "Talento", desc: "Vinculación directa de perfiles juniors y semi-seniors con empresas tecnológicas instaladas en el Distrito.", badge: "+500 Vacantes" },
    { title: "Fondo de Capital Semilla CTi+E", status: "Cerrado", aliado: "Fondos VC Aliados", tag: "Inversión", desc: "Inyección de capital para emprendimientos científicos que resuelvan retos prioritarios de salud y medioambiente.", badge: "Ticket $200M COP" }
  ];

  const allAliados = [
    { name: "Digital House & AWS", type: "formador", tag: "Formador", pais: "EE.UU", desc: "Líder mundial en educación tecnológica y computación en la nube para el desarrollo de competencias digitales.", web: "https://digitalhouse.com", redes: "@DigitalHouse @AWSCloud", oferta: "Bootcamps de IA, Cloud Architecture y Certified Solutions", tech: "Inteligencia Artificial & Cloud AWS" },
    { name: "Pix Robotics", type: "formador", tag: "Formador", pais: "Rusia", desc: "Plataforma internacional especializada en automatización robótica de procesos (RPA) e hiperautomatización empresarial.", web: "https://pixrobotics.com", redes: "@PixRobotics_global", oferta: "Certificaciones RPA Developer y Process Automation Analyst", tech: "Robotic Process Automation (RPA)" },
    { name: "SoftServe", type: "empresa", tag: "Empresa", pais: "EE.UU", desc: "Compañía global de consultoría en TI e ingeniería de software especializada en transformación digital masiva.", web: "https://softserveinc.com", redes: "@SoftServe_inc", oferta: "Laboratorios de desarrollo cloud y mentoría técnica sénior", tech: "Big Data, Cloud Native & IoT" },
    { name: "Universidades G8", type: "formador", tag: "Formador", pais: "Colombia", desc: "Consorcio de las 8 universidades acreditadas de alta calidad de Antioquia para el impulso de I+D+i.", web: "https://g8medellin.edu.co", redes: "@G8Universidades", oferta: "Diplomados de transferencia tecnológica e investigación aplicada", tech: "Biotecnología & Nanotecnología" },
    { name: "Alcaldía de Medellín", type: "atraccion", tag: "Atracción de Talento", pais: "Colombia", desc: "Ente gubernamental líder en el Distrito de Ciencia, Tecnología e Innovación para la vinculación laboral social.", web: "https://medellin.gov.co", redes: "@AlcaldiadeMed", oferta: "Rutas de vinculación laboral directa y becas de empleo tech", tech: "Smart City & GovTech" },
    { name: "Smart4IA", type: "formador", tag: "Formador", pais: "Argentina", desc: "EdTech especializada en formación práctica de modelos del lenguaje, visión artificial y automatización de datos.", web: "https://smart4ia.com", redes: "@Smart4IA_latam", oferta: "Cursos intensivos de Prompt Engineering e Inteligencia Artificial Generativa", tech: "IA Generativa & LLMs" },
    { name: "Mercado Libre Tech", type: "empresa", tag: "Empresa", pais: "Argentina", desc: "Centro de desarrollo de software para el mayor ecosistema e-commerce y fintech de América Latina.", web: "https://mercadolibre.com", redes: "@MercadoLibre_tech", oferta: "Mentorías de desarrollo backend distribuido y fintech", tech: "Sistemas Distribuidos & Microservicios" },
    { name: "Globant", type: "empresa", tag: "Empresa", pais: "Argentina", desc: "Unicornio global de tecnología que reinventa los negocios a través de soluciones de IA y diseño digital.", web: "https://globant.com", redes: "@Globant", oferta: "Talleres de experiencia de usuario, IA aplicada e ingeniería cloud", tech: "AI Studio & Digital Experience" },
    { name: "Thoughtworks", type: "empresa", tag: "Empresa", pais: "UK", desc: "Consultora global en integración continua, arquitectura evolutiva e ingeniería de software de alto impacto.", web: "https://thoughtworks.com", redes: "@Thoughtworks", oferta: "Clases magistrales en packaging ágil y Clean Architecture", tech: "Agile Software & Continuous Delivery" },
    { name: "VTEX Commerce", type: "empresa", tag: "Empresa", pais: "Brasil", desc: "Plataforma global de comercio digital composable para grandes marcas multinacionales.", web: "https://vtex.com", redes: "@VTEXTrueCloud", oferta: "Capacitaciones en arquitecturas compuestas e-commerce", tech: "Composable Commerce & Cloud" },
    { name: "NotCo Tech", type: "empresa", tag: "Empresa", pais: "Chile", desc: "FoodTech de escala global que utiliza IA para replicar productos animales con plantas.", web: "https://notco.com", redes: "@NotCo_tech", oferta: "Programas de pasantía e investigación en algoritmos predictivos", tech: "AI Molecular Matching" },
    { name: "Rappi Tech Hub", type: "atraccion", tag: "Atracción de Talento", pais: "Colombia", desc: "Plataforma multilatina de tecnología conectando talento en desarrollo móvil e infraestructura en tiempo real.", web: "https://rappi.com", redes: "@Rappi_official", oferta: "Becas para desarrolladores iOS y Android de alta escala", tech: "Real-Time Logistics & Mobile" }
  ];

  return (
    <div className="min-h-screen bg-[var(--rn-surface-base)] text-[var(--rn-text-primary)] font-sans antialiased">
      
      {/* SOLID HEADER (No glassmorphism, no shadow, just 1px border) */}
      <header className="sticky top-0 z-50 bg-[var(--rn-surface-base)] border-b border-[var(--rn-border-subtle)] py-4 px-6 md:px-8 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-heading font-black text-2xl tracking-tight text-[var(--rn-text-primary)] flex items-center">
            RUTA <span className="font-serif italic text-[var(--rn-text-link)] ml-1">N</span><sup className="text-sm ml-0.5">ⁿ</sup>
          </div>
          <nav className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 md:pb-0">
            {['talento', 'ofertas', 'empresas', 'datos'].map(tab => (
              <button
                key={tab}
                onClick={() => handleNavClick(tab as any)}
                className={`h-[48px] px-6 rounded font-bold text-[14px] uppercase tracking-[0.02em] transition-colors border ${
                  activeTab === tab
                    ? 'bg-[var(--rn-surface-ink)] text-white border-[var(--rn-surface-ink)]'
                    : 'bg-transparent text-[var(--rn-text-secondary)] border-transparent hover:bg-[var(--rn-surface-subtle)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div className={activeTab === 'datos' ? 'hidden' : 'block'}>
        
        {/* HERO: Superficie Marca */}
        <section className="bg-[var(--rn-surface-brand)] text-[var(--rn-text-on-brand)] py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
          <span className="text-[var(--rn-text-on-brand-secondary)]/10 text-[600px] font-black absolute -top-40 -right-20 leading-none select-none pointer-events-none">ⁿ</span>
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-[56px] md:text-[88px] font-black font-heading leading-[1.1] tracking-[-0.03em] mb-12">
                El Hub que conecta el Talento, las Ofertas y las Empresas
              </h1>
              <div className="flex flex-wrap items-center gap-4 mb-20">
                <a href="#ofertas" className="h-[48px] px-7 bg-[var(--rn-action-on-brand-bg)] text-[var(--rn-action-on-brand-text)] font-bold rounded flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                  Explorar Convocatorias <span className="font-sans text-lg leading-none">→</span>
                </a>
                <a href="#talento" className="h-[48px] px-7 bg-transparent border-2 border-white text-white font-bold rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                  Formación Gratuita
                </a>
              </div>
            </div>

            {/* KPIs sin iconos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-[var(--rn-border-brand)] max-w-4xl">
              <div>
                <div className="text-[44px] md:text-[56px] font-black font-heading tracking-[-0.03em] leading-none">+12.5K</div>
                <div className="text-[16px] text-[var(--rn-text-on-brand-secondary)] font-bold mt-3">Talento Formado</div>
              </div>
              <div>
                <div className="text-[44px] md:text-[56px] font-black font-heading tracking-[-0.03em] leading-none">100%</div>
                <div className="text-[16px] text-[var(--rn-text-on-brand-secondary)] font-bold mt-3">Acceso Gratuito</div>
              </div>
              <div>
                <div className="text-[44px] md:text-[56px] font-black font-heading tracking-[-0.03em] leading-none">+420</div>
                <div className="text-[16px] text-[var(--rn-text-on-brand-secondary)] font-bold mt-3">Empresas Aliadas</div>
              </div>
            </div>
          </div>
        </section>

        {/* HABILIDADES: Superficie Base */}
        <section id="talento" className="bg-[var(--rn-surface-base)] text-[var(--rn-text-primary)] py-24 px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[var(--rn-text-muted)] block mb-4">Iniciativa Insignia</span>
              <h2 className="text-[40px] md:text-[56px] font-bold font-heading tracking-[-0.02em] mb-6 leading-tight">
                ¿Qué es Habilidades Digitales?
              </h2>
              <p className="text-[18px] text-[var(--rn-text-secondary)] leading-[1.55]">
                Es la iniciativa insignia de formación en tecnología liderada por la <strong className="text-[var(--rn-text-primary)]">Subdirección de Cultura y Conocimiento de Ruta N</strong>. Nuestro propósito es democratizar el acceso al conocimiento especializado en Inteligencia Artificial, RPA, Cloud y Datos, conectando el talento de Medellín con oportunidades laborales.
              </p>
            </div>

            {/* Cards sin sombras, radio 8px, linea 1px */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-[8px] border border-[var(--rn-border-subtle)] bg-white flex flex-col justify-between">
                <div>
                  <Zap className="w-8 h-8 text-[var(--rn-text-primary)] mb-6" strokeWidth={1.5} />
                  <h3 className="text-[26px] font-bold font-heading tracking-[-0.01em] mb-4">100% Gratuito y Accesible</h3>
                  <p className="text-[16px] text-[var(--rn-text-secondary)] leading-[1.5]">Sin costos de matrícula ni mensualidades. Financiado e impulsado por Ruta N como inversión social pública en el capital humano.</p>
                </div>
                <div className="mt-8 pt-6 border-t border-[var(--rn-border-subtle)] text-[14px] font-bold tracking-[0.02em] uppercase text-[var(--rn-text-muted)]">
                  Inversión Social Pública
                </div>
              </div>
              <div className="p-8 rounded-[8px] border border-[var(--rn-border-subtle)] bg-white flex flex-col justify-between">
                <div>
                  <Laptop className="w-8 h-8 text-[var(--rn-text-primary)] mb-6" strokeWidth={1.5} />
                  <h3 className="text-[26px] font-bold font-heading tracking-[-0.01em] mb-4">Modalidad Virtual e Híbrida</h3>
                  <p className="text-[16px] text-[var(--rn-text-secondary)] leading-[1.5]">Diseñado para adaptarse a tu ritmo. Clases sincrónicas virtuales, laboratorios en vivo y talleres presenciales en el Complejo de Innovación.</p>
                </div>
                <div className="mt-8 pt-6 border-t border-[var(--rn-border-subtle)] text-[14px] font-bold tracking-[0.02em] uppercase text-[var(--rn-text-muted)]">
                  Flexible & Laboratorios
                </div>
              </div>
              <div className="p-8 rounded-[8px] border border-[var(--rn-border-subtle)] bg-white flex flex-col justify-between">
                <div>
                  <Award className="w-8 h-8 text-[var(--rn-text-primary)] mb-6" strokeWidth={1.5} />
                  <h3 className="text-[26px] font-bold font-heading tracking-[-0.01em] mb-4">Certificación Reconocida</h3>
                  <p className="text-[16px] text-[var(--rn-text-secondary)] leading-[1.5]">Insignias y certificados co-emitidos por Ruta N y aliados internacionales (Pix Robotics, SoftServe, Digital House, AWS, Smart4IA).</p>
                </div>
                <div className="mt-8 pt-6 border-t border-[var(--rn-border-subtle)] text-[14px] font-bold tracking-[0.02em] uppercase text-[var(--rn-text-muted)]">
                  Acreditación Global
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OFERTAS: Superficie Sutil */}
        <section id="ofertas" className="bg-[var(--rn-surface-subtle)] text-[var(--rn-text-primary)] py-24 px-6 lg:px-8 border-y border-[var(--rn-border-subtle)]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
              <div className="max-w-2xl">
                <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[var(--rn-text-muted)] block mb-4">Momento 1: Convocatorias</span>
                <h2 className="text-[40px] md:text-[56px] font-bold font-heading tracking-[-0.02em] mb-4 leading-tight">
                  Ofertas del Ecosistema
                </h2>
                <p className="text-[18px] text-[var(--rn-text-secondary)] leading-[1.55]">
                  Programas, becas, financiamiento y convocatorias abiertas diseñadas para impulsar a emprendedores, profesionales y empresas tecnológicas.
                </p>
              </div>

              {/* Tabs Solid Style (No thin underlines) */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'todas', label: 'Todas' },
                  { id: 'activo', label: 'Activo' },
                  { id: 'cerrado', label: 'Cerrado' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setOfertaCategory(cat.id as any)}
                    className={`h-[48px] px-6 rounded font-bold text-[14px] uppercase tracking-[0.02em] transition-colors border ${
                      ofertaCategory === cat.id
                        ? 'bg-[var(--rn-surface-ink)] text-white border-[var(--rn-surface-ink)]'
                        : 'bg-transparent text-[var(--rn-text-primary)] border-[var(--rn-border-subtle)] hover:bg-[var(--rn-surface-base)]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de Ofertas: Radio 8px, Borde 1px, Sin sombra, Portada plana */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ofertas.filter(o => ofertaCategory === 'todas' || (ofertaCategory === 'activo' && o.status === 'Activo') || (ofertaCategory === 'cerrado' && o.status === 'Cerrado')).map((item, idx) => (
                <div key={idx} className="bg-white rounded-[8px] overflow-hidden border border-[var(--rn-border-subtle)] flex flex-col">
                  {/* Portada Color Plano Marca */}
                  <div className={`h-[170px] relative overflow-hidden flex items-center justify-center ${item.status === 'Activo' ? 'bg-[var(--rn-surface-brand)]' : 'bg-[var(--rn-surface-subtle)]'}`}>
                    <span className={`text-[120px] font-black leading-none absolute -right-2 -bottom-6 select-none pointer-events-none ${item.status === 'Activo' ? 'text-white/10' : 'text-[var(--rn-text-secondary)]/10'}`}>ⁿ</span>
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-[14px] font-bold tracking-[0.02em] uppercase px-3 py-1.5 rounded ${
                        item.status === 'Activo' 
                        ? 'bg-[var(--rn-state-open-bg)] text-[var(--rn-state-open-text)]' 
                        : 'bg-[var(--rn-state-closed-bg)] text-[var(--rn-state-closed-text)]'
                      } flex items-center gap-2`}>
                        {item.status === 'Activo' && <span className="w-2 h-2 rounded-full bg-current block"></span>}
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-[14px] font-bold uppercase tracking-[0.08em] text-[var(--rn-text-muted)] mb-3 block">
                        {item.aliado}
                      </div>
                      <h3 className="text-[26px] font-bold font-heading tracking-[-0.01em] text-[var(--rn-text-primary)] mb-3 leading-[1.2]">
                        {item.title}
                      </h3>
                      <p className="text-[16px] text-[var(--rn-text-secondary)] leading-[1.5] mb-6">
                        {item.desc}
                      </p>
                    </div>
                    <div>
                      <div className="w-full h-[1px] bg-[var(--rn-border-subtle)] mb-6"></div>
                      
                      {item.status === 'Activo' ? (
                        <button className="w-full h-[48px] bg-[var(--rn-action-primary-bg)] text-white font-bold rounded flex items-center justify-center gap-2 hover:bg-[var(--rn-action-primary-bg-hover)] transition-colors">
                          Quiero inscribirme <span className="font-sans text-lg leading-none">→</span>
                        </button>
                      ) : (
                        <button className="w-full h-[48px] bg-transparent text-[var(--rn-text-link)] font-bold rounded flex items-center justify-center gap-2 hover:bg-[var(--rn-surface-subtle)] transition-colors">
                          Ver resultados <span className="font-sans text-lg leading-none">→</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMPRESAS: Superficie Base */}
        <section id="empresas" className="bg-[var(--rn-surface-base)] text-[var(--rn-text-primary)] py-24 px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[var(--rn-text-muted)] block mb-4">Red de Conexiones</span>
              <h2 className="text-[40px] md:text-[56px] font-bold font-heading tracking-[-0.02em] mb-6 leading-tight">
                Nuestros Aliados Estratégicos
              </h2>
              <p className="text-[18px] text-[var(--rn-text-secondary)] leading-[1.55]">
                Unimos esfuerzos con el sector público, privado, academia y cooperación internacional para consolidar el Distrito.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {[
                { id: 'todas', label: 'Todas' },
                { id: 'formador', label: 'Formador' },
                { id: 'empresa', label: 'Empresa' },
                { id: 'atraccion', label: 'Atracción de Talento' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setAliadoCategory(filter.id as any);
                    setAliadoCategoryIndex(0);
                  }}
                  className={`h-[48px] px-6 rounded font-bold text-[14px] uppercase tracking-[0.02em] transition-colors border ${
                    aliadoCategory === filter.id
                      ? 'bg-[var(--rn-surface-ink)] text-white border-[var(--rn-surface-ink)]'
                      : 'bg-transparent text-[var(--rn-text-primary)] border-[var(--rn-border-subtle)] hover:bg-[var(--rn-surface-subtle)]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {(() => {
              const filteredAliados = allAliados.filter(a => aliadoCategory === 'todas' || a.type === aliadoCategory);
              const itemsPerPage = 8; 
              const maxPages = Math.ceil(filteredAliados.length / itemsPerPage) || 1;
              const visibleAliados = filteredAliados.slice(aliadoPageIndex * itemsPerPage, (aliadoPageIndex + 1) * itemsPerPage);

              return (
                <div>
                  {/* Logos y Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {visibleAliados.map((aliado, idx) => (
                      <div key={idx} className="border border-[var(--rn-border-subtle)] rounded-[8px] p-6 flex flex-col justify-between">
                        <div>
                          {/* Logo placeholder en superficie sutil */}
                          <div className="w-full h-[80px] bg-[var(--rn-surface-subtle)] rounded flex items-center justify-center text-[var(--rn-text-muted)] font-bold text-[14px] mb-6">
                            {aliado.name.split(' ')[0]}
                          </div>
                          <span className="inline-block text-[12px] font-bold uppercase bg-[var(--rn-state-cat-bg)] text-[var(--rn-state-cat-text)] px-2 py-1 rounded mb-3">
                            {aliado.tag}
                          </span>
                          <h3 className="font-bold font-heading text-[18px] text-[var(--rn-text-primary)] leading-tight mb-2">{aliado.name}</h3>
                          <span className="text-[14px] text-[var(--rn-text-secondary)]">{aliado.pais}</span>
                        </div>
                        <button 
                          onClick={() => setSelectedAliado(aliado)}
                          className="mt-6 text-[16px] font-bold text-[var(--rn-text-link)] hover:text-[var(--rn-text-link-hover)] text-left flex items-center gap-1"
                        >
                          Más información <span className="font-sans">→</span>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Paginación minimalista */}
                  <div className="flex items-center justify-between border-t border-[var(--rn-border-subtle)] pt-6">
                    <div className="text-[16px] text-[var(--rn-text-secondary)]">
                      Mostrando <strong className="text-[var(--rn-text-primary)]">{visibleAliados.length}</strong> de <strong className="text-[var(--rn-text-primary)]">{filteredAliados.length}</strong>
                    </div>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setAliadoCategoryIndex(p => Math.max(0, p - 1))}
                        disabled={aliadoPageIndex === 0}
                        className="text-[16px] font-bold text-[var(--rn-text-link)] disabled:text-[var(--rn-text-muted)] flex items-center gap-1 hover:text-[var(--rn-text-link-hover)]"
                      >
                        <span className="font-sans leading-none">←</span> Anterior
                      </button>
                      <button 
                        onClick={() => setAliadoCategoryIndex(p => Math.min(maxPages - 1, p + 1))}
                        disabled={aliadoPageIndex >= maxPages - 1}
                        className="text-[16px] font-bold text-[var(--rn-text-link)] disabled:text-[var(--rn-text-muted)] flex items-center gap-1 hover:text-[var(--rn-text-link-hover)]"
                      >
                         Siguiente <span className="font-sans leading-none">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* CTA FINAL: Superficie INK */}
        <section className="bg-[var(--rn-surface-ink)] text-[var(--rn-text-on-dark)] py-24 px-6 lg:px-8 border-t border-[var(--rn-border-on-dark)]">
          <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
            <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[var(--rn-text-on-dark-secondary)] block mb-6">Soluciones Corporativas</span>
            <h2 className="text-[40px] md:text-[56px] font-bold font-heading tracking-[-0.02em] mb-6 max-w-3xl leading-tight">
              ¿Quieres ser un aliado oficial de Ruta N?
            </h2>
            <p className="text-[18px] text-[var(--rn-text-on-dark-secondary)] max-w-2xl mb-12 leading-[1.55]">
              Desarrollamos iniciativas conjuntas, convocatorias y proyectos de impacto en el ecosistema conectando tecnología y organizaciones.
            </p>
            <button className="h-[48px] px-8 bg-[var(--rn-action-on-dark-bg)] text-[var(--rn-action-on-dark-text)] font-bold rounded flex items-center justify-center gap-2 hover:bg-white transition-colors">
              Solicitar Alianza <span className="font-sans text-lg leading-none">→</span>
            </button>
          </div>
        </section>
      </div>

      {/* VISTA DE DATOS INDEPENDIENTE (Superficie Ink / Base Híbrido) */}
      <div className={activeTab === 'datos' ? 'block' : 'hidden'}>
        <section className="bg-[var(--rn-surface-base)] py-24 px-6 lg:px-8 min-h-[80vh]">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[var(--rn-text-muted)] block mb-4">Inteligencia & Transparencia</span>
              <h2 className="text-[40px] md:text-[56px] font-bold font-heading tracking-[-0.02em] mb-6 text-[var(--rn-text-primary)] leading-tight">
                Repositorio Abierto de Datos
              </h2>
              <p className="text-[18px] text-[var(--rn-text-secondary)] leading-[1.55]">
                Un vistazo rápido a las cifras clave que mueven el ecosistema. Explora métricas en tiempo real, microdatos e informes avanzados en PowerBI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 border-t border-[var(--rn-border-subtle)] pt-16">
              {[
                { number: "+450", label: "DataSets Abiertos" },
                { number: "38", label: "Tableros PowerBI" },
                { number: "+18K", label: "Consultas Mensuales" },
                { number: "100%", label: "Acceso Público" }
              ].map((metric, i) => (
                <div key={i}>
                  <div className="text-[56px] font-black font-heading tracking-[-0.03em] text-[var(--rn-surface-brand)] leading-none mb-4">
                    {metric.number}
                  </div>
                  <h3 className="font-bold text-[var(--rn-text-primary)] text-[18px] mb-2">{metric.label}</h3>
                  <div className="w-8 h-[2px] bg-[var(--rn-surface-accent)]"></div>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <a href="https://powerbi.microsoft.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-[48px] px-8 bg-[var(--rn-action-primary-bg)] text-white font-bold rounded items-center justify-center gap-2 hover:bg-[var(--rn-action-primary-bg-hover)] transition-colors">
                Ir al Dashboard Completo <span className="font-sans text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* MODAL ALIADOS */}
      {selectedAliado && (
        <div className="fixed inset-0 z-50 bg-[var(--rn-surface-ink)]/90 flex items-center justify-center p-4">
          <div className="bg-white rounded-[16px] p-8 max-w-2xl w-full text-[var(--rn-text-primary)] border border-[var(--rn-border-subtle)] relative overflow-hidden">
            <button 
              onClick={() => setSelectedAliado(null)} 
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded border border-[var(--rn-border-subtle)] hover:bg-[var(--rn-surface-subtle)] font-bold text-[18px]"
            >
              ✕
            </button>
            <span className="inline-block text-[12px] font-bold uppercase bg-[var(--rn-state-cat-bg)] text-[var(--rn-state-cat-text)] px-2 py-1 rounded mb-6">
              {selectedAliado.tag}
            </span>
            <h3 className="text-[40px] font-bold font-heading tracking-[-0.02em] mb-2 leading-tight">{selectedAliado.name}</h3>
            <div className="text-[16px] text-[var(--rn-text-secondary)] mb-8 pb-8 border-b border-[var(--rn-border-subtle)]">
              {selectedAliado.pais}
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[var(--rn-text-muted)] block mb-2">Descripción</span>
                <p className="text-[16px] text-[var(--rn-text-secondary)] leading-[1.5]">{selectedAliado.desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[var(--rn-text-muted)] block mb-2">Programa</span>
                  <p className="text-[16px] font-bold">{selectedAliado.oferta}</p>
                </div>
                <div>
                  <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[var(--rn-text-muted)] block mb-2">Tecnología</span>
                  <p className="text-[16px] font-bold text-[var(--rn-text-brand)]">{selectedAliado.tech}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--rn-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6">
              <a href={selectedAliado.web} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto h-[48px] px-8 bg-[var(--rn-action-primary-bg)] text-white font-bold rounded flex items-center justify-center gap-2 hover:bg-[var(--rn-action-primary-bg-hover)] transition-colors">
                Visitar Sitio Web <span className="font-sans text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
