document.addEventListener('DOMContentLoaded', () => {
    const threads = [
        { title: 'Erster Beitrag', date: '2024-11-01' },
        { title: 'Zweiter Beitrag', date: '2024-11-02' },
        { title: 'Dritter Beitrag', date: '2024-11-03' }
    ];

    const threadsContainer = document.getElementById('threads');
    displayThreads(threads);

    function displayThreads(threads) {
        threadsContainer.innerHTML = '';
        threads.forEach(thread => {
            const threadElement = document.createElement('div');
            threadElement.className = 'thread';
            threadElement.innerHTML = `<h3>${thread.title}</h3><p>${thread.date}</p>`;
            threadsContainer.appendChild(threadElement);
        });
    }

    window.sortThreads = function() {
        const sortOption = document.getElementById('sortDropdown').value;
        if (sortOption === 'title') {
            threads.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            threads.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        displayThreads(threads);
    };

    sortThreads();
});
