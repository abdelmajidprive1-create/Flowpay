import paymentRoutes from "./routes/payment";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", paymentRoutes);
app.get("/", (req, res) => { res.send("Flow Gateway is running 🚀"); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
