export interface ProgramEvent {
  time: string;
  title: string;
  venue: string;
  description?: string;
  accent: 'cyan' | 'terracotta' | 'violet';
}

export interface DaySchedule {
  id: 'jueves' | 'viernes' | 'sabado';
  dateLabel: string;
  title: string;
  subtitle: string;
  events: ProgramEvent[];
  highlightsTitle: string;
  highlights: string[];
}

export interface Guest {
  initials: string;
  name: string;
  role: string;
  bio: string;
  gradient: string;
  image?: string;
}

export interface Venue {
  name: string;
  role: string;
  description: string;
  image: string;
  tag: string;
}

export interface SpotlightItem {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  subtitle: string;
  creator: string;
  creatorRole: string;
  creatorPhoto: string;
  image: string;
  description: string;
  tags: string[];
  scheduleTime?: string;
  scheduleVenue?: string;
}

export interface Vehicle {
  name: string;
  tag: string;
  features: string[];
  tagStyle: string;
}

export interface Itinerary {
  date: string;
  route: string;
}

export interface Benefit {
  icon: string;
  name: string;
  description: string;
}

export interface CulturalEvent {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
}

export const REGISTRATION_URL = "https://forms.cloud.microsoft/r/TPB8JJu1Ln";

export const FESTIVAL_INFO = {
  name: "FIC 2026",
  edition: "V Festival del Tecnológico de Monterrey",
  fullName: "Festival Internacional de Cortometrajes",
  dates: "5 al 7 de noviembre de 2026",
  location: "Campus San Luis Potosí",
  tagline: "Cine que inspira.",
  description:
    "Un encuentro internacional de cortometrajes, pensamiento creativo y cultura audiovisual con artistas, académicos y aliados de primer nivel.",
  venues: ["Teatro Polivalente", "Cinépolis Plaza San Luis", "Museo del Virreinato"],
  stats: [
    { value: "51", label: "cortometrajes", color: "text-cyan-300" },
    { value: "5", label: "categorías", color: "text-[#ffd2bb]" },
    { value: "49", label: "jueces (4 regiones)", color: "text-[#bca5ed]" },
    { value: "2", label: "premios industria", color: "text-cyan-200" },
  ],
};

export interface CompetitionCategory {
  id: string;
  name: string;
  shortDesc: string;
  focus: string;
  careers: string;
  icon: string;
  tagColor: string;
}

export const COMPETITION_CATEGORIES: CompetitionCategory[] = [
  {
    id: "prepa",
    name: "Prepa",
    shortDesc: "Cortometrajes de estudiantes de PrepaTec que demuestran frescura, creatividad y primeras exploraciones de autor.",
    focus: "Primeras narrativas, creatividad audiovisual y lenguaje audiovisual emergente.",
    careers: "PrepaTec (Bachillerato)",
    icon: "🎓",
    tagColor: "border-cyan-300/40 bg-cyan-400/10 text-cyan-200",
  },
  {
    id: "narrativa",
    name: "Narrativa Audiovisual",
    shortDesc: "Ficción cinematográfica de alto impacto, narrativa dramática y construcción visual de universos ficcionales.",
    focus: "Dirección de actores, cinematografía, puesta en escena y estructura dramática.",
    careers: "Materias clave de LC (Comunicación) con colaboración sonora de LTM",
    icon: "🎬",
    tagColor: "border-amber-400/40 bg-amber-500/10 text-amber-200",
  },
  {
    id: "serie",
    name: "Piloto de Serie",
    shortDesc: "Propuestas de formato episódico concebidas para streaming y televisión con alto valor conceptual y narrativo.",
    focus: "Biblia de serie, arco de personajes, ritmo narrativo y viabilidad comercial de temporadas.",
    careers: "Producción audiovisual y guionismo serializado de LC",
    icon: "📺",
    tagColor: "border-purple-400/40 bg-purple-500/10 text-purple-200",
  },
  {
    id: "documental",
    name: "Documental y Proyectos Terminales",
    shortDesc: "Cine de no ficción, investigación testimonial, memoria histórica y proyectos cumbre de egreso de la carrera.",
    focus: "Tratamiento ético documental, rigor investigativo, profundidad social y madurez cinematográfica.",
    careers: "Proyectos Terminales y materias de No Ficción de LC",
    icon: "📽️",
    tagColor: "border-rose-400/40 bg-rose-500/10 text-rose-200",
  },
  {
    id: "animacion_genero",
    name: "Animación y Perspectiva de Género",
    shortDesc: "Exploración de técnicas de animación (2D, 3D, stop motion) y cortometrajes que integran reflexiones sobre equidad e inclusión.",
    focus: "Arte digital, diseño de personajes, empatía social, perspectiva de género y narrativas inclusivas.",
    careers: "Animación digital, LC y arte colaborativo con LTM",
    icon: "✨",
    tagColor: "border-teal-400/40 bg-teal-500/10 text-teal-200",
  },
];

