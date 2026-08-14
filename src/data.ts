export type Tone = 'backend' | 'cloud' | 'ai' | 'quality' | 'integration' | 'frontend'

export type Experience = {
  role: string
  company: string
  client?: string
  period: string
  meta: string
  summary: string
  highlights: string[]
  more: string[]
  stack: string[]
}

export type Highlight = {
  number: string
  tone: Tone
  eyebrow: string
  title: string
  summary: string
  stack: string[]
}

export type CaseStudy = {
  tone: Tone
  eyebrow: string
  title: string
  challenge: string
  solution: string
  impact: string[]
  stack: string[]
}

export type LabItem = {
  date: string
  tone: Tone
  label: string
  title: string
  description: string
  status: string
}

export type PublicProject = {
  tone: Tone
  status: string
  eyebrow: string
  title: string
  summary: string
  highlights: string[]
  stack: string[]
  repositoryUrl: string
  architectureUrl: string
}

export type Certification = {
  title: string
  issuer: string
  year: string
  tone: Tone
  credentialUrl: string
}

export const highlights: Highlight[] = [
  {
    number: '01',
    tone: 'backend',
    eyebrow: 'Java Backend',
    title: 'Microservicios reactivos',
    summary:
      'APIs empresariales con Java 17, Spring Boot, WebFlux, JPA y SQL Server, siguiendo estándares de arquitectura corporativa.',
    stack: ['Java 17', 'Spring Boot', 'WebFlux', 'SQL Server'],
  },
  {
    number: '02',
    tone: 'cloud',
    eyebrow: 'Cloud & Serverless',
    title: 'Azure Functions',
    summary:
      'Automatización de procesos backend y flujos basados en eventos utilizando Timer, Blob y Event Grid Triggers.',
    stack: ['Azure Functions', 'Blob Storage', 'Event Grid'],
  },
  {
    number: '03',
    tone: 'ai',
    eyebrow: 'AI Engineering',
    title: 'GitHub Copilot + MCP',
    summary:
      'Prompts y MCPs conectados a fuentes técnicas para mejorar el contexto del agente y automatizar tareas de ingeniería.',
    stack: ['GitHub Copilot', 'MCP', 'SQL Server', 'Jira'],
  },
  {
    number: '04',
    tone: 'integration',
    eyebrow: 'API Engineering',
    title: 'Contratos OpenAPI',
    summary:
      'Flujos asistidos por IA para generar y gestionar contratos de API alineados con lineamientos backend internos.',
    stack: ['OpenAPI', 'Swagger', 'Mermaid', 'MCP'],
  },
  {
    number: '05',
    tone: 'quality',
    eyebrow: 'Quality Engineering',
    title: 'Karate DSL',
    summary:
      'Apoyo en automatización de pruebas de APIs, generación de escenarios y validación de requests, responses y JSON.',
    stack: ['Karate DSL', 'REST APIs', 'GitHub Copilot'],
  },
  {
    number: '06',
    tone: 'quality',
    eyebrow: 'Performance',
    title: 'k6 Performance Testing',
    summary:
      'Validación de rendimiento de endpoints y cambios de componentes de microservicios con escenarios reproducibles.',
    stack: ['k6', 'API Performance', 'Reports'],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    tone: 'backend',
    eyebrow: 'CASE 01 · BACKEND JAVA',
    title: 'Gestión de Contactos de Riesgos Laborales',
    challenge:
      'Construir servicios de registro, consulta y actualización de contactos dentro de una arquitectura empresarial estandarizada.',
    solution:
      'Desarrollo de un microservicio reactivo con Java 17, Spring Boot 3.4, WebFlux, Spring Data JPA y SQL Server, incorporando validaciones, OpenAPI y controles de calidad.',
    impact: [
      'Operaciones REST de registro, consulta y actualización parcial.',
      'Programación reactiva con Mono y Flux.',
      'Integración con Azure Key Vault, Docker y GitHub Actions.',
      'Pruebas automatizadas y análisis de calidad con JUnit 5 y SonarQube.',
    ],
    stack: ['Java 17', 'Spring Boot 3.4', 'WebFlux', 'JPA', 'SQL Server', 'Azure'],
  },
  {
    tone: 'ai',
    eyebrow: 'CASE 02 · AI ENGINEERING',
    title: 'Developer Productivity con GitHub Copilot + MCP',
    challenge:
      'Reducir trabajo repetitivo y mejorar la precisión del código generado por IA incorporando arquitectura, datos y reglas del proyecto.',
    solution:
      'Diseño de prompts modularizados por responsabilidades y desarrollo de MCPs conectados a SQL Server Azure, Jira y OpenAPI/Swagger para enriquecer el contexto del agente.',
    impact: [
      'Evolución de prompts monolíticos hacia una estructura modular reutilizable.',
      'Generación asistida de componentes backend por capas.',
      'Automatización de tareas sobre contratos OpenAPI.',
      'Workspace compartido con otros squads para prueba y retroalimentación.',
    ],
    stack: ['GitHub Copilot', 'MCP', 'OpenAPI', 'SQL Server Azure', 'Jira', 'Mermaid'],
  },
  {
    tone: 'quality',
    eyebrow: 'CASE 03 · QUALITY',
    title: 'QA Automation & Performance',
    challenge:
      'Acelerar la creación de pruebas de APIs y facilitar la validación de rendimiento después de cambios técnicos.',
    solution:
      'Prompts orientados a Karate DSL para automatización de escenarios de API y una iniciativa con k6 para ejecutar pruebas de performance y analizar reportes.',
    impact: [
      'Escenarios para requests, responses, headers y estructuras JSON.',
      'Prompts de QA organizados de forma modular.',
      'Pruebas de rendimiento de endpoints con k6.',
      'Apoyo de GitHub Copilot para estructurar y analizar resultados.',
    ],
    stack: ['Karate DSL', 'k6', 'REST APIs', 'GitHub Copilot'],
  },
]

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Encora',
    client: 'Pacífico Seguros',
    period: 'Mayo 2025 — Julio 2026',
    meta: 'Lima, Perú · Híbrido · Sector Seguros',
    summary:
      'Backend Java, Azure e iniciativas de Developer Productivity aplicando IA al ciclo de desarrollo de software.',
    highlights: [
      'Desarrollé microservicios reactivos con Java 17, Spring Boot 3.4, Spring WebFlux, Spring Data JPA y SQL Server.',
      'Implementé Azure Functions con Timer, Blob y Event Grid Triggers para automatización y procesamiento basado en eventos.',
      'Desarrollé MCPs y flujos con GitHub Copilot para automatizar generación de código, contratos OpenAPI y tareas de QA.',
      'Realicé integraciones backend para notificaciones, agendamiento y servicios de pago con Niubiz.',
    ],
    more: [
      'Mantenimiento correctivo del portal privado de documentación técnica doc-knowledge-center con Docusaurus, TypeScript y Markdown.',
      'Automatización de pruebas de APIs con Karate DSL y modularización de prompts destinados al área de QA.',
      'Performance testing con k6 para validar endpoints y cambios de versiones de componentes Kuntur.',
      'Homologación y manejo centralizado de errores provenientes de la API de pagos de Niubiz para entregar respuestas consistentes al frontend.',
      'Integración con DANA, servicio interno de notificaciones por correo y WhatsApp, además de flujos de agendamiento con asesores.',
      'Publicación de workspaces de IA para adopción por otros squads y seguimiento de feedback.',
    ],
    stack: [
      'Java 17', 'Spring Boot', 'WebFlux', 'Spring Data JPA', 'SQL Server',
      'Azure', 'Docker', 'GitHub Actions', 'OpenAPI', 'JUnit 5',
      'GitHub Copilot', 'MCP', 'Karate DSL', 'k6'
    ],
  },
  {
    role: 'Analista Programador Full Stack',
    company: 'Infraestructura Digital en la Nube S.A.C.',
    period: '2023 — 2024',
    meta: 'Lima, Perú',
    summary:
      'Desarrollo de microservicios, aplicaciones cloud y soluciones Full Stack con Java, Azure, AWS y frameworks JavaScript.',
    highlights: [
      'Diseñé e implementé microservicios con Java, Spring Boot y arquitectura hexagonal.',
      'Desarrollé APIs REST y servicios reactivos con Spring WebFlux.',
      'Trabajé con Azure, Docker, Kubernetes/AKS, Jenkins y Azure DevOps.',
      'Participé en frontend con React, Angular y Vue.js, además de servicios Node.js y AWS Serverless.',
    ],
    more: [
      'Integraciones con PostgreSQL, MongoDB, Cosmos DB y Redis.',
      'Uso de Azure Blob Storage para almacenamiento y administración de documentos.',
      'Microservicio de gestión de costos de capital con NestJS y TypeScript.',
      'APIs de integración con servicios externos usando Express.js y AWS API Gateway.',
      'Aplicación de evaluaciones adaptativas con NestJS, React y AWS Lambda.',
    ],
    stack: [
      'Java', 'Spring Boot', 'WebFlux', 'Azure', 'AWS', 'Docker',
      'Kubernetes', 'Node.js', 'TypeScript', 'React', 'Angular', 'Vue.js'
    ],
  },
  {
    role: 'Analista Programador Full Stack',
    company: 'Softdynamic S.A.C.',
    period: '2019 — 2023',
    meta: 'Lima, Perú',
    summary:
      'Construcción de soluciones educativas y de gestión con Java/Spring, tecnologías web y servicios cloud.',
    highlights: [
      'Desarrollé microservicios y servicios backend con Java, Spring Boot y Spring WebFlux.',
      'Implementé integraciones con bases de datos SQL/NoSQL y Azure Blob Storage.',
      'Participé en procesos de despliegue con Docker, Kubernetes, Jenkins y Azure DevOps.',
      'Desarrollé APIs REST y componentes serverless con Node.js, Express, TypeScript, AWS Lambda y API Gateway.',
    ],
    more: [
      'Desarrollo frontend con React, Angular y Vue.js.',
      'Integraciones con PostgreSQL, MongoDB, Cosmos DB y Redis.',
      'Pruebas unitarias con Jest en servicios Node.js.',
    ],
    stack: [
      'Java', 'Spring Boot', 'WebFlux', 'Node.js', 'AWS', 'Azure',
      'Docker', 'Kubernetes', 'React', 'Angular', 'Vue.js'
    ],
  },
  {
    role: 'Analista Programador Full Stack',
    company: 'Unidad de Gestión Educativa Local N.° 04',
    period: '2022',
    meta: 'Lima, Perú',
    summary:
      'Desarrollo de una plataforma Intranet con backend Node.js, frontend Vue.js y despliegue en AWS.',
    highlights: [
      'Desarrollé APIs REST utilizando Node.js y Express.js.',
      'Implementé interfaces con Vue.js y persistencia con MySQL y MongoDB.',
      'Participé en despliegues con AWS EC2, S3 y RDS y CI/CD con GitLab CI.',
    ],
    more: [],
    stack: ['Node.js', 'Express.js', 'Vue.js', 'MySQL', 'MongoDB', 'AWS', 'GitLab CI'],
  },
]

