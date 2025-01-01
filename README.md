# **Book Finder**

## **Project Overview**
**Book Finder** is a React-based web application that retrieves book details from the Google Books API and displays them in a user-friendly list on the main page. Users can search for books and view information such as titles, authors, and publication details.

## **Features**
- Fetches and displays book details dynamically using the Google Books API.
- Real-time search functionality to filter books.
- Responsive design for an optimal viewing experience on all devices.
- Minimalistic and easy-to-navigate user interface.

---

## **Setup and Installation**

### **Prerequisites**
- [Node.js](https://nodejs.org/) installed on your system.
- An API key for the [Google Books API](https://developers.google.com/books).

### **Steps to Run Locally**
1. **Clone the Repository**
   ```bash
   git clone https://github.com/anushkaMadhushan/BookFinder.git
   cd book-finder
   ```

2. **Install Dependencies**
   Install the required packages using npm:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the project root and add your Google Books API key:
   ```env
   REACT_APP_GOOGLE_BOOKS_API_KEY=your_api_key_here
   ```

   Alternatively, replace the placeholder API key in the code with your own:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

4. **Run the Application**
   Start the React development server:
   ```bash
   npm start
   ```

5. **Access the Application**
   Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## **Dependencies**
- **React**: For building the user interface.
- **Axios**: For making API requests.
- **Bootstrap**: For responsive styling.
- **Google Books API**: To fetch book details.

---


## **Demo Link**
[Live Demo](https://book-finder-seven-rouge.vercel.app/)

---

## **Contact**
For any questions or feedback, feel free to reach out:
- **Name**: Anushka Madhushan
- **Email**: 
- **GitHub**: [Your GitHub Profile](https://github.com/anushkaMadhushan)

---

