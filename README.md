# Casa Maré — Resort Concierge Chat UI

A responsive resort landing page with an interactive concierge chat widget, built using vanilla HTML, CSS and JavaScript.

## Run locally
1. Extract the ZIP file.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code **Live Server** extension.
4. Select **Ask our concierge** to open the chat.

## Chat flow
- Mira welcomes the guest and offers suggested questions about check-in times, nearby beaches and airport transfers.
- Selecting a quick-reply chip sends its question as a guest message.
- Guests can also type a custom message and press Enter or the send button.
- A three-dot typing animation appears before the concierge response.
- The mock concierge matches common keywords and responds with a relevant canned answer. Unknown questions receive a friendly fallback response.
- The close control or Escape key closes the panel.

## Key implementation techniques
- **Open/close state:** `setOpen()` updates the panel class, `aria-expanded`, `aria-hidden`, focus and `localStorage`.
- **Message rendering:** messages are created with DOM methods and `textContent`, avoiding unsafe HTML insertion for user-entered text.
- **Quick replies:** event delegation on the chip container keeps interaction logic compact.
- **Typing simulation:** `setTimeout()` displays the animated typing row before inserting the concierge reply.
- **Responsive placement:** the launcher is fixed to the lower-right corner. On small screens the panel uses viewport-relative height, while the page's booking CTA remains in the hero content.
- **Accessibility:** labelled buttons and input, dialog semantics, live message log, visible focus treatment, Escape-to-close and reduced-motion support.

## Visual assets
Resort, ocean and concierge portrait photos are remote Unsplash images. Google Fonts are also loaded online, so an internet connection is required for those assets.

## Screenshot checklist
Capture these four states in your browser:
1. **Closed launcher:** page loaded, chat closed.
2. **Open chat:** click the launcher.
3. **Typing indicator:** click a quick reply and capture within the 1.15-second response delay.
4. **Mobile view:** use a narrow responsive viewport (e.g. 390 × 844) with the chat open.

This is a front-end UI mock only. It does not connect to a real booking system, live agent or backend.
