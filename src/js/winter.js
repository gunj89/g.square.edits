// Winter Theme - Snowflake Generator

document.addEventListener('DOMContentLoaded', () => {
    // Create container
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snow-container');
    document.body.appendChild(snowContainer);

    // Configuration
    const snowflakeCount = 50;
    const characters = ['❅', '❆', '•', '*'];

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Random character
        snowflake.innerHTML = characters[Math.floor(Math.random() * characters.length)];
        
        // Random positions and animations
        const leftPos = Math.random() * 100; // 0% to 100%
        const animDuration = 5 + Math.random() * 10; // 5s to 15s
        const animDelay = Math.random() * 5; // 0s to 5s
        const opacity = 0.4 + Math.random() * 0.6;
        const size = 0.8 + Math.random() * 1.5; // Scale

        snowflake.style.left = `${leftPos}%`;
        snowflake.style.animationDuration = `${animDuration}s`;
        snowflake.style.animationDelay = `${animDelay}s`;
        snowflake.style.opacity = opacity;
        snowflake.style.fontSize = `${size}em`;

        snowContainer.appendChild(snowflake);
    }
    
    console.log('Winter theme loaded: Snowflakes activated.');
});