export const JURY_DATA = {
  totalCount: 49,
  regionsCount: 4,
  regions: ["Región Norte", "Región Centro", "Región Occidente", "Región Sur / CDMX"],
  description:
    "Un cuerpo colegiado de 49 jueces procedentes de las 4 regiones del Tecnológico de Monterrey y de instituciones externas. Está conformado por una cuidada combinación de profesionales del área audiovisual en activo, junto con académicos de humanidades del Tec y expertos no vinculados a asignaturas audiovisuales, garantizando una deliberación con rigor técnico, sensibilidad humana y aprecio crítico interdisciplinario.",
  industryAwards: [
    {
      partner: "SONY",
      name: "Premio SONY de Cinefotografía",
      evaluator: "Especialistas de Sony & Ganadoras del Sony Future Filmmakers Awards",
      focus: "Iluminación, óptica, composición plástica, colorimetría y manejo técnico de cámara.",
      badge: "Premio Especial de Industria",
      color: "border-[#d97b5d]/40 bg-[#d97b5d]/10 text-[#ffd2bb]",
    },
    {
      partner: "Harman Pro / Harman Kardon",
      name: "Premio Harman Pro de Diseño Sonoro",
      evaluator: "Especialistas e ingenieros acústicos de Harman Pro",
      focus: "Grabación en set, diseño sonoro, mezcla inmersiva, foley e integración con la música de alumnos LTM.",
      badge: "Premio Especial de Industria",
      color: "border-cyan-300/40 bg-cyan-400/10 text-cyan-200",
    },
  ],
  academicAlliance: {
    title: "Sinergia Académica: LC + LTM",
    description:
      "Los 51 cortometrajes integran las materias principales de producción audiovisual de la carrera de Licenciado en Comunicación (LC), contando en numerosas piezas con el talento y apoyo sonoro de estudiantes de Licenciado en Tecnología y Producción Musical (LTM), enriqueciendo la música original y el diseño acústico de las obras en competencia.",
  },
};

