// controllers/donationController.js
const donations = require('../models/Donation');

exports.createDonation = async (req, res) => {
    try {
        const donation = new donations(req.body);
        await donation.save();
        res.status(201).json(donation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getDonations = async (req, res) => {
    try {
        const donation = await donations.aggregate([
            {
                $lookup: {
                    from: "users", // Ensure this matches your actual user collection name
                    localField: "donor",
                    foreignField: "_id",
                    as: "donorDetails"
                }
            },
            {
                $unwind: {
                    path: "$donorDetails",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    _id: 1,
                    foodName: 1,
                    quantity: 1,
                    location: 1,
                    expiry: 1,
                    status: 1,
                    donor:1,
                    phoneNo:1,
                    email:1,
                    password:1,
                    "donorDetails.name": 1,
                    "donorDetails.email": 1
                }
            }
        ]);

        res.status(200).json({
            success: true,
            count: donation.length,
            data: donation
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

