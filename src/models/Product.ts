import * as Yup from 'yup';

// "URL": "https://shop.adidas.co.in/#!product/CM0081_pukaws",
// "Product_Name": "Women's adidas Swim Puka Slippers",
// "Product_ID": "CM0081",
// "Listing_Price": 999,
// "Sale_Price": 599,
// "Discount": 40,
// "Brand": "CORE / NEO",
// "Description": "These adidas Puka slippers for women's come with slim straps for a great fit. Feature performance logo on the footbed and textured Rubber outsole that gives unique comfort.",
// "Rating": 0,
// "Reviews": 0,
// "Images": [
// "https://content.adidas.co.in/static/Product-CM0081/Men_SWIM_SLIDES_CM0081_1.jpg"

export type Product = {
  Product_ID: string,
  Product_Name: string,
  Description: string,
  Listing_Price: number,
  Images: string[];
};

export const ProductSchema = Yup.object().shape({
  Product_ID: Yup.string().required(),
  Product_Name: Yup.string().required(),
  Description: Yup.string(),
  Listing_Price: Yup.number().required(),
});
