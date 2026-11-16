export type SitePath =
  | "/"
  | "/formacion-y-linaje"
  | "/enfoque"
  | "/diplomado-sexualidad-sagrada"
  | "/gozo-del-corazon"
  | "/prevencion-violencia-pareja"
  | "/oscuridad-a-la-luz"
  | "/retiro-para-renacer"
  | "/retiro-sexualidad-sagrada"
  | "/diplomado-trascendencia"
  | "/separaciones-amorosas"
  | "/abundancia-recuerda-tus-suenos"
  | "/eventos"
  | "/desafios-gratuitos"
  | "/podcast"
  | "/documental"
  | "/agenda";

export type SiteLink = { label: string; to: SitePath; dark?: boolean };
export type NavGroup = { label: string; to?: SitePath; items?: SiteLink[] };

export const navigation: NavGroup[] = [
  { label: "Inicio", to: "/" },
  {
    label: "Sobre Tao",
    items: [
      { label: "Mi formación y linaje", to: "/formacion-y-linaje" },
      { label: "Mi enfoque", to: "/enfoque" },
    ],
  },
  {
    label: "Sexualidad Sagrada",
    items: [
      { label: "Diplomado de Sexualidad Sagrada y Plenitud", to: "/diplomado-sexualidad-sagrada" },
      { label: "Gozo del Corazón", to: "/gozo-del-corazon" },
      { label: "Prevención de Violencia en la Pareja", to: "/prevencion-violencia-pareja" },
    ],
  },
  {
    label: "Retiros",
    items: [
      { label: "Oscuridad a la Luz", to: "/oscuridad-a-la-luz", dark: true },
      { label: "Para Renacer", to: "/retiro-para-renacer" },
      { label: "Sexualidad Sagrada", to: "/retiro-sexualidad-sagrada" },
    ],
  },
  {
    label: "Programas",
    items: [
      { label: "Diplomado de Trascendencia Espiritual", to: "/diplomado-trascendencia" },
      { label: "Diplomado de Sexualidad Sagrada y Plenitud", to: "/diplomado-sexualidad-sagrada" },
      { label: "Separaciones Amorosas", to: "/separaciones-amorosas" },
      { label: "Gozo del Corazón", to: "/gozo-del-corazon" },
      { label: "Abundancia · Recuerda tus Sueños", to: "/abundancia-recuerda-tus-suenos" },
      { label: "Prevención de Violencia en la Pareja", to: "/prevencion-violencia-pareja" },
    ],
  },
  {
    label: "Eventos",
    items: [
      { label: "Próximos eventos", to: "/eventos" },
      { label: "Desafíos gratuitos", to: "/desafios-gratuitos" },
    ],
  },
  {
    label: "Recursos",
    items: [
      { label: "Podcast del Gozo", to: "/podcast" },
      { label: "Documental Oscuridad a la Luz", to: "/documental" },
      { label: "Desafíos gratuitos", to: "/desafios-gratuitos" },
      { label: "Recuerda tus Sueños", to: "/abundancia-recuerda-tus-suenos" },
    ],
  },
];

export type PageContent = {
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
  image?: "dawn" | "portrait" | "cave";
  imageAlt?: string;
  facts?: string[];
  statement: string;
  introduction: string;
  details: { title: string; text: string }[];
  related: SiteLink[];
  cta?: SiteLink;
};

