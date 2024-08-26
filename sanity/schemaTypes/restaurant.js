import {defineField, defineType} from 'sanity'
import category from './category'

export default defineType({
  name: 'restaurant',
  title: 'restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitutd of the restaurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude of the restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a rating from (1-5 Stars)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    }),
    defineField({
      name: "type",
      type: "reference",
      to: [{ type: "category" }],
      title: "Category",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference" , to: [{ type: "dish" }] }]
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
