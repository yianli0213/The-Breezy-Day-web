// Allergy Controller
// Handles allergy-related API requests and data analysis

export const getAllergyData = async (req, res) => {
  try {
    const { location } = req.query;
    
    // TODO: Integrate with allergy data API or database
    const mockAllergyData = {
      location: location || 'Default Location',
      pollenLevel: 'Moderate',
      pollenTypes: {
        grass: 'Low',
        tree: 'Moderate',
        weed: 'High'
      },
      airQuality: 'Good',
      recommendation: 'Take precautions if you are sensitive to weed pollen',
      timestamp: new Date().toISOString()
    };
    
    res.json({
      success: true,
      data: mockAllergyData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const getAllergyForecast = async (req, res) => {
  try {
    const { location, days = 7 } = req.query;
    
    // TODO: Integrate with allergy forecast API
    const levels = ['Low', 'Moderate', 'High', 'Very High'];
    const mockForecast = Array.from({ length: days }, (_, i) => ({
      date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString(),
      pollenLevel: levels[Math.floor(Math.random() * 4)],
      airQuality: ['Good', 'Moderate', 'Poor'][Math.floor(Math.random() * 3)]
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