export const PROGRAM_DAYS: DaySchedule[] = [
  {
    id: "jueves",
    dateLabel: "Jueves 5",
    title: "Jueves 5 de noviembre",
    subtitle: "Registro, talleres y ceremonia de premiación",
    events: [
      {
        time: "13:00 h",
        title: "Registro al V Festival de Cortometrajes",
        venue: "Auditorio, 5.º piso, Edificio III, Campus SLP",
        description: "Acreditación y bienvenida oficial a los asistentes y participantes.",
        accent: "cyan",
      },
      {
        time: "14:15 h",
        title: "Workshop de Harman Pro: Diseño sonoro, audio y cine",
        venue: "Auditorio, 5.º piso, Edificio III",
        description: "Taller técnico de audio profesional y diseño sonoro inmersivo.",
        accent: "cyan",
      },
      {
        time: "15:15 h",
        title: "Workshop de Sony Speaker",
        venue: "Campus SLP",
        description: "Sesión práctica sobre tecnología y narrativa de audio con especialistas Sony.",
        accent: "terracotta",
      },
      {
        time: "16:30 h",
        title: "Charla de María Mora y Alejandra Ruíz",
        venue: "Auditorio, 5.º piso, Edificio III",
        description: "Cinefotógrafas y directoras de fotografía; ganadoras del Sony Future Filmmakers Awards 2026.",
        accent: "terracotta",
      },
      {
        time: "Por confirmar",
        title: "Activación Sony por VIEWH AUSS",
        venue: "Campus SLP",
        description: "Experiencia inmersiva y demostración de equipos de última generación.",
        accent: "cyan",
      },
      {
        time: "19:00 h",
        title: "Ceremonia de premiación de cortometrajes",
        venue: "Teatro Polivalente, Centro de las Artes de SLP",
        description: "Gala de reconocimiento a los mejores cortometrajes y creadores del festival.",
        accent: "violet",
      },
      {
        time: "21:00 h",
        title: "Brindis de premiación con DJ Señor Crisis & Cerveza Artesanal",
        venue: "Lobby del Teatro Polivalente, Centro de las Artes",
        description: "Live set, visuales y arte generativo por Señor Crisis, con degustación de Cervecería 7 Barrios y Cervecería Legendaria.",
        accent: "violet",
      },
    ],
    highlightsTitle: "Highlights del Jueves",
    highlights: [
      "Workshops de Harman Pro y Sony Speaker en Campus SLP.",
      "Charla exclusiva con María Mora y Alejandra Ruíz (Sony Future Filmmakers Awards 2026).",
      "Gran Ceremonia de Premiación en el emblemático Teatro Polivalente.",
      "Brindis de gala en el Centro de las Artes de SLP.",
    ],
  },
  {
    id: "viernes",
    dateLabel: "Viernes 6",
    title: "Viernes 6 de noviembre",
    subtitle: "Conferencias, talleres y proyecciones",
    events: [
      {
        time: "08:50 h",
        title: "Registro al festival",
        venue: "Auditorio, 9.º piso, Edificio III, Campus SLP",
        description: "Acceso y acreditación para las conferencias magistrales del día.",
        accent: "cyan",
      },
      {
        time: "09:00 h",
        title: "Conferencia con Tim Redford",
        venue: "Auditorio, 9.º piso, Edificio III",
        description: "Director ejecutivo del Festival de Cortometrajes de Clermont-Ferrand.",
        accent: "cyan",
      },
      {
        time: "10:00 h",
        title: "Conferencia magistral y conversatorio con Valentina Leduc y Daniel Hidalgo",
        venue: "Auditorio, 9.º piso, Edificio III",
        description: "Del cortometraje al largometraje en la trayectoria cinematográfica.",
        accent: "terracotta",
      },
      {
        time: "11:30–13:00 h",
        title: "Conferencia y workshop con Tatiana Huezo",
        venue: "Auditorio, 9.º piso, Edificio III",
        description: "Masterclass con la multipremiada directora y documentalista internacional.",
        accent: "cyan",
      },
      {
        time: "14:00–19:15 h",
        title: "Proyección masiva de cortometrajes",
        venue: "Sala 3 de Cinépolis, Plaza San Luis",
        description: "Cortos ganadores del V Festival, Festival ED de Prepa Tec, corto ganador de Lille y gala de cortos ganadores de Clermont-Ferrand y FCU.",
        accent: "violet",
      },
      {
        time: "21:00 h",
        title: "Concierto con la Camerata de San Luis Potosí",
        venue: "Museo del Virreinato, Villerías 115, Centro Histórico",
        description: "Presentación musical de gala en el marco histórico del festival.",
        accent: "violet",
      },
      {
        time: "22:30–23:30 h",
        title: "Convivencia de estudiantes & Live Visuals DJ Señor Crisis",
        venue: "Museo del Virreinato, Villerías 115, Centro Histórico",
        description: "Espacio de intercambio cultural y celebración nocturna con set de música y visuales por Señor Crisis, 7 Barrios y Legendaria.",
        accent: "violet",
      },
    ],
    highlightsTitle: "Agenda estelar del Viernes",
    highlights: [
      "Conferencias con Tim Redford (Clermont-Ferrand), Valentina Leduc, Daniel Hidalgo y Tatiana Huezo.",
      "Maratón de proyecciones oficiales en la Sala 3 de Cinépolis Plaza San Luis.",
      "Gala musical con La Camerata de San Luis Potosí.",
      "Encuentro y convivencia nocturna en el Museo del Virreinato.",
    ],
  },
  {
    id: "sabado",
    dateLabel: "Sábado 7",
    title: "Sábado 7 de noviembre",
    subtitle: "Presentaciones y clausura",
    events: [
      {
        time: "09:00 h",
        title: "Inicio del evento",
        venue: "Auditorio, 9.º piso, Edificio III, Campus SLP",
        description: "Recepción y apertura de la última jornada del FIC 2026.",
        accent: "cyan",
      },
      {
        time: "09:20 h",
        title: "Presentación del corto “Las venas del mundo”",
        venue: "Auditorio, 9.º piso, Edificio III",
        description: "In memoriam del profesor Ernesto Ocampo Lavín, tributo a su vida y legado docente.",
        accent: "cyan",
      },
      {
        time: "09:20–09:50 h",
        title: "Presentación del cortometraje “Ground Control” de Werner Heinze",
        venue: "Auditorio, 9.º piso, Edificio III",
        description: "Exhibición de la pieza audiovisual y charla con el realizador.",
        accent: "cyan",
      },
      {
        time: "09:50–10:15 h",
        title: "Presentación de Juan Manuel Pavón, “Azul Sepia” y conversatorio",
        venue: "Auditorio, 9.º piso, Edificio III",
        description: "Cortometraje animado nominado al Ariel (La Milpa Studio · Tec) y charla con su director de arte.",
        accent: "terracotta",
      },
      {
        time: "10:15–10:25 h",
        title: "Fotografía grupal del evento",
        venue: "Escalinatas del Edificio III",
        description: "Fotografía conmemorativa oficial de todos los asistentes, invitados y organizadores.",
        accent: "cyan",
      },
      {
        time: "10:30–13:30 h",
        title: "Presentación de cortos ganadores de menciones honoríficas y VIBRART 2026",
        venue: "Auditorio, 9.º piso, Edificio III",
        description: "Proyección especial de los trabajos premiados en el festival y selección VIBRART.",
        accent: "terracotta",
      },
      {
        time: "13:40 h",
        title: "Cierre del evento",
        venue: "Campus SLP",
        description: "Clausura oficial del V Festival Internacional de Cortometrajes FIC 2026.",
        accent: "violet",
      },
    ],
    highlightsTitle: "Clausura del Sábado",
    highlights: [
      "Homenaje in memoriam al profesor Ernesto Ocampo Lavín.",
      "Proyecciones de “Ground Control” y “Azul Sepia” con Manuel Pavón (nominado al Ariel).",
      "Fotografía oficial conmemorativa en las escalinatas del Edificio III.",
      "Muestra estelar de cortometrajes premiados VIBRART 2026 y clausura.",
    ],
  },
];

