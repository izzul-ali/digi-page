import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404',
};

export default function NotFound() {
  return (
    <div className="h-screen w-full font-bold font-heading flex flex-col items-center justify-center">
      <h1 className="text-5xl">404</h1>
      <h2 className="text-lg text-center mt-3 text-gray-300">
        Page Not Found or
        <br />
        This Page is Not Implemented Yet
      </h2>
    </div>
  );
}
