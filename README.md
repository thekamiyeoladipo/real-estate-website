# REAL ESTATE WEBSITE
I basically used this project to practice my react dev skills as I'm still trying to get a hang of it and be more confident using it.

Used GSAP for the animation, here's a breakdown of the animations of each component.
1. Navbar Component
Initial Load Animations
Logo Animation: The logo slides down from above (y: -20) while fading in (opacity: 0 to 1) with a duration of 0.6 seconds using the "power2.out" easing (starts fast, ends slow).
Navigation Items Animation: Each navigation link slides down from above with a staggered effect (0.1 second delay between each item), creating a cascading appearance.
Sign Up Button Animation: The button scales up from 80% to 100% while fading in, giving it a subtle "pop" effect.
Mobile Menu Animations
Menu Opening Animation: When the mobile menu is toggled, it expands from 0 width/height to full screen with a fade-in effect.
Menu Items Animation: Menu items slide up from below (y: 30 to 0) with a staggered delay of 0.1 seconds between each item, creating a sequential appearance.
Menu Closing Animation: When closing, the menu fades out first, then its dimensions are reset to 0 using GSAP's onComplete callback.
