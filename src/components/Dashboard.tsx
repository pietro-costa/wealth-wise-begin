
import { useState } from "react";
import { Navigation } from "./Navigation";
import { DashboardView } from "./DashboardView";
import { AddExpenseView } from "./AddExpenseView";
import { AnalyticsView } from "./AnalyticsView";

export const Dashboard = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      <main className="container mx-auto px-6 py-8 animate-fade-in">
        <div className="transition-all duration-500 ease-in-out">
          {currentView === "dashboard" && (
            <div className="animate-slide-up">
              <DashboardView />
            </div>
          )}
          {currentView === "add-expense" && (
            <div className="animate-slide-up">
              <AddExpenseView setCurrentView={setCurrentView} />
            </div>
          )}
          {currentView === "analytics" && (
            <div className="animate-slide-up">
              <AnalyticsView />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
