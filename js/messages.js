fetch('data/messages.json')
    .then(res => res.json())
    .then(messages => {
        const container = document.getElementById('messagesContainer');
        messages.forEach((msg, i) => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-2xl shadow p-4 flex flex-col items-center transition-all';
            card.innerHTML = `
        <img src="${msg.image}" class="w-24 h-24 rounded-full object-cover mb-3" />
        <button class="bg-black text-white px-4 py-2 rounded-full openBtn">Open</button>
        <div class="hidden text-left mt-3" id="msg-${i}">
          <p class="text-sm">${msg.message}</p>
          <p class="text-xs mt-2 font-bold">– ${msg.name}</p>
          <button class="text-black underline text-xs closeBtn mt-1">Close</button>
        </div>`;
            container.appendChild(card);
            card.querySelector('.openBtn').addEventListener('click', () => {
                document.querySelectorAll('[id^=msg-]').forEach(m => m.classList.add('hidden'));
                card.querySelector(`#msg-${i}`).classList.remove('hidden');
            });
            card.querySelector('.closeBtn').addEventListener('click', () => {
                card.querySelector(`#msg-${i}`).classList.add('hidden');
            });
        });
    });
