import { RxStitchesLogo } from 'react-icons/rx';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="py-3 px-4 md:px-7 flex justify-between items-center border-b border-gray-900 z-50">
      <div className="flex items-center gap-x-1">
        <RxStitchesLogo className="text-cyan-400 w-5 h-fit" />
        <h1 className="text-lg font-heading font-semibold">DigiPage</h1>
      </div>

      <NavBar />
    </header>
  );
}
