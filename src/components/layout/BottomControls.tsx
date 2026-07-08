interface Props{
  onStart: () => void;
}

export default function BottomControls({
  onStart,
}:Props) {
  return (
    <div className="h-20 border-t border-gray-800 flex items-center justify-between px-6">
      
      {/* Left Section: Inputs and Actions */}
      <div className="flex items-center gap-3">
        <input
          className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 w-64"
          placeholder="example.com"
        />

        <button

        onClick={onStart}

        className="
        px-6
        py-3
        rounded-lg
        bg-green-500
        text-black
        font-bold
        "

        >

        Load example.com

        </button>

        <button className="bg-green-400 text-black font-bold px-5 py-2 rounded-lg">
          ▶ Start
        </button>

        <button className="border border-gray-700 px-4 py-2 rounded-lg">
          ↻ Reset
        </button>
      </div>

      {/* Right Section: Speed Controls */}
      <div className="flex items-center gap-3 text-gray-400">
        <span>Speed</span>
        <input type="range" />
      </div>

    </div>
  );
}