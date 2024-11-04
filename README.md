# Shopping List Application

## Project Overview

The **Shopping List Application** is designed to help users create and manage shopping lists with ease. Each list allows users to add multiple products with details like name, quantity, and notes, enabling efficient and organized shopping. Users can also edit and delete lists and products, providing full control over their shopping organization.

## Key Features

- **Create Shopping Lists**: Users can create shopping lists with custom names.
- **Add Products to Lists**: Each list can contain multiple products, each with details (name, quantity, and note).
- **View List Products**: Users can view all products associated with a shopping list.
- **Edit and Delete Functionality**: Full CRUD (Create, Read, Update, Delete) capabilities are available for lists and products.

## Project Logic and Structure

The application is structured with React for the frontend and a REST API (Django) for the backend. Here’s a breakdown of the key logic:

1. **React Frontend**:
   - **State Management**: React's `useState` and `useEffect` hooks are used for managing local state and fetching data from the API.
   - **Component Structure**:
     - `ShoppingLists` component: Manages the creation, editing, and deletion of shopping lists.
     - `Products` component: Displays products for a selected shopping list, with options to add, edit, or remove products.
   - **Dynamic Rendering**: Each shopping list and product is displayed based on the current state, with lists and products updating in real-time upon user actions.

2. **Django Backend**:
   - **Models**:
     - `ShoppingList`: Stores shopping list data with fields for name and timestamp.
     - `Product`: Linked to `ShoppingList` with a foreign key, storing product-specific data like name, quantity, and notes.
   - **API Endpoints**: Django REST Framework (DRF) provides endpoints for managing shopping lists and products, supporting full CRUD operations.

## Design Files

### Wireframes and Storyboards
The wireframes and storyboards created in Figma provide a visual overview of the app’s layout and user flow.

- **Design Tool**: Figma
- **Viewing the Designs**: To view the wireframes and storyboards, please visit the Figma link provided [here](#) (replace `#` with the actual Figma URL). Ensure you have view permissions to access the designs.

## How to Run the Application

### Prerequisites

- **Node.js** and **npm** installed on your machine for the frontend.
- **Python** and **Django** installed for the backend.

### Backend Setup (Django)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/shopping-list-app.git
   cd shopping-list-app/backend
   ```


2. **Run database migrations**:
   ```bash
   python manage.py migrate
   ```

3. **Start the Django server**:
   ```bash
   python manage.py runserver
   ```

The Django API will be accessible at `http://127.0.0.1:8000`.

### Frontend Setup (React)

1. Navigate to the frontend directory:
   ```bash
   cd /shopsmart
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the React development server**:
   ```bash
   npm start
   ```

The React app will be accessible at `http://localhost:3000`.

## Observations and Development Notes

1. **User Experience (UX)**: Special attention was given to UX design by adding editing capabilities directly within lists and using Material-UI for a consistent, responsive interface.
2. **Error Handling**: Error handling has been implemented for API requests to provide feedback on failed actions.
3. **Code Modularity**: Components are designed to be modular, with each feature encapsulated in a separate component (e.g., `ShoppingLists` and `Products`) to ensure readability and reusability.
4. **Design Considerations**: Minimalist styling with Material-UI ensures a clean and intuitive user interface.

## Future Improvements

- **Authentication**: Adding user authentication to allow multiple users to manage their own lists.
- **Sorting and Filtering**: Options for sorting and filtering products within lists.
- **Offline Mode**: Enabling offline access and local storage for seamless use without an internet connection.

---

This README provides comprehensive information about the project, guiding users on setup, usage, and design rationale. Make sure to update any specific links or additional details based on your actual project setup.