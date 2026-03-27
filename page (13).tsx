generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id               String      @id @default(cuid())
  name             String?
  email            String      @unique
  passwordHash     String?
  role             String      @default("USER")
  emailVerified    Boolean     @default(false)
  image            String?
  walletBalancePkr Int         @default(0)
  createdAt        DateTime    @default(now())
  updatedAt        DateTime    @updatedAt
  orders           Order[]
  deposits         Deposit[]
}

model Order {
  id                    String    @id @default(cuid())
  userId                String
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  serviceCode           String
  serviceName           String
  countryCode           String
  countryName           String
  providerActivationId  String    @unique
  phoneNumber           String
  providerCost          Float
  usdtPkrRate           Float
  markupPercent         Int
  finalPricePkr         Int
  status                String
  otpCode               String?
  otpText               String?
  canGetAnotherSms      Boolean   @default(false)
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt
}

model Deposit {
  id             String   @id @default(cuid())
  userId         String
  user           User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  method         String
  amountPkr      Int
  senderName     String?
  senderNumber   String?
  screenshotPath String?
  status         String   @default("PENDING")
  adminNote      String?
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
