import React, { useState } from "react";
import {
  Search,
  Clock,
  Power,
  Settings as SettingsIcon,
  Folder,
  Terminal,
  Calculator,
  FileText,
  Monitor,
  Wifi,
  Image,
  Music,
  Video,
  Archive,
  User,
  Globe,
} from "lucide-react";
import { FileManagerApp } from "./FileManager/FileManagerApp";
import { TerminalApp } from "./Terminal/TerminalApp";

interface StartMenuProps {
  onClose: () => void;
  createWindow: (
    title: string,
    component: React.ComponentType,
    size?: { width: number; height: number }
  ) => void;
  CalculatorApp: React.ComponentType;
  TextEditorApp: React.ComponentType;
  SettingsApp: React.ComponentType;
  SystemMonitorApp: React.ComponentType;
  ImageViewerApp: React.ComponentType;
  MusicPlayerApp: React.ComponentType;
  VideoPlayerApp: React.ComponentType;
  NetworkManagerApp: React.ComponentType;
  ArchiveManagerApp: React.ComponentType;
  BrowserApp: React.ComponentType;
}

interface AppItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  action: () => void;
  category: string;
}

export function StartMenu({
  onClose,
  createWindow,
  CalculatorApp,
  TextEditorApp,
  SettingsApp,
  SystemMonitorApp,
  ImageViewerApp,
  MusicPlayerApp,
  VideoPlayerApp,
  NetworkManagerApp,
  ArchiveManagerApp,
  BrowserApp,
}: StartMenuProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory] = useState("All");
  const [recentApps, setRecentApps] = useState<string[]>([]);
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Handle click outside to close menu
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // Application definitions organized by category
  const applications: AppItem[] = [
    // Accessories
    {
      id: "calculator",
      label: "Calculator",
      icon: Calculator,
      action: () => {
        trackRecentApp("calculator");
        createWindow("Calculator", CalculatorApp, { width: 300, height: 500 });
      },
      category: "Accessories",
    },
    {
      id: "text-editor",
      label: "Text Editor",
      icon: FileText,
      action: () => {
        trackRecentApp("text-editor");
        createWindow("Text Editor", TextEditorApp, { width: 800, height: 650 });
      },
      category: "Accessories",
    },
    {
      id: "archive-manager",
      label: "Archive Manager",
      icon: Archive,
      action: () => {
        trackRecentApp("archive-manager");
        createWindow("Archive Manager", ArchiveManagerApp, {
          width: 850,
          height: 700,
        });
      },
      category: "Accessories",
    },

    // System Tools
    {
      id: "file-manager",
      label: "File Manager",
      icon: Folder,
      action: () => {
        trackRecentApp("file-manager");
        const FileManagerWithWindow = () => (
          <FileManagerApp createWindow={createWindow} />
        );
        createWindow("File Manager", FileManagerWithWindow, {
          width: 900,
          height: 700,
        });
      },
      category: "System",
    },
    {
      id: "terminal",
      label: "Terminal",
      icon: Terminal,
      action: () => {
        trackRecentApp("terminal");
        const TerminalWithWindow = () => (
          <TerminalApp createWindow={createWindow} />
        );
        createWindow("Terminal", TerminalWithWindow, {
          width: 700,
          height: 550,
        });
      },
      category: "System",
    },
    {
      id: "settings",
      label: "Settings",
      icon: SettingsIcon,
      action: () => {
        trackRecentApp("settings");
        createWindow("Settings", SettingsApp, { width: 600, height: 550 });
      },
      category: "System",
    },
    {
      id: "system-monitor",
      label: "System Monitor",
      icon: Monitor,
      action: () => {
        trackRecentApp("system-monitor");
        createWindow("System Monitor", SystemMonitorApp, {
          width: 800,
          height: 700,
        });
      },
      category: "System",
    },

    // Multimedia
    {
      id: "image-viewer",
      label: "Image Viewer",
      icon: Image,
      action: () => {
        trackRecentApp("image-viewer");
        createWindow("Image Viewer", ImageViewerApp, {
          width: 700,
          height: 650,
        });
      },
      category: "Multimedia",
    },
    {
      id: "music-player",
      label: "Music Player",
      icon: Music,
      action: () => {
        trackRecentApp("music-player");
        createWindow("Music Player", MusicPlayerApp, {
          width: 450,
          height: 800,
        });
      },
      category: "Multimedia",
    },
    {
      id: "video-player",
      label: "Video Player",
      icon: Video,
      action: () => {
        trackRecentApp("video-player");
        createWindow("Video Player", VideoPlayerApp, {
          width: 800,
          height: 650,
        });
      },
      category: "Multimedia",
    },

    // Internet
    {
      id: "network-manager",
      label: "Network Manager",
      icon: Wifi,
      action: () => {
        trackRecentApp("network-manager");
        createWindow("Network Manager", NetworkManagerApp, {
          width: 750,
          height: 600,
        });
      },
      category: "Internet",
    },
    {
      id: "browser",
      label: "Browser",
      icon: Globe,
      action: () => {
        trackRecentApp("browser");
        createWindow("Browser", BrowserApp, { width: 1200, height: 800 });
      },
      category: "Internet",
    },
  ];

  const trackRecentApp = (appId: string) => {
    setRecentApps((prev) => {
      const filtered = prev.filter((id) => id !== appId);
      return [appId, ...filtered].slice(0, 5); // Keep only 5 recent apps
    });
  };

  const filteredApps = applications.filter((app) => {
    const matchesSearch = app.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      (selectedCategory === "Recent" && recentApps.includes(app.id)) ||
      app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAppClick = (app: AppItem) => {
    app.action();
    onClose();
  };

  const handlePowerOff = () => {
    alert("Power off simulation - This would normally shut down the system");
  };

  return (
    <div
      ref={menuRef}
      className="absolute bottom-16 left-0 w-96 backdrop-blur-xl border-2 rounded-2xl shadow-2xl z-[10000]"
      style={{
        backgroundColor: "var(--window-bg)",
        borderColor: "var(--color-purple-400)",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div
        className="p-5 border-b-2"
        style={{ borderColor: "var(--window-border)" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, var(--color-purple-600), var(--color-purple-400))",
            }}
          >
            <User size={22} className="text-white" />
          </div>
          <div>
            <div
              className="font-bold text-base"
              style={{ color: "var(--taskbar-text)" }}
            >
              Hairetsu OS
            </div>
            <div
              className="text-sm font-medium"
              style={{ color: "var(--taskbar-text)", opacity: 0.6 }}
            >
              Professional Edition
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            style={{ color: "var(--color-purple-400)", opacity: 0.7 }}
          />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border-2 rounded-lg text-sm font-medium focus:outline-none transition-all duration-200"
            style={{
              backgroundColor: "var(--taskbar-hover)",
              borderColor: "var(--window-border)",
              color: "var(--taskbar-text)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--color-purple-400)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--window-border)";
            }}
          />
        </div>
      </div>

      {/* Applications Grid */}
      <div className="p-5 max-h-80 overflow-y-auto">
        {selectedCategory === "Recent" && recentApps.length === 0 ? (
          <div
            className="text-center py-8"
            style={{ color: "var(--taskbar-text)", opacity: 0.6 }}
          >
            <Clock size={36} className="mx-auto mb-3 opacity-50" />
            <p className="font-medium">No recent applications</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {filteredApps.map((app) => (
              <button
                key={app.id}
                onClick={() => handleAppClick(app)}
                className="flex flex-col items-center gap-2.5 p-3 rounded-xl transition-all duration-200 hover:scale-105 group border-2"
                style={{
                  borderColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--taskbar-hover)";
                  e.currentTarget.style.borderColor = "var(--color-purple-400)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                <div
                  className="p-3 rounded-xl transition-all duration-200 shadow-md"
                  style={{
                    backgroundColor: "var(--taskbar-hover)",
                  }}
                >
                  <app.icon size={28} className="text-purple-400" />
                </div>
                <span
                  className="text-xs text-center leading-tight font-semibold"
                  style={{ color: "var(--taskbar-text)" }}
                >
                  {app.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {filteredApps.length === 0 && searchTerm && (
          <div
            className="text-center py-8"
            style={{ color: "var(--taskbar-text)", opacity: 0.6 }}
          >
            <Search size={36} className="mx-auto mb-3 opacity-50" />
            <p className="font-medium">
              No applications found for &quot;{searchTerm}&quot;
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="p-4 border-t-2 flex items-center justify-between"
        style={{ borderColor: "var(--window-border)" }}
      >
        <div className="flex gap-2">
          <button
            onClick={() =>
              handleAppClick(applications.find((app) => app.id === "settings")!)
            }
            className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110 border-2"
            style={{
              borderColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--taskbar-hover)";
              e.currentTarget.style.borderColor = "var(--color-purple-400)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "transparent";
            }}
            title="Settings"
          >
            <SettingsIcon
              size={20}
              style={{ color: "var(--taskbar-text)", opacity: 0.8 }}
            />
          </button>
          <button
            onClick={() => {
              trackRecentApp("file-manager");
              const FileManagerWithWindow = () => (
                <FileManagerApp createWindow={createWindow} />
              );
              createWindow("File Manager", FileManagerWithWindow, {
                width: 900,
                height: 700,
              });
              onClose();
            }}
            className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110 border-2"
            style={{
              borderColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--taskbar-hover)";
              e.currentTarget.style.borderColor = "var(--color-purple-400)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "transparent";
            }}
            title="File Manager"
          >
            <Folder
              size={20}
              style={{ color: "var(--taskbar-text)", opacity: 0.8 }}
            />
          </button>
        </div>

        <button
          onClick={handlePowerOff}
          className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110 border-2"
          style={{
            borderColor: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-red-600)";
            e.currentTarget.style.borderColor = "var(--color-red-600)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "transparent";
          }}
          title="Power Off"
        >
          <Power
            size={20}
            style={{ color: "var(--taskbar-text)", opacity: 0.8 }}
          />
        </button>
      </div>
    </div>
  );
}
