export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
      
      <div className="text-center space-y-6">
        
        {/* Logo / Brand */}
        <h1 className="text-3xl font-bold tracking-wide">
          Keen<span className="text-green-500">Keeper</span>
        </h1>

        {/* Spinner */}
        <div className="flex justify-center">
          <div className="w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div>
          <h2 className="text-xl font-semibold">Loading...</h2>
          <p className="text-gray-400 text-sm mt-1">
            Preparing your experience
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-green-500 animate-pulse w-2/3"></div>
        </div>

      </div>
    </div>
  );
}