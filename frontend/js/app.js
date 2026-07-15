/* ===================== ESTADO (dados de demonstração em memória) ===================== */
const state = {
  user: null,
  currentParticipant: null,
  teamProjects: {},
  sidebarOpen: false,
  activeView: 'dashboard',
  stats: { eventos:4, equipes:18, participantes:76, mentoras:9, documentos:132, avaliacoes:54, concluidos:22, andamento:11 },
  chart: [
    {l:'Solana', v:34},{l:'AWS', v:52},{l:'Microsoft', v:28},{l:'Campus Party', v:61},{l:'Etherium', v:19}
  ],
  rankEquipes: [ {n:'ByteGirls', v:'482 pts'}, {n:'Phoenix', v:'451 pts'}, {n:'Neural', v:'417 pts'}, {n:'404', v:'388 pts'}, {n:'Alpha', v:'350 pts'} ],
  rankEngajamento: [ {n:'Carla Nunes', v:'980 XP'}, {n:'Mariana Alves', v:'910 XP'}, {n:'Julia Prado', v:'860 XP'} ],
  rankMentoras: [ {n:'Fernanda Reis', v:'32 avaliações'}, {n:'Bianca Costa', v:'27 avaliações'}, {n:'Ana Beatriz', v:'21 avaliações'} ],
  events: [
    {id:'ev1', nome:'Hackathon Solana', emoji:'🟣', data:'2026-08-15', tema:'Web3 & Blockchain', descricao:'Hackathon focado em soluções descentralizadas sobre a rede Solana.', problema:'Criar aplicações reais que usem blockchain para resolver problemas do dia a dia.', regras:'Equipes de até 5 pessoas. Código deve ser produzido durante o evento.', edital:'edital-solana-2026.pdf', status:'andamento'},
    {id:'ev2', nome:'Hackathon AWS', emoji:'☁️', data:'2026-09-05', tema:'Cloud & Serverless', descricao:'Construção de soluções cloud-native usando serviços AWS.', problema:'Reduzir custo operacional de pequenas empresas com arquitetura serverless.', regras:'Uso obrigatório de ao menos 2 serviços AWS.', edital:'edital-aws-2026.pdf', status:'planejamento'},
    {id:'ev3', nome:'Hackathon Microsoft', emoji:'🔷', data:'2026-06-20', tema:'IA & Produtividade', descricao:'Soluções de produtividade usando IA no ecossistema Microsoft.', problema:'Automatizar tarefas repetitivas em ambientes corporativos.', regras:'Uso do Azure OpenAI é recomendado.', edital:'edital-microsoft-2026.pdf', status:'encerrado'},
    {id:'ev4', nome:'Hackathon Campus Party', emoji:'⚡', data:'2026-10-10', tema:'Tech for Good', descricao:'Tecnologia aplicada a causas sociais e ambientais.', problema:'Impacto social mensurável através de tecnologia acessível.', regras:'Times mistos entre universidades parceiras.', edital:'', status:'planejamento'},
  ],
  teams: [
    {id:'tm1', eventId:'ev1', nome:'ByteGirls', usuario:'bytegirls', senha:'senha123', descricao:'Time focado em soluções DeFi para inclusão financeira.', cor:'#9d5cff'},
    {id:'tm2', eventId:'ev1', nome:'Phoenix', usuario:'phoenix', senha:'senha123', descricao:'Marketplace NFT para artistas independentes.', cor:'#b794f6'},
    {id:'tm3', eventId:'ev1', nome:'Neural', usuario:'neural', senha:'senha123', descricao:'IA aplicada à triagem de contratos inteligentes.', cor:'#7c3aed'},
    {id:'tm4', eventId:'ev3', nome:'404', usuario:'time404', senha:'senha123', descricao:'Assistente virtual corporativo com Azure OpenAI.', cor:'#4c1d95'},
    {id:'tm5', eventId:'ev3', nome:'Alpha', usuario:'alpha', senha:'1234equipe', descricao:'Automação de relatórios internos com IA generativa.', cor:'#c4b5fd'},
  ],
  mentors: [
    {id:'mt1', nome:'Fernanda Reis', email:'fernanda@wohackers.dev', usuario:'mentora1', senha:'1234mentora', especialidade:'Arquitetura de Software', empresa:'Nubank', cargo:'Staff Engineer', bio:'15 anos de experiência em sistemas distribuídos e mentoria de comunidades tech.', eventIds:['ev1','ev3']},
    {id:'mt2', nome:'Bianca Costa', email:'bianca@wohackers.dev', usuario:'bianca.costa', senha:'senha123', especialidade:'Produto & UX', empresa:'Mercado Livre', cargo:'Head de Design', bio:'Especialista em produto digital e experiência do usuário para times early-stage.', eventIds:['ev1']},
    {id:'mt3', nome:'Ana Beatriz', email:'ana.beatriz@wohackers.dev', usuario:'ana.beatriz', senha:'senha123', especialidade:'IA & Machine Learning', empresa:'Google', cargo:'ML Engineer', bio:'Pesquisadora e mentora voluntária focada em IA aplicada a negócios.', eventIds:['ev3']},
  ],
  evaluations: [],
  xpLog: [],
  settings: { notificacoes:true, autosave:true },
  rankingTab: 'geral',
  mentorFilterEvent: null,
  avaliarTeamId: null,
  cronograma: {
    steps: [
      'Credenciamento','Café da manhã','Abertura Oficial','Apresentação do Desafio','Formação das Equipes',
      'Início do Desenvolvimento','Primeira Mentoria','Almoço','Segunda Mentoria','Checkpoint',
      'Coffee Break','Última Mentoria','Encerramento do Desenvolvimento','Preparação do Pitch',
      'Apresentações','Avaliação Final','Premiação'
    ],
    currentIndex: 2,
    history: [
      {t:'09:00', txt:'Evento iniciado'},
      {t:'09:12', txt:'Credenciamento encerrado'},
      {t:'09:30', txt:'Café da manhã encerrado'}
    ]
  }
};

const MENUS = {
  admin: [
    {id:'dashboard', ic:'📊', label:'Dashboard'},
    {id:'eventos', ic:'🎯', label:'Eventos'},
    {id:'equipes', ic:'👥', label:'Equipes'},
    {id:'mentoras', ic:'🎓', label:'Mentoras'},
    {id:'avaliacoes', ic:'⭐', label:'Avaliações'},
    {id:'ranking', ic:'🏆', label:'Ranking'},
    {id:'relatorios', ic:'📄', label:'Relatórios'},
    {id:'edital', ic:'📋', label:'Edital'},
    {id:'configuracoes', ic:'⚙️', label:'Configurações'},
  ],
  equipe: [
    {id:'dashboard', ic:'📊', label:'Painel do Projeto'},
    {id:'info', ic:'🧾', label:'Informações do Projeto'},
    {id:'desenvolvimento', ic:'💻', label:'Desenvolvimento'},
    {id:'documentacao', ic:'📝', label:'Documentação'},
    {id:'arquitetura', ic:'🏗️', label:'Arquitetura'},
    {id:'backlog', ic:'📌', label:'Backlog'},
    {id:'pitch', ic:'🎤', label:'Pitch'},
    {id:'anexos', ic:'📎', label:'Anexos'},
  ],
  mentora: [
    {id:'dashboard', ic:'📊', label:'Eventos'},
    {id:'avaliacoes', ic:'⭐', label:'Avaliar Equipes'},
  ]
};

const ROLE_LABEL = { admin:'PAINEL ADMINISTRADOR', equipe:'PAINEL DA EQUIPE', mentora:'PAINEL DA MENTORA' };


/* ===================== LOGIN ===================== */
async function hydrateFromStore(){
  const data = await Api.getStore();
  state.events = data.events || [];
  state.teams = data.teams || [];
  state.mentors = data.mentors || [];
  state.evaluations = data.evaluations || [];
  state.xpLog = data.xpLog || [];
  state.teamProjects = data.teamProjects || {};
  state.cronograma = data.cronograma || state.cronograma;
  state.settings = data.settings || state.settings;
  state.stats = data.stats || state.stats;
  state.chart = data.chart || state.chart;
  state.rankEquipes = data.rankEquipes || state.rankEquipes;
  state.rankEngajamento = data.rankEngajamento || state.rankEngajamento;
  state.rankMentoras = data.rankMentoras || state.rankMentoras;
  state.stats.eventos = state.events.length;
  state.stats.equipes = state.teams.length;
  state.stats.mentoras = state.mentors.length;
  state.stats.avaliacoes = state.evaluations.length;
}

function persistStore(){
  clearTimeout(window.__woPersistTimer);
  window.__woPersistTimer = setTimeout(()=>{
    Api.putStore({
      events: state.events,
      teams: state.teams,
      mentors: state.mentors,
      evaluations: state.evaluations,
      xpLog: state.xpLog,
      teamProjects: state.teamProjects,
      cronograma: state.cronograma,
      settings: state.settings,
      stats: state.stats,
      chart: state.chart,
      rankEquipes: state.rankEquipes,
      rankEngajamento: state.rankEngajamento,
      rankMentoras: state.rankMentoras,
    }).catch(err => console.error('Falha ao persistir no backend Java:', err));
  }, 350);
}

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value;
  const errEl = document.getElementById('loginError');
  errEl.textContent = '';
  try{
    const auth = await Api.login(u, p);
    Api.setToken(auth.token);
    state.user = {
      username: auth.username,
      role: auth.role,
      name: auth.name,
      teamId: auth.teamId || null,
      mentorId: auth.mentorId || null
    };
    state.currentParticipant = auth.currentParticipant || null;
    await hydrateFromStore();
    if(auth.needsIdentification || auth.role === 'equipe'){
      document.getElementById('loginScreen').style.display = 'none';
      openIdentification();
    } else {
      enterApp();
    }
  } catch(err){
    errEl.textContent = err.message || 'Usuário ou senha inválidos.';
  }
});

state.stats.eventos = state.events.length;
state.stats.equipes = state.teams.length;
state.stats.mentoras = state.mentors.length;
state.stats.avaliacoes = state.evaluations.length;

const FORBIDDEN_PINS = ['1234','4321','0000','1111','9999'];

function getTeamProject(teamId){
  if(!state.teamProjects[teamId]){
    const team = state.teams.find(t=>t.id===teamId);
    state.teamProjects[teamId] = {
      info: {nome:team?team.nome:'', slogan:'', problema:'', solucao:'', objetivos:'', publico:'', mercado:'', diferencial:'', pitchCurto:''},
      desenvolvimento: {texto:'', repo:'', tarefas:[], links:[]},
      documentacao: '# ' + (team?team.nome:'Meu Projeto') + '\n\n> Escreva aqui a documentação técnica do projeto.\n\n## Sobre\n\nDescreva o projeto.\n',
      arquitetura: {tecnologias:'', frameworks:'', banco:'', cloud:'', apis:'', bibliotecas:'', ferramentas:'', descricao:'', fluxograma:''},
      backlog: {todo:[], doing:[], done:[]},
      pitch: {problema:'', solucao:'', mercado:'', modelo:'', diferencial:'', roadmap:'', impacto:''},
      anexos: [],
      participants: [],
      history: [],
      xpFlags: {docCreated:false, readme:false, backlogDone:false, pitchDone:false},
    };
    persistStore();
  }
  return state.teamProjects[teamId];
}

function openIdentification(){
  document.getElementById('idScreen').style.display = 'flex';
  const team = state.teams.find(t=>t.id===state.user.teamId);
  document.getElementById('idTeamName').textContent = team ? team.nome.toUpperCase() : '';
  document.getElementById('idForm').reset();
  document.getElementById('idError').textContent = '';
}

document.getElementById('idBack').addEventListener('click', async ()=>{
  try { await Api.logout(); } catch (_) {}
  Api.clearToken();
  state.user = null;
  state.currentParticipant = null;
  document.getElementById('idScreen').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
});

document.getElementById('idForm').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const nome = document.getElementById('idNome').value.trim();
  const pin = document.getElementById('idPin').value.trim();
  const errEl = document.getElementById('idError');
  errEl.textContent = '';
  try{
    const beforeCount = (getTeamProject(state.user.teamId).participants || []).length;
    const auth = await Api.identify(nome, pin);
    state.currentParticipant = auth.currentParticipant || nome;
    await hydrateFromStore();
    const afterCount = (getTeamProject(state.user.teamId).participants || []).length;
    if(afterCount > beforeCount) awardXP(state.user.teamId, 'integrante_adicionado');
    document.getElementById('idScreen').style.display = 'none';
    enterApp();
  } catch(err){
    errEl.textContent = err.message || 'Não foi possível identificar o participante.';
  }
});

function logChange(teamId, campo, anterior, novo, tipo){
  const project = getTeamProject(teamId);
  const now = new Date();
  project.history.push({
    participante: state.currentParticipant || '—',
    data: now.toLocaleDateString('pt-BR'),
    hora: now.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),
    campo, anterior: anterior||'—', novo: novo||'—', tipo
  });
  persistStore();
}

/* ===================== ENGAJAMENTO / XP ===================== */
const XP_ACTIONS = {
  doc_criada:            {label:'Criou documentação', xp:10},
  backlog_concluido:     {label:'Concluiu backlog', xp:15},
  mentoria_recebida:     {label:'Recebeu mentoria', xp:5},
  projeto_atualizado:    {label:'Atualizou projeto', xp:3},
  integrante_adicionado: {label:'Adicionou integrante', xp:2},
  readme_completo:       {label:'Completou README', xp:20},
  pitch_finalizado:      {label:'Finalizou pitch', xp:15},
  upload_apresentacao:   {label:'Upload de apresentação', xp:10},
};
function awardXP(teamId, actionKey){
  const def = XP_ACTIONS[actionKey];
  if(!def || !teamId) return;
  const now = new Date();
  state.xpLog.push({id:uid('xp'), teamId, acao:def.label, xp:def.xp,
    data:now.toLocaleDateString('pt-BR'), hora:now.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})});
  persistStore();
  showToast(`✨ +${def.xp} XP — ${def.label}`);
}
function teamXP(teamId){ return state.xpLog.filter(x=>x.teamId===teamId).reduce((s,x)=>s+x.xp,0); }

function enterApp(){
  document.getElementById('loginScreen').style.display = 'none';
  const app = document.getElementById('app');
  app.classList.add('active');
  document.getElementById('sbRole').textContent = ROLE_LABEL[state.user.role];
  const displayName = state.user.role==='equipe' && state.currentParticipant ? `${state.currentParticipant} · ${state.user.name}` : state.user.name;
  document.getElementById('sbUserName').textContent = displayName;
  document.getElementById('sbAvatar').textContent = (state.currentParticipant||state.user.name).charAt(0).toUpperCase();
  buildSidebar();
  state.activeView = 'dashboard';
  renderView();
}

document.getElementById('logoutBtn').addEventListener('click', async ()=>{
  try { await Api.logout(); } catch (_) {}
  Api.clearToken();
  state.user = null;
  state.currentParticipant = null;
  document.getElementById('app').classList.remove('active');
  document.getElementById('idScreen').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginForm').reset();
});

