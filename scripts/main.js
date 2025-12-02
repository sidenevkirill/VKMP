// Данные платформ
const platformsData = [
    {
        id: 'windows',
        name: 'Windows',
        icon: 'fab fa-windows',
        badge: 'Десктопная версия',
        color: 'var(--windows-blue)',
        description: 'Полноценное приложение для Windows с графическим интерфейсом. Удобное управление, мини-плеер и интеграция с системой.',
        features: [
            'Графический интерфейс',
            'Мини-плеер в трее',
            'Горячие клавиши',
            'Автообновление'
        ],
        githubUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Destkop',
        downloadUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Destkop/releases'
    },
    {
        id: 'linux',
        name: 'Linux (Ubuntu)',
        icon: 'fab fa-linux',
        badge: 'Терминальная версия',
        color: 'var(--linux-green)',
        description: 'Консольное приложение для Linux с поддержкой виртуального окружения. Легковесное решение для серверов и любителей терминала.',
        features: [
            'Консольный интерфейс',
            'Виртуальное окружение',
            'Автоматическая установка',
            'Поддержка Ubuntu/Debian'
        ],
        githubUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Ubuntu',
        downloadUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Ubuntu'
    },
    {
        id: 'android',
        name: 'Android',
        icon: 'fab fa-android',
        badge: 'Мобильная версия',
        color: 'var(--android-green)',
        description: 'Мобильное приложение для Android с оптимизированным интерфейсом. Слушайте музыку в любом месте с вашего смартфона.',
        features: [
            'Адаптивный интерфейс',
            'Фоновое воспроизведение',
            'Офлайн режим',
            'Виджет для рабочего стола'
        ],
        githubUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Android',
        downloadUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Android/releases'
    },
    {
        id: 'console',
        name: 'Console (Кроссплатформенный)',
        icon: 'fas fa-terminal',
        badge: 'Универсальная консольная версия',
        color: 'var(--terminal-purple)',
        description: 'Универсальная консольная версия, работающая на всех платформах с Python. Максимальная гибкость и контроль для продвинутых пользователей.',
        features: [
            'Кроссплатформенность',
            'Максимальная функциональность',
            'Поддержка Python 3.6+',
            'Расширенное управление'
        ],
        githubUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Console',
        downloadUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Console'
    }
];

// Данные возможностей
const featuresData = [
    {
        icon: 'fas fa-music',
        title: 'Вся ваша музыка',
        description: 'Доступ ко всей вашей библиотеке ВКонтакте, включая треки, альбомы и плейлисты.'
    },
    {
        icon: 'fas fa-user-friends',
        title: 'Музыка друзей',
        description: 'Открывайте для себя новую музыку через библиотеки ваших друзей.'
    },
    {
        icon: 'fas fa-search',
        title: 'Умный поиск',
        description: 'Поиск по всей базе VK Музыки с поддержкой рекомендаций.'
    },
    {
        icon: 'fas fa-download',
        title: 'Скачивание',
        description: 'Скачивайте треки для офлайн-прослушивания с сохранением метаданных.'
    },
    {
        icon: 'fas fa-sliders-h',
        title: 'Гибкие настройки',
        description: 'Настройте плеер под свои нужды с множеством опций.'
    },
    {
        icon: 'fas fa-code',
        title: 'Открытый исходный код',
        description: 'Весь код открыт на GitHub. Участвуйте в разработке или создавайте свои версии.'
    }
];

// Данные таблицы сравнения
const comparisonData = [
    { feature: 'Графический интерфейс', windows: true, linux: false, android: true, console: false },
    { feature: 'Консольный интерфейс', windows: false, linux: true, android: false, console: true },
    { feature: 'Мобильный интерфейс', windows: false, linux: false, android: true, console: false },
    { feature: 'Автоматическая установка', windows: true, linux: true, android: true, console: true },
    { feature: 'Кроссплатформенность', windows: false, linux: false, android: false, console: true },
    { feature: 'Фоновое воспроизведение', windows: true, linux: true, android: true, console: true },
    { feature: 'Скачивание музыки', windows: true, linux: true, android: true, console: true },
    { feature: 'Плейлисты', windows: true, linux: true, android: true, console: true }
];

