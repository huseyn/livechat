const startedChatBtn = document.getElementById('starterBox');
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const deleteBtn = document.getElementById('deletebtn');
const deleteIcon = document.getElementById('deleteicon');

const messages = [];

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

const showDeleteBtn = function () {
    deleteIcon.addEventListener('click', deleteMessage.bind(this));

    deleteIcon.classList.toggle('nonvisible');
    deleteBtn.classList.toggle('nonvisible');
}

const deleteMessage = function () {
    const removedEl = document.getElementById(this.id);
    this.remove();
}

const addMessageHandler = () => {
    const message = getInput();
    let innerText = '';
    const li = document.createElement('li');
    const ul = document.getElementById('chatList');

    const messageObj = {
        id: Math.random(),
        text: message
    };

    li.addEventListener('click', showDeleteBtn.bind(li));



    li.id = messageObj.id;

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
    messages.push(messageObj);
    console.log(messages);
    chatInput.value = '';
}

chatInput.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        addMessageHandler();
        const chatList = document.getElementById('chatList');
        chatList.scrollTop = chatList.scrollHeight;

    }
});