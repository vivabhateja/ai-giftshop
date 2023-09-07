
const giftAdvisorChat = document.getElementById('gift-advisor-chat');
const giftAdvisorInput = document.getElementById('gift-advisor-input');
const speakButton = document.getElementById('speak-button');
const productSearchInput = document.getElementById('product-search');
const relationshipInput = document.getElementById('relationship');
const occasionInput = document.getElementById('occasion');
const ageInput = document.getElementById('age');
const giftsForOccasionSection = document.querySelector('.gifts-for-occasion');

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

    
    appendGiftAdvisorMessage(`You: ${userQuery}`);

    
    const aiResponse = `My Gift Advisor: Based on your preferences, here are some gift recommendations: Gift 1, Gift 2, Gift 3.`;

    
    appendGiftAdvisorMessage(aiResponse);

    
    giftAdvisorInput.value = '';

    
    appendMainMessage(aiResponse); 
}


function appendMainMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('bot-message-main');
    messageElement.textContent = message;
    main.appendChild(messageElement);
    main.scrollTop = main.scrollHeight;
}

function searchProducts() {
    const searchQuery = productSearchInput.value.trim();
    if (searchQuery === '') return;

    
    const searchResult = `Search results for "${searchQuery}": Product 1, Product 2, Product 3.`;

    
    appendMainMessage(searchResult);

    
    productSearchInput.value = '';
}




function getGiftsForOccasion() {
    const relationship = relationshipInput.value.trim();
    const occasion = occasionInput.value.trim();
    const age = ageInput.value.trim();

    if (relationship === '' || occasion === '' || age === '') {
        alert('Please fill in all recipient details.');
        return;
    }

   
    const giftRecommendations = `Gifts for ${relationship}'s ${occasion} (Age ${age}): Gift 1, Gift 2, Gift 3.`;

    
    displayGiftRecommendations(giftRecommendations);
}


function displayGiftRecommendations(giftRecommendations) {
    giftsForOccasionSection.innerHTML = '';
    const recommendationsElement = document.createElement('div');
    recommendationsElement.classList.add('bot-message-main');
    recommendationsElement.textContent = giftRecommendations;
    giftsForOccasionSection.appendChild(recommendationsElement);
}











