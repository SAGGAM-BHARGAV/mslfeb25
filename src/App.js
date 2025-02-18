import React, { useState, useEffect } from "react";
import "./App.css";

 

const ADMIN_CODE = "123456";

const App = () => {
  const [cart, setCart] = useState([]);
  
  const [adminCode, setAdminCode] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [categories, setCategories] = useState(() => {
    // Load data from localStorage if available, else use default categories
    const savedData = localStorage.getItem("categories");
    return savedData ? JSON.parse(savedData) : {
      "మసాలా (Masala)": [
        { id: 1, name: "జీలకర (Cumin Seeds)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518682/IMG-20250214-WA0018_q9162d.jpg" },
        { id: 2, name: "ఓమ (oma)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518680/IMG-20250214-WA0005_w1u2vz.jpg" },
      ],
    };
  });

  // Update localStorage whenever categories change
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);
  const [items, setItems] = useState(categories["మసాలా (Masala)"]);
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({ name: "", price: "", image: "" });

  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      return existingItem
        ? prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          )
        : [...prevCart, { ...item, quantity }];
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const shareOnWhatsApp = () => {
    const shopOwnerNumber = "917036783962";
    const message = cart.map((item) => `${item.name} - ${item.quantity} items = ₹${item.price * item.quantity}`).join("%0A");
    const totalPrice = getTotalPrice();
    const whatsappLink = `https://wa.me/${shopOwnerNumber}?text=Order Details:%0A${message}%0ATotal: ₹${totalPrice}`;
    window.open(whatsappLink, "_blank");
  };

  const handleAdminLogin = () => {
    if (adminCode === ADMIN_CODE) {
      setIsAdmin(true);
    } else {
      alert("Invalid Code!");
    }
  };

  const handleEditClick = (item) => {
    setEditingItem(item);
  };

  const handleSaveClick = () => {
    setCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };
      Object.keys(updatedCategories).forEach((category) => {
        updatedCategories[category] = updatedCategories[category].map((item) =>
          item.id === editingItem.id ? editingItem : item
        );
      });
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      return updatedCategories;
    });
    setItems((prevItems) => prevItems.map((item) => (item.id === editingItem.id ? editingItem : item)));
    setEditingItem(null);
  };

  const handleDeleteClick = (id) => {
    setCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };
      Object.keys(updatedCategories).forEach((category) => {
        updatedCategories[category] = updatedCategories[category].filter((item) => item.id !== id);
      });
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      return updatedCategories;
    });
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddNewItem = () => {
    if (!newItem.name || !newItem.price || !newItem.image) {
      alert("Please fill in all fields.");
      return; 
    }
    const newItemObj = {
      id: items.length ? Math.max(...items.map((item) => item.id)) + 1 : 1,
      name: newItem.name,
      price: parseFloat(newItem.price),
      image: newItem.image,
    };
    setCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };
      const firstCategory = Object.keys(updatedCategories)[0];
      updatedCategories[firstCategory] = [...updatedCategories[firstCategory], newItemObj];
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      return updatedCategories;
    });
    setItems((prevItems) => [...prevItems, newItemObj]);
    setNewItem({ name: "", price: "", image: "" });
  };

  return (
    <div>
      
      <div> 
      <div className="shop-header">
      
      <div className="header-left">
        <img
          src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1739528348/14_800ce7c8-52fd-4649-983c-e5dff4777271_yquoq7.webp" // Replace with the actual logo URL
          alt="Shop Logo"
          className="shop-logo"
        />
        <div className="shop-details">
          <h1>Lakshana Spices</h1>
      
          <p>Phone: 7036783962</p>
          <div className="contact-icons">
            <a
              href="bhargavb272@gmail.com"
              className="icon email-icon"
            >
              📧
            </a>
            <a
              href="https://maps.app.goo.gl/rsNNSpmMLQ2j8aAQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="icon map-icon"
            >
              📍
            </a>
            <a
              href="https://wa.me/917036783962"
              target="_blank"
              rel="noopener noreferrer"
              className="icon whatsapp-icon"
            >
              💬
            </a>
            <a href="tel:7036783962" className="icon call-icon">
              📞
            </a>
          </div>
        </div>
      </div>

      
      <div className="header-right">
        
        <div className="free-delivery-banner">
          🎉 Free Door Delivery 🎉
        </div><br />
        <button className="cart-button" onClick={() => document.getElementById("ca").scrollIntoView()}>
            CART <span className="cart-count">{getTotalItems()}</span>
          </button>
      </div>
    </div>
      </div>
      
      <div className="ads-section">
        <marquee behavior="scroll" direction="left">
        మీ వ్యాపారాన్ని కూడా నచ్చిన విధంగా ఆన్‌లైన్ చేయండి. మరింత ఆదాయాన్ని పొందండి. మరిన్ని వివరాలకు 7036783962 నంబర్‌ను సంప్రదించండి.
        </marquee>
      </div>
      
      {Object.entries(categories).map(([category, items])  => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="product-list">
            {items.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price} <s>₹{item.mrp}</s></p>
                <button onClick={() => addToCart(item, 1)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      
      <div className="cart">
        <h3 id="ca">Cart</h3>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => addToCart(item, 1)}>+</button>
          <span>₹{item.price * item.quantity}</span>
        </div>
        ))}
        <h4>Total: ₹{getTotalPrice()}</h4>
        <button onClick={shareOnWhatsApp}>Share on WhatsApp</button>
      </div>
      
      <div className="admin-section">
        <input
          type="text"
          placeholder="Enter 6-digit Code"
          value={adminCode}
          onChange={(e) => setAdminCode(e.target.value)}
        />
        {adminCode.length === 6 && (
          <button onClick={handleAdminLogin}>Enter</button>
        )}
      </div>

      {isAdmin && (
        <div className="admin-panel">
          <h2>Admin Panel</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    {editingItem?.id === item.id ? (
                      <input
                        type="text"
                        value={editingItem.name}
                        onChange={(e) =>
                          setEditingItem({ ...editingItem, name: e.target.value })
                        }
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>
                    {editingItem?.id === item.id ? (
                      <input
                        type="number"
                        value={editingItem.price}
                        onChange={(e) =>
                          setEditingItem({ ...editingItem, price: e.target.value })
                        }
                      />
                    ) : (
                      `₹${item.price}`
                    )}
                  </td>
                  <td>
                    {editingItem?.id === item.id ? (
                      <input
                        type="text"
                        value={editingItem.image}
                        onChange={(e) =>
                          setEditingItem({ ...editingItem, image: e.target.value })
                        }
                      />
                    ) : (
                      <img src={item.image} alt={item.name} width="50" />
                    )}
                  </td>
                  <td>
                    {editingItem?.id === item.id ? (
                      <button onClick={() => handleSaveClick(item.id)}>Save</button>
                    ) : (
                      <button onClick={() => handleEditClick(item)}>Edit</button>
                    )}
                    <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Add New Item</h3>
          <input
            type="text"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newItem.image}
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
          />
          <button onClick={handleAddNewItem}>Add New Item</button>
        </div>
      )}

      <footer className="footer">
        <p>Address: Vill: Panchagudi, Mo: lokeshwaram, nirmal.</p>
        <p>Pincode: 504104</p>
        <p>&copy; 2025 E-Shop. All rights reserved.</p>
  
      </footer>
    </div>
    
  );
};

export default App;

