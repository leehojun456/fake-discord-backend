import { Injectable } from '@nestjs/common';
import {
  PutObjectCommand,
  GetObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class S3Service {
  private s3Client = createS3Client();
  private readonly bucketName = 'discord';

  async uploadFile(
    key: string,
    buffer: Buffer,
    contentType: string,
  ): Promise<void> {
    const uploadParams = {
      Bucket: this.bucketName,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    };

    try {
      const command = new PutObjectCommand(uploadParams);
      await this.s3Client.send(command);
    } catch (error) {
      console.error('파일 업로드 실패:', error);
      throw new Error('파일 업로드 실패');
    }
  }

  async getSignedUrl(key: string, expiresIn: number = 3600): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });

    try {
      return await getSignedUrl(this.s3Client, command, { expiresIn });
    } catch (error) {
      console.error('서명 URL 생성 실패:', error);
      throw new Error('URL 생성 실패');
    }
  }
}

const createS3Client = () => {
  const bucketName = 'discord';
  const region = 'kr';
  const endpoint = 'https://kr.ncloudstorage.com'; // 올바른 NCP Object Storage endpoint
  return new S3Client({
    region: 'kr',
    endpoint: endpoint,
    credentials: {
      accessKeyId: 'ncp_iam_BPAMKR2ZV9JQxbVn7iaw',
      secretAccessKey: 'ncp_iam_BPKMKRWUrZZanwGUTze3BnVV74TWtEI6uv',
    },
    forcePathStyle: true,
  });
};
