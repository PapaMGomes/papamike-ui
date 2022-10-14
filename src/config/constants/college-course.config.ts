import { COLLEGE_COURSES_CATEGORY } from '@/contants/college-couse-category.constant'
import { ICollegeCourse } from '@/interfaces/_college-course.interface'

const { baccalaureate, graduation, technologist, postgraduateStudies } =
    COLLEGE_COURSES_CATEGORY

const BACCALAUREATE: ICollegeCourse[] = [
    { name: 'Administração', category: baccalaureate },
    { name: 'Ciência Política', category: baccalaureate },
    { name: 'Ciências Contábeis', category: baccalaureate },
    { name: 'Ciências Econômicas', category: baccalaureate },
    { name: 'Criminologia', category: baccalaureate },
    { name: 'Engenharia Civil', category: baccalaureate },
    { name: 'Engenharia da Computação', category: baccalaureate },
    { name: 'Engenharia de Produção', category: baccalaureate },
    { name: 'Engenharia de Software', category: baccalaureate },
    { name: 'Engenharia Elétrica', category: baccalaureate },
    { name: 'Engenharia Mecânica', category: baccalaureate },
    { name: 'Jornalismo', category: baccalaureate },
    { name: 'Publicidade e Propaganda', category: baccalaureate },
    { name: 'Relações Internacionais', category: baccalaureate },
    { name: 'Teologia', category: baccalaureate }
]

const GRADUATION: ICollegeCourse[] = [
    { name: 'Artes Visuais', category: graduation },
    { name: 'Ciências Biológicas', category: graduation },
    { name: 'Educação Especial', category: graduation },
    { name: 'Filosofia', category: graduation },
    { name: 'Geografia', category: graduation },
    { name: 'História', category: graduation },
    { name: 'Letras - Português', category: graduation },
    { name: 'Letras - Português e EspanhoL', category: graduation },
    { name: 'Letras - Português e Inglês', category: graduation },
    { name: 'Matemática', category: graduation },
    { name: 'Pedagogia', category: graduation },
    { name: 'Sociologia', category: graduation }
]

const TECHNOLOGIST: ICollegeCourse[] = [
    { name: 'Agronegócios', category: technologist },
    { name: 'Análise e Desenvolvimento de Sistemas', category: technologist },
    { name: 'Arquitetura de Dados', category: technologist },
    {
        name: 'Blockchain, Criptomoedas e Finanças na Era Digital',
        category: technologist
    },
    { name: 'Cibersegurança -Tecnólogo', category: technologist },
    { name: 'Ciência de Dados', category: technologist },
    { name: 'Coaching e Desenvolvimento Humano', category: technologist },
    { name: 'Comércio Exterior', category: technologist },
    { name: 'Computação em Nuvem', category: technologist },
    { name: 'Desenvolvimento Back-End', category: technologist },
    { name: 'Desenvolvimento Mobile', category: technologist },
    { name: 'Desenvolvimento Web', category: technologist },
    { name: 'Design de Interiores', category: technologist },
    { name: 'Design de Moda', category: technologist },
    { name: 'Design de Produto', category: technologist },
    { name: 'Design Gráfico', category: technologist },
    { name: 'DevOps', category: technologist },
    { name: 'Embelezamento e Imagem Pessoal', category: technologist },
    { name: 'Empreendedorismo', category: technologist },
    { name: 'Estética e Cosmética', category: technologist },
    { name: 'Eventos', category: technologist },
    { name: 'Fotografia', category: technologist },
    { name: 'Gerontologia', category: technologist },
    { name: 'Gestão Ambiental', category: technologist },
    { name: 'Gestão Comercial', category: technologist },
    { name: 'Gestão da Inovação', category: technologist },
    { name: 'Gestão da Produção Industrial', category: technologist },
    { name: 'Gestão da Qualidade', category: technologist },
    { name: 'Gestão da Tecnologia da Informação', category: technologist },
    { name: 'Gestão de Cooperativas', category: technologist },
    { name: 'Gestão de Produto', category: technologist },
    { name: 'Gestão de Recursos Humanos', category: technologist },
    { name: 'Gestão de Saúde Pública', category: technologist },
    { name: 'Gestão de Turismo', category: technologist },
    { name: 'Gestão Financeira', category: technologist },
    { name: 'Gestão Hospitalar', category: technologist },
    { name: 'Gestão Portuária', category: technologist },
    { name: 'Gestão Pública', category: technologist },
    {
        name: 'Inteligência de Mercado e Análise de Dados - Tecnólogo',
        category: technologist
    },
    { name: 'Investigação e Perícia Criminal', category: technologist },
    { name: 'Jogos Digitais', category: technologist },
    { name: 'Marketing', category: technologist },
    { name: 'Marketing Digital', category: technologist },
    { name: 'Mediação', category: technologist },
    { name: 'Negócios Imobiliários', category: technologist },
    { name: 'Processos Gerenciais', category: technologist },
    { name: 'Produção Cervejeira', category: technologist },
    { name: 'Redes de Computadores', category: technologist },
    { name: 'Secretariado', category: technologist },
    { name: 'Segurança no Trabalho', category: technologist },
    { name: 'Segurança Pública', category: technologist },
    {
        name: 'Serviços Jurídicos Cartorários e Notariais',
        category: technologist
    },
    { name: 'Sistemas para Internet', category: technologist },
    { name: 'Terapias Integrativas e Complementares', category: technologist },
    { name: 'Sociologia', category: technologist }
]

