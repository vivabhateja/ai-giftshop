// JavaScript for the chatbot functionality
/*const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

function appendMessage(message, isUser = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function requestGiftRecommendations() {
    const userQuery = userInput.value.trim();
    if (userQuery === '') return;

    // Add user message to the chat
    appendMessage(userQuery, true);

    // Simulate a response from the AI
    const aiResponse = `Based on your preferences, here are some gift recommendations: Gift 1, Gift 2, Gift 3.`;

    // Add AI response to the chat
    appendMessage(aiResponse);

    // Clear the user input
    userInput.value = '';
}
// JavaScript for the "My Gift Advisor" chatbot
const giftAdvisorChat = document.getElementById('gift-advisor-chat');

function appendGiftAdvisorMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('bot-message');
    messageElement.textContent = message;
    giftAdvisorChat.appendChild(messageElement);
    giftAdvisorChat.scrollTop = giftAdvisorChat.scrollHeight;
}

// Simulate a greeting message from the chatbot
appendGiftAdvisorMessage("My Gift Advisor: Hello! I'm here to help you find the perfect gift.");

// Function to request gift recommendations from the chatbot
function requestGiftRecommendations() {
    const userQuery = userInput.value.trim();
    if (userQuery === '') return;

    // Add user message to the chat
    appendMessage(userQuery, true);

    // Simulate a response from the chatbot (replace with AI-generated responses)
    const aiResponse = `My Gift Advisor: Based on your preferences, here are some gift recommendations: Gift 1, Gift 2, Gift 3.`;

    // Add chatbot response to the chat
    appendGiftAdvisorMessage(aiResponse);

    // Clear the user input
    userInput.value = '';
}*/

// You can enhance this script to make actual API calls for AI-generated responses


// You can enhance this script to make actual API calls for AI responses
// JavaScript for the chatbot on the right and gift recommendations on the main screen
const giftAdvisorChat = document.getElementById('gift-advisor-chat');
const giftAdvisorInput = document.getElementById('gift-advisor-input');
const speakButton = document.getElementById('speak-button');
const productSearchInput = document.getElementById('product-search');
const relationshipInput = document.getElementById('relationship');
const occasionInput = document.getElementById('occasion');
const ageInput = document.getElementById('age');
const giftsForOccasionSection = document.querySelector('.gifts-for-occasion');
// Initialize the speech synthesis object
const speechSynthesis = window.speechSynthesis;

function appendGiftAdvisorMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('bot-message');
    messageElement.textContent = message;
    giftAdvisorChat.appendChild(messageElement);
    giftAdvisorChat.scrollTop = giftAdvisorChat.scrollHeight;
}

function requestGiftRecommendations() {
    const userQuery = giftAdvisorInput.value.trim();
    if (userQuery === '') return;

    // Add user message to the chat on the right
    appendGiftAdvisorMessage(`You: ${userQuery}`);

    // Simulate a response from the chatbot (replace with AI-generated responses)
    const aiResponse = `My Gift Advisor: Based on your preferences, here are some gift recommendations: Gift 1, Gift 2, Gift 3.`;

    // Add chatbot response to the chat on the right
    appendGiftAdvisorMessage(aiResponse);

    // Clear the user input on the right
    giftAdvisorInput.value = '';

    // Display gift recommendations on the main screen
    appendMainMessage(aiResponse); // Create a new function to add messages to the main screen
}

// Function to append chatbot messages to the main screen
function appendMainMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('bot-message-main');
    messageElement.textContent = message;
    main.appendChild(messageElement);
    main.scrollTop = main.scrollHeight;
}
// Function to search for products
function searchProducts() {
    const searchQuery = productSearchInput.value.trim();
    if (searchQuery === '') return;

    // Simulate a search result (replace with actual search functionality)
    const searchResult = `Search results for "${searchQuery}": Product 1, Product 2, Product 3.`;

    // Display search result on the main screen
    appendMainMessage(searchResult);

    // Clear the search input
    productSearchInput.value = '';
}



// Function to collect recipient details and get gift recommendations
function getGiftsForOccasion() {
    const relationship = relationshipInput.value.trim();
    const occasion = occasionInput.value.trim();
    const age = ageInput.value.trim();

    if (relationship === '' || occasion === '' || age === '') {
        alert('Please fill in all recipient details.');
        return;
    }

    // Simulate fetching gift recommendations based on recipient details
    const giftRecommendations = `Gifts for ${relationship}'s ${occasion} (Age ${age}): Gift 1, Gift 2, Gift 3.`;

    // Display gift recommendations on the main screen
    displayGiftRecommendations(giftRecommendations);
}

// Function to display gift recommendations
function displayGiftRecommendations(giftRecommendations) {
    giftsForOccasionSection.innerHTML = '';
    const recommendationsElement = document.createElement('div');
    recommendationsElement.classList.add('bot-message-main');
    recommendationsElement.textContent = giftRecommendations;
    giftsForOccasionSection.appendChild(recommendationsElement);
}
// Function to speak the chatbot's response
function speakResponse() {
    const responseText = giftAdvisorChat.lastChild.textContent;
    const speechUtterance = new SpeechSynthesisUtterance(responseText);
    speechSynthesis.speak(speechUtterance);
}
// Function to customize gifts with visual input
function customizeGiftWithImage() {
    const imageInput = document.getElementById('image-upload');
    const uploadedImage = imageInput.files[0];

    if (!uploadedImage) {
        alert('Please select an image to upload.');
        return;
    }

    // Send the image to an AI image processing API
    fetch('https://api.example.com/image-processing', {
        method: 'POST',
        body: uploadedImage,
    })
        .then(response => response.json())
        .then(customizationResult => {
            // Display the customized gift based on the AI analysis
            displayCustomizedGift(customizationResult);
        })
        .catch(error => {
            console.error('Error customizing gift with image:', error);
        });
}
// Function to start voice recording
function startRecording() {
    // Code to start recording audio
}

// Function to stop voice recording and process the audio
function stopRecording() {
    // Code to stop recording audio and send it to an AI speech recognition service
    // Once transcribed, display the audio message on the gift
}
// Function to analyze sentiment of personalized messages
function analyzeSentimentOfMessage(message) {
    // Send the message to an AI sentiment analysis API
    fetch('https://api.example.com/sentiment-analysis', {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(sentiment => {
            // Analyze sentiment and customize the gift based on sentiment
            customizeGiftBasedOnSentiment(sentiment);
        })
        .catch(error => {
            console.error('Error analyzing sentiment of the message:', error);
        });
}
// Function to display the customized gift
function displayCustomizedGift(customizationResult) {
    // Display the customized gift on the website
    // You can update the HTML and use CSS to show the customized design or message on the gift.
}
// JavaScript for the image slider
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    const slides = slider.querySelectorAll('img');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Event listeners for previous and next buttons
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slider.childElementCount) % slider.childElementCount;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slider.childElementCount;
    showSlide(currentIndex);
});

// Show the initial slide
showSlide(currentIndex);



// You can enhance this script to make actual API calls for AI-generated responses

