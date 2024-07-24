![menime logo](public/imgs/icons.webp)

# Menime

Simple Fullstack Anime Streaming Web App built with [Next.js](https://nextjs.org/)

## Getting Started

### Running locally

#### Step 1 : Install

To get started, just clone the repository, navigate to project directory and run `npm install`:

```bash
git clone https://github.com/SatuSembilanDua/Menime_Next
cd Menime_Next
npm install
```

#### Step 2 : Configuring

First rename the [`.env.example`](https://github.com/SatuSembilanDua/Menime_Next/blob/master/.env.example) file to `.env`

Determine the database to be used. then configure according to the database used. More info for configuring the database can be seen [here](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma#the-prisma-schema).

If you don't want to bother with database configuration then use `sqlite` database in the following way:

- delete `prisma/schema.prisma` file
- change the file name `prisma/schema.prisma.bak` to `prisma/schema.prisma`
- open the `.env` file into a text editor then change the variable `DATABASE_URL` to `DATABASE_URL="file:./menime.db"`
- install the database by typing the command `npx prisma migrate dev --name="init"`

#### Step 3 : Run

You can run in production or development mode by:

- Running in development mode

```bash
npm run dev
```

- Building and deploying in production

```bash
npm run build
npm start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

