const fs = require('fs');
const path = require('path');

const localProjects = JSON.parse(fs.readFileSync(path.join(__dirname, 'pdf_projects_data.json'), 'utf8'));

function getBase64(imgRelPath) {
  const p = path.join(__dirname, imgRelPath);
  if (fs.existsSync(p)) {
    const buf = fs.readFileSync(p);
    return 'data:image/jpeg;base64,' + buf.toString('base64');
  }
  return '';
}

const embeddedProjects = localProjects.map(p => {
  const copy = Object.assign({}, p);
  copy.heroImage = getBase64(p.heroImage);
  if (copy.gallery && Array.isArray(copy.gallery)) {
    copy.gallery = copy.gallery.map(g => getBase64(g));
  }
  return copy;
});

const I18N_UI = {
  es: {
    brand_title: "Exposición de Diseño UACJ",
    brand_subtitle: "LDI · LDGM · Maestría (MDDP)",
    hero_pill: "🏛️ Universidad Autónoma de Ciudad Juárez × Zagreb Design Week 2026",
    hero_title: "Innovación, Diseño & Impacto desde la Frontera Norte",
    hero_desc: "Explora la colección de proyectos seleccionados de la <strong>Licenciatura en Diseño Industrial (LDI)</strong>, la <strong>Licenciatura en Diseño y Gestión de la Moda (LDGM)</strong> y la <strong>Maestría en Diseño y Desarrollo de Producto (MDDP)</strong> presentados en la exposición internacional de Zagreb Design Week.",
    filter_all: "Todos los Proyectos",
    filter_ldi: "Diseño Industrial (LDI)",
    filter_ldgm: "Diseño y Moda (LDGM)",
    filter_mddp: "Maestría (MDDP)",
    search_placeholder: "Buscar por título, autor o tema...",
    card_view_btn: "Ver Ficha →",
    tag_ldi: "LDI · Licenciatura",
    tag_ldgm: "LDGM · Moda",
    tag_mddp: "MDDP · Maestría",
    no_projects_title: "No se encontraron proyectos",
    no_projects_desc: "Prueba con otros términos de búsqueda o filtros.",
    modal_fullscreen: "Pantalla Completa",
    modal_label_program: "Programa",
    modal_label_authors: "Autor(es)",
    modal_label_curatorship: "Curaduría",
    modal_label_exhibition: "Exposición",
    modal_exhibition_val: "ÁRIDO · Zagreb Design Week 2026",
    modal_section_concept: "Concepto & Descripción",
    modal_section_specs: "Especificaciones Técnicas",
    modal_img_fullscreen_hint: "Clic para ver en pantalla completa",
    badge_photos: "fotos",
    footer_desc: "Instituto de Arquitectura, Diseño y Arte (IADA) · Universidad Autónoma de Ciudad Juárez. Fomentando el talento creativo y el desarrollo tecnológico con proyección internacional.",
    footer_col_programs: "PROGRAMAS EDUCATIVOS",
    footer_col_event: "EVENTO",
    footer_link_ldi: "Licenciatura en Diseño Industrial (LDI)",
    footer_link_ldgm: "Licenciatura en Diseño y Gestión de la Moda (LDGM)",
    footer_link_mddp: "Maestría en Diseño y Desarrollo de Producto (MDDP)",
    footer_link_dept: "Departamento de Diseño UACJ",
    footer_link_zdw: "Zagreb Design Week Oficial"
  },
  en: {
    brand_title: "UACJ Design Exhibition",
    brand_subtitle: "LDI · LDGM · Master's (MDDP)",
    hero_pill: "🏛️ Universidad Autónoma de Ciudad Juárez × Zagreb Design Week 2026",
    hero_title: "Innovation, Design & Impact from the Northern Borderland",
    hero_desc: "Explore the curated collection of projects from the <strong>Bachelor in Industrial Design (LDI)</strong>, the <strong>Bachelor in Fashion Design and Management (LDGM)</strong>, and the <strong>Master in Product Design and Development (MDDP)</strong> presented at Zagreb Design Week.",
    filter_all: "All Projects",
    filter_ldi: "Industrial Design (LDI)",
    filter_ldgm: "Fashion Design (LDGM)",
    filter_mddp: "Master's (MDDP)",
    search_placeholder: "Search by title, designer, or topic...",
    card_view_btn: "View Details →",
    tag_ldi: "LDI · Industrial",
    tag_ldgm: "LDGM · Fashion",
    tag_mddp: "MDDP · Master",
    no_projects_title: "No projects found",
    no_projects_desc: "Try searching with different keywords or filters.",
    modal_fullscreen: "Full Screen",
    modal_label_program: "Program",
    modal_label_authors: "Author(s)",
    modal_label_curatorship: "Curatorship",
    modal_label_exhibition: "Exhibition",
    modal_exhibition_val: "ÁRIDO · Zagreb Design Week 2026",
    modal_section_concept: "Concept & Description",
    modal_section_specs: "Technical Specifications",
    modal_img_fullscreen_hint: "Click to view in full screen",
    badge_photos: "photos",
    footer_desc: "Institute of Architecture, Design and Art (IADA) · Universidad Autónoma de Ciudad Juárez. Fostering creative talent and technological development with international impact.",
    footer_col_programs: "ACADEMIC PROGRAMS",
    footer_col_event: "EVENT",
    footer_link_ldi: "Bachelor in Industrial Design (LDI)",
    footer_link_ldgm: "Bachelor in Fashion Design and Management (LDGM)",
    footer_link_mddp: "Master in Product Design and Development (MDDP)",
    footer_link_dept: "UACJ Department of Design",
    footer_link_zdw: "Official Zagreb Design Week"
  },
  hr: {
    brand_title: "Izložba dizajna UACJ",
    brand_subtitle: "LDI · LDGM · Poslijediplomski (MDDP)",
    hero_pill: "🏛️ Universidad Autónoma de Ciudad Juárez × Zagreb Design Week 2026",
    hero_title: "Inovacije, dizajn i utjecaj sa sjeverne granice",
    hero_desc: "Istražite kustoski izbor projekata studenata <strong>preddiplomskog studija industrijskog dizajna (LDI)</strong>, <strong>dizajna i modnog menadžmenta (LDGM)</strong> te <strong>poslijediplomskog studija dizajna i razvoja proizvoda (MDDP)</strong> sa Sveučilišta u Ciudad Juárezu na Zagreb Design Weeku.",
    filter_all: "Svi projekti",
    filter_ldi: "Industrijski dizajn (LDI)",
    filter_ldgm: "Dizajn i moda (LDGM)",
    filter_mddp: "Poslijediplomski (MDDP)",
    search_placeholder: "Pretraži po naslovu, autoru ili temi...",
    card_view_btn: "Pogledaj projekt →",
    tag_ldi: "LDI · Industrijski",
    tag_ldgm: "LDGM · Moda",
    tag_mddp: "MDDP · Poslijediplomski",
    no_projects_title: "Nisu pronađeni projekti",
    no_projects_desc: "Pokušajte s drugim pojmovima za pretraživanje ili filterima.",
    modal_fullscreen: "Prikaz preko cijelog ekrana",
    modal_label_program: "Studijski program",
    modal_label_authors: "Autor(i)",
    modal_label_curatorship: "Kustosko vodstvo",
    modal_label_exhibition: "Izložba",
    modal_exhibition_val: "ÁRIDO · Zagreb Design Week 2026",
    modal_section_concept: "Koncept i opis",
    modal_section_specs: "Tehničke specifikacije",
    modal_img_fullscreen_hint: "Kliknite za prikaz preko cijelog ekrana",
    badge_photos: "fotografija",
    footer_desc: "Institut za arhitekturu, dizajn i umjetnost (IADA) · Universidad Autónoma de Ciudad Juárez. Poticanje kreativnog talenta i tehnološkog razvoja s međunarodnim dosegom.",
    footer_col_programs: "OBRAZOVNI PROGRAMI",
    footer_col_event: "DOGAĐANJE",
    footer_link_ldi: "Preddiplomski studij industrijskog dizajna (LDI)",
    footer_link_ldgm: "Preddiplomski studij dizajna i modnog menadžmenta (LDGM)",
    footer_link_mddp: "Poslijediplomski studij dizajna i razvoja proizvoda (MDDP)",
    footer_link_dept: "Odjel za dizajn UACJ",
    footer_link_zdw: "Službene stranice Zagreb Design Week"
  }
};

