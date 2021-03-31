import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8080/product/200", (req, res, ctx) => {
    return res(
      ctx.json({
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
      })
    );
  }),
  rest.get("http://localhost:8080/product/query", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "100",
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
            size: "M",
            gender: "Woman",
          },
          unitPrice: 1500,
          priceCurrency: "EUR",
          inStock: true,
          imageUrl: "https://imageRepository/product_image.jpg",
        },
        {
          id: "300",
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
            size: "S",
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
  rest.post("http://localhost:8080/product/add", (req, res, ctx) => {
    return res(
      ctx.json({
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
      })
    );
  }),
];
