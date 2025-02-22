"use client"

import type React from "react"

import { Box, Container, Heading, Text, Button, SimpleGrid, Image, Flex, VStack, HStack, Icon } from "@chakra-ui/react"
import { FaShoppingCart, FaTruck, FaUndo } from "react-icons/fa"

// Define the Product type
type Product = {
  id: number
  name: string
  price: number
  image: string
}

// Sample product data
const featuredProducts: Product[] = [
  { id: 1, name: "Stylish Watch", price: 99.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Leather Bag", price: 149.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Sunglasses", price: 59.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Running Shoes", price: 89.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function Testing() {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="gray.100" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              ShopNow
            </Heading>
            <HStack spacing={4}>
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Products</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="flex-start">
            <Heading as="h2" size="3xl">
              Welcome to ShopNow
            </Heading>
            <Text fontSize="xl">Discover amazing products at unbeatable prices!</Text>
            <Button size="lg" colorScheme="white" variant="outline">
              Shop Now
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Featured Products */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading as="h3" size="2xl">
              Featured Products
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {featuredProducts.map((product) => (
                <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} />
                  <Box p={6}>
                    <VStack align="flex-start" spacing={2}>
                      <Heading as="h4" size="md">
                        {product.name}
                      </Heading>
                      <Text fontWeight="bold" fontSize="lg">
                        ${product.price.toFixed(2)}
                      </Text>
                      <Button colorScheme="blue">Add to Cart</Button>
                    </VStack>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Features */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature icon={FaShoppingCart} title="Easy Shopping" description="Browse and buy with just a few clicks" />
            <Feature icon={FaTruck} title="Fast Delivery" description="Get your items delivered quickly" />
            <Feature icon={FaUndo} title="Easy Returns" description="Hassle-free return policy" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
            <VStack align="flex-start">
              <Heading as="h4" size="md">
                Shop
              </Heading>
              <Button variant="link" color="white">
                New Arrivals
              </Button>
              <Button variant="link" color="white">
                Best Sellers
              </Button>
              <Button variant="link" color="white">
                Sale
              </Button>
            </VStack>
            <VStack align="flex-start">
              <Heading as="h4" size="md">
                Customer Service
              </Heading>
              <Button variant="link" color="white">
                Contact Us
              </Button>
              <Button variant="link" color="white">
                Shipping
              </Button>
              <Button variant="link" color="white">
                Returns
              </Button>
            </VStack>
            <VStack align="flex-start">
              <Heading as="h4" size="md">
                About Us
              </Heading>
              <Button variant="link" color="white">
                Our Story
              </Button>
              <Button variant="link" color="white">
                Careers
              </Button>
              <Button variant="link" color="white">
                Press
              </Button>
            </VStack>
            <VStack align="flex-start">
              <Heading as="h4" size="md">
                Follow Us
              </Heading>
              <Button variant="link" color="white">
                Facebook
              </Button>
              <Button variant="link" color="white">
                Instagram
              </Button>
              <Button variant="link" color="white">
                Twitter
              </Button>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}

// Feature component
const Feature = ({ icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <VStack align="flex-start" spacing={4}>
    <Icon as={icon} boxSize={10} color="blue.500" />
    <Heading as="h4" size="md">
      {title}
    </Heading>
    <Text>{description}</Text>
  </VStack>
)

