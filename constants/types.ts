export type Post = {
  id: number;
  title: string;
  body: string;
  author: {
    id: number;
    profile_image: string | undefined;
    is_fake: number;
    username: string;
    name: string;
    email: string | null;
    email_verified_at: string | null;
    remember_token: string | null;
    created_at: string;
    updated_at: string;
  };
  image: string | undefined;
  tags: any[];
  created_at: string;
  comments_count: number;
};
