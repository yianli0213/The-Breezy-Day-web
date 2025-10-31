import pool from '../config/database.js';

// Get user by ID
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    // TODO: Implement actual database query
    // const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    
    // Mock data for now
    const mockUser = {
      id: id,
      name: 'User ' + id,
      email: `user${id}@example.com`,
      preferences: {
        notifications: true,
        allergyTypes: ['pollen', 'dust'],
        location: 'Taipei'
      }
    };
    
    res.json({
      success: true,
      data: mockUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create new user
export const createUser = async (req, res) => {
  try {
    const { name, email, lineId } = req.body;
    
    // TODO: Implement actual database insert
    // const [result] = await pool.query(
    //   'INSERT INTO users (name, email, line_id) VALUES (?, ?, ?)',
    //   [name, email, lineId]
    // );
    
    const mockUserId = Math.floor(Math.random() * 10000);
    
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        id: mockUserId,
        name,
        email,
        lineId
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update user preferences
export const updateUserPreferences = async (req, res) => {
  try {
    const { id } = req.params;
    const preferences = req.body;
    
    // TODO: Implement actual database update
    // await pool.query(
    //   'UPDATE users SET preferences = ? WHERE id = ?',
    //   [JSON.stringify(preferences), id]
    // );
    
    res.json({
      success: true,
      message: 'Preferences updated successfully',
      data: {
        id,
        preferences
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
