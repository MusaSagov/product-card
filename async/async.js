const saveUsersToStorage = users => localStorage.setItem('users', JSON.stringify(users));
const loadUsersFromStorage = () => JSON.parse(localStorage.getItem('users') || '[]');

const showStatus = (text, isError = false) => {
    const status = document.getElementById('status');

    status.textContent = text;
    status.className = isError ? 'error' : 'loading';
    status.style.display = 'block';

    setTimeout(() => status.style.display = 'none', 3500);
};

const showUsers = users => {
    const container = document.getElementById('users-container');

    if (users.length) {
        renderUsersList(container, users);
    } else {
        container.innerHTML = '<p>Нет пользователей</p>';
    }
};

const renderUsersList = (container, users) => {
    container.innerHTML = users
        .map(user => `
            <div class="user-card">
                <h3>${user.name} ${user.surname}</h3>
                <p>${user.email}, ${user.age} лет</p>
                <button class="delete-btn" data-id="${user.id}">
                    Удалить
                </button>
            </div>
        `)
        .join('');
};

async function loadUsers() {
    let users = loadUsersFromStorage();

    if (users.length) {
        showUsers(users);
    } else {
        console.log('localStorage пуст, делаем fetch');
        showStatus('Данные загружаются');
        
        try {
            await new Promise(r => setTimeout(r, 5000));
            const users = await fetch('users.json').then(r => r.json());

            saveUsersToStorage(users);
            showUsers(users);
            showStatus('Загружено!');
        } catch {
            showStatus('Ошибка при загрузке данных', true);
        }
    }

    createButtons();
}

const createButtons = () => {
    document.getElementById('show-all').onclick = () => {
        const users = loadUsersFromStorage();

        showStatus(users.length ? 'Показаны все пользователи!' : 'Нет пользователей');
        showUsers(users);
    };
    
    document.getElementById('clear-storage').onclick = () => {
        localStorage.removeItem('users');
        showUsers([]);
        showStatus('Удалено');
    };
};

document.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
        saveUsersToStorage(loadUsersFromStorage().filter(u => u.id != e.target.dataset.id));
        showUsers(loadUsersFromStorage());
        showStatus('Удален');
    }
});

document.addEventListener('DOMContentLoaded', loadUsers);
