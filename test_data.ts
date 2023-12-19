import {Koppeling} from "./src/app/Koppeling";

export const KOPPELINGEN: Koppeling[] = [
  {
    naam: "Netflix",
    url: "http://www.Netflix.com",
    agb: 53530001,
    ketenzorgtype: "DM",
    kleur: "#eb4316",
    faIcoon: "",
    logoPad: "content/images/etc",
    volgorde: 3,
    permissie: "samenwerken.patienten",
    opActiepagina: false
  },
  {
    naam: "Disney",
    url: "http://www.Disney.com",
    agb: 12345678,
    ketenzorgtype: "BBR",
    kleur: "#006B99",
    faIcoon: "fa-plus",
    logoPad: "content/images/etc",
    volgorde: 2,
    permissie: "samenwerken.eHealth",
    opActiepagina: true
  }
]
export const DROPDOWN_WAARDES = {
  "ketenzorg": ["DM", "BBR", "COPD-Astma"],
  "volgorde": [1, 2, 3, 4, 5, 6, 7],
  "permissie":["samenwerken.patienten","samenwerken.eHealth"]
}

