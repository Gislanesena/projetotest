# WoHackers — Sistema de Gestão de Hackathons

Arquitetura em camadas com **frontend separado** e **backend Java (Spring Boot)**.

## Estrutura

```
WoHackers/
├── frontend/                 # UI estática (HTML/CSS/JS)
│   ├── index.html
│   ├── css/styles.css
│   └── js/
│       ├── api.js            # Cliente HTTP → API Java
│       └── app.js            # Telas e regras de UI
├── backend/                  # API REST Spring Boot (Java 21)
│   ├── pom.xml
│   └── src/main/java/dev/wohackers/
│       ├── web/              # Controllers REST
│       ├── service/          # Autenticação / regras
│       ├── store/            # Persistência em memória (+ seed)
│       ├── domain/           # Modelos de domínio
│       ├── dto/              # Contratos da API
│       ├── security/         # Sessão por token
│       └── config/           # CORS e rotas
└── wohackers-sistema.html    # Monólito original (referência)
```

## Fluxo

1. O navegador abre o frontend (servido pelo Spring em `http://localhost:8080`).
2. Login/identificação vão para `/api/auth/*` no backend Java.
3. Após autenticar, o front carrega o snapshot em `GET /api/store`.
4. Alterações na UI são persistidas com `PUT /api/store` no store Java.

## Como rodar

Requisitos: **JDK 21** e **Maven 3.9+**.

```powershell
cd backend
$env:JAVA_HOME = "...\jdk-21"
mvn spring-boot:run
```

Abra [http://localhost:8080](http://localhost:8080).

### Credenciais de demonstração

| Papel   | Usuário   | Senha        |
|---------|-----------|--------------|
| Admin   | `adminwo` | `wohackeei9` |
| Equipe  | `alpha`   | `1234equipe` |
| Mentora | `mentora1`| `1234mentora`|

## API principal

| Método | Rota                 | Descrição                |
|--------|----------------------|--------------------------|
| GET    | `/api/health`        | Health check             |
| POST   | `/api/auth/login`    | Login                    |
| POST   | `/api/auth/identify` | PIN do participante      |
| POST   | `/api/auth/logout`   | Logout                   |
| GET    | `/api/auth/me`       | Sessão atual             |
| GET    | `/api/store`         | Snapshot do domínio      |
| PUT    | `/api/store`         | Atualiza snapshot        |

Header: `Authorization: Bearer <token>`