function getHtml(isEmbed) {
  const projectsData = JSON.stringify(isEmbed ? embeddedProjects : localProjects);
  const i18nData = JSON.stringify(I18N_UI);

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ÁRIDO | Zagreb Design Week X UACJ</title>
  <meta name="description" content="Exposición oficial ÁRIDO de la UACJ (LDI, LDGM y MDDP) para Zagreb Design Week 2026.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');

    :root {
      /* Paleta Curatorial ÁRIDO x Zagreb Design Week - Modo Arena Desierto */
      --bg-main: #EFEAE1;             /* Color Arena del Desierto (Lienzo global de galería) */
      --bg-surface: #FAF7F2;          /* Arena Marfil Suave (Encabezado, filtros, modales, footer) */
      --bg-card: #FFFFFF;             /* Blanco Puro de contraste para tarjetas de exhibición */
      --bg-card-hover: #FFFFFF;
      --bg-sand-subtle: #EAE4D9;      /* Arena intermedia (carruseles y contenedores secundarios) */
      --text-primary: #1C1917;        /* Carbón cálido obsidiana de alto contraste */
      --text-secondary: #57534E;      /* Pizarra cálido / tierra */
      --text-muted: #78716C;          /* Arena oscura tenue */

      /* Identidad Gráfica ÁRIDO */
      --accent-arido: #C24A14;        /* Terracota Óxido Árido / Color Primario Insignia */
      --accent-arido-hover: #A83C0C;  /* Acento activo / hover */
      --accent-arido-glow: rgba(194, 74, 20, 0.25);
      --accent-arido-light: #C24A14;  /* Terracota de alto contraste para textos y autores */

      /* Identidad Curatorial Posgrado */
      --accent-cobalt: #0B3799;       /* Azul Cobalto Profundo Editorial */
      --accent-cobalt-light: #0B3799;

      /* Compatibilidad */
      --accent-neon: var(--accent-arido);
      --uacj-blue: #0B3799;
      --uacj-gold: #C24A14;
      --zagreb-red: #C24A14;

      --border-color: rgba(140, 110, 80, 0.14);
      --border-hover: rgba(194, 74, 20, 0.45);

      /* Etiquetas por Programa */
      --tag-ldi-bg: rgba(250, 247, 242, 0.96);
      --tag-ldi-text: #C24A14;
      --tag-ldi-border: rgba(194, 74, 20, 0.4);

      --tag-mddp-bg: rgba(250, 247, 242, 0.96);
      --tag-mddp-text: #0B3799;
      --tag-mddp-border: rgba(11, 55, 153, 0.45);

      --tag-ldgm-bg: rgba(250, 247, 242, 0.96);
      --tag-ldgm-text: #996008;
      --tag-ldgm-border: rgba(180, 120, 20, 0.4);

      --font-heading: 'Montserrat', sans-serif;
      --font-body: 'Montserrat', sans-serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background-color: var(--bg-main);
      color: var(--text-primary);
      font-family: var(--font-body);
      line-height: 1.6;
      padding: 16px;
      -webkit-font-smoothing: antialiased;
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(250, 247, 242, 0.94);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--border-color);
      box-shadow: 0 4px 20px rgba(120, 90, 60, 0.06);
      padding: 0.85rem 1.4rem;
      border-radius: 14px;
      margin-bottom: 2rem;
    }
    .header-container {
      max-width: 1300px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
    .brand-badge {
      display: flex;
      align-items: center;
      gap: 14px;
      text-decoration: none;
    }
    .brand-logo-tag {
      background: linear-gradient(135deg, #C24A14 0%, #762A4E 50%, #0B3799 100%);
      color: #fff;
      font-weight: 800;
      font-family: var(--font-heading);
      padding: 7px 20px;
      border-radius: 50px;
      font-size: 0.92rem;
      letter-spacing: 0.08em;
      box-shadow: 0 4px 16px rgba(194, 74, 20, 0.35);
      white-space: nowrap;
    }
    .brand-title {
      font-size: 1.12rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    .brand-subtitle {
      font-size: 0.8rem;
      color: var(--text-secondary);
    }

    .header-actions {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    /* Selector de Idioma Trilingüe */
    .lang-selector {
      display: inline-flex;
      align-items: center;
      background: rgba(140, 110, 80, 0.08);
      border: 1px solid rgba(140, 110, 80, 0.14);
      border-radius: 9999px;
      padding: 3px 4px;
      gap: 3px;
      box-shadow: none;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }
    .lang-btn {
      position: relative;
      background: transparent;
      border: 1px solid transparent;
      color: var(--text-secondary);
      padding: 0.38rem 0.72rem;
      border-radius: 9999px;
      font-family: var(--font-heading);
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      line-height: 1;
      user-select: none;
    }
    .lang-btn:hover {
      color: var(--text-primary);
      background: rgba(140, 110, 80, 0.08);
    }
    .lang-btn.active {
      background: #FFFFFF;
      color: var(--accent-arido);
      border-color: rgba(194, 74, 20, 0.3);
      box-shadow: 0 2px 8px rgba(120, 90, 60, 0.1);
      font-weight: 700;
    }

    /* Mini Banderas */
    .lang-flag-box {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 14px;
      border-radius: 2px;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);
      flex-shrink: 0;
      line-height: 0;
    }
    .lang-flag-box svg {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    /* Tooltip Elegante al pasar el cursor */
    .lang-tooltip {
      position: absolute;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%) translateY(4px);
      background: rgba(14, 18, 28, 0.96);
      color: #FFFFFF;
      padding: 5px 9px;
      border-radius: 6px;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
      z-index: 1000;
    }
    .lang-tooltip::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent rgba(14, 18, 28, 0.96) transparent;
    }
    .lang-btn:hover .lang-tooltip,
    .lang-btn:focus-visible .lang-tooltip {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    @media (max-width: 680px) {
      .header-container {
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.75rem;
      }
      .brand-badge {
        justify-content: center;
        text-align: left;
      }
      .brand-title {
        font-size: 0.95rem;
      }
      .brand-subtitle {
        font-size: 0.72rem;
      }
      .lang-btn {
        padding: 0.32rem 0.58rem;
        font-size: 0.72rem;
        gap: 4px;
      }
      .lang-flag-box {
        width: 17px;
        height: 12px;
      }
    }

    .btn-primary {
      background: linear-gradient(135deg, #C24A14, #E25B1E);
      color: #fff;
      border: none;
      padding: 0.65rem 1.25rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.88rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: opacity 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 14px rgba(194, 74, 20, 0.3);
    }
    .btn-primary:hover {
      opacity: 0.95;
      box-shadow: 0 6px 18px rgba(194, 74, 20, 0.45);
    }
    .btn-secondary {
      background: var(--bg-surface);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      padding: 0.65rem 1.1rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.88rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-secondary:hover { background: #EAE4D9; }

    .hero-section {
      padding: 2.5rem 1rem 2rem;
      max-width: 1300px;
      margin: 0 auto;
    }
    .hero-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(194, 74, 20, 0.08);
      border: 1px solid rgba(194, 74, 20, 0.3);
      color: var(--accent-arido);
      padding: 6px 16px;
      border-radius: 50px;
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 1.2rem;
    }
    .hero-title {
      font-family: var(--font-heading);
      font-size: clamp(2.2rem, 4.5vw, 3.6rem);
      font-weight: 800;
      line-height: 1.12;
      margin-bottom: 1.1rem;
      background: linear-gradient(180deg, #1C1917 0%, #44403C 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.01em;
    }
    .hero-description {
      font-size: 1.08rem;
      color: var(--text-secondary);
      max-width: 840px;
      margin-bottom: 1.8rem;
    }

    .filter-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: space-between;
      align-items: center;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      box-shadow: 0 2px 14px rgba(120, 90, 60, 0.05);
      padding: 0.85rem 1.2rem;
      border-radius: 12px;
      margin-top: 1.5rem;
    }
    .filter-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .filter-btn {
      background: transparent;
      border: 1px solid transparent;
      color: var(--text-secondary);
      padding: 0.55rem 1.1rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.88rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .filter-btn:hover {
      color: var(--text-primary);
      background: rgba(140, 110, 80, 0.08);
    }
    .filter-btn.active {
      background: var(--accent-arido);
      color: #FFFFFF;
      border-color: var(--accent-arido);
      box-shadow: 0 4px 14px var(--accent-arido-glow);
      font-weight: 700;
    }

    .search-box {
      position: relative;
      min-width: 280px;
      flex: 1;
      max-width: 380px;
    }
    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      opacity: 0.5;
      color: var(--text-muted);
    }
    .search-input {
      width: 100%;
      background: #F7F4EE;
      border: 1px solid #DCD5C9;
      border-radius: 8px;
      padding: 0.6rem 1rem 0.6rem 2.4rem;
      color: var(--text-primary);
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;
    }
    .search-input:focus {
      background: #FFFFFF;
      border-color: var(--accent-arido);
      box-shadow: 0 0 0 3px rgba(194, 74, 20, 0.15);
    }

    .gallery-section {
      max-width: 1300px;
      margin: 0 auto;
      padding: 1rem 0 3rem;
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 1.8rem;
    }
    .project-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 14px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s, box-shadow 0.25s;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 20px rgba(120, 90, 60, 0.06);
    }
    .project-card:hover {
      transform: translateY(-5px);
      border-color: var(--border-hover);
      box-shadow: 0 16px 36px rgba(194, 74, 20, 0.14), 0 4px 16px rgba(120, 90, 60, 0.06);
      background: var(--bg-card-hover);
    }

    .card-media {
      position: relative;
      width: 100%;
      height: 240px;
      background: #EAE4D9;
      overflow: hidden;
    }
    .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .project-card:hover .card-image {
      transform: scale(1.04);
    }
    .card-tag {
      position: absolute;
      top: 14px;
      left: 14px;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      z-index: 2;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
    }
    .tag-ldi {
      background: var(--tag-ldi-bg);
      color: var(--tag-ldi-text);
      border: 1px solid var(--tag-ldi-border);
    }
    .tag-ldgm {
      background: var(--tag-ldgm-bg);
      color: var(--tag-ldgm-text);
      border: 1px solid var(--tag-ldgm-border);
    }
    .tag-mddp {
      background: var(--tag-mddp-bg);
      color: var(--tag-mddp-text);
      border: 1px solid var(--tag-mddp-border);
    }
    .card-photo-count {
      position: absolute;
      top: 14px;
      right: 14px;
      padding: 4px 9px;
      border-radius: 6px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.3px;
      z-index: 2;
      background: rgba(250, 247, 242, 0.94);
      color: var(--text-primary);
      border: 1px solid rgba(140, 110, 80, 0.18);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      display: inline-flex;
      align-items: center;
      gap: 5px;
      box-shadow: 0 2px 8px rgba(120, 90, 60, 0.08);
    }

    .card-body {
      padding: 1.4rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .card-title {
      font-family: var(--font-heading);
      font-size: 1.28rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      color: var(--text-primary);
    }
    .card-authors {
      font-size: 0.85rem;
      color: var(--accent-arido);
      margin-bottom: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.02em;
    }
    .card-summary {
      font-size: 0.92rem;
      color: var(--text-secondary);
      line-height: 1.5;
      margin-bottom: 1.2rem;
      flex: 1;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0.9rem;
      border-top: 1px solid rgba(140, 110, 80, 0.12);
      font-size: 0.82rem;
      color: var(--text-muted);
    }
    .card-link-btn {
      color: var(--text-primary);
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: color 0.2s, transform 0.2s;
    }
    .project-card:hover .card-link-btn {
      color: var(--accent-arido);
      transform: translateX(3px);
    }

    /* Modales */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
    .modal-overlay.active {
      display: flex;
    }
    .modal-container {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 18px;
      max-width: 900px;
      width: 100%;
      max-height: 92vh;
      overflow-y: auto;
      position: relative;
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
      animation: modalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes modalFadeIn {
      from { opacity: 0; transform: scale(0.96) translateY(10px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .modal-close-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      background: rgba(250, 247, 242, 0.94);
      border: 1px solid rgba(140, 110, 80, 0.18);
      color: var(--text-primary);
      font-size: 1.2rem;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 20;
      transition: all 0.2s;
      box-shadow: 0 2px 8px rgba(120, 90, 60, 0.08);
    }
    .modal-close-btn:hover {
      background: var(--accent-arido);
      color: #fff;
      transform: rotate(90deg);
    }

    .modal-header-hero {
      position: relative;
      width: 100%;
      height: 420px;
      background: #EAE4D9;
      cursor: zoom-in;
    }
    .modal-hero-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    /* Carrusel */
    .modal-carousel-container {
      position: relative;
      width: 100%;
      height: 420px;
      background: #EAE4D9;
      overflow: hidden;
      cursor: zoom-in;
    }
    .modal-carousel-slide {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .modal-carousel-slide.active {
      opacity: 1;
      z-index: 2;
    }
    .modal-carousel-slide img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    .carousel-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(250, 247, 242, 0.94);
      border: 1px solid rgba(140, 110, 80, 0.18);
      color: var(--text-primary);
      font-size: 1.6rem;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      transition: background 0.2s, transform 0.2s, color 0.2s;
      box-shadow: 0 4px 12px rgba(120, 90, 60, 0.1);
      user-select: none;
    }
    .carousel-btn:hover {
      background: var(--accent-arido);
      color: #FFFFFF;
      border-color: var(--accent-arido);
      transform: translateY(-50%) scale(1.08);
    }
    .carousel-prev { left: 14px; }
    .carousel-next { right: 14px; }

    .carousel-counter {
      position: absolute;
      bottom: 14px;
      left: 14px;
      background: rgba(250, 247, 242, 0.94);
      border: 1px solid rgba(140, 110, 80, 0.18);
      color: var(--text-primary);
      font-size: 0.78rem;
      padding: 4px 10px;
      border-radius: 20px;
      z-index: 10;
      backdrop-filter: blur(6px);
      box-shadow: 0 2px 8px rgba(120, 90, 60, 0.06);
      font-weight: 600;
    }
    .carousel-fullscreen-btn {
      position: absolute;
      bottom: 14px;
      right: 14px;
      background: rgba(250, 247, 242, 0.94);
      border: 1px solid rgba(140, 110, 80, 0.18);
      color: var(--text-primary);
      font-size: 0.8rem;
      padding: 6px 12px;
      border-radius: 20px;
      z-index: 10;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      backdrop-filter: blur(6px);
      transition: all 0.2s;
      font-family: var(--font-heading);
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(120, 90, 60, 0.06);
    }
    .carousel-fullscreen-btn:hover {
      background: var(--accent-arido);
      border-color: var(--accent-arido);
      color: #FFFFFF;
    }

    .carousel-thumbs {
      display: flex;
      gap: 8px;
      padding: 10px 1.8rem;
      background: #F4EFEA;
      border-bottom: 1px solid var(--border-color);
      overflow-x: auto;
    }
    .carousel-thumb {
      width: 70px;
      height: 48px;
      object-fit: cover;
      border-radius: 6px;
      opacity: 0.55;
      cursor: pointer;
      border: 2px solid transparent;
      background: #DDD6CA;
      transition: opacity 0.2s, border-color 0.2s;
      flex-shrink: 0;
    }
    .carousel-thumb:hover { opacity: 0.9; }
    .carousel-thumb.active {
      opacity: 1;
      border-color: var(--accent-arido);
      box-shadow: 0 0 10px var(--accent-arido-glow);
    }

    /* Lightbox Modal */
    .lightbox-modal {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.96);
      backdrop-filter: blur(16px);
      z-index: 2000;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
    }
    .lightbox-modal.active { display: flex; }
    .lightbox-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      padding: 0.5rem 1rem;
      z-index: 2010;
    }
    .lightbox-title {
      font-family: var(--font-heading);
      font-size: 1.1rem;
      font-weight: 700;
      color: #fff;
    }
    .lightbox-controls {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .lightbox-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #fff;
      padding: 6px 12px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.2s;
      font-weight: 600;
    }
    .lightbox-btn:hover { background: rgba(255, 255, 255, 0.25); }

    .lightbox-body {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 0.5rem;
    }
    .lightbox-slide {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.25s ease;
      pointer-events: none;
    }
    .lightbox-slide.active {
      opacity: 1;
      pointer-events: auto;
    }
    .lightbox-img {
      max-width: 96vw;
      max-height: 84vh;
      object-fit: contain;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
      border-radius: 4px;
    }

    .lightbox-nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(20, 24, 34, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #fff;
      width: 54px;
      height: 54px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      cursor: pointer;
      z-index: 2020;
      transition: background 0.2s, transform 0.2s;
      user-select: none;
    }
    .lightbox-nav-btn:hover {
      background: rgba(194, 74, 20, 0.35);
      border-color: var(--accent-arido);
      transform: translateY(-50%) scale(1.1);
    }
    .lightbox-prev { left: 24px; }
    .lightbox-next { right: 24px; }

    .lightbox-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      padding: 0.5rem 1rem;
      color: var(--text-secondary);
      font-size: 0.85rem;
      z-index: 2010;
    }
    .lightbox-counter {
      background: rgba(255, 255, 255, 0.08);
      padding: 4px 12px;
      border-radius: 20px;
      color: #fff;
    }

    .modal-content-body {
      padding: 2.2rem;
    }
    .modal-title {
      font-family: var(--font-heading);
      font-size: 2rem;
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 0.4rem;
      color: var(--text-primary);
    }
    .modal-subtitle {
      font-size: 1.1rem;
      color: var(--accent-arido);
      font-weight: 600;
    }
    .modal-meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.2rem;
      background: #F4EFEA;
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.2rem;
      margin: 1.6rem 0;
    }
    .meta-item-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--text-muted);
      margin-bottom: 3px;
      font-weight: 700;
    }
    .meta-item-value {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-primary);
    }
    .modal-section-title {
      font-family: var(--font-heading);
      font-size: 1.15rem;
      font-weight: 700;
      margin: 1.8rem 0 0.8rem;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .modal-section-title::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 16px;
      background: var(--accent-arido);
      border-radius: 2px;
    }
    .modal-description {
      font-size: 0.98rem;
      line-height: 1.7;
      color: var(--text-secondary);
      white-space: pre-line;
    }

    /* Footer */
    .site-footer {
      border-top: 1px solid var(--border-color);
      padding: 3.5rem 1rem 2.5rem;
      margin-top: 4rem;
      background: var(--bg-surface);
      border-radius: 16px;
      box-shadow: 0 -2px 16px rgba(120, 90, 60, 0.03);
    }
    .footer-container {
      max-width: 1300px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 3rem;
    }
    .footer-brand-title {
      font-family: var(--font-heading);
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
      color: var(--text-primary);
    }
    .footer-brand-desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.6;
      max-width: 440px;
    }
    .footer-col-title {
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--text-muted);
      margin-bottom: 1.1rem;
      font-weight: 700;
    }
    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }
    .footer-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.92rem;
      transition: color 0.2s, transform 0.2s;
      display: inline-block;
    }
    .footer-links a:hover {
      color: var(--accent-arido);
      transform: translateX(4px);
    }
    .footer-bottom {
      max-width: 1300px;
      margin: 2.5rem auto 0;
      padding-top: 1.8rem;
      border-top: 1px solid rgba(140, 110, 80, 0.14);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      color: var(--text-muted);
      font-size: 0.84rem;
    }
    .footer-vibecoding {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 500;
    }
    .footer-vibecoding a {
      color: var(--accent-arido);
      text-decoration: none;
      font-weight: 700;
      transition: opacity 0.2s;
    }
    .footer-vibecoding a:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
    @media (max-width: 900px) {
      .footer-container {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
      .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: 0.6rem;
      }
    }
  </style>
