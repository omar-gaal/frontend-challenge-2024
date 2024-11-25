
// import { FaBeer } from 'react-icons/fa';
import Link from "next/link";


export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10  " >
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} @Novicell. All rights reserved.</p>
          <div className="mt-4">

            
         <Link href="/404page" className="text-gray-400 hover:text-white mx-2"  >
              Privacy Policy
         </Link>
         
         <Link href="/404page" className="text-gray-400 hover:text-white mx-2"  >
         About Us
         </Link>
          </div>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-2"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }
  