/* 
   TELA DE CARREGAMENTO - LOADINGSCREEN.TSX
   Esta tela mostra o nome do projeto com animações enquanto carrega
   Depois de alguns segundos, ela some e mostra a tela de login
*/

import { useEffect, useState } from "react";

// Propriedades que este componente recebe
interface LoadingScreenProps {
  onLoadingComplete: () => void; // Função que chama quando termina de carregar
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  // Estado para controlar se está carregando ou não
  const [isLoading, setIsLoading] = useState(true);

  // useEffect executa quando o componente aparece na tela
  useEffect(() => {
    // Timer que espera 3 segundos e depois para o carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete(); // Chama a função para ir para a próxima tela
    }, 3000); // 3000 milissegundos = 3 segundos

    // Limpa o timer quando o componente sai da tela
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  // Se não está mais carregando, não mostra nada
  if (!isLoading) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      {/* Container principal da tela de carregamento */}
      <div className="text-center space-y-8">
        
        {/* TÍTULO PRINCIPAL com animações */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-pulse">
            💰 FINTY
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-slate-300 mt-4 animate-bounce">
            Seu Assistente Financeiro Inteligente
          </p>
        </div>

        {/* BARRA DE CARREGAMENTO ANIMADA */}
        <div className="w-64 mx-auto">
          <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-full rounded-full animate-[loading_3s_ease-in-out_infinite]"></div>
          </div>
          <p className="text-slate-400 text-sm mt-2">Carregando...</p>
        </div>

        {/* ELEMENTOS DECORATIVOS que flutuam */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-600 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Estilo personalizado para a animação da barra */}
      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};