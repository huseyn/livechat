const startedChatBtn = document.getElementById('starterBox');
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');

const startChat = () => {
    startedChatBtn.classList.add('nonvisible');
    chatBox.classList.remove('nonvisible');
}

const getInput = () => {
    if (chatInput.value === '') {
        return;
    } else {
        return chatInput.value;
    }
}

const addMessageHandler = () => {
    const message = getInput();
    let innerText = '';
    const li = document.createElement('li');
    const ul = document.getElementById('chatList');

    if (message.match(new RegExp(/^[A-Z]/)) !== null) {
        li.className = 'left';
        innerText = ` 
        <img src="assets/images/operator.jpg" alt="">
        <p>${message}</p>
        `;
    } else {
        li.className = 'right';
        innerText = ` 
        <p>${message}</p>
        <img src="assets/images/user.jpg" alt="">
        `;
    }

    li.innerHTML = innerText;

    ul.append(li);
    chatInput.value = '';
}

chatInput.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        addMessageHandler();
        const chatList = document.getElementById('chatList');
        chatList.scrollTop = chatList.scrollHeight;

    }
});