</head>
<body>

  <!-- Encabezado Institucional -->
  <header class="site-header">
    <div class="header-container">
      <div class="brand-badge">
        <span class="brand-logo-tag">UACJ × ZAGREB</span>
        <div>
          <div class="brand-title" data-i18n="brand_title">Exposición de Diseño UACJ</div>
          <div class="brand-subtitle" data-i18n="brand_subtitle">LDI · LDGM · Maestría (MDDP)</div>
        </div>
      </div>
      <div class="header-actions">
        <div class="lang-selector" role="group" aria-label="Selector de idioma / Language selector">
          <button type="button" class="lang-btn active" data-lang="es" onclick="setLanguage('es')" title="Español (México)" aria-label="Español (México)">
            <span class="lang-flag-box"><svg viewBox="0 0 640 480" width="20" height="14" xmlns="http://www.w3.org/2000/svg"><rect width="213.3" height="480" fill="#006847"/><rect x="213.3" width="213.4" height="480" fill="#FFFFFF"/><rect x="426.7" width="213.3" height="480" fill="#CE1126"/><g transform="translate(320, 240) scale(1.15)"><path d="M-22,12 Q0,32 22,12 Q14,24 0,26 Q-14,24 -22,12" fill="#006847"/><ellipse cx="0" cy="8" rx="14" ry="9" fill="#9c6d38"/><path d="M-8,-6 Q0,-18 8,-6 Q12,6 0,10 Q-12,6 -8,-6" fill="#7a5223"/><path d="M4,-12 Q12,-10 6,-3 Q0,-6 4,-12" fill="#9c6d38"/><circle cx="2" cy="-10" r="1.5" fill="#000000"/><path d="M-10,0 Q-4,-14 6,-8 Q14,-4 10,6" fill="none" stroke="#2e7d32" stroke-width="2.8"/></g></svg></span>
            <span>ES</span>
            <span class="lang-tooltip">Español (México)</span>
          </button>
          <button type="button" class="lang-btn" data-lang="en" onclick="setLanguage('en')" title="English (USA)" aria-label="English (USA)">
            <span class="lang-flag-box"><svg viewBox="0 0 640 480" width="20" height="14" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="480" fill="#B22234"/><path stroke="#FFFFFF" stroke-width="36.92" d="M0,55.38h640M0,129.23h640M0,203.08h640M0,276.92h640M0,350.77h640M0,424.62h640"/><rect width="260" height="258.46" fill="#3C3B6E"/><g fill="#FFFFFF" transform="scale(0.86) translate(14, 14)"><circle cx="24" cy="22" r="6"/><circle cx="72" cy="22" r="6"/><circle cx="120" cy="22" r="6"/><circle cx="168" cy="22" r="6"/><circle cx="216" cy="22" r="6"/><circle cx="264" cy="22" r="6"/><circle cx="48" cy="50" r="6"/><circle cx="96" cy="50" r="6"/><circle cx="144" cy="50" r="6"/><circle cx="192" cy="50" r="6"/><circle cx="240" cy="50" r="6"/><circle cx="24" cy="78" r="6"/><circle cx="72" cy="78" r="6"/><circle cx="120" cy="78" r="6"/><circle cx="168" cy="78" r="6"/><circle cx="216" cy="78" r="6"/><circle cx="264" cy="78" r="6"/><circle cx="48" cy="106" r="6"/><circle cx="96" cy="106" r="6"/><circle cx="144" cy="106" r="6"/><circle cx="192" cy="106" r="6"/><circle cx="240" cy="106" r="6"/><circle cx="24" cy="134" r="6"/><circle cx="72" cy="134" r="6"/><circle cx="120" cy="134" r="6"/><circle cx="168" cy="134" r="6"/><circle cx="216" cy="134" r="6"/><circle cx="264" cy="134" r="6"/><circle cx="48" cy="162" r="6"/><circle cx="96" cy="162" r="6"/><circle cx="144" cy="162" r="6"/><circle cx="192" cy="162" r="6"/><circle cx="240" cy="162" r="6"/><circle cx="24" cy="190" r="6"/><circle cx="72" cy="190" r="6"/><circle cx="120" cy="190" r="6"/><circle cx="168" cy="190" r="6"/><circle cx="216" cy="190" r="6"/><circle cx="264" cy="190" r="6"/><circle cx="48" cy="218" r="6"/><circle cx="96" cy="218" r="6"/><circle cx="144" cy="218" r="6"/><circle cx="192" cy="218" r="6"/><circle cx="240" cy="218" r="6"/><circle cx="24" cy="246" r="6"/><circle cx="72" cy="246" r="6"/><circle cx="120" cy="246" r="6"/><circle cx="168" cy="246" r="6"/><circle cx="216" cy="246" r="6"/><circle cx="264" cy="246" r="6"/></g></svg></span>
            <span>EN</span>
            <span class="lang-tooltip">English (USA)</span>
          </button>
          <button type="button" class="lang-btn" data-lang="hr" onclick="setLanguage('hr')" title="Hrvatski (Croata)" aria-label="Hrvatski (Croata)">
            <span class="lang-flag-box"><svg viewBox="0 0 640 480" width="20" height="14" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="160" fill="#FF0000"/><rect y="160" width="640" height="160" fill="#FFFFFF"/><rect y="320" width="640" height="160" fill="#171796"/><g transform="translate(320, 240) scale(1.15)"><path d="M-48,-46 L-28,-60 L-8,-46 L12,-60 L32,-46 L48,-60 L48,-40 L-48,-40 Z" fill="#0055a5"/><path d="M-42,-36 L42,-36 L42,15 C42,48 0,65 0,65 C0,65 -42,48 -42,15 Z" fill="#FFFFFF" stroke="#FF0000" stroke-width="3"/><rect x="-40" y="-34" width="16" height="16" fill="#FF0000"/><rect x="-8" y="-34" width="16" height="16" fill="#FF0000"/><rect x="24" y="-34" width="16" height="16" fill="#FF0000"/><rect x="-24" y="-18" width="16" height="16" fill="#FF0000"/><rect x="8" y="-18" width="16" height="16" fill="#FF0000"/><rect x="-40" y="-2" width="16" height="16" fill="#FF0000"/><rect x="-8" y="-2" width="16" height="16" fill="#FF0000"/><rect x="24" y="-2" width="16" height="16" fill="#FF0000"/><rect x="-24" y="14" width="16" height="16" fill="#FF0000"/><rect x="8" y="14" width="16" height="16" fill="#FF0000"/><rect x="-8" y="30" width="16" height="16" fill="#FF0000"/></g></svg></span>
            <span>HR</span>
            <span class="lang-tooltip">Hrvatski (Croata)</span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-pill" data-i18n="hero_pill">
      🏛️ Universidad Autónoma de Ciudad Juárez × Zagreb Design Week 2026
    </div>
    <h1 class="hero-title" data-i18n="hero_title">
      Innovación, Diseño & Impacto desde la Frontera Norte
    </h1>
    <p class="hero-description" data-i18n="hero_desc">
      Explora la colección de proyectos seleccionados de la <strong>Licenciatura en Diseño Industrial (LDI)</strong>, la <strong>Licenciatura en Diseño y Gestión de la Moda (LDGM)</strong> y la <strong>Maestría en Diseño y Desarrollo de Producto (MDDP)</strong> presentados en la exposición internacional de Zagreb Design Week.
    </p>

    <!-- Barra de Filtros y Búsqueda -->
    <div class="filter-bar">
      <div class="filter-tabs">
        <button class="filter-btn active" data-filter="ALL"><span data-i18n="filter_all">Todos los Proyectos</span></button>
        <button class="filter-btn" data-filter="LDI"><span data-i18n="filter_ldi">Diseño Industrial (LDI)</span></button>
        <button class="filter-btn" data-filter="LDGM"><span data-i18n="filter_ldgm">Diseño y Moda (LDGM)</span></button>
        <button class="filter-btn" data-filter="MDDP"><span data-i18n="filter_mddp">Maestría (MDDP)</span></button>
      </div>

      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" id="searchInput" class="search-input" data-i18n="search_placeholder" placeholder="Buscar por título, autor o tema...">
      </div>
    </div>
  </section>

  <!-- Sección Galería Continua de Proyectos -->
  <main class="gallery-section">
    <div class="projects-grid" id="projectsGrid">
      <!-- Renderizado dinámico -->
    </div>
  </main>

  <!-- Pie de Página Institucional (Footer) -->
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-col footer-col-main">
        <h3 class="footer-brand-title">UACJ x Zagreb Design Week</h3>
        <p class="footer-brand-desc" data-i18n="footer_desc">
          Instituto de Arquitectura, Diseño y Arte (IADA) · Universidad Autónoma de Ciudad Juárez. Fomentando el talento creativo y el desarrollo tecnológico con proyección internacional.
        </p>
      </div>

      <div class="footer-col">
        <h4 class="footer-col-title" data-i18n="footer_col_programs">PROGRAMAS EDUCATIVOS</h4>
        <ul class="footer-links">
          <li><a href="#" onclick="selectProgramFilter('LDI'); return false;" data-i18n="footer_link_ldi">Licenciatura en Diseño Industrial (LDI)</a></li>
          <li><a href="#" onclick="selectProgramFilter('LDGM'); return false;" data-i18n="footer_link_ldgm">Licenciatura en Diseño y Gestión de la Moda (LDGM)</a></li>
          <li><a href="#" onclick="selectProgramFilter('MDDP'); return false;" data-i18n="footer_link_mddp">Maestría en Diseño y Desarrollo de Producto (MDDP)</a></li>
          <li><a href="https://www.uacj.mx" target="_blank" rel="noopener" data-i18n="footer_link_dept">Departamento de Diseño UACJ</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-col-title" data-i18n="footer_col_event">EVENTO</h4>
        <ul class="footer-links">
          <li><a href="https://zagrebdesignweek.com" target="_blank" rel="noopener" data-i18n="footer_link_zdw">Zagreb Design Week Oficial</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-vibecoding">
        <span>VibeCoding By</span> <a href="https://www.wekanastudio.com" target="_blank" rel="noopener">Wekana Studio</a> <span>· 2026</span>
      </div>
      <div>
        <span>UACJ × Zagreb Design Week 2026</span>
      </div>
    </div>
  </footer>

  <!-- Modal 1: Ficha Técnica Completa del Proyecto -->
  <div class="modal-overlay" id="detailModal">
    <div class="modal-container">
      <button class="modal-close-btn" onclick="closeDetailModal()" title="Cerrar modal">&times;</button>
      <div id="detailModalContent"></div>
    </div>
  </div>

  <!-- Modal Lightbox (Pantalla Completa HD) -->
  <div class="lightbox-modal" id="lightboxModal">
    <div class="lightbox-header">
      <div class="lightbox-title" id="lightboxProjectTitle">Proyecto</div>
      <div class="lightbox-controls">
        <div class="lightbox-counter" id="lightboxCounter">1 / 1</div>
        <button type="button" class="lightbox-btn" onclick="toggleLightboxFullscreen()" id="lightboxFullscreenBtn">⛶ Pantalla Completa</button>
        <button type="button" class="lightbox-btn" onclick="closeLightbox()">✕ Cerrar (Esc)</button>
      </div>
    </div>

    <div class="lightbox-body" id="lightboxBody">
      <button type="button" class="lightbox-nav-btn lightbox-prev" onclick="moveLightbox(-1, event)" aria-label="Imagen anterior">‹</button>
      <button type="button" class="lightbox-nav-btn lightbox-next" onclick="moveLightbox(1, event)" aria-label="Imagen siguiente">›</button>
      <div id="lightboxSlidesContainer" style="width: 100%; height: 100%; position: relative;"></div>
    </div>

    <div class="lightbox-footer">
      <span id="lightboxSlideCounter">Usa las flechas del teclado o los botones para navegar</span>
    </div>
  </div>

  <!-- Script del Sistema -->
  <script>
    var INITIAL_PROJECTS = ${projectsData};
    var I18N_UI = ${i18nData};

    var currentLang = 'es';
    try {
      var savedLang = localStorage.getItem('uacj_zagreb_lang');
      if (savedLang && (savedLang === 'es' || savedLang === 'en' || savedLang === 'hr')) {
        currentLang = savedLang;
      }
    } catch (e) {}

    var projectsState = [];
    var currentFilter = 'ALL';
    var currentSearch = '';
    var currentCarouselIndex = 0;
    var currentActiveGallery = [];
    var currentActiveTitle = '';
    var currentLightboxIndex = 0;
    window.__currentModalProjectId = null;

    function getI18n(val, lang) {
      if (!val) return '';
      if (typeof val === 'string') return val;
      return val[lang] || val['es'] || Object.values(val)[0] || '';
    }

    function setLanguage(lang) {
      if (!lang || (lang !== 'es' && lang !== 'en' && lang !== 'hr')) return;
      currentLang = lang;
      try {
        localStorage.setItem('uacj_zagreb_lang', lang);
      } catch (e) {}

      var buttons = document.querySelectorAll('.lang-btn');
      for (var b = 0; b < buttons.length; b++) {
        if (buttons[b].getAttribute('data-lang') === lang) {
          buttons[b].classList.add('active');
        } else {
          buttons[b].classList.remove('active');
        }
      }

      var dict = I18N_UI[lang] || I18N_UI['es'];

      var i18nElements = document.querySelectorAll('[data-i18n]');
      for (var i = 0; i < i18nElements.length; i++) {
        var el = i18nElements[i];
        var key = el.getAttribute('data-i18n');
        if (dict[key]) {
          if (el.tagName === 'INPUT' && el.getAttribute('type') === 'text') {
            el.setAttribute('placeholder', dict[key]);
          } else {
            el.innerHTML = dict[key];
          }
        }
      }

      document.documentElement.setAttribute('lang', lang);

      renderProjects();

      var detailModal = document.getElementById('detailModal');
      if (detailModal && detailModal.classList && detailModal.classList.contains('active') && window.__currentModalProjectId) {
        openDetailModal(window.__currentModalProjectId);
      }
    }

    function initGallery() {
      if (window.__uacj_gallery_ready) return;
      window.__uacj_gallery_ready = true;

      try {
        localStorage.removeItem('uacj_zagreb_projects');
        localStorage.removeItem('uacj_zagreb_projects_v12');
        localStorage.removeItem('uacj_zagreb_projects_v2026_galleries_v2');
        localStorage.removeItem('uacj_zagreb_projects_v2026_galleries_v3');
        localStorage.removeItem('uacj_zagreb_projects_v2026_galleries_v4');
      } catch (e) {}

      var STORAGE_KEY = 'uacj_zagreb_projects_v2026_galleries_v5';
      try {
        var saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          var parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length >= INITIAL_PROJECTS.length) {
            projectsState = parsed;
          } else {
            projectsState = INITIAL_PROJECTS.slice();
            saveProjects();
          }
        } else {
          projectsState = INITIAL_PROJECTS.slice();
          saveProjects();
        }
      } catch (err) {
        projectsState = INITIAL_PROJECTS.slice();
      }

      // Always merge latest INITIAL_PROJECTS media (gallery and heroImage) and texts
      // into projectsState so updates are immediately reflected without requiring manual cache clearing.
      var initMap = {};
      for (var k = 0; k < INITIAL_PROJECTS.length; k++) {
        initMap[INITIAL_PROJECTS[k].id] = INITIAL_PROJECTS[k];
      }
      for (var m = 0; m < projectsState.length; m++) {
        var orig = initMap[projectsState[m].id];
        if (orig) {
          projectsState[m].gallery = orig.gallery;
          projectsState[m].heroImage = orig.heroImage;
          projectsState[m].title = orig.title;
          projectsState[m].subtitle = orig.subtitle;
          projectsState[m].authors = orig.authors;
          projectsState[m].advisors = orig.advisors;
          projectsState[m].summary = orig.summary;
          projectsState[m].description = orig.description;
          projectsState[m].specs = orig.specs;
        }
      }
      saveProjects();

      setupFilterTabs();
      setupSearch();
      setupGridClick();
      setLanguage(currentLang);
    }

    function setupFilterTabs() {
      var filterBtns = document.querySelectorAll('.filter-btn');
      for (var i = 0; i < filterBtns.length; i++) {
        filterBtns[i].addEventListener('click', function(e) {
          for (var j = 0; j < filterBtns.length; j++) {
            filterBtns[j].classList.remove('active');
          }
          e.currentTarget.classList.add('active');
          currentFilter = e.currentTarget.getAttribute('data-filter');
          renderProjects();
        });
      }
    }

    function setupSearch() {
      var searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.addEventListener('input', function(e) {
          currentSearch = e.target.value.toLowerCase().trim();
          renderProjects();
        });
      }
    }

    function setupGridClick() {
      var grid = document.getElementById('projectsGrid');
      if (grid) {
        grid.addEventListener('click', function(e) {
          var card = e.target.closest('.project-card');
          if (card) {
            var id = card.getAttribute('data-project-id');
            if (id) {
              openDetailModal(id);
            }
          }
        });
      }
    }

    function saveProjects() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projectsState));
      } catch (e) {}
    }

    function renderProjects() {
      var grid = document.getElementById('projectsGrid');
      if (!grid) return;
      var dict = I18N_UI[currentLang] || I18N_UI['es'];

      var html = '';
      for (var i = 0; i < projectsState.length; i++) {
        var p = projectsState[i];
        var matchesFilter = (currentFilter === 'ALL' || p.program === currentFilter);

        var title = getI18n(p.title, currentLang);
        var authors = p.authors || '';
        var summary = getI18n(p.summary, currentLang);
        var specs = getI18n(p.specs, currentLang);

        var matchesSearch = true;
        if (currentSearch) {
          var searchCorpus = (title + ' ' + authors + ' ' + summary + ' ' + specs).toLowerCase();
          matchesSearch = searchCorpus.indexOf(currentSearch) !== -1;
        }

        if (matchesFilter && matchesSearch) {
          var tagClass = 'tag-ldi';
          var tagText = dict.tag_ldi;
          if (p.program === 'MDDP') {
            tagClass = 'tag-mddp';
            tagText = dict.tag_mddp;
          } else if (p.program === 'LDGM') {
            tagClass = 'tag-ldgm';
            tagText = dict.tag_ldgm;
          }

          var galleryCount = (p.gallery && Array.isArray(p.gallery)) ? p.gallery.length : 1;
          var countBadge = '';
          if (galleryCount > 1) {
            var photosWord = dict.badge_photos || 'fotos';
            countBadge = '<span class="card-photo-count"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg> ' + galleryCount + ' ' + photosWord + '</span>';
          }

          html += '<article class="project-card" data-project-id="' + p.id + '">';
          html += '  <div class="card-media">';
          html += '    <span class="card-tag ' + tagClass + '">' + tagText + '</span>';
          html += '    ' + countBadge;
          html += '    <img class="card-image" src="' + p.heroImage + '" alt="' + title + '" loading="lazy">';
          html += '  </div>';
          html += '  <div class="card-body">';
          html += '    <h3 class="card-title">' + title + '</h3>';
          html += '    <div class="card-authors">👤 ' + authors + '</div>';
          html += '    <p class="card-summary">' + summary + '</p>';
          html += '    <div class="card-footer">';
          html += '      <span>Zagreb Design Week 2026</span>';
          html += '      <span class="card-link-btn">' + dict.card_view_btn + '</span>';
          html += '    </div>';
          html += '  </div>';
          html += '</article>';
        }
      }

      if (!html) {
        html = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">' +
               '<h3>' + dict.no_projects_title + '</h3><p>' + dict.no_projects_desc + '</p></div>';
      }

      grid.innerHTML = html;
    }

    function moveCarousel(dir, e) {
      if (e) {
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
      }
      setCarouselSlide(currentCarouselIndex + dir, e);
    }

    function setCarouselSlide(idx, e) {
      if (e) {
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
      }
      var slides = document.querySelectorAll('.modal-carousel-slide');
      var thumbs = document.querySelectorAll('.carousel-thumb');
      if (!slides || slides.length === 0) return;

      if (idx < 0) idx = slides.length - 1;
      if (idx >= slides.length) idx = 0;

      currentCarouselIndex = idx;

      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.toggle('active', i === idx);
      }
      for (var j = 0; j < thumbs.length; j++) {
        thumbs[j].classList.toggle('active', j === idx);
        if (j === idx) {
          thumbs[j].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
      var counter = document.getElementById('carouselCurrent');
      if (counter) counter.textContent = (idx + 1);
    }

    function openLightbox(idx, e) {
      if (e) {
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
      }
      var lb = document.getElementById('lightboxModal');
      if (!lb) return;

      currentLightboxIndex = (typeof idx === 'number') ? idx : currentCarouselIndex;
      var titleEl = document.getElementById('lightboxProjectTitle');
      if (titleEl) titleEl.textContent = currentActiveTitle;
      setLightboxSlide(currentLightboxIndex);
      lb.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      var lb = document.getElementById('lightboxModal');
      if (lb) lb.classList.remove('active');
      document.body.style.overflow = '';
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(function() {});
      }
    }

    function moveLightbox(dir, e) {
      if (e) {
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
      }
      setLightboxSlide(currentLightboxIndex + dir);
    }

    function setLightboxSlide(idx) {
      if (!currentActiveGallery || currentActiveGallery.length === 0) return;
      if (idx < 0) idx = currentActiveGallery.length - 1;
      if (idx >= currentActiveGallery.length) idx = 0;

      currentLightboxIndex = idx;

      var container = document.getElementById('lightboxSlidesContainer');
      if (container) {
        var html = '';
        for (var i = 0; i < currentActiveGallery.length; i++) {
          var activeClass = (i === idx) ? ' active' : '';
          html += '<div class="lightbox-slide' + activeClass + '">';
          html += '  <img src="' + currentActiveGallery[i] + '" class="lightbox-img" alt="' + currentActiveTitle + '">';
          html += '</div>';
        }
        container.innerHTML = html;
      }

      var counter = document.getElementById('lightboxCounter');
      if (counter) counter.textContent = (idx + 1) + ' / ' + currentActiveGallery.length;

      var prevBtn = document.querySelector('.lightbox-prev');
      var nextBtn = document.querySelector('.lightbox-next');
      if (prevBtn && nextBtn) {
        var showNav = currentActiveGallery.length > 1;
        prevBtn.style.display = showNav ? 'flex' : 'none';
        nextBtn.style.display = showNav ? 'flex' : 'none';
      }
    }

    function toggleLightboxFullscreen() {
      var lb = document.getElementById('lightboxModal');
      if (!lb) return;
      if (!document.fullscreenElement) {
        if (lb.requestFullscreen) {
          lb.requestFullscreen();
        } else if (lb.webkitRequestFullscreen) {
          lb.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(function() {});
        }
      }
    }

    function formatSpecsHtml(text) {
      if (!text) return '';
      return text;
    }

    function openDetailModal(id) {
      var p = null;
      for (var i = 0; i < projectsState.length; i++) {
        if (projectsState[i].id === id) {
          p = projectsState[i];
          break;
        }
      }
      if (!p) {
        for (var j = 0; j < INITIAL_PROJECTS.length; j++) {
          if (INITIAL_PROJECTS[j].id === id) {
            p = INITIAL_PROJECTS[j];
            break;
          }
        }
      }
      if (!p) return;

      window.__currentModalProjectId = id;
      var dict = I18N_UI[currentLang] || I18N_UI['es'];

      var progName = getI18n(p.programName, currentLang);
      if (!progName) {
        if (p.program === 'LDI') progName = dict.footer_link_ldi;
        else if (p.program === 'LDGM') progName = dict.footer_link_ldgm;
        else if (p.program === 'MDDP') progName = dict.footer_link_mddp;
        else progName = p.program;
      }
      var content = document.getElementById('detailModalContent');

      currentCarouselIndex = 0;
      var initProj = null;
      for (var ip = 0; ip < INITIAL_PROJECTS.length; ip++) {
        if (INITIAL_PROJECTS[ip].id === id) {
          initProj = INITIAL_PROJECTS[ip];
          break;
        }
      }
      var gallery = (initProj && initProj.gallery && initProj.gallery.length > 0)
        ? initProj.gallery
        : ((p.gallery && p.gallery.length > 0) ? p.gallery : [p.heroImage]);
      currentActiveGallery = gallery;
      var title = getI18n(p.title, currentLang);
      var subtitle = getI18n(p.subtitle, currentLang);
      var advisors = getI18n(p.advisors, currentLang) || 'Prof. Pablo Aldaba';
      var description = getI18n(p.description, currentLang) || getI18n(p.summary, currentLang);
      var specs = getI18n(p.specs, currentLang);

      currentActiveTitle = title;

      var modalHtml = '';
      if (gallery.length > 1) {
        modalHtml += '<div class="modal-carousel-container">';
        modalHtml += '  <div class="carousel-counter"><span id="carouselCurrent">1</span> / ' + gallery.length + '</div>';
        modalHtml += '  <button type="button" class="carousel-fullscreen-btn" onclick="openLightbox(currentCarouselIndex, event)" title="' + dict.modal_fullscreen + '">';
        modalHtml += '    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>';
        modalHtml += '    <span>' + dict.modal_fullscreen + '</span>';
        modalHtml += '  </button>';
        modalHtml += '  <button type="button" class="carousel-btn carousel-prev" onclick="moveCarousel(-1, event)" aria-label="Anterior">‹</button>';
        modalHtml += '  <button type="button" class="carousel-btn carousel-next" onclick="moveCarousel(1, event)" aria-label="Siguiente">›</button>';
        for (var g = 0; g < gallery.length; g++) {
          var activeClass = (g === 0) ? ' active' : '';
          modalHtml += '  <div class="modal-carousel-slide' + activeClass + '" data-slide-index="' + g + '" onclick="openLightbox(' + g + ', event)">';
          modalHtml += '    <img src="' + gallery[g] + '" alt="' + title + ' - Vista ' + (g + 1) + '" loading="lazy" title="' + dict.modal_img_fullscreen_hint + '">';
          modalHtml += '  </div>';
        }
        modalHtml += '</div>';

        modalHtml += '<div class="carousel-thumbs">';
        for (var t = 0; t < gallery.length; t++) {
          var thumbActive = (t === 0) ? ' active' : '';
          modalHtml += '<img src="' + gallery[t] + '" class="carousel-thumb' + thumbActive + '" onclick="setCarouselSlide(' + t + ', event)" alt="Miniatura ' + (t + 1) + '">';
        }
        modalHtml += '</div>';
      } else {
        modalHtml += '<div class="modal-header-hero" onclick="openLightbox(0, event)">';
        modalHtml += '  <button type="button" class="carousel-fullscreen-btn" onclick="openLightbox(0, event)" title="' + dict.modal_fullscreen + '">';
        modalHtml += '    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>';
        modalHtml += '    <span>' + dict.modal_fullscreen + '</span>';
        modalHtml += '  </button>';
        modalHtml += '  <img src="' + p.heroImage + '" alt="' + title + '" class="modal-hero-img" title="' + dict.modal_img_fullscreen_hint + '">';
        modalHtml += '</div>';
      }

      modalHtml += '<div class="modal-content-body">';
      modalHtml += '  <div style="margin-bottom:1.5rem;">';
      modalHtml += '    <h2 class="modal-title">' + title + '</h2>';
      if (subtitle) {
        modalHtml += '    <div class="modal-subtitle">' + subtitle + '</div>';
      }
      modalHtml += '  </div>';

      modalHtml += '  <div class="modal-meta-grid">';
      modalHtml += '    <div><div class="meta-item-label">' + dict.modal_label_program + '</div><div class="meta-item-value">' + progName + '</div></div>';
      modalHtml += '    <div><div class="meta-item-label">' + dict.modal_label_authors + '</div><div class="meta-item-value">' + p.authors + '</div></div>';
      modalHtml += '    <div><div class="meta-item-label">' + dict.modal_label_curatorship + '</div><div class="meta-item-value">' + advisors + '</div></div>';
      modalHtml += '    <div><div class="meta-item-label">' + dict.modal_label_exhibition + '</div><div class="meta-item-value">' + dict.modal_exhibition_val + '</div></div>';
      modalHtml += '  </div>';

      modalHtml += '  <h3 class="modal-section-title">' + dict.modal_section_concept + '</h3>';
      modalHtml += '  <div class="modal-description">' + description + '</div>';

      if (specs) {
        modalHtml += '  <h3 class="modal-section-title">' + dict.modal_section_specs + '</h3>';
        modalHtml += '  <div style="background:#F4EFEA; padding:1rem; border-radius:10px; border:1px solid var(--border-color); font-size:0.92rem; color:var(--text-secondary);">' + formatSpecsHtml(specs) + '</div>';
      }

      modalHtml += '</div>';

      content.innerHTML = modalHtml;
      document.getElementById('detailModal').classList.add('active');
    }

    function closeDetailModal() {
      document.getElementById('detailModal').classList.remove('active');
      window.__currentModalProjectId = null;
    }

    function selectProgramFilter(prog) {
      var filterBtns = document.querySelectorAll('.filter-btn');
      for (var i = 0; i < filterBtns.length; i++) {
        if (filterBtns[i].getAttribute('data-filter') === prog) {
          filterBtns[i].classList.add('active');
        } else {
          filterBtns[i].classList.remove('active');
        }
      }
      currentFilter = prog;
      renderProjects();
      var gallerySection = document.querySelector('.gallery-section');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    document.addEventListener('keydown', function(e) {
      var lb = document.getElementById('lightboxModal');
      if (lb && lb.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
          moveLightbox(-1, e);
        } else if (e.key === 'ArrowRight') {
          moveLightbox(1, e);
        } else if (e.key === 'Escape') {
          closeLightbox();
        }
        return;
      }

      var modal = document.getElementById('detailModal');
      if (modal && modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
          moveCarousel(-1, e);
        } else if (e.key === 'ArrowRight') {
          moveCarousel(1, e);
        } else if (e.key === 'Escape') {
          closeDetailModal();
        }
      }
    });

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      initGallery();
    } else {
      document.addEventListener('DOMContentLoaded', initGallery);
      window.addEventListener('load', initGallery);
    }
    setTimeout(initGallery, 200);
  </script>
