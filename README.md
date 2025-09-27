# VNV - Full Stack E-commerce Platform

A modern, full-stack e-commerce website built with Next.js, featuring seamless user authentication, admin panel, and efficient background job processing.

**Live Demo**: [click here](https://next-ecommerce-app-taupe.vercel.app/)


## 🚀 Features

### User Features
- **User Authentication**: Seamless sign-up/sign-in using Clerk
- **Product Browsing**: Browse and search through products
- **Shopping Cart**: Add, remove, and manage products in cart
- **Order Management**: Place orders and track order history
- **Responsive Design**: Optimized for all devices

### Admin Features
- **Admin Dashboard**: Comprehensive admin panel
- **Product Management**: Upload, edit, and delete products
- **Order Management**: View and manage customer orders
- **User Management**: Monitor user activities
- **Analytics**: Track sales and performance metrics

### Technical Features
- **Background Jobs**: Efficient task processing with Inngest
- **Webhook Handling**: Clerk webhooks for user management
- **Image Storage**: Cloudinary integration for product images
- **Database**: MongoDB for scalable data storage
- **Real-time Updates**: Live order and inventory updates

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Clerk** - User authentication and management

### Backend
- **Next.js API Routes** - Serverless backend functions
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Inngest** - Background job processing
- **Cloudinary** - Image storage and optimization

### Deployment
- **Vercel** - Deployment platform
- **MongoDB Atlas** - Cloud database hosting

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB Atlas account
- Clerk account
- Cloudinary account
- Inngest account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vnv2315/next-ecommerce-app.git
   cd next-ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

   # Database
   MONGODB_URI=your_mongodb_connection_string

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   # Inngest
   INNGEST_EVENT_KEY=your_inngest_event_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key

   # App URL (for production)
   NEXT_PUBLIC_APP_URL=https://your-app-url.vercel.app
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```



## 🔐 Authentication Setup

### Clerk Configuration

1. Create a Clerk application at [clerk.com](https://clerk.com)
2. Configure authentication providers (Email, Google, etc.)
3. Set up webhooks for user events
4. Add environment variables to `.env.local`

## 📦 Database Schema

### User Model
```javascript
{
  clerkId: String,
  email: String,
  firstName: String,
  lastName: String,
  role: String, // 'user' | 'admin'
  createdAt: Date
}
```

### Product Model
```javascript
{
  name: String,
  description: String,
  price: Number,
  images: [String],
  category: String,
  stock: Number,
  isActive: Boolean,
  createdAt: Date
}
```

### Order Model
```javascript
{
  userId: String,
  products: [{
    productId: ObjectId,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  status: String,
  shippingAddress: Object,
  createdAt: Date
}
```

## ⚡ Inngest Background Jobs

### Available Functions
- `user-created`: Process new user registration
- `order-placed`: Handle order confirmation and notifications
- `inventory-update`: Update product stock levels
- `email-notifications`: Send transactional emails

### Example Function
```javascript
export const orderPlaced = inngest.createFunction(
  { id: "order-placed" },
  { event: "ecommerce/order.placed" },
  async ({ event, step }) => {
    // Process order
    // Send confirmation email
    // Update inventory
  }
);
```

## 🎨 Cloudinary Integration

### Image Upload
- Product images are uploaded to Cloudinary
- Automatic image optimization and transformation
- Multiple image formats supported

### Configuration
```javascript
const cloudinary = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
};
```

### Production Checklist
- [ ] Environment variables configured
- [ ] Database connection string updated
- [ ] Webhook URLs updated for production
- [ ] Cloudinary settings verified
- [ ] Inngest production keys added

## 📱 API Endpoints

### Public Routes
- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get single product
- `POST /api/auth/sign-up` - User registration
- `POST /api/auth/sign-in` - User login

### Protected Routes
- `POST /api/cart/add` - Add item to cart
- `POST /api/orders` - Create new order
- `GET /api/orders/user/[userId]` - Get user orders

### Admin Routes
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/[id]` - Update product
- `DELETE /api/admin/products/[id]` - Delete product
- `GET /api/admin/orders` - Get all orders

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run integration tests
npm run test:integration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Clerk](https://clerk.com/) - User authentication
- [Inngest](https://inngest.com/) - Background job processing
- [MongoDB](https://mongodb.com/) - Database
- [Cloudinary](https://cloudinary.com/) - Image management
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

For support, email support@vnv-ecommerce.com or join our Discord channel.


Made with ❤️ by vnv
