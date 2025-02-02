const capitales = {
    "Afghanistan": "Kaboul",
    "Afrique du Sud": "Pretoria (administrative), Le Cap (législative), Bloemfontein (judiciaire)",
    "Albanie": "Tirana",
    "Algérie": "Alger",
    "Allemagne": "Berlin",
    "Andorre": "Andorre-la-Vieille",
    "Angola": "Luanda",
    "Antigua-et-Barbuda": "Saint John's",
    "Arabie Saoudite": "Riyad",
    "Argentine": "Buenos Aires",
    "Arménie": "Erevan",
    "Australie": "Canberra",
    "Autriche": "Vienne",
    "Azerbaïdjan": "Bakou",
    "Bahamas": "Nassau",
    "Bahreïn": "Manama",
    "Bangladesh": "Dacca",
    "Barbade": "Bridgetown",
    "Belgique": "Bruxelles",
    "Bélarus": "Minsk",
    "Bélize": "Belmopan",
    "Bénin": "Porto-Novo (officielle), Cotonou (économique)",
    "Bhoutan": "Thimphou",
    "Bolivie": "Sucre (constitutionnelle), La Paz (administrative)",
    "Bosnie-Herzégovine": "Sarajevo",
    "Botswana": "Gaborone",
    "Brésil": "Brasília",
    "Brunei": "Bandar Seri Begawan",
    "Bulgarie": "Sofia",
    "Burkina Faso": "Ouagadougou",
    "Burundi": "Bujumbura (économique), Gitega (politique)",
    "Cambodge": "Phnom Penh",
    "Cameroun": "Yaoundé",
    "Canada": "Ottawa",
    "Cap-Vert": "Praia",
    "Chili": "Santiago",
    "Chine": "Pékin",
    "Chypre": "Nicosie",
    "Colombie": "Bogota",
    "Comores": "Moroni",
    "Congo (République du)": "Brazzaville",
    "Congo (République Démocratique du)": "Kinshasa",
    "Cook (Îles)": "Avarua",
    "Corée du Nord": "Pyongyang",
    "Corée du Sud": "Séoul",
    "Costa Rica": "San José",
    "Croatie": "Zagreb",
    "Cuba": "La Havane",
    "Danemark": "Copenhague",
    "Djibouti": "Djibouti",
    "Dominique": "Roseau",
    "Égypte": "Le Caire",
    "El Salvador": "San Salvador",
    "Émirats arabes unis": "Abou Dhabi",
    "Équateur": "Quito",
    "Érythrée": "Asmara",
    "Espagne": "Madrid",
    "Estonie": "Tallinn",
    "Eswatini": "Mbabane (administrative), Lobamba (législative)",
    "États-Unis": "Washington, D.C.",
    "Éthiopie": "Addis-Abeba",
    "Fidji": "Suva",
    "Finlande": "Helsinki",
    "France": "Paris",
    "Gabon": "Libreville",
    "Gambie": "Banjul",
    "Géorgie": "Tbilissi",
    "Ghana": "Accra",
    "Grèce": "Athènes",
    "Grenade": "Saint-Georges",
    "Guatemala": "Guatemala",
    "Guinée": "Conakry",
    "Guinée-Bissau": "Bissau",
    "Guyana": "Georgetown",
    "Haïti": "Port-au-Prince",
    "Honduras": "Tegucigalpa",
    "Hongrie": "Budapest",
    "Inde": "New Delhi",
    "Indonésie": "Jakarta",
    "Irak": "Bagdad",
    "Iran": "Téhéran",
    "Irlande": "Dublin",
    "Islande": "Reykjavik",
    "Israël": "Jérusalem",
    "Italie": "Rome",
    "Jamaïque": "Kingston",
    "Japon": "Tokyo",
    "Jordanie": "Amman",
    "Kazakhstan": "Nour-Soultan",
    "Kenya": "Nairobi",
    "Kirghizistan": "Bichkek",
    "Kiribati": "Tarawa",
    "Koweït": "Koweït",
    "Laos": "Vientiane",
    "Lesotho": "Maseru",
    "Lettonie": "Riga",
    "Liban": "Beyrouth",
    "Libéria": "Monrovia",
    "Libye": "Tripoli",
    "Liechtenstein": "Vaduz",
    "Lituanie": "Vilnius",
    "Luxembourg": "Luxembourg",
    "Macédoine du Nord": "Skopje",
    "Madagascar": "Antananarivo",
    "Malaisie": "Kuala Lumpur",
    "Malawi": "Lilongwe",
    "Maldives": "Malé",
    "Mali": "Bamako",
    "Malte": "La Valette",
    "Maroc": "Rabat",
    "Marshall (Îles)": "Majuro",
    "Mauritanie": "Nouakchott",
    "Maurice": "Port-Louis",
    "Mexique": "Mexico",
    "Micronésie": "Palikir",
    "Moldavie": "Chișinău",
    "Monaco": "Monaco",
    "Mongolie": "Oulan-Bator",
    "Mozambique": "Maputo",
    "Myanmar": "Naypyidaw",
    "Namibie": "Windhoek",
    "Nauru": "Yaren",
    "Népal": "Katmandou",
    "Nicaragua": "Managua",
    "Niger": "Niamey",
    "Nigeria": "Abuja",
    "Niue": "Alofi",
    "Norvège": "Oslo",
    "Nouvelle-Zélande": "Wellington",
    "Oman": "Mascate",
    "Ouganda": "Kampala",
    "Ouzbékistan": "Tachkent",
    "Pakistan": "Islamabad",
    "Palaos": "Ngerulmud",
    "Panama": "Panama",
    "Papouasie-Nouvelle-Guinée": "Port Moresby",
    "Paraguay": "Asunción",
    "Pays-Bas": "Amsterdam",
    "Pérou": "Lima",
    "Philippines": "Manille",
    "Pologne": "Varsovie",
    "Portugal": "Lisbonne",
    "Qatar": "Doha",
    "République Centrafricaine": "Bangui",
    "République Dominicaine": "Saint-Domingue",
    "République Tchèque": "Prague",
    "Roumanie": "Bucarest",
    "Royaume-Uni": "Londres",
    "Russie": "Moscou",
    "Rwanda": "Kigali",
    "Saint-Kitts-et-Nevis": "Basseterre",
    "Saint-Marin": "Saint-Marin",
    "Saint-Vincent-et-les Grenadines": "Kingstown",
    "Sainte-Lucie": "Castries",
    "Salomon (Îles)": "Honiara",
    "Salvador": "San Salvador",
    "Samoa": "Apia",
    "São Tomé-et-Príncipe": "São Tomé",
    "Sénégal": "Dakar",
    "Serbie": "Belgrade",
    "Seychelles": "Victoria",
    "Sierra Leone": "Freetown",
    "Singapour": "Singapour",
    "Slovaquie": "Bratislava",
    "Slovénie": "Ljubljana",
    "Somalie": "Mogadiscio",
    "Soudan": "Khartoum",
    "Soudan du Sud": "Djouba",
    "Sri Lanka": "Colombo (commerciale), Sri Jayawardenepura Kotte (politique)",
    "Suède": "Stockholm",
    "Suisse": "Berne",
    "Suriname": "Paramaribo",
    "Syrie": "Damas",
    "Tadjikistan": "Douchanbé",
    "Taïwan": "Taipei",
    "Tanzanie": "Dodoma",
    "Tchad": "N'Djamena",
    "Thaïlande": "Bangkok",
    "Timor oriental": "Dili",
    "Togo": "Lomé",
    "Tonga": "Nuku'alofa",
    "Trinité-et-Tobago": "Port-d'Espagne",
    "Tunisie": "Tunis",
    "Turkménistan": "Achgabat",
    "Turquie": "Ankara",
    "Tuvalu": "Funafuti",
    "Ukraine": "Kiev",
    "Uruguay": "Montevideo",
    "Vanuatu": "Port-Vila",
    "Vatican (Cité du)": "Vatican",
    "Venezuela": "Caracas",
    "Vietnam": "Hanoï",
    "Yémen": "Sanaa",
    "Zambie": "Lusaka",
    "Zimbabwe": "Harare"
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestions = Object.entries(capitales);
    currentQuestions.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    score = 0;

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('end-screen').classList.add('hidden');
    document.getElementById('total').textContent = currentQuestions.length;
    document.getElementById('score').textContent = score;

    showNextQuestion();
}

