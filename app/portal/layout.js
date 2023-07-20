'use client'
import Cart from "@/components/cart/Cart"
import Footer from "@/components/layouts/footer"
import Navbar from "@/components/layouts/navbar"
import { Drawer } from "@mui/material"
import { useState } from "react"

const LayoutPortal = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <>
      <div>
        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart useCart={{ cartOpen, setCartOpen }} />
        </Drawer>
      </div>
      <Navbar useBadge={{ cartOpen, setCartOpen }} />
      {children}
      <Footer />
    </>
  )
}
export default LayoutPortal