export interface ServiceItem {
  id: string;
  title: string;
  iconName: "TrendingUp" | "Users" | "FileText" | "ShieldCheck" | "Coins" | "Activity";
  shortDescription: string;
  longDescription: string;
  category: "Financeiro" | "Trabalhista" | "Fiscal" | "Cobrança";
  technicalSpecs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "gestao-financeira",
    title: "Gestão Financeira & Balancetes",
    iconName: "TrendingUp",
    shortDescription: "Conciliação diária de contas e elaboração de pastas de prestação de contas mensais de alta clareza.",
    longDescription: "Garantimos a total integridade de cada centavo do condomínio através de rotinas financeiras rígidas. Nosso time realiza conciliação bancária diária, auditoria de notas fiscais e produz pastas físicas ou digitais de prestação de contas com gráficos intuitivos de receitas e despesas.",
    category: "Financeiro",
    technicalSpecs: [
      "Conciliação bancária digital diária das contas correntes e de poupança/fundo de reserva",
      "Confecção e encadernação de pastas de prestação de contas mensais (físicas e digitais)",
      "Elaboração de cronograma financeiro para previsão orçamentária anual recomendada",
      "Emissão de relatórios gerenciais personalizados para o Corpo Diretivo via portal online",
      "Pagamentos programados de fornecedores e contratos com dupla checagem de segurança"
    ]
  },
  {
    id: "departamento-pessoal",
    title: "Departamento Pessoal & Trabalhista",
    iconName: "Users",
    shortDescription: "Gestão completa de folha de pagamento, benefícios e eSocial de funcionários próprios ou terceirizados.",
    longDescription: "A área trabalhista é uma das mais críticas na gestão condominial. Reduzimos riscos jurídicos administrando admissões, demissões, folha de pagamento, controle rígido de horas extras, férias e o envio integral de obrigações ao Governo Federal pelo sistema eSocial.",
    category: "Trabalhista",
    technicalSpecs: [
      "Processamento de folha de pagamento mensal de funcionários e prestadores autônomos",
      "Cálculo e emissão de guias de recolhimento de encargos (INSS, FGTS, PIS, Contribuições)",
      "Gestão de escalas de trabalho de portaria e limpeza em conformidade com as convenções coletivas",
      "Envio pontual de eventos periódicos e não periódicos ao eSocial governamental",
      "Controle de exames médicos ocupacionais (PCMSO/PPRA) e cronograma de férias"
    ]
  },
  {
    id: "assessoria-fiscal",
    title: "Assessoria Fiscal & Tributária",
    iconName: "FileText",
    shortDescription: "Apuração de retenções tributárias federais e municipais com garantia de regularidade jurídica.",
    longDescription: "Evitamos multas onerosas para o seu condomínio por meio de um acompanhamento preciso das obrigações fiscais. Cuidamos das retenções de impostos de notas fiscais de serviços tomados (como PIS, COFINS, CSLL, ISS e INSS) e emitimos declarações fiscais obrigatórias.",
    category: "Fiscal",
    technicalSpecs: [
      "Análise criteriosa e apuração de impostos retidos na fonte sobre notas fiscais de terceiros",
      "Preenchimento e transmissão de declarações acessórias como DIRF, DCTFWeb e EFD-Reinf",
      "Monitoramento constante da Situação Fiscal da Receita Federal e Prefeitura de Guarulhos-SP",
      "Renovação e manutenção periódica do Certificado Digital do Condomínio (e-CNPJ)",
      "Garantia de conformidade tributária em contratos de prestação de serviços de grande porte"
    ]
  },
  {
    id: "cobranca-inadimplencia",
    title: "Cobrança Inteligente & Pix",
    iconName: "Coins",
    shortDescription: "Geração de boletos híbridos (Código de Barras + QR Code Pix) e gestão ativa de inadimplência.",
    longDescription: "Melhoramos o fluxo de caixa do condomínio otimizando as rotinas de cobrança. Emitimos boletos com tecnologia de QR Code Pix integrado (compensação em tempo real) e estruturamos um setor dedicado à cobrança amigável de cotas atrasadas, reduzindo a taxa de inadimplência.",
    category: "Cobrança",
    technicalSpecs: [
      "Emissão de boletos bancários registrados com opção de pagamento rápido via QR Code Pix",
      "Envio automatizado de avisos de vencimento por e-mail e aplicativo com atalho de pagamento",
      "Departamento especializado de cobrança extrajudicial ativa com acordos parcelados formais",
      "Emissão de relatórios dinâmicos de inadimplência analítica com gráficos de evolução histórica",
      "Emissão de cartas de quitação anual e certidão negativa de débitos condominiais"
    ]
  }
];
