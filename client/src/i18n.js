import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

export const I18N_LANGUAGE = "I18N_LANGUAGE";

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    //   .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    //   .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources: {
            en: {
                translation: {
                    "light":"light",
                    "dark":"dark",
                    "front-page":"Take me to the front page",
                    "user-icons":"User icons",
                    "buttons":"Buttons",
                    "small":"small",
                    "medium":"medium",
                    "large":"large",
                    "primary":"primary",
                    "secondary":"secondary",
                    "text":"text",
                    "others":"others",
                    "default":"default",
                    "click-me":"click me!",
                    "button-clicked":"button clicked",
                    "disabled":"disabled",
                    "user-inputs":"User inputs",
                    "side-by-side":"side-by-side",
                    "username":"username",
                    "dollar-amt-component": "Dollar Amount Component",
                    "subtotal":"subtotal",
                    "total-amt-component": "Total Amount Component",
                    "dropdown":"dropdown",
                    "other":"other",
                    "back-button":"Back button",
                    "title": "LettuceEat",
                    "tagline": "Easy ordering and bill splitting",
                    "toggle-lang": "french",
                    "event-name": "Event Name*",
                    "event-name-placeholder": "Dine Out (required)",
                    "users-name": "Your Name*",
                    "users-name-placeholder": "John Doe (required)",
                    "password": "Password",
                    "optional": "optional",
                    "menu": "Menu",
                    "create": "Create",
                    "tip":"Tip",
                    "order-total":"Order total",
                    "confirm-order":"Confirm order",
                    "users":"Users",
                    "group-total":"Group Total So Far",
                    "consolidate":"Consolidate",
                    "refresh":"Refresh",
                    "required-alert":"Please fill in the required fields.",
                    "password-alert":"Password must be at between 6 to 30 characters."

                }
            },
            fr: {
                translation: {
                    "light":"clair",
                    "dark":"sombre",
                    "front-page":"Emmenez-moi à la première page",
                    "user-icons":"Icônes utilisateur",
                    "buttons":"Boutons",
                    "small":"petite",
                    "medium":"moyenne",
                    "large":"grande",
                    "primary":"primaire",
                    "secondary":"secondaire",
                    "text":"texte",
                    "others":"les autres",
                    "default":"défaut",
                    "click-me":"cliquez moi!",
                    "button-clicked":"bouton cliqué",
                    "disabled":"désactivé",
                    "user-inputs":"Entrées utilisateur",
                    "side-by-side":"cote à cote",
                    "username":"nom d'utilisateur",
                    "dollar-amt-component": "Composante montant en dollars",
                    "subtotal":"Total",
                    "total-amt-component": "Composant montant total",
                    "dropdown":"Menu déroulant",
                    "other":"autre",
                    "back-button":"Bouton retour",
                    "title": "LettuceEat en français",
                    "tagline": "Commande et fractionnement de facture faciles",
                    "toggle-lang": "anglaise",
                    "event-name": "Nom de l'événement*",
                    "event-name-placeholder": "Dîner (obligatoire)",
                    "users-name": "Votre nom*",
                    "users-name-placeholder": "Jean Dupont (obligatoire)",
                    "password": "Le mot de passe",
                    "optional": "optionnel",
                    "menu": "Menu",
                    "create": "Créer",
                    "tip":"Pourboire",
                    "order-total":"Total de la commande",
                    "confirm-order":"Confirmer la commande",
                    "users":"Utilisateurs",
                    "group-total":"Total du groupe à ce jour",
                    "consolidate":"Consolider",
                    "refresh":"Rafraîchir",
                    "required-alert":"S'il vous plaît remplir les champs obligatoires.",
                    "password-alert":"Le mot de passe doit comporter entre 6 et 30 caractères."

                }
            }
        },
        lng: localStorage.getItem(I18N_LANGUAGE) || "en",
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;