<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🚀 API One-way NestJS – ACAPRA

Projeto backend RESTful desenvolvido com [NestJS](https://nestjs.com/).

---

## 🔐 Funcionalidades

- Login com email e senha
- Integração com banco de dados usando Prisma ORM

---

## 📦 Tecnologias

- NestJS
- Bcrypt
- Prisma ORM (MySQL, PostgreSQL, etc.)
- TypeScript

---

## ⚙️ Instalação

1️⃣ **Clone o projeto**

```bash
git clone https://github.com/gabrielbatschauer/backend-acapra/
cd backend-acapra
```

2️⃣ **Instale as dependências**

```bash
npm install
```

3️⃣ **Configure o banco de dados**

Crie um arquivo .env baseado no .env.example:

```bash
cp .env.example .env
```

Configure a variável DATABASE_URL com a URL do seu banco de dados.

4️⃣ **Rode as migrations do Prisma**

```bash
npx prisma migrate dev
```

5️⃣ **Inicie o projeto**

```bash
npm run start:dev
```

---

## 🔑 Autenticação

Após o cadastro, a senha do usuário é salva no banco de dados em formato hash.

## 🛠️ Scripts úteis

| Comando                  | Descrição                                             |
| ------------------------ | ----------------------------------------------------- |
| `npm run start:dev`      | Inicia a API em modo desenvolvimento                  |
| `npx prisma studio`      | Acessa painel web do Prisma ORM                       |
| `npx prisma migrate dev` | Executa as migrations no banco de dados               |
| `npx prisma db push`     | Sincroniza o schema.prisma com o banco sem migrations |
