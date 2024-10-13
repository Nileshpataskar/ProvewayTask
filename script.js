document.addEventListener("DOMContentLoaded", function() {
    const radios = document.querySelectorAll('input[type="radio"]');
    const totalDisplay = document.getElementById('total');

    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            let total;
           
            totalDisplay.textContent = total;
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('active');
            });

            // Add the 'active' class to the parent .option of the checked radio button
            this.closest('.option').classList.add('active');

        });
    });
});