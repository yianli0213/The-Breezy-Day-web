// API Service for communicating with the backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class ApiService {
  // Weather API
  async getWeather(location = 'Taipei') {
    try {
      const response = await fetch(`${API_BASE_URL}/weather/current?location=${location}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw error;
    }
  }

  async getWeatherForecast(location = 'Taipei', days = 7) {
    try {
      const response = await fetch(`${API_BASE_URL}/weather/forecast?location=${location}&days=${days}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
      throw error;
    }
  }

  // Allergy API
  async getAllergyData(location = 'Taipei') {
    try {
      const response = await fetch(`${API_BASE_URL}/allergy/current?location=${location}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching allergy data:', error);
      throw error;
    }
  }

  async getAllergyForecast(location = 'Taipei', days = 7) {
    try {
      const response = await fetch(`${API_BASE_URL}/allergy/forecast?location=${location}&days=${days}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching allergy forecast:', error);
      throw error;
    }
  }

  // User API
  async getUser(userId) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  async createUser(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async updateUserPreferences(userId, preferences) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/preferences`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preferences),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating preferences:', error);
      throw error;
    }
  }
}

export default new ApiService();