export const labItems: LabItem[] = [
  {
    date: '2026',
    tone: 'backend',
    label: 'BACKEND NEXT',
    title: 'Java 25 LTS + Spring Boot 4.1',
    description:
      'Laboratorio de modernización backend para practicar Java LTS actual, Spring Boot 4.1, APIs reactivas y prácticas modernas.',
    status: 'Laboratorio',
  },
  {
    date: '2026',
    tone: 'frontend',
    label: 'FRONTEND MODERNO',
    title: 'React 19.2 + Vite 8',
    description:
      'Este portafolio sirve también como práctica de frontend moderno con React, TypeScript, componentes reutilizables y Vite.',
    status: 'En uso',
  },
  {
    date: 'LAB',
    tone: 'frontend',
    label: 'FRONTEND NEXT',
    title: 'Angular 22 · Signals · Zoneless',
    description:
      'Seguimiento de Angular moderno como conocimiento complementario Full Stack, separado de mi experiencia histórica con Angular.',
    status: 'Explorando',
  },
  {
    date: 'LAB',
    tone: 'ai',
    label: 'AI ENGINEERING',
    title: 'MCP + Context Engineering',
    description:
      'Integraciones con datos, contratos y requerimientos para entregar contexto útil a agentes y automatizar tareas de ingeniería.',
    status: 'Evolucionando',
  },
  {
    date: 'LAB',
    tone: 'quality',
    label: 'QUALITY',
    title: 'Karate DSL + k6',
    description:
      'Automatización funcional de APIs y performance testing mediante escenarios reproducibles, thresholds y reportes.',
    status: 'Practicando',
  },
]

