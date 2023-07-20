import { Avatar, Box, Button, Card, Container, ImageList, ImageListItem, ImageListItemBar, Tooltip } from "@mui/material"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const path = '/static/img/'
const itemData = []

const Page = () => {
  for (let i = 0; i < 20; i++) {
    itemData.push({
      img: `${path}${i + 1}.jpg`,
      title: `Image${i + 1}`,
    })
  }
  return (
    <>
      <main style={{background: "white"}}>
        <Container maxWidth="lg" sx={{display: 'flex', py: 3 }}>
          <Box>
            <ImageList sx={{  }} cols={3} >
              {itemData.map((item, index) => (
                <Card key = {index}>
                  <ImageListItem sx = {{ height: '100% !important'}}>
                  <ImageListItemBar
                   sx = {{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0, 0, 0, 0.3)70%, rgba(0, 0, 0, 0.3)100%)',
                   }}
                   actionIcon = {
                    <Tooltip sx = {{mr:'5px'}}>
                      <Avatar src={item.img}/>
                    </Tooltip>
                   }
                   position="top"
                  />
                  <img
                    alt={item.title}
                    loading="lazy"
                    src={item.img}
                    srcSet={item.img}
                  />

                  <Box sx={{ position: "absolute", bottom: "10px", left: "10px" }}>
                    <Button variant="contained" sx={{ mr: 2 }} >
                      <VisibilityOutlinedIcon sx = {{ mt: -.2,mr: .9 }} fontSize="small"/>  ver
                    </Button>
                    <Button
                      role="undefined"
                      color="primary"
                      variant="contained"
                      type=""
                    >
                      <ShoppingCartIcon sx = {{mt: -.2,  mr: .9}} fontSize="small" /> 
                      comprar
                    </Button>
                  </Box>
                </ImageListItem>
                </Card>
              ))}
            </ImageList>
          </Box>
        </Container>
      </main>
    </>
  )
}
export default Page