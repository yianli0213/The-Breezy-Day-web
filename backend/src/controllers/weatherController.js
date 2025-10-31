// Weather Controller
// Handles weather-related API requests

export const getWeather = async (req, res) => {
  try {
    const { location } = req.query;
    
    // TODO: Integrate with actual weather API
    const mockWeather = {
      location: location || 'Default Location',
      temperature: 22,
      humidity: 65,
      condition: 'Partly Cloudy',
      timestamp: new Date().toISOString()
    };
    
    res.json({
      success: true,
      data: mockWeather
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const getWeatherForecast = async (req, res) => {
  try {
    const { location, days = 7 } = req.query;
    
    // TODO: Integrate with actual weather API
    const mockForecast = Array.from({ length: days }, (_, i) => ({
      date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString(),
      temperature: 20 + Math.floor(Math.random() * 10),
      humidity: 60 + Math.floor(Math.random() * 20),
      condition: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)]
    }));
    
    res.json({
      success: true,
      location: location || 'Default Location',
      data: mockForecast
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
