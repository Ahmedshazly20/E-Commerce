import { Grid } from "@chakra-ui/react"

import Cardcomponent from '../Component/Cardcomponent';

function ProductsPage() {
    return (
    <Grid margin={30} templateColumns={"repeat(auto-fill,minmax(300px,1fr))"} gap={6}>
        <Cardcomponent/>
    </Grid>
      
      )
}

export default ProductsPage