export const GUESTS: Guest[] = [
  {
    initials: "TH",
    name: "Tatiana Huezo Sánchez",
    role: "Directora de cine / referente internacional",
    bio: "Su obra conecta documental, sensibilidad humana y poética visual. Directora aclamada de Tempestad, Noche de fuego y El eco.",
    gradient: "from-[#5ce1e6]/25 to-[#48988e]/30",
    image: "/src/assets/images/real_guests/tatiana_huezo_real.jpg",
  },
  {
    initials: "TR",
    name: "Tim Redford",
    role: "Clermont-Ferrand / curaduría y crítica",
    bio: "Coordinador de la Competencia Internacional del prestigioso Festival de Cortometrajes de Clermont-Ferrand en Francia.",
    gradient: "from-[#d97b5d]/25 to-[#f7c7ad]/20",
    image: "/src/assets/images/real_guests/tim_redford_real.jpg",
  },
  {
    initials: "VL",
    name: "Valentina Leduc",
    role: "Cine, educación y cultura",
    bio: "Destacada editora y directora mexicana galardonada con múltiples Premios Ariel por la AMACC y formadora cinematográfica.",
    gradient: "from-[#7b5ea7]/25 to-[#c2b2f0]/25",
    image: "/src/assets/images/real_guests/valentina_leduc_real.jpg",
  },
  {
    initials: "DH",
    name: "Daniel Hidalgo",
    role: "Presidente AMACC / composición y diseño sonoro",
    bio: "Presidente de la Academia Mexicana de Artes y Ciencias Cinematográficas (AMACC), compositor de Amores perros y especialista sonoro.",
    gradient: "from-[#48988e]/20 to-[#9be6db]/20",
    image: "/src/assets/images/real_guests/daniel_hidalgo_real.jpg",
  },
  {
    initials: "MP",
    name: "Manuel Pavón (Juanma)",
    role: "Director de Arte / Cortometraje Azulesepia / Tec de Monterrey",
    bio: "Profesor del Tec de Monterrey y Director de Arte de 'Azulesepia', cortometraje animado nominado al Ariel y creado en La Milpa Studio.",
    gradient: "from-[#48988e]/25 to-[#5ce1e6]/25",
    image: "/src/assets/images/real_guests/manuel_pavon_real.jpg",
  },
  {
    initials: "MM",
    name: "María Mora (SONY Speaker)",
    role: "Directora de Fotografía / Speaker Oficial SONY",
    bio: "Cineasta y directora de fotografía con trayectoria internacional y proyectos nominados al Ariel. Conferencista estelar de SONY en sonido y cine.",
    gradient: "from-[#d97b5d]/25 to-[#7b5ea7]/25",
    image: "/src/assets/images/real_guests/maria_mora_real.jpg",
  },
];

