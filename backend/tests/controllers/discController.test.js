const Disc = require("../../models/disc");
const discController = require("../../controllers/discController");

// Mock the Disc model methods
jest.mock("../../models/disc");

describe("Disc Controller", () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks between tests
    });

    describe("newDisc", () => {
        it("should create a new disc and return it", async () => {
            const discData = {
                name: "Destroyer",
                brand: "Innova",
                mold: "Distance Driver",
                weight: 175,
                condition: "New",
                color: "Orange",
                speed: 12,
                glide: 5,
                turn: -1,
                fade: 3,
                price: 17.99,
                description: "A popular choice for long-distance drives.",
                images: [{ public_id: "destroyer-1", url: "https://example.com/images/destroyer-orange.jpg" }],
                seller: "Pro Disc Golf Store",
                stock: 50,
            };

            // Mock Disc.create to return discData
            Disc.create = jest.fn().mockResolvedValue(discData);

            const req = { body: discData };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis(),
            };

            await discController.newDisc(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                success: true,
                disc: discData,
            });
        });

        it("should handle error if disc creation fails", async () => {
            // Mock Disc.create to simulate an error
            Disc.create = jest.fn().mockRejectedValue(new Error("Database error"));

            const req = { body: { name: "Destroyer", brand: "Innova" } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis(),
            };

            await discController.newDisc(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({
                success: false,
                message: "Failed to create disc",
            });
        });
    });

});
