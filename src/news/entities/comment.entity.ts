export class Comment {
  id: number;
  author: string;
  text: string;
  date: string;
  attachments?:string[];
  comments: Comment[];
}
