export const slides = [
  // 1. ABERTURA – POSICIONAMENTO
  {
    id: 1,
    type: 'hero',
    headline: 'Planejamento Estratégico de Marketing e Crescimento Comercial',
    tagline: 'Distribuição de Alimentos | Logística Refrigerada | PB & RN',
    logos: ['/logo-pbrnfoods.png', '/logo-sharks.png']
  },
  // 2. SOBRE O GRUPO (PB & RN FOODS)
  {
    id: 2,
    type: 'about',
    title: 'Sobre o Grupo PB & RN Foods',
    description: 'Referência em distribuição de alimentos refrigerados na Paraíba e Rio Grande do Norte, com foco em Food Service, varejo e atacado.',
    stats: [
      { value: '10+', label: 'Anos de Experiência' },
      { value: '2', label: 'Estados Atendidos' },
      { value: '500+', label: 'Clientes Ativos' },
      { value: '100%', label: 'Logística Refrigerada' }
    ],
    differentials: [
      { icon: '🚛', text: 'Frota própria refrigerada' },
      { icon: '⚡', text: 'Agilidade no fornecimento' },
      { icon: '🔄', text: 'Entregas recorrentes' },
      { icon: '🎯', text: 'Foco no cliente B2B' }
    ]
  },
  // 3. CENÁRIO DE MERCADO (OPORTUNIDADE)
  {
    id: 3,
    type: 'market',
    title: 'Cenário de Mercado',
    subtitle: 'Por que investir em marketing agora?',
    opportunities: [
      { number: '+35%', text: 'Crescimento do Food Service no Nordeste' },
      { number: '+60%', text: 'Aumento na busca por distribuidores online' },
      { number: '4x', text: 'Mais leads gerados com presença digital' },
      { number: '80%', text: 'Dos compradores B2B pesquisam online' }
    ]
  },
  // 4. DIAGNÓSTICO INICIAL
  {
    id: 4,
    type: 'diagnosis',
    title: 'Diagnóstico Inicial',
    subtitle: 'De onde partimos',
    before: [
      'Baixa presença digital',
      'Canais desconectados',
      'Poucas ações de atração de leads',
      'Dependência de vendas reativas'
    ],
    after: [
      'Estrutura digital profissional',
      'Canais integrados e alinhados',
      'Funil de marketing ativo',
      'Vendas proativas e escaláveis'
    ]
  },
  // 5. ESTRUTURAÇÃO DO FUNIL DE MARKETING
  {
    id: 5,
    type: 'funnel-modern',
    title: 'Funil de Marketing',
    subtitle: 'Estratégia de captação e conversão',
    stages: [
      {
        name: 'TOPO',
        label: 'Atração',
        color: '#FF5252',
        items: ['Linktree', 'Instagram', 'Facebook', 'Google Negócios', 'YouTube']
      },
      {
        name: 'MEIO',
        label: 'Conversão',
        color: '#D32F2F',
        items: ['Tráfego Pago', 'Anúncios Segmentados', 'E-mail Marketing', 'Captura de Leads']
      },
      {
        name: 'FUNDO',
        label: 'Vendas',
        color: '#B71C1C',
        items: ['WhatsApp Comercial', 'Atendimento Rápido', 'Fechamento Consultivo']
      }
    ]
  },
  // 6. O QUE JÁ FOI IMPLEMENTADO
  {
    id: 6,
    type: 'implemented',
    title: 'O que já foi implementado',
    subtitle: 'Progresso real e ações executadas',
    items: [
      { status: 'done', text: 'Revisão completa da identidade visual' },
      { status: 'done', text: 'Mapeamento do público-alvo (ICP)' },
      { status: 'done', text: 'Criação de perfis nas redes sociais' },
      { status: 'done', text: 'Configuração do Google Meu Negócio' },
      { status: 'done', text: 'Linktree institucional configurado' },
      { status: 'done', text: 'Automações de WhatsApp ativas' },
      { status: 'done', text: 'Estrutura pronta para tráfego pago' },
      { status: 'done', text: 'Materiais de apoio para vendas' }
    ]
  },
  // 7. PRÓXIMOS PASSOS ESTRATÉGICOS
  {
    id: 7,
    type: 'roadmap-timeline',
    title: 'Próximos Passos',
    subtitle: 'Roadmap de crescimento',
    phases: [
      { phase: 'Q1 2026', title: 'Consolidação Digital', tasks: ['Mais publicações (feed + stories)', 'Calendário editorial ativo', 'Primeiras campanhas pagas'] },
      { phase: 'Q2 2026', title: 'Expansão & Tráfego', tasks: ['Campanhas de alto impacto', 'Conteúdos audiovisuais', 'Parcerias estratégicas'] },
      { phase: 'Q3 2026', title: 'Autoridade & Eventos', tasks: ['Participação em eventos do setor', 'Cases de sucesso', 'Fortalecimento da marca'] },
      { phase: 'Q4 2026', title: 'Escala Regional', tasks: ['Expansão para novos municípios', 'Automação de vendas completa', 'Liderança regional consolidada'] }
    ]
  },
  // 8. MASCOTE DA MARCA
  {
    id: 8,
    type: 'mascot-concept',
    title: 'Mascote da Marca',
    subtitle: 'Humanização e diferenciação',
    concept: 'Um personagem que representa a energia nordestina, confiança e proximidade com o cliente.',
    applications: [
      { icon: '📱', name: 'Redes Sociais', desc: 'Posts, stories e reels' },
      { icon: '🎬', name: 'Vídeos', desc: 'Conteúdo institucional' },
      { icon: '🎪', name: 'Eventos', desc: 'Ativações e feiras' },
      { icon: '🚛', name: 'Frota', desc: 'Adesivagem dos veículos' }
    ]
  },
  // 9. SOLUÇÕES DA SHARKS COMPANY
  {
    id: 9,
    type: 'solutions',
    title: 'Soluções Sharks Company',
    subtitle: 'Seu parceiro estratégico em marketing',
    services: [
      { icon: '📊', name: 'Gestão de Mídias Sociais', desc: 'Planejamento, criação e publicação' },
      { icon: '🎯', name: 'Tráfego Pago', desc: 'Google Ads, Meta Ads, remarketing' },
      { icon: '🎨', name: 'Design Gráfico', desc: 'Identidade visual e materiais' },
      { icon: '📈', name: 'Estratégia Digital', desc: 'Planejamento e execução completa' },
      { icon: '🎬', name: 'Produção Audiovisual', desc: 'Vídeos, fotos e conteúdo' },
      { icon: '💼', name: 'Consultoria', desc: 'Mentoria e acompanhamento' }
    ]
  },
  // 10. ENCERRAMENTO – CHAMADA FORTE
  {
    id: 10,
    type: 'closing',
    headline: 'Vamos escalar a presença do Grupo PB & RN Foods no Nordeste',
    tagline: 'O futuro da distribuição de alimentos começa agora.',
    cta: 'Juntos, somos mais fortes.',
    logos: ['/logo-pbrnfoods.png', '/logo-sharks.png']
  }
];