</body>
</html>`;
}

// Write google_sites_embed.html
fs.writeFileSync(path.join(__dirname, 'google_sites_embed.html'), getHtml(true), 'utf8');
console.log('Successfully written google_sites_embed.html');

// Write index.html
fs.writeFileSync(path.join(__dirname, 'index.html'), getHtml(false), 'utf8');
console.log('Successfully written index.html');

// Also update app.js for modular use
const appJsContent = `/* ==========================================================================
   ZAGREB DESIGN WEEK X UACJ - ÁRIDO Catálogo Oficial Trilingüe (ES, EN, HR)
   ========================================================================== */

var INITIAL_PROJECTS = ${JSON.stringify(localProjects, null, 2)};
var I18N_UI = ${JSON.stringify(I18N_UI, null, 2)};

var currentLang = 'es';
try {
  var savedLang = localStorage.getItem('uacj_zagreb_lang');
  if (savedLang && (savedLang === 'es' || savedLang === 'en' || savedLang === 'hr')) {
    currentLang = savedLang;
  }
} catch (e) {}

var projectsState = [];
var currentFilter = 'ALL';
var currentSearch = '';
var currentCarouselIndex = 0;
var currentActiveGallery = [];
var currentActiveTitle = '';
var currentLightboxIndex = 0;
window.__currentModalProjectId = null;

