import { Skill } from "./skills"

export type ProjectType={
    _id:string
    name:string
    slug:string
    image:string
    description:string
    url:string
    _createdAt:string
    tech:Skill[]
    title:string
}