const argsContainer = document.querySelector('.calc-args');
const addArgBtn = document.getElementById('calc-add-arg');
const form = document.getElementById('calc-form');
const resultDiv = document.getElementById('calc-result');

function createArgInput() {
    const div = document.createElement('div');
    div.className = 'calc-arg';

    const input = document.createElement('input');
    input.className = 'calc-arg-input';
    input.name = 'args';

    const btn = document.createElement('button');
    btn.className = 'button-secondary remove-arg';
    btn.type = 'button';
    btn.textContent = 'x';

    btn.addEventListener('click', function() {
        if (argsContainer.children.length > 1) {
            div.remove();
            updateRemoveButtons();
        }
    });

    div.appendChild(input);
    div.appendChild(btn);
    return div;
}

function addArgInput() {
    argsContainer.appendChild(createArgInput());
    updateRemoveButtons();
}

function updateRemoveButtons() {
    const removeBtns = argsContainer.querySelectorAll('.remove-arg');
    if (argsContainer.children.length === 1) {
        removeBtns[0].disabled = true;
        return;
    }

    removeBtns.forEach(btn => {
        btn.disabled = false;
    });
}

addArgBtn.addEventListener('click', addArgInput);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // TODO: handle form submission
});

addArgInput()
