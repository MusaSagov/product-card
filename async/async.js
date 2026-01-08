const saveUsersToStorage = users => localStorage.setItem('users', JSON.stringify(users));
const getUsersFromStorage = () => JSON.parse(localStorage.getItem('users') || '[]');

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
    const users = getUsersFromStorage();

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

    initButtons();
}

const initButtons = () => {
    document.getElementById('show-all').onclick = () => {
        const users = getUsersFromStorage();

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
        saveUsersToStorage(getUsersFromStorage().filter(u => u.id != e.target.dataset.id));
        showUsers(getUsersFromStorage());
        showStatus('Удален');
    }
});

document.addEventListener('DOMContentLoaded', loadUsers);