export const publicProjects: PublicProject[] = [
  {
    tone: 'backend',
    status: 'READY TO PUBLISH',
    eyebrow: 'PUBLIC PROJECT 01 · BACKEND',
    title: 'Java Microservice Lab',
    summary:
      'Microservicio público y genérico para demostrar Java moderno, Spring Boot, programación reactiva, PostgreSQL, testing y CI.',
    highlights: [
      'Java 25 LTS + Spring Boot 4.1.',
      'WebFlux + R2DBC + PostgreSQL.',
      'API contract con OpenAPI y Docker Compose.',
      'JUnit, Mockito, Reactor Test y GitHub Actions.',
    ],
    stack: ['Java 25', 'Spring Boot 4.1', 'WebFlux', 'R2DBC', 'PostgreSQL', 'Docker'],
    repositoryUrl: 'https://github.com/joseant1215/java-microservice-lab',
    architectureUrl: 'https://github.com/joseant1215/java-microservice-lab#architecture',
  },
  {
    tone: 'ai',
    status: 'READY TO PUBLISH',
    eyebrow: 'PUBLIC PROJECT 02 · AI ENGINEERING',
    title: 'MCP API Engineering Lab',
    summary:
      'Servidor MCP genérico que conecta contexto de base de datos y contratos OpenAPI para demostrar automatización asistida por agentes.',
    highlights: [
      'MCP TypeScript SDK v2.',
      'Herramientas para consultar esquema SQL.',
      'Lectura y administración local de contratos OpenAPI.',
      'Diseñado sin código, datos ni credenciales propietarias.',
    ],
    stack: ['TypeScript', 'MCP', 'OpenAPI', 'PostgreSQL', 'Zod'],
    repositoryUrl: 'https://github.com/joseant1215/mcp-api-engineering-lab',
    architectureUrl: 'https://github.com/joseant1215/mcp-api-engineering-lab#architecture',
  },
  {
    tone: 'quality',
    status: 'READY TO PUBLISH',
    eyebrow: 'PUBLIC PROJECT 03 · QUALITY',
    title: 'API Quality & Performance Lab',
    summary:
      'Laboratorio reproducible para demostrar pruebas funcionales de APIs con Karate DSL y performance testing con k6.',
    highlights: [
      'API local de ejemplo sin dependencias externas.',
      'Escenarios Karate para happy path y validaciones.',
      'Scripts k6 smoke y load con thresholds.',
      'Resultados y estructura lista para CI/CD.',
    ],
    stack: ['Karate DSL', 'k6', 'REST APIs', 'JavaScript', 'Performance'],
    repositoryUrl: 'https://github.com/joseant1215/api-quality-performance-lab',
    architectureUrl: 'https://github.com/joseant1215/api-quality-performance-lab#architecture',
  },
]

