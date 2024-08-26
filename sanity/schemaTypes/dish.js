import {defineField, defineType} from 'sanity'
import category from './category'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of dish',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
        name: "price",
        type: "number",
        title: "Price of the dish in GBP",
    }),
    defineField({
        name: "image",
        type: "image",
        title: "Image of the Dish",
    }),
    
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
