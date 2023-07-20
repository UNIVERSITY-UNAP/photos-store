import { Button, ButtonGroup, Divider, Input, Typography } from "@mui/material"
import Image from "next/image"

const CartItem = () => {
  return (
    <div>
      <>
        <div className="flex justify-between my-3">
          <div className="flex flex-col">
            <Typography variant="h6" >
              Montaña 7 colores - Perú
            </Typography>
            <Typography variant="p">
              Precio: $20.00
            </Typography>
          </div>
          <img style={{ maxWidth: 100, objectFit: "cover" }} src="/static/img/1.jpg" alt="Dunas Perú" />
        </div>
        <Divider />
      </>
      <>
        <div className="flex justify-between my-3">
          <div className="flex flex-col">
            <Typography variant="h6" >
              Amazonas - Peru
            </Typography>
            <Typography variant="p">
              Precio: $10.00
            </Typography>
          </div>
          <img style={{ maxWidth: 100, objectFit: "cover" }} src="/static/img/2.jpg" alt="Amazonas - Perú" />
        </div>
        <Divider />
      </>
    </div>
  )
}
export default CartItem