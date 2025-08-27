function updateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n; 
    el.innerHTML = translations[lang][key];
  });

    // Placeholder translations
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });
}

// Custom Language menu

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "linguas-dropdown": */
x = document.getElementsByClassName("linguas-dropdown");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "linguas-dropdown-custom");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            // Update html lang attribute
            const selectedLang = this.innerHTML.trim().toLowerCase();
            document.documentElement.setAttribute("lang", selectedLang);
            updateLanguage(selectedLang);
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
    
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("linguas-dropdown-custom");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect); 

document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("contacto");
    const reuniaoDiv = document.querySelector(".reuniao");

    function toggleReuniao() {
      if (checkbox.checked) {
        reuniaoDiv.classList.add("visible");
      } else {
        reuniaoDiv.classList.remove("visible");
      }
    }

    // Run on page load
    toggleReuniao();

    // Listen for changes
    checkbox.addEventListener("change", toggleReuniao);
  });

  document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.form-solicit input[type="checkbox"]');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        checkboxes.forEach(function (otherCheckbox) {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });
});


const translations = {
  pt: {
    // MENU
    missao: "Missão",
    foco: "Foco",
    contacte: "Contacte-nos",

    // HERO
    mainHeading1: "Soluções <br /> Imobiliárias",
    mainHeading2: "Personalizando o seu <br /> investimento",
    mainContacte: "Contacte-nos",

    // MISSÃO
    missaoTitle: "Missão",
    missaoSubTitle1: "PYRUS - Imobiliário com Alcance Internacional",
    missaoSubTitle1Text:
      "Com sólida experiência profissional e profundo conhecimento dos mercados ibero-americanos e europeus, a PYRUS atua na identificação e desenvolvimento de oportunidades imobiliárias com alto potencial de valorização. Analisamos cada ativo com visão estratégica e multifatorial — viabilidade, aquisição, promoção, construção e comercialização — e entregamos soluções ajustadas a investidores, fundos e parceiros com ambição global.",
    missaoSubTitle2: "Equipa Experiente",
    missaoSubTitle2Text:
      "A equipa da PYRUS possui uma sólida experiência no mercado imobiliário, adquirida ao longo de anos de atuação em projetos de diferentes escalas e complexidades.",
    missaoLema:
      '"Visão global, execução precisa. Transformamos ativos imobiliários em valor real."',

    // SLIDER
    slider1logoTitle: "Soluções <br /> Imobiliárias",
    slider1info1: "Anos de <br /> experiência",
    slider1info2: "Países",
    slider2title: "Negócios Globais",
    slider2local: "Braga, <br> Portugal",
    slider3title: "Negócios Globais",
    slider3local: "Santo Domingo, <br> República Dominicana",
    slider4title: "Negócios Globais",
    slider4local: "Bucareste, <br> Roménia",

    // FOCO
    focoTitle: "O Nosso Foco",
    focoSub1: "Aquisição e Desenvolvimento de Projetos",
    focoSub2: "Apoio em Negociações e Transações",
    focoSub3: "Gestão Personalizada de Investimentos",

    focoSub1Title1: "Identificação de Oportunidades",
    focoSub1Title1Text:
      "Localização de imóveis e ativos com elevado potencial de valorização, reconversão ou desenvolvimento, alinhados com os objetivos do investidor.",
    focoSub1Title2: "Estudos de Viabilidade e Enquadramento",
    focoSub1Title2Text:
      "Análise técnica, jurídica e financeira dos ativos, incluindo cenários de uso, licenciamento e retorno potencial.",
    focoSub1Title3: "Estruturação do Projeto",
    focoSub1Title3Text:
      "Definição do conceito, modelo de negócio e estratégia de desenvolvimento para cada ativo ou empreendimento.",
    focoSub1Title4: "Planeamento de Execução",
    focoSub1Title4Text:
      "Organização das fases do projeto: aquisição, contratação de equipas, orçamentos, cronogramas e estratégias de saída.",

    focoSub2Title1: "Representação Estratégica",
    focoSub2Title1Text:
      "Atuação em nome de investidores ou proprietários para defender interesses em transações imobiliárias ou empresariais.",
    focoSub2Title2: "Preparação de Ativos para Transação",
    focoSub2Title2Text:
      "Análise técnica, jurídica e financeira dos ativos, incluindo cenários de uso, licenciamento e retorno potencial.",
    focoSub2Title3: "Intermediação Técnica",
    focoSub2Title3Text:
      "Suporte especializado em negociações complexas envolvendo ativos com particularidades legais ou operacionais.",
    focoSub2Title4: "Coordenação de Due Diligence",
    focoSub2Title4Text:
      "Gestão de processos de análise técnica, jurídica e financeira para garantir decisões informadas e seguras.",

    focoSub3Title1: "Modelos de Investimento à Medida",
    focoSub3Title1Text:
      "Estratégias desenhadas segundo o perfil e os objetivos de cada investidor, com acompanhamento próximo.",
    focoSub3Title2: "Gestão de Portfólio Imobiliário",
    focoSub3Title2Text:
      "Acompanhamento contínuo de ativos e projetos, com relatórios de progresso e apoio na tomada de decisão.",
    focoSub3Title3: "Monitorização de Mercados",
    focoSub3Title3Text:
      "Atualização constante sobre tendências e contextos relevantes a nível local e internacional.",
    focoSub3Title4: "Suporte Contínuo e Confidencialidade",
    focoSub3Title4Text:
      "Relação próxima e estratégica com cada cliente, garantindo discrição e alinhamento de longo prazo.",

    // FORMULÁRIO
    formTitle: "Faça Uma Solicitação",
    formSolicit: "Tipo de Solicitação:",
    formSolicitOpt1: "Quero vender um imóvel",
    formSolicitOpt2: "Procuro um parceiro para um projeto",
    formSolicitOpt3: "Quero comprar um imóvel",
    formSolicitOpt4: "Outro",
    formSolicitOpt4Box: "Introduza texto",
    formAssunto: "Assunto:",
    formAssuntoBox: "Insira aqui o seu texto",
    formDescrpt: "Descrição:",
    formContactoCheck: "Marcação de Contacto (opcional)",
    formContactoData: "Sugestão de Data para reunião/visita",
    formContactoHora: "Hora",
    formNome: "Nome:",
    formNomeBox: "Nome",
    formTel: "Telemóvel:",
    formTelBox: "Telemóvel",
    formEmail: "E-mail:",
    formEmailBox: "Email",
    formContactoPref: "Deseja ser contactado por:",
    formContactoPref1: "E-mail",
    formContactoPref2: "Telemóvel",
    formContactoPref3: "WhatsApp",
    formRGPD:
      "Autorizo a recolha e o tratamento dos meus dados pessoais para os fins indicados, em conformidade com o RGPD.",
    formSubmit: "Submeter Pedido",

    // RODAPÉ
    rodapeContactos: "Contactos",
    rodapeContactosMorada: "Morada:",
    rodapeContactosMorada1:
      "Rua Bernardo Sequeira 213 <br> 4715-671 Braga, Portugal",
    rodapeContactosTel: "Telefone:",
    rodapeContactosTel1: "+351253897123",
    rodapeContactosTel2: "Chamada para a rede fixa nacional",
    rodapeContactosEmail: "E-mail:",
    rodapePrivacidade: "Política de Privacidade",

    // PRIVACIDADE
    privacidadeTitulo: "Política de Privacidade",
    privacidadeText1:
      "A PYRUS compromete-se a proteger a privacidade e segurança dos dados pessoais, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a legislação nacional aplicável.",
    privacidadeSub1: "(1) Dados Recolhidos e Finalidade",
    privacidadeSub1Text1:
      "Identificação e Contactos: Nome, email, telefone, cargo e empresa.",
    privacidadeSub1Text2:
      "Dados de Navegação: Cookies, endereço IP, dispositivo e preferências.",
    privacidadeSub1Text3: "Os dados são utilizados para:",
    privacidadeSub1List1: "Prestação de serviços e suporte;",
    privacidadeSub1List2: "Comunicação e envio de informações;",
    privacidadeSub1List3: "Cumprimento de obrigações legais;",
    privacidadeSub1List4: "Melhoramento da experiência no website.",
    privacidadeSub2: "(2) Partilha de Dados",
    privacidadeSub2Text1:
      "Não vendemos nem comercializamos dados pessoais. Poderemos partilhar com:",
    privacidadeSub2List1:
      "Subcontratantes que garantam conformidade com o RGPD;",
    privacidadeSub2List2: "Autoridades legais, quando exigido.",
    privacidadeSub3: "(3) Segurança e Retenção de Dados",
    privacidadeSub3Text1:
      "Implementamos medidas técnicas e organizacionais para proteger os dados contra acessos indevidos, incluindo encriptação, firewalls e controlo de acessos. Os dados são mantidos apenas pelo período necessário ao cumprimento das finalidades legais e contratuais.",
    privacidadeSub4: "(4) Direitos dos Titulares",
    privacidadeSub4Text1: "Nos termos do RGPD, pode:",
    privacidadeSub4List1: "Aceder, retificar ou apagar os seus dados;",
    privacidadeSub4List2: "Opor-se ao tratamento ou solicitar limitação;",
    privacidadeSub4List3: "Solicitar a portabilidade dos dados.",
    privacidadeSub4Text2:
      "Para exercer os seus direitos, contacte-nos: pyrus@pyrus.pt .",
    privacidadeSub5: "(5) Cookies",
    privacidadeSub5Text1:
      "Utilizamos cookies para melhorar a experiência no website. Pode configurar as suas preferências no navegador.",
    privacidadeSub6: "(6) Alterações e Contacto",
    privacidadeSub6Text1:
      "Esta política pode ser atualizada. Para mais informações, contacte-nos:",
    privacidadeSub6List1: "Email: pyrus@pyrus.pt",
    privacidadeSub6List2:
      "Morada: Rua Bernardo Sequeira, nº 231, Sala 3 4715-010 Braga, Portugal",
    privacidadeSub6List3: "Telefone: +351 253 176 493",
    privacidadeSign: "Agosto de 2025 | A Administração",
  },

  en: {
    // MENU
    missao: "Mission",
    foco: "Focus",
    contacte: "Contact us",

    // HERO
    mainHeading1: "Real Estate <br /> Solutions",
    mainHeading2: "Customizing your <br /> investment",
    mainContacte: "Contact us",

    // MISSION
    missaoTitle: "Mission",
    missaoSubTitle1: "PYRUS - Real Estate with International Reach",
    missaoSubTitle1Text:
      "With solid professional experience and deep knowledge of the Ibero-American and European markets, PYRUS operates in the identification and development of real estate opportunities with high appreciation potential. We analyze each asset with a strategic and multifactorial vision — feasibility, acquisition, promotion, construction, and commercialization — delivering tailored solutions to investors, funds, and partners with global ambitions.",
    missaoSubTitle2: "Experienced Team",
    missaoSubTitle2Text:
      "The PYRUS team has solid experience in the real estate market, acquired over years of work on projects of different scales and complexities.",
    missaoLema:
      '"Global vision, precise execution. We transform real estate assets into real value."',

    // SLIDER
    slider1logoTitle: "Real Estate <br /> Solutions",
    slider1info1: "Years of <br /> experience",
    slider1info2: "Countries",
    slider2title: "Global Business",
    slider2local: "Braga, <br> Portugal",
    slider3title: "Global Business",
    slider3local: "Santo Domingo, <br> Dominican Republic",
    slider4title: "Global Business",
    slider4local: "Bucharest, <br> Romania",

    // FOCUS
    focoTitle: "Our Focus",
    focoSub1: "Acquisition and Project Development",
    focoSub2: "Support in Negotiations and Transactions",
    focoSub3: "Personalized Investment Management",

    focoSub1Title1: "Opportunity Identification",
    focoSub1Title1Text:
      "Locating properties and assets with high potential for appreciation, conversion, or development, aligned with investor goals.",
    focoSub1Title2: "Feasibility and Framework Studies",
    focoSub1Title2Text:
      "Technical, legal, and financial analysis of assets, including usage scenarios, licensing, and potential returns.",
    focoSub1Title3: "Project Structuring",
    focoSub1Title3Text:
      "Defining the concept, business model, and development strategy for each asset or project.",
    focoSub1Title4: "Execution Planning",
    focoSub1Title4Text:
      "Organizing project phases: acquisition, team hiring, budgets, schedules, and exit strategies.",

    focoSub2Title1: "Strategic Representation",
    focoSub2Title1Text:
      "Acting on behalf of investors or owners to defend interests in real estate or business transactions.",
    focoSub2Title2: "Asset Preparation for Transaction",
    focoSub2Title2Text:
      "Technical, legal, and financial analysis of assets, including usage scenarios, licensing, and potential returns.",
    focoSub2Title3: "Technical Intermediation",
    focoSub2Title3Text:
      "Specialized support in complex negotiations involving assets with legal or operational particularities.",
    focoSub2Title4: "Due Diligence Coordination",
    focoSub2Title4Text:
      "Managing technical, legal, and financial review processes to ensure informed and secure decisions.",

    focoSub3Title1: "Tailored Investment Models",
    focoSub3Title1Text:
      "Strategies designed according to the profile and objectives of each investor, with close follow-up.",
    focoSub3Title2: "Real Estate Portfolio Management",
    focoSub3Title2Text:
      "Continuous monitoring of assets and projects, with progress reports and decision-making support.",
    focoSub3Title3: "Market Monitoring",
    focoSub3Title3Text:
      "Constant updates on trends and contexts relevant locally and internationally.",
    focoSub3Title4: "Ongoing Support and Confidentiality",
    focoSub3Title4Text:
      "Close and strategic relationship with each client, ensuring discretion and long-term alignment.",

    // FORM
    formTitle: "Submit a Request",
    formSolicit: "Type of Request:",
    formSolicitOpt1: "I want to sell a property",
    formSolicitOpt2: "I am looking for a partner for a project",
    formSolicitOpt3: "I want to buy a property",
    formSolicitOpt4: "Other",
    formSolicitOpt4Box: "Enter text",
    formAssunto: "Subject:",
    formAssuntoBox: "Insert your text here",
    formDescrpt: "Description:",
    formContactoCheck: "Schedule Contact (optional)",
    formContactoData: "Suggested Date for meeting/visit",
    formContactoHora: "Time",
    formNome: "Name:",
    formNomeBox: "Name",
    formTel: "Phone:",
    formTelBox: "Phone",
    formEmail: "E-mail:",
    formEmailBox: "Email",
    formContactoPref: "Preferred contact method:",
    formContactoPref1: "E-mail",
    formContactoPref2: "Phone",
    formContactoPref3: "WhatsApp",
    formRGPD:
      "I authorize the collection and processing of my personal data for the indicated purposes, in accordance with GDPR.",
    formSubmit: "Submit Request",
    // FOOTER
    rodapeContactos: "Contacts",
    rodapeContactosMorada: "Address:",
    rodapeContactosMorada1:
      "Rua Bernardo Sequeira 213 <br> 4715-671 Braga, Portugal",
    rodapeContactosTel: "Phone:",
    rodapeContactosTel1: "+351253897123",
    rodapeContactosTel2: "Call to national landline",
    rodapeContactosEmail: "E-mail:",
    rodapePrivacidade: "Privacy Policy",

    // PRIVACY
    privacidadeTitulo: "Privacy Policy",
    privacidadeText1:
      "PYRUS is committed to protecting the privacy and security of personal data, in compliance with the General Data Protection Regulation (GDPR) and applicable national legislation.",
    privacidadeSub1: "(1) Data Collected and Purpose",
    privacidadeSub1Text1: "Identification and Contacts: Name, email, phone, position, and company.",
    privacidadeSub1Text2: "Browsing Data: Cookies, IP address, device, and preferences.",
    privacidadeSub1Text3: "Data is used for:",
    privacidadeSub1List1: "Provision of services and support;",
    privacidadeSub1List2: "Communication and information sharing;",
    privacidadeSub1List3: "Compliance with legal obligations;",
    privacidadeSub1List4: "Improving website experience.",
    privacidadeSub2: "(2) Data Sharing",
    privacidadeSub2Text1: "We do not sell or trade personal data. We may share with:",
    privacidadeSub2List1: "Subcontractors that ensure GDPR compliance;",
    privacidadeSub2List2: "Legal authorities, when required.",
    privacidadeSub3: "(3) Data Security and Retention",
    privacidadeSub3Text1:
      "We implement technical and organizational measures to protect data from unauthorized access, including encryption, firewalls, and access control. Data is retained only as long as necessary to fulfill legal and contractual purposes.",
    privacidadeSub4: "(4) Data Subject Rights",
    privacidadeSub4Text1: "Under GDPR, you may:",
    privacidadeSub4List1: "Access, rectify, or delete your data;",
    privacidadeSub4List2: "Object to processing or request limitation;",
    privacidadeSub4List3: "Request data portability.",
    privacidadeSub4Text2: "To exercise your rights, contact us: pyrus@pyrus.pt.",
    privacidadeSub5: "(5) Cookies",
    privacidadeSub5Text1:
      "We use cookies to improve website experience. You can configure your preferences in your browser.",
    privacidadeSub6: "(6) Changes and Contact",
    privacidadeSub6Text1: "This policy may be updated. For more information, contact us:",
    privacidadeSub6List1: "Email: pyrus@pyrus.pt",
    privacidadeSub6List2:
      "Address: Rua Bernardo Sequeira, nº 231, Sala 3 4715-010 Braga, Portugal",
    privacidadeSub6List3: "Phone: +351 253 176 493",
    privacidadeSign: "August 2025 | The Administration",
  },

  es: {
    // MENU
    missao: "Misión",
    foco: "Enfoque",
    contacte: "Contáctenos",

    // HERO
    mainHeading1: "Soluciones <br /> Inmobiliarias",
    mainHeading2: "Personalizando su <br /> inversión",
    mainContacte: "Contáctenos",

    // MISIÓN
    missaoTitle: "Misión",
    missaoSubTitle1: "PYRUS - Inmobiliaria con Alcance Internacional",
    missaoSubTitle1Text:
      "Con sólida experiencia profesional y profundo conocimiento de los mercados iberoamericanos y europeos, PYRUS actúa en la identificación y desarrollo de oportunidades inmobiliarias con alto potencial de valorización. Analizamos cada activo con una visión estratégica y multifactorial — viabilidad, adquisición, promoción, construcción y comercialización — y entregamos soluciones adaptadas a inversores, fondos y socios con ambición global.",
    missaoSubTitle2: "Equipo Experimentado",
    missaoSubTitle2Text:
      "El equipo de PYRUS posee una sólida experiencia en el mercado inmobiliario, adquirida a lo largo de años de actuación en proyectos de diferentes escalas y complejidades.",
    missaoLema:
      '"Visión global, ejecución precisa. Transformamos activos inmobiliarios en valor real."',

    // SLIDER
    slider1logoTitle: "Soluciones <br /> Inmobiliarias",
    slider1info1: "Años de <br /> experiencia",
    slider1info2: "Países",
    slider2title: "Negocios Globales",
    slider2local: "Braga, <br> Portugal",
    slider3title: "Negocios Globales",
    slider3local: "Santo Domingo, <br> República Dominicana",
    slider4title: "Negocios Globales",
    slider4local: "Bucarest, <br> Rumanía",

    // FOCO
    focoTitle: "Nuestro Enfoque",
    focoSub1: "Adquisición y Desarrollo de Proyectos",
    focoSub2: "Apoyo en Negociaciones y Transacciones",
    focoSub3: "Gestión Personalizada de Inversiones",

    focoSub1Title1: "Identificación de Oportunidades",
    focoSub1Title1Text:
      "Localización de inmuebles y activos con alto potencial de valorización, reconversión o desarrollo, alineados con los objetivos del inversor.",
    focoSub1Title2: "Estudios de Viabilidad y Marco Legal",
    focoSub1Title2Text:
      "Análisis técnico, jurídico y financiero de los activos, incluyendo escenarios de uso, licencias y retorno potencial.",
    focoSub1Title3: "Estructuración del Proyecto",
    focoSub1Title3Text:
      "Definición del concepto, modelo de negocio y estrategia de desarrollo para cada activo o emprendimiento.",
    focoSub1Title4: "Planificación de la Ejecución",
    focoSub1Title4Text:
      "Organización de las fases del proyecto: adquisición, contratación de equipos, presupuestos, cronogramas y estrategias de salida.",

    focoSub2Title1: "Representación Estratégica",
    focoSub2Title1Text:
      "Actuación en nombre de inversores o propietarios para defender intereses en transacciones inmobiliarias o empresariales.",
    focoSub2Title2: "Preparación de Activos para la Transacción",
    focoSub2Title2Text:
      "Análisis técnico, jurídico y financiero de los activos, incluyendo escenarios de uso, licencias y retorno potencial.",
    focoSub2Title3: "Intermediación Técnica",
    focoSub2Title3Text:
      "Soporte especializado en negociaciones complejas que involucren activos con particularidades legales u operativas.",
    focoSub2Title4: "Coordinación de Due Diligence",
    focoSub2Title4Text:
      "Gestión de procesos de análisis técnico, jurídico y financiero para garantizar decisiones informadas y seguras.",

    focoSub3Title1: "Modelos de Inversión a Medida",
    focoSub3Title1Text:
      "Estrategias diseñadas según el perfil y los objetivos de cada inversor, con un acompañamiento cercano.",
    focoSub3Title2: "Gestión de Cartera Inmobiliaria",
    focoSub3Title2Text:
      "Seguimiento continuo de activos y proyectos, con informes de progreso y apoyo en la toma de decisiones.",
    focoSub3Title3: "Monitoreo de Mercados",
    focoSub3Title3Text:
      "Actualización constante sobre tendencias y contextos relevantes a nivel local e internacional.",
    focoSub3Title4: "Soporte Continuo y Confidencialidad",
    focoSub3Title4Text:
      "Relación cercana y estratégica con cada cliente, garantizando discreción y alineación a largo plazo.",

    // FORMULARIO
    formTitle: "Haga una Solicitud",
    formSolicit: "Tipo de Solicitud:",
    formSolicitOpt1: "Quiero vender una propiedad",
    formSolicitOpt2: "Busco un socio para un proyecto",
    formSolicitOpt3: "Quiero comprar una propiedad",
    formSolicitOpt4: "Otro",
    formSolicitOpt4Box: "Introduzca texto",
    formAssunto: "Asunto:",
    formAssuntoBox: "Inserte aquí su texto",
    formDescrpt: "Descripción:",
    formContactoCheck: "Agendar Contacto (opcional)",
    formContactoData: "Propuesta de Fecha para reunión/visita",
    formContactoHora: "Hora",
    formNome: "Nombre:",
    formNomeBox: "Nombre",
    formTel: "Teléfono:",
    formTelBox: "Teléfono",
    formEmail: "Correo electrónico:",
    formEmailBox: "Correo",
    formContactoPref: "Prefiere ser contactado por:",
    formContactoPref1: "Correo electrónico",
    formContactoPref2: "Teléfono",
    formContactoPref3: "WhatsApp",
    formRGPD:
      "Autorizo la recolección y el tratamiento de mis datos personales para los fines indicados, en conformidad con el RGPD.",
    formSubmit: "Enviar Solicitud",
    
    // PIE DE PÁGINA
    rodapeContactos: "Contactos",
    rodapeContactosMorada: "Dirección:",
    rodapeContactosMorada1:
      "Rua Bernardo Sequeira 213 <br> 4715-671 Braga, Portugal",
    rodapeContactosTel: "Teléfono:",
    rodapeContactosTel1: "+351253897123",
    rodapeContactosTel2: "Llamada a la red fija nacional",
    rodapeContactosEmail: "Correo electrónico:",
    rodapePrivacidade: "Política de Privacidad",

    // PRIVACIDAD
    privacidadeTitulo: "Política de Privacidad",
    privacidadeText1:
      "PYRUS se compromete a proteger la privacidad y seguridad de los datos personales, en conformidad con el Reglamento General de Protección de Datos (RGPD) y la legislación nacional aplicable.",
    privacidadeSub1: "(1) Datos Recogidos y Finalidad",
    privacidadeSub1Text1:
      "Identificación y Contactos: Nombre, correo, teléfono, cargo y empresa.",
    privacidadeSub1Text2:
      "Datos de Navegación: Cookies, dirección IP, dispositivo y preferencias.",
    privacidadeSub1Text3: "Los datos se utilizan para:",
    privacidadeSub1List1: "Prestación de servicios y soporte;",
    privacidadeSub1List2: "Comunicación y envío de información;",
    privacidadeSub1List3: "Cumplimiento de obligaciones legales;",
    privacidadeSub1List4: "Mejora de la experiencia en el sitio web.",
    privacidadeSub2: "(2) Compartición de Datos",
    privacidadeSub2Text1:
      "No vendemos ni comercializamos datos personales. Podemos compartir con:",
    privacidadeSub2List1:
      "Subcontratistas que garanticen conformidad con el RGPD;",
    privacidadeSub2List2: "Autoridades legales, cuando sea requerido.",
    privacidadeSub3: "(3) Seguridad y Retención de Datos",
    privacidadeSub3Text1:
      "Implementamos medidas técnicas y organizativas para proteger los datos contra accesos indebidos, incluyendo encriptación, firewalls y control de accesos. Los datos se mantienen solo durante el período necesario para cumplir las finalidades legales y contractuales.",
    privacidadeSub4: "(4) Derechos de los Titulares",
    privacidadeSub4Text1: "En los términos del RGPD, puede:",
    privacidadeSub4List1: "Acceder, rectificar o eliminar sus datos;",
    privacidadeSub4List2: "Oponerse al tratamiento o solicitar limitación;",
    privacidadeSub4List3: "Solicitar la portabilidad de los datos.",
    privacidadeSub4Text2:
      "Para ejercer sus derechos, contáctenos: pyrus@pyrus.pt .",
    privacidadeSub5: "(5) Cookies",
    privacidadeSub5Text1:
      "Utilizamos cookies para mejorar la experiencia en el sitio web. Puede configurar sus preferencias en el navegador.",
    privacidadeSub6: "(6) Cambios y Contacto",
    privacidadeSub6Text1:
      "Esta política puede actualizarse. Para más información, contáctenos:",
    privacidadeSub6List1: "Correo: pyrus@pyrus.pt",
    privacidadeSub6List2:
      "Dirección: Rua Bernardo Sequeira, nº 231, Sala 3 4715-010 Braga, Portugal",
    privacidadeSub6List3: "Teléfono: +351 253 176 493",
    privacidadeSign: "Agosto de 2025 | La Administración",
  },
  ro: {
    // MENU
    missao: "Misiune",
    foco: "Focus",
    contacte: "Contactați-ne",

    // HERO
    mainHeading1: "Soluții <br /> Imobiliare",
    mainHeading2: "Personalizăm <br /> investiția dvs.",
    mainContacte: "Contactați-ne",

    // MISIUNE
    missaoTitle: "Misiune",
    missaoSubTitle1: "PYRUS - Imobiliare cu Acoperire Internațională",
    missaoSubTitle1Text:
      "Cu o experiență profesională solidă și cunoștințe profunde ale piețelor ibero-americane și europene, PYRUS activează în identificarea și dezvoltarea oportunităților imobiliare cu potențial ridicat de apreciere. Analizăm fiecare activ cu o viziune strategică și multifactorială — fezabilitate, achiziție, promovare, construcție și comercializare — și oferim soluții adaptate investitorilor, fondurilor și partenerilor cu ambiții globale.",
    missaoSubTitle2: "Echipă Experimentată",
    missaoSubTitle2Text:
      "Echipa PYRUS are o experiență solidă pe piața imobiliară, dobândită de-a lungul anilor prin proiecte de diferite dimensiuni și complexități.",
    missaoLema:
      '"Viziune globală, execuție precisă. Transformăm activele imobiliare în valoare reală."',

    // SLIDER
    slider1logoTitle: "Soluții <br /> Imobiliare",
    slider1info1: "Ani de <br /> experiență",
    slider1info2: "Țări",
    slider2title: "Afaceri Globale",
    slider2local: "Braga, <br> Portugalia",
    slider3title: "Afaceri Globale",
    slider3local: "Santo Domingo, <br> Republica Dominicană",
    slider4title: "Afaceri Globale",
    slider4local: "București, <br> România",

    // FOCUS
    focoTitle: "Focusul Nostru",
    focoSub1: "Achiziție și Dezvoltare de Proiecte",
    focoSub2: "Sprijin în Negocieri și Tranzacții",
    focoSub3: "Management Personalizat al Investițiilor",

    focoSub1Title1: "Identificarea Oportunităților",
    focoSub1Title1Text:
      "Localizarea proprietăților și activelor cu potențial ridicat de apreciere, reconversie sau dezvoltare, aliniate obiectivelor investitorilor.",
    focoSub1Title2: "Studii de Fezabilitate și Încadrare",
    focoSub1Title2Text:
      "Analiză tehnică, juridică și financiară a activelor, incluzând scenarii de utilizare, licențiere și rentabilitate potențială.",
    focoSub1Title3: "Structurarea Proiectului",
    focoSub1Title3Text:
      "Definirea conceptului, modelului de afaceri și strategiei de dezvoltare pentru fiecare activ sau proiect.",
    focoSub1Title4: "Planificarea Execuției",
    focoSub1Title4Text:
      "Organizarea etapelor proiectului: achiziție, angajarea echipelor, bugete, cronograme și strategii de ieșire.",

    focoSub2Title1: "Reprezentare Strategică",
    focoSub2Title1Text:
      "Acționăm în numele investitorilor sau proprietarilor pentru a le apăra interesele în tranzacții imobiliare sau de afaceri.",
    focoSub2Title2: "Pregătirea Activelor pentru Tranzacție",
    focoSub2Title2Text:
      "Analiză tehnică, juridică și financiară a activelor, incluzând scenarii de utilizare, licențiere și rentabilitate potențială.",
    focoSub2Title3: "Intermediere Tehnică",
    focoSub2Title3Text:
      "Suport specializat în negocieri complexe ce implică active cu particularități legale sau operaționale.",
    focoSub2Title4: "Coordonarea Due Diligence",
    focoSub2Title4Text:
      "Gestionarea proceselor de analiză tehnică, juridică și financiară pentru a asigura decizii informate și sigure.",

    focoSub3Title1: "Modele de Investiții Personalizate",
    focoSub3Title1Text:
      "Strategii concepute în funcție de profilul și obiectivele fiecărui investitor, cu monitorizare atentă.",
    focoSub3Title2: "Management al Portofoliului Imobiliar",
    focoSub3Title2Text:
      "Monitorizare continuă a activelor și proiectelor, cu rapoarte de progres și suport în luarea deciziilor.",
    focoSub3Title3: "Monitorizarea Piețelor",
    focoSub3Title3Text:
      "Actualizare constantă privind tendințele și contextul relevant la nivel local și internațional.",
    focoSub3Title4: "Suport Continu și Confidențialitate",
    focoSub3Title4Text:
      "Relație strânsă și strategică cu fiecare client, asigurând discreție și aliniere pe termen lung.",

    // FORMULAR
    formTitle: "Trimiteți o Solicitare",
    formSolicit: "Tipul Solicitării:",
    formSolicitOpt1: "Vreau să vând o proprietate",
    formSolicitOpt2: "Caut un partener pentru un proiect",
    formSolicitOpt3: "Vreau să cumpăr o proprietate",
    formSolicitOpt4: "Altceva",
    formSolicitOpt4Box: "Introduceți text",
    formAssunto: "Subiect:",
    formAssuntoBox: "Introduceți textul dvs. aici",
    formDescrpt: "Descriere:",
    formContactoCheck: "Programare Contact (opțional)",
    formContactoData: "Propunere Dată pentru întâlnire/vizită",
    formContactoHora: "Ora",
    formNome: "Nume:",
    formNomeBox: "Nume",
    formTel: "Telefon:",
    formTelBox: "Telefon",
    formEmail: "E-mail:",
    formEmailBox: "E-mail",
    formContactoPref: "Metoda preferată de contact:",
    formContactoPref1: "E-mail",
    formContactoPref2: "Telefon",
    formContactoPref3: "WhatsApp",
    formRGPD:
      "Autorizez colectarea și prelucrarea datelor mele personale în scopurile indicate, în conformitate cu RGPD.",

    // FOOTER
    rodapeContactos: "Contacte",
    rodapeContactosMorada: "Adresă:",
    rodapeContactosMorada1:
      "Rua Bernardo Sequeira 213 <br> 4715-671 Braga, Portugalia",
    rodapeContactosTel: "Telefon:",
    rodapeContactosTel1: "+351253897123",
    rodapeContactosTel2: "Apel către rețeaua națională fixă",
    rodapeContactosEmail: "E-mail:",
    rodapePrivacidade: "Politica de Confidențialitate",

    // PRIVACY
    privacidadeTitulo: "Politica de Confidențialitate",
    privacidadeText1:
      "PYRUS se angajează să protejeze confidențialitatea și securitatea datelor personale, în conformitate cu Regulamentul General privind Protecția Datelor (RGPD) și legislația națională aplicabilă.",
    privacidadeSub1: "(1) Date Colectate și Scop",
    privacidadeSub1Text1: "Identificare și Contacte: Nume, e-mail, telefon, funcție și companie.",
    privacidadeSub1Text2: "Date de Navigare: Cookies, adresă IP, dispozitiv și preferințe.",
    privacidadeSub1Text3: "Datele sunt utilizate pentru:",
    privacidadeSub1List1: "Furnizarea de servicii și suport;",
    privacidadeSub1List2: "Comunicare și transmitere de informații;",
    privacidadeSub1List3: "Respectarea obligațiilor legale;",
    privacidadeSub1List4: "Îmbunătățirea experienței pe website.",
    privacidadeSub2: "(2) Partajarea Datelor",
    privacidadeSub2Text1: "Nu vindem și nu comercializăm date personale. Putem partaja cu:",
    privacidadeSub2List1: "Subcontractanți care asigură conformitatea cu RGPD;",
    privacidadeSub2List2: "Autorități legale, atunci când este necesar.",
    privacidadeSub3: "(3) Securitatea și Păstrarea Datelor",
    privacidadeSub3Text1:
      "Implementăm măsuri tehnice și organizaționale pentru a proteja datele împotriva accesului neautorizat, incluzând criptare, firewall-uri și control al accesului. Datele sunt păstrate doar pe perioada necesară pentru îndeplinirea scopurilor legale și contractuale.",
    privacidadeSub4: "(4) Drepturile Persoanelor Vizate",
    privacidadeSub4Text1: "În conformitate cu RGPD, puteți:",
    privacidadeSub4List1: "Accesa, rectifica sau șterge datele dvs.;",
    privacidadeSub4List2: "Vă opuneți prelucrării sau solicitați limitarea;",
    privacidadeSub4List3: "Solicitați portabilitatea datelor.",
    privacidadeSub4Text2: "Pentru a vă exercita drepturile, contactați-ne: pyrus@pyrus.pt.",
    privacidadeSub5: "(5) Cookies",
    privacidadeSub5Text1:
      "Utilizăm cookies pentru a îmbunătăți experiența pe site. Vă puteți configura preferințele în browser.",
    privacidadeSub6: "(6) Modificări și Contact",
    privacidadeSub6Text1: "Această politică poate fi actualizată. Pentru mai multe informații, contactați-ne:",
    privacidadeSub6List1: "E-mail: pyrus@pyrus.pt",
    privacidadeSub6List2:
      "Adresă: Rua Bernardo Sequeira, nr. 231, Sala 3 4715-010 Braga, Portugalia",
    privacidadeSub6List3: "Telefon: +351 253 176 493",
    privacidadeSign: "August 2025 | Administrația",
  },
};