const POSTGRADUATE_STUDIES: ICollegeCourse[] = [
    { name: 'Administração de banco de dados', category: postgraduateStudies },
    { name: 'Administração para Engenheiros', category: postgraduateStudies },
    {
        name: 'Africanidades e Cultura Afro-Brasileira',
        category: postgraduateStudies
    },
    { name: 'Alfabetização e Letramento', category: postgraduateStudies },
    {
        name: 'Análise, Projeto e Gerência de Sistemas',
        category: postgraduateStudies
    },
    { name: 'Animação Digital', category: postgraduateStudies },
    {
        name: 'Arquitetura de Software Arquitetura e Cidades',
        category: postgraduateStudies
    },
    { name: 'Arte Educação', category: postgraduateStudies },
    {
        name: 'Atendimento Educacional Especializado e Educação Especial',
        category: postgraduateStudies
    },
    {
        name: 'Auditoria, Perícia e Licenciamento Ambiental',
        category: postgraduateStudies
    },
    {
        name: 'Business Intelligence, Big Data e Analytics - Ciência de Dados',
        category: postgraduateStudies
    },
    {
        name: 'Cidades Inteligentes: Tecnologia e Inovação',
        category: postgraduateStudies
    },
    { name: 'Compliance contratual', category: postgraduateStudies },
    { name: 'Compliance e Gestão de Riscos', category: postgraduateStudies },
    {
        name: 'Computação Forense e Perícia Digital',
        category: postgraduateStudies
    },
    {
        name: 'Condicionamento físico e musculação',
        category: postgraduateStudies
    },
    {
        name: 'Contabilidade com ênfase em Tributos',
        category: postgraduateStudies
    },
    {
        name: 'Contabilidade, Perícia e Auditoria',
        category: postgraduateStudies
    },
    {
        name: 'Desenvolvimento de Aplicações Mobile',
        category: postgraduateStudies
    },
    { name: 'Desenvolvimento de Games', category: postgraduateStudies },
    { name: 'Desenvolvimento Web Full-Stack', category: postgraduateStudies },
    {
        name: 'Desenvolvimento Humano e Gestão de Projetos',
        category: postgraduateStudies
    },
    { name: 'Design de Interiores', category: postgraduateStudies },
    {
        name: 'Design de produtos digitais - UX/UI',
        category: postgraduateStudies
    },
    { name: 'Design Instrucional', category: postgraduateStudies },
    { name: 'Direito administrativo', category: postgraduateStudies },
    { name: 'Direito Ambiental', category: postgraduateStudies },
    { name: 'Direito civil', category: postgraduateStudies },
    { name: 'Direito constitucional', category: postgraduateStudies },
    {
        name: 'Direito de família e das sucessões',
        category: postgraduateStudies
    },
    {
        name: 'Direito do Trabalho e Previdenciário',
        category: postgraduateStudies
    },
    {
        name: 'Direito do trabalho e processo do trabalho',
        category: postgraduateStudies
    },
    { name: 'Direito e Tecnologia', category: postgraduateStudies },
    { name: 'Direito Imobiliário Aplicado', category: postgraduateStudies },
    { name: 'Direito notarial e registral', category: postgraduateStudies },
    { name: 'Direito penal e processo penal', category: postgraduateStudies },
    {
        name: 'Direito previdenciário: teoria e prática',
        category: postgraduateStudies
    },
    { name: 'Direito processual civil', category: postgraduateStudies },
    { name: 'Direito tributário', category: postgraduateStudies },
    { name: 'Direito público', category: postgraduateStudies },
    { name: 'Docência em Saúde', category: postgraduateStudies },
    { name: 'Docência no Ensino Superior', category: postgraduateStudies },
    {
        name: 'Docência na Educação Profissional e Ensino Técnico',
        category: postgraduateStudies
    },
    {
        name: 'EAD e as Novas Tecnologias Educacionais',
        category: postgraduateStudies
    },
    { name: 'Economia Criativa', category: postgraduateStudies },
    { name: 'Educação Ambiental', category: postgraduateStudies },
    {
        name: 'Educação com Ênfase nos Ensinos Fundamental II e Médio',
        category: postgraduateStudies
    },
    {
        name: 'Educação Continuada e Permanente em Saúde',
        category: postgraduateStudies
    },
    {
        name: 'Educação Corporativa e Gestão do Conhecimento',
        category: postgraduateStudies
    },
    { name: 'Educação de Jovens e Adultos', category: postgraduateStudies },
    {
        name: 'Educação Especial com ênfase em Comunicação Alternativa',
        category: postgraduateStudies
    },
    {
        name: 'Educação Especial com ênfase em Deficiência Auditiva',
        category: postgraduateStudies
    },
    {
        name: 'Educação Especial com ênfase em Deficiência Física',
        category: postgraduateStudies
    },
    {
        name: 'Educação Especial com ênfase em Deficiência Intelectual',
        category: postgraduateStudies
    },
    {
        name: 'Educação Especial com ênfase em Transtornos Globais do Desenvolvimento',
        category: postgraduateStudies
    },
    { name: 'Educação Especial e Inclusiva', category: postgraduateStudies },
    {
        name: 'Educação Física Escolar com Ênfase em Deficiência Física',
        category: postgraduateStudies
    },
    {
        name: 'Educação Física Escolar com Ênfase na Educação Infantil',
        category: postgraduateStudies
    },
    { name: 'Educação Física na Escola', category: postgraduateStudies },
    { name: 'Educação Infantil', category: postgraduateStudies },
    {
        name: 'Educação Matemática: Estratégias, Métodos e Tecnologias',
        category: postgraduateStudies
    },
    {
        name: 'Empreendedorismo e Inovação em Engenharia',
        category: postgraduateStudies
    },
    { name: 'Enfermagem do Trabalho', category: postgraduateStudies },
    {
        name: 'Enfermagem em urgência emergência',
        category: postgraduateStudies
    },
    { name: 'Enfermagem em Home Care', category: postgraduateStudies },
    { name: 'Enfermagem em Oncologia', category: postgraduateStudies },
    { name: 'Enfermagem em Pediatria', category: postgraduateStudies },
    {
        name: 'Enfermagem em Saúde Mental e Psiquiátrica',
        category: postgraduateStudies
    },
    { name: 'Enfermagem em Terapia Intensiva', category: postgraduateStudies },
    {
        name: 'Engenharia Ambiental e Saneamento Básico',
        category: postgraduateStudies
    },
    {
        name: 'Engenharia da Qualidade com Ênfase em Gestão',
        category: postgraduateStudies
    },
    {
        name: 'Engenharia de Avaliações e Perícias',
        category: postgraduateStudies
    },
    {
        name: 'Engenharia de Controle e Automação',
        category: postgraduateStudies
    },
    { name: 'Engenharia de Dados', category: postgraduateStudies },
    {
        name: 'Engenharia de Desenvolvimento de Produtos',
        category: postgraduateStudies
    },
    { name: 'Engenharia de Embalagens', category: postgraduateStudies },
    {
        name: 'Engenharia de Estruturas e Fundações',
        category: postgraduateStudies
    },
    {
        name: 'Engenharia de Manufatura Mecânica',
        category: postgraduateStudies
    },
    {
        name: 'Engenharia de Manutenção e Segurança',
        category: postgraduateStudies
    },
    {
        name: 'Engenharia de Manutenção Industrial',
        category: postgraduateStudies
    },
    { name: 'Engenharia de Materiais', category: postgraduateStudies },
    { name: 'Engenharia de Produção', category: postgraduateStudies },
    { name: 'Engenharia de Qualidade', category: postgraduateStudies },
    {
        name: 'Engenharia de Segurança do Trabalho',
        category: postgraduateStudies
    },
    { name: 'Engenharia de Software', category: postgraduateStudies },
    {
        name: 'Engenharia de Software com Ênfase em Qualidade e Teste de Software',
        category: postgraduateStudies
    },
    { name: 'Engenharia de Suprimentos', category: postgraduateStudies },
    {
        name: 'Engenharia de Suprimentos com Ênfase em Gestão',
        category: postgraduateStudies
    },
    { name: 'Engenharia de Tráfego', category: postgraduateStudies },
    {
        name: 'Engenharia e Gestão da Qualidade e de Projetos',
        category: postgraduateStudies
    },
    {
        name: 'Engenharia Elétrica – Eletrotécnica',
        category: postgraduateStudies
    },
    {
        name: 'Engenharia Elétrica e de Sistemas de Energia',
        category: postgraduateStudies
    },
    { name: 'Engenharia Geotécnica', category: postgraduateStudies },
    { name: 'Engenharia Industrial 4.0', category: postgraduateStudies },
    { name: 'Engenharia Rodoviária', category: postgraduateStudies },
    { name: 'Estatística Aplicada', category: postgraduateStudies },
    {
        name: 'Ensino de História e Cultura Afro-Brasileira',
        category: postgraduateStudies
    },
    {
        name: 'Ensino Híbrido e Metodologias Ativas para Educação Básica',
        category: postgraduateStudies
    },
    { name: 'Estética e Cosmetologia', category: postgraduateStudies },
    {
        name: 'Finanças Corporativas: Equity, Growth e Mergers and Acquisitions (M&A)',
        category: postgraduateStudies
    },
    { name: 'Fisioterapia Cardiorrespiratória', category: postgraduateStudies },
    { name: 'Fisioterapia do Esporte', category: postgraduateStudies },
    {
        name: 'Fisioterapia em Terapia Intensiva',
        category: postgraduateStudies
    },
    {
        name: 'Fisioterapia Traumato-Ortopédica com Ênfase em Terapias Manuais e Posturais',
        category: postgraduateStudies
    },
    { name: 'Fontes Alternativas de Energia', category: postgraduateStudies },
    {
        name: 'Gerenciamento de Obras de Construção Civil',
        category: postgraduateStudies
    },
    { name: 'Geriatria e Gerontologia', category: postgraduateStudies },
    {
        name: 'Gestão Ágil e Desenvolvimento de Software',
        category: postgraduateStudies
    },
    {
        name: 'Gestão Ambiental Aplicada à Indústria',
        category: postgraduateStudies
    },
    {
        name: 'Gestão da Jornada e Experiência do Colaborador',
        category: postgraduateStudies
    },
    {
        name: 'Gestão de Consultórios e Clínicas',
        category: postgraduateStudies
    },
    {
        name: 'Gestão de Custos e Planejamento Estratégico',
        category: postgraduateStudies
    },
    { name: 'Gestão de Negócios Imobiliários', category: postgraduateStudies },
    { name: 'Gestão de Operações', category: postgraduateStudies },
    { name: 'Gestão de Produto', category: postgraduateStudies },
    { name: 'Gestão de Projetos Sociais', category: postgraduateStudies },
    {
        name: 'Gestão e Docência para Educação 4.0',
        category: postgraduateStudies
    },
    { name: 'Gestão de Startups', category: postgraduateStudies },
    {
        name: 'Gestão e Governança de Tecnologia da Informação',
        category: postgraduateStudies
    },
    { name: 'Gestão e Organização da Escola', category: postgraduateStudies },
    {
        name: 'Gestão e Organização da Escola com ênfase em Coordenação e Orientação Escolar',
        category: postgraduateStudies
    },
    {
        name: 'Gestão e Organização da Escola com ênfase em Direção Escolar',
        category: postgraduateStudies
    },
    {
        name: 'Gestão e Organização da Escola com ênfase em Supervisão Escolar',
        category: postgraduateStudies
    },
    { name: 'Gestão em Gerontologia', category: postgraduateStudies },
    {
        name: 'Gestão em Organizações do Terceiro Setor e Projetos Sociais',
        category: postgraduateStudies
    },
    { name: 'Gestão Esportiva', category: postgraduateStudies },
    {
        name: 'Gestão Social: Políticas Públicas, Redes e Defesa de Direitos',
        category: postgraduateStudies
    },
    {
        name: 'Gestão, Licenciamento e Auditoria Ambiental',
        category: postgraduateStudies
    },
    {
        name: 'Inclusão de Diversidade na Educação',
        category: postgraduateStudies
    },
    {
        name: 'Influência Digital e Personal Branding',
        category: postgraduateStudies
    },
    {
        name: 'Inteligência Artificial e Machine Learning',
        category: postgraduateStudies
    },
    {
        name: 'Instrumentalidade em Serviço Social',
        category: postgraduateStudies
    },
    { name: 'Libras e Educação para Surdos', category: postgraduateStudies },
    {
        name: 'Liderança e Gestão de Equipes de Alta Performance',
        category: postgraduateStudies
    },
    { name: 'MBA em Administração Hospitalar', category: postgraduateStudies },
    { name: 'MBA em Agronegócios', category: postgraduateStudies },
    {
        name: 'MBA em Analytics para Gestão da Qualidade e Produtividade',
        category: postgraduateStudies
    },
    { name: 'MBA em Auditoria em Saúde', category: postgraduateStudies },
    { name: 'MBA em Auditoria Hospitalar', category: postgraduateStudies },
    { name: 'MBA em Comércio Exterior', category: postgraduateStudies },
    { name: 'MBA em Consultoria Empresarial', category: postgraduateStudies },
    {
        name: 'MBA em Cybersecurity e Cybercrimes',
        category: postgraduateStudies
    },
    { name: 'MBA em Economia Financeira', category: postgraduateStudies },
    { name: 'MBA em Empreendedorismo Contábil', category: postgraduateStudies },
    {
        name: 'MBA em Estratégias de Comunicação Digital',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Ferramentas Quantitativas Aplicadas à Gestão',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Finanças com Ênfase em Mercado de Capitais',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Finanças, Auditoria e Controladoria',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Finanças e Análise de Risco',
        category: postgraduateStudies
    },
    { name: 'MBA em Finanças e Controladoria', category: postgraduateStudies },
    { name: 'MBA em Finanças Internacionais', category: postgraduateStudies },
    { name: 'MBA em Gestão Ágil', category: postgraduateStudies },
    { name: 'MBA em Gestão Ambiental', category: postgraduateStudies },
    { name: 'MBA em Gestão Comercial', category: postgraduateStudies },
    { name: 'MBA em Gestão da Inovação', category: postgraduateStudies },
    { name: 'MBA em Gestão da Produção', category: postgraduateStudies },
    { name: 'MBA em Gestão da Qualidade', category: postgraduateStudies },
    {
        name: 'MBA em Gestão da Segurança Pública e Sistema Penitenciário',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão de Farmácia e Drogaria',
        category: postgraduateStudies
    },
    { name: 'MBA em Gestão de Pessoas', category: postgraduateStudies },
    {
        name: 'MBA em Gestão de Pessoas e a Educação Corporativa',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão do Desenvolvimento Humano nas Organizações',
        category: postgraduateStudies
    },
    { name: 'MBA em Gestão de Projetos', category: postgraduateStudies },
    {
        name: 'MBA em Gestão de Tecnologia da Informação',
        category: postgraduateStudies
    },
    { name: 'MBA em Gestão Empresarial', category: postgraduateStudies },
    {
        name: 'MBA em Gestão Estratégica da Inovação e Propriedade Intelectual',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão Estratégica de Gente, Inovação e Cultura',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão Estratégica de Marketing e Inteligência Competitiva',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão Estratégica de Negócios',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão Estratégica de Pessoas no Setor Público',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão Estratégica de Vendas',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão Estratégica em Compras',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão Estratégica Tributária',
        category: postgraduateStudies
    },
    { name: 'MBA em Gestão Exponencial', category: postgraduateStudies },
    {
        name: 'MBA em Gestão Financeira Empresarial Estratégica',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão Operacional e Logística Empresarial',
        category: postgraduateStudies
    },
    { name: 'MBA em Gestão Pública', category: postgraduateStudies },
    {
        name: 'MBA em Gestão Pública com Ênfase em Cidades Inteligentes',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão Tech-Driven de Negócios',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Gestão Tributária Contábil',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Growth Marketing para E-Commerce',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Inovação e Empreendedorismo',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Liderança e Coaching na Gestão de Pessoas',
        category: postgraduateStudies
    },
    { name: 'MBA em Liderança Digital', category: postgraduateStudies },
    {
        name: 'MBA em Logística e Supply Chain Management',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Marketing de Serviços e Relacionamento',
        category: postgraduateStudies
    },
    { name: 'MBA em Marketing Digital', category: postgraduateStudies },
    {
        name: 'MBA em Marketing Digital & Analytics',
        category: postgraduateStudies
    },
    {
        name: 'MBA em Marketing e Experiência do Usuário',
        category: postgraduateStudies
    },
    { name: 'MBA em Marketing e Vendas', category: postgraduateStudies },
    { name: 'MBA em Marketing Internacional', category: postgraduateStudies },
    { name: 'MBA em Negócios Digitais', category: postgraduateStudies },
    { name: 'MBA em Negócios Internacionais', category: postgraduateStudies },
    { name: 'MBA em Planejamento Tributário', category: postgraduateStudies },
    {
        name: 'MBA em Privacidade e Proteção de Dados',
        category: postgraduateStudies
    },
    { name: 'MBA em Processos Gerenciais', category: postgraduateStudies },
    {
        name: 'MBA em Projetos de Aplicações Digitais',
        category: postgraduateStudies
    },
    { name: 'MBA em Redes Sociais', category: postgraduateStudies },
    { name: 'MBA em Segurança Digital', category: postgraduateStudies },
    { name: 'MBA em Soft Skills', category: postgraduateStudies },
    {
        name: 'MBA Executivo em Negócios e Competências Digitais',
        category: postgraduateStudies
    },
    {
        name: 'Mercado Financeiro Mercado Financeiro e Banking',
        category: postgraduateStudies
    },
    {
        name: 'Metodologias Ativas e o Uso de Tecnologia no Ensino em Saúde',
        category: postgraduateStudies
    },
    {
        name: 'Metodologias Ativas e TDIC’s na Educação',
        category: postgraduateStudies
    },
    {
        name: 'Metodologias Ativas no Ensino Médio e Preparação para o ENEM',
        category: postgraduateStudies
    },
    {
        name: 'Metodologias do Ensino da Língua Portuguesa e Literatura na Educação Básica',
        category: postgraduateStudies
    },
    {
        name: 'Metodologias para Educação a Distância',
        category: postgraduateStudies
    },
    {
        name: 'Metodologias para o Ensino de Filosofia e Sociologia',
        category: postgraduateStudies
    },
    { name: 'Mobilidade Urbana', category: postgraduateStudies },
    {
        name: 'Negociação e Gestão de Conflitos Organizacionais',
        category: postgraduateStudies
    },
    {
        name: 'Negócios Greentech – Sustentabilidade Aplicada',
        category: postgraduateStudies
    },
    {
        name: 'Neuroaprendizagem e Práticas Pedagógicas',
        category: postgraduateStudies
    },
    { name: 'Neuropsicologia', category: postgraduateStudies },
    { name: 'Neurociência na Educação', category: postgraduateStudies },
    { name: 'Nutrição Clínica Hospitalar', category: postgraduateStudies },
    { name: 'Nutrição Clínica Ambulatorial', category: postgraduateStudies },
    { name: 'Nutrição Esportiva', category: postgraduateStudies },
    {
        name: 'Nutrição, Qualidade de Vida e Empreendedorismo',
        category: postgraduateStudies
    },
    { name: 'Pedagogia Empresarial', category: postgraduateStudies },
    {
        name: 'Pedagogia Social e Gestão de Projetos Sociais',
        category: postgraduateStudies
    },
    {
        name: 'Produção Multimídia com ênfase em Audiovisual',
        category: postgraduateStudies
    },
    {
        name: 'Projetos e Arquiteturas em Cloud Computing',
        category: postgraduateStudies
    },
    { name: 'Propriedade Intelectual', category: postgraduateStudies },
    { name: 'Psicanálise', category: postgraduateStudies },
    { name: 'Psicologia Clínica', category: postgraduateStudies },
    { name: 'Psicologia Escolar', category: postgraduateStudies },
    { name: 'Psicologia Organizacional', category: postgraduateStudies },
    { name: 'Psicologia Hospitalar', category: postgraduateStudies },
    {
        name: 'Psicopedagogia Clínica e Institucional',
        category: postgraduateStudies
    },
    { name: 'Psicopedagogia Institucional', category: postgraduateStudies },
    {
        name: 'Recursos Humanos: Rotinas e Cálculos Trabalhistas',
        category: postgraduateStudies
    },
    {
        name: 'Saúde Mental, Psicopatologia e Atenção Psicossocial',
        category: postgraduateStudies
    },
    { name: 'Saúde Pública', category: postgraduateStudies },
    {
        name: 'Saúde Pública com Ênfase em Saúde da Família',
        category: postgraduateStudies
    },
    {
        name: 'Saúde Pública: Política, Planejamento e Gestão',
        category: postgraduateStudies
    },
    { name: 'Segurança da Informação', category: postgraduateStudies },
    { name: 'Segurança de Redes', category: postgraduateStudies },
    {
        name: 'Segurança Pública e Sistema Penitenciário',
        category: postgraduateStudies
    },
    { name: 'Serviço Social em Saúde Coletiva', category: postgraduateStudies },
    {
        name: 'Sociologia da Infância e Educação Infantil',
        category: postgraduateStudies
    },
    { name: 'Tecnologias Ambientais', category: postgraduateStudies },
    {
        name: 'Tecnologia e Segurança de Blockchain e Smart Contracts',
        category: postgraduateStudies
    },
    { name: 'Tecnologias para Aplicações Web', category: postgraduateStudies },
    {
        name: 'Tecnologia, Inovação e Transformação Digital',
        category: postgraduateStudies
    },
    {
        name: 'Tendências e Metodologias Para o Ensino de História e Geografia',
        category: postgraduateStudies
    },
    {
        name: 'Tendências e Metodologias Para o Ensino de Ciências e Biologia',
        category: postgraduateStudies
    },
    {
        name: 'Trabalho Social e Assistência às Famílias',
        category: postgraduateStudies
    },
    {
        name: 'Transformação Digital Focada na Experiência do Cliente',
        category: postgraduateStudies
    },
    {
        name: 'Treinamento Esportivo e Personal Training',
        category: postgraduateStudies
    },
    {
        name: 'Tutela coletiva e direitos difusos',
        category: postgraduateStudies
    },
    { name: 'Tutoria e Mediação para EaD', category: postgraduateStudies },
    {
        name: 'Varejo de Moda, E-commerce e Empreendedorismo',
        category: postgraduateStudies
    }
]

export const COLLEGE_COURSES: ICollegeCourse[] = [
    ...GRADUATION,
    ...TECHNOLOGIST,
    ...BACCALAUREATE,
    ...POSTGRADUATE_STUDIES
]
