import { Injectable } from '@angular/core';
import { NPC } from '../models/npc.model';
import { BehaviorSubject, Observable } from 'rxjs';
import {npcGenerationTree} from '../utils/npcGenerationTree';



@Injectable({
  providedIn: 'root'
})
export class NpcService {
  private savedNpcs: NPC[] = [];
  private savedNpcsSubject = new BehaviorSubject<NPC[]>([]);
  private nomeGerado = "";
  private racas = ['Humano', 'Elfo', 'Anão', 'Halfling', 'Gnomo', 'Meio-Orc', 'Meio-Elfo', 'Tiefling', 'Draconato'];


  private nomes = {
    masculinos: [
      'Arthur', 'Cedric', 'Edgar', 'George', 'Thorin', 'Gandalf', 'Elrond', 'Boromir', 'Aragorn', 'Legolas',
      'Baldric', 'Alistair', 'Duncan', 'Eldric', 'Fenrir', 'Garrick', 'Hadrian', 'Ivar', 'Jareth', 'Kael',
      'Leoric', 'Magnus', 'Norric', 'Osric', 'Perrin', 'Quentin', 'Roderic', 'Sirius', 'Tristan', 'Ulrich',
      'Viggo', 'Wulfric', 'Xander', 'Yorick', 'Zephyr', 'Ambrose', 'Bertrand', 'Cassius', 'Dorian', 'Evander',
      'Faelan', 'Gideon', 'Hector', 'Isidore', 'Julius', 'Lucian', 'Malakai', 'Nathaniel', 'Octavius', 'Percival'
    ],
    femininos: [
      'Beatrice', 'Diana', 'Fiona', 'Hilda', 'Galadriel', 'Arwen', 'Eowyn', 'Tauriel', 'Morwen', 'Luthien',
      'Arianne', 'Brienne', 'Celeste', 'Delphine', 'Elowen', 'Freya', 'Genevieve', 'Helena', 'Isolde', 'Jasmine',
      'Kassandra', 'Lysandra', 'Morgana', 'Naomi', 'Ophelia', 'Penelope', 'Quinn', 'Rowena', 'Seraphina', 'Thalia',
      'Ursula', 'Vesper', 'Willow', 'Xanthe', 'Yseult', 'Zelda', 'Adelaide', 'Bianca', 'Cassandra', 'Daphne',
      'Evelyn', 'Fay', 'Giselle', 'Harmonia', 'Ivanna', 'Jocelyn', 'Katarina', 'Lilith', 'Mirabelle', 'Nova'
    ]
  };


  private ocupacoes = [
    'Ferreiro', 'Comerciante', 'Guarda', 'Aventureiro', 'Curandeiro', 'Ladino', 'Mago',
    'Guerreiro', 'Bardo', 'Paladino', 'Fazendeiro', 'Alquimista', 'Sacerdote', 'Caçador',
    'Escriba', 'Nobre', 'Pescador', 'Minerador', 'Estalajadeiro', 'Marinheiro'
  ];

  private personalidades = [
    'Corajoso', 'Astuto', 'Gentil', 'Reservado', 'Impulsivo', 'Sarcástico', 'Leal',
    'Desconfiado', 'Otimista', 'Pessimista', 'Curioso', 'Teimoso', 'Altruísta', 'Egoísta',
    'Paciente', 'Irascível', 'Metódico', 'Caótico', 'Sonhador', 'Pragmático'
  ];

  private coresCabelo = ['Preto', 'Castanho', 'Loiro', 'Ruivo', 'Grisalho', 'Branco', 'Azul', 'Verde', 'Roxo', 'Calvo'];

  private coresOlhos = ['Castanhos', 'Azuis', 'Verdes', 'Cinzentos', 'Âmbar', 'Violeta', 'Vermelhos', 'Negros', 'Heterocromia'];

