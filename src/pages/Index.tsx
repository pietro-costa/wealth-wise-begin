

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg bg-slate-800 border-slate-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">
            💰 GestorFinanceiro
          </CardTitle>
          <CardDescription className="text-slate-300">
            Comece sua jornada para uma melhor saúde financeira
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 bg-slate-700">
              <TabsTrigger value="login" className="text-white data-[state=active]:bg-yellow-500 data-[state=active]:text-slate-900">Entrar</TabsTrigger>
              <TabsTrigger value="register" className="text-white data-[state=active]:bg-yellow-500 data-[state=active]:text-slate-900">Registrar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <Button type="submit" className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                  Entrar
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Nome Completo</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-email" className="text-white">E-mail</Label>
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-password" className="text-white">Senha</Label>
                  <Input
                    id="reg-password"
                    type="password"
                    placeholder="Crie uma senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                  Criar Conta
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const Dashboard = () => {
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

const Navigation = ({ currentView, setCurrentView }: { currentView: string; setCurrentView: (view: string) => void }) => {
  return (
    <nav className="bg-slate-800 shadow-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-white">💰 GestorFinanceiro</h1>
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

const DashboardView = () => {
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

const AddExpenseView = ({ setCurrentView }: { setCurrentView: (view: string) => void }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const categories = ["Alimentação", "Transporte", "Entretenimento", "Utilidades", "Saúde", "Compras", "Outros"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Novo gasto:", { description, amount, category });
    setDescription("");
    setAmount("");
    setCategory("");
    setCurrentView("dashboard");
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Adicionar Novo Gasto</CardTitle>
          <CardDescription className="text-slate-400">Registre seus gastos para manter o controle do orçamento</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description" className="text-white">Descrição</Label>
              <Input
                id="description"
                placeholder="Em que você gastou?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-white">Valor</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="0,00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category" className="text-white">Categoria</Label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full p-2 border border-slate-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-slate-700 text-white"
              >
                <option value="">Selecione uma categoria</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div className="flex space-x-3 pt-4">
              <Button type="submit" className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                Adicionar Gasto
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setCurrentView("dashboard")}
                className="flex-1 border-slate-600 text-white hover:bg-slate-700"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const AnalyticsView = () => {
  const monthlyData = [
    { month: "Jan", expenses: 1250, income: 3000 },
    { month: "Fev", expenses: 1100, income: 3000 },
    { month: "Mar", expenses: 1350, income: 3200 },
    { month: "Abr", expenses: 1200, income: 3100 },
    { month: "Mai", expenses: 1400, income: 3300 },
  ];

  const categoryData = [
    { category: "Alimentação", amount: 450, percentage: 35, color: "#fbbf24" },
    { category: "Transporte", amount: 300, percentage: 23, color: "#f59e0b" },
    { category: "Entretenimento", amount: 200, percentage: 16, color: "#d97706" },
    { category: "Utilidades", amount: 180, percentage: 14, color: "#b45309" },
    { category: "Outros", amount: 150, percentage: 12, color: "#92400e" },
  ];

  const trendData = [
    { month: "Jan", food: 420, transport: 280, entertainment: 180 },
    { month: "Fev", food: 380, transport: 300, entertainment: 160 },
    { month: "Mar", food: 450, transport: 320, entertainment: 200 },
    { month: "Abr", food: 410, transport: 290, entertainment: 170 },
    { month: "Mai", food: 480, transport: 310, entertainment: 220 },
  ];

  const chartConfig = {
    expenses: { label: "Gastos", color: "#fbbf24" },
    income: { label: "Renda", color: "#10b981" },
    food: { label: "Alimentação", color: "#fbbf24" },
    transport: { label: "Transporte", color: "#f59e0b" },
    entertainment: { label: "Entretenimento", color: "#d97706" },
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Análises</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Renda vs Gastos</CardTitle>
            <CardDescription className="text-slate-400">Comparação mensal dos últimos 5 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} />
                  <YAxis tick={{ fill: '#94a3b8' }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="income" fill="#10b981" name="Renda" />
                  <Bar dataKey="expenses" fill="#fbbf24" name="Gastos" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Gastos por Categoria</CardTitle>
            <CardDescription className="text-slate-400">Detalhamento deste mês</CardDescription>
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
                    label={({ category, percentage }) => `${category} (${percentage}%)`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Tendências de Gastos por Categoria</CardTitle>
          <CardDescription className="text-slate-400">Acompanhe como seus hábitos de gasto mudam ao longo do tempo</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} />
                <YAxis tick={{ fill: '#94a3b8' }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="food" stroke="#fbbf24" strokeWidth={2} name="Alimentação" />
                <Line type="monotone" dataKey="transport" stroke="#f59e0b" strokeWidth={2} name="Transporte" />
                <Line type="monotone" dataKey="entertainment" stroke="#d97706" strokeWidth={2} name="Entretenimento" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Resumo Financeiro</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-slate-700 rounded-lg">
              <p className="text-sm text-slate-400">Média Mensal</p>
              <p className="text-2xl font-bold text-yellow-500">R$1.260</p>
            </div>
            <div className="text-center p-4 bg-slate-700 rounded-lg">
              <p className="text-sm text-slate-400">Maior Categoria</p>
              <p className="text-2xl font-bold text-yellow-500">Alimentação</p>
            </div>
            <div className="text-center p-4 bg-slate-700 rounded-lg">
              <p className="text-sm text-slate-400">Total Este Ano</p>
              <p className="text-2xl font-bold text-yellow-500">R$6.300</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Detalhamento por Categoria</CardTitle>
            <CardDescription className="text-slate-400">Análise detalhada dos gastos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryData.map((data) => (
                <div key={data.category} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-white">{data.category}</span>
                    <span className="font-bold text-yellow-500">R${data.amount}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ width: `${data.percentage}%`, backgroundColor: data.color }}
                    ></div>
                  </div>
                  <div className="text-sm text-slate-400">{data.percentage}% do total</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Progresso Mensal</CardTitle>
            <CardDescription className="text-slate-400">Acompanhe seu progresso financeiro</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data) => (
                <div key={data.month} className="flex items-center justify-between">
                  <span className="font-medium text-white">{data.month}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{ width: `${(data.expenses / data.income) * 100}%` }}
                      ></div>
                    </div>
                    <span className="font-bold text-white">R${data.expenses}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;