export const pageContent = {
  formacion: {
    eyebrow: "Sobre Tao Axuni",
    title: "Mi formación",
    italic: "y linaje",
    description: "Un camino de estudio y práctica en México, Tailandia y otros lugares del mundo, dentro del linaje del Universal Healing Tao System.",
    image: "portrait",
    imageAlt: "Retrato de Tao Axuni",
    facts: ["Universal Healing Tao", "Mantak Chia · Tailandia", "Andrew Jan"],
    statement: "El linaje importa.",
    introduction: "Tao Axuni es el único instructor en el habla hispana certificado para enseñar los niveles más elevados del linaje del Universal Healing Tao System del Grand Master Mantak Chia de Tailandia. Su trabajo reúne años de práctica, formación y transmisiones.",
    details: [
      { title: "Universal Healing Tao", text: "Formación dentro del sistema creado por el Grand Master Mantak Chia, con certificación para enseñar sus niveles más elevados en el habla hispana." },
      { title: "Mantak Chia", text: "Estudio y práctica del linaje en Tailandia, donde el taoísmo y la alquimia interna se transmiten mediante una experiencia viva." },
      { title: "Andrew Jan", text: "Tao es editor de los nuevos libros de Mantak Chia y Andrew Jan, aún no publicados: Ecstatic Spirit Flight y Grand Completion." },
      { title: "Prácticas y transmisiones", text: "Enseñanzas compartidas por primera vez en el habla hispana a través de cursos, retiros, formaciones y transmisiones." },
    ],
    related: [{ label: "Conocer mi enfoque", to: "/enfoque" }, { label: "Explorar Trascendencia Espiritual", to: "/diplomado-trascendencia" }],
  },
  enfoque: {
    eyebrow: "Una práctica integral",
    title: "Mi",
    italic: "enfoque",
    description: "Taoísmo, alquimia interna, sexualidad sagrada y relaciones conscientes como caminos hacia una vida de dicha, presencia y plenitud.",
    image: "dawn",
    imageAlt: "Meditación al amanecer entre montañas",
    facts: ["Gozo", "Presencia", "Energía"],
    statement: "La transformación se vuelve experiencia.",
    introduction: "Más que acumular conceptos, este enfoque invita a practicar y habitar cada enseñanza. El cuerpo, la energía, el corazón y la conciencia forman parte de un mismo camino.",
    details: [
      { title: "Taoísmo y alquimia interna", text: "Prácticas para reconocer, cultivar y transformar la energía vital desde la tradición taoísta." },
      { title: "Sexualidad Sagrada", text: "Una mirada consciente a la energía sexual como parte de nuestra vitalidad, presencia y capacidad de gozo." },
      { title: "Relaciones conscientes", text: "Experiencias para mirar los vínculos, las separaciones y el encuentro con el otro desde una mayor presencia." },
      { title: "Iniciación y práctica", text: "Retiros, diplomados y transmisiones que convierten el conocimiento en una experiencia personal y profunda." },
    ],
    related: [{ label: "Mi formación y linaje", to: "/formacion-y-linaje" }, { label: "Conocer los retiros", to: "/eventos" }],
  },
  sexualidadDiplomado: {
    eyebrow: "Diplomado · Puertas abiertas",
    title: "Sexualidad Sagrada",
    italic: "y Plenitud",
    description: "Una formación para explorar la energía sexual desde la conciencia, el gozo y la tradición de la alquimia interna taoísta.",
    image: "dawn",
    imageAlt: "Luz del amanecer sobre las montañas",
    facts: ["Puertas abiertas", "Sexualidad Sagrada", "Alquimia interna"],
    statement: "Despierta tu energía vital. Expresa tu pleno potencial.",
    introduction: "Este diplomado forma parte del camino de Sexualidad Sagrada de Tao Axuni: un espacio para profundizar en la energía vital y en su relación con el cuerpo, el corazón y la conciencia.",
    details: [
      { title: "Energía vital", text: "La sexualidad se aborda como una expresión de la energía que habita en nosotros y que puede cultivarse con presencia." },
      { title: "Visión taoísta", text: "Las enseñanzas se enmarcan en la alquimia interna y en el linaje del Universal Healing Tao System." },
      { title: "Plenitud", text: "Un recorrido orientado a vivir con mayor dicha, conciencia y libertad de expresión." },
    ],
    related: [{ label: "Retiro de Sexualidad Sagrada", to: "/retiro-sexualidad-sagrada" }, { label: "Gozo del Corazón", to: "/gozo-del-corazon" }],
  },
  gozo: {
    eyebrow: "Un camino para comenzar",
    title: "Gozo del",
    italic: "Corazón",
    description: "Una experiencia dedicada al corazón, la presencia y la capacidad natural de habitar la vida con mayor dicha.",
    image: "dawn",
    imageAlt: "Persona meditando frente al amanecer",
    facts: ["18 de abril de 2027", "Taller presencial · Colombia"],
    statement: "Recuerda el gozo que ya habita en ti.",
    introduction: "Gozo del Corazón es una de las puertas de entrada al trabajo de Tao Axuni. Su próxima experiencia anunciada es un taller presencial en Colombia el 18 de abril de 2027.",
    details: [
      { title: "Corazón", text: "Un espacio para dirigir la atención hacia el corazón y reconocer lo que desea expresar." },
      { title: "Presencia", text: "La práctica invita a salir del ruido y volver a una experiencia más directa del momento presente." },
      { title: "Gozo", text: "El gozo se entiende como una experiencia viva, no como una idea lejana o una meta externa." },
    ],
    related: [{ label: "Separaciones Amorosas", to: "/separaciones-amorosas" }, { label: "Ver próximos eventos", to: "/eventos" }],
  },
  prevencion: {
    eyebrow: "Relaciones conscientes",
    title: "Prevención de Violencia",
    italic: "en la Pareja",
    description: "Un programa formativo para mirar las relaciones con mayor conciencia y reconocer la importancia del cuidado, los límites y el respeto.",
    facts: ["Relaciones conscientes", "Programa formativo"],
    statement: "La conciencia también transforma nuestra forma de vincularnos.",
    introduction: "Este apartado forma parte del trabajo de Tao Axuni en relaciones conscientes. Su propósito es abrir un espacio de aprendizaje y prevención en torno a la violencia en la pareja.",
    details: [
      { title: "Reconocer", text: "Observar las dinámicas que aparecen en la relación y darles nombre desde la conciencia." },
      { title: "Cuidar", text: "Reconocer el respeto, la dignidad y la seguridad como elementos esenciales de todo vínculo." },
      { title: "Prevenir", text: "Crear una base de aprendizaje que favorezca relaciones más conscientes y responsables." },
    ],
    related: [{ label: "Separaciones Amorosas", to: "/separaciones-amorosas" }, { label: "Gozo del Corazón", to: "/gozo-del-corazon" }],
  },
  renacer: {
    eyebrow: "Retiro · Relaciones conscientes",
    title: "Para",
    italic: "Renacer",
    description: "Un retiro dentro del camino de las relaciones conscientes, especialmente vinculado con los procesos de separación y transformación personal.",
    image: "dawn",
    imageAlt: "Amanecer entre montañas",
    facts: ["Retiro", "Relaciones conscientes", "Transformación profunda"],
    statement: "Hay momentos en los que volver a ti es el comienzo.",
    introduction: "Para Renacer aparece dentro del camino de quienes desean mirar sus relaciones y atravesar una separación desde una experiencia de presencia y transformación profunda.",
    details: [
      { title: "Pausa", text: "Un retiro propone salir del ritmo cotidiano para escuchar lo que necesita ser mirado." },
      { title: "Presencia", text: "Las prácticas de Tao Axuni ponen el cuerpo, la energía y el corazón en el centro de la experiencia." },
      { title: "Renacimiento", text: "Un espacio para reconocer un nuevo comienzo sin negar la experiencia que te trajo hasta aquí." },
    ],
    related: [{ label: "Separaciones Amorosas", to: "/separaciones-amorosas" }, { label: "Retiro de Oscuridad a la Luz", to: "/oscuridad-a-la-luz" }],
  },
  retiroSexualidad: {
    eyebrow: "Retiro presencial · Oaxaca",
    title: "Retiro de",
    italic: "Sexualidad Sagrada",
    description: "Una experiencia presencial para habitar la energía vital desde la presencia, el gozo y la visión de la Sexualidad Sagrada.",
    image: "dawn",
    imageAlt: "Paisaje luminoso al amanecer",
    facts: ["29, 30 y 31 de enero", "Oaxaca", "Experiencia presencial"],
    statement: "Una inmersión en tu energía vital.",
    introduction: "El Retiro de Sexualidad Sagrada en Oaxaca reúne la experiencia presencial con las enseñanzas de Tao Axuni sobre energía, presencia y plenitud.",
    details: [
      { title: "Experiencia", text: "El formato de retiro permite dedicar un tiempo completo a la práctica y a la escucha interior." },
      { title: "Sexualidad Sagrada", text: "Una exploración de la energía sexual dentro de una visión consciente, integral y taoísta." },
      { title: "Oaxaca", text: "Tres días de experiencia presencial: 29, 30 y 31 de enero." },
    ],
    related: [{ label: "Diplomado de Sexualidad Sagrada", to: "/diplomado-sexualidad-sagrada" }, { label: "Ver próximos eventos", to: "/eventos" }],
  },
  trascendencia: {
    eyebrow: "Diplomado · Prácticas elevadas del Tao",
    title: "Trascendencia",
    italic: "Espiritual",
    description: "Una formación para profundizar en el taoísmo, la alquimia interna y las prácticas más elevadas del linaje transmitido por Tao Axuni.",
    image: "cave",
    imageAlt: "Una vela iluminando la oscuridad",
    facts: ["Cada tercer fin de semana del mes", "Sesiones grabadas", "Puertas abiertas"],
    statement: "Una práctica continua para profundizar.",
    introduction: "El Diplomado de Trascendencia Espiritual se imparte cada tercer fin de semana del mes. Todas las sesiones quedan grabadas y las puertas están abiertas.",
    details: [
      { title: "Práctica mensual", text: "Un encuentro cada tercer fin de semana del mes para sostener un recorrido de aprendizaje y práctica." },
      { title: "Sesiones grabadas", text: "Las sesiones permanecen grabadas para que puedas volver a las enseñanzas y practicar a tu ritmo." },
      { title: "Linaje", text: "Una puerta de acceso a prácticas elevadas del Universal Healing Tao System transmitidas en español." },
    ],
    related: [{ label: "Mi formación y linaje", to: "/formacion-y-linaje" }, { label: "Oscuridad a la Luz", to: "/oscuridad-a-la-luz" }],
  },
  separaciones: {
    eyebrow: "Programa · Relaciones conscientes",
    title: "Separaciones",
    italic: "Amorosas",
    description: "Un espacio dentro del trabajo de relaciones conscientes para atravesar el final de un vínculo con presencia y volver al propio centro.",
    facts: ["Relaciones conscientes", "Transformación personal"],
    statement: "El final de un vínculo también puede abrir un camino interior.",
    introduction: "Separaciones Amorosas forma parte de los programas de Tao Axuni dedicados a las relaciones conscientes y a los procesos de transformación que atravesamos en los vínculos.",
    details: [
      { title: "Mirar la experiencia", text: "Dar espacio a lo que sucede sin convertirlo en una historia que te aleja de ti." },
      { title: "Volver al centro", text: "La atención regresa al cuerpo, al corazón y a la energía que sostiene tu propia vida." },
      { title: "Continuar", text: "Un programa orientado a transitar esta etapa con mayor conciencia y apertura a lo que sigue." },
    ],
    related: [{ label: "Retiro Para Renacer", to: "/retiro-para-renacer" }, { label: "Gozo del Corazón", to: "/gozo-del-corazon" }],
  },
  abundancia: {
    eyebrow: "Programa y recurso gratuito",
    title: "Abundancia ·",
    italic: "Recuerda tus Sueños",
    description: "Un camino para volver a aquello que deseas expresar y reconocer la energía, el gozo y el potencial que ya habitan en ti.",
    image: "dawn",
    imageAlt: "Horizonte dorado al amanecer",
    facts: ["Abundancia", "Recursos gratuitos", "Gozo y presencia"],
    statement: "Recuerda tus sueños. Expresa tu pleno potencial.",
    introduction: "Recuerda tus Sueños forma parte del contenido que Tao Axuni comparte para acercar su trabajo a quienes desean comenzar, junto con el Podcast del Gozo y otros recursos gratuitos.",
    details: [
      { title: "Recordar", text: "Volver a aquello que te entusiasma y reconocer los sueños que quizá dejaste en segundo plano." },
      { title: "Energía", text: "Observar la relación entre tu energía vital, tu presencia y aquello que quieres poner en movimiento." },
      { title: "Expresar", text: "Abrir espacio para vivir y compartir tu potencial desde una experiencia más consciente." },
    ],
    related: [{ label: "Explorar desafíos gratuitos", to: "/desafios-gratuitos" }, { label: "Escuchar el Podcast del Gozo", to: "/podcast" }],
  },
  eventos: {
    eyebrow: "Calendario",
    title: "Próximas",
    italic: "experiencias",
    description: "Retiros, diplomados, talleres y convivencias para conocer el trabajo de Tao Axuni en diferentes formatos y lugares.",
    image: "dawn",
    imageAlt: "Meditación frente a un paisaje al amanecer",
    facts: ["Presencial y formación continua", "Puertas abiertas"],
    statement: "Elige la experiencia que resuena contigo.",
    introduction: "Puedes comenzar por un taller, profundizar en un diplomado o vivir la inmersión de un retiro. Estas son las próximas experiencias anunciadas.",
    details: [
      { title: "Oscuridad a la Luz", text: "Del 28 de agosto al 11 de septiembre de 2027. Primer Retiro Taoísta de Oscuridad en español." },
      { title: "Trascendencia Espiritual", text: "Cada tercer fin de semana del mes. Todas las sesiones quedan grabadas. Puertas abiertas." },
      { title: "Sexualidad Sagrada y Plenitud", text: "Diplomado con puertas abiertas para profundizar en energía vital, conciencia y plenitud." },
      { title: "Retiro de Sexualidad Sagrada", text: "29, 30 y 31 de enero en Oaxaca. Experiencia presencial." },
      { title: "Los Misterios de Asia", text: "Convivencia íntima para transmitir Los Misterios de Asia. Febrero de 2027. Grupo reducido." },
      { title: "Gozo del Corazón", text: "Taller presencial en Colombia el 18 de abril de 2027." },
    ],
    related: [{ label: "Conocer a Tao Axuni", to: "/formacion-y-linaje" }, { label: "Explorar recursos gratuitos", to: "/desafios-gratuitos" }],
    cta: { label: "Conversemos sobre tu camino", to: "/agenda" },
  },
  desafios: {
    eyebrow: "Contenido gratuito",
    title: "Desafíos",
    italic: "gratuitos",
    description: "Recursos para conocer el trabajo de Tao Axuni antes de dar el siguiente paso y acercarte a la práctica desde tu propia experiencia.",
    facts: ["Acceso gratuito", "Práctica", "Gozo y presencia"],
    statement: "Conoce mi trabajo antes de dar el siguiente paso.",
    introduction: "Los desafíos y cursos gratuitos son una puerta de entrada a los temas que atraviesan todo este trabajo: gozo, presencia, energía, alquimia interna y relaciones conscientes.",
    details: [
      { title: "Recuerda tus Sueños", text: "Un recurso vinculado con la abundancia y con la expresión de tu pleno potencial." },
      { title: "Podcast del Gozo", text: "Conversaciones y enseñanzas para conocer la mirada de Tao Axuni en un formato abierto." },
      { title: "Documental", text: "Un acercamiento al universo del Retiro de Oscuridad a la Luz y a su experiencia iniciática." },
    ],
    related: [{ label: "Recuerda tus Sueños", to: "/abundancia-recuerda-tus-suenos" }, { label: "Ir al Podcast del Gozo", to: "/podcast" }],
    cta: { label: "Ver próximas experiencias", to: "/eventos" },
  },
  podcast: {
    eyebrow: "Contenido gratuito",
    title: "Podcast",
    italic: "del Gozo",
    description: "Un espacio para acercarte al taoísmo, la alquimia interna, la sexualidad sagrada y las relaciones conscientes desde la mirada de Tao Axuni.",
    facts: ["Podcast", "Gozo", "Enseñanzas abiertas"],
    statement: "Una conversación para volver a lo esencial.",
    introduction: "El Podcast del Gozo forma parte del contenido gratuito de Tao Axuni: una forma de conocer su trabajo, su lenguaje y los temas que también dan vida a sus programas y retiros.",
    details: [
      { title: "Gozo y presencia", text: "Una invitación a reconocer la dicha como una experiencia presente y no como algo que siempre queda para después." },
      { title: "Taoísmo", text: "Enseñanzas y conversaciones alrededor de la energía vital, la alquimia interna y la práctica." },
      { title: "Vida consciente", text: "Temas de sexualidad sagrada, vínculos, trascendencia y expresión del potencial personal." },
    ],
    related: [{ label: "Explorar recursos gratuitos", to: "/desafios-gratuitos" }, { label: "Ver el documental", to: "/documental" }],
    cta: { label: "Conocer próximas experiencias", to: "/eventos" },
  },
  documental: {
    eyebrow: "Documental · Retiro taoísta",
    title: "Oscuridad",
    italic: "a la Luz",
    description: "Una mirada al primer Retiro Taoísta de Oscuridad en español y al viaje iniciático que da nombre a esta experiencia.",
    image: "cave",
    imageAlt: "Una vela encendida dentro de una cueva",
    facts: ["Documental", "Oscuridad a la Luz", "Experiencia iniciática"],
    statement: "En la ausencia de luz, nace la verdadera claridad.",
    introduction: "El documental pertenece al universo de Oscuridad a la Luz: un retiro creado por Tao Axuni que propone descender al propio interior y regresar con una nueva claridad.",
    details: [
      { title: "El umbral", text: "Dejar atrás el ruido del mundo exterior y entrar en un espacio de silencio." },
      { title: "La oscuridad", text: "La experiencia que inspira el documental y el retiro: aquietar los sentidos para mirar hacia dentro." },
      { title: "El amanecer", text: "El regreso a la luz como símbolo de una claridad renovada y de un nuevo comienzo." },
    ],
    related: [{ label: "Conocer el retiro", to: "/oscuridad-a-la-luz" }, { label: "Mi formación y linaje", to: "/formacion-y-linaje" }],
    cta: { label: "Explorar el Retiro de Oscuridad", to: "/oscuridad-a-la-luz" },
  },
  agenda: {
    eyebrow: "¿Por dónde empezar?",
    title: "Conversemos",
    italic: "sobre tu camino",
    description: "Si no sabes cuál experiencia es para ti, puedes explorar los distintos caminos y elegir el punto desde el que te gustaría comenzar.",
    image: "dawn",
    imageAlt: "Luz cálida sobre un paisaje de montañas",
    facts: ["Orientación", "Experiencias", "Tu propio ritmo"],
    statement: "¿Sientes que alguno de estos caminos te llama?",
    introduction: "No necesitas conocer todos los programas para dar el primer paso. Empieza por aquello que hoy resuena contigo: el corazón, la sexualidad, la trascendencia o una experiencia iniciática.",
    details: [
      { title: "Quiero comenzar", text: "Gozo del Corazón es una de las puertas de entrada al trabajo de Tao Axuni." },
      { title: "Quiero profundizar", text: "Los diplomados de Sexualidad Sagrada y Trascendencia Espiritual ofrecen un recorrido de formación continua." },
      { title: "Quiero una inmersión", text: "Los retiros Para Renacer, Sexualidad Sagrada y Oscuridad a la Luz proponen una experiencia más profunda." },
    ],
    related: [{ label: "Gozo del Corazón", to: "/gozo-del-corazon" }, { label: "Diplomado de Trascendencia", to: "/diplomado-trascendencia" }, { label: "Retiro Para Renacer", to: "/retiro-para-renacer" }],
    cta: { label: "Ver próximos eventos", to: "/eventos" },
  },
} satisfies Record<string, PageContent>;

