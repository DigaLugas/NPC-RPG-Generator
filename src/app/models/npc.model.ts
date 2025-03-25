export interface NPC {
  id?: string;
  nome: string;
  idade: number;
  raca: string;
  genero: string;
  ocupacao: string;
  personalidade: string[];
  aparencia: {
    altura: string;
    peso: string;
    corCabelo: string;
    corOlhos: string;
    caracteristicasDistintivas: string;
  };
  habilidades: string[];
  historia: string;
  motivacao: string;
  objetivos: string[];
  segredos?: string[];
  posses?: string[];
  aliados?: string[];
  inimigos?: string[];
  notas?: string;
  contexto?: {
    origemSocial: string;
    temperamento: string;
    tracosCulturais: string;
  };
}
