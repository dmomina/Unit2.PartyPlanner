document.addEventListener('DOMContentLoaded', async () => {
    const partyListContainer = document.getElementById('party-list');

    try {
        const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events');
        const result = await response.json();

        if (response.ok && result.success) {
            const parties = result.data;
            parties.forEach(party => {
                const partyName = document.createElement('li');
                partyName.textContent = party.name;
                partyListContainer.appendChild(partyName);
            });
        } else {
            console.error('Error fetching parties:', result.error || 'Unknown error');
        }
    } catch (error) {
        console.error('Error fetching parties:', error);
    }
});