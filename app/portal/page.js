'use client'
import { Avatar, Box, Button, Card, Container, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, Tooltip, useMediaQuery } from "@mui/material"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { StarBorder as StarBorderIcon } from "@mui/icons-material";

import { Link as nLink } from "next/link"

const path = '/static/img/'
const itemData = []

const Page = () => {
  for (let i = 0; i < 20; i++) {
    itemData.push({
      img: `${path}${i + 1}.jpg`,
      title: `Image${i + 1}`,
    })
  }
  const isXL = useMediaQuery('(min-width: 1920px)');
  const isLG = useMediaQuery('(min-width: 1280px)');
  const isMD = useMediaQuery('(min-width: 960px)');
  const isSM = useMediaQuery('(min-width: 600px)');
  let cols = 1
  if (isSM) cols = 1
  else if (isMD) cols = 2
  else if (isLG) cols = 3
  else if (isXL) cols = 4

  return (
    <>
      <main style={{ background: "white" }}>
        <Container maxWidth="xl" sx={{ display: 'flex', py: 3 }}>
          <Box>
            <ImageList sx={{}} cols={cols}>
              {itemData.map((item, index) => (
                <Card key={index} sx={{ m: 1 }}>
                  <ImageListItem sx={{ minHeight: '100%' }}>
                    <ImageListItemBar
                      sx={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%)',
                      }}
                      title={item.title}
                      actionIcon={
                        // <Tooltip sx={{ mr: '5px' }}>
                        // <Avatar src={item.img} />
                        // </Tooltip>
                        <IconButton sx={{ color: 'white' }}
                          aria-label={`star ${item.title}`}>
                          <StarBorderIcon />
                        </IconButton>
                      }
                      position="top"
                      actionPosition="left"
                    />
                    <img
                      alt={item.title}
                      loading="lazy"
                      src={item.img}
                      srcSet={`${item.img} 2x`}
                    />
                    <ImageListItemBar
                      sx={{ ml: 1 }}
                      title={item.title}
                      subtitle={<span>by: <Link>Ommstock</Link></span>}
                      position="below"
                    />

                    <Box sx={{ position: "absolute", bottom: "10px", right: "10px" }}>
                      <Button variant="text" sx={{ mr: 2 }} size="small" >
                        <VisibilityOutlinedIcon sx={{ mt: -.2, mr: .9 }} fontSize="small" />  ver
                      </Button>
                      <Button
                        role="undefined"
                        color="primary"
                        variant="contained"
                        type=""
                        size="small"
                      >
                        <ShoppingCartIcon sx={{ mt: -.2, mr: .9 }} fontSize="small" />
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