export const OFFICIAL_VENUES: Venue[] = [
  {
    name: "Teatro Polivalente (CEART)",
    role: "Sede de Inauguración y Ceremonia de Premiación",
    description:
      "Ubicado en el monumental Centro de las Artes de San Luis Potosí Centenario (Calzada de Guadalupe), recinto de vanguardia para la gran inauguración y noche de premiación del FIC 2026.",
    image: "/src/assets/images/real_venues/teatro_polivalente_real.jpg",
    tag: "Gala & Premiación",
  },
  {
    name: "Cinépolis Plaza San Luis",
    role: "Sede Oficial de Proyecciones de Cortometrajes",
    description:
      "Complejo cinematográfico en Plaza San Luis (Lomas del Tecnológico), donde se proyectarán en pantalla grande las selecciones oficiales de cortometrajes y funciones estelares.",
    image: "/src/assets/images/real_venues/cinepolis_plaza_slp_real.webp",
    tag: "Proyecciones Oficiales",
  },
  {
    name: "Museo del Virreinato",
    role: "Sede de Concierto de Gala y Encuentros Culturales",
    description:
      "Emblemático recinto virreinal del siglo XVIII en el Centro Histórico (junto al Templo del Carmen), sede del concierto de La Camerata de San Luis Potosí y actividades de intercambio.",
    image: "/src/assets/images/real_venues/museo_virreinato_real.jpg",
    tag: "Patrimonio & Cultura",
  },
  {
    name: "Tecnológico de Monterrey Campus SLP",
    role: "Sede Académica y Workshops",
    description:
      "Campus sede del festival donde se impartirán los talleres técnicos con Harman Pro, conversatorios con invitados y sesiones de producción audiovisual.",
    image: "/src/assets/images/real_venues/tec_campus_slp_real.jpg",
    tag: "Campus Sede",
  },
];

export interface ThanksEntity {
  name: string;
  role: string;
  category: 'gobierno' | 'cultura' | 'musica_visuales' | 'cerveza';
  badge: string;
  tagColor: string;
  description: string;
}

