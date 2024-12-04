function getBrands(productType) {
    const brands = {
        "Shotguns": ["Remington", "Benelli", "Mossberg", "Browning", "Beretta"],
        "Handguns": ["Glock", "Smith & Wesson", "Sig Sauer", "Beretta", "Ruger"],
        "Assault Rifles": ["Colt", "FN Herstal", "Heckler & Koch", "Kalashnikov", "Daniel Defense"],
        "Rifles": ["Winchester", "Savage Arms", "Browning", "Tikka", "Ruger"],
        "Compound Bows": ["Hoyt", "Mathews", "Bear Archery", "PSE Archery", "Bowtech"]
    };
    return brands[productType] || [];
}
document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');

    products.forEach((product) => {
        product.addEventListener('mouseenter', function() {
            
            const brands = getBrands(product.querySelector('p').textContent);
            const brandList = document.createElement('div');
            brandList.className = 'brand-list';
            brandList.innerHTML = `<p>Brands We Carry: ${brands.join(', ')}</p>`;
            document.body.appendChild(brandList);

            const rect = product.getBoundingClientRect();
            brandList.style.position = 'absolute';
            brandList.style.top = `${rect.top + window.scrollY}px`;
            brandList.style.left = `${rect.left + window.scrollX}px`;
            brandList.style.backgroundColor = 'white';
            brandList.style.border = '1px solid black';
            brandList.style.padding = '10px';
            brandList.style.zIndex = '1000';
        });

        product.addEventListener('mouseleave', function() {
            const brandList = document.querySelector('.brand-list');
            if (brandList) {
                document.body.removeChild(brandList);
            }
        });
    });
});