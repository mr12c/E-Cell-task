import React from 'react'
import ProductCard from '../ui/ProductCard'
function Product() {
  const products = [
    {title: "Footwear", description: "Comfortable and stylish shoes made from high-quality leather, perfect for any occasion."},
    {title: "Dishes", description: "Beautiful ceramic dishes made with intricate designs, ideal for elegant dining."},
    {title: "Food", description: "Organic and fresh food items sourced from local farms, ensuring quality and taste."},
    {title: "Clothing", description: "Trendy and comfortable clothing made from sustainable fabrics, suitable for all seasons."},
    {title: "Electronics", description: "Latest electronics featuring advanced technology and sleek designs for modern living."},
    {title: "Books", description: "A collection of best-selling books across various genres to ignite your imagination."},
    {title: "Furniture", description: "Durable and stylish furniture pieces crafted from premium materials, perfect for any home."},
    {title: "Toys", description: "Fun and educational toys designed to stimulate creativity and learning in children."},
    {title: "Gardening", description: "High-quality gardening tools and accessories for maintaining a beautiful and healthy garden."},
    {title: "Sports", description: "Professional sports equipment and gear to enhance your athletic performance."},
    {title: "Tools", description: "Reliable and efficient tools for all your DIY and professional projects."},
    {title: "Jewelry", description: "Elegant and timeless jewelry pieces crafted with precision and care."},
    {title: "Appliances", description: "Modern appliances designed to make your household chores easier and more efficient."},
    {title: "Beauty", description: "Premium beauty products that enhance your natural beauty and skincare routine."},
    {title: "Health", description: "Health and wellness products to support a balanced and healthy lifestyle."},
    {title: "Automotive", description: "Top-quality automotive parts and accessories for maintaining and upgrading your vehicle."},
    {title: "Baby Products", description: "Safe and comfortable baby products designed with the utmost care for your little ones."},
    {title: "Musical Instruments", description: "High-quality musical instruments for musicians of all levels, from beginners to professionals."},
    {title: "Office Supplies", description: "Essential office supplies to keep your workspace organized and productive."},
    {title: "Pet Supplies", description: "Premium pet supplies to ensure the health and happiness of your furry friends."},
    {title: "Software", description: "Innovative software solutions to enhance productivity and creativity in your work."},
    {title: "Home Decor", description: "Stylish home decor items to add a touch of elegance and personality to your space."},
    {title: "Groceries", description: "Fresh and high-quality groceries delivered to your doorstep for your convenience."},
    {title: "Personal Care", description: "Personal care products designed to cater to your grooming and hygiene needs."},
    {title: "Stationery", description: "A wide range of stationery items to support all your writing and organizational tasks."},
    {title: "Camping", description: "Durable and reliable camping gear for your outdoor adventures and expeditions."},
    {title: "Cleaning Supplies", description: "Effective and eco-friendly cleaning supplies to keep your home sparkling clean."},
    {title: "Fashion Accessories", description: "Trendy fashion accessories to complement and elevate your personal style."},
    {title: "Kitchenware", description: "High-quality kitchenware to make your cooking and dining experience enjoyable."},
    {title: "Lighting", description: "Modern lighting solutions to brighten up your home and create a warm ambiance."}
  ];
  
  return (
    <div className='w-[100%] mx-auto flex flex-col'>
      <div className='ml-[10%] mt-[2%] producttxt'><h1 className='text-[1.8rem] text-[#ae4cff] font-bold mx-4 mt-2'>Product</h1></div>
      <div className='grid  gap-2 mx-auto w-[90%] mt-10 productgrid'>
         {products.map((item,index)=><ProductCard item={item} index={index}></ProductCard>)}
      </div>

    </div>
  )
}

export default Product