export const INSTITUTIONAL_THANKS: ThanksEntity[] = [
  {
    name: "Secretaría de Cultura de San Luis Potosí",
    role: "Apoyo Institucional & Difusión Cultural",
    category: "gobierno",
    badge: "Gobierno del Estado",
    tagColor: "border-cyan-300/40 bg-cyan-400/10 text-cyan-200",
    description:
      "Agradecimiento especial a la SECULT SLP por su invaluable respaldo al fomento del cine, las artes audiovisuales y la cultura en San Luis Potosí.",
  },
  {
    name: "Museo del Virreinato de San Luis Potosí",
    role: "Sede Cultural de Gala & Convivencia",
    category: "cultura",
    badge: "Patrimonio & Recinto Oficial",
    tagColor: "border-[#d97b5d]/40 bg-[#d97b5d]/10 text-[#ffd2bb]",
    description:
      "Anfitrión del magno concierto con la Camerata de San Luis Potosí y la velada de convivencia nocturna de realizadores, invitados y estudiantes.",
  },
  {
    name: "Dirección de Turismo Municipal de San Luis Potosí",
    role: "Promoción Turística & Alianza Local",
    category: "gobierno",
    badge: "Turismo Municipal SLP",
    tagColor: "border-cyan-300/40 bg-cyan-400/10 text-cyan-200",
    description:
      "Promoción del turismo cultural, hospitalidad hacia delegaciones visitantes y posicionamiento de San Luis Potosí como polo cinematográfico.",
  },
  {
    name: "Dirección de Desarrollo Económico",
    role: "Impulso Económico & Red Empresarial",
    category: "gobierno",
    badge: "Desarrollo Económico SLP",
    tagColor: "border-[#7b5ea7]/40 bg-[#7b5ea7]/10 text-violet-200",
    description:
      "Vinculación estratégica con el ecosistema productivo local y fortalecimiento de las industrias creativas potosinas.",
  },
  {
    name: "Puro Potosino Creativo",
    role: "Fomento al Talento e Industrias Creativas",
    category: "cultura",
    badge: "Talento Potosino",
    tagColor: "border-amber-300/40 bg-amber-400/10 text-amber-200",
    description:
      "Iniciativa de orgullo y denominación de origen que impulsa a las y los creadores independientes, arte digital y productos de alto valor de SLP.",
  },
  {
    name: "Sr. Crisis (Visuales & Live DJ Set)",
    role: "Arte Generativo, Videomapping & Performance Sonoro",
    category: "musica_visuales",
    badge: "Artista Audiovisual SLP",
    tagColor: "border-[#5ce1e6]/40 bg-[#5ce1e6]/10 text-cyan-200",
    description:
      "Colectivo potosino referente en mapping y arte digital en tiempo real, a cargo del espectáculo visual y musical en el Brindis de Premiación y Convivencia.",
  },
  {
    name: "Cervecería 7 Barrios",
    role: "Cervecería Artesanal Potosina Oficial",
    category: "cerveza",
    badge: "Cerveza Artesanal SLP",
    tagColor: "border-amber-400/40 bg-amber-500/10 text-amber-300",
    description:
      "Inspirada en los siete barrios tradicionales de San Luis Potosí, presente con sus estilos artesanales en los brindis y celebraciones del festival.",
  },
  {
    name: "Cervecería Legendaria",
    role: "Cervecería Artesanal Potosina Oficial",
    category: "cerveza",
    badge: "Cerveza Artesanal SLP",
    tagColor: "border-amber-400/40 bg-amber-500/10 text-amber-300",
    description:
      "Cervecería artesanal de gran prestigio e identidad potosina, patrocinadora de la degustación oficial en las veladas de premiación y clausura.",
  },
];

export const ALL_PARTNERS = [
  { name: "SONY", category: "Tecnología & Cámara Oficial" },
  { name: "Cinépolis", category: "Exhibición Cinematográfica" },
  { name: "Harman/Kardon", category: "Audio Profesional" },
  { name: "VIEWH AUSS", category: "Activación Tecnológica Sony" },
  { name: "FEMSA", category: "Aliado Institucional" },
  { name: "AMACC", category: "Academia Cinematográfica" },
  { name: "Cervecería 7 Barrios", category: "Cervecería Artesanal SLP" },
  { name: "Cervecería Legendaria", category: "Cervecería Artesanal SLP" },
  { name: "Sr. Crisis", category: "Visuales & DJ Set" },
];

export const PARTNERS = [
  "SONY",
  "Cinépolis",
  "Harman/Kardon",
  "VIEWH AUSS",
  "FEMSA",
  "AMACC",
  "Cervecería 7 Barrios",
  "Cervecería Legendaria",
  "Sr. Crisis",
];

export const VEHICLES: Vehicle[] = [
  {
    name: "Autobús de 42 asientos",
    tag: "W/C",
    tagStyle: "border-cyan-300/30 bg-cyan-400/10 text-cyan-100",
    features: [
      "Wi‑Fi / conexión a bordo",
      "Audio y video integrados",
      "Capacidad para 42 pasajeros",
      "Ideal para traslado grupo institucional",
    ],
  },
  {
    name: "Sprinter VIP de 20 asientos",
    tag: "VIP",
    tagStyle: "border-[#f0b593]/40 bg-[#f0b593]/10 text-[#ffd9c4]",
    features: [
      "Pantalla de 32”",
      "Aire acondicionado",
      "Seguro de viajero",
      "Servicio premium para invitados y autoridades",
    ],
  },
];

export const ITINERARIES: Itinerary[] = [
  {
    date: "5 de noviembre",
    route: "Aeropuerto de SLP → Hotel City Express Marriott → Campus Tec → Teatro Polivalente",
  },
  {
    date: "6 de noviembre",
    route: "Hotel City Express Marriott → Campus Tec → Cinépolis Plaza San Luis → Museo del Virreinato → Hotel",
  },
  {
    date: "7 de noviembre",
    route: "Campus Tec → Museo del Virreinato → Cinépolis / Teatro Polivalente → regreso a hotel y aeropuerto",
  },
];

