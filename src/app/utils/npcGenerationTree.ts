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
  },
  'Sarcástico': {
    trait: 'Sarcástico',
    compatibleTraits: [
      'Astuto', 'Caótico', 'Inteligente', 'Crítico', 'Irônico', 'Observador',
      'Desconfiado', 'Cínico', 'Provocativo'
    ],
    heightRange: { min: 150, max: 185 },
    ageRange: { min: 20, max: 55 },
    occupations: [
      'Comediante', 'Escritor', 'Advogado', 'Crítico', 'Jornalista', 'Professor',
      'Diplomata', 'Consultor', 'Estrategista', 'Consultor Político', 'Artista'
    ],
    motivations: [
      'Desvendar verdades', 'Provocar reflexão', 'Criticar sistemas', 'Expor hipocrisia',
      'Entretenimento', 'Inteligência social', 'Defesa pessoal', 'Desafiar status quo',
      'Autodefesa através do humor', 'Compreensão crítica'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Meio-Elfo', 'Humano', 'Gnomo', 'Tiefling', 'Elfo', 'Changeling', 'Metamorfo',
      'Elemental da Mente', 'Criatura Cósmica'
    ],
    additionalDetails: {
      socialBackground: [
        'Família intelectual', 'Ambiente acadêmico', 'Comunidade artística',
        'Ambiente urbano', 'Família de artistas', 'Grupo de intelectuais', 'Cultura crítica'
      ],
      temperament: [
        'Inteligente', 'Crítico', 'Perspicaz', 'Rápido', 'Provocativo', 'Observador',
        'Incisivo', 'Irônico', 'Sagaz', 'Adaptável'
      ],
      culturalTraits: [
        'Intelectual', 'Crítico', 'Irônico', 'Provocativo', 'Sagaz', 'Desafiador',
        'Questionador', 'Perspicaz'
      ]
    }
  },
  'Impulsivo': {
    trait: 'Impulsivo',
    compatibleTraits: [
      'Caótico', 'Aventureiro', 'Corajoso', 'Teimoso', 'Extrovertido', 'Destemido',
      'Apaixonado', 'Energético', 'Direto'
    ],
    heightRange: { min: 155, max: 195 },
    ageRange: { min: 16, max: 40 },
    occupations: [
      'Aventureiro', 'Explorador', 'Artista Performático', 'Mercenário', 'Esportista',
      'Lutador', 'Piloto', 'Bombeiro', 'Artista de Rua', 'Revolucionário', 'Capitão'
    ],
    motivations: [
      'Emoção', 'Liberdade', 'Desafios imediatos', 'Vivenciar o momento', 'Conquista rápida',
      'Autorrealização', 'Provar-se', 'Experimentar', 'Superar limites', 'Adrenalina'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Meio-Orc', 'Tiefling', 'Humano', 'Orc', 'Draconato', 'Metamorfo', 'Meio-Elemental',
      'Criatura de Energia', 'Genasi'
    ],
    additionalDetails: {
      socialBackground: [
        'Família aventureira', 'Comunidade de esportistas', 'Ambiente urbano dinâmico',
        'Tribo nômade', 'Família militar', 'Cultura de risco', 'Comunidade de artistas'
      ],
      temperament: [
        'Energético', 'Dinâmico', 'Espontâneo', 'Ardoroso', 'Direto', 'Audacioso',
        'Irrequieto', 'Intenso', 'Apaixonado', 'Inconstante'
      ],
      culturalTraits: [
        'Aventureiro', 'Destemido', 'Enérgico', 'Direto', 'Apaixonado', 'Intenso',
        'Livre', 'Corajoso'
      ]
    }
  },
  'Reservado': {
    trait: 'Reservado',
    compatibleTraits: [
      'Sombrio', 'Introspectivo', 'Observador', 'Cauteloso', 'Tímido', 'Analítico',
      'Pensativo', 'Calmo', 'Discreto'
    ],
    heightRange: { min: 150, max: 185 },
    ageRange: { min: 20, max: 60 },
    occupations: [
      'Bibliotecário', 'Escritor', 'Pesquisador', 'Artista', 'Ermitão', 'Estudioso',
      'Arquivista', 'Filósofo', 'Cientista', 'Tradutor', 'Acadêmico', 'Mentor'
    ],
    motivations: [
      'Preservar conhecimento', 'Evitar conflitos', 'Autoconhecimento', 'Reflexão',
      'Compreender o mundo', 'Paz interior', 'Aprendizado silencioso', 'Criação artística',
      'Contemplação', 'Descoberta pessoal'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Elfo', 'Humano', 'Gnomo', 'Meio-Elfo', 'Tiefling', 'Aasimar', 'Drow',
      'Elemental da Mente', 'Metamorfo Contemplativo'
    ],
    additionalDetails: {
      socialBackground: [
        'Família acadêmica', 'Comunidade de estudiosos', 'Ambiente monástico',
        'Biblioteca real', 'Família introvertida', 'Comunidade artística', 'Ambiente rural'
      ],
      temperament: [
        'Reflexivo', 'Profundo', 'Calmo', 'Observador', 'Analítico', 'Discreto',
        'Meticuloso', 'Introspectivo', 'Silencioso', 'Pensativo'
      ],
      culturalTraits: [
        'Intelectual', 'Profundo', 'Discreto', 'Contemplativo', 'Observador',
        'Analítico', 'Autoconsciente', 'Reflexivo'
      ]
    }
  },
  'Leal': {
    trait: 'Leal',
    compatibleTraits: [
      'Corajoso', 'Honrado', 'Altruísta', 'Protetor', 'Disciplinado', 'Confiável',
      'Comprometido', 'Dedicado', 'Íntegro'
    ],
    heightRange: { min: 155, max: 195 },
    ageRange: { min: 20, max: 60 },
    occupations: [
      'Guarda', 'Soldado', 'Cavaleiro', 'Conselheiro', 'Diplomata', 'Policial',
      'Militar', 'Assistente Pessoal', 'Mentor', 'Parceiro de Equipe', 'Guarda-costas'
    ],
    motivations: [
      'Proteger amigos', 'Honrar compromissos', 'Manter a palavra', 'Defender princípios',
      'Apoiar a família', 'Seguir um código', 'Construir confiança', 'Manter tradições',
      'Preservar relacionamentos', 'Ser digno de confiança'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Humano', 'Anão', 'Meio-Orc', 'Draconato', 'Goliath', 'Aasimar', 'Centauro',
      'Metamorfo', 'Elemental da Terra'
    ],
    additionalDetails: {
      socialBackground: [
        'Família militar', 'Comunidade tradicional', 'Ordem religiosa', 'Clã guerreiro',
        'Família de servidores públicos', 'Comunidade disciplinada', 'Ambiente estruturado'
      ],
      temperament: [
        'Consistente', 'Confiável', 'Dedicado', 'Disciplinado', 'Firme', 'Íntegro',
        'Responsável', 'Estável', 'Determinado', 'Comprometido'
      ],
      culturalTraits: [
        'Honroso', 'Confiável', 'Disciplinado', 'Tradicional', 'Íntegro', 'Protetor',
        'Comprometido', 'Respeitador de regras'
      ]
    }
  },
  'Desconfiado': {
    trait: 'Desconfiado',
    compatibleTraits: [
      'Astuto', 'Sombrio', 'Cauteloso', 'Reservado', 'Calculista', 'Observador',
      'Estrategista', 'Cético', 'Prudente'
    ],
    heightRange: { min: 150, max: 190 },
    ageRange: { min: 25, max: 65 },
    occupations: [
      'Investigador', 'Espião', 'Detetive', 'Segurança', 'Juiz', 'Advogado',
      'Consultor de Segurança', 'Diplomata', 'Analista', 'Estrategista', 'Investigador Particular'
    ],
    motivations: [
      'Proteger-se', 'Descobrir verdades ocultas', 'Evitar enganos', 'Manter controle',
      'Preservar segurança', 'Compreender motivações', 'Antecipar riscos', 'Evitar vulnerabilidade',
      'Manter distância emocional', 'Sobrevivência'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Humano', 'Tiefling', 'Elfo', 'Meio-Elfo', 'Drow', 'Changeling', 'Metamorfo',
      'Elemental das Sombras', 'Vampiro'
    ],
    additionalDetails: {
      socialBackground: [
        'Sobrevivente de traição', 'Família instável', 'Ambiente urbano perigoso',
        'Comunidade marginalizada', 'Histórico de conflitos', 'Ambiente de intriga',
        'Família de estrategistas'
      ],
      temperament: [
        'Cauteloso', 'Analítico', 'Observador', 'Prudente', 'Estrategista', 'Reservado',
        'Cético', 'Vigilante', 'Calculista', 'Protector'
      ],
      culturalTraits: [
        'Cauteloso', 'Estrategista', 'Observador', 'Prudente', 'Reservado', 'Adaptável',
        'Autopreservação', 'Perspicaz'
      ]
    }
  },
  'Otimista': {
    trait: 'Otimista',
    compatibleTraits: [
      'Gentil', 'Esperançoso', 'Altruísta', 'Corajoso', 'Inspirador', 'Energético',
      'Sonhador', 'Resiliente', 'Positivo'
    ],
    heightRange: { min: 140, max: 185 },
    ageRange: { min: 18, max: 55 },
    occupations: [
      'Professor', 'Conselheiro', 'Coach', 'Artista', 'Líder Comunitário', 'Terapeuta',
      'Médico', 'Motivador', 'Líder Religioso', 'Escritor', 'Ativista Social'
    ],
    motivations: [
      'Inspirar outros', 'Promover esperança', 'Resolver problemas', 'Transformar vidas',
      'Construir comunidade', 'Gerar mudança positiva', 'Superar desafios',
      'Espalhar alegria', 'Acreditar no potencial humano', 'Criar oportunidades'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Humano', 'Halfling', 'Aasimar', 'Fey', 'Meio-Elfo', 'Gnomo', 'Elemental da Luz',
      'Metamorfo Celestial', 'Tritão'
    ],
    additionalDetails: {
      socialBackground: [
        'Família acolhedora', 'Comunidade solidária', 'Ambiente educacional',
        'Família de líderes', 'Cultura de superação', 'Comunidade inclusiva',
        'Ambiente de apoio mútuo'
      ],
      temperament: [
        'Energético', 'Inspirador', 'Positivo', 'Resiliente', 'Esperançoso', 'Empático',
        'Encorajador', 'Criativo', 'Dinâmico', 'Entusiasmado'
      ],
      culturalTraits: [
        'Esperançoso', 'Inspirador', 'Positivo', 'Transformador', 'Resiliente',
        'Construtivo', 'Empático', 'Motivador'
      ]
    }
  },
  'Pessimista': {
    trait: 'Pessimista',
    compatibleTraits: [
      'Sombrio', 'Realista', 'Cético', 'Desconfiado', 'Introspectivo', 'Analítico',
      'Cauteloso', 'Pragmático', 'Melancólico'
    ],
    heightRange: { min: 150, max: 190 },
    ageRange: { min: 25, max: 65 },
    occupations: [
      'Crítico', 'Consultor', 'Analista de Risco', 'Filósofo', 'Escritor', 'Advogado',
      'Cientista', 'Investigador', 'Estrategista', 'Planejador', 'Consultor Financeiro'
    ],
    motivations: [
      'Evitar decepções', 'Antecipar problemas', 'Proteção emocional', 'Análise crítica',
      'Compreender limitações', 'Preparar-se para o pior', 'Manter controle',
      'Evitar riscos', 'Preservar expectativas baixas', 'Autoproteção'
    ],
    genders: ['Masculino', 'Feminino', 'Outro', 'Não-binário'],
    races: [
      'Humano', 'Tiefling', 'Elfo Negro', 'Meio-Elfo', 'Vampiro', 'Sombrio',
      'Elemental das Sombras', 'Metamorfo Melancólico'
    ],
    additionalDetails: {
      socialBackground: [
        'Ambiente de conflito', 'Família instável', 'Comunidade marginalizada',
        'Histórico de dificuldades', 'Ambiente de sobrevivência', 'Cultura cética',
        'Família de estrategistas'
      ],
      temperament: [
        'Analítico', 'Cauteloso', 'Crítico', 'Reservado', 'Realista', 'Introspectivo',
        'Estrategista', 'Precavido', 'Observador', 'Meticuloso'
      ],
      culturalTraits: [
        'Realista', 'Crítico', 'Cauteloso', 'Analítico', 'Estrategista', 'Reservado',
        'Profundo', 'Preparado'
      ]
    }
  }
};
export {npcGenerationTree};