  private caracteristicasDistintivas = [
    'Cicatriz no rosto', 'Tatuagem tribal', 'Olhar penetrante', 'Manca de uma perna',
    'Braço amputado', 'Rosto marcado por varíola', 'Dentes de ouro', 'Queimadura visível',
    'Marca de nascença', 'Albinismo', 'Heterocromia', 'Pele escamosa', 'Cabelo extraordinariamente longo',
    'Barba trançada com joias', 'Olhos sem pupilas', 'Mãos calejadas de trabalho árduo',
    'Cheiro peculiar', 'Voz rouca e áspera', 'Riso perturbador', 'Andar elegante e refinado',
    'Pele excessivamente pálida', 'Dedo faltando', 'Uma cicatriz que lembra um símbolo',
    'Olhos sempre úmidos, como se estivesse chorando', 'Sobrancelhas extremamente grossas',
    'Orelhas pontudas mesmo sendo humano', 'Gagueira', 'Aparência extremamente jovem ou velha para sua idade',
    'Usa sempre uma máscara', 'Mãos trêmulas', 'Um olho cego coberto por um tapa-olho',
    'Rosto deformado por ácido', 'Dentes afiados como de um predador', 'Voz extremamente grave ou aguda',
    'Roupas sempre impecáveis ou extremamente sujas', 'Olhar que parece enxergar a alma',
    'Corpo coberto por runas brilhantes', 'Postura imponente', 'Sempre vestindo um capuz',
    'Uma aura perturbadora', 'Sem características distintivas'
  ];

  private habilidades = [
    'Artesanato', 'Alquimia', 'Cura', 'Furtividade', 'Persuasão', 'Intimidação',
    'Conhecimento arcano', 'Sobrevivência', 'Atletismo', 'Acrobacia', 'História',
    'Natureza', 'Religião', 'Investigação', 'Percepção', 'Atuação', 'Enganação',
    'Forja de armas', 'Montaria', 'Domesticação de animais', 'Rastreio',
    'Criação de venenos', 'Arco e flecha', 'Briga de rua', 'Navegação',
    'Estratégia de batalha', 'Mecânica', 'Pilotagem de embarcações', 'Cartografia',
    'Escrita e caligrafia', 'Oratória', 'Trabalho com metais preciosos',
    'Jogos de azar', 'Luta de arena', 'Dança', 'Disfarce', 'Leitura de lábios',
    'Marcenaria', 'Linguística', 'Música', 'Criação de feitiços', 'Resistência física',
    'Manipulação psicológica', 'Codificação de mensagens secretas', 'Escalada',
    'Conhecimento sobre venenos e antídotos'
  ];

  private motivacoes = [
    'Busca por riqueza', 'Desejo de poder', 'Busca por conhecimento', 'Vingança',
    'Proteção da família', 'Servir a um deus', 'Redenção', 'Aventura e exploração',
    'Fugir do passado', 'Cumprir uma profecia', 'Restaurar a honra', 'Encontrar um artefato perdido',
    'Criar uma nova ordem mundial', 'Destruir um inimigo pessoal', 'Tornar-se imortal',
    'Ser lembrado na história', 'Provar sua superioridade', 'Proteger um segredo perigoso',
    'Ser aceito por um grupo ou sociedade', 'Encontrar um lugar para chamar de lar',
    'Testar seus próprios limites', 'Achar um amor verdadeiro', 'Vingar um mentor ou mestre caído',
    'Escapar de um casamento arranjado', 'Rebelião contra um sistema opressor',
    'Resgatar um ente querido', 'Servir como espião', 'Esconder uma identidade secreta',
    'Libertar um povo escravizado', 'Derrubar um governante corrupto', 'Achar um tesouro lendário',
    'Seguir um sonho profético', 'Tornar-se o melhor em seu ofício', 'Evitar uma guerra',
    'Aprender a verdade sobre seu passado', 'Criar uma invenção revolucionária',
    'Encontrar um lugar lendário', 'Dominar uma escola de magia específica',
    'Trazer de volta alguém que morreu'
  ];

  constructor() {
    const savedNpcsString = localStorage.getItem('savedNpcs');
    if (savedNpcsString) {
      this.savedNpcs = JSON.parse(savedNpcsString);
      this.savedNpcsSubject.next(this.savedNpcs);
    }
  }

