window.addEventListener('load', adjustFooterPosition);
window.addEventListener('resize', adjustFooterPosition);

// Variável global para acompanhar o estado da linguagem
let isEnglish = false; // Começa em português (false representa português)

function adjustFooterPosition() {
    const contentHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;
    const footer = document.querySelector('footer');

    if (contentHeight > windowHeight) {
        footer.style.position = 'relative';
        footer.style.bottom = 'auto';
    } else {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
    }
}

function toggleLanguage() {
    const translations = {
        '2023 Paulo Júnior. Todos os direitos reservados.': '2023 Paulo Junior. All rights reserved.',
        'Olá me chamo': 'Hello, my name is',
        'Estudante entusiasmado por aprender e inovar na área de Ciber Segurança e Hacking.': 'Student enthusiastic about learning and innovating in the area of Cyber Security and Hacking.',
        'Início': 'Home',
        'Sobre': 'About',
        'Habilidades': 'Skills',
        'Certificações': 'Certifications',
        'Experiências': 'Experience',
        'Contatos': 'Contact',
        'Sobre Mim': 'About Me',
        'Habilidade': 'Skills',
        'Sou um estudante de Ciências da Computação na Universidade Federal de Roraima.': 'Im a Computer Science student at the Federal University of Roraima.',
        'Trabalho no Tribunal de Justiça do Estado de Roraima atualmente como técnico de TI.': 'I currently work at the Court of Justice of the State of Roraima as an IT technician.',
        'Meu entusiasmo por Ciber Segurança e Hacking Etico me levou a explorar áreas como desenvolvimento web.': 'My enthusiasm for Cyber Security and Ethical Hacking led me to explore areas such as web development.',
        'Programação em Python': 'Python programming',
        'Desenvolvimento Web (HTML, CSS, JavaScript)': 'Web Development (HTML, CSS, JavaScript)',
        'Segurança Cibernética': 'Cyber Security',
        'Análise Forense': 'Forensic Analysis',
        'Projetos Acadêmicos': 'Academic Projects',
        'Desenvolvi diversos projetos.': 'I developed several projects.',
        'Experiência': 'Experience',
        'Trabalhei como estagiário no TJRR, onde tive a oportunidade de aprimorar minhas habilidades.': 'I worked as an intern at TJRR, where I had the opportunity to improve my skills.',
        'Contato': 'Contact',
        'Meu Email: juniorrkcm@outlook.com': 'My Email: juniorrkcm@outlook.com',
        'Formulário de Contato': 'Contact Form',
        'Nome:': 'Name:',
        'Assunto:': 'Subject:',
        'Sua Mensagem:': 'Your message:',
        'Enviar': 'Send',
        // Adicionar mais traduções aqui
    };

    const elements = document.querySelectorAll('.translate');
    elements.forEach(element => {
        const originalText = element.getAttribute('data-original');
        const translatedText = translations[originalText];

        if (translatedText && isEnglish) {
            element.textContent = translatedText;
        } else {
            element.textContent = originalText;
        }
    });

    isEnglish = !isEnglish;
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}