/* ===================== SIDEBAR / NAV ===================== */
function buildSidebar(){
  const nav = document.getElementById('sbNav');
  nav.innerHTML = '';
  MENUS[state.user.role].forEach(item=>{
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'sb-link' + (item.id===state.activeView ? ' active' : '');
    a.dataset.view = item.id;
    a.innerHTML = `<span class="ic">${item.ic}</span><span>${item.label}</span>`;
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      state.activeView = item.id;
      state.avaliarTeamId = null;
      document.querySelectorAll('.sb-link').forEach(l=>l.classList.remove('active'));
      a.classList.add('active');
      renderView();
      state.sidebarOpen = false;
      document.getElementById('sidebar').classList.remove('open');
    });
    nav.appendChild(a);
  });
}

document.getElementById('menuToggle').addEventListener('click', ()=>{
  state.sidebarOpen = !state.sidebarOpen;
  document.getElementById('sidebar').classList.toggle('open', state.sidebarOpen);
});

const TITLES = {
  dashboard:['Dashboard','Visão geral de todos os hackathons WoHackers'],
  eventos:['Eventos','Gerencie os hackathons da comunidade'],
  equipes:['Equipes','Todas as equipes inscritas nos eventos'],
  mentoras:['Mentoras','Mentoras e avaliadoras cadastradas'],
  avaliacoes:['Avaliações','Avaliações registradas por critério'],
  ranking:['Ranking','Classificação geral, por evento e por critério'],
  relatorios:['Relatórios','Exportação de dados em PDF, Excel e CSV'],
  edital:['Edital','Documentos e regras oficiais dos eventos'],
  configuracoes:['Configurações','Preferências gerais do sistema'],
  documentacao:['Documentação Técnica','Editor Markdown com preview em tempo real'],
  arquitetura:['Arquitetura','Tecnologias, frameworks e diagramas do projeto'],
  backlog:['Backlog','Kanban de tarefas da equipe'],
  pitch:['Pitch','Estrutura da apresentação final'],
  anexos:['Anexos','Arquivos do projeto'],
  info:['Informações do Projeto','Dados centrais do seu projeto no hackathon'],
  desenvolvimento:['Desenvolvimento','Área livre de escrita: texto, tarefas e links'],
};

function renderView(){
  let titleKey = state.activeView;
  document.getElementById('pageTitle').textContent = TITLES[titleKey]?.[0] || '';
  document.getElementById('pageSub').textContent = TITLES[titleKey]?.[1] || '';
  const root = document.getElementById('viewRoot');
  root.innerHTML = '';
  if(state.activeView === 'dashboard' && state.user.role === 'admin'){
    root.appendChild(renderAdminDashboard());
  } else if(state.activeView === 'eventos' && state.user.role === 'admin'){
    root.appendChild(renderEventos());
  } else if(state.activeView === 'equipes' && state.user.role === 'admin'){
    root.appendChild(renderEquipes());
  } else if(state.activeView === 'mentoras' && state.user.role === 'admin'){
    root.appendChild(renderMentorasAdmin());
  } else if(state.activeView === 'avaliacoes' && state.user.role === 'admin'){
    root.appendChild(renderAvaliacoesAdmin());
  } else if(state.activeView === 'ranking' && state.user.role === 'admin'){
    root.appendChild(renderRankingAdmin());
  } else if(state.activeView === 'relatorios' && state.user.role === 'admin'){
    root.appendChild(renderRelatorios());
  } else if(state.activeView === 'edital' && state.user.role === 'admin'){
    root.appendChild(renderEdital());
  } else if(state.activeView === 'configuracoes' && state.user.role === 'admin'){
    root.appendChild(renderConfiguracoes());
  } else if(state.user.role === 'mentora'){
    document.getElementById('pageTitle').textContent = state.activeView==='dashboard' ? 'Meus Eventos' : 'Avaliar Equipes';
    document.getElementById('pageSub').textContent = state.activeView==='dashboard' ? 'Eventos em que você atua como mentora/avaliadora' : 'Avalie as equipes com os 20 critérios oficiais';
    if(state.activeView === 'dashboard') root.appendChild(renderMentoraDashboard());
    else if(state.activeView === 'avaliacoes') root.appendChild(renderMentoraAvaliar());
    else root.appendChild(renderPlaceholder());
  } else if(state.user.role === 'equipe'){
    document.getElementById('pageTitle').textContent = state.activeView==='dashboard' ? 'Painel do Projeto' : (TITLES[titleKey]?.[0]||'');
    if(state.activeView === 'dashboard') root.appendChild(renderTeamDashboard());
    else if(state.activeView === 'info') root.appendChild(renderTeamInfo());
    else if(state.activeView === 'desenvolvimento') root.appendChild(renderTeamDev());
    else if(state.activeView === 'documentacao') root.appendChild(renderTeamDocs());
    else if(state.activeView === 'arquitetura') root.appendChild(renderTeamArch());
    else if(state.activeView === 'backlog') root.appendChild(renderTeamBacklog());
    else if(state.activeView === 'pitch') root.appendChild(renderTeamPitch());
    else if(state.activeView === 'anexos') root.appendChild(renderTeamAnexos());
    else root.appendChild(renderPlaceholder());
  } else {
    root.appendChild(renderPlaceholder());
  }
  if(Api.getToken()) persistStore();
}

/* ===================== CRITÉRIOS DE AVALIAÇÃO ===================== */
const CRITERIA = [
  {n:1,label:'Entendimento do Problema',desc:'A equipe compreendeu claramente o desafio proposto?'},
  {n:2,label:'Relevância da Solução',desc:'A solução realmente resolve o problema?'},
  {n:3,label:'Inovação',desc:'Existe criatividade e diferencial?'},
  {n:4,label:'Viabilidade',desc:'É possível implementar no mundo real?'},
  {n:5,label:'Impacto',desc:'Qual impacto social, econômico ou tecnológico a solução pode gerar?'},
  {n:6,label:'Experiência do Usuário (UX)',desc:'O produto é intuitivo e agradável?'},
  {n:7,label:'Interface (UI)',desc:'A interface é organizada, consistente e visualmente atraente?'},
  {n:8,label:'Qualidade Técnica',desc:'A arquitetura é adequada?'},
  {n:9,label:'Organização do Código',desc:'Código limpo, bem estruturado e padronizado?'},
  {n:10,label:'Boas Práticas',desc:'SOLID, Clean Code, boas convenções, nomenclatura, separação de responsabilidades.'},
  {n:11,label:'Escalabilidade',desc:'A solução consegue crescer?'},
  {n:12,label:'Segurança',desc:'Boas práticas, autenticação, validação, proteção de dados?'},
  {n:13,label:'Performance',desc:'Tempo de resposta, otimizações, uso eficiente dos recursos.'},
  {n:14,label:'Documentação Técnica',desc:'README, arquitetura, explicações, instalação, organização.'},
  {n:15,label:'Uso de Tecnologias',desc:'As tecnologias escolhidas fazem sentido?'},
  {n:16,label:'Pitch',desc:'Clareza, objetividade, domínio do projeto, comunicação.'},
  {n:17,label:'Trabalho em Equipe',desc:'Organização, colaboração, divisão de tarefas.'},
  {n:18,label:'Evolução Durante o Evento',desc:'A equipe evoluiu ao longo do hackathon?'},
  {n:19,label:'Aproveitamento das Mentorias',desc:'A equipe aplicou os feedbacks recebidos?'},
  {n:20,label:'Potencial Pós-Hackathon',desc:'O projeto possui potencial para continuar após o evento?'},
];

function mentorById(id){ return state.mentors.find(m=>m.id===id); }
function evalsOfTeam(teamId){ return state.evaluations.filter(ev=>ev.teamId===teamId); }
function evalAverage(ev){
  const vals = CRITERIA.map(c=>ev.scores['c'+c.n].nota);
  return (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1);
}

/* ===================== ADMIN · MENTORAS ===================== */
function renderMentorasAdmin(){
  const wrap = document.createElement('div');
  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar';
  toolbar.innerHTML = `<div class="toolbar-left"><span style="color:var(--ink-dim);font-size:0.85rem;">${state.mentors.length} mentora(s) cadastrada(s)</span></div>
    <button class="btn btn-solid btn-sm" id="newMentorBtn">＋ Nova Mentora</button>`;
  wrap.appendChild(toolbar);

  const grid = document.createElement('div');
  grid.className = 'mt-grid';
  if(state.mentors.length===0){ grid.innerHTML = '<div class="empty-state">Nenhuma mentora cadastrada ainda.</div>'; }
  state.mentors.forEach(m=>{
    const evNames = m.eventIds.map(id=>eventById(id)?.nome).filter(Boolean);
    const card = document.createElement('div');
    card.className = 'mt-card';
    card.innerHTML = `
      <div class="mt-top"><div class="mt-avatar">${m.nome.charAt(0)}</div>
        <div><div class="mt-name">${m.nome}</div><div class="mt-role">${m.cargo||'—'} · ${m.empresa||'—'}</div></div></div>
      <div style="font-size:0.8rem;color:var(--ink-dim);">${m.especialidade||'—'}</div>
      <div class="mt-tags">${evNames.length? evNames.map(n=>`<span class="pill pill-purple">${n}</span>`).join('') : '<span class="pill pill-yellow">Sem evento vinculado</span>'}</div>
      <div class="mt-actions">
        <button class="btn btn-ghost btn-sm" data-act="edit" data-id="${m.id}">✏️ Editar</button>
        <button class="btn btn-ghost btn-sm" data-act="del" data-id="${m.id}">🗑️ Excluir</button>
      </div>`;
    grid.appendChild(card);
  });
  wrap.appendChild(grid);

  setTimeout(()=>{
    document.getElementById('newMentorBtn').addEventListener('click', ()=>openMentorForm(null));
    grid.querySelectorAll('[data-act="edit"]').forEach(b=>b.addEventListener('click',()=>openMentorForm(mentorById(b.dataset.id))));
    grid.querySelectorAll('[data-act="del"]').forEach(b=>b.addEventListener('click',()=>confirmDeleteMentor(b.dataset.id)));
  },0);

  return wrap;
}

function openMentorForm(m){
  const isEdit = !!m;
  const v = m || {nome:'',email:'',usuario:'',senha:'',especialidade:'',empresa:'',cargo:'',bio:'',eventIds:[]};
  openModal(`
    <div class="modal-head"><h3>${isEdit?'Editar mentora':'Nova mentora'}</h3><button class="modal-close-x" id="mClose">✕</button></div>
    <form id="mentorForm">
      <div class="form-row">
        <div class="field"><label>Nome</label><input type="text" id="fMNome" value="${v.nome}" required></div>
        <div class="field"><label>Email</label><input type="email" id="fMEmail" value="${v.email}"></div>
      </div>
      <div class="form-row">
        <div class="field"><label>Usuário</label><input type="text" id="fMUser" value="${v.usuario}" required></div>
        <div class="field"><label>Senha</label><input type="text" id="fMPass" value="${v.senha}" required></div>
      </div>
      <div class="form-row">
        <div class="field"><label>Especialidade</label><input type="text" id="fMEsp" value="${v.especialidade}" placeholder="Ex: UX, Backend, IA"></div>
        <div class="field"><label>Empresa</label><input type="text" id="fMEmp" value="${v.empresa}"></div>
      </div>
      <div class="field"><label>Cargo</label><input type="text" id="fMCargo" value="${v.cargo}"></div>
      <div class="field"><label>Biografia</label><textarea id="fMBio" placeholder="Breve biografia">${v.bio}</textarea></div>
      <div class="field"><label>Eventos em que atua</label>
        <div class="checkbox-row">${state.events.map(ev=>`
          <label class="checkbox-item"><input type="checkbox" value="${ev.id}" ${v.eventIds.includes(ev.id)?'checked':''}> ${ev.nome}</label>`).join('') || '<span style="color:var(--ink-faint);font-size:0.82rem;">Nenhum evento cadastrado ainda.</span>'}</div>
      </div>
      <div class="modal-actions">
        ${isEdit? '<button type="button" class="btn btn-danger btn-sm" id="mDeleteInline">Excluir</button>' : ''}
        <button type="button" class="btn btn-ghost btn-sm" id="mCancel">Cancelar</button>
        <button type="submit" class="btn btn-solid btn-sm">${isEdit?'Salvar alterações':'Criar mentora'}</button>
      </div>
    </form>
  `);
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('mCancel').addEventListener('click', closeModal);
  if(isEdit) document.getElementById('mDeleteInline').addEventListener('click', ()=>{ closeModal(); confirmDeleteMentor(m.id); });
  document.getElementById('mentorForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    const eventIds = Array.from(document.querySelectorAll('.checkbox-item input:checked')).map(c=>c.value);
    const data = {
      nome: document.getElementById('fMNome').value.trim()||'Sem nome',
      email: document.getElementById('fMEmail').value.trim(),
      usuario: document.getElementById('fMUser').value.trim(),
      senha: document.getElementById('fMPass').value.trim(),
      especialidade: document.getElementById('fMEsp').value.trim(),
      empresa: document.getElementById('fMEmp').value.trim(),
      cargo: document.getElementById('fMCargo').value.trim(),
      bio: document.getElementById('fMBio').value.trim(),
      eventIds,
    };
    if(isEdit){ Object.assign(m, data); showToast(`✅ Mentora "${data.nome}" atualizada.`); }
    else { data.id = uid('mt'); state.mentors.push(data); showToast(`✅ Mentora "${data.nome}" cadastrada.`); }
    state.stats.mentoras = state.mentors.length;
    closeModal(); renderView();
  });
}

function confirmDeleteMentor(id){
  const m = mentorById(id);
  openModal(`
    <div class="modal-head"><h3>Excluir mentora</h3><button class="modal-close-x" id="mClose">✕</button></div>
    <p class="confirm-text">Tem certeza que deseja excluir <strong>${m.nome}</strong>? As avaliações já feitas por ela permanecem no histórico.</p>
    <div class="modal-actions"><button class="btn btn-ghost btn-sm" id="mCancel">Cancelar</button><button class="btn btn-danger btn-sm" id="mConfirm">Excluir definitivamente</button></div>
  `);
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('mCancel').addEventListener('click', closeModal);
  document.getElementById('mConfirm').addEventListener('click', ()=>{
    state.mentors = state.mentors.filter(x=>x.id!==id);
    state.stats.mentoras = state.mentors.length;
    closeModal(); showToast(`🗑️ Mentora "${m.nome}" excluída.`); renderView();
  });
}

/* ===================== ADMIN · AVALIAÇÕES ===================== */
function renderAvaliacoesAdmin(){
  const wrap = document.createElement('div');
  if(state.evaluations.length===0){
    wrap.innerHTML = `<div class="empty-state">Nenhuma avaliação registrada ainda. Assim que as mentoras avaliarem equipes, elas aparecem aqui — com acesso total do administrador a notas e comentários.</div>`;
    return wrap;
  }
  state.evaluations.slice().reverse().forEach(ev=>{
    const team = state.teams.find(t=>t.id===ev.teamId);
    const event = eventById(ev.eventId);
    const row = document.createElement('div');
    row.className = 'ev-list-row';
    row.innerHTML = `
      <div class="grow"><strong>${team?team.nome:'—'}</strong><div style="font-size:0.76rem;color:var(--ink-faint);">${event?event.nome:'—'} · avaliado por ${ev.mentorNome}</div></div>
      <span class="ev-score">${evalAverage(ev)} / 5</span>
      <span class="pill pill-purple">${ev.data} ${ev.hora}</span>
      <button class="btn btn-outline btn-sm" data-view="${ev.id}">Ver detalhes</button>`;
    wrap.appendChild(row);
  });
  setTimeout(()=>{
    wrap.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>viewEvaluationDetail(b.dataset.view)));
  },0);
  return wrap;
}