// Данные установки
const installationData = {
    windows: {
        title: 'Установка на Windows',
        description: 'Скачайте и запустите установщик:',
        code: `1. Скачайте установщик с GitHub\n2. Запустите файл VK-Music-Player-Setup.exe\n3. Следуйте инструкциям установщика\n4. После установки запустите приложение\n5. Авторизуйтесь с помощью VK токена`,
        downloadUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Destkop/releases'
    },
    linux: {
        title: 'Установка на Linux (Ubuntu/Debian)',
        description: 'Используйте установочный скрипт:',
        code: `# Клонируйте репозиторий\ngit clone https://github.com/sidenevkirill/VK-Moosic-Player-Ubuntu.git\ncd VK-Moosic-Player-Ubuntu\n\n# Запустите установку\nchmod +x install_ubuntu.sh\n./install_ubuntu.sh\n\n# Запустите программу\n./run.sh`,
        downloadUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Ubuntu'
    },
    android: {
        title: 'Установка на Android',
        description: 'Установите APK файл:',
        code: `1. Скачайте APK файл с GitHub Releases\n2. Разрешите установку из неизвестных источников\n3. Установите приложение\n4. Запустите и авторизуйтесь через VK`,
        warning: 'Внимание: Для установки APK требуется Android 6.0+',
        downloadUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Android/releases'
    },
    console: {
        title: 'Установка Console версии',
        description: 'Универсальная версия для всех платформ с Python:',
        code: `# Клонируйте репозиторий\ngit clone https://github.com/sidenevkirill/VK-Moosic-Player-Console.git\ncd VK-Moosic-Player-Console\n\n# Установите Python зависимости\npip install -r requirements.txt\n\n# Запустите программу\npython main.py\n\n# Или используйте скрипт запуска\n./run.sh  # Linux/Mac\nrun.bat   # Windows`,
        downloadUrl: 'https://github.com/sidenevkirill/VK-Moosic-Player-Console'
    }
};

// Функции для отрисовки компонентов
function renderHeader() {
    const header = document.getElementById('main-header');
    header.innerHTML = `
        <div class="logo">
            <div class="logo-icon">
                <i class="fas fa-headphones"></i>
            </div>
            <div class="logo-text">VK Moosic Player</div>
        </div>
        <h1 class="tagline">Музыка ВКонтакте на всех ваших устройствах</h1>
    `;
}

function renderPlatforms() {
    const grid = document.getElementById('platforms-grid');
    grid.innerHTML = platformsData.map(platform => `
        <div class="platform-card ${platform.id} fade-in">
            <div class="platform-icon">
                <i class="${platform.icon}"></i>
            </div>
            <div class="platform-name">${platform.name}</div>
            <div class="platform-badge">${platform.badge}</div>
            <p class="platform-description">${platform.description}</p>
            <div class="platform-features">
                <ul>
                    ${platform.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="platform-links">
                <a href="${platform.downloadUrl}" target="_blank" class="btn btn-download">
                    <i class="fas fa-download"></i> Скачать для ${platform.id === 'console' ? 'Console' : platform.name}
                </a>
                <a href="${platform.githubUrl}" target="_blank" class="btn btn-github">
                    <i class="fab fa-github"></i> GitHub репозиторий
                </a>
            </div>
        </div>
    `).join('');
}

