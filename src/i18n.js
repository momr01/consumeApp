import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translation: {
          sidebar: {
            main: "Main",
            dashboard: "Dashboard",
            monitoring: "Monitoring",
            maintenance: "Maintenance",
            reports: "Reports",
            security: "Security",
            forgotPwd: "Forgot password",
            management: "Management",
            users: "Users",
            user: "User",
            plants: "Plants",
            shifts: "Shifts",
            equipments: "Equipments",
            powered: "Powered by:",
            syncronik: "Syncronik",
            sensors: "Sensors",
            profile: "Profile",
          },
          navbar: {
            editProfile: "Edit Profile",
            logout: "Logout",
          },
          language: {
            spanish: "Spanish",
            english: "English",
          },
          dashboard: {
            overview: "Overview",
            plant: "Plant",
            period: "Period",
            update: "Update",
            export: "Export",
            consume: "Consume",
            chartTitle: "Consume Data Overview",
            filtersTitle: "Consume Filters",
            sensors: "Sensors",
            sensor: "Sensor",
            apply: "Apply",
          },
          maintenance: {
            allPlants: "All Plants",
            plantEquipment: {
              title: "Plant and Equipment Maintenance",
              description: "HVAC System",
              icon: "Icon",
            },
            hvacOverview: {
              title: "HVAC Systems Operational Overview",
              tableBrand: "Brand",
              tableIndoor: "Indoor",
              tableOutdoor: "Outdoor",
              tableStatus: "Status",
            },
            lastMaintenance: {
              title: "Last Maintenance Orders Created",
              tableOrder: "No. Order",
              tableCreated: "Created",
              tableStatus: "Status",
            },
            systemError: "System Error",
            notConnected: "Not Connected",
            tableErrorCode: "Error Code",
            tableDateTime: "Date Time",
            tablePlant: "Plant",
            tableDescription: "Description",
            tableAction: "Action",
          },
          reports: {
            addReport: "Add Report",
          },
          form: {
            name: "Name",
            country: "Country",
            state: "State",
            city: "City",
            district: "District",
            street: "Street",
            number: "Number",
            zipCode: "Zip Code",
            cancel: "Cancel",
            create: "Create",
            inputRequired: "This field is required",
            update: "Update",
            loading: "Loading...",
            changeImg: "Change image",
            saveChanges: "Save Changes",
            changePwdDescription: "You can change your personal password",
            changePwdBtn: "Set New Password",
            lastName: "Last name",
            email: "Email",
            password: "Password",
          },
          table: {
            actions: "Actions",
            showing: "Showing",
            to: "to",
            of: "of",
            results: "results",
            previous: "Previous",
            next: "Next",
          },
          users: {
            placeholder: "Search by User name...",
          },
          plants: {
            placeholder: "Search by Plant name...",
            create: "Create Plant",
            filter: {
              all: "All",
            },
            form: {
              addPlant: "Add Plant",
              createTitle: "Create new plant",
              createDescription:
                "Please complete each input to create a new plant",
              updatePlant: "Update Plant",
              updateTitle: "Update plant",
              updateDescription: "Plase complete each input to update a plant",
            },
          },
          profile: {
            title: "Profile",
            description: "My Profile",
            account: "My Account",
            information: "Personal information",
          },
          notFound: {
            description:
              "Hmm... this page doesn't exist. Try searching for something else!",
            btn: "Back To Home",
          },
        },
      },
      es: {
        translation: {
          sidebar: {
            main: "Principal",
            dashboard: "Panel",
            monitoring: "Monitoreo",
            maintenance: "Mantenimiento",
            reports: "Reportes",
            security: "Seguridad",
            forgotPwd: "Olvidé la contraseña",
            management: "Administración",
            users: "Usuarios",
            user: "Usuario",
            plants: "Plantas",
            shifts: "Horarios",
            equipments: "Equipos",
            powered: "Proporcionado por:",
            syncronik: "Syncronik",
            sensors: "Sensores",
            profile: "Perfil",
          },
          navbar: {
            editProfile: "Editar Perfil",
            logout: "Cerrar Sesión",
          },
          language: {
            spanish: "Español",
            english: "Inglés",
          },
          dashboard: {
            overview: "General",
            plant: "Planta",
            period: "Período",
            update: "Actualizar",
            export: "Exportar",
            consume: "Consumo",
            chartTitle: "Datos Generales de Consumo",
            filtersTitle: "Filtros de Consumo",
            sensors: "Sensores",
            sensor: "Sensor",
            apply: "Aplicar",
          },
          maintenance: {
            allPlants: "Todas las Plantas",
            plantEquipment: {
              title: "Mantenimiento de Planta y Equipos",
              description: "Sistema HVAC",
              icon: "Ícono",
            },
            hvacOverview: {
              title: "Vista General de Operaciones de Sistemas HVAC",
              tableBrand: "Marca",
              tableIndoor: "Interior",
              tableOutdoor: "Exterior",
              tableStatus: "Estado",
            },
            lastMaintenance: {
              title: "Último Mantenimiento de Órdenes Creadas",
              tableOrder: "No. Orden",
              tableCreated: "Creada",
              tableStatus: "Estado",
            },
            systemError: "Error de Sistema",
            notConnected: "No Conectado",
            tableErrorCode: "Código de Error",
            tableDateTime: "Fecha y Hora",
            tablePlant: "Planta",
            tableDescription: "Descripción",
            tableAction: "Acción",
          },
          reports: {
            addReport: "Agregar Reporte",
          },
          form: {
            name: "Nombre",
            country: "País",
            state: "Estado",
            city: "Ciudad",
            district: "Distrito",
            street: "Calle",
            number: "Número",
            zipCode: "Código Postal",
            cancel: "Cancelar",
            create: "Crear",
            inputRequired: "Éste campo es requerido",
            update: "Actualizar",
            loading: "Cargando...",
            changeImg: "Cambiar imagen",
            saveChanges: "Guardar Cambios",
            changePwdDescription: "Puedes cambiar tu contraseña personal",
            changePwdBtn: "Definir nueva contraseña",
            lastName: "Apellido",
            email: "Email",
            password: "Contraseña",
          },
          table: {
            actions: "Acciones",
            showing: "Mostrando",
            to: "de",
            of: "de",
            results: "resultados",
            previous: "Anterior",
            next: "Siguiente",
          },
          users: {
            placeholder: "Buscar por nombre de usuario...",
          },
          plants: {
            placeholder: "Buscar por nombre de la Planta...",
            create: "Crear Planta",
            filter: {
              all: "Todos",
            },
            form: {
              addPlant: "Añadir Planta",
              createTitle: "Crear nueva planta",
              createDescription:
                "Por favor, complete cada campo para crear una nueva planta",
              updatePlant: "Actualizar Planta",
              updateTitle: "Actualizar planta",
              updateDescription:
                "Por favor, modifique los campos para editar la planta",
            },
          },
          profile: {
            title: "Perfil",
            description: "Mi Perfil",
            account: "Mi Cuenta",
            information: "Información personal",
          },
          notFound: {
            description:
              "Hmm... ésta página no existe. Intenta realizar otra búsqueda!",
            btn: "Volver a la página principal",
          },
        },
      },
    },
  });

export default i18n;