function viewEvaluationDetail(evalId){
  const ev = state.evaluations.find(e=>e.id===evalId);
  const team = state.teams.find(t=>t.id===ev.teamId);
  openModal(`
    <div class="modal-head"><h3>${team?team.nome:'—'} · avaliação de ${ev.mentorNome}</h3><button class="modal-close-x" id="mClose">✕</button></div>
    <p class="confirm-text">${ev.data} às ${ev.hora} · média geral <strong>${evalAverage(ev)}/5</strong></p>
    ${CRITERIA.map(c=>{
      const s = ev.scores['c'+c.n];
      return `<div class="readonly-block"><div class="k">${c.n}. ${c.label} · nota ${s.nota}/5</div><div class="v">${s.comentario}</div></div>`;
    }).join('')}
    <div class="modal-actions"><button class="btn btn-outline btn-sm" id="mCancel">Fechar</button></div>
  `);
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('mCancel').addEventListener('click', closeModal);
}

/* ===================== ADMIN · RANKING ===================== */
const RANKING_TABS = [
  ['geral','Geral'],['evento','Por Evento'],['criterio','Por Critério'],
  ['engajamento','Engajamento'],['documentacao','Documentação'],
  ['evolucao','Evolução'],['plataforma','Uso da Plataforma'],
];

function teamAvgScore(teamId){
  const evs = evalsOfTeam(teamId);
  if(evs.length===0) return 0;
  const sum = evs.reduce((s,e)=>s+Number(evalAverage(e)),0);
  return sum/evs.length;
}
function teamDocScore(teamId){
  const p = getTeamProject(teamId);
  return p.documentacao.trim().split(/\s+/).filter(Boolean).length;
}
function teamHistoryCount(teamId){
  return getTeamProject(teamId).history.length;
}
function teamActivityScore(teamId){
  return teamHistoryCount(teamId) + state.xpLog.filter(x=>x.teamId===teamId).length;
}

function renderRankingAdmin(){
  const wrap = document.createElement('div');
  const tabRow = document.createElement('div');
  tabRow.className = 'tab-row';
  tabRow.innerHTML = RANKING_TABS.map(([k,l])=>`<button class="tab-btn ${state.rankingTab===k?'active':''}" data-tab="${k}">${l}</button>`).join('');
  wrap.appendChild(tabRow);

  const extra = document.createElement('div');
  extra.style.marginBottom = '16px';
  wrap.appendChild(extra);

  const listEl = document.createElement('div');
  wrap.appendChild(listEl);

  function draw(){
    tabRow.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===state.rankingTab));
    extra.innerHTML = '';
    let rows = [];

    if(state.rankingTab === 'geral'){
      rows = state.teams.map(t=>({label:t.nome, sub:eventById(t.eventId)?.nome||'—', val:teamAvgScore(t.id), fmt:v=>v.toFixed(1)+' / 5'}));
    } else if(state.rankingTab === 'evento'){
      extra.innerHTML = `<select class="select-field" id="rankEventSel">${state.events.map(ev=>`<option value="${ev.id}" ${state.rankingEventFilter===ev.id?'selected':''}>${ev.nome}</option>`).join('')}</select>`;
      const fid = state.rankingEventFilter || state.events[0]?.id;
      rows = teamsOfEvent(fid).map(t=>({label:t.nome, sub:'Nota média das mentoras', val:teamAvgScore(t.id), fmt:v=>v.toFixed(1)+' / 5'}));
    } else if(state.rankingTab === 'criterio'){
      extra.innerHTML = `<select class="select-field" id="rankCritSel">${CRITERIA.map(c=>`<option value="${c.n}" ${state.rankingCritFilter===c.n?'selected':''}>${c.n}. ${c.label}</option>`).join('')}</select>`;
      const cn = state.rankingCritFilter || 1;
      rows = state.teams.map(t=>{
        const evs = evalsOfTeam(t.id).filter(e=>e.scores['c'+cn]);
        const avg = evs.length? evs.reduce((s,e)=>s+e.scores['c'+cn].nota,0)/evs.length : 0;
        return {label:t.nome, sub:eventById(t.eventId)?.nome||'—', val:avg, fmt:v=>v.toFixed(1)+' / 5'};
      });
    } else if(state.rankingTab === 'engajamento'){
      rows = state.teams.map(t=>({label:t.nome, sub:`${state.xpLog.filter(x=>x.teamId===t.id).length} ação(ões)`, val:teamXP(t.id), fmt:v=>v+' XP'}));
    } else if(state.rankingTab === 'documentacao'){
      rows = state.teams.map(t=>({label:t.nome, sub:'Palavras na documentação técnica', val:teamDocScore(t.id), fmt:v=>v+' palavras'}));
    } else if(state.rankingTab === 'evolucao'){
      rows = state.teams.map(t=>({label:t.nome, sub:'Alterações registradas no histórico', val:teamHistoryCount(t.id), fmt:v=>v+' alteração(ões)'}));
    } else if(state.rankingTab === 'plataforma'){
      rows = state.teams.map(t=>({label:t.nome, sub:'Histórico + ações de engajamento', val:teamActivityScore(t.id), fmt:v=>v+' interações'}));
    }

    rows.sort((a,b)=>b.val-a.val);
    listEl.innerHTML = rows.length===0 ? '<div class="empty-state">Nenhum dado suficiente para montar este ranking ainda.</div>' :
      rows.map((r,i)=>`
        <div class="rank-full-row"><div class="rank-full-pos">${i+1}</div>
          <div class="grow" style="flex:1;"><div class="rank-full-name">${r.label}</div><div class="rank-full-sub">${r.sub}</div></div>
          <div class="rank-full-val">${r.fmt(r.val)}</div>
        </div>`).join('');

    const sel1 = document.getElementById('rankEventSel');
    if(sel1) sel1.addEventListener('change', (e)=>{ state.rankingEventFilter = e.target.value; draw(); });
    const sel2 = document.getElementById('rankCritSel');
    if(sel2) sel2.addEventListener('change', (e)=>{ state.rankingCritFilter = Number(e.target.value); draw(); });
  }

  tabRow.querySelectorAll('.tab-btn').forEach(b=>b.addEventListener('click', ()=>{ state.rankingTab = b.dataset.tab; draw(); }));
  draw();
  return wrap;
}

/* ===================== ADMIN · RELATÓRIOS ===================== */
function downloadBlob(filename, content, mime){
  const blob = new Blob([content], {type:mime});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function csvEscape(v){ return `"${String(v??'').replace(/"/g,'""')}"`; }

function buildReportRows(){
  const rows = [];
  rows.push(['SEÇÃO: AVALIAÇÕES']);
  rows.push(['Evento','Equipe','Mentora','Critério','Nota','Comentário','Data','Hora']);
  state.evaluations.forEach(ev=>{
    const team = state.teams.find(t=>t.id===ev.teamId);
    const event = eventById(ev.eventId);
    CRITERIA.forEach(c=>{
      const s = ev.scores['c'+c.n];
      rows.push([event?.nome, team?.nome, ev.mentorNome, c.label, s.nota, s.comentario, ev.data, ev.hora]);
    });
  });
  rows.push([]); rows.push(['SEÇÃO: RANKING GERAL']);
  rows.push(['Posição','Equipe','Evento','Nota média']);
  state.teams.map(t=>({t, val:teamAvgScore(t.id)})).sort((a,b)=>b.val-a.val).forEach((r,i)=>{
    rows.push([i+1, r.t.nome, eventById(r.t.eventId)?.nome, r.val.toFixed(1)]);
  });
  rows.push([]); rows.push(['SEÇÃO: ENGAJAMENTO (XP)']);
  rows.push(['Equipe','XP total','Ações registradas']);
  state.teams.forEach(t=>rows.push([t.nome, teamXP(t.id), state.xpLog.filter(x=>x.teamId===t.id).length]));
  rows.push([]); rows.push(['SEÇÃO: PARTICIPANTES']);
  rows.push(['Equipe','Participante']);
  state.teams.forEach(t=>getTeamProject(t.id).participants.forEach(p=>rows.push([t.nome, p.nome])));
  rows.push([]); rows.push(['SEÇÃO: HISTÓRICO DE ALTERAÇÕES']);
  rows.push(['Equipe','Participante','Campo','Anterior','Novo','Tipo','Data','Hora']);
  state.teams.forEach(t=>getTeamProject(t.id).history.forEach(h=>rows.push([t.nome,h.participante,h.campo,h.anterior,h.novo,h.tipo,h.data,h.hora])));
  return rows;
}

function exportCSV(){
  const rows = buildReportRows();
  const csv = rows.map(r=>r.map(csvEscape).join(',')).join('\n');
  downloadBlob('relatorio-wohackers.csv', '\uFEFF'+csv, 'text/csv;charset=utf-8;');
  showToast('📄 CSV exportado com sucesso.');
}
function exportExcel(){
  const rows = buildReportRows();
  const table = '<table>' + rows.map(r=>'<tr>'+r.map(c=>`<td>${(c??'').toString().replace(/&/g,'&amp;').replace(/</g,'&lt;')}</td>`).join('')+'</tr>').join('') + '</table>';
  const html = `<html><head><meta charset="UTF-8"></head><body>${table}</body></html>`;
  downloadBlob('relatorio-wohackers.xls', html, 'application/vnd.ms-excel');
  showToast('📊 Excel exportado com sucesso.');
}
function exportPDF(){
  const rows = buildReportRows();
  const win = window.open('', '_blank');
  const body = rows.map(r=>{
    if(r.length===1) return `<h3 style="margin-top:24px;">${r[0]}</h3>`;
    if(r.length===0) return '';
    return `<tr>${r.map(c=>`<td style="border:1px solid #ccc;padding:6px 8px;font-size:12px;">${c??''}</td>`).join('')}</tr>`;
  }).join('');
  win.document.write(`<html><head><title>Relatório WoHackers</title></head>
    <body style="font-family:sans-serif;padding:24px;">
      <h1>Relatório WoHackers</h1>
      <table style="border-collapse:collapse;width:100%;">${body}</table>
      <script>window.onload = () => window.print();<\/script>
    </body></html>`);
  win.document.close();
  showToast('🖨️ Abrindo relatório para impressão / salvar como PDF.');
}

function renderRelatorios(){
  const wrap = document.createElement('div');
  const grid = document.createElement('div');
  grid.className = 'report-grid';
  grid.innerHTML = `
    <div class="report-card"><div class="ic">📄</div><h4>CSV</h4><p>Notas, comentários, ranking, engajamento, participantes e histórico completo.</p><button class="btn btn-outline btn-sm" id="expCsv">Exportar CSV</button></div>
    <div class="report-card"><div class="ic">📊</div><h4>Excel</h4><p>Mesmos dados, prontos para abrir e filtrar no Excel/Google Sheets.</p><button class="btn btn-outline btn-sm" id="expXls">Exportar Excel</button></div>
    <div class="report-card"><div class="ic">🖨️</div><h4>PDF</h4><p>Abre uma versão para impressão — use "Salvar como PDF" na janela de impressão.</p><button class="btn btn-solid btn-sm" id="expPdf">Exportar PDF</button></div>
  `;
  wrap.appendChild(grid);

  const info = document.createElement('div');
  info.className = 'panel';
  info.innerHTML = `<div class="panel-title">O que está incluso</div>
    <p style="color:var(--ink-dim);font-size:0.88rem;line-height:1.8;">
      • Notas e comentários de todas as avaliações, critério a critério<br>
      • Ranking geral atualizado por nota média<br>
      • Engajamento (XP) por equipe<br>
      • Participantes identificados por equipe<br>
      • Histórico completo de alterações (quem, o quê, quando)
    </p>`;
  wrap.appendChild(info);

  setTimeout(()=>{
    document.getElementById('expCsv').addEventListener('click', exportCSV);
    document.getElementById('expXls').addEventListener('click', exportExcel);
    document.getElementById('expPdf').addEventListener('click', exportPDF);
  },0);

  return wrap;
}

/* ===================== ADMIN · EDITAL ===================== */
function renderEdital(){
  const wrap = document.createElement('div');
  if(state.events.length===0){
    wrap.innerHTML = '<div class="empty-state">Cadastre um evento para gerenciar seu edital, regras e cronograma.</div>';
    return wrap;
  }
  state.events.forEach(ev=>{
    const card = document.createElement('div');
    card.className = 'edital-card';
    const [stLabel, stClass] = STATUS_LABEL[ev.status];
    const editalValor = (ev.edital || '').trim();
    const isLink = /^https?:\/\//i.test(editalValor);
    const canDownload = !!ev.editalDataUrl;
    card.innerHTML = `
      <div class="edital-top">
        <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:1.4rem;">${ev.emoji}</span><strong style="font-family:var(--font-display);">${ev.nome}</strong></div>
        <span class="pill ${stClass}">${stLabel}</span>
      </div>
      <div class="readonly-block"><div class="k">Problema do hackathon</div><div class="v">${ev.problema || 'Não definido ainda.'}</div></div>
      <div class="readonly-block"><div class="k">Regras</div><div class="v">${ev.regras || 'Não definidas ainda.'}</div></div>
      <div class="edital-file">
        <span class="ic">📎</span>
        <span style="flex:1;">${
          editalValor
            ? (isLink ? `<a href="${editalValor}" target="_blank" rel="noopener noreferrer">${editalValor}</a>` : editalValor)
            : 'Nenhum edital anexado ainda.'
        }</span>
        ${canDownload ? `<button class="btn btn-ghost btn-sm" data-dl="${ev.id}">⬇️ Baixar</button>` : ''}
        <button class="btn btn-ghost btn-sm" data-edit="${ev.id}">✏️ Atualizar</button>
      </div>`;
    wrap.appendChild(card);
  });
  setTimeout(()=>{
    wrap.querySelectorAll('[data-edit]').forEach(b=>b.addEventListener('click',()=>openEditalForm(eventById(b.dataset.edit))));
    wrap.querySelectorAll('[data-dl]').forEach(b=>b.addEventListener('click',()=>{
      const ev = eventById(b.dataset.dl);
      downloadAnexo({ nome: ev.edital || 'edital.pdf', dataUrl: ev.editalDataUrl });
    }));
  },0);
  return wrap;
}

function openEditalForm(ev){
  openModal(`
    <div class="modal-head"><h3>Edital · ${ev.nome}</h3><button class="modal-close-x" id="mClose">✕</button></div>
    <form id="editalForm">
      <div class="field"><label>Problema do hackathon</label><textarea id="fEdProblema">${ev.problema || ''}</textarea></div>
      <div class="field"><label>Regras</label><textarea id="fEdRegras">${ev.regras || ''}</textarea></div>
      <div class="field"><label>Link do edital (opcional)</label><input type="text" id="fEdEdital" value="${ev.edital || ''}" placeholder="https://... ou deixe o nome do arquivo após o upload"></div>
      <div class="field"><label>Arquivo do edital (PDF ou outro · até 5 MB)</label>
        <input type="file" id="fEdFile" accept=".pdf,.doc,.docx,.ppt,.pptx,image/*">
        <div style="color:var(--ink-faint);font-size:0.75rem;margin-top:6px;">${ev.editalDataUrl ? `Arquivo atual disponível para download: ${ev.edital || 'edital'}` : 'Nenhum arquivo enviado ainda — sem upload, a equipe não consegue baixar.'}</div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost btn-sm" id="mCancel">Cancelar</button>
        <button type="submit" class="btn btn-solid btn-sm">Salvar edital</button>
      </div>
    </form>
  `);
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('mCancel').addEventListener('click', closeModal);
  document.getElementById('editalForm').addEventListener('submit', async (e)=>{
    e.preventDefault();
    ev.problema = document.getElementById('fEdProblema').value.trim();
    ev.regras = document.getElementById('fEdRegras').value.trim();
    const linkOrName = document.getElementById('fEdEdital').value.trim();
    const fileInput = document.getElementById('fEdFile');
    const file = fileInput.files && fileInput.files[0];

    if(file){
      if(file.size > ANEXO_MAX_BYTES){
        showToast(`⚠️ "${file.name}" excede 5 MB.`);
        return;
      }
      try{
        ev.editalDataUrl = await readFileAsDataUrl(file);
        ev.edital = linkOrName || file.name;
      }catch(err){
        console.error(err);
        showToast('⚠️ Falha ao ler o arquivo do edital.');
        return;
      }
    } else {
      ev.edital = linkOrName;
      if(/^https?:\/\//i.test(linkOrName)){
        // Link externo: mantém o arquivo anterior se existir, mas o texto passa a ser o link
      } else if(!linkOrName){
        ev.editalDataUrl = '';
      }
    }

    closeModal();
    showToast(`✅ Edital de "${ev.nome}" atualizado.`);
    renderView();
  });
}

/* ===================== ADMIN · CONFIGURAÇÕES ===================== */
function renderConfiguracoes(){
  const wrap = document.createElement('div');

  const perfil = document.createElement('div');
  perfil.className = 'settings-section';
  perfil.innerHTML = `<div class="panel-title">Perfil do administrador</div>
    <div class="field"><label>Nome de exibição</label><input type="text" id="cfgNome" value="${state.user.name}"></div>
    <div class="field"><label>Usuário</label><input type="text" value="${state.user.username}" disabled style="opacity:0.6;"></div>
    <button class="btn btn-solid btn-sm" id="cfgSaveProfile">Salvar perfil</button>`;
  wrap.appendChild(perfil);

  const prefs = document.createElement('div');
  prefs.className = 'settings-section';
  prefs.innerHTML = `<div class="panel-title">Preferências do sistema</div>
    <div class="settings-row">
      <div class="txt"><strong>Notificações do cronograma</strong><span>Avisar todos os usuários quando uma etapa mudar</span></div>
      <label class="toggle"><input type="checkbox" id="toggleNotif" ${state.settings.notificacoes?'checked':''}><span class="track"></span></label>
    </div>
    <div class="settings-row">
      <div class="txt"><strong>Salvamento automático</strong><span>Toda edição da equipe é salva sem precisar clicar em "Salvar"</span></div>
      <label class="toggle"><input type="checkbox" id="toggleAutosave" ${state.settings.autosave?'checked':''} disabled><span class="track"></span></label>
    </div>`;
  wrap.appendChild(prefs);

  const seg = document.createElement('div');
  seg.className = 'settings-section';
  seg.innerHTML = `<div class="panel-title">Segurança</div>
    <div class="settings-row"><div class="txt"><strong>PINs bloqueados para participantes</strong><span>Sequências óbvias não são aceitas na identificação</span></div></div>
    <div class="pin-tag-row">${FORBIDDEN_PINS.map(p=>`<span class="pin-tag">${p}</span>`).join('')}</div>`;
  wrap.appendChild(seg);

  const identidade = document.createElement('div');
  identidade.className = 'settings-section';
  identidade.innerHTML = `<div class="panel-title">Identidade visual</div>
    <p style="font-size:0.85rem;color:var(--ink-dim);">A identidade visual da WoHackers (paleta roxa, tipografia, animações e componentes) é fixa em todo o sistema e não pode ser alterada por aqui — garante consistência de marca em todos os painéis.</p>`;
  wrap.appendChild(identidade);

  const sobre = document.createElement('div');
  sobre.className = 'settings-section';
  sobre.innerHTML = `<div class="panel-title">Sobre o sistema</div>
    <p style="font-size:0.85rem;color:var(--ink-dim);">WoHackers · Sistema de Gestão de Hackathons — versão de demonstração.<br>Eventos: ${state.events.length} · Equipes: ${state.teams.length} · Mentoras: ${state.mentors.length} · Avaliações: ${state.evaluations.length}</p>`;
  wrap.appendChild(sobre);

  setTimeout(()=>{
    document.getElementById('cfgSaveProfile').addEventListener('click', ()=>{
      const val = document.getElementById('cfgNome').value.trim();
      if(val){ state.user.name = val; document.getElementById('sbUserName').textContent = val; document.getElementById('sbAvatar').textContent = val.charAt(0).toUpperCase(); }
      showToast('✅ Perfil atualizado.');
    });
    document.getElementById('toggleNotif').addEventListener('change',(e)=>{
      state.settings.notificacoes = e.target.checked;
      showToast(e.target.checked ? '🔔 Notificações do cronograma ativadas.' : '🔕 Notificações do cronograma desativadas.');
    });
  },0);

  return wrap;
}
function myMentor(){ return mentorById(state.user.mentorId); }

function renderMentoraDashboard(){
  const wrap = document.createElement('div');
  const mentor = myMentor();
  const myEvents = mentor ? state.events.filter(ev=>mentor.eventIds.includes(ev.id)) : [];

  if(myEvents.length===0){
    wrap.innerHTML = '<div class="empty-state">Você ainda não foi vinculada a nenhum evento pelo administrador.</div>';
    return wrap;
  }

  const grid = document.createElement('div');
  grid.className = 'event-pick-grid';
  myEvents.forEach(ev=>{
    const [stLabel, stClass] = STATUS_LABEL[ev.status];
    const c = document.createElement('div');
    c.className = 'event-pick-card';
    c.innerHTML = `<div style="display:flex;justify-content:space-between;"><div class="ev-emoji">${ev.emoji}</div><span class="pill ${stClass}">${stLabel}</span></div>
      <div class="ev-name">${ev.nome}</div><div class="ev-tema">${ev.tema||'—'}</div>
      <div class="ev-meta">👥 ${teamsOfEvent(ev.id).length} equipe(s)</div>`;
    c.addEventListener('click', ()=>openEventTeamsReadonly(ev.id));
    grid.appendChild(c);
  });
  wrap.appendChild(grid);
  return wrap;
}

function openEventTeamsReadonly(eventId){
  const ev = eventById(eventId);
  const teams = teamsOfEvent(eventId);
  openModal(`
    <div class="modal-head"><h3>${ev.nome} · equipes</h3><button class="modal-close-x" id="mClose">✕</button></div>
    ${teams.length===0? '<div class="empty-state">Nenhuma equipe inscrita neste evento ainda.</div>' :
      teams.map(t=>`<div class="ev-list-row"><div class="grow"><strong>${t.nome}</strong><div style="font-size:0.76rem;color:var(--ink-faint);">${t.descricao||'Sem descrição'}</div></div><button class="btn btn-outline btn-sm" data-view="${t.id}">👁️ Ver projeto</button></div>`).join('')}
    <div class="modal-actions"><button class="btn btn-outline btn-sm" id="mCancel">Fechar</button></div>
  `);
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('mCancel').addEventListener('click', closeModal);
  document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>viewTeamReadonly(b.dataset.view)));
}

