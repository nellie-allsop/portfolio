import Link from "next/link"

export default function Footer () {
  return (
    <footer className="flex p-4 justify-around">

  <p>Find me on LinkedIn 
  <Link href="https://www.linkedin.com/in/nellie-allsop/" className="text-red"> here</Link>
  </p>
    </footer>
  )
}