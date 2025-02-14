
import Product from '../models/Products.js';

export const addProduct = async (req, res) => {

    try {
        const productsData = req.body;
        console.log(productsData);

        if (!Array.isArray(productsData)) {
            console.log("Invalid/Misinformation Please Enter Correct Details");
        }

        const createdProducts = [];
        const { title, name, desc, img, price, size, category } = productsData;
        console.log(title, name, desc);

        const product =  new Product({
            title,
            name,
            desc,
            img,
            price,
            size,
            category
        });

        const newProduct = await product.save();

        return res.status(200).send("Product added successfully");

    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong", error);
    }
};

export const getProduct = async (req, res) => {

    try {

        console.log(req.query);
        let { categories, minPrice, maxPrice, sizes, search } = req.query;
        sizes = sizes?.split(',');
        categories = categories?.split(',');

        const filter = {};

        if (categories && Array.isArray(categories)) {
            filter.category = { $in: categories };
        }

        if (minPrice || maxPrice) {
            filter["price.org"] = {};

            if (minPrice) {
                filter["price.org"]["$gte"] = parseFloat(minPrice);
            }
            if (maxPrice) {
                filter["price.org"]["$lte"] = parseFloat(maxPrice);
            }
        }

        if (sizes && Array.isArray(sizes)) {
            filter.sizes = { $in: sizes };
        }

        if (search) {
            filter.$or = [
                { title: { $regex: new RegExp(search, "i") } },
                { desc: { $regex: new RegExp(search, "i") } },
            ]
        }

        const products = await Product.find(filter);
        console.log(filter);
        return res.status(200).send(products);

    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong! Please try again");
    }

};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidObjectId(id)) {
            return res.status(400).send("Invalid product ID");
        }

        const product = await findById(id);

        if (!product) {
            return res.status(400).send("Product not found");
        }

        return res.status(200).json(product);

    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong");
    }
}

