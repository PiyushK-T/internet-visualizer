import type { NetworkNodeData } from "../../simulation/types";

interface Props {
  node: NetworkNodeData;
  selected: boolean;
  onSelect: (node: NetworkNodeData) => void;
}

export default function NetworkNode({
  node,
  selected,
  onSelect,
}: Props) {

  return (
    <div
      className="
        relative
        cursor-pointer
        select-none
        p-4
      "
      onClick={() => onSelect(node)}
    >

      {/* Invisible expanded click area */}
      <div
        className="
          absolute
          -inset-4
          rounded-2xl
        "
      />


      {/* Actual visible node */}
      <div
        className={`
          relative

          w-72
          h-28

          rounded-xl

          border

          flex
          items-center

          px-5
          gap-5

          bg-gray-950

          transition-all
          duration-200

          hover:scale-105


          ${
            selected
            ?
            "border-green-400 shadow-lg shadow-green-400/30 scale-105"
            :
            "border-gray-700 hover:border-gray-400"
          }

        `}
      >

        <div className="text-5xl">
          {node.icon}
        </div>


        <div className="flex-1 min-w-0">

          <h2 className="font-bold text-lg">
            {node.title}
          </h2>


          <p className="text-sm text-gray-400 line-clamp-2">
            {node.description}
          </p>

        </div>

      </div>

    </div>
  );
}