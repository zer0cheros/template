import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

type Data = {
  message: string,
  data?: {
    messsage:string
  }
}

export default function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
    if(req.method === 'GET'){
        const data = fs.readFileSync('data.json', { encoding: 'utf-8'})
        res.status(200).json(JSON.parse(data))
    }
    else if(req.method === 'POST'){
        res.status(200).json({message: 'post request'})
    }
}
