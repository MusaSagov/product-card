const save = users => localStorage.setItem('users', JSON.stringify(users));
const load = () => JSON.parse(localStorage.getItem('users') || '[]');

const msg = (text, isError=false) => {
    const status = document.getElementById('status');
    status.textContent = text;
    status.className = isError ? 'error' : 'loading';
    status.style.display = 'block';
    setTimeout(() => status.style.display = 'none', 3500);
};

const showUsers = users => {
    const container = document.getElementById('usersContainer');
    container.innerHTML = users.length ? 
        users.map(u => `<div class="user-card"><h3>${u.name} ${u.surname}</h3><p>${u.email}, ${u.age}</p><button class="delete-btn" data-id="${u.id}">Удалить</button></div>`).join('') : 
        '<p>Нет пользователей</p>';
};

async function start() {
    let users = load();
    
    if (users.length) {
        console.log('Берем из localStorage, fetch не делаем');
        showUsers(users);
        return createButtons();
    }
    
    console.log('localStorage пуст, делаем fetch');
    msg('Данные загружаются');
    
    try {
        await new Promise(r => setTimeout(r, 5000));
        const data = await fetch('users.json').then(r => r.json());
        save(data.users);
        showUsers(data.users);
        msg('Загружено!');
    } catch {
        msg('Ошибка при загрузке данных', true);
    }
    
    createButtons();
}

const createButtons = () => {
    document.getElementById('controls').innerHTML = 
        '<button onclick="start()">Загрузить</button><button id="all">Все</button><button id="clear">Очистить</button>';
    
    document.getElementById('all').onclick = () => {
        const users = load();
        msg(users.length === document.querySelectorAll('.user-card').length ? 'Уже все!' : 'Показаны все');
        showUsers(users);
    };
    
    document.getElementById('clear').onclick = () => {
        localStorage.removeItem('users');
        showUsers([]);
        msg('Удалено');
    };
};

document.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
        save(load().filter(u => u.id != e.target.dataset.id));
        showUsers(load());
        msg('Удален');
    }
});

document.addEventListener('DOMContentLoaded', start);

