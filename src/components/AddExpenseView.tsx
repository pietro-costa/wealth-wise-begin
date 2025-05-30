
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddExpenseViewProps {
  setCurrentView: (view: string) => void;
}

export const AddExpenseView = ({ setCurrentView }: AddExpenseViewProps) => {
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
