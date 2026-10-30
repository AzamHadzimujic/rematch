# Rematch

Rematch is a personal journal for ranked games and sessions. Players save each match with the game result, a screenshot and notes on what went well or wrong, then look back at their progress and recurring mistakes.

# Run the project
npm install
npx expo start

# Features
- [x] List of matches (mock data)
- [ ] Login and registration with Supabase (email/password), so each player sees only their own matches
- [ ] List of matches (with empty and loading states)
- [ ] Match details screen
- [ ] Add and edit a match (game, result, date, notes, mistake tags) with input validation
- [ ] Delete a match
- [ ] Screenshot from the camera or gallery 
- [ ] Tabs: Matches and Profile, plus a modal for adding a match
- [ ] Matches stored in Supabase, with settings (e.g. last selected game) saved locally
- [ ] Extras if time allows: win rate per game, filtering by game, a “mistakes to fix” tag summary, haptic feedback on save