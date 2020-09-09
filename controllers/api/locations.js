const dbLocations = require('../../models/location')


const show = (req, res) => {
    dbLocations.findById(req.params.id, (err, foundLocation) => {
        if (err) console.log('Error in Location#show:', err);

        if (!foundLocation) return res.json({
            message: 'Location with provided ID not found.'
        })
        
        res.status(200).json({ Location: foundLocation })
    });
};



module.exports = {
    show,
}