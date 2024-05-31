// Simulação de banco de dados
const database = [
    { question: "Equipamento utilizado para a flutuação no windsurf.", answer: "prancha" },
    { question: "Dispositivo usado para segurar a vela.", answer: "mastro" },
    { question: "Parte inferior da prancha que ajuda na estabilidade e direção.", answer: "quilha" },
    { question: "Parte da vela que se conecta ao mastro e permite controle da direção.", answer: "retranca" },
    { question: "Ação de mudar a direção da prancha virando a vela para o lado oposto.", answer: "cambada" }
];

const crossword = [
    ['p', 'r', 'a', 'n', 'c', 'h', 'a', '', '', ''],
    ['m', 'a', 's', 't', 'r', 'o', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['q', 'u', 'i', 'l', 'h', 'a', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['r', 'e', 't', 'r', 'a', 'n', 'c', 'a', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['c', 'a', 'm', 'b', 'a', 'd', 'a', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']
];

const crosswordContainer = document.getElementById('crossword');
const questionsList = document.getElementById('questions-list');

// Função para criar a cruzadinha
function createCrossword() {
    for (let i = 0; i < crossword.length; i++) {
        for (let j = 0; j < crossword[i].length; j++) {
            const cell = document.createElement('div');
            if (crossword[i][j] !== '') {
                cell.innerHTML = '<input type="text" maxlength="1">';
                cell.firstChild.dataset.letter = crossword[i][j];
            }
            crosswordContainer.appendChild(cell);
        }
    }
}

// Função para preencher as perguntas
function populateQuestions() {
    database.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.question;
        listItem.id = `q${index + 1}`;
        questionsList.appendChild(listItem);
    });
}

// Função para verificar respostas
function checkAnswers() {
    const inputs = document.querySelectorAll('#crossword input');
    inputs.forEach(input => {
        if (input.value === input.dataset.letter) {
            input.style.backgroundColor = 'lightgreen';
        } else {
            input.style.backgroundColor = 'lightcoral';
        }
    });
}

// Evento para verificar respostas quando um campo é preenchido
crosswordContainer.addEventListener('input', checkAnswers);

// Inicializar a cruzadinha e perguntas
createCrossword();
populateQuestions();
