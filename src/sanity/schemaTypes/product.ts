import { Rule } from "sanity";

const productschema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "descriptionOne",
      title: "Description One",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "thumbnailImages",
      title: "Thumbnail Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "currency",
      title: "Currency",
      type: "string",
      options: {
        list: [
          { title: "USD", value: "USD" },
          { title: "EUR", value: "EUR" },
          { title: "GBP", value: "GBP" },
        ],
        layout: "radio",
      },
      initialValue: "USD",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: Rule) => Rule.required().positive(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
      initialValue: new Date().toISOString(),
      readOnly: true,
    },
    {
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
      initialValue: new Date().toISOString(),
      readOnly: true,
    },
    {
      name: "rating",
      title: "Star Rating",
      type: "number",
      description: "The star rating for the product (1-5)",
      validation: (Rule: Rule) => Rule.min(1).max(5).integer(),
      options: {
        list: [1, 2, 3, 4, 5],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "reviewer", title: "Reviewer Name", type: "string" },
            { name: "rating", title: "Rating", type: "number" },
            { name: "comment", title: "Comment", type: "text" },
          ],
        },
      ],
    },
    {
      name: "keybenefits",
      title: "Key Benefits",
      type: "string",
      validation: (Rule: Rule) => Rule.required().max(50).warning("Keep the heading concise."),
    },
    {
      name: "benefitsList",
      title: "Key Benefit Points",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: Rule) =>
        Rule.required().min(1).max(5).error("You must provide 1 to 5 benefit points."),
    },
  ],
};
export default productschema
