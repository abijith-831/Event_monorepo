
# Mini Event Manager

This is a mini event manager app built on the **Next-Forge Turbo Template** (monorepo) using **Next.js, TypeScript, TailwindCSS, and pnpm**.  

The app allows users to add events with a name and date, view the list of events, and delete events. Optionally, it supports localStorage persistence and search.

---

## Tech Stack

- Next-Forge Turbo Template (monorepo)  
- Next.js (App Router)  
- TypeScript  
- TailwindCSS  
- pnpm  
- Zustand (for state management, optional)  

---

## Features

- Add an event with **Event Name** and **Date**  
- List events with **Delete** functionality  
- **Card/List view toggle** for events  
- **Search events** by name  
- **Mobile responsive design** using TailwindCSS  
- **State management and persistence** with Zustand  
- **Notifications** for actions (using Notistack)  
- Events persist in **localStorage** 

## Setup & Run

Follow these steps to run the project on your local machine:

1. **Clone the repository**

```bash
git clone https://github.com/abijith-831/Event_monorepo.git
cd Event_monorepo


2 . **Install dependenciess** 
pnpm install

3 . Go to the web app folder
cd apps/web

4 . Run the development server 
pnpm dev or pnpm next dev

5 . Open in browser 
http://localhost:3000/events 


**Live Demo You can view the app live here**: 
https://event-monorepo-web.vercel.app/events


