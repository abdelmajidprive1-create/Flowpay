import { Router } from "express";

const router = Router();

/**
 * POST /api/create-payment
 * Endpoint to create a payment
 * Example request body:
 * {
 *   "amount": 1000,
 *   "currency": "USD"
 * }
 */
router.post("/create-payment", (req, res) => {
  const { amount, currency } = req.body;

  // Validation
  if (!amount || !currency) {
    return res.status(400).json({
      error: "Amount and currency are required"
    });
  }

  // Simulate creating a payment (in real integration, call payment provider API here)
  const paymentId = `pay_${Date.now()}`;

  res.status(201).json({
    message: "Payment created successfully",
    paymentId,
    amount,
    currency
  });
});

export default router;