export const upcomingEvents: { date: string; meta: string; title: string; note: string; to: SitePath; dark?: boolean }[] = [
  { date: "28 Ago — 11 Sep", meta: "2027", title: "Retiro de Oscuridad a la Luz", note: "Quince días de inmersión total", to: "/oscuridad-a-la-luz", dark: true },
  { date: "3er fin de semana", meta: "Mensual", title: "Diplomado de Trascendencia Espiritual", note: "Sesiones grabadas · Puertas abiertas", to: "/diplomado-trascendencia" },
  { date: "Puertas abiertas", meta: "Formación", title: "Diplomado de Sexualidad Sagrada y Plenitud", note: "Energía vital · Conciencia · Plenitud", to: "/diplomado-sexualidad-sagrada" },
  { date: "29 — 31 Ene", meta: "Oaxaca", title: "Retiro de Sexualidad Sagrada", note: "Experiencia presencial", to: "/retiro-sexualidad-sagrada" },
  { date: "Febrero", meta: "2027", title: "Convivencia Íntima · Los Misterios de Asia", note: "Grupo reducido", to: "/eventos" },
  { date: "18 Abr", meta: "Colombia · 2027", title: "Taller El Gozo del Corazón", note: "Presencial", to: "/gozo-del-corazon" },
];
