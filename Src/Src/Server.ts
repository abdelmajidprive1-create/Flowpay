const app = express();

// Middleware to parse JSON in requests
app.use(express.json());   
// Any request starting with /api will go to payment routes
app.use("/api", paymentRoutes);
app.get("/", (req, res) => {
  res.send("Flow Gateway is running 🚀");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
