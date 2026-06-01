import { redirect } from "next/navigation";

export default async function Home() {
  // Route protection is now entirely handled by your proxy setup!
  redirect("/browse");
}
// export { user };
