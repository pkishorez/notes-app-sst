import Stripe from "stripe";
import handler from "./util/handler";

export const main = handler(async (ev) => {
  const { storage, source } = JSON.parse(ev.body);

  const amount = storage * 10;
  const description = "Test charge";

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  await stripe.charges.create({
    source,
    amount,
    description,
    currency: "inr",
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
  });

  return { status: true };
});