function getI18n(val, lang) {
  if (!val) return '';
  if (typeof val === 'string') return val;
  return val[lang] || val['es'] || Object.values(val)[0] || '';
}

function setLanguage(lang) {
  if (!lang || (lang !== 'es' && lang !== 'en' && lang !== 'hr')) return;
  currentLang = lang;
  try {
    localStorage.setItem('uacj_zagreb_lang', lang);
  } catch (e) {}

  var buttons = document.querySelectorAll('.lang-btn');
  for (var b = 0; b < buttons.length; b++) {
    if (buttons[b].getAttribute('data-lang') === lang) {
      buttons[b].classList.add('active');
    } else {
      buttons[b].classList.remove('active');
    }
  }

  var dict = I18N_UI[lang] || I18N_UI['es'];

  var i18nElements = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < i18nElements.length; i++) {
    var el = i18nElements[i];
    var key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' && el.getAttribute('type') === 'text') {
        el.setAttribute('placeholder', dict[key]);
      } else {
        el.innerHTML = dict[key];
      }
    }
  }

  document.documentElement.setAttribute('lang', lang);

  renderProjects();

  var detailModal = document.getElementById('detailModal');
  if (detailModal && detailModal.classList && detailModal.classList.contains('active') && window.__currentModalProjectId) {
    openDetailModal(window.__currentModalProjectId);
  }
}

