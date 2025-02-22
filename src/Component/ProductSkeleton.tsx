import { SkeletonCircle, SkeletonText } from "../components/ui/skeleton";
import { Grid, HStack, Stack } from "@chakra-ui/react"
import { Skeleton}from "@chakra-ui/react"

  const ProductSkeleton = ({ }) => {
  return (
      <>
    
      
        <SkeletonCircle size="10" />
        <SkeletonText noOfLines={2} />
      <Skeleton height="200px" />
   
      </>
  )
}
export default  ProductSkeleton;