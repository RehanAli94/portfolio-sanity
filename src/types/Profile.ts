import {PortableTextBlock} from 'sanity'
import { Social } from './Social'

export type Profile={
     biotitle: string[]
     socials: any
     _id:string,
     name:string,
     smallbio:string,
     profession:string[],
     image:string,
     secondImage:string,
     bio:PortableTextBlock[],
     social:Social[],
}