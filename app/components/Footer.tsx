import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-12 md:pt-16 pb-10 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="block md:hidden">
          <div className="flex flex-col items-center text-center space-y-4 max-w-md mx-auto">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo-text.png"
                alt="DevStack Logo"
                width={140}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </Link>
            
            <p className="text-slate-400 text-xs leading-relaxed font-normal">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 text-xs font-semibold text-slate-700 pt-1">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                GitHub
              </a>
              <span className="text-slate-300">•</span>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                Twitter
              </a>
              <span className="text-slate-300">•</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-12 gap-10 pb-12">
          
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo-text.png"
                alt="DevStack Logo"
                width={140}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </Link>
            
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed font-normal">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-2 text-xs font-semibold text-slate-700">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8">
 
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Product</h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-500">
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Home</Link></li>
                <li><Link href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</Link></li>
                <li><Link href="#projects" className="hover:text-slate-900 transition-colors">Projects</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-500">
                <li><Link href="#about" className="hover:text-slate-900 transition-colors">About</Link></li>
                <li><Link href="#contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-500">
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

          </div>
        </div>
        <div className="mt-8 md:mt-0 pt-6 md:pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-normal gap-3">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-slate-600 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}