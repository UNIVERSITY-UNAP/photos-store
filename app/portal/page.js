import { Box, Button, Container, ImageList, ImageListItem } from "@mui/material"

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
      <main>
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Box>
            <ImageList sx={{ height: "80vh" }} cols={3} >
              {itemData.map((item, index) => (
                <ImageListItem key={index} >
                  <img
                    alt={item.title}
                    loading="lazy"
                    src={item.img}
                    srcSet={item.img}
                  />

                  <Box sx={{ position: "absolute", bottom: "10px", left: "10px" }}>
                    <Button variant="contained" sx={{ mr: 2 }} >
                      ver
                    </Button>
                    <Button
                      role="undefined"
                      color="primary"
                      variant="contained"
                      type=""
                    >comprar</Button>
                  </Box>
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Container>
      </main>
    </>
  )
}
export default Page