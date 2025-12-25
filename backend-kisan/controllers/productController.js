import Product from "../models/Product.js";

export const createProduct = async (req, res) => {

   console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "Image is required",
      });
    }

    const product = await Product.create({
      user: req.user._id,
      type: req.body.type,
      commodity: req.body.commodity,
      quantity: req.body.quantity,
      state: req.body.state,
      district: req.body.district,
      quality: req.body.quality,
      availableFrom: req.body.availableFrom,
      language: req.body.language,
      comments: req.body.comments,
      isOrganic: req.body.isOrganic,
      isProcessed: req.body.isProcessed,
      isGraded: req.body.isGraded,
      isPacked: req.body.isPacked,
      isStoredAC: req.body.isStoredAC,
      image: req.file.path, // 🔥 Cloudinary URL
      name: req.body.name,
      email: req.body.email,
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Create Product Error:", error);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const getMyProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user._id });
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