function initGallery() {
  if (window.__uacj_gallery_ready) return;
  window.__uacj_gallery_ready = true;

  try {
    localStorage.removeItem('uacj_zagreb_projects');
    localStorage.removeItem('uacj_zagreb_projects_v12');
    localStorage.removeItem('uacj_zagreb_projects_v2026_galleries_v2');
    localStorage.removeItem('uacj_zagreb_projects_v2026_galleries_v3');
    localStorage.removeItem('uacj_zagreb_projects_v2026_galleries_v4');
  } catch (e) {}

  var STORAGE_KEY = 'uacj_zagreb_projects_v2026_galleries_v5';
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      var parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length >= INITIAL_PROJECTS.length) {
        projectsState = parsed;
      } else {
        projectsState = INITIAL_PROJECTS.slice();
        saveProjects();
      }
    } else {
      projectsState = INITIAL_PROJECTS.slice();
      saveProjects();
    }
  } catch (err) {
    projectsState = INITIAL_PROJECTS.slice();
  }

  // Always merge latest INITIAL_PROJECTS media (gallery and heroImage) and texts
  // into projectsState so updates are immediately reflected without requiring manual cache clearing.
  var initMap = {};
  for (var k = 0; k < INITIAL_PROJECTS.length; k++) {
    initMap[INITIAL_PROJECTS[k].id] = INITIAL_PROJECTS[k];
  }
  for (var m = 0; m < projectsState.length; m++) {
    var orig = initMap[projectsState[m].id];
    if (orig) {
      projectsState[m].gallery = orig.gallery;
      projectsState[m].heroImage = orig.heroImage;
      projectsState[m].title = orig.title;
      projectsState[m].subtitle = orig.subtitle;
      projectsState[m].authors = orig.authors;
      projectsState[m].advisors = orig.advisors;
      projectsState[m].summary = orig.summary;
      projectsState[m].description = orig.description;
      projectsState[m].specs = orig.specs;
    }
  }
  saveProjects();

  setupFilterTabs();
  setupSearch();
  setupGridClick();
  setLanguage(currentLang);
}

