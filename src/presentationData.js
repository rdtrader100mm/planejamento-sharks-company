// Dados do PLANO ESTRATÉGICO DE MARKETING
// Foco: Realidade Operacional, Dados Regionais (PB/RN) e Ações Práticas

export const slides = [
    // 1. ABERTURA
    {
        id: 1,
        type: 'hero',
        headline: 'Plano Estratégico de Marketing',
        tagline: 'Expansão Digital & Consolidação Regional',
        logos: ['/logo-pbrnfoods.png']
    },

    // 2. OBJETIVO DO PROJETO
    {
        id: 2,
        type: 'project-objectives',
        title: 'Objetivos Estratégicos',
        subtitle: 'Focos principais da atuação de marketing',
        items: [
            {
                icon: '🎯',
                title: 'Organização Digital',
                desc: 'Profissionalizar a presença da marca em todos os canais.'
            },
            {
                icon: '⚡',
                title: 'Geração de Leads',
                desc: 'Criar fluxo constante de novos clientes potenciais.'
            },
            {
                icon: '📍',
                title: 'Posicionamento Regional',
                desc: 'Consolidar liderança em PB e RN no setor alimentício.'
            },
            {
                icon: '🤝',
                title: 'Apoio a Vendas',
                desc: 'Fornecer materiais e leads qualificados para o time comercial.'
            }
        ]
    },

    // 3. CENÁRIO DE MERCADO REGIONAL
    {
        id: 3,
        type: 'market-regional',
        title: 'Cenário de Mercado',
        subtitle: 'Paraíba e Rio Grande do Norte',
        bullets: [
            {
                icon: '🗺️',
                text: 'O Nordeste tem forte presença de food service e varejo alimentício, com alta demanda por logística refrigerada confiável.'
            },
            {
                icon: '🏙️',
                text: 'Em João Pessoa, Campina Grande e Natal, supermercados e atacarejos dependem vitalmente da distribuição B2B eficiente.'
            },
            {
                icon: '📱',
                text: 'A digitalização das compras corporativas (Instagram/WhatsApp) é o principal motor atual de aproximação com novos clientes.'
            }
        ]
    },

    // 4. O QUE JÁ FOI IMPLEMENTADO (DIVIDIDO POR FUNIL)
    {
        id: 4,
        type: 'implemented-grouped',
        title: 'Status: Implementação',
        subtitle: 'Estrutura entregue e ativa em cada etapa do funil',
        groups: [
            {
                title: 'TOPO (Atração)',
                color: '#FF5252',
                items: [
                    'Bio Estratégica & Link Único',
                    'Automação Instagram',
                    'Página Facebook Integrada',
                    'Google My Business Otimizado',
                    'Canal YouTube Institucional'
                ]
            },
            {
                title: 'MEIO (Conversão)',
                color: '#D32F2F',
                items: [
                    'Gerenciador de Anúncios Setup',
                    'Campanhas de Tráfego Teste',
                    'Estrutura de E-mail Marketing'
                ]
            },
            {
                title: 'FUNDO (Vendas)',
                color: '#B71C1C',
                items: [
                    'WhatsApp Comercial Definido',
                    'Atendimento Centralizado (Camila)',
                    'Fluxo de Resposta Padronizado'
                ]
            }
        ]
    },

    // 5. ESTRUTURA ATUAL DO FUNIL
    {
        id: 5,
        type: 'funnel-modern',
        title: 'Fluxo de Aquisição Ativo',
        subtitle: 'Caminho do cliente: Do anúncio ao fechamento',
        stages: [
            {
                name: 'ORIGEM',
                label: 'Instagram & Anúncios',
                color: '#FF5252',
                items: ['Anúncios Segmentados', 'Conteúdo Orgânico', 'Busca Google']
            },
            {
                name: 'CONEXÃO',
                label: 'WhatsApp & Link Bio',
                color: '#D32F2F',
                items: ['Automação de Boas-vindas', 'Direcionamento Rápido', 'Filtro de Interesse']
            },
            {
                name: 'CONVERSÃO',
                label: 'Time Comercial',
                color: '#B71C1C',
                items: ['Atendimento Humano', 'Negociação', 'Fechamento de Pedido']
            }
        ]
    },

    // 6. PRÓXIMOS PASSOS (ROADMAP TÁTICO)
    {
        id: 6,
        type: 'roadmap-layered',
        title: 'Plano de Ação Tático',
        subtitle: 'Próximas ações de otimização e escala',
        layers: [
            {
                category: 'ATRAÇÃO',
                icon: '📢',
                actions: ['Stories diários ativos', '3–6 posts semanais no feed', 'Verticais: Produtos, Logística, Bastidores', 'Networking em eventos A&B']
            },
            {
                category: 'CONVERSÃO',
                icon: '⚡',
                actions: ['Campanhas de tráfego contínuo (Ads)', 'Geração de leads B2B qualificados', 'Remarketing para base inativa']
            },
            {
                category: 'VENDAS',
                icon: '💰',
                actions: ['Otimização do WhatsApp Comercial', 'Scripts de atendimento e follow-up', 'Treinamento de CRM']
            }
        ]
    },

    // 7. MASCOTE DA MARCA
    {
        id: 7,
        type: 'mascot-concept',
        title: 'Estratégia de Branding',
        subtitle: 'Mascote como facilitador de comunicação no PDV',
        concept: 'Personagem proprietário para humanizar a logística, destacar produtos no PDV e criar identificação rápida com o varejista regional.',
        applications: [
            {
                icon: '📱',
                name: 'Redes Sociais',
                desc: 'Porta-voz de ofertas e dicas'
            },
            {
                icon: '👕',
                name: 'Endomarketing',
                desc: 'Engajamento da equipe interna'
            },
            {
                icon: '🏷️',
                name: 'Materiais PDV',
                desc: 'Wobblers e cartazes promocionais'
            },
            {
                icon: '🚚',
                name: 'Frota',
                desc: 'Identidade visual móvel'
            }
        ]
    },

    // 8. ENCERRAMENTO
    {
        id: 8,
        type: 'closing',
        headline: 'Prontos para Escalar',
        tagline: 'Estratégia desenhada. Estrutura pronta. Foco em execução.',
        cta: 'SHARKS COMPANY & PB/RN FOODS',
        logos: ['/logo-pbrnfoods.png', '/logo-sharks.png']
    }
];
