import type { ProductSubtype } from "@/types/configurator"

export const HERO_USPS = [
  "Professionele logomatten op maat",
  "Hybride bestel- en offerteflow",
  "Geschikt voor België en Benelux",
]

export const PRODUCT_SUBTYPE_DETAILS: Record<
  ProductSubtype,
  {
    title: string
    category: string
    short: string
    bestFor: string
  }
> = {
  Impression: {
    title: "Impression",
    category: "Binnen logomatten",
    short: "Premium binnenlogomat voor een representatieve entree.",
    bestFor: "Kantoren, showrooms en ontvangstruimtes.",
  },
  Colorstar: {
    title: "Colorstar",
    category: "Binnen logomatten",
    short: "Sterke kleurweergave voor merkgerichte binnenentrees.",
    bestFor: "Retail, hospitality en commerciële ruimtes.",
  },
  HD: {
    title: "HD",
    category: "Binnen logomatten",
    short: "Scherpe detailweergave voor logo en branding.",
    bestFor: "High-end recepties en merkbeleving.",
  },
  Scrape: {
    title: "Scrape",
    category: "Binnen logomatten",
    short: "Extra functionele binnenmat met focus op vuilopvang.",
    bestFor: "Intensieve binnenzones en drukke ingangen.",
  },
  Superscrap: {
    title: "Superscrap",
    category: "Buiten logomatten",
    short: "Buitenmat voor intensief gebruik en zware entrees.",
    bestFor: "Buitenentrees, industrie en retail.",
  },
  Optibrush: {
    title: "Optibrush",
    category: "Buiten logomatten",
    short: "Schrapende buitenmat met robuuste look.",
    bestFor: "Buitentoepassingen met veel passerend verkeer.",
  },
  "Standaard Binnenmat": {
    title: "Standaard Binnenmat",
    category: "Standaard matten",
    short: "Niet-gepersonaliseerde binnenmat als secundair aanbod.",
    bestFor: "Kantoren en functionele binnenzones.",
  },
  "Standaard Buitenmat": {
    title: "Standaard Buitenmat",
    category: "Standaard matten",
    short: "Niet-gepersonaliseerde buitenmat voor praktische entrees.",
    bestFor: "Buiteninlopen en doorgangen.",
  },
}

export const SECTORS = [
  "Kantoor",
  "Retail",
  "Horeca",
  "Industrie",
  "Showroom",
  "Evenementen",
]

export const TESTIMONIALS = [
  {
    quote: "Snelle opvolging, duidelijke communicatie en een sterke eerste indruk bij onze inkom.",
    author: "Retailklant uit Gent",
  },
  {
    quote: "De configurator maakt het heel makkelijk om intern snel een juiste keuze te maken.",
    author: "Facility manager uit Brussel",
  },
  {
    quote: "Mooie premium look, correcte prijsweergave en duidelijk onderscheid tussen bestellen en offerte.",
    author: "Showroomproject in Antwerpen",
  },
]
