import { PortableTextBlock, Slug } from "sanity"
import { Profile } from "./Profile"
import { Category } from "./Category"

export type BlogPosts={
    
    _id:string
    title:string
    arthor:Profile
    mainImage:string
    body:PortableTextBlock,
    slug:Slug
    publishedAt:string
    categories:Category[]
}