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

import sound from '../images/soundsystem.png';
import hdmi from '../images/hdmi.png';
  // Ad data
  export const ads = [
    {
      _id: 'ad1',
      name: ' Premium Soundbar System',
      image: sound,
      link: '/category/deals',
      position: 'home-top'
    },
    {
      _id: 'ad2',
      name: '4K HDMI Cable',
      image: hdmi,
      link: '/category/electronics',
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
    // { 
    //   id: 1, 
    //   name: "Premium Soundbar System", 
    //   image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
    //   description: "Enhance your TV experience with immersive surround sound and deep bass",
    //   price: "$249.99",
    //   rating: 4.8
    // },
    // { 
    //   id: 2, 
    //   title: "4K HDMI Cable", 
    //   image: "https://images.unsplash.com/photo-1633154866401-abb95bac3b51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
    //   description: "Ultra high-speed HDMI 2.1 cable for perfect 4K and 8K picture quality",
    //   price: "$19.99",
    //   rating: 4.9
    // },
    // {
    //   id: 3,
    //   title: "Wireless Surround Speakers",
    //   image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    //   description: "Complete your home theater with these wireless rear speakers for immersive audio",
    //   price: "$149.99",
    //   rating: 4.7
    // },
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