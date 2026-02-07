document.getElementById('tracking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const trackingNumber = document.getElementById('tracking-number').value;
    
    if (trackingNumber) {
        const mockData = {
            status: 'In Transit',
            location: 'Warehouse in New York',
            eta: 'Tomorrow'
        };
        
        document.getElementById('status').textContent = `Status: ${mockData.status}`;
        document.getElementById('location').textContent = `Location: ${mockData.location}`;
        document.getElementById('eta').textContent = `Estimated Delivery: ${mockData.eta}`;
        
        document.getElementById('results').classList.remove('hidden');
    } else {
        alert('Please enter a valid tracking number.');
    }
});