(function () {
    // Chatbot state variables
    const ctcChatButton = document.getElementById('ctcChatButton');
    const ctcChatWindow = document.getElementById('ctcChatWindow');
    const ctcCloseBtn = document.getElementById('ctcCloseBtn');
    const ctcChatMessages = document.getElementById('ctcChatMessages');
    const ctcMessageInput = document.getElementById('ctcMessageInput');
    const ctcSendButton = document.getElementById('ctcSendButton');
    const ctcTypingIndicator = document.getElementById('ctcTypingIndicator');

    // Chat history in sessionStorage (for persistence across pages but not sessions)
    const ctcChatHistory = JSON.parse(sessionStorage.getItem('ctcChatHistory')) || [];
    let ctcIsOpen = sessionStorage.getItem('ctcChatOpen') === 'true';

    // Flag to detect if this is a new session
    const ctcSessionId = sessionStorage.getItem('ctcSessionId');
    const ctcCurrentSessionId = Date.now().toString();
    const ctcIsNewSession = !ctcSessionId;

    // Update session ID for current session
    sessionStorage.setItem('ctcSessionId', ctcCurrentSessionId);

    // Predefined responses for the chatbot
    const ctcResponses = {
        greeting: [
            "Hi there! I'd love to know your name before we start. What's your name?",
            "Welcome to our concert support! Could you tell me your name first?",
            "Hello! What's your name? I'd like to personalize your experience."
        ],
        askName: [
            "Before we continue, may I know your name?",
            "I'd like to personalize your experience. What's your name?",
            "What should I call you?"
        ],
        ticketInfo: [
            "We offer several ticket types: Standard, VIP, and Backstage Pass. Which one would you like to know more about?",
            "Our ticket prices range from $30 for standard admission to $150 for VIP packages. Would you like specific pricing for an event?"
        ],
        eventInfo: [
            "We have many exciting concerts coming up! Are you looking for a specific artist, genre, or date range?",
            "Our next major concert is in two weeks. Would you like to see our full event calendar?"
        ],
        payment: [
            "We accept credit cards, PayPal, and Apple Pay. All transactions are secure and encrypted.",
            "You can pay for tickets using any major credit card or digital payment method. Is there a specific payment option you'd like to use?"
        ],
        refunds: [
            "Tickets are refundable up to 72 hours before the event. After that, you can still resell them on our platform.",
            "Our refund policy allows for full refunds up to 3 days before the event. Would you like me to explain the process?"
        ],
        location: [
            "The venue is located at 123 Music Avenue. Parking is available on-site for $10 per vehicle.",
            "We're located in downtown at the Grand Concert Hall. It's easily accessible by public transit - the nearest station is Central Square."
        ],
        fallback: [
            "I'm not sure I understand. Could you rephrase that or ask about ticket information, upcoming events, payment methods, or venue details?",
            "I didn't quite catch that. Would you like to know about our tickets, upcoming concerts, venue information, or something else?",
            "I'm still learning! Could you try asking in a different way or choose one of our popular topics?"
        ]
    };

    // Quick reply suggestions based on context
    const ctcQuickReplies = {
        greeting: ["Show upcoming concerts", "Ticket prices", "Venue information"],
        askName: ["I prefer not to say"],
        ticketInfo: ["VIP benefits", "Payment options", "Refund policy"],
        eventInfo: ["Next weekend events", "Rock concerts", "Family-friendly shows"],
        payment: ["Refund policy", "Group discounts", "Payment plans"],
        refunds: ["Contact support", "Resell my ticket", "Exchange options"],
        location: ["Parking details", "Public transit", "Nearby hotels"],
        fallback: ["Ticket information", "Upcoming events", "Contact support"]
    };

    // Initialize the chatbot
    function ctcInitChatbot() {
        // Toggle button functionality
        ctcChatButton.addEventListener('click', ctcToggleChat);
        ctcCloseBtn.addEventListener('click', ctcToggleChat);

        // Send message functionality
        ctcSendButton.addEventListener('click', ctcSendMessage);
        ctcMessageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') ctcSendMessage();
        });

        // Clear chat history if this is a new session
        if (ctcIsNewSession) {
            // Reset chat history for new session
            ctcChatHistory.length = 0;
            ctcSaveHistory();
        }

        // Load chat history if it exists (from current session)
        if (ctcChatHistory.length > 0) {
            ctcChatHistory.forEach(msg => {
                ctcAddMessage(msg.text, msg.sender);
            });

            // Add quick replies based on last bot message context
            const lastBotMessage = ctcChatHistory.filter(msg => msg.sender === 'bot').pop();
            if (lastBotMessage && lastBotMessage.context) {
                ctcAddQuickReplies(lastBotMessage.context);
            }
        } else {
            // Add welcome message if no history
            const welcomeMessage = ctcGetRandomResponse('askName');
            ctcAddMessage(welcomeMessage, 'bot');
            ctcChatHistory.push({
                text: welcomeMessage,
                sender: 'bot',
                context: 'askName'
            });
            ctcSaveHistory();

            // Add quick replies to welcome message
            ctcAddQuickReplies('askName');
        }

        // Open chat if it was open in previous page
        if (ctcIsOpen) {
            ctcChatWindow.classList.add('ctc-active');
        }
    }

    // Toggle chat window
    function ctcToggleChat() {
        ctcChatWindow.classList.toggle('ctc-active');
        ctcIsOpen = ctcChatWindow.classList.contains('ctc-active');
        sessionStorage.setItem('ctcChatOpen', ctcIsOpen);

        // Scroll to bottom when opening
        if (ctcIsOpen) {
            ctcScrollToBottom();
        }
    }

    // Add a message to the chat
    function ctcAddMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('ctc-message');
        messageDiv.classList.add(sender === 'user' ? 'ctc-user-message' : 'ctc-bot-message');
        messageDiv.textContent = text;
        ctcChatMessages.appendChild(messageDiv);
        ctcScrollToBottom();
    }

    // Add quick reply buttons
    function ctcAddQuickReplies(context) {
        const replies = ctcQuickReplies[context] || ctcQuickReplies.fallback;

        const quickRepliesDiv = document.createElement('div');
        quickRepliesDiv.classList.add('ctc-quick-replies');

        replies.forEach(reply => {
            const button = document.createElement('button');
            button.classList.add('ctc-quick-reply');
            button.textContent = reply;
            button.addEventListener('click', () => {
                ctcSendMessage(reply);
            });
            quickRepliesDiv.appendChild(button);
        });

        ctcChatMessages.appendChild(quickRepliesDiv);
        ctcScrollToBottom();
    }

    // Send a message
    function ctcSendMessage(text) {
        // Get message from input or parameter
        const message = text || ctcMessageInput.value.trim();
        if (!message) return;

        // Clear input if it was used
        if (!text) ctcMessageInput.value = '';

        // Add user message to chat
        ctcAddMessage(message, 'user');
        ctcChatHistory.push({ text: message, sender: 'user' });
        ctcSaveHistory();

        // Show typing indicator
        ctcTypingIndicator.classList.add('ctc-active');
        ctcScrollToBottom();

        // Process the message and respond after a delay
        setTimeout(() => {
            ctcTypingIndicator.classList.remove('ctc-active');

            // Get appropriate bot response
            const botResponse = ctcProcessMessage(message);
            ctcAddMessage(botResponse.text, 'bot');
            ctcChatHistory.push({
                text: botResponse.text,
                sender: 'bot',
                context: botResponse.context
            });
            ctcSaveHistory();

            // Add quick replies based on context
            if (botResponse.context) {
                ctcAddQuickReplies(botResponse.context);
            }
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }

    // Process user message and determine appropriate response
    function ctcProcessMessage(message) {
        message = message.toLowerCase();

        // Check for keywords to determine context
        if (message === "bella") {
            return {
                text: "What hafen vella? why u crying again? I knoe, vamfyr ryt?",
                context: 'greeting'
            };
        } else if (message.match(/my name is|i am|i'm|call me/i)) {
            const userName = message.replace(/my name is|i am|i'm|call me/i, '').trim();
            if (userName) {
                return {
                    text: `Nice to meet you, ${userName}! How can I help you with concert tickets today?`,
                    context: 'greeting'
                };
            }
        } else if (message.trim() && !message.match(/hello|hi|hey|greetings|ticket|price|cost|fee|admission|event|concert|show|performance|artist|band|music|upcoming|pay|payment|credit|card|checkout|refund|cancel|money back|return|where|location|venue|address|parking/i)) {
            // Treat input as a name if it doesn't match any other category
            return {
                text: `Nice to meet you, ${message.trim()}! How can I help you with concert tickets today?`,
                context: 'greeting'
            };
        } else if (message.match(/hello|hi|hey|greetings/)) {
            return {
                text: ctcGetRandomResponse('greeting'),
                context: 'greeting'
            };
        } else if (message.match(/ticket|price|cost|fee|admission/)) {
            return {
                text: ctcGetRandomResponse('ticketInfo'),
                context: 'ticketInfo'
            };
        } else if (message.match(/event|concert|show|performance|artist|band|music|upcoming/)) {
            return {
                text: ctcGetRandomResponse('eventInfo'),
                context: 'eventInfo'
            };
        } else if (message.match(/pay|payment|credit|card|checkout/)) {
            return {
                text: ctcGetRandomResponse('payment'),
                context: 'payment'
            };
        } else if (message.match(/refund|cancel|money back|return/)) {
            return {
                text: ctcGetRandomResponse('refunds'),
                context: 'refunds'
            };
        } else if (message.match(/where|location|venue|address|parking/)) {
            return {
                text: ctcGetRandomResponse('location'),
                context: 'location'
            };
        } else {
            return {
                text: ctcGetRandomResponse('fallback'),
                context: 'fallback'
            };
        }
    }

    // Get a random response from a category
    function ctcGetRandomResponse(category) {
        const responses = ctcResponses[category] || ctcResponses.fallback;
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Save chat history to sessionStorage
    function ctcSaveHistory() {
        // Keep only last 20 messages to prevent excessive storage use
        const historyToSave = ctcChatHistory.slice(-20);
        sessionStorage.setItem('ctcChatHistory', JSON.stringify(historyToSave));
    }

    // Scroll chat to bottom
    function ctcScrollToBottom() {
        ctcChatMessages.scrollTop = ctcChatMessages.scrollHeight;
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ctcInitChatbot);
    } else {
        ctcInitChatbot();
    }
})();