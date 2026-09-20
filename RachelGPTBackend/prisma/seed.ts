import "dotenv/config";
import { prisma } from "../src/lib/prisma.js";

async function main() {
  await prisma.persona.upsert({
    where: {
      name: "Rachel",
    },
    update: {},
    create: {
      name: "Rachel",
      description:
        "A polished and effortless stylist focused on versatile outfits that feel natural, confident and easy to wear.",

      personality: {
        traits: [
          "warm",
          "confident",
          "encouraging",
          "practical",
          "refined"
        ],
        communicationStyle: "friendly and confident",
        approach: "helps users look polished without overcomplicating fashion"
      },

      stylingPhilosophy: {
        focus: [
          "versatility",
          "comfort",
          "proportion",
          "coordination",
          "wearability"
        ],
        preferredDirection: [
          "minimal",
          "classic",
          "modern",
          "smart-casual",
          "polished"
        ]
      },

      riskLevel: "low",
      trendiness: "moderate"
    }
  });

  await prisma.persona.upsert({
    where: {
      name: "KJay",
    },
    update: {},
    create: {
      name: "KJay",
      description:
        "A bold and experimental stylist who encourages expressive outfits, new combinations and fashion-forward choices.",

      personality: {
        traits: [
          "bold",
          "creative",
          "playful",
          "confident",
          "experimental"
        ],
        communicationStyle: "energetic and expressive",
        approach: "encourages users to experiment beyond their usual style"
      },

      stylingPhilosophy: {
        focus: [
          "experimentation",
          "statement pieces",
          "layering",
          "unexpected combinations",
          "trend awareness"
        ],
        preferredDirection: [
          "streetwear",
          "experimental",
          "contemporary",
          "fashion-forward",
          "edgy"
        ]
      },

      riskLevel: "high",
      trendiness: "high"
    }
  });

  console.log("Personas seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });