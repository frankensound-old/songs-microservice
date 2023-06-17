require('dotenv').config()
import { S3Client } from "@aws-sdk/client-s3"

const REGION = process.env["REGION"]
const s3Client = new S3Client({ region: REGION })
const createPresignedUrlWithClient = ({ region, bucket, key }) => {
    const client = new S3Client({ region })
    const command = new PutObjectCommand({ Bucket: bucket, Key: key })
    return getSignedUrl(client, command, { expiresIn: 3600 })
}

export { s3Client, createPresignedUrlWithClient }