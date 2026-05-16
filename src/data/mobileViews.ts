export type PlatformVariant =
  | 'auth'
  | 'intro'
  | 'modules'
  | 'dashboard'
  | 'list'
  | 'calendar'
  | 'form'
  | 'paywall'
  | 'menu';

export interface ViewReference {
  id: string;
  name: string;
  href: string;
}

export interface ViewPlatformPreview {
  caption: string;
  variant: PlatformVariant;
  image?: string;
  alt?: string;
}

export interface DocumentedView {
  code: string;
  title: string;
  summary: string;
  mobile: ViewPlatformPreview;
  web: ViewPlatformPreview;
  epic?: ViewReference;
  story?: ViewReference;
  notes?: string;
}

const backlogHref = '/scrum/product-backlog/';
const sprintBacklogHref = '/scrum/sprints/sprint-1/sprint-backlog/';
const sprint2BacklogHref = '/scrum/sprints/sprint-2/sprint-backlog/';

export const mobileViews: DocumentedView[] = [
  {
    code: 'V01',
    title: 'Inicio de sesion',
    summary: 'Pantalla de autenticacion inicial para ingresar con correo y contrasena.',
    mobile: { caption: 'Vista movil', variant: 'auth' },
    web: { caption: 'Referencia web', variant: 'auth' },
    epic: { id: 'EP-01', name: 'Inicio y configuracion base del negocio', href: backlogHref },
    story: { id: 'HU-15', name: 'Ingreso mediante correo personal', href: sprintBacklogHref },
  },
  {
    code: 'V02',
    title: 'Presentacion 1',
    summary: 'Primera pantalla de presentacion del producto y propuesta de valor.',
    mobile: { caption: 'Vista movil', variant: 'intro' },
    web: { caption: 'Referencia web', variant: 'intro' },
    epic: { id: 'EP-01', name: 'Inicio y configuracion base del negocio', href: backlogHref },
    notes: 'Pantalla informativa de bienvenida. No tiene historia de usuario asignada de forma explicita en la documentacion actual.',
  },
  {
    code: 'V03',
    title: 'Presentacion 2',
    summary: 'Segunda pantalla del carrusel introductorio enfocada en organizacion del negocio.',
    mobile: { caption: 'Vista movil', variant: 'intro' },
    web: { caption: 'Referencia web', variant: 'intro' },
    epic: { id: 'EP-01', name: 'Inicio y configuracion base del negocio', href: backlogHref },
    notes: 'Se documento como parte del flujo de introduccion previo al onboarding.',
  },
  {
    code: 'V04',
    title: 'Presentacion 3',
    summary: 'Tercera pantalla introductoria orientada al crecimiento del negocio.',
    mobile: { caption: 'Vista movil', variant: 'intro' },
    web: { caption: 'Referencia web', variant: 'intro' },
    epic: { id: 'EP-01', name: 'Inicio y configuracion base del negocio', href: backlogHref },
    notes: 'Puede enlazarse mas adelante a una historia concreta si el flujo se formaliza en backlog.',
  },
  {
    code: 'V05',
    title: 'Modulos disponibles',
    summary: 'Configuracion de modulos visibles para personalizar el dashboard y el menu principal.',
    mobile: { caption: 'Vista movil', variant: 'modules' },
    web: { caption: 'Referencia web', variant: 'modules' },
    epic: { id: 'EP-02', name: 'Dashboard modular y navegacion personalizada', href: backlogHref },
    story: { id: 'HU-03', name: 'Seleccion de modulos visibles en el dashboard', href: sprintBacklogHref },
  },
  {
    code: 'V06',
    title: 'Dashboard',
    summary: 'Tablero principal con resumen operativo, accesos rapidos y actividad reciente.',
    mobile: { caption: 'Vista movil', variant: 'dashboard' },
    web: { caption: 'Referencia web', variant: 'dashboard' },
    epic: { id: 'EP-06', name: 'Pagos, seguimiento y agenda', href: backlogHref },
    story: { id: 'HU-13', name: 'Resumen de pendientes en el tablero principal', href: sprintBacklogHref },
  },
  {
    code: 'V07',
    title: 'Lista de operaciones',
    summary: 'Listado de pedidos u operaciones con estados, montos y seguimiento rapido.',
    mobile: { caption: 'Vista movil', variant: 'list' },
    web: { caption: 'Referencia web', variant: 'list' },
    epic: { id: 'EP-05', name: 'Cotizaciones y pedidos', href: backlogHref },
    notes: 'La vista agrupa operaciones del flujo comercial. Su vinculacion exacta a HU-10/HU-11 puede completarse cuando esas historias pasen a desarrollo.',
  },
  {
    code: 'V08',
    title: 'Lista de clientes',
    summary: 'Pantalla de consulta rapida de clientes registrados y su informacion resumida.',
    mobile: { caption: 'Vista movil', variant: 'list' },
    web: { caption: 'Referencia web', variant: 'list' },
    epic: { id: 'EP-03', name: 'Gestion de clientes', href: backlogHref },
    story: { id: 'HU-05', name: 'Registro de clientes', href: sprintBacklogHref },
  },
  {
    code: 'V09',
    title: 'Calendario',
    summary: 'Vista de agenda para compromisos, entregas y seguimiento de pendientes.',
    mobile: { caption: 'Vista movil', variant: 'calendar' },
    web: { caption: 'Referencia web', variant: 'calendar' },
    epic: { id: 'EP-06', name: 'Pagos, seguimiento y agenda', href: backlogHref },
    notes: 'Relacionada con el seguimiento operativo del negocio. La historia especifica puede definirse entre HU-11, HU-12 o una futura historia de agenda.',
  },
  {
    code: 'V10',
    title: 'Plan Pro',
    summary: 'Pantalla de paywall para comunicar beneficios premium y activacion del plan.',
    mobile: { caption: 'Vista movil', variant: 'paywall' },
    web: { caption: 'Referencia web', variant: 'paywall' },
    epic: { id: 'EP-07', name: 'Freemium y visibilidad de modulos premium', href: backlogHref },
    story: { id: 'HU-14', name: 'Visualizar modulos premium bloqueados', href: sprintBacklogHref },
  },
  {
    code: 'V11',
    title: 'Onboarding del negocio',
    summary: 'Formulario inicial para capturar nombre, rubro y moneda del negocio.',
    mobile: { caption: 'Vista movil', variant: 'form' },
    web: { caption: 'Referencia web', variant: 'form' },
    epic: { id: 'EP-01', name: 'Inicio y configuracion base del negocio', href: backlogHref },
    story: { id: 'HU-01', name: 'Registro de datos basicos del negocio', href: sprintBacklogHref },
  },
  {
    code: 'V12',
    title: 'Registro de cliente',
    summary: 'Formulario de alta de clientes con datos minimos para la base de contactos.',
    mobile: { caption: 'Vista movil', variant: 'form' },
    web: { caption: 'Referencia web', variant: 'form' },
    epic: { id: 'EP-03', name: 'Gestion de clientes', href: backlogHref },
    story: { id: 'HU-05', name: 'Registro de clientes', href: sprintBacklogHref },
  },
  {
    code: 'V13',
    title: 'Menu desplegable',
    summary: 'Navegacion lateral con accesos modulares y priorizacion del flujo de trabajo.',
    mobile: { caption: 'Vista movil', variant: 'menu' },
    web: { caption: 'Referencia web', variant: 'menu' },
    epic: { id: 'EP-02', name: 'Dashboard modular y navegacion personalizada', href: backlogHref },
    story: { id: 'HU-04', name: 'Ordenamiento de modulos del menu principal', href: sprintBacklogHref },
  },
  {
    code: 'V14',
    title: 'Ficha de cliente',
    summary: 'Pantalla de detalle del cliente con datos de contacto, historial de pedidos y saldo pendiente.',
    mobile: { caption: 'Vista movil', variant: 'list' },
    web: { caption: 'Referencia web', variant: 'list' },
    epic: { id: 'EP-03', name: 'Gestion de clientes', href: backlogHref },
    story: { id: 'HU-06', name: 'Ver ficha basica de un cliente', href: sprint2BacklogHref },
  },
  {
    code: 'V15',
    title: 'Conversion cotizacion a pedido',
    summary: 'Flujo para convertir una cotizacion aprobada en un pedido formal con confirmacion visual.',
    mobile: { caption: 'Vista movil', variant: 'form' },
    web: { caption: 'Referencia web', variant: 'form' },
    epic: { id: 'EP-05', name: 'Cotizaciones y pedidos', href: backlogHref },
    story: { id: 'HU-10', name: 'Convertir cotizacion aprobada en pedido', href: sprint2BacklogHref },
  },
  {
    code: 'V16',
    title: 'Cambio de estado del pedido',
    summary: 'Selector visual para cambiar el estado de un pedido entre pendiente, en proceso y entregado.',
    mobile: { caption: 'Vista movil', variant: 'form' },
    web: { caption: 'Referencia web', variant: 'form' },
    epic: { id: 'EP-06', name: 'Pagos, seguimiento y agenda', href: backlogHref },
    story: { id: 'HU-11', name: 'Actualizar el estado de un pedido', href: sprint2BacklogHref },
  },
  {
    code: 'V17',
    title: 'Registro de adelantos',
    summary: 'Formulario para registrar adelantos y visualizar el saldo pendiente de un pedido.',
    mobile: { caption: 'Vista movil', variant: 'form' },
    web: { caption: 'Referencia web', variant: 'form' },
    epic: { id: 'EP-06', name: 'Pagos, seguimiento y agenda', href: backlogHref },
    story: { id: 'HU-12', name: 'Registrar adelantos y saldos pendientes', href: sprint2BacklogHref },
  },
];
