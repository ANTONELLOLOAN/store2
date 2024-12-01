import Link from "next/link"
import { Button } from "../ui/button"
import { LuShoppingCart } from "react-icons/lu"

function CartButton() {
  // temp
  const numItemsInCart = 9
  return (
    <Button asChild variant={"outline"} size={"icon"} className="flex justify-center items-center relative p-2 cursor-pointer">
      <Link href="/cart">
        <LuShoppingCart className="w-6 h-6" />
        <span className="absolute -top-3 -right-3 bg-primary text-white w-6 h-6 flex justify-center items-center rounded-full text-xs">{numItemsInCart}</span>
          </Link>
    </Button>
  )
}
export default CartButton