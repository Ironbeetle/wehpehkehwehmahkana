"use server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function handler(req, res) {
    if (req.method === 'POST') {
        const { topic, title, content } = req.body;

        try {
            const newPost = await prisma.post.create({
                data: {
                    topic,
                    title,
                    content,
                },
            });

            res.status(201).json(newPost);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred while creating the post.' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
}

export const getVideo = async() =>{
    try{
        const videos = await prisma.post.findMany({
            where: {
                topic: id
            }
        });
    return videos;
    }catch(error){
        console.log(error);
    }finally{
        await prisma.$disconnect();
    }
}