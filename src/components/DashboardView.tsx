
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export const DashboardView = () => {
  const expenses = [
    { id: 1, description: "Supermercado", amount: 85.50, category: "Alimentação", date: "2024-01-15" },
    { id: 2, description: "Combustível", amount: 45.00, category: "Transporte", date: "2024-01-14" },
    { id: 3, description: "Café", amount: 12.75, category: "Alimentação", date: "2024-01-13" },
    { id: 4, description: "Netflix", amount: 15.99, category: "Entretenimento", date: "2024-01-12" },
  ];

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categoryData = Object.entries(categoryTotals).map(([category, amount]) => ({
    category,
    amount,
  }));

  const monthlyData = [
    { month: "Jan", expenses: 1250 },
    { month: "Fev", expenses: 1100 },
    { month: "Mar", expenses: 1350 },
    { month: "Abr", expenses: 1200 },
    { month: "Mai", expenses: 1590 },
  ];

  const pieColors = ["#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e"];

  const chartConfig = {
    expenses: {
      label: "Gastos",
      color: "#fbbf24",
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Painel</h2>
        <div className="text-right">
          <p className="text-sm text-slate-400">Total Este Mês</p>
          <p className="text-2xl font-bold text-yellow-500">R${totalExpenses.toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <Card key={category} className="hover:shadow-lg transition-shadow bg-slate-800 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">R${amount.toFixed(2)}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Gastos por Categoria</CardTitle>
            <CardDescription className="text-slate-400">Distribuição dos seus gastos</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="amount"
                    label={({ category, amount }) => `${category}: R$${amount.toFixed(2)}`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Gastos Mensais</CardTitle>
            <CardDescription className="text-slate-400">Tendências dos seus gastos ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} />
                  <YAxis tick={{ fill: '#94a3b8' }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="expenses" fill="#fbbf24" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Gastos Recentes</CardTitle>
          <CardDescription className="text-slate-400">Suas últimas transações</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expenses.map((expense) => (
              <div key={expense.id} className="flex items-center justify-between p-4 border border-slate-700 rounded-lg bg-slate-700/50">
                <div>
                  <p className="font-medium text-white">{expense.description}</p>
                  <p className="text-sm text-slate-400">{expense.category} • {expense.date}</p>
                </div>
                <p className="font-bold text-yellow-500">-R${expense.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
