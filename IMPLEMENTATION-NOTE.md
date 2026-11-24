# Implementation Note

The widget is designed as a quiet, non-intrusive concierge entry point that complements rather than competes with the resort's booking CTA. The dark forest-green header, warm coral send action, soft message surfaces and editorial resort photography create a hospitality-led visual language.

The main interaction technique is a small state-driven vanilla JavaScript controller. `setOpen()` keeps the visual state, accessibility attributes and persisted localStorage value in sync. Quick replies and typed messages share the same `sendMessage()` pipeline, so both show the guest bubble, typing animation and simulated concierge answer consistently. Messages are inserted using DOM nodes and `textContent` for safer handling of user input.

On mobile, the panel is constrained to the viewport and the launcher remains anchored to the lower-right edge. The main page CTA stays in the page content rather than being placed underneath the widget.

The concierge uses keyword-based canned responses to demonstrate the interaction without requiring a backend or API.
