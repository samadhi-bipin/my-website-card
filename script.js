document.addEventListener('DOMContentLoaded', function() {
    // Select the main elements from the DOM
    const container = document.getElementById('card-container');
    const cover = document.getElementById('cover');
    const backButton = document.getElementById('back-button');
    
    // Initialize the typewriter effect on the front page
    new Typed('.typed', {
        strings: ["a Coder.", "a Designer.", "a Freelancer.", "a Photographer."],
        loop: true,
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 2200,
        smartBackspace: true
    });

    /**
     * Function to open the card.
     * It adds the 'open' class to the main container, triggering the CSS animations.
     */
    function openCard() {
        // Prevent re-opening if it's already open
        if (container.classList.contains('open')) return;
        container.classList.add('open');
    }

    /**
     * Function to close the card.
     * It removes the 'open' class from the main container, reversing the CSS animations.
     */
    function closeCard() {
        // Prevent re-closing if it's already closed
        if (!container.classList.contains('open')) return;
        container.classList.remove('open');
    }

    // Add event listeners to the cover and the back button
    cover.addEventListener('click', openCard);
    backButton.addEventListener('click', closeCard);
});
