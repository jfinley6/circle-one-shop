const Disc = require("../models/disc")

// Create new disc  =>  /api/v1/disc/new
exports.newDisc = async (req, res, next) => {
    try {
      // Create the new disc
      const disc = await Disc.create(req.body);
  
      // Send the response with the created disc
      res.status(201).json({
        success: true,
        disc,  // Ensure disc is returned correctly here
      });
    } catch (error) {
      // Handle errors (like validation errors or database issues)
      res.status(500).json({
        success: false,
        message: 'Failed to create disc',
      });
    }
  };

exports.getDiscs = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This route will show all discs in database.'
    })
}