function showNextQuestion() {
    if (currentIndex < currentQuestions.length) {
        document.getElementById('current-country').textContent = currentQuestions[currentIndex][0];
        document.getElementById('answer-input').value = '';
        document.getElementById('feedback').textContent = '';
        document.getElementById('answer-input').focus();
    } else {
        endQuiz();
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const correctAnswer = currentQuestions[currentIndex][1].toLowerCase();
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('score').textContent = score;
        feedback.textContent = "✓ Correct!";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = `✗ Incorrect. La capitale de ${currentQuestions[currentIndex][0]} est ${currentQuestions[currentIndex][1]}.`;
        feedback.className = "feedback incorrect";
    }

    currentIndex++;
    setTimeout(showNextQuestion, 1500);
}

function endQuiz() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');

    const percentage = (score / currentQuestions.length) * 100;
    document.getElementById('final-score').textContent =
        `${score}/${currentQuestions.length} (${percentage.toFixed(1)}%)`;

    let message = '';
    if (percentage === 100) {
        message = "Parfait! Vous êtes un expert en géographie!";
    } else if (percentage >= 75) {
        message = "Excellent travail!";
    } else if (percentage >= 50) {
        message = "Bon travail! Continuez à apprendre!";
    } else {
        message = "Continuez à pratiquer, vous vous améliorerez!";
    }
    document.getElementById('final-message').textContent = message;
}

function restartQuiz() {
    startQuiz();
}

// Permettre la validation avec la touche Entrée
document.getElementById('answer-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});
