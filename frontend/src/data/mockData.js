import headphone from '../images/headphone.png';
import smartwatch from '../images/smartwatch.png';
import tv from '../images/tv.png';
import speaker from '../images/wirelessspeaker.png';
import vacuum from '../images/robotcleaner.png';
import camera from '../images/camera.png';
import coffeemaker from '../images/coffee.png';
import airpurifier from '../images/purifier.png';
import officechair from '../images/ergonomic.png';
import cookwareset from '../images/cookware.png';
import gamingmouse from '../images/mouse.png';
import keyboard from '../images/keyboard.png';
import toothbrush from '../images/brush.png';
import wristband from '../images/tracker.png';
import earbuds from '../images/earpods.png';
import powerbank from '../images/powerbank.png';

export const products = [
    {
      _id: '1',
      name: 'Wireless Noise Cancelling Headphones',
      price: 199.99,
      rating: 4.5,
      image: headphone,
      discount: 15,
      category: 'electronics',
      description: 'Experience premium sound quality with these wireless noise cancelling headphones. Perfect for travel, work, or relaxation.',
      countInStock: 15,
      featured: true,
      onSale: true,
      recommended: true
    },
    {
      _id: '2',
      name: 'Smart Watch with Fitness Tracker',
      price: 149.99,
      rating: 4.2,
      image: smartwatch,
      discount: 10,
      category: 'electronics',
      description: 'Track your fitness goals, receive notifications, and more with this advanced smart watch.',
      countInStock: 25,
      featured: true,
      onSale: true,
      recommended: false
    },
    {
      _id: '3',
      name: 'Ultra HD 4K Smart TV - 55 inch',
      price: 499.99,
      rating: 4.7,
      image: tv,
      discount: 20,
      category: 'electronics',
      description: 'Immerse yourself in stunning 4K resolution with this Smart TV featuring built-in streaming apps and voice control.',
      countInStock: 10,
      featured: true,
      onSale: true,
      recommended: true
    },
    {
      _id: '4',
      name: 'Wireless Bluetooth Speaker',
      price: 79.99,
      rating: 4.3,
      image: speaker,
      discount: 5,
      category: 'electronics',
      description: 'Portable wireless speaker with rich sound and long battery life. Perfect for indoor or outdoor use.',
      countInStock: 30,
      featured: false,
      onSale: true,
      recommended: true
    },
    {
      _id: '5',
      name: 'Robot Vacuum Cleaner',
      price: 249.99,
      rating: 4.4,
      image: vacuum,
      discount: 12,
      category: 'home-kitchen',
      description: 'Keep your floors clean with minimal effort. This smart vacuum navigates your home and returns to its dock when done.',
      countInStock: 18,
      featured: true,
      onSale: false,
      recommended: true
    },
    {
      _id: '6',
      name: 'Professional Digital Camera',
      price: 699.99,
      rating: 4.8,
      image: camera,
      discount: 8,
      category: 'electronics',
      description: 'Capture stunning photos and videos with this professional-grade digital camera.',
      countInStock: 8,
      featured: false,
      onSale: true,
      recommended: false
    },
    {
      _id: '7',
      name: 'Coffee Maker with Grinder',
      price: 129.99,
      rating: 4.1,
      image: coffeemaker,
      discount: 15,
      category: 'home-kitchen',
      description: 'Brew fresh coffee from whole beans with this all-in-one coffee maker and grinder.',
      countInStock: 22,
      featured: false,
      onSale: true,
      recommended: true
    },
    {
      _id: '8',
      name: 'Air Purifier for Large Rooms',
      price: 189.99,
      rating: 4.6,
      image: airpurifier,
      discount: 10,
      category: 'home-kitchen',
      description: 'Breathe cleaner air with this large room air purifier that removes allergens, dust, and odors.',
      countInStock: 14,
      featured: false,
      onSale: false,
      recommended: true
    },
    {
      _id: '9',
      name: 'Ergonomic Office Chair',
      price: 159.99,
      rating: 4.4,
      image: officechair,
      discount: 0,
      category: 'furniture',
      description: 'Work comfortably with this adjustable ergonomic office chair designed for all-day support.',
      countInStock: 17,
      featured: false,
      onSale: false,
      recommended: true
    },
    {
      _id: '10',
      name: 'Stainless Steel Cookware Set',
      price: 119.99,
      rating: 4.2,
      image: cookwareset,
      discount: 10,
      category: 'home-kitchen',
      description: 'Complete 10-piece stainless steel cookware set ideal for any kitchen.',
      countInStock: 12,
      featured: false,
      onSale: true,
      recommended: false
    },
    {
      _id: '11',
      name: 'Wireless Gaming Mouse',
      price: 59.99,
      rating: 4.5,
      image: gamingmouse,
      discount: 0,
      category: 'electronics',
      description: 'Gain a competitive edge with this responsive wireless gaming mouse featuring customizable buttons.',
      countInStock: 35,
      featured: false,
      onSale: false,
      recommended: true
    },
    {
      _id: '12',
      name: 'Portable Bluetooth Keyboard',
      price: 39.99,
      rating: 4.0,
      image: keyboard,
      discount: 5,
      category: 'electronics',
      description: 'Type on the go with this compact, foldable Bluetooth keyboard compatible with all devices.',
      countInStock: 40,
      featured: false,
      onSale: true,
      recommended: false
    },
    {
      _id: '13',
      name: 'Electric Toothbrush',
      price: 69.99,
      rating: 4.3,
      image: toothbrush,
      discount: 8,
      category: 'health',
      description: 'Achieve better oral hygiene with this rechargeable electric toothbrush with multiple cleaning modes.',
      countInStock: 28,
      featured: false,
      onSale: true,
      recommended: true
    },
    {
      _id: '14',
      name: 'Fitness Tracker Wristband',
      price: 49.99,
      rating: 4.1,
      image: wristband,
      discount: 0,
      category: 'electronics',
      description: 'Monitor your steps, heart rate, sleep, and more with this waterproof fitness tracker.',
      countInStock: 42,
      featured: false,
      onSale: false,
      recommended: true
    },
    {
      _id: '15',
      name: 'Wireless Earbuds',
      price: 89.99,
      rating: 4.6,
      image: earbuds,
      discount: 15,
      category: 'electronics',
      description: 'True wireless earbuds with premium sound quality and long battery life.',
      countInStock: 23,
      featured: false,
      onSale: true,
      recommended: true
    },
    {
      _id: '16',
      name: 'Portable Power Bank',
      price: 29.99,
      rating: 4.4,
      image: powerbank,
      discount: 0,
      category: 'electronics',
      description: 'Keep your devices charged on the go with this high-capacity portable power bank.',
      countInStock: 50,
      featured: false,
      onSale: false,
      recommended: true
    }
  ];
  
  // Ad data
  export const ads = [
    {
      _id: 'ad1',
      name: 'Summer Sale Banner',
      image: banner2,
      link: '/category/deals',
      altText: 'Summer Sale - Up to 50% off',
      position: 'home-top'
    },
    {
      _id: 'ad2',
      name: 'New Electronics',
      image: '/api/placeholder/1200/120',
      link: '/category/electronics',
      altText: 'Discover the latest electronics',
      position: 'home-middle'
    },
    {
      _id: 'ad3',
      name: 'Kitchen Appliance Promotion',
      image: '/api/placeholder/1200/120',
      link: '/category/home-kitchen',
      altText: 'Kitchen Appliance Sale',
      position: 'category'
    },
    {
      _id: 'ad4',
      name: 'Limited Time Offer',
      image: '/api/placeholder/1200/120',
      link: '/product/5',
      altText: 'Limited Time Offer on Robot Vacuums',
      position: 'product'
    },
    {
      _id: 'ad5',
      name: 'Free Shipping Promotion',
      image: '/api/placeholder/1200/120',
      link: '/category/deals',
      altText: 'Free Shipping on Orders over $50',
      position: 'home-bottom'
    },
    {
      _id: 'ad6',
      name: 'Holiday Special',
      image: '/api/placeholder/1200/120',
      link: '/category/deals',
      altText: 'Holiday Special Deals',
      position: 'home-top'
    }
  ];
  
  // Categories
  export const categories = [
    { id: 'electronics', name: 'Electronics' },
    { id: 'home-kitchen', name: 'Home & Kitchen' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'health', name: 'Health & Beauty' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'toys', name: 'Toys' },
    { id: 'deals', name: 'Deals' }
  ];
  
  // Banner data
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import banner4 from '../images/banner4.jpg';

  export const banners = [
    {
      id: 'banner1',
      image: banner1,
      title: 'Spring Sale!',
      subtitle: 'Up to 40% off on selected items',
      buttonText: 'Shop Now',
      buttonLink: '/category/deals'
    },
    {
      id: 'banner2',
      image: banner2,
      title: 'New Electronics',
      subtitle: 'Discover the latest tech gadgets',
      buttonText: 'Explore',
      buttonLink: '/category/electronics'
    },
    {
      id: 'banner3',
      image: banner3,
      title: 'Home & Kitchen Essentials',
      subtitle: 'Upgrade your home with our premium selection',
      buttonText: 'Shop Collection',
      buttonLink: '/category/home-kitchen'
    },
    {
      id: 'banner4',
      image: banner4,
      title: 'Limited Time Offers',
      subtitle: 'Don\'t miss these exclusive deals',
      buttonText: 'See Offers',
      buttonLink: '/category/deals'
    }
  ];