  getSavedNpcs(): Observable<NPC[]> {
    return this.savedNpcsSubject.asObservable();
  }

  saveNpc(npc: NPC): void {
    if (!npc.id) {
      npc.id = Date.now().toString();
    }

    const existingIndex = this.savedNpcs.findIndex(n => n.id === npc.id);

    if (existingIndex >= 0) {
      this.savedNpcs[existingIndex] = npc;
    } else {
      this.savedNpcs.push(npc);
    }

    localStorage.setItem('savedNpcs', JSON.stringify(this.savedNpcs));
    this.savedNpcsSubject.next([...this.savedNpcs]);
  }

  deleteNpc(id: string): void {
    this.savedNpcs = this.savedNpcs.filter(npc => npc.id !== id);
    localStorage.setItem('savedNpcs', JSON.stringify(this.savedNpcs));
    this.savedNpcsSubject.next([...this.savedNpcs]);
  }

  gerarNPC(parametros?: Partial<NPC>): NPC {
    // Definir gênero com mais flexibilidade
    const tracoBase = this.getRandomItem(Object.keys(npcGenerationTree));
    const tracoBaseNode = npcGenerationTree[tracoBase];

    // Gênero considerando as restrições do traço base
    const generosDisponiveis = tracoBaseNode.genders || ['Masculino', 'Feminino'];
    const genero = parametros?.genero || this.getRandomItem(generosDisponiveis);


    if(genero === 'Masculino') {
      this.nomeGerado = this.getRandomItem(this.nomes.masculinos);
   }
   if (genero === 'Feminino') {
      this.nomeGerado = this.getRandomItem(this.nomes.femininos);
   }


    // Selecionar raça considerando as restrições do traço base
    const racasDisponiveis = tracoBaseNode.races || this.racas;
    const raca = parametros?.raca || this.getRandomItem(racasDisponiveis);

    // Gerar traços de personalidade com árvore de decisão
    const numTracos = Math.floor(Math.random() * 2) + 2; // 2 a 3 traços
    const tracos = [tracoBase];
    while (tracos.length < numTracos) {
      const novoTraco = this.getRandomItem(tracoBaseNode.compatibleTraits);
      if (!tracos.includes(novoTraco)) {
        tracos.push(novoTraco);
      }
    }

    // Gerar altura com base na árvore de decisão ou raça
    let altura = '';
    const tracoAltura = tracoBaseNode.heightRange || this.getHeightRangeByRace(raca);
    altura = `${Math.floor(Math.random() * (tracoAltura.max - tracoAltura.min + 1)) + tracoAltura.min}cm`;

    // Gerar idade com base na árvore de decisão ou geração padrão
    const idadeNode = tracoBaseNode.ageRange || this.getAgeRangeByRace(raca);
    const idade = parametros?.idade ||
      Math.floor(Math.random() * (idadeNode.max - idadeNode.min + 1)) + idadeNode.min;

    // Definir ocupação com base nos traços ou aleatório
    const ocupacoesDisponiveis = tracoBaseNode.occupations || this.ocupacoes;
    const ocupacao = parametros?.ocupacao || this.getRandomItem(ocupacoesDisponiveis);

    // Gerar habilidades
    const numHabilidades = Math.floor(Math.random() * 2) + 2; // 2 a 3 habilidades
    const habilidadesNPC = this.shuffleArray([...this.habilidades]).slice(0, numHabilidades);

    // Definir motivação com base nos traços ou aleatório
    const motivacoesDisponiveis = tracoBaseNode.motivations || this.motivacoes;
    const motivacao = parametros?.motivacao || this.getRandomItem(motivacoesDisponiveis);

    // Gerar origem social e contexto cultural
    const origemSocial = tracoBaseNode.additionalDetails?.socialBackground
      ? this.getRandomItem(tracoBaseNode.additionalDetails.socialBackground)
      : 'Origem variada';

    const temperamento = tracoBaseNode.additionalDetails?.temperament
      ? this.getRandomItem(tracoBaseNode.additionalDetails.temperament)
      : 'Versátil';

    const tracosCulturais = tracoBaseNode.additionalDetails?.culturalTraits
      ? this.getRandomItem(tracoBaseNode.additionalDetails.culturalTraits)
      : 'Adaptável';

    // Gerar história
    const historia = this.gerarHistoria({
      nome: parametros?.nome || this.nomeGerado,
      raca,
      ocupacao,
      personalidade: tracos,
      motivacao
    });

    // Gerar 1-3 objetivos
    const numObjetivos = Math.floor(Math.random() * 3) + 1;
    const objetivos = this.gerarObjetivos(numObjetivos, motivacao);

    return {
      nome: parametros?.nome || this.nomeGerado,
      idade,
      raca,
      genero,
      ocupacao,
      personalidade: parametros?.personalidade || tracos,
      aparencia: parametros?.aparencia || {
        altura,
        peso: this.gerarPesoPorRacaEAltura(raca, altura),
        corCabelo: this.getRandomItem(this.coresCabelo),
        corOlhos: this.getRandomItem(this.coresOlhos),
        caracteristicasDistintivas: this.getRandomItem(this.caracteristicasDistintivas)
      },
      habilidades: parametros?.habilidades || habilidadesNPC,
      historia,
      motivacao,
      objetivos,
      segredos: parametros?.segredos || this.gerarSegredos(),
      posses: parametros?.posses || this.gerarPosses(raca, ocupacao),
      aliados: parametros?.aliados || [],
      inimigos: parametros?.inimigos || [],
      notas: parametros?.notas || '',
      contexto: {
        origemSocial,
        temperamento,
        tracosCulturais
      }
    };
  }
  // Métodos auxiliares adicionais
  private getHeightRangeByRace(raca: string): { min: number; max: number } {
    switch(raca) {
      case 'Anão': return { min: 120, max: 150 };
      case 'Halfling':
      case 'Gnomo': return { min: 90, max: 110 };
      case 'Elfo': return { min: 160, max: 190 };
      case 'Meio-Orc':
      case 'Draconato': return { min: 170, max: 210 };
      default: return { min: 150, max: 190 };
    }
  }

