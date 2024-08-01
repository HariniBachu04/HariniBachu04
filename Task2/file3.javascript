function calculateTotal() {
    const prices = {
        item1: 3.00, 
        item2: 1.00, 
        item3: 2.00,
        item4: 2.50  
    };

    let total = 0;

   
    const item1Qty = parseFloat(document.getElementById('item1').value) || 0;
    const item2Qty = parseFloat(document.getElementById('item2').value) || 0;
    const item3Qty = parseFloat(document.getElementById('item3').value) || 0;
    const item4Qty = parseFloat(document.getElementById('item4').value) || 0;


    total += item1Qty * prices.item1;
    total += item2Qty * prices.item2;
    total += item3Qty * prices.item3;
    total += item4Qty * prices.item4;

    document.getElementById('result').textContent = `Total Cost: $${total.toFixed(2)}`;
}
