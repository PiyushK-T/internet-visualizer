import type { NetworkNodeData } from "../../simulation/types";

interface Props {
  node: NetworkNodeData;
  selected: boolean;
  active?: boolean;
  onSelect: (node: NetworkNodeData) => void;
}

export default function NetworkNode({
  node,
  selected,
  active = false,
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
          w-[230px]
          h-[96px]
          rounded-xl
          border
          flex
          items-center
          px-4
          gap-3
          bg-gray-950/95
          backdrop-blur
          transition-all
          duration-200
          hover:scale-105
          ${
            selected || active
              ? "border-blue-400 shadow-lg shadow-blue-400/30 scale-105"
              : "border-gray-700 hover:border-gray-400"
          }
        `}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-xl">
          {node.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="font-semibold text-sm leading-tight">
            {node.title}
          </h2>
          <p className="mt-1 text-xs text-gray-400 line-clamp-2">
            {node.description}
          </p>
        </div>

      </div>

    </div>
  );
}