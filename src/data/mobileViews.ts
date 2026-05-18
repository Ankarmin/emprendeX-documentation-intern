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
  images?: string[];
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
    title: 'Login',
    summary: 'Pantalla de autenticacion inicial para ingresar con correo y contrasena.',
    mobile: {
      caption: 'Vista movil',
      variant: 'auth',
      images: ['/Views/V01-Login.png'],
      alt: 'Vista movil de V01 - Login',
    },
    web: { caption: 'Referencia web', variant: 'auth' },
    epic: { id: 'EP-01', name: 'Inicio y configuracion base del negocio', href: backlogHref },
    story: { id: 'HU-15', name: 'Ingreso mediante correo personal', href: sprintBacklogHref },
  },
  {
    code: 'V02',
    title: 'Crear Cuenta',
    summary: 'Formulario de registro para crear una cuenta nueva en la plataforma.',
    mobile: {
      caption: 'Vista movil',
      variant: 'auth',
      images: ['/Views/V02-CrearCuenta.png', '/Views/V02-CrearCuenta2.png'],
      alt: 'Vista movil de V02 - Crear Cuenta',
    },
    web: { caption: 'Referencia web', variant: 'auth' },
    epic: { id: 'EP-01', name: 'Inicio y configuracion base del negocio', href: backlogHref },
    notes: 'Flujo de registro con dos pantallas. La historia de usuario asociada puede formalizarse cuando el registro de cuenta se documente en backlog.',
  },
  {
    code: 'V03',
    title: 'Elegir Modulos',
    summary: 'Pantalla para elegir y personalizar los modulos visibles en el dashboard.',
    mobile: {
      caption: 'Vista movil',
      variant: 'modules',
      images: ['/Views/V03-ElegirModulos.png'],
      alt: 'Vista movil de V03 - Elegir Modulos',
    },
    web: { caption: 'Referencia web', variant: 'modules' },
    epic: { id: 'EP-02', name: 'Dashboard modular y navegacion personalizada', href: backlogHref },
    story: { id: 'HU-03', name: 'Seleccion de modulos visibles en el dashboard', href: sprintBacklogHref },
  },
  {
    code: 'V04',
    title: 'Dashboard',
    summary: 'Tablero principal con resumen operativo, accesos rapidos y actividad reciente.',
    mobile: {
      caption: 'Vista movil',
      variant: 'dashboard',
      images: ['/Views/V04-Dashboard.png', '/Views/V04-RibonActivo.png'],
      alt: 'Vista movil de V04 - Dashboard',
    },
    web: { caption: 'Referencia web', variant: 'dashboard' },
    epic: { id: 'EP-06', name: 'Pagos, seguimiento y agenda', href: backlogHref },
    story: { id: 'HU-13', name: 'Resumen de pendientes en el tablero principal', href: sprintBacklogHref },
  },
  {
    code: 'V05',
    title: 'Operaciones (Todas)',
    summary: 'Listado general de todas las operaciones con estados, montos y seguimiento.',
    mobile: {
      caption: 'Vista movil',
      variant: 'list',
      images: ['/Views/V05-OperacionesTodas.png'],
      alt: 'Vista movil de V05 - Operaciones (Todas)',
    },
    web: { caption: 'Referencia web', variant: 'list' },
    epic: { id: 'EP-05', name: 'Cotizaciones y pedidos', href: backlogHref },
    notes: 'Vista general que agrupa todos los tipos de operacion. La vinculacion exacta a HU-10/HU-11 puede completarse cuando esas historias pasen a desarrollo.',
  },
  {
    code: 'V06',
    title: 'Operaciones (Pedidos)',
    summary: 'Vista filtrada de operaciones tipo pedido con estados y seguimiento.',
    mobile: {
      caption: 'Vista movil',
      variant: 'list',
      images: ['/Views/V06-OperacionesPedidos.png'],
      alt: 'Vista movil de V06 - Operaciones (Pedidos)',
    },
    web: { caption: 'Referencia web', variant: 'list' },
    epic: { id: 'EP-05', name: 'Cotizaciones y pedidos', href: backlogHref },
    story: { id: 'HU-11', name: 'Actualizar el estado de un pedido', href: sprint2BacklogHref },
  },
  {
    code: 'V07',
    title: 'Operaciones (Cotizaciones)',
    summary: 'Vista filtrada de operaciones tipo cotizacion con estados y seguimiento.',
    mobile: {
      caption: 'Vista movil',
      variant: 'list',
      images: ['/Views/V07-OperacionesCotizaciones.png'],
      alt: 'Vista movil de V07 - Operaciones (Cotizaciones)',
    },
    web: { caption: 'Referencia web', variant: 'list' },
    epic: { id: 'EP-05', name: 'Cotizaciones y pedidos', href: backlogHref },
    notes: 'Relacionada con el flujo de cotizaciones. La historia especifica puede definirse a partir de HU-10.',
  },
  {
    code: 'V08',
    title: 'Operacion',
    summary: 'Vista de detalle de una operacion individual con informacion completa.',
    mobile: {
      caption: 'Vista movil',
      variant: 'form',
      images: ['/Views/V08-Operación.png'],
      alt: 'Vista movil de V08 - Operacion',
    },
    web: { caption: 'Referencia web', variant: 'form' },
    epic: { id: 'EP-06', name: 'Pagos, seguimiento y agenda', href: backlogHref },
    notes: 'Vista de detalle de operacion. Relacionada con el seguimiento operativo del negocio.',
  },
  {
    code: 'V09',
    title: 'Cliente Lista',
    summary: 'Listado general de clientes registrados con informacion resumida.',
    mobile: {
      caption: 'Vista movil',
      variant: 'list',
      images: ['/Views/V09-ClienteLista.png'],
      alt: 'Vista movil de V09 - Cliente Lista',
    },
    web: { caption: 'Referencia web', variant: 'list' },
    epic: { id: 'EP-03', name: 'Gestion de clientes', href: backlogHref },
    story: { id: 'HU-05', name: 'Registro de clientes', href: sprintBacklogHref },
  },
  {
    code: 'V10',
    title: 'Cliente Detalle',
    summary: 'Vista de detalle de un cliente con datos de contacto e historial.',
    mobile: {
      caption: 'Vista movil',
      variant: 'list',
      images: ['/Views/V10-ClienteDetalle.png'],
      alt: 'Vista movil de V10 - Cliente Detalle',
    },
    web: { caption: 'Referencia web', variant: 'list' },
    epic: { id: 'EP-03', name: 'Gestion de clientes', href: backlogHref },
    story: { id: 'HU-06', name: 'Ver ficha basica de un cliente', href: sprint2BacklogHref },
  },
  {
    code: 'V11',
    title: 'Registrar Cliente',
    summary: 'Formulario de alta de nuevos clientes en la base de datos.',
    mobile: {
      caption: 'Vista movil',
      variant: 'form',
      images: ['/Views/V11-RegistrarCliente.png'],
      alt: 'Vista movil de V11 - Registrar Cliente',
    },
    web: { caption: 'Referencia web', variant: 'form' },
    epic: { id: 'EP-03', name: 'Gestion de clientes', href: backlogHref },
    story: { id: 'HU-05', name: 'Registro de clientes', href: sprintBacklogHref },
  },
  {
    code: 'V12',
    title: 'Configuracion',
    summary: 'Pantalla de configuracion del sistema con opciones personalizables.',
    mobile: {
      caption: 'Vista movil',
      variant: 'modules',
      images: ['/Views/V12-Configuración1.png', '/Views/V12-Configuración2.png', '/Views/V12-Configuración3.png'],
      alt: 'Vista movil de V12 - Configuracion',
    },
    web: { caption: 'Referencia web', variant: 'modules' },
    epic: { id: 'EP-02', name: 'Dashboard modular y navegacion personalizada', href: backlogHref },
    notes: 'Pantalla de configuracion con tres secciones. Relacionada con HU-04 y la personalizacion de modulos.',
  },
  {
    code: 'V13',
    title: 'Productos y Servicios',
    summary: 'Catalogo de productos y servicios disponibles en la plataforma.',
    mobile: {
      caption: 'Vista movil',
      variant: 'list',
      images: ['/Views/V13-ProductosyServicios.png'],
      alt: 'Vista movil de V13 - Productos y Servicios',
    },
    web: { caption: 'Referencia web', variant: 'list' },
    epic: { id: 'EP-05', name: 'Cotizaciones y pedidos', href: backlogHref },
    notes: 'Catalogo de productos y servicios para usar en cotizaciones y pedidos.',
  },
  {
    code: 'V14',
    title: 'Cotizaciones',
    summary: 'Vista de cotizaciones con listado y estados de cada una.',
    mobile: {
      caption: 'Vista movil',
      variant: 'list',
      images: ['/Views/V14-Cotizaciones.png'],
      alt: 'Vista movil de V14 - Cotizaciones',
    },
    web: { caption: 'Referencia web', variant: 'list' },
    epic: { id: 'EP-05', name: 'Cotizaciones y pedidos', href: backlogHref },
    story: { id: 'HU-10', name: 'Convertir cotizacion aprobada en pedido', href: sprint2BacklogHref },
  },
  {
    code: 'V15',
    title: 'Nueva Cotizacion',
    summary: 'Formulario para crear una nueva cotizacion con productos y precios.',
    mobile: {
      caption: 'Vista movil',
      variant: 'form',
      images: ['/Views/V15-Nueva Cotización.png'],
      alt: 'Vista movil de V15 - Nueva Cotizacion',
    },
    web: { caption: 'Referencia web', variant: 'form' },
    epic: { id: 'EP-05', name: 'Cotizaciones y pedidos', href: backlogHref },
    story: { id: 'HU-10', name: 'Convertir cotizacion aprobada en pedido', href: sprint2BacklogHref },
  },
  {
    code: 'V16',
    title: 'Contabilidad',
    summary: 'Panel de contabilidad con resumen financiero y transacciones.',
    mobile: {
      caption: 'Vista movil',
      variant: 'dashboard',
      images: ['/Views/V16-Contabilidad.png'],
      alt: 'Vista movil de V16 - Contabilidad',
    },
    web: { caption: 'Referencia web', variant: 'dashboard' },
    epic: { id: 'EP-06', name: 'Pagos, seguimiento y agenda', href: backlogHref },
    notes: 'Panel financiero relacionado con el seguimiento de pagos y adelantos.',
  },
  {
    code: 'V17',
    title: 'Agregar Pago',
    summary: 'Flujo para agregar pagos, registrar adelantos y ver saldos pendientes.',
    mobile: {
      caption: 'Vista movil',
      variant: 'form',
      images: ['/Views/V17-AgregarPago1.png', '/Views/V17-AgregarPago2.png', '/Views/V17-AgregarPago3.png'],
      alt: 'Vista movil de V17 - Agregar Pago',
    },
    web: { caption: 'Referencia web', variant: 'form' },
    epic: { id: 'EP-06', name: 'Pagos, seguimiento y agenda', href: backlogHref },
    story: { id: 'HU-12', name: 'Registrar adelantos y saldos pendientes', href: sprint2BacklogHref },
  },
  {
    code: 'V18',
    title: 'Menu Lateral',
    summary: 'Navegacion lateral con accesos a modulos y funcionalidades principales.',
    mobile: {
      caption: 'Vista movil',
      variant: 'menu',
      images: ['/Views/Menu-Lateral.png'],
      alt: 'Vista movil de V18 - Menu Lateral',
    },
    web: { caption: 'Referencia web', variant: 'menu' },
    epic: { id: 'EP-02', name: 'Dashboard modular y navegacion personalizada', href: backlogHref },
    story: { id: 'HU-04', name: 'Ordenamiento de modulos del menu principal', href: sprintBacklogHref },
  },
];