function setupFilterTabs() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener('click', function(e) {
      for (var j = 0; j < filterBtns.length; j++) {
        filterBtns[j].classList.remove('active');
      }
      e.currentTarget.classList.add('active');
      currentFilter = e.currentTarget.getAttribute('data-filter');
      renderProjects();
    });
  }
}

function setupSearch() {
  var searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      currentSearch = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }
}

function setupGridClick() {
  var grid = document.getElementById('projectsGrid');
  if (grid) {
    grid.addEventListener('click', function(e) {
      var card = e.target.closest('.project-card');
      if (card) {
        var id = card.getAttribute('data-project-id');
        if (id) {
          openDetailModal(id);
        }
      }
    });
  }
}

function saveProjects() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projectsState));
  } catch (e) {}
}

function renderProjects() {
  var grid = document.getElementById('projectsGrid');
  if (!grid) return;
  var dict = I18N_UI[currentLang] || I18N_UI['es'];

  var html = '';
  for (var i = 0; i < projectsState.length; i++) {
    var p = projectsState[i];
    var matchesFilter = (currentFilter === 'ALL' || p.program === currentFilter);

    var title = getI18n(p.title, currentLang);
    var authors = p.authors || '';
    var summary = getI18n(p.summary, currentLang);
    var specs = getI18n(p.specs, currentLang);

    var matchesSearch = true;
    if (currentSearch) {
      var searchCorpus = (title + ' ' + authors + ' ' + summary + ' ' + specs).toLowerCase();
      matchesSearch = searchCorpus.indexOf(currentSearch) !== -1;
    }

    if (matchesFilter && matchesSearch) {
      var tagClass = 'tag-ldi';
      var tagText = dict.tag_ldi;
      if (p.program === 'MDDP') {
        tagClass = 'tag-mddp';
        tagText = dict.tag_mddp;
      } else if (p.program === 'LDGM') {
        tagClass = 'tag-ldgm';
        tagText = dict.tag_ldgm;
      }

      var galleryCount = (p.gallery && Array.isArray(p.gallery)) ? p.gallery.length : 1;
      var countBadge = '';
      if (galleryCount > 1) {
        var photosWord = dict.badge_photos || 'fotos';
        countBadge = '<span class="card-photo-count"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg> ' + galleryCount + ' ' + photosWord + '</span>';
      }

      html += '<article class="project-card" data-project-id="' + p.id + '">';
      html += '  <div class="card-media">';
      html += '    <span class="card-tag ' + tagClass + '">' + tagText + '</span>';
      html += '    ' + countBadge;
      html += '    <img class="card-image" src="' + p.heroImage + '" alt="' + title + '" loading="lazy">';
      html += '  </div>';
      html += '  <div class="card-body">';
      html += '    <h3 class="card-title">' + title + '</h3>';
      html += '    <div class="card-authors">👤 ' + authors + '</div>';
      html += '    <p class="card-summary">' + summary + '</p>';
      html += '    <div class="card-footer">';
      html += '      <span>Zagreb Design Week 2026</span>';
      html += '      <span class="card-link-btn">' + dict.card_view_btn + '</span>';
      html += '    </div>';
      html += '  </div>';
      html += '</article>';
    }
  }

  if (!html) {
    html = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">' +
           '<h3>' + dict.no_projects_title + '</h3><p>' + dict.no_projects_desc + '</p></div>';
  }

  grid.innerHTML = html;
}

function moveCarousel(dir, e) {
  if (e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
  }
  setCarouselSlide(currentCarouselIndex + dir, e);
}

function setCarouselSlide(idx, e) {
  if (e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
  }
  var slides = document.querySelectorAll('.modal-carousel-slide');
  var thumbs = document.querySelectorAll('.carousel-thumb');
  if (!slides || slides.length === 0) return;

  if (idx < 0) idx = slides.length - 1;
  if (idx >= slides.length) idx = 0;

  currentCarouselIndex = idx;

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.toggle('active', i === idx);
  }
  for (var j = 0; j < thumbs.length; j++) {
    thumbs[j].classList.toggle('active', j === idx);
    if (j === idx) {
      thumbs[j].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }
  var counter = document.getElementById('carouselCurrent');
  if (counter) counter.textContent = (idx + 1);
}

function openLightbox(idx, e) {
  if (e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
  }
  var lb = document.getElementById('lightboxModal');
  if (!lb) return;

  currentLightboxIndex = (typeof idx === 'number') ? idx : currentCarouselIndex;
  var titleEl = document.getElementById('lightboxProjectTitle');
  if (titleEl) titleEl.textContent = currentActiveTitle;
  setLightboxSlide(currentLightboxIndex);
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  var lb = document.getElementById('lightboxModal');
  if (lb) lb.classList.remove('active');
  document.body.style.overflow = '';
  if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(function() {});
  }
}

