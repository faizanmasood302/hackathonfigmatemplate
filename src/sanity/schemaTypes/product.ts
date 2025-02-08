export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'descriptionOne',
      title: 'Description One',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
  },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'thumbnailImages',
      title: 'Thumbnail Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: [
          { title: 'USD', value: 'USD' },
          { title: 'EUR', value: 'EUR' },
          { title: 'GBP', value: 'GBP' },
          // Add more currencies as needed
        ],
        layout: 'radio', // Or 'dropdown' depending on your preference
      },
      initialValue: 'USD', // Default currency
    },

    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive()
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
  },
  {
    name: 'createdAt',
    title: 'Created At',
    type: 'datetime',
    options: {
      dateFormat: 'YYYY-MM-DD',
      timeFormat: 'HH:mm',
    },
    readOnly: true,
  },
  {
    name: 'updatedAt',
    title: 'Updated At',
    type: 'datetime',
    options: {
      dateFormat: 'YYYY-MM-DD',
      timeFormat: 'HH:mm',
    },
    readOnly: true,
  },
  {
    name: 'rating',
    title: 'Star Rating',
    type: 'number',
    description: 'The star rating for the product (1-5)',
    validation: (Rule: any) => Rule.min(1).max(5).integer(), // Ensures the rating is between 1 and 5
    options: {
      list: [1, 2, 3, 4, 5], // Optional: Display as a dropdown in the Studio
    },
  },
  {
    name: 'description',
    title: 'Description',
    type: 'text',
    validation: (Rule: any) => Rule.required(),
},
{
  name: 'reviews',
  title: 'Reviews',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        { name: 'reviewer', title: 'Reviewer Name', type: 'string' },
        { name: 'rating', title: 'Rating', type: 'number' },
        { name: 'comment', title: 'Comment', type: 'text' },
      ],
      options: {
        add: {
          _key: {
            type: 'string',
            title: 'Key',
            description: 'A unique key for each review',}
        },
      },
    },
  ],
},
{
  name: 'keybenefits',
  title: 'Key Benefits',
  type: 'string',
  validation: (Rule: any) => Rule.required().max(50).warning("Keep the heading concise.")
},
{
  name: 'benefitsList',
  title: 'Key Benefit Points',
  type: 'array',
  of: [{ type: 'string' }],
  validation: (Rule: any) =>
    Rule.required().min(1).max(5).error('You must provide 1 to 5 benefit points.'),
},
]
};