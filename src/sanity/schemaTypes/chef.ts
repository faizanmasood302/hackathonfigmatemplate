export default {
    name: 'chef',
    title: 'Chef',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Chef Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'chefName',
        title: 'Chef Name',
        type: 'string',
      },
      {
        name: 'designation',
        title: 'Designation',
        type: 'string',
      },
    ],
  };
  