// Variável para idioma padrão
let currentLanguage = 'pt';

const translations = {
  pt: {
    title: "Muliba Restaurante",
    subtitle: "Sabor, Elegância e Conforto em Moçambique",
    navSobre: "Sobre",
    navServicos: "Serviços",
    navProgramas: "Programas & Receitas",
    navReservas: "Reservas",
    navContato: "Contato",
    sobreTitulo: "Sobre Nós",
    sobreTexto: "Localizado na Av. Patrice Lumumba, Matola Fomento, o Muliba Restaurante oferece uma experiência gastronômica única, com pratos tradicionais e uma atmosfera acolhedora. Venha nos visitar!",
    servicosTitulo: "Serviços",
    servico1: "Almoço e Jantar",
    servico2: "Eventos & Festas",
    servico3: "Bar & Drinks",
    programasTitulo: "Programas & Receitas",
    programasTexto: "Confira nossas receitas especiais e programas de culinária. Em breve, mais novidades!",
    reservaTitulo: "Faça sua Reserva",
    reservaInfo: "Preencha suas preferências abaixo e envie sua reserva pelo WhatsApp.",
    nomeLabel: "Nome (Opcional)",
    pessoasLabel: "Número de Pessoas",
    dataLabel: "Data",
    horaLabel: "Hora",
    ambienteLabel: "Ambiente Preferido",
    ocasiaoLabel: "Ocasião",
    alergiasLabel: "Alergias ou Restrições",
    btnEnviar: "Enviar Reserva",
    contatoTitulo: "Contato",
    footerText: "&copy; 2024 Muliba Restaurante. Todos os direitos reservados."
  },
  en: {
    title: "Muliba Restaurant",
    subtitle: "Taste, Elegance, and Comfort in Mozambique",
    navSobre: "About",
    navServicos: "Services",
    navProgramas: "Programs & Recipes",
    navReservas: "Reservations",
    navContato: "Contact",
    sobreTitulo: "About Us",
    sobreTexto: "Located on Av. Patrice Lumumba, Matola Fomento, Muliba Restaurant offers a unique gastronomic experience with traditional dishes and a welcoming atmosphere. Come visit us!",
    servicosTitulo: "Services",
    servico1: "Lunch and Dinner",
    servico2: "Events & Parties",
    servico3: "Bar & Drinks",
    programasTitulo: "Programs & Recipes",
    programasTexto: "Check out our special recipes and culinary programs. More news coming soon!",
    reservaTitulo: "Make Your Reservation",
    reservaInfo: "Fill out your preferences below and send your reservation via WhatsApp.",
    nomeLabel: "Name (Optional)",
    pessoasLabel: "Number of People",
    dataLabel: "Date",
    horaLabel: "Time",
    ambienteLabel: "Preferred Environment",
    ocasiaoLabel: "Occasion",
    alergiasLabel: "Allergies or Restrictions",
    btnEnviar: "Send Reservation",
    contatoTitulo: "Contact",
    footerText: "&copy; 2024 Muliba Restaurant. All rights reserved."
  }
};

function setLanguage(lang) {
  currentLanguage = lang;
  updateTexts();
}

function updateTexts() {
  const t = translations[currentLanguage];
  document.getElementById('title').textContent = t.title;
  document.getElementById('subtitle').textContent = t.subtitle;
  document.getElementById('nav-sobre').textContent = t.navSobre;
  document.getElementById('nav-servicos').textContent = t.navServicos;
  document.getElementById('nav-programas').textContent = t.navProgramas;
  document.getElementById('nav-reserva').textContent = t.navReservas;
  document.getElementById('nav-contato').textContent = t.navContato;
  document.getElementById('sobre-title').textContent = t.sobreTitulo;
  document.getElementById('sobre-text').textContent = t.sobreTexto;
  document.getElementById('servicos-title').textContent = t.servicosTitulo;
  document.getElementById('servico1').textContent = t.servico1;
  document.getElementById('servico2').textContent = t.servico2;
  document.getElementById('servico3').textContent = t.servico3;
  document.getElementById('programas-title').textContent = t.programasTitulo;
  document.getElementById('programas-text').textContent = t.programasTexto;
  document.getElementById('reserva-title').textContent = t.reservaTitulo;
  document.getElementById('reserva-info').textContent = t.reservaInfo;
  document.getElementById('label-nome').textContent = t.nomeLabel;
  document.getElementById('label-pessoas').textContent = t.pessoasLabel;
  document.getElementById('label-data').textContent = t.dataLabel;
  document.getElementById('label-hora').textContent = t.horaLabel;
  document.getElementById('label-ambiente').textContent = t.ambienteLabel;
  document.getElementById('label-ocasiao').textContent = t.ocasiaoLabel;
  document.getElementById('label-alergias').textContent = t.alergiasLabel;
  document.getElementById('btn-enviar').textContent = t.btnEnviar;
  document.getElementById('contato-title').textContent = t.contatoTitulo;
  document.getElementById('footer-text').innerHTML = t.footerText;
}

// Envio do formulário
document.getElementById('formReserva').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const pessoas = document.getElementById('pessoas').value.trim();
  const data = document.getElementById('data').value.trim();
  const hora = document.getElementById('hora').value.trim();
  const ambiente = document.getElementById('ambiente').value;
  const ocasiao = document.getElementById('ocasião').value;
  const alergias = document.getElementById('alergias').value.trim();

  const t = translations[currentLanguage];

  let mensagem = `📝 ${t.reservaTitulo}:\n`;
  mensagem += `${t.nomeLabel}: ${nome || 'Não informado'}\n`;
  mensagem += `${t.pessoasLabel}: ${pessoas}\n`;
  mensagem += `${t.dataLabel}: ${data}\n`;
  mensagem += `${t.horaLabel}: ${hora}\n`;
  mensagem += `${t.ambienteLabel}: ${ambiente}\n`;
  mensagem += `${t.ocasiaoLabel}: ${ocasiao}\n`;
  mensagem += `${t.alergiasLabel}: ${alergias || 'Nenhuma'}\n`;
  mensagem += `\n${t.reservaTitulo}. Por favor, confirme sua reserva.`;

  const whatsappNumber = '258827681970';
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
});

// Inicializa o idioma padrão
updateTexts();