function viewTeamReadonly(teamId){
  const team = state.teams.find(t=>t.id===teamId);
  const project = getTeamProject(teamId);
  const evals = evalsOfTeam(teamId);
  openModal(`
    <div class="modal-head"><h3>${team.nome} · somente leitura</h3><button class="modal-close-x" id="mClose">✕</button></div>
    <div class="readonly-block"><div class="k">Nome do projeto</div><div class="v">${project.info.nome||'—'}</div></div>
    <div class="readonly-block"><div class="k">Problema</div><div class="v">${project.info.problema||'—'}</div></div>
    <div class="readonly-block"><div class="k">Solução</div><div class="v">${project.info.solucao||'—'}</div></div>
    <div class="readonly-block"><div class="k">Diferencial</div><div class="v">${project.info.diferencial||'—'}</div></div>
    <div class="readonly-block"><div class="k">Repositório</div><div class="v">${project.desenvolvimento.repo||'—'}</div></div>
    <div class="readonly-block"><div class="k">Stack</div><div class="v">${['tecnologias','frameworks','banco','cloud'].map(k=>project.arquitetura[k]).filter(Boolean).join(' · ')||'—'}</div></div>
    <div class="readonly-block"><div class="k">Backlog</div><div class="v">A Fazer: ${project.backlog.todo.length} · Fazendo: ${project.backlog.doing.length} · Concluído: ${project.backlog.done.length}</div></div>
    <div class="readonly-block"><div class="k">Documentação (prévia)</div><div class="v">${(project.documentacao||'').slice(0,240)}${project.documentacao.length>240?'…':''}</div></div>
    <div class="readonly-block"><div class="k">Avaliações já recebidas</div><div class="v">${evals.length? evals.map(e=>`${e.mentorNome}: ${evalAverage(e)}/5`).join(' · ') : 'Nenhuma ainda.'}</div></div>
    <div class="modal-actions">
      <button class="btn btn-outline btn-sm" id="mCancel">Fechar</button>
      ${state.user.role==='mentora' ? `<button class="btn btn-solid btn-sm" id="mGoEval">⭐ Avaliar esta equipe</button>` : ''}
    </div>
  `);
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('mCancel').addEventListener('click', closeModal);
  const goEval = document.getElementById('mGoEval');
  if(goEval) goEval.addEventListener('click', ()=>{
    closeModal();
    state.avaliarTeamId = teamId;
    state.activeView = 'avaliacoes';
    document.querySelectorAll('.sb-link').forEach(l=>l.classList.toggle('active', l.dataset.view==='avaliacoes'));
    renderView();
  });
}

/* ===================== MENTORA · AVALIAR ===================== */
function renderMentoraAvaliar(){
  if(state.avaliarTeamId) return renderEvaluationForm(state.avaliarTeamId);

  const wrap = document.createElement('div');
  const mentor = myMentor();
  const myEvents = mentor ? state.events.filter(ev=>mentor.eventIds.includes(ev.id)) : [];
  const allTeams = myEvents.flatMap(ev=>teamsOfEvent(ev.id).map(t=>({...t, eventNome:ev.nome})));

  if(allTeams.length===0){
    wrap.innerHTML = '<div class="empty-state">Nenhuma equipe disponível para avaliação nos seus eventos ainda.</div>';
    return wrap;
  }

  allTeams.forEach(t=>{
    const myEval = state.evaluations.find(e=>e.teamId===t.id && e.mentorId===state.user.mentorId);
    const others = evalsOfTeam(t.id).filter(e=>e.mentorId!==state.user.mentorId);
    const row = document.createElement('div');
    row.className = 'ev-list-row';
    row.innerHTML = `
      <div class="grow"><strong>${t.nome}</strong><div style="font-size:0.76rem;color:var(--ink-faint);">${t.eventNome}${others.length?` · +${others.length} avaliação(ões) de outras mentoras`:''}</div></div>
      ${myEval? `<span class="pill pill-green">Avaliado · ${evalAverage(myEval)}/5</span>` : `<span class="pill pill-yellow">Pendente</span>`}
      <button class="btn ${myEval?'btn-outline':'btn-solid'} btn-sm" data-ev="${t.id}">${myEval?'Editar avaliação':'Avaliar'}</button>`;
    wrap.appendChild(row);
  });
  setTimeout(()=>{
    wrap.querySelectorAll('[data-ev]').forEach(b=>b.addEventListener('click',()=>{
      state.avaliarTeamId = b.dataset.ev;
      renderView();
    }));
  },0);
  return wrap;
}

function renderEvaluationForm(teamId){
  const wrap = document.createElement('div');
  const team = state.teams.find(t=>t.id===teamId);
  const existing = state.evaluations.find(e=>e.teamId===teamId && e.mentorId===state.user.mentorId);

  const bar = document.createElement('div');
  bar.className = 'eval-summary-bar';
  bar.innerHTML = `<button class="btn btn-ghost btn-sm" id="backToList">← Voltar</button><div><strong>${team.nome}</strong> <span style="color:var(--ink-faint);font-size:0.8rem;">· ${CRITERIA.length} critérios · nota 1 a 5</span></div>`;
  wrap.appendChild(bar);

  CRITERIA.forEach(c=>{
    const prev = existing ? existing.scores['c'+c.n] : {nota:0, comentario:''};
    const card = document.createElement('div');
    card.className = 'crit-card';
    card.dataset.crit = c.n;
    card.innerHTML = `
      <div class="crit-head"><span class="crit-title">${c.label}</span><span class="crit-num">Critério ${c.n}/20</span></div>
      <div class="crit-desc">${c.desc}</div>
      <div class="score-row">${[1,2,3,4,5].map(n=>`<button type="button" class="score-btn ${prev.nota===n?'active':''}" data-score="${n}">${n}</button>`).join('')}</div>
      <textarea class="crit-comment" placeholder="Comentário obrigatório para este critério...">${prev.comentario}</textarea>
      <div class="crit-error">Preencha a nota e o comentário deste critério.</div>`;
    wrap.appendChild(card);
  });

  const submitRow = document.createElement('div');
  submitRow.style.textAlign = 'right';
  submitRow.style.marginTop = '10px';
  submitRow.innerHTML = `<button class="btn btn-solid" id="submitEval">${existing?'Salvar alterações':'Enviar avaliação'}</button>`;
  wrap.appendChild(submitRow);

  setTimeout(()=>{
    document.getElementById('backToList').addEventListener('click', ()=>{ state.avaliarTeamId = null; renderView(); });
    wrap.querySelectorAll('.crit-card').forEach(card=>{
      card.querySelectorAll('.score-btn').forEach(btn=>btn.addEventListener('click', ()=>{
        card.querySelectorAll('.score-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        card.classList.remove('invalid');
      }));
    });
    document.getElementById('submitEval').addEventListener('click', ()=>{
      let valid = true;
      const scores = {};
      wrap.querySelectorAll('.crit-card').forEach(card=>{
        const n = card.dataset.crit;
        const activeBtn = card.querySelector('.score-btn.active');
        const comment = card.querySelector('.crit-comment').value.trim();
        if(!activeBtn || !comment){ card.classList.add('invalid'); valid = false; }
        else { card.classList.remove('invalid'); scores['c'+n] = {nota:Number(activeBtn.dataset.score), comentario:comment}; }
      });
      if(!valid){ showToast('⚠️ Preencha nota e comentário em todos os critérios.'); wrap.querySelector('.crit-card.invalid').scrollIntoView({behavior:'smooth',block:'center'}); return; }
      const now = new Date();
      const evData = {
        teamId, eventId:team.eventId, mentorId:state.user.mentorId, mentorNome: myMentor().nome,
        data: now.toLocaleDateString('pt-BR'), hora: now.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),
        scores,
      };
      if(existing){ Object.assign(existing, evData); showToast('✅ Avaliação atualizada.'); }
      else { evData.id = uid('av'); state.evaluations.push(evData); state.stats.avaliacoes = state.evaluations.length; showToast('✅ Avaliação enviada com sucesso.'); }
      awardXP(teamId, 'mentoria_recebida');
      state.avaliarTeamId = null;
      renderView();
    });
  },0);

  return wrap;
}
function uid(prefix){ return prefix + '_' + Math.random().toString(36).slice(2,9); }
function eventById(id){ return state.events.find(e=>e.id===id); }
function teamsOfEvent(id){ return state.teams.filter(t=>t.eventId===id); }
function fmtDate(iso){
  if(!iso) return '—';
  const [y,m,d] = iso.split('-');
  return `${d}/${m}/${y}`;
}
const STATUS_LABEL = {andamento:['Em andamento','pill-green'], encerrado:['Encerrado','pill-purple'], planejamento:['Planejamento','pill-yellow']};

