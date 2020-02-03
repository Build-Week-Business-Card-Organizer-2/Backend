# Documentation

https://documenter.getpostman.com/view/10064604/SWTEbbdc?version=latest

# Backend

Product Vision Document 
for Business Card Organizer

# ☝️ Proposal

It’s such a pain when you arrive at a networking event and realize you don’t have any business cards with you. Or getting home and realizing that you left the stack of cards you collected on the hotel nightstand.  Enter a new business card organizing app.

- What problem does your app solve?
Losing cards, or having to keep them as clutter. 

- Be as specific as possible; how does your app solve the problem?
So our app will allow users to store cards digitally, so their cards won’t become lost and are more useful for sharing.

- What is the mission statement?
Business Card Organizer allows users to keep their business cards organized and accessible, easily and securely.

# 💡 Features

---

- What features are required for your minimum viable product?
Onboarding upon account creation.
Users can create/update/delete their profile.
Ability for other users to view your profile/business card(s).

- What features may you wish to put in a future release?
-- See Figma/Ability to generate QR code for business cards.
- What do the top 3 similar apps do for their users?
-- LinkedIn/Evernote etc, allow you to store notes, CRUD profile, see other
Users profiles.

# 🛠 Frameworks - Libraries
Front end…

-React
-Redux  ←-- State management
-Context ←- State management
-Styling ←--- LESS/CSS for Unit 1. CSS/SASS/Styled Components

(for React, a great package is node-sass) 

Backend…  ←- Deployed with Heroku

SQLite
Node
Packages:
Knex
JWT -jsonwebtoken
bcryptjs
helmet
Dotenv
cors
express
nodemon
jest
supertest


---

- What 3rd party frameworks/libraries are you considering using?
QR code API or image uploader API

- Do the APIs you need require you to contact them to gain access?
TBD

- Are you required to pay to use said API(s)?
-No


# 🧮 For Data Scientists
N/A
---

- Describe the established data source with at least rough data able to be provided on day one.
- Write a description for what the data science problem is. What uncertainty or prediction are you trying to discover? How could this data be used to find a solution to this problem?
- What kind of target output can you deliver to the Web/UX/iOS teams to work with? Is it in JSON format or something else?
N/A

# 🎯 Target Audience

- Who is your target audience? Be specific.
People involved in networking(tech/business)
Business owners
Entrepreneurs


- What feedback have you gotten from potential users?

See Figma design (UX)

- Have you validated this problem and your solution with a target audience? Describe how,

See Figma design (UX)
---

# 🔑 Prototype Key Feature(s)

---
Stretch:
Implement a feature that lets a User "revoke" access to their business card, removing it from a selected group of users (by username) and an option to "remove from all users' collections" .

- How long do you think it will take to implement these features?

Possibly a day or two.


- Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?
Hopefully!
