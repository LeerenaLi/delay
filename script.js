'use strict';

const createContainer = () => {
    const container = document.createElement('div');
    container.classList.add('vh-100', 'w-100', 'd-flex',
            'align-items-center', 'justify-content-center', 'flex-column');

    return container;
};

const render = () => {
    const container = createContainer();
    document.body.append(container);

    container.insertAdjacentHTML('beforeend', `
        <label class="form-group mb-3">
            <input type="text" id="input"
            class="form-control" placeholder="ввести задачу">
        </label>
        <p class="output"></p>
    `);
};
render();

const display = () => {
    const input = document.querySelector('#input');
    const paragraph = document.querySelector('.output');


    input.addEventListener('input', (e) => {
        e.preventDefault();
        setTimeout(() => {
            paragraph.textContent = input.value;
            console.log('input.value: ', input.value);
        }, 300);
        input.addEventListener('change', () => {
            input.value = '';
        });
    });
};
display();

