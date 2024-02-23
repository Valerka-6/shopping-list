/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
const sendInput = document.querySelector('#input');
const itemsList = document.querySelector('.items');


sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemsListiesText = sendInput.value;

        const itemNew = document.createElement('div');
        itemNew.classList.add('element')
        itemNew.textContent = itemsListiesText;
        itemNew.addEventListener('click', function() {
            itemNew.classList.toggle('done');
        })


        if (itemsListiesText != '') {
            itemsList.append(itemNew);
        }

        sendInput.value = '';
    }
})