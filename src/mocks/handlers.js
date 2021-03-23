import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8080/product/:productId", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "200",
          shortDescription: "Oversized double-breasted grain de poudre blazer",
          editorDescription: "Oversized double-breasted grain de poudre blazer",
          category: "Blazer",
          brand: "Bottega Veneta",
          sku: "SKU0000002",
          variant: {
            model: "Oversize Blazer",
            color: "Brown",
            materials: [
              {
                description: "Cotton",
              },
            ],
            size: "L",
            gender: "Woman",
          },
          unitPrice: 1500,
          priceCurrency: "EUR",
          inStock: true,
          imageUrl: "https://imageRepository/product_image.jpg",
        },
      ])
    );
  }),
];
