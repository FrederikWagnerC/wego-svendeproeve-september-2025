# WeGo - Svendeprøve September 2025

WeGo er en moderne ride-sharing platform udviklet som svendeprøve projekt. Platformen forbinder rejsende og tilbyder en nem måde at dele transport på.

## Projektbeskrivelse

WeGo består af en React frontend og en Node.js/Express backend med Prisma ORM til database-håndtering. Projektet inkluderer funktioner som brugerautentificering, booking af ture, anmeldelser og dynamisk indhold.

## Teknologier

### Frontend
- **React 19** - Modern UI framework
- **Vite** - Hurtig udviklings- og build-tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router 7** - Client-side routing
- **React Hook Form** - Formular håndtering
- **React Toastify** - Notifikationer

### Backend
- **Node.js** med **TypeScript**
- **Express 5** - Web application framework
- **Prisma ORM** - Database toolkit
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **MySQL** - Database


## Installation & Opsætning

### 1. Klon repositoriet
```bash
git clone https://github.com/FrederikWagnerC/wego-svendeproeve-september-2025.git
cd wego-svendeproeve-september-2025
```

### 2. Installér rod-afhængigheder
```bash
npm install
```

### 3. Opsæt Backend

#### Naviger til backend mappen
```bash
cd Backend
npm install
```

#### Opret .env fil
```bash
cp .env.example .env
```

#### Konfigurer database forbindelse
Rediger `.env` filen og indsæt dine database oplysninger:
```env
DATABASE_URL="mysql://[dbuser]:[dbpassword]@[dbhost]:[dbport]/[dbname]"
JWT_SECRET="din-jwt-secret-nøgle"
```

#### Initialiser database

**Med fulle rettigheder (lokal database):**
```bash
npm run init
```

**Med begrænsede rettigheder (online database):**
```bash
npm run push
```

#### Start backend serveren
```bash
npm run dev
```
Serveren kører på `http://localhost:3000`

### 4. Opsæt Frontend

#### Åbn ny terminal og naviger til frontend
```bash
cd Frontend
npm install
```

#### Start frontend udviklings-server
```bash
npm run dev
```
Frontend kører på `http://localhost:5173`

