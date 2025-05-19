
# INST377 Air Quality Web Application

## Project Description
This web app displays real-time air quality data fetched from the OpenWeatherMap API and stores it in a Supabase database. The frontend is built with React and styled with modern CSS using flexbox and grid layouts. The app features three pages: Home, About, and History, all communicating with the backend through RESTful API endpoints.

## Target Browsers
- Desktop browsers: Chrome, Firefox, Safari, Edge  
- Mobile browsers: iOS Safari, Android Chrome  

---

## Developer Manual

### How to install application and all dependencies

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```
3. Install dependencies for the server:
   ```bash
   cd ../server
   npm install
   ```
4. Create a `.env` file inside the `server` directory and add your environment variables:
   ```
   OWM_KEY=your_openweathermap_api_key
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   ```

### How to run the application on a server

1. Start the backend server:
   ```bash
   cd server
   npm start
   ```
2. Open a new terminal and start the React frontend:
   ```bash
   cd client
   npm start
   ```
3. Access the frontend at `http://localhost:3000` and backend at `http://localhost:4000`

### How to run tests written for the software

- Simply testing with coordinates.

### API for the server application

| Endpoint                     | Method | Description                                                      |
|------------------------------|--------|------------------------------------------------------------------|
| `/api/airquality?lat=&lon=`  | GET    | Fetches air quality data from OpenWeatherMap API and stores it in Supabase |
| `/api/history`               | GET    | Retrieves the last 10 air quality records from the database      |

### Known bugs and roadmap

- Improve API error handling.  
- Add user authentication.  
- Implement automated tests.  
- Enhance UI with interactive charts and animations.

