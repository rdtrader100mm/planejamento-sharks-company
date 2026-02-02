// Dados do RELATÓRIO EXECUTIVO DE MARKETING
// Foco: Execução, Entregas e Próximos Passos

export const slides = [
    // SLIDE 1: CAPA EXECUTIVA
    {
        id: 1,
        type: 'hero',
        headline: 'Relatório Executivo de Marketing',
        tagline: 'Status de Implementação & Planejamento Estratégico 2026',
        logos: ['/logo-pbrnfoods.png', '/logo-sharks.png']
    },

    // SLIDE 2: DIAGNÓSTICO (ANTES VS DEPOIS)
    {
        id: 2,
        type: 'diagnosis',
        title: 'Evolução da Estrutura Comercial',
        subtitle: 'Transformação do cenário operacional em ecossistema digital',
        before: [
            'Prospecção 100% manual e dependente de vendedores',
            'Ausência de materiais de apoio padronizados',
            'Baixa visibilidade da marca no digital',
            'Controle de leads descentralizado'
        ],
        after: [
            'Processo de captação digital estruturado',
            'Kit de vendas e apresentação institucional prontos',
            'Identidade visual modernizada e ativa',
            'CRM e Funil de Vendas integrados'
        ]
    },

    // SLIDE 3: O QUE JÁ FOI FEITO (ENTREGAS TANGÍVEIS)
    {
        id: 3,
        type: 'implemented',
        title: 'Status: Ações Concluídas',
        subtitle: 'Entregas realizadas na fase de estruturação inicial',
        items: [
            { text: 'Diagnóstico Comercial Completo', status: 'done' },
            { text: 'Definição de ICP (Perfil de Cliente Ideal)', status: 'done' },
            { text: 'Criação da Nova Identidade Visual', status: 'done' },
            { text: 'Desenvolvimento do Mascote da Marca', status: 'done' },
            { text: 'Estruturação do CRM de Vendas', status: 'done' },
            { text: 'Produção de Apresentação Institucional', status: 'done' },
            { text: 'Setup de Redes Sociais (Instagram/LinkedIn)', status: 'done' },
            { text: 'Definição da Política Comercial', status: 'done' }
        ]
    },

    // SLIDE 4: ESTRUTURA ATIVA (FUNIL)
    {
        id: 4,
        type: 'funnel-modern',
        title: 'Máquina de Vendas Ativa',
        subtitle: 'Estrutura atual de captação e conversão de clientes',
        stages: [
            {
                name: 'ATRAÇÃO',
                label: 'Tráfego & Prospecção',
                color: '#FF5252',
                items: ['Ads (Meta/Google)', 'Social Media', 'Prospecção Ativa']
            },
            {
                name: 'NEGOCIAÇÃO',
                label: 'Qualificação & Oferta',
                color: '#D32F2F',
                items: ['Qualificação (SDR)', 'Apresentação', 'Envio de Proposta']
            },
            {
                name: 'FECHAMENTO',
                label: 'Conversão & Onboarding',
                color: '#B71C1C',
                items: ['Assinatura', 'Onboarding', 'Pós-Venda']
            }
        ]
    },

    // SLIDE 5: BRANDING & DIFERENCIAÇÃO
    {
        id: 5,
        type: 'mascot-concept',
        title: 'Estratégia de Humanização',
        subtitle: 'Novo ativo de marca para conexão com varejistas e clientes finais',
        concept: 'Criação de um personagem proprietário para gerar identificação rápida, facilitar a comunicação de ofertas e aumentar a lembrança de marca nos PDVs.',
        applications: [
            {
                icon: '📱',
                name: 'Digital',
                desc: 'Mascote virtual para atendimento e redes sociais'
            },
            {
                icon: '🛒',
                name: 'PDV',
                desc: 'Displays, wobblers e materiais de merchandising'
            },
            {
                icon: '👕',
                name: 'Uniformização',
                desc: 'Estampas para equipe de vendas e logística'
            },
            {
                icon: '🚚',
                name: 'Frota',
                desc: 'Adesivação de caminhões e veículos'
            }
        ]
    },

    // SLIDE 6: PRÓXIMOS PASSOS (ROADMAP)
    {
        id: 6,
        type: 'roadmap-timeline',
        title: 'Roadmap Estratégico: Q2',
        subtitle: 'Próximas fases de execução e escala',
        phases: [
            {
                phase: 'MÊS 1',
                title: 'Tração Inicial',
                tasks: ['Início das campanhas de tráfego pago', 'Ativação da base de leads frios', 'Treinamento de CRM para equipe']
            },
            {
                phase: 'MÊS 2',
                title: 'Otimização',
                tasks: ['Refinamento de públicos (Ads)', 'Ajuste de roteiros de vendas', 'Início de ações de Inbound']
            },
            {
                phase: 'MÊS 3',
                title: 'Escala',
                tasks: ['Aumento de investimento em mídia', 'Expansão para novas regiões', 'Implementação de Dashboards de BI']
            },
            {
                phase: 'MÊS 4+',
                title: 'Consolidação',
                tasks: ['Automação de marketing completa', 'Programa de fidelidade', 'Novos canais de venda']
            }
        ]
    },

    // SLIDE 7: ENCERRAMENTO
    {
        id: 7,
        type: 'closing',
        headline: 'Validação do Planejamento',
        tagline: 'Estamos prontos para iniciar a fase de escala.',
        cta: 'Aprovar Próximos Passos',
        logos: ['/logo-pbrnfoods.png', '/logo-sharks.png']
    }
];
