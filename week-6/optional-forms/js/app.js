document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');

    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }


    async function submitData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    name: name,
                    email: email
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();
            console.log('Sunucudan dönen veri:', data);
            alert('Form başarıyla gönderildi!');
        } catch (error) {
            console.error('Hata oluştu:', error);
            alert('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    }

    // async fonksiyonu çağırmayı unutma
    submitData();
});
