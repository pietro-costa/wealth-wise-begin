
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const Navigation = ({ currentView, setCurrentView }: NavigationProps) => {
  return (
    <nav className="bg-background/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-glow">
              💰 Finty
            </h1>
            <div className="flex space-x-2">
              <Button
                variant={currentView === "dashboard" ? "premium" : "ghost"}
                onClick={() => setCurrentView("dashboard")}
                size="sm"
                className="transition-all duration-300"
              >
                📊 Painel
              </Button>
              <Button
                variant={currentView === "add-expense" ? "premium" : "ghost"}
                onClick={() => setCurrentView("add-expense")}
                size="sm"
                className="transition-all duration-300"
              >
                ➕ Adicionar Gasto
              </Button>
              <Button
                variant={currentView === "analytics" ? "premium" : "ghost"}
                onClick={() => setCurrentView("analytics")}
                size="sm"
                className="transition-all duration-300"
              >
                📈 Análises
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
