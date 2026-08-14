import { useEffect, useMemo, useState } from 'react'
import type { JSX, ReactNode } from 'react'
import {
  caseStudies,
  certifications,
  experiences,
  highlights,
  labItems,
  publicProjects,
  skillGroups,
  type Tone,
} from './data'

type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'arrow'
  | 'check'
  | 'code'
  | 'cloud'
  | 'spark'
  | 'shield'
  | 'database'
  | 'layers'
  | 'chevron'
  | 'menu'
  | 'close'
  | 'top'

const Icon = ({ name, size = 20 }: { name: IconName; size?: number }) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  const paths: Record<IconName, JSX.Element> = {
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S18 0 15 1.5a13.4 13.4 0 0 0-7 0C5 0 3.9 0 3.9 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 2.2 7c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4" />
        <path d="M8 19c-3 .9-3-1.5-4-2" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="9" width="4" height="12" />
        <path d="M5 3.5a2 2 0 1 0 0 .1" />
        <path d="M11 21V9h4v2c1-1.5 2.5-2.4 4.2-2.2 2.4.2 2.8 2 2.8 5V21h-4v-6.5c0-1.8-.7-2.5-1.8-2.5-1.5 0-2.2 1-2.2 3V21z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    cloud: (
      <>
        <path d="M17.5 19H7a5 5 0 1 1 1-9.9A7 7 0 0 1 21 12.5 3.5 3.5 0 0 1 17.5 19Z" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z" />
        <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    top: (
      <>
        <path d="m6 15 6-6 6 6" />
        <path d="M12 9v10" />
      </>
    ),
  }

  return <svg {...common}>{paths[name]}</svg>
}

const toneIcon: Record<Tone, IconName> = {
  backend: 'code',
  cloud: 'cloud',
  ai: 'spark',
  quality: 'shield',
  integration: 'database',
  frontend: 'layers',
}

const SectionTitle = ({
  kicker,
  title,
  copy,
  align = 'left',
}: {
  kicker: string
  title: string
  copy?: string
  align?: 'left' | 'center'
}) => (
  <div className={`section-heading ${align === 'center' ? 'centered' : ''}`}>
    <span className="kicker">{kicker}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
)

