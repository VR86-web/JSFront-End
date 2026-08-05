document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const profileEl = document.querySelectorAll('.profile');

    profileEl.forEach(element => {
        const btn = element.querySelector('button');
        const hiddenFieldsDiv = element.querySelector('.hidden-fields');
        const unlockRadio = element.querySelector('input[id$="Unlock"]');

        btn.addEventListener('click', () => {

            if (!unlockRadio.checked) {
                return;
            }

            if (btn.textContent === 'Show more') {
                hiddenFieldsDiv.classList.remove('active');
                btn.textContent = 'Hide it';
            } else {
                hiddenFieldsDiv.classList.add('active');
                btn.textContent = 'Show more';
            }

        });
    });
}