  private getAgeRangeByRace(raca: string): { min: number; max: number } {
    switch(raca) {
      case 'Elfo':
      case 'Meio-Elfo': return { min: 20, max: 500 };
      case 'Anão': return { min: 30, max: 350 };
      case 'Gnomo': return { min: 25, max: 400 };
      case 'Halfling': return { min: 20, max: 100 };
      default: return { min: 18, max: 70 };
    }
  }

  private shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }


  private gerarPesoPorRacaEAltura(raca: string, altura: string): string {
    const alturaEmCm = parseInt(altura);
    let pesoBase = 0;

    switch(raca) {
      case 'Anão':
        pesoBase = 60 + (alturaEmCm - 120) * 0.8;
        break;
      case 'Halfling':
      case 'Gnomo':
        pesoBase = 30 + (alturaEmCm - 90) * 0.5;
        break;
      case 'Elfo':
        pesoBase = 50 + (alturaEmCm - 160) * 0.6;
        break;
      case 'Meio-Orc':
      case 'Draconato':
        pesoBase = 80 + (alturaEmCm - 170) * 1.1;
        break;
      default: //Humano e outros
        pesoBase = 50 + (alturaEmCm - 150) * 0.7;
    }

    //Adicionar uma variação aleatória de ±15%
    const variacao = (Math.random() * 0.3) - 0.15; // -15% a +15%
    const pesoFinal = Math.round(pesoBase * (1 + variacao));

    return `${pesoFinal}kg`;
  }

  private gerarHistoria(params: {
    nome: string,
    raca: string,
    ocupacao: string,
    personalidade: string[],
    motivacao: string,
    tracoCaracteristico?: string
  }): string {
    const {
      nome,
      raca,
      ocupacao,
      personalidade,
      motivacao,
      tracoCaracteristico
    } = params;

    // Contextos narrativos mais elaborados
    const contextos = [
      {
        estrutura: `${nome}, ${this.getArtigoIndefinido(raca)} ${raca.toLowerCase()} ${personalidade.map(p => p.toLowerCase()).join(' e ')}, carrega consigo uma história que transcende o comum. Como ${ocupacao.toLowerCase()}, ${this.getPronome(personalidade[0])} descobriu que ${motivacao.toLowerCase()} era mais do que um simples objetivo - era um chamado interior.`,
        condicoes: () => personalidade.length > 1
      },
      {
        estrutura: `Nas entrelinhas de sua vida como ${ocupacao.toLowerCase()}, ${nome} esconde uma complexidade rara. ${this.getPronome(personalidade[0]).charAt(0).toUpperCase() + this.getPronome(personalidade[0]).slice(1)} é ${personalidade.map(p => p.toLowerCase()).join(' e ')}, e sua busca por ${motivacao.toLowerCase()} revela camadas profundas de sua alma ${raca.toLowerCase()}.`,
        condicoes: () => true
      },
      {
        estrutura: `A jornada de ${nome} é marcada pela singularidade de ser ${this.getArtigoIndefinido(raca)} ${raca.toLowerCase()} ${personalidade.map(p => p.toLowerCase()).join(' e ')}. Sua escolha por ${ocupacao.toLowerCase()} não foi acidental, mas parte de um destino tecido por ${motivacao.toLowerCase()}.`,
        condicoes: () => personalidade.length >= 2
      },
      {
        estrutura: `Em um mundo de constantes desafios, ${nome} se destaca como ${this.getArtigoIndefinido(raca)} ${raca.toLowerCase()} verdadeiramente ${personalidade.map(p => p.toLowerCase()).join(' e ')}. Sua vida como ${ocupacao.toLowerCase()} é apenas o palco para sua verdadeira missão: ${motivacao.toLowerCase()}.`,
        condicoes: () => tracoCaracteristico !== undefined
      },
      {
        estrutura: `Poucos compreenderiam a profundidade de ${nome}, ${this.getArtigoIndefinido(raca)} ${raca.toLowerCase()} ${personalidade.map(p => p.toLowerCase()).join(' e ')}. Navegando pelo mundo como ${ocupacao.toLowerCase()}, ${this.getPronome(personalidade[0])} persegue um objetivo que poucos ousariam: ${motivacao.toLowerCase()}.`,
        condicoes: () => true
      }
    ];

    // Filtra contextos válidos e seleciona um aleatoriamente
    const contextosFiltrados = contextos.filter(ctx => ctx.condicoes());
    const contextoSelecionado = this.getRandomItem(contextosFiltrados);

    return contextoSelecionado.estrutura;
  }

  private getArtigoIndefinido(palavra: string): string {
    const primeiraLetra = palavra.charAt(0).toLowerCase();
    if (['a', 'e', 'i', 'o', 'u'].includes(primeiraLetra)) {
      return 'um';
    }
    return 'um';
  }

  private getPronome(palavra: string): string {
    return 'ele';
  }

  private getPronomeObliquo(palavra: string): string {
    return 'muito';
  }

  private gerarObjetivos(quantidade: number, motivacao: string): string[] {
    const objetivosPorMotivacao: { [key: string]: string[] } = {
      'Busca por riqueza': [
        'Encontrar um tesouro lendário',
        'Abrir seu próprio negócio',
        'Acumular uma fortuna em ouro',
        'Adquirir terras e propriedades',
        'Roubar um item valioso'
      ],
      'Desejo de poder': [
        'Subir na hierarquia local',
        'Derrubar um líder corrupto',
        'Formar uma aliança poderosa',
        'Dominar uma arte mágica rara',
        'Conquistar um título nobiliárquico'
      ],
      'Busca por conhecimento': [
        'Encontrar um livro raro',
        'Aprender com um mestre lendário',
        'Descobrir segredos arcanos',
        'Estudar uma criatura mítica',
        'Explorar ruínas antigas'
      ],
      'Vingança': [
        'Encontrar quem matou sua família',
        'Derrotar um rival antigo',
        'Expor um traidor',
        'Recuperar um item roubado',
        'Destruir uma organização criminosa'
      ]
    };

    //Objetivos genéricos para motivações não listadas
    const objetivosGenericos = [
      'Encontrar um lugar para se estabelecer',
      'Proteger sua comunidade',
      'Provar seu valor para os outros',
      'Superar um grande desafio pessoal',
      'Fazer amigos e aliados confiáveis',
      'Encontrar um item mágico lendário',
      'Derrotar um monstro que aterroriza a região'
    ];

    const listaObjetivos = objetivosPorMotivacao[motivacao] || objetivosGenericos;
    const shuffled = this.shuffleArray([...listaObjetivos, ...objetivosGenericos]);

    return shuffled.slice(0, quantidade);
  }

  private gerarSegredos(): string[] {
    const segredos = [
      'Tem uma identidade secreta',
      'É um espião de outro reino',
      'Cometeu um crime grave no passado',
      'Possui um item mágico que esconde de todos',
      'É o herdeiro perdido de uma nobre família',
      'Fez um pacto com uma entidade sombria',
      'Está fugindo de uma dívida enorme',
      'Sofre de uma maldição antiga',
      'Esconde uma doença terminal',
      'É imortal, mas não sabe o motivo',
      'Tem visões do futuro que não conta a ninguém',
      'Já morreu uma vez e voltou à vida'
    ];

    const quantidade = Math.floor(Math.random() * 2) + 1; // 1 a 2 segredos
    return this.shuffleArray(segredos).slice(0, quantidade);
  }

  private gerarPosses(raca: string, ocupacao: string): string[] {
    const possesComuns = [
      'Roupas simples de viagem',
      'Uma pequena bolsa de moedas',
      'Um cantil de água',
      'Rações de viagem para alguns dias',
      'Uma mochila desgastada'
    ];

    const possesPorRaca: { [key: string]: string[] } = {
      'Elfo': ['Arco élfico decorado', 'Amuleto da floresta', 'Livro de poemas antigos'],
      'Anão': ['Martelo de ferreiro', 'Caneca de cerveja personalizada', 'Pedra de fogo anã'],
      'Halfling': ['Cachimbo entalhado', 'Dado da sorte', 'Receita de família'],
      'Gnomo': ['Dispositivo mecânico curioso', 'Lupa de precisão', 'Conjunto de ferramentas pequenas'],
      'Meio-Orc': ['Troféu de batalha', 'Tatuagem tribal', 'Colar de dentes']
    };

    const possesPorOcupacao: { [key: string]: string[] } = {
      'Ferreiro': ['Martelo de qualidade', 'Avental de couro resistente', 'Moldes para forja'],
      'Comerciante': ['Livro de contabilidade', 'Balança de precisão', 'Moedas de diferentes reinos'],
      'Guarda': ['Distintivo ou emblema', 'Armadura bem conservada', 'Manual de conduta'],
      'Aventureiro': ['Mapa desgastado', 'Corda resistente', 'Kit de primeiros socorros'],
      'Curandeiro': ['Bolsa de ervas medicinais', 'Instrumentos cirúrgicos', 'Livro de receitas medicinais'],
      'Ladino': ['Ferramentas de arrombamento', 'Capa com capuz', 'Adaga escondida'],
      'Mago': ['Grimório pessoal', 'Componentes de feitiços', 'Foco arcano'],
      'Bardo': ['Instrumento musical', 'Livro de canções', 'Roupas coloridas']
    };

    const possesRaca = possesPorRaca[raca] || [];
    const possesOcupacao = possesPorOcupacao[ocupacao] || [];

    const todasPosses = [...possesComuns, ...possesRaca, ...possesOcupacao];
    const numPosses = Math.floor(Math.random() * 3) + 3; // 3 a 5 posses

    return this.shuffleArray(todasPosses).slice(0, numPosses);
  }
}
