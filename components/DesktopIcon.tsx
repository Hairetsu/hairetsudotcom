import { DesktopIcon } from "./types";

export function DesktopIconComponent({
  icon,
  onDoubleClick,
}: {
  icon: DesktopIcon;
  onDoubleClick: () => void;
}) {
  const IconComponent = icon.icon;
  return (
    <div
      className="flex flex-col items-center gap-2.5 p-3 rounded-xl cursor-pointer group w-24 transition-all duration-300 hover:scale-110 border-2"
      style={{
        backgroundColor: "var(--desktop-overlay-start)",
        backdropFilter: "blur(12px)",
        borderColor: "transparent",
      }}
      onDoubleClick={onDoubleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-purple-400)";
        e.currentTarget.style.backgroundColor = "var(--taskbar-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "transparent";
        e.currentTarget.style.backgroundColor = "var(--desktop-overlay-start)";
      }}
    >
      <div
        className="p-3.5 rounded-xl transition-all duration-300 shadow-xl backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(135deg, var(--taskbar-hover), var(--window-bg))",
          border: "2px solid var(--window-border)",
        }}
      >
        <IconComponent size={36} className="text-purple-400 opacity-80" />
      </div>
      <span
        className="text-xs text-center leading-tight px-2 py-1.5 rounded-lg font-semibold transition-all duration-300 shadow-md"
        style={{
          color: "var(--taskbar-text)",
          backgroundColor: "var(--taskbar-hover)",
        }}
      >
        {icon.label}
      </span>
    </div>
  );
}
