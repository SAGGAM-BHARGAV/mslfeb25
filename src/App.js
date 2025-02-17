import React, { useState } from "react";
import "./App.css";

 

const ADMIN_CODE = "123456";

const App = () => {
  const [cart, setCart] = useState([]);
  
  const [adminCode, setAdminCode] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [categories, setCategories] = useState({
    "మసాలా (Masala)": [
          { id: 1, name: "జీలకర (Cumin Seeds)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518682/IMG-20250214-WA0018_q9162d.jpg" },
          { id: 2, name: "ఆవాలు (Mustard Seeds)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518683/IMG-20250214-WA0022_cg6es8.jpg" },
          { id: 3, name: "మెంతులు (Fenugreek Seeds)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518684/IMG-20250214-WA0033_rx8hca.jpg" },
          { id: 4, name: "మిరియాలు (Black Pepper)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518682/IMG-20250214-WA0021_t9gtua.jpg" },
          { id: 5, name: "సొంటి (Dry Ginger)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518682/IMG-20250214-WA0019_f3g1va.jpg" },
          { id: 6, name: "నువ్వులు (Sesame Seeds)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518683/IMG-20250214-WA0027_qphyac.jpg" },
          { id: 7, name: "సాజీరా (Caraway Seeds)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518690/IMG-20250214-WA0037_pjlezi.jpg" },
          { id: 8, name: "దాల్చిన చెక్క (Cinnamon)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518683/IMG-20250214-WA0026_qs1nhc.jpg" },
          { id: 9, name: "బందపువ్వు (Stone Flower)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518714/IMG-20250214-WA0095_ibf6it.jpg" },
          { id: 10, name: "బిర్యానీ ఆకు (Bay Leaf)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518690/IMG-20250214-WA0042_prag9d.jpg" },
          { id: 11, name: "యాలకులు (Cardamom)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518680/IMG-20250214-WA0015_akh4l9.jpg" },
          { id: 12, name: "లవంగాలు (Cloves)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518690/IMG-20250214-WA0035_iiym5w.jpg" },
          { id: 13, name: "తినే సోడా (Baking Soda)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518683/IMG-20250214-WA0014_cbfhpn.jpg" },
          { id: 14, name: "టెస్టింగ్ సాల్ట్ (Testing Salt)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518684/IMG-20250214-WA0034_gk4vvd.jpg" },
          { id: 15, name: "నిమ్మ సాల్ట్ (Lemon Salt)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518682/IMG-20250214-WA0010_jygwkr.jpg" },
          { id: 16, name: "కసూరి మెత్తి (Kasoori Methi)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518683/IMG-20250214-WA0012_ozhivu.jpg" },
          { id: 17, name: "స్టార్ అనీస్ (Star Anise)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518681/IMG-20250214-WA0017_kq9nnr.jpg" },
          { id: 18, name: "ఎండు మిర్చి (Dry Red Chili)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518682/IMG-20250214-WA0020_rkku0k.jpg" },
          { id: 19, name: "సోపు (Soap)", price: 50, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518706/IMG-20250214-WA0083_iniydc.jpg" },
          { id: 20, name: "ధనియాలు (Coriander Seeds)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518683/IMG-20250214-WA0024_qp7zhg.jpg" },
          { id: 21, name: "ధనియ పౌడర్ (Coriander Powder)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518691/IMG-20250214-WA0043_wtjpjw.jpg" },
          { id: 22, name: "కుడుక పౌడర్ (Coconut Powder)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518683/IMG-20250214-WA0023_wghxe5.jpg" },
          { id: 23, name: "కాసు ()", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518716/IMG-20250214-WA0099_ncbq0g.jpg" },
          { id: 24, name: "పసుపు (Turmeric)", price: 50, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518680/IMG-20250214-WA0016_abealr.jpg" },
          { id: 25, name: "కుంకుమ (Kumkum)", price: 50, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518684/IMG-20250214-WA0028_idno6z.jpg" },
          { id: 26, name: "బూక (Brown)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518683/IMG-20250214-WA0025_tjwsj1.jpg" },
          { id: 27, name: "గులాలు (pink)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518684/IMG-20250214-WA0032_jr6xn0.jpg" },
          { id: 28, name: "వుడూ ()", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518684/IMG-20250214-WA0030_dihfis.jpg" },
          { id: 29, name: "గుగ్గిలం (Frankincense)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518690/IMG-20250214-WA0039_c9nxk0.jpg" },
          { id: 30, name: "మహిషాద్రి ()", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518682/IMG-20250214-WA0011_i0wvw8.jpg" },
          { id: 31, name: "బ్రష్లు (Brushes)", price: 108, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518700/IMG-20250214-WA0054_qysu7s.jpg" },
          { id: 32, name: "సేఫ్టీ పిన్స్ (Safety Pins)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518681/IMG-20250214-WA0009_wcfs9u.jpg" },
          { id: 33, name: "రబ్బర్స్ (Rubber Bands)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518690/IMG-20250214-WA0040_bl2sbs.jpg" },
          { id: 34, name: "పుట్టనాలు (Beads)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518684/IMG-20250214-WA0029_seybt0.jpg" },
          { id: 35, name: "కడ చక్కెర (khadi Sugar)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518690/IMG-20250214-WA0041_rgoyk5.jpg" },
          { id: 36, name: "గరం మసాలా (Garam Masala)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739529255/IMG-20250214-WA0105_gxpzaq.jpg" },
          { id: 37, name: "బిర్యాని మసాలా (Biryani Masala)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739529253/IMG-20250214-WA0103_xlu53o.jpg" },
          { id: 38, name: "పోక వక్కలు (Areca Nut)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518680/IMG-20250214-WA0002_dxw9pr.jpg" },
          { id: 39, name: "putana masala", price: 50, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739529255/IMG-20250214-WA0104_ur8xzx.jpg" },
          { id: 40, name: "సబుదాన (Sago)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518681/IMG-20250214-WA0008_w449yh.jpg" },
          { id: 41, name: "soya bag", price: 260, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739529254/IMG-20250214-WA0106_zdipze.jpg" },
          { id: 42, name: "soya chunks", price: 70, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739529254/IMG-20250214-WA0107_jbzkfn.jpg" }, 
          { id: 43, name: "ఎండు పళ్ళు (dry fruits)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518681/IMG-20250214-WA0006_nlva8c.jpg" },
          { id: 44, name: "పసుపు,కుంకుమ (Turmeric,Kumkum)", price: 70, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518699/IMG-20250214-WA0057_lnkr6v.jpg" },
          { id: 45, name: "హారతి కర్పూరం (swastik karpur)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518680/IMG-20250214-WA0001_use1cj.jpg" },
          { id: 46, name: "వత్తులు (vattulu)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518681/IMG-20250214-WA0004_j49ofi.jpg" },
          { id: 47, name: "ఓమ (oma)", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518680/IMG-20250214-WA0005_w1u2vz.jpg" },
          { id: 48, name: "butter fun", price: 60, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518697/IMG-20250214-WA0058_d2oxo8.jpg" },
          { id: 49, name: "lp garlic", price: 80, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518699/IMG-20250214-WA0061_ecw9kt.jpg" },
          { id: 50, name: "small rings", price: 32, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518700/IMG-20250214-WA0062_yqejz2.jpg" },
          { id: 51, name: "everest meat masala", price: 40, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518699/IMG-20250214-WA0060_h5cgz2.jpg" },
          { id: 52, name: "everest sambhar masala", price: 40, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518698/IMG-20250214-WA0059_hywl6n.jpg" },
          { id: 53, name: "everest chichen masala", price: 40, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518695/IMG-20250214-WA0051_e8bgu5.jpg" },
          { id: 54, name: "everest garam masala", price: 40, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518700/IMG-20250214-WA0063_cl5yii.jpg" },
          { id: 55, name: "green apple", price: 60, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518718/IMG-20250214-WA0093_qaids5.jpg" },
          { id: 56, name: "eclairs", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518716/IMG-20250214-WA0092_ldnlxy.jpg" },
          { id: 57, name: "dark block", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518702/IMG-20250214-WA0066_xllcet.jpg" },
          { id: 58, name: "dark white", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518703/IMG-20250214-WA0068_ob5fzw.jpg" },
          { id: 59, name: "stawberry ", price: 100, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518702/IMG-20250214-WA0069_x8dwin.jpg" },
          { id: 60, name: "chat mita mango", price: 80, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518696/IMG-20250214-WA0055_xcnmkd.jpg" }, 
          { id: 61, name: "chat mita pineapple", price: 80, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518692/IMG-20250214-WA0050_ii8qrh.jpg" },
          { id: 62, name: "chat mita orange", price: 80, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518692/IMG-20250214-WA0047_a7jnbm.jpg" },
          { id: 63, name: "chat mita guava", price: 80, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518691/IMG-20250214-WA0046_rbhhff.jpg" },
          { id: 64, name: "mango pepsi", price: 25, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518692/IMG-20250214-WA0049_jungua.jpg" },
          { id: 65, name: "big babol", price: 165, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518693/IMG-20250214-WA0048_jgkopu.jpg" },
          { id: 66, name: "boomer", price: 140, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518694/IMG-20250214-WA0053_xiy8cb.jpg" },
          { id: 67, name: "thosh or rusk", price: 230, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518699/IMG-20250214-WA0052_meablx.jpg" },
          { id: 68, name: "colgate brush", price: 169, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518701/IMG-20250214-WA0056_rtnzd6.jpg" },
          { id: 69, name: "gold coin", price: 130, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518701/IMG-20250214-WA0067_tziltu.jpg" },
          { id: 70, name: "cake", price: 200, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518701/IMG-20250214-WA0065_mvpuxb.jpg" },
          { id: 71, name: "minar small", price: 70, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518702/IMG-20250214-WA0070_ni4kon.jpg" },
          { id: 72, name: "minar big", price: 165, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518705/IMG-20250214-WA0078_jy3ts7.jpg" },
          { id: 73, name: "usmaniya", price: 20, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518703/IMG-20250214-WA0064_y9den5.jpg" },
          { id: 74, name: "imly", price: 150, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518704/IMG-20250214-WA0073_pjcgpk.jpg" },
          { id: 75, name: "watch", price: 45, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518703/IMG-20250214-WA0072_m56nsh.jpg" },
          { id: 76, name: "rings jar", price: 150, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518704/IMG-20250214-WA0071_gawcs2.jpg" },
          { id: 77, name: "snackers", price: 130, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518705/IMG-20250214-WA0079_os9tet.jpg" },
          { id: 78, name: "cream biscuits", price: 48, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518705/IMG-20250214-WA0077_tdz74m.jpg" },
          { id: 79, name: "balusha 1/-", price: 20, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518707/IMG-20250214-WA0085_ixha4e.jpg" },
          { id: 80, name: "laddu", price: 50, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518710/IMG-20250214-WA0089_ziovbl.jpg" },
          { id: 81, name: "pallipatti 2/-", price: 80, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518710/IMG-20250214-WA0081_oahesi.jpg" },
          { id: 82, name: "pallipatti 1/-", price: 18, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518717/IMG-20250214-WA0102_k7h054.jpg" },
          { id: 83, name: "rose", price: 42, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518710/IMG-20250214-WA0090_a4pm3a.jpg" },
          { id: 84, name: "sounf whestle", price: 130, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518711/IMG-20250214-WA0080_zvvbxq.jpg" },
          { id: 85, name: "sounf", price: 130, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518716/IMG-20250214-WA0098_vnamm7.jpg" },
          { id: 86, name: "balusha 5/-", price: 150, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518714/IMG-20250214-WA0094_hjnrnz.jpg" },
          { id: 87, name: "dayrio", price: 200, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518714/IMG-20250214-WA0087_j27y3b.jpg" },
          { id: 88, name: "rasgulla", price: 20, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739518718/IMG-20250214-WA0101_fu0iia.jpg" },
          { id: 89, name: "ravali", price: 42, image: "https://res.cloudinary.com/dj0u6aez5/image/upload/v1739528643/images_icckda.jpg" },
    ],
  });
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

