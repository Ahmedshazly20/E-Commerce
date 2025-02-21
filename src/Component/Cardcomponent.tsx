import { useState, useEffect } from 'react';
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Product } from '../interface/interface';
import axios from 'axios';

export default function Cardcomponent() {
  const [Productlist, setProductlist] = useState<Product[]>([]);
  const ApiUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${ApiUrl}/api/products?populate=thumbnail&populate=categories`);
        setProductlist(res.data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {Productlist.length > 0 ? (
        Productlist.map((produc: Product) => (
          <Card.Root key={produc.id} maxW="sm" overflow="hidden">
            <Image
              src={produc?.thumbnail?.formats?.thumbnail?.url ? ApiUrl + produc.thumbnail.formats.thumbnail.url : 'placeholderImage.png'} 
              alt={produc.title} 
              objectFit="cover"
              width="100%"
              height="200px"
            />
            <Card.Body gap="2">
              <Card.Title>{produc.title}</Card.Title>
              <Card.Description>
                {produc.description} {/* Use the actual product description */}
              </Card.Description>
              <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                ${produc.price} {/* Use the actual product price */}
              </Text>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Buy now</Button>
              <Button variant="ghost">Add to cart</Button>
            </Card.Footer>
          </Card.Root>
        ))
      ) : (
        <div>There is no data</div>
      )}
    </>
  );
}