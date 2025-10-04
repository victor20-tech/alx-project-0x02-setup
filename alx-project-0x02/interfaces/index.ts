 export interface CardProps {
  title: string;
  content: string;
}

export interface NewPostData {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: NewPostData) => void; 
}

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  size: ButtonSize;
  shape: ButtonShape;
  color?: 'primary' | 'secondary' | 'danger'; 
}