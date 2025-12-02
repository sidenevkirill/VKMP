// Определение платформы пользователя
function detectUserPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('windows')) {
        return 'windows';
    } else if (userAgent.includes('linux')) {
        return 'linux';
    } else if (userAgent.includes('android')) {
        return 'android';
    } else if (userAgent.includes('mac')) {
        return 'console'; // Mac пользователям предлагаем консольную версию
    }
    
    return 'console'; // По умолчанию консольная версия
}

// Автоматический выбор таба при загрузке
function autoSelectPlatformTab() {
    const platform = detectUserPlatform();
    const tabElement = document.querySelector(`.tab.${platform}`);
    
    if (tabElement) {
        // Эмулируем клик по табу
        tabElement.click();
        
        // Прокручиваем к секции установки
        setTimeout(() => {
            document.querySelector('.installation').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 500);
    }
}

// Показ уведомления для мобильных пользователей
function showMobileNotice() {
    const platform = detectUserPlatform();
    
    if (platform === 'android') {
        // Для Android пользователей показываем уведомление
        const notice = document.createElement('div');
        notice.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--android-green);
            color: #000;
            padding: 15px;
            border-radius: 10px;
            z-index: 1000;
            max-width: 300px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            font-family: 'Roboto Mono', monospace;
            font-weight: bold;
        `;
        notice.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fab fa-android"></i>
                <span>Рекомендуем Android версию!</span>
            </div>
            <div style="margin-top: 10px; font-size: 0.9em; font-weight: normal;">
                Установите приложение для лучшего опыта на вашем устройстве.
            </div>
            <button onclick="this.parentElement.remove()" style="
                position: absolute;
                top: 5px;
                right: 5px;
                background: none;
                border: none;
                color: #000;
                cursor: pointer;
                font-size: 1.2em;
            ">×</button>
        `;
        
        document.body.appendChild(notice);
        
        // Автоматически скрыть через 10 секунд
        setTimeout(() => {
            if (notice.parentElement) {
                notice.remove();
            }
        }, 10000);
    }
}

// Показ баннера для Windows пользователей
function showWindowsBanner() {
    const platform = detectUserPlatform();
    
    if (platform === 'windows') {
        const banner = document.createElement('div');
        banner.style.cssText = `
            background: linear-gradient(90deg, var(--windows-blue), #005a9e);
            color: white;
            text-align: center;
            padding: 10px;
            font-family: 'Roboto Mono', monospace;
            position: relative;
            margin-bottom: 20px;
            border-radius: 5px;
        `;
        banner.innerHTML = `
            <span>🎵 Используете Windows? Скачайте нашу десктопную версию для лучшего опыта!</span>
            <button onclick="showTab('windows'); this.parentElement.remove()" style="
                margin-left: 15px;
                background: white;
                color: var(--windows-blue);
                border: none;
                padding: 5px 15px;
                border-radius: 20px;
                cursor: pointer;
                font-weight: bold;
                font-family: 'Roboto Mono', monospace;
            ">Перейти к установке</button>
            <button onclick="this.parentElement.remove()" style="
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 1.2em;
            ">×</button>
        `;
        
        const container = document.querySelector('.container');
        container.insertBefore(banner, container.firstChild);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Даем время отрисовать весь контент
    setTimeout(() => {
        autoSelectPlatformTab();
        showMobileNotice();
        showWindowsBanner();
    }, 1000);
});

// Экспорт функций для использования в других скриптах
window.detectUserPlatform = detectUserPlatform;
window.autoSelectPlatformTab = autoSelectPlatformTab;
