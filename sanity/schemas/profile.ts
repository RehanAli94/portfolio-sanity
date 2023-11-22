import { defineField, defineType } from "sanity";

export default defineType({
    name: "profile",
    title: "profile",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "smallbio",
            title: "Small Bio",
            type: "string",
        }),
        defineField({
            name: "profession",
            title: "Profession",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "biotitle",
            title: "Bio Title",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: "secondimage",
            title: "Second Image",
            type: "image",
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'normal',value: 'normal',}],
                    lists: [],
                }
            ]
        }),
        defineField({
            name:'socials',
            title:'Socials',
            type:'array',
            of:[{type:'reference',to:{type:'social'}}]
        })
    ]
})
