# HackSpaceProject
JL TechConsulting 
1. Variables css: 
 --main-font: 'Source Sans Pro', sans-serif;
    --secondary-font: 'Herr Von Muellerhoff', cursive;
    --body-font: 'Cabin', sans-serif;
    --main-font-color-dark: #252525;
    --secondary-font-color: #c59d5f;
    --body-font-color: #515151;
    
2. ScrollReveal Library
CSS Transition and CSS Transform are required by ScrollReveal to create animations. Luckily today, that means over 94% of browsers (globally) are supported.
<script src="https://unpkg.com/scrollreveal"></script>

3. Send message by Formspree Library : 
A collection of example HTML forms with code that you can edit live, then download or copy/paste. A minimal form reset css is included that should work with most sites.
https://formspree.io/library

4. We'll be using Express for our web server, so lets start by installing the dependencies and creating our directory structure.
npm init -y
npm i express
mkdir -p frontend/static

Start up your server:
node server.js
LOCALHOST:5060