export const BENEFITS: Benefit[] = [
  {
    icon: "🍽️",
    name: "Mochomos",
    description: "Descuento del 10% para asistentes y acreditados.",
  },
  {
    icon: "🧴",
    name: "BIWA",
    description: "Convenio especial de bienestar y gastronomía local.",
  },
  {
    icon: "💆",
    name: "Oasis Spa",
    description: "Beneficios de restauración y relax para invitados.",
  },
  {
    icon: "🏋️‍♂️",
    name: "KRDIO + Club Deportivo La Loma",
    description: "Acceso y descuentos para actividades de bienestar y estilo de vida.",
  },
];

export const CULTURAL_EVENTS: CulturalEvent[] = [
  {
    tag: "Concierto",
    tagColor: "border-cyan-300/30 bg-cyan-400/10 text-cyan-100",
    title: "La Camerata de San Luis Potosí",
    description:
      "Presentación musical en el Museo del Virreinato, con una experiencia cultural que complementa la programación de cine y arte contemporáneo.",
  },
  {
    tag: "Visita cultural",
    tagColor: "border-[#f0b593]/40 bg-[#f0b593]/10 text-[#ffd9c4]",
    title: "Centro de las Artes (CEART)",
    description:
      "Actividades paralelas y recorridos artísticos para ampliar la mirada creativa del festival y fortalecer el vínculo con la comunidad cultural sanluispotense.",
  },
];

export const FEATURED_SPOTLIGHTS: SpotlightItem[] = [
  {
    id: "azulesepia",
    category: "Cortometraje Estelar · Animación 2D",
    categoryColor: "border-cyan-300/40 bg-cyan-400/10 text-cyan-200",
    title: "Corto “Azul Sepia”",
    subtitle: "Presentación y conversatorio con Juan Manuel Pavón (La Milpa Studio)",
    creator: "Juan Manuel Pavón (Juanma)",
    creatorRole: "Profesor y Director de Arte · Tec de Monterrey",
    creatorPhoto: "/src/assets/images/real_guests/manuel_pavon_real.jpg",
    image: "/src/assets/images/real_guests/azulesepia_corto_real.jpg",
    description:
      "Aclamado cortometraje animado en 2D producido en La Milpa Studio del Tec de Monterrey. Aborda el racismo infantil y la aceptación a través de la amistad entre un gatito azul y una conejita sepia. Nominado a Mejor Cortometraje de Animación en los Premios Ariel.",
    tags: [
      "Nominado al Premio Ariel",
      "La Milpa Studio · Tec",
      "Dirección de Arte: Manuel Pavón",
      "Presentación y Conversatorio Oficial",
    ],
    scheduleTime: "Sábado 7 de Noviembre · 09:50–10:15 h",
    scheduleVenue: "Auditorio, 9.º piso, Edificio III, Campus SLP",
  },
  {
    id: "sony-speaker",
    category: "Masterclass SONY · Storytelling & Cinefotografía",
    categoryColor: "border-[#d97b5d]/40 bg-[#d97b5d]/10 text-[#ffd2bb]",
    title: "Sony Speaker: María Mora y Alejandra Ruíz",
    subtitle: "Cinefotógrafas y ganadoras del Sony Future Filmmakers Awards 2026",
    creator: "María Mora & Alejandra Ruíz",
    creatorRole: "Cinefotógrafas, Directoras de Fotografía & Sony Speakers",
    creatorPhoto: "/src/assets/images/real_guests/maria_mora_real.jpg",
    image: "/src/assets/images/real_guests/maria_mora_real.jpg",
    description:
      "Charla magistral y workshop impartido por las realizadoras galardonadas en los Sony Future Filmmakers Awards 2026. Explorarán el diseño sonoro, la técnica cinematográfica y las narrativas visuales de vanguardia, acompañadas de la activación tecnológica por VIEWH AUSS.",
    tags: [
      "Sony Future Filmmakers Awards 2026",
      "Workshop 15:15 h · Charla 16:30 h",
      "Activación Sony por VIEWH AUSS",
      "Auditorio 5.° piso · Edificio III",
    ],
    scheduleTime: "Jueves 5 de Noviembre · 15:15 h & 16:30 h",
    scheduleVenue: "Auditorio, 5.º piso, Edificio III, Campus SLP",
  },
];