function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('modalBox').innerHTML = '';
}
function openModal(html){
  document.getElementById('modalBox').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('open');
}
document.getElementById('modalOverlay').addEventListener('click', (e)=>{
  if(e.target.id === 'modalOverlay') closeModal();
});

/* ===================== EVENTOS ===================== */
function renderEventos(){
  const wrap = document.createElement('div');

  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar';
  toolbar.innerHTML = `<div class="toolbar-left"><span style="color:var(--ink-dim);font-size:0.85rem;">${state.events.length} evento(s) cadastrado(s)</span></div>
    <button class="btn btn-solid btn-sm" id="newEventBtn">＋ Novo Evento</button>`;
  wrap.appendChild(toolbar);

  const grid = document.createElement('div');
  grid.className = 'ev-grid';
  if(state.events.length === 0){
    grid.innerHTML = `<div class="empty-state">Nenhum evento cadastrado ainda.</div>`;
  } else {
    state.events.forEach(ev=>{
      const teams = teamsOfEvent(ev.id);
      const [stLabel, stClass] = STATUS_LABEL[ev.status];
      const card = document.createElement('div');
      card.className = 'ev-card';
      card.innerHTML = `
        <div class="ev-top">
          <div class="ev-emoji">${ev.emoji||'🎯'}</div>
          <span class="pill ${stClass}">${stLabel}</span>
        </div>
        <div>
          <div class="ev-name">${ev.nome}</div>
          <div class="ev-tema">${ev.tema||'—'}</div>
        </div>
        <div class="ev-meta">
          <span>📅 ${fmtDate(ev.data)}</span>
          <span>👥 ${teams.length} equipe(s)</span>
        </div>
        <div class="ev-actions">
          <button class="btn btn-outline btn-sm" data-act="teams" data-id="${ev.id}">Ver equipes</button>
          <button class="btn btn-ghost btn-sm" data-act="edit" data-id="${ev.id}">✏️</button>
          <button class="btn btn-ghost btn-sm" data-act="del" data-id="${ev.id}">🗑️</button>
        </div>`;
      grid.appendChild(card);
    });
  }
  wrap.appendChild(grid);

  setTimeout(()=>{
    document.getElementById('newEventBtn').addEventListener('click', ()=>openEventForm(null));
    grid.querySelectorAll('[data-act="edit"]').forEach(b=>b.addEventListener('click',(e)=>{
      e.stopPropagation(); openEventForm(eventById(b.dataset.id));
    }));
    grid.querySelectorAll('[data-act="del"]').forEach(b=>b.addEventListener('click',(e)=>{
      e.stopPropagation(); confirmDeleteEvent(b.dataset.id);
    }));
    grid.querySelectorAll('[data-act="teams"]').forEach(b=>b.addEventListener('click',(e)=>{
      e.stopPropagation();
      state.equipesFilterEvent = b.dataset.id;
      state.activeView = 'equipes';
      document.querySelectorAll('.sb-link').forEach(l=>l.classList.toggle('active', l.dataset.view==='equipes'));
      renderView();
    }));
    grid.querySelectorAll('.ev-card').forEach(card=>card.addEventListener('click', ()=>{
      const id = card.querySelector('[data-id]').dataset.id;
      openEventForm(eventById(id));
    }));
  },0);

  return wrap;
}

function openEventForm(ev){
  const isEdit = !!ev;
  const v = ev || {nome:'',emoji:'🎯',data:'',tema:'',descricao:'',problema:'',regras:'',edital:'',status:'planejamento'};
  openModal(`
    <div class="modal-head"><h3>${isEdit?'Editar evento':'Novo evento'}</h3><button class="modal-close-x" id="mClose">✕</button></div>
    <form id="eventForm">
      <div class="form-row">
        <div class="field"><label>Nome do evento</label><input type="text" id="fNome" value="${v.nome}" placeholder="Ex: Hackathon Solana" required></div>
        <div class="field"><label>Ícone / logo (emoji)</label><input type="text" id="fEmoji" value="${v.emoji}" maxlength="2" placeholder="🎯"></div>
      </div>
      <div class="form-row">
        <div class="field"><label>Data</label><input type="date" id="fData" value="${v.data}"></div>
        <div class="field"><label>Status</label>
          <select id="fStatus">
            <option value="planejamento" ${v.status==='planejamento'?'selected':''}>Planejamento</option>
            <option value="andamento" ${v.status==='andamento'?'selected':''}>Em andamento</option>
            <option value="encerrado" ${v.status==='encerrado'?'selected':''}>Encerrado</option>
          </select>
        </div>
      </div>
      <div class="field"><label>Tema</label><input type="text" id="fTema" value="${v.tema}" placeholder="Ex: Web3 & Blockchain"></div>
      <div class="field"><label>Descrição</label><textarea id="fDescricao" placeholder="Descrição geral do evento">${v.descricao}</textarea></div>
      <div class="field"><label>Problema do hackathon</label><textarea id="fProblema" placeholder="Qual desafio as equipes devem resolver?">${v.problema}</textarea></div>
      <div class="field"><label>Regras</label><textarea id="fRegras" placeholder="Regras gerais do evento">${v.regras}</textarea></div>
      <div class="field"><label>Edital (nome do arquivo ou link)</label><input type="text" id="fEdital" value="${v.edital}" placeholder="edital.pdf ou https://..."></div>
      <div class="modal-actions">
        ${isEdit? '<button type="button" class="btn btn-danger btn-sm" id="mDeleteInline">Excluir</button>' : ''}
        <button type="button" class="btn btn-ghost btn-sm" id="mCancel">Cancelar</button>
        <button type="submit" class="btn btn-solid btn-sm">${isEdit?'Salvar alterações':'Criar evento'}</button>
      </div>
    </form>
  `);
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('mCancel').addEventListener('click', closeModal);
  if(isEdit) document.getElementById('mDeleteInline').addEventListener('click', ()=>{ closeModal(); confirmDeleteEvent(ev.id); });
  document.getElementById('eventForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {
      nome: document.getElementById('fNome').value.trim() || 'Sem nome',
      emoji: document.getElementById('fEmoji').value.trim() || '🎯',
      data: document.getElementById('fData').value,
      status: document.getElementById('fStatus').value,
      tema: document.getElementById('fTema').value.trim(),
      descricao: document.getElementById('fDescricao').value.trim(),
      problema: document.getElementById('fProblema').value.trim(),
      regras: document.getElementById('fRegras').value.trim(),
      edital: document.getElementById('fEdital').value.trim(),
    };
    if(isEdit){
      Object.assign(ev, data);
      showToast(`✅ Evento "${data.nome}" atualizado.`);
    } else {
      data.id = uid('ev');
      state.events.push(data);
      state.stats.eventos = state.events.length;
      showToast(`✅ Evento "${data.nome}" criado.`);
    }
    closeModal();
    renderView();
  });
}

function confirmDeleteEvent(id){
  const ev = eventById(id);
  const teams = teamsOfEvent(id);
  openModal(`
    <div class="modal-head"><h3>Excluir evento</h3><button class="modal-close-x" id="mClose">✕</button></div>
    <p class="confirm-text">Tem certeza que deseja excluir <strong>${ev.nome}</strong>?</p>
    ${teams.length? `<p class="confirm-text" style="color:#ff8f88;">Isso também excluirá ${teams.length} equipe(s) vinculada(s) a este evento.</p>`:''}
    <div class="modal-actions">
      <button class="btn btn-ghost btn-sm" id="mCancel">Cancelar</button>
      <button class="btn btn-danger btn-sm" id="mConfirm">Excluir definitivamente</button>
    </div>
  `);
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('mCancel').addEventListener('click', closeModal);
  document.getElementById('mConfirm').addEventListener('click', ()=>{
    state.events = state.events.filter(e=>e.id!==id);
    state.teams = state.teams.filter(t=>t.eventId!==id);
    state.stats.eventos = state.events.length;
    state.stats.equipes = state.teams.length;
    closeModal();
    showToast(`🗑️ Evento "${ev.nome}" excluído.`);
    renderView();
  });
}

/* ===================== EQUIPES ===================== */
const TEAM_COLORS = ['#9d5cff','#7c3aed','#b794f6','#c4b5fd','#4c1d95','#e4dcff'];