export const skillGroups = [
  {
    tone: 'backend' as Tone,
    title: 'Backend',
    description: 'Especialidad principal',
    items: ['Java 17', 'Spring Boot', 'Spring WebFlux', 'Spring Data JPA', 'Spring Batch', 'Node.js', 'NestJS'],
  },
  {
    tone: 'cloud' as Tone,
    title: 'Cloud & DevOps',
    description: 'Entrega y operación',
    items: ['Azure', 'Azure Functions', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Azure DevOps'],
  },
  {
    tone: 'ai' as Tone,
    title: 'AI & Automation',
    description: 'Developer Productivity',
    items: ['GitHub Copilot', 'Prompt Engineering', 'MCP Development', 'Mermaid', 'AI-assisted Development'],
  },
  {
    tone: 'quality' as Tone,
    title: 'Quality',
    description: 'Testing y observabilidad',
    items: ['JUnit 5', 'Karate DSL', 'k6', 'SonarQube', 'Swagger/OpenAPI', 'API Testing'],
  },
  {
    tone: 'integration' as Tone,
    title: 'Data & Integration',
    description: 'Persistencia y APIs',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Cosmos DB', 'DynamoDB', 'Redis', 'REST APIs'],
  },
  {
    tone: 'frontend' as Tone,
    title: 'Frontend',
    description: 'Conocimiento complementario',
    items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript'],
  },
]

export const certifications: Certification[] = [
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: '2026',
    tone: 'cloud',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/es-mx/JoseMamani-8360/FCC2E0FD672D39AA?sharingId',
  },
  {
    title: 'GitHub Copilot Certification',
    issuer: 'GitHub',
    year: '2026',
    tone: 'ai',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/es-es/JoseMamani-8360/711B3BA9340CF9A4?sharingId',
  },
  {
    title: 'GitHub Foundations Certification',
    issuer: 'GitHub',
    year: '2026',
    tone: 'integration',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/es-mx/JoseMamani-8360/DF86D04B8229FC4D?sharingId',
  },
  {
    title: 'Scrum Foundation Professional Certification (SFPC)',
    issuer: 'CertiProf',
    year: '2024',
    tone: 'quality',
    credentialUrl: 'https://www.credly.com/badges/5c84eb53-7ec3-4df5-bcc7-2f07d7a936e2',
  },
  {
    title: 'AI Skills Fest 2026',
    issuer: 'Microsoft',
    year: '2026',
    tone: 'quality',
    credentialUrl: 'https://www.credly.com/badges/7ddbf8ef-c942-49db-b9bb-1d33a082729b/linked_in_profile',
  },
]
