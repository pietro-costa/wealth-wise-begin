
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const Navigation = ({ currentView, setCurrentView }: NavigationProps) => {
  return (
    <nav className="bg-slate-800 shadow-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-white">📊 Finty</h1>
            <div className="flex space-x-1">
              <Button
                variant={currentView === "dashboard" ? "default" : "ghost"}
                onClick={() => setCurrentView("dashboard")}
                className={`text-sm ${currentView === "dashboard" ? "bg-yellow-500 text-slate-900 hover:bg-yellow-600" : "text-white hover:bg-slate-700"}`}
              >
                Painel
              </Button>
              <Button
                variant={currentView === "add-expense" ? "default" : "ghost"}
                onClick={() => setCurrentView("add-expense")}
                className={`text-sm ${currentView === "add-expense" ? "bg-yellow-500 text-slate-900 hover:bg-yellow-600" : "text-white hover:bg-slate-700"}`}
              >
                Adicionar Gasto
              </Button>
              <Button
                variant={currentView === "analytics" ? "default" : "ghost"}
                onClick={() => setCurrentView("analytics")}
                className={`text-sm ${currentView === "analytics" ? "bg-yellow-500 text-slate-900 hover:bg-yellow-600" : "text-white hover:bg-slate-700"}`}
              >
                Análises
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
