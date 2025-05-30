
import { useState } from "react";
import { Navigation } from "./Navigation";
import { DashboardView } from "./DashboardView";
import { AddExpenseView } from "./AddExpenseView";
import { AnalyticsView } from "./AnalyticsView";

export const Dashboard = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      <main className="container mx-auto px-4 py-8">
        {currentView === "dashboard" && <DashboardView />}
        {currentView === "add-expense" && <AddExpenseView setCurrentView={setCurrentView} />}
        {currentView === "analytics" && <AnalyticsView />}
      </main>
    </div>
  );
};
