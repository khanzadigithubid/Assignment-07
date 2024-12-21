import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="h-screen bg-pink-300 flex justify-center items-center">
      <div className="w-full max-w-lg py-6 px-8 bg-pink-400 shadow-lg rounded-lg">

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Click One...👆</h2>
          <p className="text-md text-black">
         Client and Server Side Data Fetching 
          </p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link href="/client-data-fetch">
            <Button
              button="Client-Side Data Fetching"
              className="bg-pink-800 text-white hover:bg-pink-700"
            />
          </Link>
          <Link href="/server-data-fetch">
            <Button
              button="Server-Side Data Fetching"
              className="bg-pink-800 text-white hover:bg-pink-700"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
