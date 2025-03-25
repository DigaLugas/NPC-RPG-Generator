interface TraitNode {
  trait: string;
  compatibleTraits: string[];
  heightRange?: { min: number; max: number };
  ageRange?: { min: number; max: number };
  occupations?: string[];
  motivations?: string[];
  genders?: string[];
  races?: string[];
  additionalDetails?: {
    socialBackground?: string[];
    temperament?: string[];
    culturalTraits?: string[];
  };
}


const npcGenerationTree: { [key: string]: TraitNode } = {
  'Corajoso': {
    trait: 'Corajoso',
    compatibleTraits: ['Leal', 'Altruísta', 'Impulsivo', 'Guerreiro', 'Destemido', 'Vingativo', 'Honrado', 'Protetor', 'Idealista'],
    heightRange: { min: 160, max: 200 },
    ageRange: { min: 20, max: 50 },
    occupations: [
      'Guarda', 'Aventureiro', 'Paladino', 'Guerreiro', 'Caçador', 'Marinheiro', 'Gladiador', 'Capitão da Guarda',
      'Cavaleiro', 'Explorador', 'Líder Militar', 'Treinador de Combate', 'Guarda-costas', 'Revolucionário'
    ],
    motivations: [
      'Proteger os fracos', 'Buscar justiça', 'Honrar um compromisso', 'Defender a comunidade',
      'Vingar uma perda', 'Superar desafios', 'Provar seu valor', 'Proteger uma família',
      'Combater a injustiça', 'Defender uma causa'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Humano', 'Meio-Orc', 'Draconato', 'Anão', 'Gigante', 'Minotauro', 'Goliath', 'Tiefling',
      'Meio-Elemental', 'Metamorfo', 'Centauro'
    ],
    additionalDetails: {
      socialBackground: [
        'Classe média', 'Militar', 'Comunidade rural', 'Nobre', 'Órfão', 'Tribo guerreira',
        'Família de soldados', 'Comunidade fronteiriça'
      ],
      temperament: [
        'Direto', 'Assertivo', 'Protetor', 'Explosivo', 'Disciplinado', 'Impetuoso',
        'Calmo sob pressão', 'Apaixonado', 'Determinado'
      ],
      culturalTraits: [
        'Disciplinado', 'Honroso', 'Resiliente', 'Tradicionalista', 'Leal', 'Altruísta',
        'Defensor de princípios', 'Espírito de sacrifício'
      ]
    }
  },
  'Astuto': {
    trait: 'Astuto',
    compatibleTraits: [
      'Desconfiado', 'Sarcástico', 'Calculista', 'Curioso', 'Manipulador', 'Estrategista',
      'Observador', 'Perspicaz', 'Engenhoso'
    ],
    heightRange: { min: 150, max: 185 },
    ageRange: { min: 25, max: 60 },
    occupations: [
      'Ladino', 'Comerciante', 'Escriba', 'Mago', 'Nobre', 'Alquimista', 'Diplomata', 'Espião',
      'Conselheiro Real', 'Mercador', 'Inventor', 'Explorador', 'Negociador', 'Cartógrafo',
      'Mentor', 'Estrategista Militar'
    ],
    motivations: [
      'Busca por conhecimento', 'Acumular riquezas', 'Manipular eventos', 'Resolver mistérios',
      'Obter poder', 'Desvendar segredos', 'Superar desafios intelectuais', 'Influenciar política',
      'Criar inovações', 'Compreender o universo'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Elfo', 'Meio-Elfo', 'Gnomo', 'Humano', 'Tiefling', 'Vampiro', 'Shapeshifter',
      'Meio-Celestial', 'Doppelganger', 'Elemental da Mente'
    ],
    additionalDetails: {
      socialBackground: [
        'Acadêmico', 'Urbano', 'Classe mercante', 'Família nobre', 'Biblioteca real',
        'Sociedade secreta', 'Comunidade de sábios', 'Família de artesãos'
      ],
      temperament: [
        'Estrategista', 'Analítico', 'Observador', 'Persuasivo', 'Meticuloso', 'Calculista',
        'Curioso', 'Adaptável', 'Paciente', 'Pensador rápido'
      ],
      culturalTraits: [
        'Intelectual', 'Perspicaz', 'Adaptável', 'Misterioso', 'Inovador', 'Crítico',
        'Amante do conhecimento', 'Ético em sua astúcia'
      ]
    }
  },
  'Gentil': {
    trait: 'Gentil',
    compatibleTraits: [
      'Altruísta', 'Paciente', 'Otimista', 'Curandeiro', 'Bondoso', 'Caridoso', 'Compassivo',
      'Esperançoso', 'Diplomático'
    ],
    heightRange: { min: 140, max: 175 },
    ageRange: { min: 18, max: 60 },
    occupations: [
      'Curandeiro', 'Sacerdote', 'Comerciante', 'Bardo', 'Fazendeiro', 'Estalajadeiro',
      'Professor', 'Enfermeiro', 'Conselheiro', 'Terapeuta', 'Tutor', 'Ativista Social',
      'Voluntário', 'Mediador', 'Artista de Rua'
    ],
    motivations: [
      'Ajudar os outros', 'Buscar harmonia', 'Curar feridas', 'Promover paz', 'Inspirar esperança',
      'Reduzir sofrimento', 'Construir comunidade', 'Educar', 'Oferecer conforto',
      'Criar conexões significativas'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Halfling', 'Humano', 'Meio-Elfo', 'Gnomo', 'Anjo', 'Fey', 'Aasimar', 'Metamorfo',
      'Elemental da Luz', 'Tritão'
    ],
    additionalDetails: {
      socialBackground: [
        'Comunidade rural', 'Família religiosa', 'Classe artesã', 'Órfão', 'Comunidade de cuidadores',
        'Família de curandeiros', 'Ordem humanitária', 'Comunidade multicultural'
      ],
      temperament: [
        'Empático', 'Compassivo', 'Tolerante', 'Sábio', 'Calmo', 'Acolhedor', 'Paciente',
        'Generoso', 'Resiliente', 'Compreensivo'
      ],
      culturalTraits: [
        'Cuidadoso', 'Diplomático', 'Acolhedor', 'Espiritual', 'Altruísta', 'Pacificador',
        'Amante da vida', 'Facilitador de cura'
      ]
    }
  },
  'Sombrio': {
    trait: 'Sombrio',
    compatibleTraits: [
      'Reservado', 'Vingativo', 'Misterioso', 'Frio', 'Solitário', 'Melancólico', 'Introspectivo',
      'Traumatizado', 'Calculista'
    ],
    heightRange: { min: 150, max: 190 },
    ageRange: { min: 25, max: 70 },
    occupations: [
      'Assassino', 'Ladino', 'Necromante', 'Caçador de Recompensas', 'Bruxo', 'Investigador',
      'Mercenário', 'Explorador de Ruínas', 'Caçador de Criaturas', 'Vigilante', 'Espião',
      'Diplomata Sombrio'
    ],
    motivations: [
      'Vingança', 'Redenção', 'Autossuficiência', 'Segredos ocultos', 'Sobrevivência',
      'Compreender o lado escuro', 'Punir injustiças', 'Recuperar honra perdida',
      'Desvendar mistérios', 'Encontrar paz interior'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Vampiro', 'Humano', 'Tiefling', 'Elfo Negro', 'Meio-Sombrio', 'Drow', 'Changeling',
      'Elemental das Sombras', 'Semi-Morto', 'Criatura Amaldiçoada'
    ],
    additionalDetails: {
      socialBackground: [
        'Orfandade', 'Tradição oculta', 'Família destruída', 'Sobrevivente de conflito',
        'Exilado', 'Sociedade secreta', 'Vítima de traição', 'Refugiado'
      ],
      temperament: [
        'Frio', 'Racional', 'Cínico', 'Reservado', 'Introspectivo', 'Calculista', 'Melancólico',
        'Observador', 'Estrategista', 'Controlado'
      ],
      culturalTraits: [
        'Misterioso', 'Solitário', 'Desconfiado', 'Resiliente', 'Adaptável', 'Complexo',
        'Auto-suficiente', 'Profundo'
      ]
    }
  },
  'Caótico': {
    trait: 'Caótico',
    compatibleTraits: [
      'Impulsivo', 'Sarcástico', 'Aventureiro', 'Teimoso', 'Anárquico', 'Imprevisível',
      'Desafiador', 'Livre-pensador', 'Rebelde'
    ],
    heightRange: { min: 155, max: 195 },
    ageRange: { min: 16, max: 40 },
    occupations: [
      'Bardo', 'Ladino', 'Aventureiro', 'Mercenário', 'Pirata', 'Artista Performático',
      'Músico Ambulante', 'Explorador', 'Revolucionário', 'Contrabandista', 'Artista de Rua',
      'Inventor Excêntrico', 'Jogador'
    ],
    motivations: [
      'Liberdade', 'Diversão', 'Caos', 'Desafiar o destino', 'Quebrar regras', 'Experimentar',
      'Viver o momento', 'Desafiar o status quo', 'Buscar emoção', 'Provocar mudanças'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Tiefling', 'Gnomo', 'Meio-Elfo', 'Orc', 'Halfling', 'Changeling', 'Metamorfo',
      'Fey Brincalhão', 'Meio-Elemental', 'Criatura de Energia'
    ],
    additionalDetails: {
      socialBackground: [
        'Vida na rua', 'Tribo nômade', 'Artista de circo', 'Família itinerante', 'Comunidade rebelde',
        'Grupo de artistas', 'Família de viajantes', 'Cultura marginal'
      ],
      temperament: [
        'Espontâneo', 'Inconstante', 'Excêntrico', 'Imprevisível', 'Criativo', 'Energético',
        'Desafiador', 'Irreverente', 'Aventureiro', 'Dinâmico'
      ],
      culturalTraits: [
        'Rebelde', 'Brincalhão', 'Inconvencional', 'Adaptável', 'Livre', 'Desafiador',
        'Criativo', 'Anti-autoritário'
      ]
    }
  },
  'Pragmático': {
    trait: 'Pragmático',
    compatibleTraits: [
      'Realista', 'Calculista', 'Eficiente', 'Objetivo', 'Metódico', 'Disciplinado',
      'Racional', 'Estrategista', 'Sistemático'
    ],
    heightRange: { min: 155, max: 190 },
    ageRange: { min: 25, max: 60 },
    occupations: [
      'Comerciante', 'Administrador', 'Engenheiro', 'Consultor', 'Gerente', 'Planejador Urbano',
      'Estrategista Militar', 'Cientista', 'Arquiteto', 'Investigador', 'Juiz', 'Político'
    ],
    motivations: [
      'Eficiência', 'Resolver problemas', 'Otimizar sistemas', 'Alcançar metas',
      'Maximizar recursos', 'Criar estruturas', 'Compreender processos', 'Inovar',
      'Melhorar a sociedade', 'Buscar resultados concretos'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Humano', 'Gnomo', 'Meio-Elfo', 'Anão', 'Tiefling', 'Elemental da Terra',
      'Construto', 'Metamorfo Mecânico'
    ],
    additionalDetails: {
      socialBackground: [
        'Família de profissionais', 'Ambiente acadêmico', 'Classe média urbana',
        'Comunidade tecnológica', 'Família de comerciantes', 'Ambiente corporativo'
      ],
      temperament: [
        'Analítico', 'Objetivo', 'Metódico', 'Racional', 'Focado', 'Eficiente',
        'Sistemático', 'Controlado', 'Estrategista'
      ],
      culturalTraits: [
        'Lógico', 'Organizado', 'Objetivo', 'Inovador', 'Resolutivo', 'Estruturado',
        'Orientado a metas', 'Adaptável'
      ]
    }
  }
};
export {npcGenerationTree};
