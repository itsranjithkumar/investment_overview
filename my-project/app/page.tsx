import { redirect } from "next/navigation"

export default function HomePage() {
  // Redirect to portfolio page as that's what we're implementing
  redirect("/portfolio")
}

