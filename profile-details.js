
document.addEventListener('DOMContentLoaded', function () {
    // Load user data
    loadUserProfile();

    // Load purchased tickets
    loadPurchasedTickets();
});

// Load user profile data
function loadUserProfile() {
    const loggedInUser = localStorage.getItem('qlessUser');

    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        document.getElementById('profile-name').textContent = user.name;
        document.getElementById('profile-email').textContent = user.email;
    } else {
        // Redirect to login if not logged in
        window.location.href = 'index.html';
    }
}

// Load purchased tickets
function loadPurchasedTickets() {
    const purchasedTickets = JSON.parse(localStorage.getItem('qlessPurchasedTickets') || '[]');
    const ticketsContainer = document.getElementById('tickets-container');

    if (purchasedTickets.length > 0) {
        // Clear the no tickets message
        ticketsContainer.innerHTML = '<div class="ticket-grid" id="ticket-grid"></div>';
        const ticketGrid = document.getElementById('ticket-grid');

        // Add each ticket to the grid
        purchasedTickets.forEach(purchase => {
            const ticketCard = createTicketCard(purchase);
            ticketGrid.appendChild(ticketCard);
        });
    }
}

// Create ticket card element
function createTicketCard(purchase) {
    const { event, tickets, purchaseDate, totalAmount, orderId } = purchase;

    const ticketCard = document.createElement('div');
    ticketCard.className = 'ticket-card';

    // Generate a simple QR code URL (placeholder)
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${orderId}`;

    ticketCard.innerHTML = `
            <div class="ticket-header" style="background-image: url('${event.image}')">
                <div class="ticket-overlay"></div>
                <div class="ticket-status">Active</div>
                <h3 class="ticket-title">${event.title}</h3>
                <p class="ticket-date">${event.date}</p>
            </div>
            <div class="ticket-content">
                <div class="ticket-venue">
                    <i class="ri-map-pin-line"></i>
                    ${event.venue}
                </div>
                <div class="ticket-details">
                    ${tickets.map(ticket => `
                        <div class="ticket-detail-item">
                            <span>${ticket.type}</span>
                            <span>x${ticket.quantity}</span>
                        </div>
                    `).join('')}
                    <div class="ticket-detail-item">
                        <span>Purchase Date</span>
                        <span>${new Date(purchaseDate).toLocaleDateString()}</span>
                    </div>
                    <div class="ticket-detail-item">
                        <span>Order ID</span>
                        <span>#${orderId.slice(0, 8)}</span>
                    </div>
                    <div class="ticket-detail-item">
                        <span>Total Amount</span>
                        <span>₱${totalAmount.toLocaleString()}</span>
                    </div>
                </div>
                
                <div class="qr-code">
                    <img src="${qrCodeUrl}" alt="Ticket QR Code">
                    <p>Show this QR code at the venue entrance</p>
                </div>
                
                <div class="ticket-actions">
                    <div class="ticket-btn primary">View Details</div>
                    <div class="ticket-btn secondary">Download</div>
                </div>
            </div>
        `;

    return ticketCard;
}

// This script will handle ticket purchases from the event details page 

    // Listen for checkout events from the event details page
    window.addEventListener('storage', function (e) {
        // If the checkout event was triggered
        if (e.key === 'qlessCheckoutEvent') {
            // Remove the event to avoid duplicates
            localStorage.removeItem('qlessCheckoutEvent');

            // Reload the tickets to show the new purchase
            loadPurchasedTickets();
        }
    });
