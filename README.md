# WarmCrumbs Bakery E-commerce Application

A full-stack bakery storefront with a modern React + Tailwind frontend and a Node.js/Express + MongoDB backend.

## Structure

- `frontend/` React + Vite + Tailwind UI
- `backend/` Express REST API with MongoDB (Mongoose)

## Quick start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

## API Modules

- Products: `/api/products`
- Orders: `/api/orders`
- Cart: `/api/cart`
- Reviews: `/api/products/:productId/reviews`
- Recommendations: `/api/recommendations`
- Auth: `/api/auth`

## Notes

- Stripe/Razorpay integration is prepared in UI; hook to your preferred provider.
- JWT authentication protects cart, orders, and review submission.