function renderComparisonTable() {
    const table = document.getElementById('comparison-table');
    table.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Функция</th>
                    <th class="windows-header">Windows</th>
                    <th class="linux-header">Linux</th>
                    <th class="android-header">Android</th>
                    <th class="console-header">Console</th>
                </tr>
            </thead>
            <tbody>
                ${comparisonData.map(row => `
                    <tr>
                        <td>${row.feature}</td>
                        <td>${row.windows ? '<i class="fas fa-check feature-check"></i>' : '<i class="fas fa-times feature-missing"></i>'}</td>
                        <td>${row.linux ? '<i class="fas fa-check feature-check"></i>' : '<i class="fas fa-times feature-missing"></i>'}</td>
                        <td>${row.android ? '<i class="fas fa-check feature-check"></i>' : '<i class="fas fa-times feature-missing"></i>'}</td>
                        <td>${row.console ? '<i class="fas fa-check feature-check"></i>' : '<i class="fas fa-times feature-missing"></i>'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderFeatures() {
    const grid = document.getElementById('features-grid');
    grid.innerHTML = featuresData.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
        </div>
    `).join('');
}

function renderInstallationTabs() {
    const tabsContainer = document.getElementById('installation-tabs');
    const contentsContainer = document.getElementById('tab-contents');
    
    // Отрисовка табов
    tabsContainer.innerHTML = platformsData.map(platform => `
        <button class="tab ${platform.id} ${platform.id === 'windows' ? 'active' : ''}" onclick="showTab('${platform.id}')">
            <i class="${platform.icon}"></i> ${platform.id === 'console' ? 'Console' : platform.name}
        </button>
    `).join('');
    
    // Отрисовка содержимого табов
    contentsContainer.innerHTML = platformsData.map(platform => {
        const data = installationData[platform.id];
        return `
            <div id="${platform.id}-tab" class="tab-content ${platform.id} ${platform.id === 'windows' ? 'active' : ''}">
                <h3>${data.title}</h3>
                <p>${data.description}</p>
                <div class="code-block">
                    ${data.code.replace(/\n/g, '<br>')}
                </div>
                ${data.warning ? `<p style="margin-top: 15px; color: #ff5555;">
                    <i class="fas fa-exclamation-triangle"></i> ${data.warning}
                </p>` : ''}
                <a href="${data.downloadUrl}" target="_blank" class="btn btn-download" style="margin-top: 15px;">
                    <i class="fas fa-download"></i> Скачать последнюю версию для ${platform.id === 'console' ? 'Console' : platform.name}
                </a>
            </div>
        `;
    }).join('');
}

function renderFooter() {
    const footer = document.getElementById('main-footer');
    footer.innerHTML = `
        <div class="footer-links">
            <a href="https://github.com/sidenevkirill" target="_blank" class="footer-link">
                <i class="fab fa-github"></i> Автор проекта
            </a>
            <a href="#" onclick="showTokenHelp()" class="footer-link">
                <i class="fas fa-key"></i> Как получить токен
            </a>
            <a href="#" onclick="showReportIssue()" class="footer-link">
                <i class="fas fa-bug"></i> Сообщить об ошибке
            </a>
            <a href="https://vk.com/railcinec" target="_blank" class="footer-link">
                <i class="fab fa-vk"></i> Паблик ВК
            </a>
        </div>
        <div class="copyright">
            &copy; 2025 VK Moosic Player. Все версии с открытым исходным кодом.<br>
            Разработано Railcinec.
        </div>
    `;
}

// Функции управления табами
window.showTab = function(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Add active class to clicked tab button
    event.target.classList.add('active');
};

// Вспомогательные функции
window.showTokenHelp = function() {
    alert("Как получить токен VK:\n\n1. Перейдите по ссылке: https://oauth.vk.com/authorize?client_id=2685278&scope=audio&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token\n2. Авторизуйтесь в VK\n3. Скопируйте токен из адресной строки (параметр access_token=)\n4. Вставьте токен в программу");
};

window.showReportIssue = function() {
    const activeTab = document.querySelector('.tab.active');
    if (!activeTab) return;
    
    const platform = activeTab.classList[1];
    const repos = {
        windows: 'VK-Moosic-Player-Destkop',
        linux: 'VK-Moosic-Player-Ubuntu',
        android: 'VK-Moosic-Player-Android',
        console: 'VK-Moosic-Player-Console'
    };
    
    const url = `https://github.com/sidenevkirill/${repos[platform]}/issues/new`;
    window.open(url, '_blank');
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderHeader();
    renderPlatforms();
    renderComparisonTable();
    renderFeatures();
    renderInstallationTabs();
    renderFooter();
    
    // Настройка копирования кода
    document.querySelectorAll('.code-block').forEach(block => {
        block.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const original = this.innerHTML;
                this.innerHTML = '<span style="color: #3ddc84">✓ Код скопирован в буфер обмена!</span>';
                setTimeout(() => {
                    this.innerHTML = original;
                }, 1500);
            });
        });
    });
    
    // Настройка Intersection Observer для анимаций
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.platform-card, .feature-card, section').forEach(el => {
        observer.observe(el);
    });
});
