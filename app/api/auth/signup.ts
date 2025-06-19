import { hash } from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { firstName, lastName, email, phone, password } = req.body
  console.log("Received body:", req.body)

  if (!firstName || !lastName || !email || !phone || !password) {
    return res.status(400).json({ message: "Missing fields" })
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" })
    }

    const hashedPassword = await hash(password, 10)

    await prisma.user.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        password: hashedPassword,
      },
    })

    return res.status(201).json({ message: "User created successfully" })
  } catch (error: any) {
    console.error("Server error:", error)
    return res.status(500).json({
      message: "Server error",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
  finally {
  await prisma.$disconnect()
}

}
