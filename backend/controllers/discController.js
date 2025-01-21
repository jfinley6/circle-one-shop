const Disc = require("../models/disc")

// Create new disc  =>  /api/v1/disc/new
exports.newDisc = async (req, res, next) => {
    
    const disc = await Disc.create(req.body);

    res.status(201).json({
        success: true,
        disc
    })

}

exports.getDiscs = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This route will show all discs in database.'
    })
}
