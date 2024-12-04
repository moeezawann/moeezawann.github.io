document.addEventListener('DOMContentLoaded', function () {
    // Get the purpose radio buttons and fields
    const sellingRadio = document.getElementById('selling');
    const tradingRadio = document.getElementById('trading');
    const sellingFields = document.getElementById('selling-fields');
    const tradingFields = document.getElementById('trading-fields');

    // Function to toggle form visibility
    function toggleFields() {
        if (sellingRadio.checked) {
            sellingFields.style.display = 'block';
            tradingFields.style.display = 'none';
        } else if (tradingRadio.checked) {
            sellingFields.style.display = 'none';
            tradingFields.style.display = 'block';
        }
    }

    // Add event listeners to radio buttons
    sellingRadio.addEventListener('change', toggleFields);
    tradingRadio.addEventListener('change', toggleFields);

    // Add event listener for the "Add Another Image" button
    document.querySelectorAll('.add-image-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            const container = this.previousElementSibling;
            const imageCount = container.querySelectorAll('input[type="file"]').length + 1;

            // Create new image upload field
            const newField = document.createElement('div');
            newField.innerHTML = `
                <label for="image${imageCount}">Image:</label>
                <input type="file" id="image${imageCount}" name="selling-image[]" accept="image/png, image/jpeg" required><br><br>
            `;
            container.appendChild(newField);
        });
    });
});
