# WAR LAND

World War II grand strategy game focused on economy, diplomacy, equipment, tactics and strategy.

## Current direction
- World War II strategic map
- Country management
- Economy: money, oil, steel, coal, aluminum
- Military production and equipment
- Logistics: fuel, ammunition, equipment and supply lines
- Diplomacy and intelligence
- Tactical battles
- Technology tree
- Events and alternate history
- Persian / English localization
- JESSI offline assistant
- JESSI online assistant through a server-side OpenAI Responses API bridge
- Unselected countries may be controlled by AI; player-controlled countries remain advisor-only for JESSI

## Development roadmap
1. Playable strategic-map foundation
2. Country and city data
3. Economy and industry
4. Units, equipment and production
5. Movement, combat and logistics
6. Diplomacy and intelligence
7. Technology and events
8. JESSI integration and online backend
9. Save/load and localization
10. Optimization and mobile packaging

## Running the online JESSI bridge
1. Install Node.js 18+.
2. Set `OPENAI_API_KEY` on the server. Never put the key in browser code or commit it to GitHub.
3. Optionally set `OPENAI_MODEL` and `PORT`.
4. Run `npm start`.
5. Open the server URL. The in-game JESSI button calls `/api/jessi`.

Food/food-resource mechanics are intentionally excluded from the game economy.