const ToneBadge = ({ tone, children }: { tone: Tone; children: ReactNode }) => (
  <span className={`tone-badge tone-${tone}`}>{children}</span>
)

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [showTop, setShowTop] = useState(false)
  const [stackMode, setStackMode] = useState<'backend' | 'fullstack'>('backend')

  const navItems = useMemo(
    () => [
      ['inicio', 'Inicio'],
      ['destacados', 'Aportes'],
      ['casos', 'Casos'],
      ['proyectos', 'Proyectos'],
      ['lab', 'Lab'],
      ['ai', 'AI Engineering'],
      ['experiencia', 'Experiencia'],
      ['skills', 'Stack'],
      ['contacto', 'Contacto'],
    ],
    [],
  )

  useEffect(() => {
    const ids = navItems.map(([id]) => id)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.05, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [navItems])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio" onClick={closeMobile}>
          <span className="brand-mark">JM</span>
          <span className="brand-copy">
            <strong>Jose Mamani</strong>
            <small>Software Engineer</small>
          </span>
        </a>

        <nav className="nav desktop-nav" aria-label="Navegación principal">
          {navItems.slice(1, 7).map(([id, label]) => (
            <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contacto">
            Contacto
          </a>
        </nav>

        <button
          className="menu-button"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <Icon name={mobileOpen ? 'close' : 'menu'} />
        </button>

        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Navegación móvil">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={closeMobile}>
                {label}
                <Icon name="chevron" size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability">
                <span className="pulse" />
                Disponible · Semi Senior en adelante · Incorporación inmediata
              </div>

              <p className="eyebrow">SOFTWARE ENGINEER · JAVA BACKEND · LIMA, PERÚ</p>
              <h1>
                Construyo backend robusto.
                <span>Automatizo lo repetitivo.</span>
              </h1>

              <p className="hero-lead">
                Especializado en <strong>Java Backend, Spring Boot y Microservicios</strong>, con experiencia en
                cloud, APIs empresariales e <strong>IA aplicada al desarrollo</strong> con GitHub Copilot y MCP.
              </p>

              <div className="hero-focus" aria-label="Áreas principales">
                <ToneBadge tone="backend">Java Backend</ToneBadge>
                <ToneBadge tone="cloud">Microservices & Cloud</ToneBadge>
                <ToneBadge tone="ai">AI Engineering</ToneBadge>
                <ToneBadge tone="quality">Quality & Performance</ToneBadge>
              </div>

              <div className="hero-actions">
                <a className="button primary" href="#casos">
                  Ver casos destacados <Icon name="arrow" />
                </a>
                <a className="button ghost" href="https://github.com/joseant1215" target="_blank" rel="noreferrer">
                  <Icon name="github" /> GitHub
                </a>
                <a
                  className="button ghost"
                  href="https://www.linkedin.com/in/jose-mamani-594623123/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="linkedin" /> LinkedIn
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Resumen profesional">
              <div className="terminal-head">
                <span />
                <span />
                <span />
                <small>profile.ts</small>
              </div>

              <div className="terminal-body">
                <p><span className="syntax-key">const</span> profile = {'{'}</p>
                <p>&nbsp;&nbsp;role: <span className="syntax-string">'Software Engineer'</span>,</p>
                <p>&nbsp;&nbsp;specialty: <span className="syntax-string">'Java Backend'</span>,</p>
                <p>&nbsp;&nbsp;focus: [</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">'Microservices'</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">'Cloud'</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">'AI Engineering'</span>,</p>
                <p>&nbsp;&nbsp;],</p>
                <p>&nbsp;&nbsp;experience: <span className="syntax-string">'desde 2019'</span>,</p>
                <p>&nbsp;&nbsp;availability: <span className="syntax-boolean">true</span></p>
                <p>{'}'}</p>
              </div>

              <div className="panel-footer">
                <span>Java 17</span>
                <span>Spring Boot</span>
                <span>Azure</span>
                <span>OpenAPI</span>
                <span>MCP</span>
              </div>
            </aside>
          </div>

          <div className="stats">
            <div>
              <span className="stat-icon tone-backend"><Icon name="code" /></span>
              <strong>Desde 2019</strong>
              <span>Construyendo software</span>
            </div>
            <div>
              <span className="stat-icon tone-cloud"><Icon name="cloud" /></span>
              <strong>Java + Cloud</strong>
              <span>Backend empresarial</span>
            </div>
            <div>
              <span className="stat-icon tone-integration"><Icon name="database" /></span>
              <strong>API-first</strong>
              <span>REST · OpenAPI · Integraciones</span>
            </div>
            <div>
              <span className="stat-icon tone-ai"><Icon name="spark" /></span>
              <strong>AI-assisted</strong>
              <span>Copilot · MCP · Automation</span>
            </div>
          </div>
        </section>

        <section className="section about">
          <SectionTitle
            kicker="SOBRE MÍ"
            title="Backend como especialidad. Visión de producto completo."
            copy="Mi foco está en Java Backend, pero haber trabajado también con frontend, datos, cloud, DevOps y testing me permite entender una solución de extremo a extremo."
          />

          <div className="about-grid">
            <article className="about-card about-story">
              <div className="story-line" />
              <p>
                En mi experiencia más reciente trabajé como <strong>Software Engineer en Encora</strong> para
                <strong> Pacífico Seguros</strong>, desarrollando microservicios, Azure Functions, integraciones de
                negocio y herramientas de Developer Productivity.
              </p>
              <p>
                Una parte importante de mi evolución fue aplicar <strong>GitHub Copilot + MCP</strong> para conectar
                agentes con contexto técnico y automatizar tareas del ciclo de ingeniería.
              </p>
            </article>

            <article className="about-card">
              <h3>Lo que aporto</h3>
              <ul className="check-list">
                <li><Icon name="check" /> Backend Java / Spring</li>
                <li><Icon name="check" /> Diseño e integración de APIs</li>
                <li><Icon name="check" /> Cloud, serverless y eventos</li>
                <li><Icon name="check" /> Developer Productivity con IA</li>
                <li><Icon name="check" /> Testing funcional y performance</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="destacados">
          <SectionTitle
            kicker="ENGINEERING HIGHLIGHTS"
            title="Aportes que representan mi perfil"
            copy="Una vista rápida de los frentes técnicos en los que he trabajado y que hoy definen mi propuesta como Software Engineer."
          />

          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className={`highlight-card tone-surface-${item.tone}`} key={item.number}>
                <div className="highlight-top">
                  <span className={`highlight-icon tone-${item.tone}`}>
                    <Icon name={toneIcon[item.tone]} />
                  </span>
                  <span className="highlight-number">{item.number}</span>
                </div>
                <span className={`project-eyebrow text-${item.tone}`}>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="tags">
                  {item.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="casos">
          <SectionTitle
            kicker="CASE STUDIES"
            title="Casos de ingeniería destacados"
            copy="Más que una lista de tecnologías: problema, enfoque técnico e impacto."
          />

          <div className="case-list">
            {caseStudies.map((study, index) => (
              <article className={`case-card tone-border-${study.tone}`} key={study.title}>
                <div className="case-index">0{index + 1}</div>

                <div className="case-main">
                  <span className={`project-eyebrow text-${study.tone}`}>{study.eyebrow}</span>
                  <h3>{study.title}</h3>

                  <div className="case-columns">
                    <div>
                      <small>RETO</small>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <small>SOLUCIÓN</small>
                      <p>{study.solution}</p>
                    </div>
                  </div>

                  <div className="case-impact">
                    {study.impact.map((item) => (
                      <span key={item}>
                        <Icon name="check" size={17} /> {item}
                      </span>
                    ))}
                  </div>

                  <div className="tags">
                    {study.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>


        <section className="section public-projects-section" id="proyectos">
          <SectionTitle
            kicker="FEATURED PUBLIC WORK"
            title="Código que puedes revisar"
            copy="Proyectos públicos y genéricos creados para demostrar mi forma de trabajar sin exponer código, datos ni documentación privada de clientes."
          />

          <div className="public-project-grid">
            {publicProjects.map((project) => (
              <article className={`public-project-card tone-border-${project.tone}`} key={project.title}>
                <div className="public-project-top">
                  <span className={`project-state text-${project.tone}`}>{project.status}</span>
                  <span className={`highlight-icon tone-${project.tone}`}>
                    <Icon name={toneIcon[project.tone]} />
                  </span>
                </div>

                <span className={`project-eyebrow text-${project.tone}`}>{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="public-project-actions">
                  <a className="project-link primary-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
                    <Icon name="github" size={17} /> Ver código
                  </a>
                  <a className="project-link" href={project.architectureUrl} target="_blank" rel="noreferrer">
                    Arquitectura <Icon name="arrow" size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section ai-section" id="ai">
          <SectionTitle
            kicker="AI ENGINEERING"
            title="Contexto útil para agentes, no solo prompts."
            copy="La IA gana precisión cuando entiende arquitectura, datos y reglas. Esa fue la evolución de las iniciativas en las que participé."
          />

          <div className="ai-layout">
            <div className="architecture-card">
              <div className="architecture-header">
                <span className="tone-badge tone-ai">Context Engineering</span>
                <small>Flujo conceptual</small>
              </div>

              <div className="context-flow" aria-label="Diagrama conceptual de MCP y GitHub Copilot">
                <div className="source-stack">
                  <div className="flow-node tone-surface-integration">
                    <Icon name="database" />
                    <span>SQL Server Azure</span>
                  </div>
                  <div className="flow-node tone-surface-integration">
                    <Icon name="layers" />
                    <span>Jira / Requerimientos</span>
                  </div>
                  <div className="flow-node tone-surface-integration">
                    <Icon name="code" />
                    <span>OpenAPI / Swagger</span>
                  </div>
                </div>

                <div className="flow-arrow" aria-hidden="true">
                  <span />
                  <Icon name="arrow" />
                </div>

                <div className="flow-node flow-core tone-surface-ai">
                  <Icon name="spark" size={28} />
                  <strong>MCP</strong>
                  <small>Contexto técnico</small>
                </div>

                <div className="flow-arrow" aria-hidden="true">
                  <span />
                  <Icon name="arrow" />
                </div>

                <div className="flow-node flow-core copilot-node">
                  <Icon name="github" size={28} />
                  <strong>GitHub Copilot</strong>
                  <small>Agente / workspace</small>
                </div>
              </div>

              <div className="output-grid">
                <div><Icon name="code" /><span>Código backend</span></div>
                <div><Icon name="layers" /><span>Contratos API</span></div>
                <div><Icon name="shield" /><span>Testing</span></div>
                <div><Icon name="check" /><span>Documentación</span></div>
              </div>
            </div>

            <div className="ai-copy">
              <article>
                <span className="step-number">01</span>
                <div>
                  <h3>Prompts modularizados</h3>
                  <p>
                    Evolución desde un CRUD inicial hacia instrucciones separadas por responsabilidades de arquitectura,
                    facilitando mantenimiento y reutilización.
                  </p>
                </div>
              </article>

              <article>
                <span className="step-number">02</span>
                <div>
                  <h3>MCPs propios</h3>
                  <p>
                    Integraciones con SQL Server Azure y OpenAPI/Swagger para aportar contexto y automatizar tareas de
                    creación, actualización y eliminación de contratos.
                  </p>
                </div>
              </article>

              <article>
                <span className="step-number">03</span>
                <div>
                  <h3>Adopción por squads</h3>
                  <p>
                    Workspaces compartidos para probar los flujos, recopilar feedback y continuar refinando la
                    experiencia de desarrollo asistido.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section cloud-section">
          <SectionTitle
            kicker="CLOUD & EVENT-DRIVEN"
            title="Automatización con Azure Functions"
            copy="Experiencia implementando funciones serverless para procesos programados, procesamiento de archivos y flujos orientados a eventos."
          />

          <div className="trigger-grid">
            <article className="trigger-card tone-surface-cloud">
              <span className="trigger-icon tone-cloud"><Icon name="cloud" /></span>
              <small>TIMER TRIGGER</small>
              <h3>Procesos programados</h3>
              <p>Ejecución automática de tareas backend en horarios o frecuencias definidas, sin intervención manual.</p>
            </article>
            <article className="trigger-card tone-surface-cloud">
              <span className="trigger-icon tone-cloud"><Icon name="database" /></span>
              <small>BLOB TRIGGER</small>
              <h3>Procesamiento de archivos</h3>
              <p>Reacción ante archivos almacenados en Azure Blob Storage para iniciar procesamiento y validaciones.</p>
            </article>
            <article className="trigger-card tone-surface-cloud">
              <span className="trigger-icon tone-cloud"><Icon name="spark" /></span>
              <small>EVENT GRID TRIGGER</small>
              <h3>Arquitectura orientada a eventos</h3>
              <p>Funciones activadas por eventos publicados en Azure para desacoplar y automatizar flujos de integración.</p>
            </article>
          </div>
        </section>

        <section className="section" id="experiencia">
          <SectionTitle
            kicker="EXPERIENCIA"
            title="Trayectoria profesional"
            copy="Resumen orientado a impacto. Los detalles adicionales se pueden expandir sin sobrecargar la lectura inicial."
          />

          <div className="timeline">
            {experiences.map((exp, index) => (
              <article className="experience-card" key={`${exp.company}-${exp.period}`}>
                <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>

                <div className="experience-head">
                  <div>
                    <h3>{exp.role}</h3>
                    <h4>
                      {exp.company}
                      {exp.client && <span> · Cliente: {exp.client}</span>}
                    </h4>
                    <p>{exp.meta}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>

                <p className="experience-summary">{exp.summary}</p>

                <ul className="experience-highlights">
                  {exp.highlights.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {exp.more.length > 0 && (
                  <details className="experience-details">
                    <summary>
                      Ver aportes adicionales <Icon name="chevron" size={16} />
                    </summary>
                    <ul>
                      {exp.more.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </details>
                )}

                <div className="tags">
                  {exp.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="lab">
          <SectionTitle
            kicker="ENGINEERING LAB"
            title="Lo que sigo aprendiendo y evolucionando"
            copy="Tecnologías y prácticas que estoy usando o explorando actualmente. Lo que aparece como laboratorio no se presenta como experiencia profesional previa."
          />

          <div className="lab-grid">
            {labItems.map((item) => (
              <article className={`lab-card tone-border-${item.tone}`} key={`${item.title}-${item.date}`}>
                <div className="lab-meta">
                  <span className={`lab-date text-${item.tone}`}>{item.date}</span>
                  <span className="lab-status">{item.status}</span>
                </div>
                <span className={`project-eyebrow text-${item.tone}`}>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionTitle
            kicker="TECH STACK"
            title="Tecnologías organizadas por propósito"
            copy="La prioridad visual está en Backend, Cloud e IA; frontend permanece como experiencia complementaria."
          />

          <div className="stack-mode" role="group" aria-label="Enfoque del stack">
            <button
              className={stackMode === 'backend' ? 'active' : ''}
              onClick={() => setStackMode('backend')}
              type="button"
            >
              Backend Focus
            </button>
            <button
              className={stackMode === 'fullstack' ? 'active' : ''}
              onClick={() => setStackMode('fullstack')}
              type="button"
            >
              Full Stack View
            </button>
          </div>

          <div className={`skill-grid stack-${stackMode}`}>
            {(stackMode === 'backend'
              ? skillGroups
              : [...skillGroups].sort((a, b) => {
                  const order = ['Frontend', 'Backend', 'Data & Integration', 'Cloud & DevOps', 'Quality', 'AI & Automation']
                  return order.indexOf(a.title) - order.indexOf(b.title)
                })
            ).map((group) => (
              <article className={`skill-card tone-border-${group.tone}`} key={group.title}>
                <div className="skill-head">
                  <span className={`skill-icon tone-${group.tone}`}>
                    <Icon name={toneIcon[group.tone]} />
                  </span>
                  <div>
                    <h3>{group.title}</h3>
                    <small>{group.description}</small>
                  </div>
                </div>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials" id="certificaciones">
          <div>
            <SectionTitle
              kicker="CERTIFICACIONES"
              title="Aprendizaje continuo"
              copy="Credenciales y formación complementaria alineadas con cloud, GitHub, agilidad y seguridad."
            />

            <div className="cert-list">
              {certifications.map((cert) => (
                <article className={`cert-item tone-border-${cert.tone}`} key={cert.title}>
                  <span className={`cert-icon tone-${cert.tone}`}>
                    <Icon name={toneIcon[cert.tone]} />
                  </span>
                  <div>
                    <strong>{cert.title}</strong>
                    <span>
                      {cert.issuer}
                      {cert.year && ` · ${cert.year}`}
                    </span>
                  </div>
                  {cert.credentialUrl ? (
                    <a
                      className="credential-link"
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver credencial de ${cert.title}`}
                    >
                      Ver credencial <Icon name="arrow" size={15} />
                    </a>
                  ) : (
                    <small className="credential-pending">URL pendiente</small>
                  )}
                </article>
              ))}
            </div>
          </div>

          <aside className="education-card">
            <span className="kicker">FORMACIÓN</span>
            <div className="education-item">
              <small>2020 — 2024</small>
              <h3>Ingeniería de Sistemas Computacionales</h3>
              <p>Universidad Privada del Norte</p>
              <strong>Bachiller</strong>
            </div>
            <hr />
            <div className="education-item">
              <small>2017 — 2019</small>
              <h3>Computación e Informática</h3>
              <p>Cibertec</p>
              <strong>Título Técnico Profesional</strong>
            </div>
          </aside>
        </section>

        <section className="contact-section" id="contacto">
          <div>
            <span className="kicker">CONTACTO</span>
            <h2>¿Buscas un Software Engineer Java Backend?</h2>
            <p>
              Disponible para oportunidades Semi Senior en adelante, en modalidad remota, híbrida o presencial.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button primary" href="mailto:joseant1215@gmail.com">
              <Icon name="mail" /> Escríbeme
            </a>
            <a
              className="button ghost"
              href="https://www.linkedin.com/in/jose-mamani-594623123/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" /> LinkedIn
            </a>
            <a className="button ghost" href="https://github.com/joseant1215" target="_blank" rel="noreferrer">
              <Icon name="github" /> GitHub
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Jose Mamani</span>
        <span>React 19 · TypeScript · Vite 8 · GitHub Pages</span>
      </footer>

      {showTop && (
        <a className="back-to-top" href="#inicio" aria-label="Volver arriba">
          <Icon name="top" />
        </a>
      )}
    </div>
  )
}

export default App
