document.addEventListener('DOMContentLoaded', () => {
    const addBlockForm = document.getElementById('addBlockForm');
    const validateBlockForm = document.getElementById('validateBlockForm');
    const addBlockResponse = document.getElementById('addBlockResponse');
    const validateBlockResponse = document.getElementById('validateBlockResponse');

    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(tab.getAttribute('href'));
            tabContents.forEach(tc => tc.classList.remove('active'));
        });
    });

    addBlockForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(addBlockForm);
        const tokens = {
            name: formData.get('name'),
            position: formData.get('position'),
            guests: formData.get('guests'),
            institution: formData.get('institution')
        };
        const additionalToken = formData.get('additionalToken');

        const response = await fetch('http://127.0.0.1:8000/add_block', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tokens, additional_token: additionalToken })
        });

        const data = await response.json();
        if (response.ok) {
            addBlockResponse.innerHTML = `Block added successfully.<br>Verification Hash: ${data.verification_hash}`;
        } else {
            addBlockResponse.innerHTML = `Error: ${data.detail}`;
        }
    });

    validateBlockForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(validateBlockForm);
        const certificateId = formData.get('certificateId');

        const response = await fetch('http://127.0.0.1:8000/validate_certificate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ certificate_id: certificateId })
        });

        const data = await response.json();
        if (response.ok) {
            validateBlockResponse.innerHTML = `Certificate is valid. Details:<br>${JSON.stringify(data.block_details, null, 2)}`;
        } else {
            validateBlockResponse.innerHTML = `Error: ${data.detail}`;
        }
    });
});
