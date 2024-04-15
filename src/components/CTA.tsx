import Link from "next/link"
import { Button } from "@nextui-org/react";

export default function CTA () {
  return (
    <div>
      <p>Interested?</p>
      <Button
				variant="shadow"
				radius="lg"
				className="bg-gradient-to-t from-turq to-pink"
			>
				Contact me
			</Button>
    </div>
  )
}