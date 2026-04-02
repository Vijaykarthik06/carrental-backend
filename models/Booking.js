  
const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  pickupDate: Date,
  returnDate: Date,
  location: String,
  requests: String,
  carModel: String,
  carId: String,
  dailyRate: Number,
  rentalDays: Number,
  totalAmount: Number,
  bookingDate: { type: Date, default: Date.now }
});