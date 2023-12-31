import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";


export async function getSocials() {
    const data = await client.fetch(groq`*[_type == "social"]{url,title}`);

    return data;
}

export async function getProfile() {
    const data = await client.fetch(groq`*[_type == "profile"][0]{
        ...,
        'image': image.asset->url,
        'secondImage': secondImage.asset->url,
        'socials': socials[]->,
        }`);
    return data;
}
export async function getAbout() {
    const data = await client.fetch(groq`*[_type == "profile"][0]{
        bio,
        'secondImage': secondimage.asset->url
        }`);
    return data;
}
export async function getSkills() {
    const data = await client.fetch(groq`*[_type == "skill"]{
        _id,
        title,
        'image': image.asset->url,
        progress
        }`);
    return data;
}
export async function getProjects() {
    const data = await client.fetch(groq`*[_type == "project"]{
        ...,
        'image': image.asset->url,
        
        }`);
    return data;
}
export async function getBlogPosts() {
    const data = await client.fetch(groq`*[_type == "post"]{
        ...,
        'mainImage': mainImage.asset->url,
        author->,
        }`);
    return data;
}
export async function getBlogPost(slug: string) {
    const data = await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]{
        ...,
        title,
        'mainImage': mainImage.asset->url,
        'author': author->,
        categories[]->
        }`, { slug });
    return data;
}
export async function getProject(_id: string) {
    const data = await client.fetch(groq`*[_type == "project" && _id == $_id][0]{
        ...,
        'image': image.asset->url,
        tech[]->
        }`, { _id });
    return data;
}