function moveLightbox(dir, e) {
  if (e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
  }
  setLightboxSlide(currentLightboxIndex + dir);
}

function setLightboxSlide(idx) {
  if (!currentActiveGallery || currentActiveGallery.length === 0) return;
  if (idx < 0) idx = currentActiveGallery.length - 1;
  if (idx >= currentActiveGallery.length) idx = 0;

  currentLightboxIndex = idx;

  var container = document.getElementById('lightboxSlidesContainer');
  if (container) {
    var html = '';
    for (var i = 0; i < currentActiveGallery.length; i++) {
      var activeClass = (i === idx) ? ' active' : '';
      html += '<div class="lightbox-slide' + activeClass + '">';
      html += '  <img src="' + currentActiveGallery[i] + '" class="lightbox-img" alt="' + currentActiveTitle + '">';
      html += '</div>';
    }
    container.innerHTML = html;
  }

  var counter = document.getElementById('lightboxCounter');
  if (counter) counter.textContent = (idx + 1) + ' / ' + currentActiveGallery.length;

  var prevBtn = document.querySelector('.lightbox-prev');
  var nextBtn = document.querySelector('.lightbox-next');
  if (prevBtn && nextBtn) {
    var showNav = currentActiveGallery.length > 1;
    prevBtn.style.display = showNav ? 'flex' : 'none';
    nextBtn.style.display = showNav ? 'flex' : 'none';
  }
}

function toggleLightboxFullscreen() {
  var lb = document.getElementById('lightboxModal');
  if (!lb) return;
  if (!document.fullscreenElement) {
    if (lb.requestFullscreen) {
      lb.requestFullscreen();
    } else if (lb.webkitRequestFullscreen) {
      lb.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(function() {});
    }
  }
}

function formatSpecsHtml(text) {
  if (!text) return '';
  return text;
}

function openDetailModal(id) {
  var p = null;
  for (var i = 0; i < projectsState.length; i++) {
    if (projectsState[i].id === id) {
      p = projectsState[i];
      break;
    }
  }
  if (!p) {
    for (var j = 0; j < INITIAL_PROJECTS.length; j++) {
      if (INITIAL_PROJECTS[j].id === id) {
        p = INITIAL_PROJECTS[j];
        break;
      }
    }
  }
  if (!p) return;

  window.__currentModalProjectId = id;
  var dict = I18N_UI[currentLang] || I18N_UI['es'];

  var progName = getI18n(p.programName, currentLang);
  if (!progName) {
    if (p.program === 'LDI') progName = dict.footer_link_ldi;
    else if (p.program === 'LDGM') progName = dict.footer_link_ldgm;
    else if (p.program === 'MDDP') progName = dict.footer_link_mddp;
    else progName = p.program;
  }
  var content = document.getElementById('detailModalContent');

  currentCarouselIndex = 0;
  var initProj = null;
  for (var ip = 0; ip < INITIAL_PROJECTS.length; ip++) {
    if (INITIAL_PROJECTS[ip].id === id) {
      initProj = INITIAL_PROJECTS[ip];
      break;
    }
  }
  var gallery = (initProj && initProj.gallery && initProj.gallery.length > 0)
    ? initProj.gallery
    : ((p.gallery && p.gallery.length > 0) ? p.gallery : [p.heroImage]);
  currentActiveGallery = gallery;
  var title = getI18n(p.title, currentLang);
  var subtitle = getI18n(p.subtitle, currentLang);
  var advisors = getI18n(p.advisors, currentLang) || 'Prof. Pablo Aldaba';
  var description = getI18n(p.description, currentLang) || getI18n(p.summary, currentLang);
  var specs = getI18n(p.specs, currentLang);

  currentActiveTitle = title;

  var modalHtml = '';
  if (gallery.length > 1) {
    modalHtml += '<div class="modal-carousel-container">';
    modalHtml += '  <div class="carousel-counter"><span id="carouselCurrent">1</span> / ' + gallery.length + '</div>';
    modalHtml += '  <button type="button" class="carousel-fullscreen-btn" onclick="openLightbox(currentCarouselIndex, event)" title="' + dict.modal_fullscreen + '">';
    modalHtml += '    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>';
    modalHtml += '    <span>' + dict.modal_fullscreen + '</span>';
    modalHtml += '  </button>';
    modalHtml += '  <button type="button" class="carousel-btn carousel-prev" onclick="moveCarousel(-1, event)" aria-label="Anterior">‹</button>';
    modalHtml += '  <button type="button" class="carousel-btn carousel-next" onclick="moveCarousel(1, event)" aria-label="Siguiente">›</button>';
    for (var g = 0; g < gallery.length; g++) {
      var activeClass = (g === 0) ? ' active' : '';
      modalHtml += '  <div class="modal-carousel-slide' + activeClass + '" data-slide-index="' + g + '" onclick="openLightbox(' + g + ', event)">';
      modalHtml += '    <img src="' + gallery[g] + '" alt="' + title + ' - Vista ' + (g + 1) + '" loading="lazy" title="' + dict.modal_img_fullscreen_hint + '">';
      modalHtml += '  </div>';
    }
    modalHtml += '</div>';

    modalHtml += '<div class="carousel-thumbs">';
    for (var t = 0; t < gallery.length; t++) {
      var thumbActive = (t === 0) ? ' active' : '';
      modalHtml += '<img src="' + gallery[t] + '" class="carousel-thumb' + thumbActive + '" onclick="setCarouselSlide(' + t + ', event)" alt="Miniatura ' + (t + 1) + '">';
    }
    modalHtml += '</div>';
  } else {
    modalHtml += '<div class="modal-header-hero" onclick="openLightbox(0, event)">';
    modalHtml += '  <button type="button" class="carousel-fullscreen-btn" onclick="openLightbox(0, event)" title="' + dict.modal_fullscreen + '">';
    modalHtml += '    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>';
    modalHtml += '    <span>' + dict.modal_fullscreen + '</span>';
    modalHtml += '  </button>';
    modalHtml += '  <img src="' + p.heroImage + '" alt="' + title + '" class="modal-hero-img" title="' + dict.modal_img_fullscreen_hint + '">';
    modalHtml += '</div>';
  }

  modalHtml += '<div class="modal-content-body">';
  modalHtml += '  <div style="margin-bottom:1.5rem;">';
  modalHtml += '    <h2 class="modal-title">' + title + '</h2>';
  if (subtitle) {
    modalHtml += '    <div class="modal-subtitle">' + subtitle + '</div>';
  }
  modalHtml += '  </div>';

  modalHtml += '  <div class="modal-meta-grid">';
  modalHtml += '    <div><div class="meta-item-label">' + dict.modal_label_program + '</div><div class="meta-item-value">' + progName + '</div></div>';
  modalHtml += '    <div><div class="meta-item-label">' + dict.modal_label_authors + '</div><div class="meta-item-value">' + p.authors + '</div></div>';
  modalHtml += '    <div><div class="meta-item-label">' + dict.modal_label_curatorship + '</div><div class="meta-item-value">' + advisors + '</div></div>';
  modalHtml += '    <div><div class="meta-item-label">' + dict.modal_label_exhibition + '</div><div class="meta-item-value">' + dict.modal_exhibition_val + '</div></div>';
  modalHtml += '  </div>';

  modalHtml += '  <h3 class="modal-section-title">' + dict.modal_section_concept + '</h3>';
  modalHtml += '  <div class="modal-description">' + description + '</div>';

  if (specs) {
    modalHtml += '  <h3 class="modal-section-title">' + dict.modal_section_specs + '</h3>';
    modalHtml += '  <div style="background:#F4EFEA; padding:1rem; border-radius:10px; border:1px solid var(--border-color); font-size:0.92rem; color:var(--text-secondary);">' + formatSpecsHtml(specs) + '</div>';
  }

  modalHtml += '</div>';

  content.innerHTML = modalHtml;
  document.getElementById('detailModal').classList.add('active');
}

function closeDetailModal() {
  document.getElementById('detailModal').classList.remove('active');
  window.__currentModalProjectId = null;
}

function selectProgramFilter(prog) {
  var filterBtns = document.querySelectorAll('.filter-btn');
  for (var i = 0; i < filterBtns.length; i++) {
    if (filterBtns[i].getAttribute('data-filter') === prog) {
      filterBtns[i].classList.add('active');
    } else {
      filterBtns[i].classList.remove('active');
    }
  }
  currentFilter = prog;
  renderProjects();
  var gallerySection = document.querySelector('.gallery-section');
  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('keydown', function(e) {
  var lb = document.getElementById('lightboxModal');
  if (lb && lb.classList.contains('active')) {
    if (e.key === 'ArrowLeft') {
      moveLightbox(-1, e);
    } else if (e.key === 'ArrowRight') {
      moveLightbox(1, e);
    } else if (e.key === 'Escape') {
      closeLightbox();
    }
    return;
  }

  var modal = document.getElementById('detailModal');
  if (modal && modal.classList.contains('active')) {
    if (e.key === 'ArrowLeft') {
      moveCarousel(-1, e);
    } else if (e.key === 'ArrowRight') {
      moveCarousel(1, e);
    } else if (e.key === 'Escape') {
      closeDetailModal();
    }
  }
});

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initGallery();
} else {
  document.addEventListener('DOMContentLoaded', initGallery);
  window.addEventListener('load', initGallery);
}
setTimeout(initGallery, 200);
`;

fs.writeFileSync(path.join(__dirname, 'app.js'), appJsContent, 'utf8');
console.log('Successfully written app.js');
