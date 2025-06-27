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

2. Header Component
Initial Load Animations
Background Image Animation: The background image starts slightly zoomed in (scale: 1.1) and with reduced opacity, then animates to normal scale with full opacity over 1.5 seconds, creating a subtle "reveal" effect.
Heading Animation: The main heading slides up from below (y: 50 to 0) while fading in over 0.8 seconds. The -=1 parameter makes this animation start 1 second before the previous animation ends, creating overlap.
Buttons Animation: The action buttons slide up from below with a staggered delay of 0.2 seconds between them, creating a sequential appearance. The -=0.6 parameter creates overlap with the previous animation.
3. About Component
Scroll-Triggered Animations
The About section uses ScrollTrigger to activate animations when the section comes into view (when the top of the section is 80% from the top of the viewport).

Heading Animation: The heading slides up (y: 30 to 0) while fading in over 0.7 seconds.
Subheading Animation: The subheading slides up (y: 20 to 0) while fading in, starting 0.4 seconds before the heading animation completes.
Image Animation: The image slides in from the left (x: -50 to 0) while fading in over 0.8 seconds.
Stats Animation: The statistics boxes slide up from below with a staggered delay of 0.15 seconds between each item, using the "back.out" easing which creates a slight overshoot effect.
Paragraph Animation: The paragraph slides up while fading in over 0.6 seconds.
Button Animation: The "Learn more" button scales up from 80% to 100% with a bounce effect using "back.out" easing, which gives it a springy appearance.
4. Projects Component
Scroll-Triggered Animations
Heading & Subheading Animations: Similar to the About section, with the heading and subheading sliding up while fading in.
Buttons Animation: The navigation buttons (previous/next) scale up from 80% to 100% with a staggered delay and a bouncy "back.out" easing.
Initial Cards Animation: Project cards slide up from below with a staggered delay of 0.15 seconds between each card, creating a sequential appearance.
Interactive Animations
Slider Navigation: When clicking next/previous buttons, the slider smoothly transitions using GSAP's to() method with "power2.inOut" easing for a natural movement.
Card Hover Animation: When hovering over a project card, it moves up slightly (y: -10) and its info box gets a deeper shadow and slight upward movement, enhancing the interactive feel.
5. Testimonials Component
Scroll-Triggered Animations
Heading & Subheading Animations: Similar to previous sections.
Cards Animation: Testimonial cards start slightly below their final position, at 95% scale, and then animate to their final position with a staggered delay of 0.15 seconds between each card.
Interactive Animations
Card Hover Animation: When hovering over a testimonial card, it moves up slightly (y: -10), scales up to 103%, and gets a deeper shadow effect.
Stars Animation: When hovering over a card, the rating stars scale up to 120% with a staggered delay of 0.05 seconds between each star, then scale back down (yoyo effect), creating a playful "pulse" effect.
6. Contact Component
Scroll-Triggered Animations
Heading & Subheading Animations: Similar to previous sections.
Form Fields Animation: The name and email input fields slide in from the left with a staggered delay.
Message Textarea Animation: The message textarea slides up from below while fading in.
Button Animation: The submit button scales up from 80% to 100% with a bouncy "back.out" easing.
Interactive Animations
Input Focus Animation: When an input field is focused, its border color changes to blue and it gets a subtle box shadow, providing visual feedback.
Button Hover Animation: When hovering over the submit button, it scales up slightly to 105% and changes to a darker blue color.
7. Footer Component
Scroll-Triggered Animations
Logo & Description Animations: The logo and description text slide up from below while fading in.
Company Title & Links Animations: The "Company" title slides up while fading in, and the navigation links slide in from the left with a staggered delay.
Newsletter Section Animations: The newsletter title, description, and form all slide up from below while fading in.
Copyright Animation: The copyright text fades in last.
Interactive Animations
Link Hover Animation: When hovering over footer links, they change color to white and move slightly to the right (x: 5), providing visual feedback.
Input Focus Animation: When the newsletter input is focused, it gets a subtle box shadow.
Button Hover Animation: When hovering over the subscribe button, it scales up slightly and changes to a darker blue color.