function renderEquipes(){
  const wrap = document.createElement('div');
  const filterId = state.equipesFilterEvent || 'all';

  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar';
  toolbar.innerHTML = `
    <div class="toolbar-left">
      <select class="select-field" id="eventFilter">
        <option value="all">Todos os eventos</option>
        ${state.events.map(ev=>`<option value="${ev.id}" ${filterId===ev.id?'selected':''}>${ev.nome}</option>`).join('')}
      </select>
      <span style="color:var(--ink-dim);font-size:0.85rem;" id="teamCount"></span>
    </div>
    <button class="btn btn-solid btn-sm" id="newTeamBtn">＋ Nova Equipe</button>`;
  wrap.appendChild(toolbar);

  const grid = document.createElement('div');
  grid.className = 'tm-grid';
  wrap.appendChild(grid);

  function renderGrid(){
    const fid = document.getElementById('eventFilter').value;
    state.equipesFilterEvent = fid;
    const list = fid === 'all' ? state.teams : state.teams.filter(t=>t.eventId===fid);
    document.getElementById('teamCount').textContent = `${list.length} equipe(s)`;
    if(state.events.length === 0){
      grid.innerHTML = `<div class="empty-state">Cadastre um evento primeiro para poder criar equipes.</div>`;
      return;
    }
    if(list.length === 0){
      grid.innerHTML = `<div class="empty-state">Nenhuma equipe encontrada.</div>`;
      return;
    }
    grid.innerHTML = '';
    list.forEach(tm=>{
      const ev = eventById(tm.eventId);
      const card = document.createElement('div');
      card.className = 'tm-card';
      card.style.borderLeftColor = tm.cor || 'var(--purple-bright)';
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
          <div class="tm-name">${tm.nome}</div>
          <span class="pill pill-purple">${ev?ev.nome:'—'}</span>
        </div>
        <div class="tm-desc">${tm.descricao || 'Sem descrição.'}</div>
        <div class="tm-cred">usuário: ${tm.usuario} · senha: ${tm.senha}</div>
        <div class="tm-actions">
          <button class="btn btn-outline btn-sm" data-act="view" data-id="${tm.id}">👁️ Ver produção</button>
          <button class="btn btn-ghost btn-sm" data-act="edit" data-id="${tm.id}">✏️</button>
          <button class="btn btn-ghost btn-sm" data-act="del" data-id="${tm.id}">🗑️</button>
        </div>`;
      grid.appendChild(card);
    });
    grid.querySelectorAll('[data-act="edit"]').forEach(b=>b.addEventListener('click',()=>openTeamForm(state.teams.find(t=>t.id===b.dataset.id))));
    grid.querySelectorAll('[data-act="del"]').forEach(b=>b.addEventListener('click',()=>confirmDeleteTeam(b.dataset.id)));
    grid.querySelectorAll('[data-act="view"]').forEach(b=>b.addEventListener('click',()=>viewTeamProduction(b.dataset.id)));
  }

  setTimeout(()=>{
    document.getElementById('eventFilter').addEventListener('change', renderGrid);
    document.getElementById('newTeamBtn').addEventListener('click', ()=>{
      if(state.events.length===0){ showToast('⚠️ Cadastre um evento antes de criar equipes.'); return; }
      openTeamForm(null);
    });
    renderGrid();
  },0);

  return wrap;
}

function openTeamForm(tm){
  const isEdit = !!tm;
  const v = tm || {nome:'',usuario:'',senha:'',eventId: state.equipesFilterEvent && state.equipesFilterEvent!=='all' ? state.equipesFilterEvent : (state.events[0]?.id||''), descricao:'', cor: TEAM_COLORS[0]};
  openModal(`
    <div class="modal-head"><h3>${isEdit?'Editar equipe':'Nova equipe'}</h3><button class="modal-close-x" id="mClose">✕</button></div>
    <form id="teamForm">
      <div class="form-row">
        <div class="field"><label>Nome da equipe</label><input type="text" id="fTNome" value="${v.nome}" placeholder="Ex: ByteGirls" required></div>
        <div class="field"><label>Evento</label>
          <select id="fTEvento">${state.events.map(ev=>`<option value="${ev.id}" ${v.eventId===ev.id?'selected':''}>${ev.nome}</option>`).join('')}</select>
        </div>
      </div>
      <div class="form-row">
        <div class="field"><label>Usuário</label><input type="text" id="fTUser" value="${v.usuario}" placeholder="usuario.equipe" required></div>
        <div class="field"><label>Senha</label><input type="text" id="fTPass" value="${v.senha}" placeholder="senha" required></div>
      </div>
      <div class="field"><label>Descrição</label><textarea id="fTDesc" placeholder="Sobre a equipe / projeto">${v.descricao}</textarea></div>
      <div class="field"><label>Cor da equipe (opcional)</label>
        <div class="color-row" id="colorRow">
          ${TEAM_COLORS.map(c=>`<div class="color-swatch ${v.cor===c?'active':''}" data-color="${c}" style="background:${c}"></div>`).join('')}
        </div>
      </div>
      <div class="modal-actions">
        ${isEdit? '<button type="button" class="btn btn-danger btn-sm" id="mDeleteInline">Excluir</button>' : ''}
        <button type="button" class="btn btn-ghost btn-sm" id="mCancel">Cancelar</button>
        <button type="submit" class="btn btn-solid btn-sm">${isEdit?'Salvar alterações':'Criar equipe'}</button>
      </div>
    </form>
  `);
  let selectedColor = v.cor;
  document.querySelectorAll('#colorRow .color-swatch').forEach(sw=>{
    sw.addEventListener('click', ()=>{
      document.querySelectorAll('#colorRow .color-swatch').forEach(s=>s.classList.remove('active'));
      sw.classList.add('active');
      selectedColor = sw.dataset.color;
    });
  });
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('mCancel').addEventListener('click', closeModal);
  if(isEdit) document.getElementById('mDeleteInline').addEventListener('click', ()=>{ closeModal(); confirmDeleteTeam(tm.id); });
  document.getElementById('teamForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {
      nome: document.getElementById('fTNome').value.trim() || 'Sem nome',
      eventId: document.getElementById('fTEvento').value,
      usuario: document.getElementById('fTUser').value.trim(),
      senha: document.getElementById('fTPass').value.trim(),
      descricao: document.getElementById('fTDesc').value.trim(),
      cor: selectedColor,
    };
    if(isEdit){
      Object.assign(tm, data);
      showToast(`✅ Equipe "${data.nome}" atualizada.`);
    } else {
      data.id = uid('tm');
      state.teams.push(data);
      state.stats.equipes = state.teams.length;
      showToast(`✅ Equipe "${data.nome}" criada.`);
    }
    closeModal();
    renderView();
  });
}

function confirmDeleteTeam(id){
  const tm = state.teams.find(t=>t.id===id);
  openModal(`
    <div class="modal-head"><h3>Excluir equipe</h3><button class="modal-close-x" id="mClose">✕</button></div>
    <p class="confirm-text">Tem certeza que deseja excluir a equipe <strong>${tm.nome}</strong>? Todo o histórico e produção ligados a ela serão perdidos.</p>
    <div class="modal-actions">
      <button class="btn btn-ghost btn-sm" id="mCancel">Cancelar</button>
      <button class="btn btn-danger btn-sm" id="mConfirm">Excluir definitivamente</button>
    </div>
  `);
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('mCancel').addEventListener('click', closeModal);
  document.getElementById('mConfirm').addEventListener('click', ()=>{
    state.teams = state.teams.filter(t=>t.id!==id);
    state.stats.equipes = state.teams.length;
    closeModal();
    showToast(`🗑️ Equipe "${tm.nome}" excluída.`);
    renderView();
  });
}

function viewTeamProduction(id){
  const tm = state.teams.find(t=>t.id===id);
  openModal(`
    <div class="modal-head"><h3>${tm.nome} · produção completa</h3><button class="modal-close-x" id="mClose">✕</button></div>
    <p class="confirm-text">O admin tem acesso irrestrito a tudo que a equipe produziu. Documentação técnica, arquitetura, backlog, pitch e anexos completos entram na próxima fase (Painel da Equipe).</p>
    <div class="modal-actions"><button class="btn btn-outline btn-sm" id="mCancel">Fechar</button></div>
  `);
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('mCancel').addEventListener('click', closeModal);
}

function renderPlaceholder(){
  const div = document.createElement('div');
  div.className = 'placeholder-view';
  div.innerHTML = `<div class="ic">🚧</div><h3>Módulo em construção</h3><p>Este módulo entra nas próximas fases do sistema. A base visual, navegação e autenticação já estão prontas para receber o conteúdo completo.</p>`;
  return div;
}

/* ===================== DASHBOARD ADMIN ===================== */
function renderAdminDashboard(){
  const wrap = document.createElement('div');

  // status do evento (cronograma inteligente)
  const c = state.cronograma;
  const currentLabel = c.steps[c.currentIndex];
  const nextLabel = c.steps[c.currentIndex+1] || '—';
  const statusCard = document.createElement('div');
  statusCard.className = 'status-card';
  statusCard.innerHTML = `
    <div class="status-now">
      <div class="lbl">Agora · Hackathon Solana</div>
      <div class="val"><span class="dot-pulse"></span>${currentLabel}</div>
    </div>
    <div class="status-next">
      <div class="lbl">Próxima etapa</div>
      <div class="val">${nextLabel}</div>
    </div>`;
  wrap.appendChild(statusCard);

  // stat grid
  const s = state.stats;
  const statDefs = [
    ['🎯', s.eventos, 'Eventos'], ['👥', s.equipes, 'Equipes'], ['🙋‍♀️', s.participantes, 'Participantes'],
    ['🎓', s.mentoras, 'Mentoras'], ['📄', s.documentos, 'Documentos'], ['⭐', s.avaliacoes, 'Avaliações'],
    ['✅', s.concluidos, 'Projetos concluídos'], ['🔄', s.andamento, 'Projetos em andamento'],
  ];
  const statGrid = document.createElement('div');
  statGrid.className = 'stat-grid';
  statDefs.forEach(([ic,num,lbl])=>{
    const c2 = document.createElement('div');
    c2.className = 'stat-card';
    c2.innerHTML = `<div class="ic">${ic}</div><div class="num">${num}</div><div class="lbl">${lbl}</div>`;
    statGrid.appendChild(c2);
  });
  wrap.appendChild(statGrid);

  // grid 2: chart + cronograma
  const g1 = document.createElement('div');
  g1.className = 'grid-2';

  const chartPanel = document.createElement('div');
  chartPanel.className = 'panel';
  const maxV = Math.max(...state.chart.map(x=>x.v));
  chartPanel.innerHTML = `<div class="panel-title">Utilização por evento <span class="sm">equipes ativas</span></div>
    <div class="bars">${state.chart.map(b=>`
      <div class="bar-col">
        <div class="bar" style="height:${(b.v/maxV*100).toFixed(0)}%"></div>
        <div class="bar-lbl">${b.l}</div>
      </div>`).join('')}
    </div>`;
  g1.appendChild(chartPanel);

  const cronoPanel = document.createElement('div');
  cronoPanel.className = 'panel';
  cronoPanel.innerHTML = `<div class="panel-title">Cronograma Inteligente <span class="sm">Hackathon Solana</span></div>
    <div class="crono-list" id="cronoList" style="max-height:230px;overflow-y:auto;"></div>
    <div style="margin-top:14px;text-align:right;">
      <button class="btn btn-solid btn-sm" id="finishStepBtn">Finalizar etapa ✓</button>
    </div>`;
  g1.appendChild(cronoPanel);
  wrap.appendChild(g1);

  // grid 2: rankings
  const g2 = document.createElement('div');
  g2.className = 'grid-2';
  g2.style.gridTemplateColumns = '1fr 1fr 1fr';

  g2.appendChild(rankPanel('Ranking de Equipes', liveTeamRanking()));
  g2.appendChild(rankPanel('Ranking de Engajamento', liveEngagementRanking()));
  g2.appendChild(rankPanel('Ranking de Mentoras', liveMentorRanking()));
  wrap.appendChild(g2);

  // histórico
  const histPanel = document.createElement('div');
  histPanel.className = 'panel';
  histPanel.innerHTML = `<div class="panel-title">Histórico do Evento</div><div class="history-list" id="historyList"></div>`;
  wrap.appendChild(histPanel);

  // render dinâmico da lista de cronograma + histórico (feito depois de anexar ao DOM)
  setTimeout(()=>{
    renderCronoList();
    renderHistory();
    document.getElementById('finishStepBtn').addEventListener('click', finishStep);
  },0);

  return wrap;
}

function liveTeamRanking(){
  return state.teams.map(t=>({n:t.nome, v:teamAvgScore(t.id).toFixed(1)+' / 5'}))
    .sort((a,b)=>parseFloat(b.v)-parseFloat(a.v)).slice(0,5);
}
function liveEngagementRanking(){
  return state.teams.map(t=>({n:t.nome, v:teamXP(t.id)+' XP'}))
    .sort((a,b)=>parseInt(b.v)-parseInt(a.v)).slice(0,5);
}
function liveMentorRanking(){
  return state.mentors.map(m=>({n:m.nome, v:state.evaluations.filter(e=>e.mentorId===m.id).length+' avaliações'}))
    .sort((a,b)=>parseInt(b.v)-parseInt(a.v)).slice(0,5);
}
function rankPanel(title, list){
  const p = document.createElement('div');
  p.className = 'panel';
  p.innerHTML = `<div class="panel-title">${title}</div><div class="rank-list">${list.map(r=>`
    <div class="rank-item"><div class="rank-pos">•</div><div class="rank-name">${r.n}</div><div class="rank-val">${r.v}</div></div>`).join('')}</div>`;
  // corrige numeração das posições
  setTimeout(()=>{
    p.querySelectorAll('.rank-pos').forEach((el,i)=>el.textContent = i+1);
  },0);
  return p;
}

function renderCronoList(){
  const c = state.cronograma;
  const el = document.getElementById('cronoList');
  if(!el) return;
  el.innerHTML = c.steps.map((step,i)=>{
    const cls = i < c.currentIndex ? 'done' : (i === c.currentIndex ? 'current' : 'pending');
    const check = i < c.currentIndex ? '✓' : '';
    return `<div class="crono-item ${cls}">
      <div class="crono-check">${check}</div>
      <div class="crono-label">${step}</div>
      ${cls==='current' ? '<span class="pill pill-purple">EM ANDAMENTO</span>' : ''}
    </div>`;
  }).join('');
}

function renderHistory(){
  const el = document.getElementById('historyList');
  if(!el) return;
  el.innerHTML = state.cronograma.history.slice().reverse().map(h=>`
    <div class="history-row"><div class="history-time">${h.t}</div><div class="history-txt">${h.txt}</div></div>`).join('');
}

function finishStep(){
  const c = state.cronograma;
  if(c.currentIndex >= c.steps.length - 1){
    showToast('🏁 Cronograma finalizado — todas as etapas concluídas.');
    return;
  }
  const finished = c.steps[c.currentIndex];
  const now = new Date();
  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  c.history.push({t:`${hh}:${mm}`, txt:`${finished} encerrado`});
  c.currentIndex++;
  const nextStep = c.steps[c.currentIndex];
  renderCronoList();
  renderHistory();
  // atualiza card de status no topo
  const statusVal = document.querySelector('.status-now .val');
  const statusNext = document.querySelector('.status-next .val');
  if(statusVal) statusVal.innerHTML = `<span class="dot-pulse"></span>${nextStep}`;
  if(statusNext) statusNext.textContent = c.steps[c.currentIndex+1] || '—';
  if(state.settings.notificacoes) showToast(`🔔 Nova etapa iniciada — ${nextStep}`);
}

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.classList.remove('show'), 3600);
}

/* ===================== PAINEL DA EQUIPE ===================== */
function statusCardHTML(eventLabel){
  const c = state.cronograma;
  const currentLabel = c.steps[c.currentIndex];
  const nextLabel = c.steps[c.currentIndex+1] || '—';
  return `<div class="status-card">
    <div class="status-now">
      <div class="lbl">Agora · ${eventLabel}</div>
      <div class="val"><span class="dot-pulse"></span>${currentLabel}</div>
    </div>
    <div class="status-next">
      <div class="lbl">Próxima etapa</div>
      <div class="val">${nextLabel}</div>
    </div>
  </div>`;
}

function currentTeam(){ return state.teams.find(t=>t.id===state.user.teamId); }
function currentEvent(){ const tm = currentTeam(); return tm ? eventById(tm.eventId) : null; }

function renderTeamDashboard(){
  const wrap = document.createElement('div');
  const ev = currentEvent();
  const project = getTeamProject(state.user.teamId);
  wrap.insertAdjacentHTML('beforeend', statusCardHTML(ev?ev.nome:'seu evento'));

  const editalCard = document.createElement('div');
  editalCard.className = 'edital-card';
  if(ev){
    const editalValor = (ev.edital || '').trim();
    const isLink = /^https?:\/\//i.test(editalValor);
    const canDownload = !!ev.editalDataUrl;
    editalCard.innerHTML = `
      <div class="edital-top">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:1.4rem;">📋</span>
          <strong style="font-family:var(--font-display);">Edital do evento</strong>
        </div>
      </div>
      <div class="readonly-block"><div class="k">Problema do hackathon</div><div class="v">${ev.problema || 'Não definido ainda.'}</div></div>
      <div class="readonly-block"><div class="k">Regras</div><div class="v">${ev.regras || 'Não definidas ainda.'}</div></div>
      <div class="edital-file">
        <span class="ic">📎</span>
        <span style="flex:1;">${
          editalValor
            ? (isLink ? `<a href="${editalValor}" target="_blank" rel="noopener noreferrer">${editalValor}</a>` : editalValor)
            : 'Nenhum edital anexado ainda.'
        }</span>
        ${canDownload
          ? `<button class="btn btn-ghost btn-sm" id="dlEditalBtn">⬇️ Baixar</button>`
          : (editalValor && !isLink
            ? `<span style="font-size:0.72rem;color:var(--ink-faint);">Arquivo ainda não disponível para download</span>`
            : '')}
      </div>`;
  } else {
    editalCard.innerHTML = '<div class="empty-state">Nenhum evento vinculado à equipe.</div>';
  }
  wrap.appendChild(editalCard);
  if(ev?.editalDataUrl){
    setTimeout(()=>{
      const btn = document.getElementById('dlEditalBtn');
      if(btn) btn.addEventListener('click', ()=> downloadAnexo({ nome: ev.edital || 'edital.pdf', dataUrl: ev.editalDataUrl }));
    }, 0);
  }

  const infoFilled = Object.values(project.info).filter(v=>v && v.trim()).length;
  const infoTotal = Object.keys(project.info).length;
  const backlogTotal = project.backlog.todo.length + project.backlog.doing.length + project.backlog.done.length;
  const backlogPct = backlogTotal ? Math.round(project.backlog.done.length/backlogTotal*100) : 0;
  const docWords = project.documentacao.trim().split(/\s+/).filter(Boolean).length;

  const summary = document.createElement('div');
  summary.className = 'summary-grid';
  summary.innerHTML = `
    <div class="stat-card"><div class="ic">🧾</div><div class="num">${infoFilled}/${infoTotal}</div><div class="lbl">Campos do projeto preenchidos</div>
      <div class="progress-track"><div class="progress-fill" style="width:${(infoFilled/infoTotal*100).toFixed(0)}%"></div></div></div>
    <div class="stat-card"><div class="ic">📝</div><div class="num">${docWords}</div><div class="lbl">Palavras na documentação</div></div>
    <div class="stat-card"><div class="ic">📌</div><div class="num">${backlogPct}%</div><div class="lbl">Backlog concluído</div>
      <div class="progress-track"><div class="progress-fill" style="width:${backlogPct}%"></div></div></div>
    <div class="stat-card"><div class="ic">🙋‍♀️</div><div class="num">${project.participants.length}</div><div class="lbl">Participantes identificados</div></div>
  `;
  wrap.appendChild(summary);

  const shortcuts = document.createElement('div');
  shortcuts.className = 'shortcut-grid';
  const items = [
    ['info','🧾','Informações do Projeto','Nome, problema, solução, mercado'],
    ['desenvolvimento','💻','Desenvolvimento','Área livre + link do repositório'],
    ['documentacao','📝','Documentação','Editor Markdown estilo GitHub'],
    ['arquitetura','🏗️','Arquitetura','Stack, cloud e diagramas'],
    ['backlog','📌','Backlog','Kanban de tarefas'],
    ['pitch','🎤','Pitch','Estrutura da apresentação final'],
    ['anexos','📎','Anexos','PDF, imagem, vídeo, ZIP'],
  ];
  items.forEach(([view,ic,lbl,desc])=>{
    const c = document.createElement('div');
    c.className = 'shortcut-card';
    c.style.cursor = 'pointer';
    c.innerHTML = `<div class="ic">${ic}</div><div class="lbl">${lbl}</div><div class="desc">${desc}</div>`;
    c.addEventListener('click', ()=>{
      state.activeView = view;
      document.querySelectorAll('.sb-link').forEach(l=>l.classList.toggle('active', l.dataset.view===view));
      renderView();
    });
    shortcuts.appendChild(c);
  });
  wrap.appendChild(shortcuts);

  const histPanel = document.createElement('div');
  histPanel.className = 'panel';
  histPanel.innerHTML = `<div class="panel-title">Histórico de Alterações <span class="sm">quem editou o quê</span></div>
    <div class="history-list">${
      project.history.length===0 ? '<div class="empty-state">Nenhuma alteração registrada ainda.</div>' :
      project.history.slice().reverse().slice(0,12).map(h=>`
        <div class="history-row"><div class="history-time">${h.hora}</div><div class="history-txt"><strong>${h.participante}</strong> alterou <em>${h.campo}</em> (${h.tipo}) — ${h.data}</div></div>`).join('')
    }</div>`;
  wrap.appendChild(histPanel);

  return wrap;
}

function saveField(project, teamId, path, campoLabel, newValue){
  const before = project[path.obj][path.key];
  if(before === newValue) return;
  project[path.obj][path.key] = newValue;
  logChange(teamId, campoLabel, before, newValue, 'edição');
  awardXP(teamId, 'projeto_atualizado');
  checkPitchComplete(project, teamId);
}

function checkPitchComplete(project, teamId){
  const filled = Object.values(project.pitch).filter(v=>v && v.trim()).length;
  if(filled === Object.keys(project.pitch).length && !project.xpFlags.pitchDone){
    project.xpFlags.pitchDone = true;
    awardXP(teamId, 'pitch_finalizado');
  }
}

function renderTeamInfo(){
  const project = getTeamProject(state.user.teamId);
  const wrap = document.createElement('div');
  const panel = document.createElement('div');
  panel.className = 'panel';
  const fields = [
    ['nome','Nome do projeto','text','Ex: EcoRota'],
    ['slogan','Slogan','text','Uma frase de impacto'],
    ['problema','Problema','textarea','Qual problema real vocês resolvem?'],
    ['solucao','Solução','textarea','Como a solução funciona?'],
    ['objetivos','Objetivos','textarea','O que o projeto pretende alcançar?'],
    ['publico','Público-alvo','textarea','Quem usa essa solução?'],
    ['mercado','Mercado','textarea','Tamanho e contexto do mercado'],
    ['diferencial','Diferencial','textarea','O que torna o projeto único?'],
    ['pitchCurto','Elevator Pitch','textarea','Resumo de 30 segundos do projeto'],
  ];
  panel.innerHTML = `<div class="panel-title">Informações do Projeto <span class="sm">salva automaticamente</span></div>` +
    fields.map(([key,label,type,ph])=>`
      <div class="field"><label>${label}</label>
        ${type==='textarea' ? `<textarea data-key="${key}" placeholder="${ph}">${project.info[key]||''}</textarea>` : `<input type="text" data-key="${key}" value="${project.info[key]||''}" placeholder="${ph}">`}
      </div>`).join('');
  wrap.appendChild(panel);
  setTimeout(()=>{
    panel.querySelectorAll('[data-key]').forEach(el=>{
      el.addEventListener('blur', ()=>saveField(project, state.user.teamId, {obj:'info',key:el.dataset.key}, el.previousElementSibling.textContent, el.value));
    });
  },0);
  return wrap;
}

function renderTeamDev(){
  const project = getTeamProject(state.user.teamId);
  const wrap = document.createElement('div');

  const p1 = document.createElement('div');
  p1.className = 'panel';
  p1.style.marginBottom = '18px';
  p1.innerHTML = `<div class="panel-title">Área livre</div>
    <div class="field"><textarea id="devTexto" style="min-height:160px;" placeholder="Escreva livremente: decisões técnicas, anotações, ideias...">${project.desenvolvimento.texto}</textarea></div>
    <div class="field"><label>Link do repositório</label><input type="text" id="devRepo" value="${project.desenvolvimento.repo}" placeholder="https://github.com/sua-equipe/projeto"></div>`;
  wrap.appendChild(p1);

  const p2 = document.createElement('div');
  p2.className = 'panel';
  p2.style.marginBottom = '18px';
  p2.innerHTML = `<div class="panel-title">Tarefas rápidas</div><div id="devTasks"></div>
    <div class="inline-add"><input type="text" id="devTaskInput" placeholder="Nova tarefa..."><button class="btn btn-solid btn-sm" id="devTaskAdd">Adicionar</button></div>`;
  wrap.appendChild(p2);

  const p3 = document.createElement('div');
  p3.className = 'panel';
  p3.innerHTML = `<div class="panel-title">Links úteis</div><div id="devLinks"></div>
    <div class="inline-add"><input type="text" id="devLinkTxt" placeholder="Descrição" style="max-width:160px;"><input type="text" id="devLinkUrl" placeholder="https://..."><button class="btn btn-solid btn-sm" id="devLinkAdd">Adicionar</button></div>`;
  wrap.appendChild(p3);

  function renderTasks(){
    const el = document.getElementById('devTasks');
    if(project.desenvolvimento.tarefas.length===0){ el.innerHTML = '<div class="empty-state">Nenhuma tarefa ainda.</div>'; return; }
    el.innerHTML = project.desenvolvimento.tarefas.map(t=>`
      <div class="task-row ${t.done?'done':''}"><input type="checkbox" data-id="${t.id}" ${t.done?'checked':''}><div class="txt">${t.texto}</div><button class="btn-ghost btn-sm" data-del="${t.id}">🗑️</button></div>`).join('');
    el.querySelectorAll('input[type="checkbox"]').forEach(cb=>cb.addEventListener('change',()=>{
      const task = project.desenvolvimento.tarefas.find(t=>t.id===cb.dataset.id);
      task.done = cb.checked;
      logChange(state.user.teamId,'Tarefa de desenvolvimento', task.done?'pendente':'concluída', task.done?'concluída':'pendente','status');
      renderTasks();
    }));
    el.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>{
      project.desenvolvimento.tarefas = project.desenvolvimento.tarefas.filter(t=>t.id!==b.dataset.del);
      renderTasks();
    }));
  }
  function renderLinks(){
    const el = document.getElementById('devLinks');
    if(project.desenvolvimento.links.length===0){ el.innerHTML = '<div class="empty-state">Nenhum link ainda.</div>'; return; }
    el.innerHTML = project.desenvolvimento.links.map(l=>`
      <div class="task-row"><div class="txt">🔗 <strong>${l.texto}</strong> — <a href="${l.url}" target="_blank" style="color:var(--purple-light);">${l.url}</a></div><button class="btn-ghost btn-sm" data-del="${l.id}">🗑️</button></div>`).join('');
    el.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>{
      project.desenvolvimento.links = project.desenvolvimento.links.filter(l=>l.id!==b.dataset.del);
      renderLinks();
    }));
  }

  setTimeout(()=>{
    document.getElementById('devTexto').addEventListener('blur',(e)=>saveField(project,state.user.teamId,{obj:'desenvolvimento',key:'texto'},'Área livre (desenvolvimento)',e.target.value));
    document.getElementById('devRepo').addEventListener('blur',(e)=>saveField(project,state.user.teamId,{obj:'desenvolvimento',key:'repo'},'Link do repositório',e.target.value));
    document.getElementById('devTaskAdd').addEventListener('click',()=>{
      const input = document.getElementById('devTaskInput');
      if(!input.value.trim()) return;
      project.desenvolvimento.tarefas.push({id:uid('tk'), texto:input.value.trim(), done:false});
      logChange(state.user.teamId,'Tarefa de desenvolvimento','—',input.value.trim(),'criação');
      input.value='';
      renderTasks();
    });
    document.getElementById('devLinkAdd').addEventListener('click',()=>{
      const t = document.getElementById('devLinkTxt'), u = document.getElementById('devLinkUrl');
      if(!t.value.trim() || !u.value.trim()) return;
      project.desenvolvimento.links.push({id:uid('lk'), texto:t.value.trim(), url:u.value.trim()});
      t.value=''; u.value='';
      renderLinks();
    });
    renderTasks();
    renderLinks();
  },0);

  return wrap;
}

/* ---- markdown ---- */
function mdEscape(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function mdInline(text){
  let t = mdEscape(text);
  t = t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img alt="$1" src="$2">');
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
  t = t.replace(/\*\*\*([^*]+)\*\*\*/g,'<strong><em>$1</em></strong>');
  t = t.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  t = t.replace(/\*([^*]+)\*/g,'<em>$1</em>');
  t = t.replace(/`([^`]+)`/g,'<code>$1</code>');
  return t;
}
function mdToHtml(md){
  const lines = md.replace(/\r\n/g,'\n').split('\n');
  let html = ''; let i = 0;
  const alertTypes = {NOTE:'note',TIP:'tip',IMPORTANT:'important',WARNING:'warning',CAUTION:'caution'};
  while(i < lines.length){
    let line = lines[i];
    if(/^```/.test(line)){
      const buf = []; i++;
      while(i < lines.length && !/^```/.test(lines[i])){ buf.push(lines[i]); i++; }
      html += `<pre><code>${mdEscape(buf.join('\n'))}</code></pre>`; i++; continue;
    }
    if(/^\s*$/.test(line)){ i++; continue; }
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if(h){ html += `<h${h[1].length}>${mdInline(h[2])}</h${h[1].length}>`; i++; continue; }
    if(/^\s*(-{3,}|\*{3,})\s*$/.test(line)){ html += '<hr>'; i++; continue; }
    const alertMatch = line.match(/^>\s*\[!(\w+)\]\s*$/);
    if(alertMatch && alertTypes[alertMatch[1]]){
      const buf = []; i++;
      while(i < lines.length && /^>/.test(lines[i])){ buf.push(lines[i].replace(/^>\s?/,'')); i++; }
      const kind = alertTypes[alertMatch[1]];
      html += `<div class="md-alert md-alert-${kind}"><span class="md-alert-title">${alertMatch[1]}</span>${mdInline(buf.join(' '))}</div>`; continue;
    }
    if(/^>/.test(line)){
      const buf = [];
      while(i < lines.length && /^>/.test(lines[i])){ buf.push(lines[i].replace(/^>\s?/,'')); i++; }
      html += `<blockquote>${mdInline(buf.join(' '))}</blockquote>`; continue;
    }
    if(/^\s*\|.*\|\s*$/.test(line) && lines[i+1] && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i+1])){
      const headCells = line.trim().replace(/^\||\|$/g,'').split('|').map(c=>c.trim());
      i += 2;
      const rows = [];
      while(i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])){
        rows.push(lines[i].trim().replace(/^\||\|$/g,'').split('|').map(c=>c.trim())); i++;
      }
      html += '<table><thead><tr>' + headCells.map(c=>`<th>${mdInline(c)}</th>`).join('') + '</tr></thead><tbody>' +
        rows.map(r=>'<tr>'+r.map(c=>`<td>${mdInline(c)}</td>`).join('')+'</tr>').join('') + '</tbody></table>';
      continue;
    }
    if(/^\s*-\s+\[[ xX]\]\s+/.test(line)){
      const buf = [];
      while(i < lines.length && /^\s*-\s+\[[ xX]\]\s+/.test(lines[i])){ buf.push(lines[i]); i++; }
      html += '<ul style="list-style:none;margin-left:6px;">' + buf.map(l=>{
        const m = l.match(/^\s*-\s+\[([ xX])\]\s+(.*)$/);
        const checked = m[1].toLowerCase()==='x';
        return `<li>${checked?'☑':'☐'} ${mdInline(m[2])}</li>`;
      }).join('') + '</ul>'; continue;
    }
    if(/^\s*[-*]\s+/.test(line)){
      const buf = [];
      while(i < lines.length && /^\s*[-*]\s+/.test(lines[i])){ buf.push(lines[i].replace(/^\s*[-*]\s+/,'')); i++; }
      html += '<ul>' + buf.map(l=>`<li>${mdInline(l)}</li>`).join('') + '</ul>'; continue;
    }
    if(/^\s*\d+\.\s+/.test(line)){
      const buf = [];
      while(i < lines.length && /^\s*\d+\.\s+/.test(lines[i])){ buf.push(lines[i].replace(/^\s*\d+\.\s+/,'')); i++; }
      html += '<ol>' + buf.map(l=>`<li>${mdInline(l)}</li>`).join('') + '</ol>'; continue;
    }
    const buf = [line];
    i++;
    while(i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{1,6}\s|```|>|\s*[-*]\s|\s*\d+\.\s|\s*\|)/.test(lines[i])){ buf.push(lines[i]); i++; }
    html += `<p>${mdInline(buf.join(' '))}</p>`;
  }
  return html;
}

const MD_TOOLBAR = [
  {lbl:'H1', before:'# ', after:'', ph:'Título'},
  {lbl:'H2', before:'## ', after:'', ph:'Subtítulo'},
  {lbl:'H3', before:'### ', after:'', ph:'Heading 3'},
  {lbl:'H4', before:'#### ', after:'', ph:'Heading 4'},
  {lbl:'H5', before:'##### ', after:'', ph:'Heading 5'},
  {lbl:'H6', before:'###### ', after:'', ph:'Heading 6'},
  {lbl:'B', before:'**', after:'**', ph:'negrito'},
  {lbl:'I', before:'*', after:'*', ph:'itálico'},
  {lbl:'B+I', before:'***', after:'***', ph:'negrito itálico'},
  {lbl:'Code', before:'`', after:'`', ph:'código'},
  {lbl:'Bloco', before:'```\n', after:'\n```', ph:'código'},
  {lbl:'Lista', before:'- ', after:'', ph:'item'},
  {lbl:'Lista num.', before:'1. ', after:'', ph:'item'},
  {lbl:'Checklist', before:'- [ ] ', after:'', ph:'tarefa'},
  {lbl:'Tabela', before:'\n| Coluna 1 | Coluna 2 |\n|---|---|\n| valor | valor |\n', after:'', ph:''},
  {lbl:'Link', before:'[', after:'](https://)', ph:'texto'},
  {lbl:'Imagem', before:'![', after:'](https://)', ph:'alt'},
  {lbl:'Citação', before:'> ', after:'', ph:'citação'},
  {lbl:'Linha', before:'\n---\n', after:'', ph:''},
  {lbl:'😀', before:'🚀 ', after:'', ph:''},
  {lbl:'NOTE', before:'> [!NOTE]\n> ', after:'', ph:'texto'},
  {lbl:'TIP', before:'> [!TIP]\n> ', after:'', ph:'texto'},
  {lbl:'IMPORTANT', before:'> [!IMPORTANT]\n> ', after:'', ph:'texto'},
  {lbl:'WARNING', before:'> [!WARNING]\n> ', after:'', ph:'texto'},
  {lbl:'CAUTION', before:'> [!CAUTION]\n> ', after:'', ph:'texto'},
];

function renderTeamDocs(){
  const project = getTeamProject(state.user.teamId);
  const wrap = document.createElement('div');
  const toolbar = document.createElement('div');
  toolbar.className = 'md-toolbar';
  toolbar.innerHTML = MD_TOOLBAR.map((b,i)=>`<button class="md-btn" data-i="${i}" type="button">${b.lbl}</button>`).join('') +
    `<button class="btn btn-outline btn-sm" id="copyReadme" type="button" style="margin-left:auto;">📋 Copiar para README.md</button>`;
  wrap.appendChild(toolbar);

  const split = document.createElement('div');
  split.className = 'md-split';
  split.innerHTML = `<div class="md-editor"><textarea id="mdInput" spellcheck="false">${project.documentacao}</textarea></div>
    <div class="md-preview" id="mdPreview"></div>`;
  wrap.appendChild(split);

  setTimeout(()=>{
    const input = document.getElementById('mdInput');
    const preview = document.getElementById('mdPreview');
    function update(){ preview.innerHTML = mdToHtml(input.value); }
    update();
    input.addEventListener('input', update);
    input.addEventListener('blur', ()=>{
      if(project.documentacao !== input.value){
        logChange(state.user.teamId,'Documentação técnica','(conteúdo anterior)','(conteúdo atualizado)','edição');
        project.documentacao = input.value;
        if(!project.xpFlags.docCreated){ project.xpFlags.docCreated = true; awardXP(state.user.teamId,'doc_criada'); }
        else { awardXP(state.user.teamId,'projeto_atualizado'); }
        if(!project.xpFlags.readme && input.value.trim().split(/\s+/).filter(Boolean).length >= 80){
          project.xpFlags.readme = true; awardXP(state.user.teamId,'readme_completo');
        }
      }
    });
    toolbar.querySelectorAll('.md-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const def = MD_TOOLBAR[btn.dataset.i];
        const start = input.selectionStart, end = input.selectionEnd;
        const selected = input.value.slice(start,end) || def.ph;
        const newText = input.value.slice(0,start) + def.before + selected + def.after + input.value.slice(end);
        input.value = newText;
        input.focus();
        const cursor = start + def.before.length + selected.length;
        input.setSelectionRange(cursor, cursor);
        update();
      });
    });
    document.getElementById('copyReadme').addEventListener('click', ()=>{
      navigator.clipboard.writeText(input.value).then(()=>showToast('📋 Markdown copiado — cole direto no README.md')).catch(()=>showToast('⚠️ Não foi possível copiar automaticamente.'));
    });
  },0);

  return wrap;
}

function renderTeamArch(){
  const project = getTeamProject(state.user.teamId);
  const wrap = document.createElement('div');
  const panel = document.createElement('div');
  panel.className = 'panel';
  const chipFields = [
    ['tecnologias','Tecnologias','Ex: TypeScript'],
    ['frameworks','Frameworks','Ex: React'],
    ['banco','Banco de dados','Ex: PostgreSQL'],
    ['cloud','Cloud','Ex: AWS'],
    ['apis','APIs','Ex: OpenAI API'],
    ['bibliotecas','Bibliotecas','Ex: Zod'],
    ['ferramentas','Ferramentas','Ex: Figma'],
  ];
  panel.innerHTML = `<div class="panel-title">Stack do projeto <span class="sm">pressione Enter para adicionar</span></div>` +
    chipFields.map(([key,label,ph])=>`
      <div class="field"><label>${label}</label>
        <input type="text" data-chipkey="${key}" placeholder="${ph} — Enter para adicionar">
        <div class="chip-row" id="chips-${key}"></div>
      </div>`).join('');
  wrap.appendChild(panel);

  const panel2 = document.createElement('div');
  panel2.className = 'panel';
  panel2.style.marginTop = '18px';
  panel2.innerHTML = `<div class="panel-title">Arquitetura & Diagrama</div>
    <div class="field"><label>Descrição da arquitetura</label><textarea id="archDesc" placeholder="Como os componentes se conectam?">${project.arquitetura.descricao}</textarea></div>
    <div class="field"><label>Fluxograma / Diagrama (texto ou link)</label><textarea id="archFluxo" placeholder="Cole um link do diagrama (Excalidraw, Miro, FigJam) ou descreva o fluxo em texto">${project.arquitetura.fluxograma}</textarea></div>`;
  wrap.appendChild(panel2);

  function renderChips(key){
    const list = (project.arquitetura[key]||'').split(',').map(s=>s.trim()).filter(Boolean);
    const el = document.getElementById('chips-'+key);
    el.innerHTML = list.map((v,idx)=>`<span class="chip">${v}<button data-key="${key}" data-idx="${idx}">✕</button></span>`).join('');
    el.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
      const arr = (project.arquitetura[key]||'').split(',').map(s=>s.trim()).filter(Boolean);
      arr.splice(Number(b.dataset.idx),1);
      project.arquitetura[key] = arr.join(', ');
      renderChips(key);
    }));
  }

  setTimeout(()=>{
    chipFields.forEach(([key])=>{
      renderChips(key);
      const input = panel.querySelector(`[data-chipkey="${key}"]`);
      input.addEventListener('keydown',(e)=>{
        if(e.key === 'Enter' && input.value.trim()){
          e.preventDefault();
          const arr = (project.arquitetura[key]||'').split(',').map(s=>s.trim()).filter(Boolean);
          arr.push(input.value.trim());
          project.arquitetura[key] = arr.join(', ');
          input.value = '';
          renderChips(key);
        }
      });
    });
    document.getElementById('archDesc').addEventListener('blur',(e)=>saveField(project,state.user.teamId,{obj:'arquitetura',key:'descricao'},'Descrição da arquitetura',e.target.value));
    document.getElementById('archFluxo').addEventListener('blur',(e)=>saveField(project,state.user.teamId,{obj:'arquitetura',key:'fluxograma'},'Fluxograma / diagrama',e.target.value));
  },0);

  return wrap;
}

function checkBacklogComplete(project){
  const total = project.backlog.todo.length + project.backlog.doing.length + project.backlog.done.length;
  if(total > 0 && project.backlog.todo.length===0 && project.backlog.doing.length===0 && !project.xpFlags.backlogDone){
    project.xpFlags.backlogDone = true;
    awardXP(state.user.teamId, 'backlog_concluido');
  } else if(project.backlog.todo.length>0 || project.backlog.doing.length>0){
    project.xpFlags.backlogDone = false;
  }
}

function renderTeamBacklog(){
  const project = getTeamProject(state.user.teamId);
  const wrap = document.createElement('div');
  const cols = [['todo','A Fazer'],['doing','Fazendo'],['done','Concluído']];
  const kanban = document.createElement('div');
  kanban.className = 'kanban';
  wrap.appendChild(kanban);

  function moveTask(fromKey, id, dir){
    const idx = cols.findIndex(c=>c[0]===fromKey);
    const toIdx = idx + dir;
    if(toIdx < 0 || toIdx >= cols.length) return;
    const toKey = cols[toIdx][0];
    const list = project.backlog[fromKey];
    const taskIdx = list.findIndex(t=>t.id===id);
    const [task] = list.splice(taskIdx,1);
    project.backlog[toKey].push(task);
    logChange(state.user.teamId,'Tarefa de backlog',cols[idx][1],cols[toIdx][1],'movimentação');
    checkBacklogComplete(project);
    render();
  }

  function render(){
    kanban.innerHTML = '';
    cols.forEach(([key,label],ci)=>{
      const col = document.createElement('div');
      col.className = 'kb-col';
      const list = project.backlog[key];
      col.innerHTML = `<div class="kb-head"><span>${label}</span><span class="kb-count">${list.length}</span></div>
        <div class="kb-cards">${list.map(t=>`
          <div class="kb-card">
            <div>${t.texto}</div>
            <div class="kb-card-actions">
              ${ci>0?`<button class="kb-mini" data-move="-1" data-id="${t.id}" data-col="${key}">←</button>`:''}
              ${ci<cols.length-1?`<button class="kb-mini" data-move="1" data-id="${t.id}" data-col="${key}">→</button>`:''}
              <button class="kb-mini" data-del="${t.id}" data-col="${key}">🗑️</button>
            </div>
          </div>`).join('')}
        </div>
        <div class="kb-add"><input type="text" placeholder="Nova tarefa..." data-newcol="${key}"><button class="btn btn-solid btn-sm" data-addcol="${key}">＋</button></div>`;
      kanban.appendChild(col);
    });
    kanban.querySelectorAll('[data-move]').forEach(b=>b.addEventListener('click',()=>moveTask(b.dataset.col,b.dataset.id,Number(b.dataset.move))));
    kanban.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>{
      project.backlog[b.dataset.col] = project.backlog[b.dataset.col].filter(t=>t.id!==b.dataset.del);
      render();
    }));
    kanban.querySelectorAll('[data-addcol]').forEach(b=>b.addEventListener('click',()=>{
      const input = kanban.querySelector(`[data-newcol="${b.dataset.addcol}"]`);
      if(!input.value.trim()) return;
      project.backlog[b.dataset.addcol].push({id:uid('bk'), texto:input.value.trim()});
      logChange(state.user.teamId,'Tarefa de backlog','—',input.value.trim(),'criação');
      render();
    }));
    kanban.querySelectorAll('[data-newcol]').forEach(inp=>inp.addEventListener('keydown',(e)=>{
      if(e.key==='Enter'){ e.preventDefault(); kanban.querySelector(`[data-addcol="${inp.dataset.newcol}"]`).click(); }
    }));
  }
  render();
  return wrap;
}

function renderTeamPitch(){
  const project = getTeamProject(state.user.teamId);
  const wrap = document.createElement('div');
  const panel = document.createElement('div');
  panel.className = 'panel';
  const fields = [
    ['problema','Problema','Qual dor vocês resolvem?'],
    ['solucao','Solução','Como a solução resolve isso?'],
    ['mercado','Mercado','Tamanho e oportunidade'],
    ['modelo','Modelo de negócio','Como o projeto gera valor/receita?'],
    ['diferencial','Diferencial','O que destaca o projeto da concorrência?'],
    ['roadmap','Roadmap','Próximos passos após o hackathon'],
    ['impacto','Impacto','Impacto social, econômico ou tecnológico'],
  ];
  panel.innerHTML = `<div class="panel-title">Estrutura do Pitch <span class="sm">salva automaticamente</span></div>` +
    fields.map(([key,label,ph])=>`<div class="field"><label>${label}</label><textarea data-key="${key}" placeholder="${ph}">${project.pitch[key]||''}</textarea></div>`).join('');
  wrap.appendChild(panel);
  setTimeout(()=>{
    panel.querySelectorAll('[data-key]').forEach(el=>{
      el.addEventListener('blur', ()=>saveField(project, state.user.teamId, {obj:'pitch',key:el.dataset.key}, el.previousElementSibling.textContent, el.value));
    });
  },0);
  return wrap;
}

const FILE_ICONS = {pdf:'📕', img:'🖼️', video:'🎬', zip:'🗜️', ppt:'📊', other:'📄'};
function fileKind(name){
  const ext = (name.split('.').pop()||'').toLowerCase();
  if(ext==='pdf') return 'pdf';
  if(['png','jpg','jpeg','gif','webp','svg'].includes(ext)) return 'img';
  if(['mp4','mov','avi','webm'].includes(ext)) return 'video';
  if(['zip','rar','7z'].includes(ext)) return 'zip';
  if(['ppt','pptx','key'].includes(ext)) return 'ppt';
  return 'other';
}
const ANEXO_MAX_BYTES = 5 * 1024 * 1024; // 5 MB

function downloadAnexo(anexo){
  if(!anexo?.dataUrl){
    showToast('⚠️ Este anexo não tem conteúdo para baixar. Envie o arquivo novamente.');
    return;
  }
  const a = document.createElement('a');
  a.href = anexo.dataUrl;
  a.download = anexo.nome || 'anexo';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function readFileAsDataUrl(file){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onload = ()=> resolve(reader.result);
    reader.onerror = ()=> reject(reader.error || new Error('Falha ao ler arquivo'));
    reader.readAsDataURL(file);
  });
}

function renderTeamAnexos(){
  const project = getTeamProject(state.user.teamId);
  const wrap = document.createElement('div');
  wrap.innerHTML = `<div class="file-drop" id="fileDrop">
      <div style="font-size:1.8rem;margin-bottom:8px;">📎</div>
      <div style="font-weight:700;">Clique para enviar arquivos</div>
      <div style="color:var(--ink-faint);font-size:0.78rem;margin-top:4px;">PDF, imagem, vídeo, ZIP ou apresentação · até 5 MB cada</div>
      <input type="file" id="fileInput" multiple style="display:none;">
    </div>
    <div class="file-list" id="fileListEl"></div>`;

  function renderList(){
    const el = document.getElementById('fileListEl');
    if(project.anexos.length===0){ el.innerHTML = '<div class="empty-state">Nenhum anexo enviado ainda.</div>'; return; }
    el.innerHTML = project.anexos.map(f=>`
      <div class="file-row">
        <span class="file-ic">${FILE_ICONS[f.kind]}</span>
        <span class="file-name">${f.nome}</span>
        <span class="file-meta">${f.tamanho}</span>
        <button class="btn btn-ghost btn-sm" data-dl="${f.id}" ${f.dataUrl ? '' : 'disabled title="Sem conteúdo para baixar"'}>⬇️ Baixar</button>
        <button class="btn btn-ghost btn-sm" data-del="${f.id}">🗑️</button>
      </div>`).join('');
    el.querySelectorAll('[data-dl]').forEach(b=>b.addEventListener('click',()=>{
      const anexo = project.anexos.find(f=>f.id===b.dataset.dl);
      downloadAnexo(anexo);
    }));
    el.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>{
      project.anexos = project.anexos.filter(f=>f.id!==b.dataset.del);
      persistStore();
      renderList();
    }));
  }

  setTimeout(()=>{
    const drop = document.getElementById('fileDrop');
    const input = document.getElementById('fileInput');
    drop.addEventListener('click', ()=>input.click());
    input.addEventListener('change', async ()=>{
      const files = Array.from(input.files || []);
      if(!files.length) return;
      let added = 0;
      for(const f of files){
        if(f.size > ANEXO_MAX_BYTES){
          showToast(`⚠️ "${f.name}" excede 5 MB e não foi enviado.`);
          continue;
        }
        try{
          const dataUrl = await readFileAsDataUrl(f);
          const sizeKb = (f.size/1024).toFixed(0);
          project.anexos.push({
            id: uid('fl'),
            nome: f.name,
            tamanho: sizeKb+' KB',
            kind: fileKind(f.name),
            dataUrl,
          });
          logChange(state.user.teamId,'Anexos','—',f.name,'upload');
          added++;
        }catch(err){
          console.error(err);
          showToast(`⚠️ Falha ao ler "${f.name}".`);
        }
      }
      if(added > 0){
        awardXP(state.user.teamId, 'upload_apresentacao');
        persistStore();
        showToast(`📎 ${added} arquivo(s) adicionado(s)`);
      }
      input.value = '';
      renderList();
    });
    renderList();
  },0);

  return wrap;
}

